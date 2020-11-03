"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductCreateComponent = void 0;
var core_1 = require("@angular/core");
var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(ProductService, router) {
        this.ProductService = ProductService;
        this.router = router;
        this.product = {
            name: '',
            price: null,
            stock: 1,
            description: '',
            manufacturer: ''
        };
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
    };
    ProductCreateComponent.prototype.createProduct = function () {
        var _this = this;
        this.ProductService.create(this.product).subscribe(function () {
            _this.ProductService.showMessage('Cadastro concluído com sucesso');
            _this.router.navigate(['/products']);
        });
    };
    ProductCreateComponent.prototype.cancel = function () {
        this.router.navigate(['/products']);
    };
    ProductCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-product-create',
            templateUrl: './product-create.component.html',
            styleUrls: ['./product-create.component.sass']
        })
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());
exports.ProductCreateComponent = ProductCreateComponent;
