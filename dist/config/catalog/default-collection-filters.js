"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCollectionFilters = exports.variantNameCollectionFilter = exports.facetValueCollectionFilter = void 0;
const generated_types_1 = require("@vendure/common/lib/generated-types");
const nanoid_1 = require("nanoid");
const errors_1 = require("../../common/error/errors");
const product_variant_entity_1 = require("../../entity/product-variant/product-variant.entity");
const collection_filter_1 = require("./collection-filter");
/**
 * Filters for ProductVariants having the given facetValueIds (including parent Product)
 */
exports.facetValueCollectionFilter = new collection_filter_1.CollectionFilter({
    args: {
        facetValueIds: {
            type: 'ID',
            list: true,
            ui: {
                component: 'facet-value-form-input',
            },
        },
        containsAny: { type: 'boolean' },
    },
    code: 'facet-value-filter',
    description: [{ languageCode: generated_types_1.LanguageCode.en, value: 'Filter by FacetValues' }],
    apply: (qb, args) => {
        const ids = args.facetValueIds;
        if (ids.length) {
            // uuid IDs can include `-` chars, which we cannot use in a TypeORM key name.
            const safeIdsConcat = ids.join('_').replace(/-/g, '_');
            const idsName = `ids_${safeIdsConcat}`;
            const countName = `count_${safeIdsConcat}`;
            const productFacetValues = qb.connection
                .createQueryBuilder(product_variant_entity_1.ProductVariant, 'product_variant')
                .select('product_variant.id', 'variant_id')
                .addSelect('facet_value.id', 'facet_value_id')
                .leftJoin('product_variant.facetValues', 'facet_value')
                .where(`facet_value.id IN (:...${idsName})`);
            const variantFacetValues = qb.connection
                .createQueryBuilder(product_variant_entity_1.ProductVariant, 'product_variant')
                .select('product_variant.id', 'variant_id')
                .addSelect('facet_value.id', 'facet_value_id')
                .leftJoin('product_variant.product', 'product')
                .leftJoin('product.facetValues', 'facet_value')
                .where(`facet_value.id IN (:...${idsName})`);
            const union = qb.connection
                .createQueryBuilder()
                .select('union_table.variant_id')
                .from(`(${productFacetValues.getQuery()} UNION ${variantFacetValues.getQuery()})`, 'union_table')
                .groupBy('variant_id')
                .having(`COUNT(*) >= :${countName}`);
            const variantIds = qb.connection
                .createQueryBuilder()
                .select('variant_ids_table.variant_id')
                .from(`(${union.getQuery()})`, 'variant_ids_table');
            qb.andWhere(`productVariant.id IN (${variantIds.getQuery()})`).setParameters({
                [idsName]: ids,
                [countName]: args.containsAny ? 1 : ids.length,
            });
        }
        else {
            // If no facetValueIds are specified, no ProductVariants will be matched.
            qb.andWhere('1 = 0');
        }
        return qb;
    },
});
exports.variantNameCollectionFilter = new collection_filter_1.CollectionFilter({
    args: {
        operator: {
            type: 'string',
            ui: {
                component: 'select-form-input',
                options: [
                    { value: 'startsWith' },
                    { value: 'endsWith' },
                    { value: 'contains' },
                    { value: 'doesNotContain' },
                ],
            },
        },
        term: { type: 'string' },
    },
    code: 'variant-name-filter',
    description: [{ languageCode: generated_types_1.LanguageCode.en, value: 'Filter by ProductVariant name' }],
    apply: (qb, args) => {
        const translationAlias = `variant_name_filter_translation`;
        const nanoid = nanoid_1.customAlphabet('123456789abcdefghijklmnopqrstuvwxyz', 6);
        const termName = `term_${nanoid()}`;
        const hasJoinOnTranslations = !!qb.expressionMap.joinAttributes.find(ja => ja.entityOrProperty === 'productVariant.translations');
        if (!hasJoinOnTranslations) {
            qb.leftJoin('productVariant.translations', translationAlias);
        }
        const LIKE = qb.connection.options.type === 'postgres' ? 'ILIKE' : 'LIKE';
        switch (args.operator) {
            case 'contains':
                return qb.andWhere(`${translationAlias}.name ${LIKE} :${termName}`, {
                    [termName]: `%${args.term}%`,
                });
            case 'doesNotContain':
                return qb.andWhere(`${translationAlias}.name NOT ${LIKE} :${termName}`, {
                    [termName]: `%${args.term}%`,
                });
            case 'startsWith':
                return qb.andWhere(`${translationAlias}.name ${LIKE} :${termName}`, {
                    [termName]: `${args.term}%`,
                });
            case 'endsWith':
                return qb.andWhere(`${translationAlias}.name ${LIKE} :${termName}`, {
                    [termName]: `%${args.term}`,
                });
            default:
                throw new errors_1.UserInputError(`${args.operator} is not a valid operator`);
        }
    },
});
exports.defaultCollectionFilters = [exports.facetValueCollectionFilter, exports.variantNameCollectionFilter];
//# sourceMappingURL=default-collection-filters.js.map