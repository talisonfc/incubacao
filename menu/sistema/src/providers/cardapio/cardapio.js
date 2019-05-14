"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var API_URL = "http://localhost:3000";
var CardapioProvider = /** @class */ (function () {
    function CardapioProvider(http) {
        this.http = http;
        console.log('Hello MenuProvider Provider');
    }
    CardapioProvider.prototype.list = function () {
        return this.http.get(API_URL + "/menus");
    };
    CardapioProvider.prototype.save = function (obj) {
        return this.http.post(API_URL + "/menu", obj);
    };
    CardapioProvider.prototype["delete"] = function (id) {
        return this.http["delete"](API_URL + "/menu/" + id);
    };
    CardapioProvider.prototype.getById = function (id) {
        return this.http.get(API_URL + "/menu/" + id);
    };
    CardapioProvider.prototype.addCategoria = function (obj) {
        return this.http.put(API_URL + "/menu", obj);
    };
    CardapioProvider = __decorate([
        core_1.Injectable()
    ], CardapioProvider);
    return CardapioProvider;
}());
exports.CardapioProvider = CardapioProvider;
