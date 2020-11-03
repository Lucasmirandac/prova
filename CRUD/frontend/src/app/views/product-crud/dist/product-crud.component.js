"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductCrudComponent = void 0;
var core_1 = require("@angular/core");
var ProductCrudComponent = /** @class */ (function () {
    function ProductCrudComponent(router) {
        this.router = router;
    }
    ProductCrudComponent.prototype.ngOnInit = function () {
    };
    ProductCrudComponent.prototype.navigateToProductCreate = function () {
        this.router.navigate(['/products/create']);
    };
    ProductCrudComponent = __decorate([
        core_1.Component({
            selector: 'app-product-crud',
            templateUrl: './product-crud.component.html',
            styleUrls: ['./product-crud.component.sass']
        })
    ], ProductCrudComponent);
    return ProductCrudComponent;
}());
exports.ProductCrudComponent = ProductCrudComponent;
