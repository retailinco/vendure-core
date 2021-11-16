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
exports.CollectionAsset = void 0;
const typeorm_1 = require("typeorm");
const orderable_asset_entity_1 = require("../asset/orderable-asset.entity");
const collection_entity_1 = require("./collection.entity");
let CollectionAsset = class CollectionAsset extends orderable_asset_entity_1.OrderableAsset {
    constructor(input) {
        super(input);
    }
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Object)
], CollectionAsset.prototype, "collectionId", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => collection_entity_1.Collection, (collection) => collection.assets, { onDelete: 'CASCADE' }),
    __metadata("design:type", collection_entity_1.Collection)
], CollectionAsset.prototype, "collection", void 0);
CollectionAsset = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], CollectionAsset);
exports.CollectionAsset = CollectionAsset;
//# sourceMappingURL=collection-asset.entity.js.map