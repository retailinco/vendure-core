import { ID } from '@vendure/common/lib/shared-types';
import { RequestContext } from '../../api/common/request-context';
import { Zone } from '../../entity';
import { VendureEvent } from '../vendure-event';
/**
 * @description
 * This event is fired whenever a {@link Zone} gets {@link Country} members assigned or removed
 * The `entity` property contains the zone with the already updated member field.
 *
 * @docsCategory events
 * @docsPage Event Types
 */
export declare class ZoneMembersEvent extends VendureEvent {
    ctx: RequestContext;
    entity: Zone;
    type: 'assigned' | 'removed';
    memberIds: ID[];
    constructor(ctx: RequestContext, entity: Zone, type: 'assigned' | 'removed', memberIds: ID[]);
}
