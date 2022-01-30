"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSortParams = void 0;
const unique_1 = require("@vendure/common/lib/unique");
const errors_1 = require("../../../common/error/errors");
const connection_utils_1 = require("./connection-utils");
const get_calculated_columns_1 = require("./get-calculated-columns");
/**
 * Parses the provided SortParameter array against the metadata of the given entity, ensuring that only
 * valid fields are being sorted against. The output assumes
 * @param connection
 * @param entity
 * @param sortParams
 */
function parseSortParams(connection, entity, sortParams, customPropertyMap) {
    if (!sortParams || Object.keys(sortParams).length === 0) {
        return {};
    }
    const { columns, translationColumns, alias } = connection_utils_1.getColumnMetadata(connection, entity);
    const calculatedColumns = get_calculated_columns_1.getCalculatedColumns(entity);
    const output = {};
    for (const [key, order] of Object.entries(sortParams)) {
        const calculatedColumnDef = calculatedColumns.find(c => c.name === key);
        const matchingColumn = columns.find(c => c.propertyName === key);
        if (matchingColumn) {
            output[`${alias}.${matchingColumn.propertyPath}`] = order;
        }
        else if (translationColumns.find(c => c.propertyName === key)) {
            const translationsAlias = connection.namingStrategy.eagerJoinRelationAlias(alias, 'translations');
            output[`${translationsAlias}.${key}`] = order;
        }
        else if (calculatedColumnDef) {
            const instruction = calculatedColumnDef.listQuery;
            if (instruction) {
                output[connection_utils_1.escapeCalculatedColumnExpression(connection, instruction.expression)] = order;
            }
        }
        else if (customPropertyMap === null || customPropertyMap === void 0 ? void 0 : customPropertyMap[key]) {
            output[customPropertyMap[key]] = order;
        }
        else {
            throw new errors_1.UserInputError('error.invalid-sort-field', {
                fieldName: key,
                validFields: [
                    ...getValidSortFields([...columns, ...translationColumns]),
                    ...calculatedColumns.map(c => c.name.toString()),
                ].join(', '),
            });
        }
    }
    return output;
}
exports.parseSortParams = parseSortParams;
function getValidSortFields(columns) {
    return unique_1.unique(columns.map(c => c.propertyName));
}
//# sourceMappingURL=parse-sort-params.js.map