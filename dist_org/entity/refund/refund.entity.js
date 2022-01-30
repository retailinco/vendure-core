"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refund = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../base/base.entity");
const entity_id_decorator_1 = require("../entity-id.decorator");
const order_item_entity_1 = require("../order-item/order-item.entity");
const payment_entity_1 = require("../payment/payment.entity");
let Refund = class Refund extends base_entity_1.VendureEntity {
    constructor(input) {
        super(input);
    }
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Refund.prototype, "items", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Refund.prototype, "shipping", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Refund.prototype, "adjustment", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Refund.prototype, "total", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Refund.prototype, "method", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Refund.prototype, "reason", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], Refund.prototype, "state", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Refund.prototype, "transactionId", void 0);
__decorate([
    typeorm_1.OneToMany(type => order_item_entity_1.OrderItem, orderItem => orderItem.refund),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Refund.prototype, "orderItems", void 0);
__decorate([
    typeorm_1.ManyToOne(type => payment_entity_1.Payment),
    typeorm_1.JoinColumn(),
    __metadata("design:type", payment_entity_1.Payment)
], Refund.prototype, "payment", void 0);
__decorate([
    entity_id_decorator_1.EntityId(),
    __metadata("design:type", Object)
], Refund.prototype, "paymentId", void 0);
__decorate([
    typeorm_1.Column('simple-json'),
    __metadata("design:type", Object)
], Refund.prototype, "metadata", void 0);
Refund = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Refund);
exports.Refund = Refund;
//# sourceMappingURL=refund.entity.js.map