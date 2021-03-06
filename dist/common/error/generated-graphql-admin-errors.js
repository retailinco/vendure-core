"use strict";
// tslint:disable
/** This file was generated by the graphql-errors-plugin, which is part of the "codegen" npm script. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminErrorOperationTypeResolvers = exports.SettlePaymentError = exports.RefundStateTransitionError = exports.RefundPaymentIdMissingError = exports.RefundOrderStateError = exports.QuantityTooGreatError = exports.ProductOptionInUseError = exports.PaymentStateTransitionError = exports.PaymentOrderMismatchError = exports.PaymentMethodMissingError = exports.OrderStateTransitionError = exports.OrderModificationStateError = exports.OrderLimitError = exports.NothingToRefundError = exports.NoChangesSpecifiedError = exports.NegativeQuantityError = exports.NativeAuthStrategyError = exports.MultipleOrderError = exports.MissingConditionsError = exports.MimeTypeError = exports.ManualPaymentStateError = exports.LanguageNotAvailableError = exports.ItemsAlreadyFulfilledError = exports.InvalidFulfillmentHandlerError = exports.InvalidCredentialsError = exports.InsufficientStockOnHandError = exports.InsufficientStockError = exports.FulfillmentStateTransitionError = exports.EmptyOrderLineSelectionError = exports.EmailAddressConflictError = exports.CreateFulfillmentError = exports.ChannelDefaultLanguageError = exports.CancelActiveOrderError = exports.AlreadyRefundedError = exports.ErrorResult = void 0;
class ErrorResult {
}
exports.ErrorResult = ErrorResult;
class AlreadyRefundedError extends ErrorResult {
    constructor(refundId) {
        super();
        this.refundId = refundId;
        this.__typename = 'AlreadyRefundedError';
        this.errorCode = 'ALREADY_REFUNDED_ERROR';
        this.message = 'ALREADY_REFUNDED_ERROR';
    }
}
exports.AlreadyRefundedError = AlreadyRefundedError;
class CancelActiveOrderError extends ErrorResult {
    constructor(orderState) {
        super();
        this.orderState = orderState;
        this.__typename = 'CancelActiveOrderError';
        this.errorCode = 'CANCEL_ACTIVE_ORDER_ERROR';
        this.message = 'CANCEL_ACTIVE_ORDER_ERROR';
    }
}
exports.CancelActiveOrderError = CancelActiveOrderError;
class ChannelDefaultLanguageError extends ErrorResult {
    constructor(language, channelCode) {
        super();
        this.language = language;
        this.channelCode = channelCode;
        this.__typename = 'ChannelDefaultLanguageError';
        this.errorCode = 'CHANNEL_DEFAULT_LANGUAGE_ERROR';
        this.message = 'CHANNEL_DEFAULT_LANGUAGE_ERROR';
    }
}
exports.ChannelDefaultLanguageError = ChannelDefaultLanguageError;
class CreateFulfillmentError extends ErrorResult {
    constructor(fulfillmentHandlerError) {
        super();
        this.fulfillmentHandlerError = fulfillmentHandlerError;
        this.__typename = 'CreateFulfillmentError';
        this.errorCode = 'CREATE_FULFILLMENT_ERROR';
        this.message = 'CREATE_FULFILLMENT_ERROR';
    }
}
exports.CreateFulfillmentError = CreateFulfillmentError;
class EmailAddressConflictError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'EmailAddressConflictError';
        this.errorCode = 'EMAIL_ADDRESS_CONFLICT_ERROR';
        this.message = 'EMAIL_ADDRESS_CONFLICT_ERROR';
    }
}
exports.EmailAddressConflictError = EmailAddressConflictError;
class EmptyOrderLineSelectionError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'EmptyOrderLineSelectionError';
        this.errorCode = 'EMPTY_ORDER_LINE_SELECTION_ERROR';
        this.message = 'EMPTY_ORDER_LINE_SELECTION_ERROR';
    }
}
exports.EmptyOrderLineSelectionError = EmptyOrderLineSelectionError;
class FulfillmentStateTransitionError extends ErrorResult {
    constructor(transitionError, fromState, toState) {
        super();
        this.transitionError = transitionError;
        this.fromState = fromState;
        this.toState = toState;
        this.__typename = 'FulfillmentStateTransitionError';
        this.errorCode = 'FULFILLMENT_STATE_TRANSITION_ERROR';
        this.message = 'FULFILLMENT_STATE_TRANSITION_ERROR';
    }
}
exports.FulfillmentStateTransitionError = FulfillmentStateTransitionError;
class InsufficientStockError extends ErrorResult {
    constructor(quantityAvailable, order) {
        super();
        this.quantityAvailable = quantityAvailable;
        this.order = order;
        this.__typename = 'InsufficientStockError';
        this.errorCode = 'INSUFFICIENT_STOCK_ERROR';
        this.message = 'INSUFFICIENT_STOCK_ERROR';
    }
}
exports.InsufficientStockError = InsufficientStockError;
class InsufficientStockOnHandError extends ErrorResult {
    constructor(productVariantId, productVariantName, stockOnHand) {
        super();
        this.productVariantId = productVariantId;
        this.productVariantName = productVariantName;
        this.stockOnHand = stockOnHand;
        this.__typename = 'InsufficientStockOnHandError';
        this.errorCode = 'INSUFFICIENT_STOCK_ON_HAND_ERROR';
        this.message = 'INSUFFICIENT_STOCK_ON_HAND_ERROR';
    }
}
exports.InsufficientStockOnHandError = InsufficientStockOnHandError;
class InvalidCredentialsError extends ErrorResult {
    constructor(authenticationError) {
        super();
        this.authenticationError = authenticationError;
        this.__typename = 'InvalidCredentialsError';
        this.errorCode = 'INVALID_CREDENTIALS_ERROR';
        this.message = 'INVALID_CREDENTIALS_ERROR';
    }
}
exports.InvalidCredentialsError = InvalidCredentialsError;
class InvalidFulfillmentHandlerError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'InvalidFulfillmentHandlerError';
        this.errorCode = 'INVALID_FULFILLMENT_HANDLER_ERROR';
        this.message = 'INVALID_FULFILLMENT_HANDLER_ERROR';
    }
}
exports.InvalidFulfillmentHandlerError = InvalidFulfillmentHandlerError;
class ItemsAlreadyFulfilledError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'ItemsAlreadyFulfilledError';
        this.errorCode = 'ITEMS_ALREADY_FULFILLED_ERROR';
        this.message = 'ITEMS_ALREADY_FULFILLED_ERROR';
    }
}
exports.ItemsAlreadyFulfilledError = ItemsAlreadyFulfilledError;
class LanguageNotAvailableError extends ErrorResult {
    constructor(languageCode) {
        super();
        this.languageCode = languageCode;
        this.__typename = 'LanguageNotAvailableError';
        this.errorCode = 'LANGUAGE_NOT_AVAILABLE_ERROR';
        this.message = 'LANGUAGE_NOT_AVAILABLE_ERROR';
    }
}
exports.LanguageNotAvailableError = LanguageNotAvailableError;
class ManualPaymentStateError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'ManualPaymentStateError';
        this.errorCode = 'MANUAL_PAYMENT_STATE_ERROR';
        this.message = 'MANUAL_PAYMENT_STATE_ERROR';
    }
}
exports.ManualPaymentStateError = ManualPaymentStateError;
class MimeTypeError extends ErrorResult {
    constructor(fileName, mimeType) {
        super();
        this.fileName = fileName;
        this.mimeType = mimeType;
        this.__typename = 'MimeTypeError';
        this.errorCode = 'MIME_TYPE_ERROR';
        this.message = 'MIME_TYPE_ERROR';
    }
}
exports.MimeTypeError = MimeTypeError;
class MissingConditionsError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'MissingConditionsError';
        this.errorCode = 'MISSING_CONDITIONS_ERROR';
        this.message = 'MISSING_CONDITIONS_ERROR';
    }
}
exports.MissingConditionsError = MissingConditionsError;
class MultipleOrderError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'MultipleOrderError';
        this.errorCode = 'MULTIPLE_ORDER_ERROR';
        this.message = 'MULTIPLE_ORDER_ERROR';
    }
}
exports.MultipleOrderError = MultipleOrderError;
class NativeAuthStrategyError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'NativeAuthStrategyError';
        this.errorCode = 'NATIVE_AUTH_STRATEGY_ERROR';
        this.message = 'NATIVE_AUTH_STRATEGY_ERROR';
    }
}
exports.NativeAuthStrategyError = NativeAuthStrategyError;
class NegativeQuantityError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'NegativeQuantityError';
        this.errorCode = 'NEGATIVE_QUANTITY_ERROR';
        this.message = 'NEGATIVE_QUANTITY_ERROR';
    }
}
exports.NegativeQuantityError = NegativeQuantityError;
class NoChangesSpecifiedError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'NoChangesSpecifiedError';
        this.errorCode = 'NO_CHANGES_SPECIFIED_ERROR';
        this.message = 'NO_CHANGES_SPECIFIED_ERROR';
    }
}
exports.NoChangesSpecifiedError = NoChangesSpecifiedError;
class NothingToRefundError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'NothingToRefundError';
        this.errorCode = 'NOTHING_TO_REFUND_ERROR';
        this.message = 'NOTHING_TO_REFUND_ERROR';
    }
}
exports.NothingToRefundError = NothingToRefundError;
class OrderLimitError extends ErrorResult {
    constructor(maxItems) {
        super();
        this.maxItems = maxItems;
        this.__typename = 'OrderLimitError';
        this.errorCode = 'ORDER_LIMIT_ERROR';
        this.message = 'ORDER_LIMIT_ERROR';
    }
}
exports.OrderLimitError = OrderLimitError;
class OrderModificationStateError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'OrderModificationStateError';
        this.errorCode = 'ORDER_MODIFICATION_STATE_ERROR';
        this.message = 'ORDER_MODIFICATION_STATE_ERROR';
    }
}
exports.OrderModificationStateError = OrderModificationStateError;
class OrderStateTransitionError extends ErrorResult {
    constructor(transitionError, fromState, toState) {
        super();
        this.transitionError = transitionError;
        this.fromState = fromState;
        this.toState = toState;
        this.__typename = 'OrderStateTransitionError';
        this.errorCode = 'ORDER_STATE_TRANSITION_ERROR';
        this.message = 'ORDER_STATE_TRANSITION_ERROR';
    }
}
exports.OrderStateTransitionError = OrderStateTransitionError;
class PaymentMethodMissingError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'PaymentMethodMissingError';
        this.errorCode = 'PAYMENT_METHOD_MISSING_ERROR';
        this.message = 'PAYMENT_METHOD_MISSING_ERROR';
    }
}
exports.PaymentMethodMissingError = PaymentMethodMissingError;
class PaymentOrderMismatchError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'PaymentOrderMismatchError';
        this.errorCode = 'PAYMENT_ORDER_MISMATCH_ERROR';
        this.message = 'PAYMENT_ORDER_MISMATCH_ERROR';
    }
}
exports.PaymentOrderMismatchError = PaymentOrderMismatchError;
class PaymentStateTransitionError extends ErrorResult {
    constructor(transitionError, fromState, toState) {
        super();
        this.transitionError = transitionError;
        this.fromState = fromState;
        this.toState = toState;
        this.__typename = 'PaymentStateTransitionError';
        this.errorCode = 'PAYMENT_STATE_TRANSITION_ERROR';
        this.message = 'PAYMENT_STATE_TRANSITION_ERROR';
    }
}
exports.PaymentStateTransitionError = PaymentStateTransitionError;
class ProductOptionInUseError extends ErrorResult {
    constructor(optionGroupCode, productVariantCount) {
        super();
        this.optionGroupCode = optionGroupCode;
        this.productVariantCount = productVariantCount;
        this.__typename = 'ProductOptionInUseError';
        this.errorCode = 'PRODUCT_OPTION_IN_USE_ERROR';
        this.message = 'PRODUCT_OPTION_IN_USE_ERROR';
    }
}
exports.ProductOptionInUseError = ProductOptionInUseError;
class QuantityTooGreatError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'QuantityTooGreatError';
        this.errorCode = 'QUANTITY_TOO_GREAT_ERROR';
        this.message = 'QUANTITY_TOO_GREAT_ERROR';
    }
}
exports.QuantityTooGreatError = QuantityTooGreatError;
class RefundOrderStateError extends ErrorResult {
    constructor(orderState) {
        super();
        this.orderState = orderState;
        this.__typename = 'RefundOrderStateError';
        this.errorCode = 'REFUND_ORDER_STATE_ERROR';
        this.message = 'REFUND_ORDER_STATE_ERROR';
    }
}
exports.RefundOrderStateError = RefundOrderStateError;
class RefundPaymentIdMissingError extends ErrorResult {
    constructor() {
        super();
        this.__typename = 'RefundPaymentIdMissingError';
        this.errorCode = 'REFUND_PAYMENT_ID_MISSING_ERROR';
        this.message = 'REFUND_PAYMENT_ID_MISSING_ERROR';
    }
}
exports.RefundPaymentIdMissingError = RefundPaymentIdMissingError;
class RefundStateTransitionError extends ErrorResult {
    constructor(transitionError, fromState, toState) {
        super();
        this.transitionError = transitionError;
        this.fromState = fromState;
        this.toState = toState;
        this.__typename = 'RefundStateTransitionError';
        this.errorCode = 'REFUND_STATE_TRANSITION_ERROR';
        this.message = 'REFUND_STATE_TRANSITION_ERROR';
    }
}
exports.RefundStateTransitionError = RefundStateTransitionError;
class SettlePaymentError extends ErrorResult {
    constructor(paymentErrorMessage) {
        super();
        this.paymentErrorMessage = paymentErrorMessage;
        this.__typename = 'SettlePaymentError';
        this.errorCode = 'SETTLE_PAYMENT_ERROR';
        this.message = 'SETTLE_PAYMENT_ERROR';
    }
}
exports.SettlePaymentError = SettlePaymentError;
const errorTypeNames = new Set(['AlreadyRefundedError', 'CancelActiveOrderError', 'ChannelDefaultLanguageError', 'CreateFulfillmentError', 'EmailAddressConflictError', 'EmptyOrderLineSelectionError', 'FulfillmentStateTransitionError', 'InsufficientStockError', 'InsufficientStockOnHandError', 'InvalidCredentialsError', 'InvalidFulfillmentHandlerError', 'ItemsAlreadyFulfilledError', 'LanguageNotAvailableError', 'ManualPaymentStateError', 'MimeTypeError', 'MissingConditionsError', 'MultipleOrderError', 'NativeAuthStrategyError', 'NegativeQuantityError', 'NoChangesSpecifiedError', 'NothingToRefundError', 'OrderLimitError', 'OrderModificationStateError', 'OrderStateTransitionError', 'PaymentMethodMissingError', 'PaymentOrderMismatchError', 'PaymentStateTransitionError', 'ProductOptionInUseError', 'QuantityTooGreatError', 'RefundOrderStateError', 'RefundPaymentIdMissingError', 'RefundStateTransitionError', 'SettlePaymentError']);
function isGraphQLError(input) {
    return input instanceof ErrorResult || errorTypeNames.has(input.__typename);
}
exports.adminErrorOperationTypeResolvers = {
    CreateAssetResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Asset';
        },
    },
    NativeAuthenticationResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'CurrentUser';
        },
    },
    AuthenticationResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'CurrentUser';
        },
    },
    CreateChannelResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Channel';
        },
    },
    UpdateChannelResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Channel';
        },
    },
    CreateCustomerResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Customer';
        },
    },
    UpdateCustomerResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Customer';
        },
    },
    UpdateGlobalSettingsResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'GlobalSettings';
        },
    },
    SettlePaymentResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Payment';
        },
    },
    AddFulfillmentToOrderResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Fulfillment';
        },
    },
    CancelOrderResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Order';
        },
    },
    RefundOrderResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Refund';
        },
    },
    SettleRefundResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Refund';
        },
    },
    TransitionOrderToStateResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Order';
        },
    },
    TransitionFulfillmentToStateResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Fulfillment';
        },
    },
    TransitionPaymentToStateResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Payment';
        },
    },
    ModifyOrderResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Order';
        },
    },
    AddManualPaymentToOrderResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Order';
        },
    },
    RemoveOptionGroupFromProductResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Product';
        },
    },
    CreatePromotionResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Promotion';
        },
    },
    UpdatePromotionResult: {
        __resolveType(value) {
            return isGraphQLError(value) ? value.__typename : 'Promotion';
        },
    },
};
//# sourceMappingURL=generated-graphql-admin-errors.js.map