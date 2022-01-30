import { CreateCustomerInput, UpdateCustomerInput } from '@vendure/common/lib/generated-types';
import { ID } from '@vendure/common/lib/shared-types';
import { RequestContext } from '../../api/common/request-context';
import { Customer } from '../../entity/customer/customer.entity';
import { VendureEntityEvent } from '../vendure-entity-event';
declare type CustomerInputTypes = CreateCustomerInput | UpdateCustomerInput | (Partial<CreateCustomerInput> & {
    emailAddress: string;
}) | ID;
/**
 * @description
 * This event is fired whenever a {@link Customer} is added, updated
 * or deleted.
 *
 * @docsCategory events
 * @docsPage Event Types
 */
export declare class CustomerEvent extends VendureEntityEvent<Customer, CustomerInputTypes> {
    constructor(ctx: RequestContext, entity: Customer, type: 'created' | 'updated' | 'deleted', input?: CustomerInputTypes);
    /**
     * Return an customer field to become compatible with the
     * deprecated old version of CustomerEvent
     * @deprecated Use `entity` instead
     * @since 1.4
     */
    get customer(): Customer;
}
export {};
