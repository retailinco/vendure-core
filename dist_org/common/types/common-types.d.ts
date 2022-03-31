import { Type } from '@vendure/common/lib/shared-types';
import { VendureEntity } from '../../entity/base/base.entity';
import { Channel } from '../../entity/channel/channel.entity';
import { Tag } from '../../entity/tag/tag.entity';
import { LocaleString } from './locale-types';
/**
 * @description
 * Entities which can be assigned to Channels should implement this interface.
 *
 * @docsCategory entities
 * @docsPage interfaces
 */
export interface ChannelAware {
    channels: Channel[];
}
/**
 * @description
 * Entities which can be soft deleted should implement this interface.
 *
 * @docsCategory entities
 * @docsPage interfaces
 */
export interface SoftDeletable {
    deletedAt: Date | null;
}
/**
 * @description
 * Entities which can be ordered relative to their siblings in a list.
 *
 * @docsCategory entities
 * @docsPage interfaces
 */
export interface Orderable {
    position: number;
}
/**
 * @description
 * Entities which can have Tags applied to them.
 *
 * @docsCategory entities
 * @docsPage interfaces
 */
export interface Taggable {
    tags: Tag[];
}
/**
 * Creates a type based on T, but with all properties non-optional
 * and readonly.
 */
export declare type ReadOnlyRequired<T> = {
    +readonly [K in keyof T]-?: T[K];
};
/**
 * Given an array type e.g. Array<string>, return the inner type e.g. string.
 */
export declare type UnwrappedArray<T extends any[]> = T[number];
/**
 * Parameters for list queries
 */
export interface ListQueryOptions<T extends VendureEntity> {
    take?: number | null;
    skip?: number | null;
    sort?: NullOptionals<SortParameter<T>> | null;
    filter?: NullOptionals<FilterParameter<T>> | null;
}
/**
 * Returns a type T where any optional fields also have the "null" type added.
 * This is needed to provide interop with the Apollo-generated interfaces, where
 * nullable fields have the type `field?: <type> | null`.
 */
export declare type NullOptionals<T> = {
    [K in keyof T]: undefined extends T[K] ? NullOptionals<T[K]> | null : NullOptionals<T[K]>;
};
export declare type SortOrder = 'ASC' | 'DESC';
export declare type PrimitiveFields<T extends VendureEntity> = {
    [K in keyof T]: T[K] extends LocaleString | number | string | boolean | Date ? K : never;
}[keyof T];
export declare type SortParameter<T extends VendureEntity> = {
    [K in PrimitiveFields<T>]?: SortOrder;
};
export declare type CustomFieldSortParameter = {
    [customField: string]: SortOrder;
};
export declare type FilterParameter<T extends VendureEntity> = {
    [K in PrimitiveFields<T>]?: T[K] extends string | LocaleString ? StringOperators : T[K] extends number ? NumberOperators : T[K] extends boolean ? BooleanOperators : T[K] extends Date ? DateOperators : StringOperators;
};
export interface StringOperators {
    eq?: string;
    notEq?: string;
    contains?: string;
    notContains?: string;
    in?: string[];
    notIn?: string[];
    regex?: string;
}
export interface BooleanOperators {
    eq?: boolean;
}
export interface NumberRange {
    start: number;
    end: number;
}
export interface NumberOperators {
    eq?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    between?: NumberRange;
}
export interface DateRange {
    start: Date;
    end: Date;
}
export interface DateOperators {
    eq?: Date;
    before?: Date;
    after?: Date;
    between?: DateRange;
}
export declare type PaymentMetadata = {
    [prop: string]: any;
} & {
    public?: any;
};
/**
 * @description
 * The result of the price calculation from the {@link ProductVariantPriceCalculationStrategy} or the
 * {@link OrderItemPriceCalculationStrategy}.
 *
 * @docsCategory Common
 */
export declare type PriceCalculationResult = {
    price: number;
    priceIncludesTax: boolean;
};
export declare type MiddlewareHandler = Type<any> | Function;
/**
 * @description
 * Defines API middleware, set in the {@link ApiOptions}. Middleware can be either
 * [Express middleware](https://expressjs.com/en/guide/using-middleware.html) or [NestJS middleware](https://docs.nestjs.com/middleware).
 *
 * @docsCategory Common
 */
export interface Middleware {
    /**
     * @description
     * The Express middleware function or NestJS `NestMiddleware` class.
     */
    handler: MiddlewareHandler;
    /**
     * @description
     * The route to which this middleware will apply. Pattern based routes are supported as well.
     *
     * The `'ab*cd'` route path will match `abcd`, `ab_cd`, `abecd`, and so on. The characters `?`, `+`, `*`, and `()` may be used in a route path,
     * and are subsets of their regular expression counterparts. The hyphen (`-`) and the dot (`.`) are interpreted literally.
     */
    route: string;
    /**
     * @description
     * When set to `true`, this will cause the middleware to be applied before the Vendure server (and underlying Express server) starts listening
     * for connections. In practical terms this means that the middleware will be at the very start of the middleware stack, before even the
     * `body-parser` middleware which is automatically applied by NestJS. This can be useful in certain cases such as when you need to access the
     * raw unparsed request for a specific route.
     *
     * @since 1.1.0
     * @default false
     */
    beforeListen?: boolean;
}