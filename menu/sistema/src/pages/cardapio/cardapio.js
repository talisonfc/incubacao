"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var cardapio_1 = require("../../model/cardapio");
var CardapioPage = /** @class */ (function () {
    function CardapioPage(navCtrl, navParams, cardapioProvider, categoriaProvider, alertControll) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardapioProvider = cardapioProvider;
        this.categoriaProvider = categoriaProvider;
        this.alertControll = alertControll;
        this.cardapio = new cardapio_1.CardapioModel();
    }
    CardapioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CardapioPage');
        this.cardapioProvider.list().subscribe(function (res) {
            _this.lista = res;
        });
        this.categoriaProvider.list().subscribe(function (res) {
            _this.listaCategoria = res;
        });
    };
    CardapioPage.prototype.criar = function () {
        var _this = this;
        this.cardapioProvider.save(this.cardapio).subscribe(function (res) {
            _this.lista.push(_this.cardapio);
            _this.cardapio = new cardapio_1.CardapioModel();
        });
    };
    CardapioPage.prototype["delete"] = function (id, index) {
        var _this = this;
        this.cardapioProvider["delete"](id).subscribe(function (res) {
            _this.lista.splice(index, 1);
            console.log(index);
        });
    };
    CardapioPage.prototype.addCategoria = function () {
        this.navCtrl.setRoot();
    };
    CardapioPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-cardapio',
            templateUrl: 'cardapio.html'
        })
    ], CardapioPage);
    return CardapioPage;
}());
exports.CardapioPage = CardapioPage;
