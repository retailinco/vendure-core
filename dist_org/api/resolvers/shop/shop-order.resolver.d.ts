import { ActiveOrderResult, AddPaymentToOrderResult, ApplyCouponCodeResult, MutationAddItemToOrderArgs, MutationAddPaymentToOrderArgs, MutationAdjustOrderLineArgs, MutationApplyCouponCodeArgs, MutationRemoveOrderLineArgs, MutationSetCustomerForOrderArgs, MutationSetOrderBillingAddressArgs, MutationSetOrderCustomFieldsArgs, MutationSetOrderShippingAddressArgs, MutationSetOrderShippingMethodArgs, MutationTransitionOrderToStateArgs, PaymentMethodQuote, QueryOrderArgs, QueryOrderByCodeArgs, RemoveOrderItemsResult, SetCustomerForOrderResult, SetOrderShippingMethodResult, ShippingMethodQuote, TransitionOrderToStateResult, UpdateOrderItemsResult } from '@vendure/common/lib/generated-shop-types';
import { QueryCountriesArgs } from '@vendure/common/lib/generated-types';
import { ErrorResultUnion } from '../../../common/error/error-result';
import { Translated } from '../../../common/types/locale-types';
import { ConfigService } from '../../../config';
import { Country } from '../../../entity';
import { Order } from '../../../entity/order/order.entity';
import { ActiveOrderService, CountryService } from '../../../service';
import { CustomerService } from '../../../service/services/customer.service';
import { OrderService } from '../../../service/services/order.service';
import { SessionService } from '../../../service/services/session.service';
import { RequestContext } from '../../common/request-context';
export declare class ShopOrderResolver {
    private orderService;
    private customerService;
    private sessionService;
    private countryService;
    private activeOrderService;
    private configService;
    constructor(orderService: OrderService, customerService: CustomerService, sessionService: SessionService, countryService: CountryService, activeOrderService: ActiveOrderService, configService: ConfigService);
    availableCountries(ctx: RequestContext, args: QueryCountriesArgs): Promise<Array<Translated<Country>>>;
    order(ctx: RequestContext, args: QueryOrderArgs): Promise<Order | undefined>;
    activeOrder(ctx: RequestContext): Promise<Order | undefined>;
    orderByCode(ctx: RequestContext, args: QueryOrderByCodeArgs): Promise<Order | undefined>;
    setOrderShippingAddress(ctx: RequestContext, args: MutationSetOrderShippingAddressArgs): Promise<ErrorResultUnion<ActiveOrderResult, Order>>;
    setOrderBillingAddress(ctx: RequestContext, args: MutationSetOrderBillingAddressArgs): Promise<ErrorResultUnion<ActiveOrderResult, Order>>;
    eligibleShippingMethods(ctx: RequestContext): Promise<ShippingMethodQuote[]>;
    eligiblePaymentMethods(ctx: RequestContext): Promise<PaymentMethodQuote[]>;
    setOrderShippingMethod(ctx: RequestContext, args: MutationSetOrderShippingMethodArgs): Promise<ErrorResultUnion<SetOrderShippingMethodResult, Order>>;
    setOrderCustomFields(ctx: RequestContext, args: MutationSetOrderCustomFieldsArgs): Promise<ErrorResultUnion<ActiveOrderResult, Order>>;
    nextOrderStates(ctx: RequestContext): Promise<ReadonlyArray<string>>;
    transitionOrderToState(ctx: RequestContext, args: MutationTransitionOrderToStateArgs): Promise<ErrorResultUnion<TransitionOrderToStateResult, Order> | undefined>;
    addItemToOrder(ctx: RequestContext, args: MutationAddItemToOrderArgs): Promise<ErrorResultUnion<UpdateOrderItemsResult, Order>>;
    adjustOrderLine(ctx: RequestContext, args: MutationAdjustOrderLineArgs): Promise<ErrorResultUnion<UpdateOrderItemsResult, Order>>;
    removeOrderLine(ctx: RequestContext, args: MutationRemoveOrderLineArgs): Promise<ErrorResultUnion<RemoveOrderItemsResult, Order>>;
    removeAllOrderLines(ctx: RequestContext): Promise<ErrorResultUnion<RemoveOrderItemsResult, Order>>;
    applyCouponCode(ctx: RequestContext, args: MutationApplyCouponCodeArgs): Promise<ErrorResultUnion<ApplyCouponCodeResult, Order>>;
    removeCouponCode(ctx: RequestContext, args: MutationApplyCouponCodeArgs): Promise<Order>;
    addPaymentToOrder(ctx: RequestContext, args: MutationAddPaymentToOrderArgs): Promise<ErrorResultUnion<AddPaymentToOrderResult, Order>>;
    setCustomerForOrder(ctx: RequestContext, args: MutationSetCustomerForOrderArgs): Promise<ErrorResultUnion<SetCustomerForOrderResult, Order>>;
}
