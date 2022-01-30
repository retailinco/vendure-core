import { DeletionResponse, MutationAddMembersToZoneArgs, MutationCreateZoneArgs, MutationDeleteZoneArgs, MutationRemoveMembersFromZoneArgs, MutationUpdateZoneArgs, QueryZoneArgs } from '@vendure/common/lib/generated-types';
import { Zone } from '../../../entity/zone/zone.entity';
import { ZoneService } from '../../../service/services/zone.service';
import { RequestContext } from '../../common/request-context';
export declare class ZoneResolver {
    private zoneService;
    constructor(zoneService: ZoneService);
    zones(ctx: RequestContext): Promise<Zone[]>;
    zone(ctx: RequestContext, args: QueryZoneArgs): Promise<Zone | undefined>;
    createZone(ctx: RequestContext, args: MutationCreateZoneArgs): Promise<Zone>;
    updateZone(ctx: RequestContext, args: MutationUpdateZoneArgs): Promise<Zone>;
    deleteZone(ctx: RequestContext, args: MutationDeleteZoneArgs): Promise<DeletionResponse>;
    addMembersToZone(ctx: RequestContext, args: MutationAddMembersToZoneArgs): Promise<Zone>;
    removeMembersFromZone(ctx: RequestContext, args: MutationRemoveMembersFromZoneArgs): Promise<Zone>;
}
