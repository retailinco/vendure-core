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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryEntityResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const country_entity_1 = require("../../../entity/country/country.entity");
const locale_string_hydrator_1 = require("../../../service/helpers/locale-string-hydrator/locale-string-hydrator");
const request_context_1 = require("../../common/request-context");
const request_context_decorator_1 = require("../../decorators/request-context.decorator");
let CountryEntityResolver = class CountryEntityResolver {
    constructor(localeStringHydrator) {
        this.localeStringHydrator = localeStringHydrator;
    }
    name(ctx, country) {
        return this.localeStringHydrator.hydrateLocaleStringField(ctx, country, 'name');
    }
};
__decorate([
    graphql_1.ResolveField(),
    __param(0, request_context_decorator_1.Ctx()),
    __param(1, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_1.RequestContext, country_entity_1.Country]),
    __metadata("design:returntype", Promise)
], CountryEntityResolver.prototype, "name", null);
CountryEntityResolver = __decorate([
    graphql_1.Resolver('Country'),
    __metadata("design:paramtypes", [locale_string_hydrator_1.LocaleStringHydrator])
], CountryEntityResolver);
exports.CountryEntityResolver = CountryEntityResolver;
//# sourceMappingURL=country-entity.resolver.js.map