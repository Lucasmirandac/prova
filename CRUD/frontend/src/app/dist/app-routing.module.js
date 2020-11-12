"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var auth_guard_1 = require("./guards/auth.guard");
var manufacturer_crud_component_1 = require("./views/manufacturer-crud/manufacturer-crud.component");
var manufacturer_create_component_1 = require("./components/manufacturer/manufacturer-create/manufacturer-create.component");
var login_component_1 = require("./views/login/login.component");
var product_update_component_1 = require("./components/product/product-update/product-update.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./views/home/home.component");
var product_crud_component_1 = require("./views/product-crud/product-crud.component");
var product_create_component_1 = require("./components/product/product-create/product-create.component");
var routes = [{
        path: '',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard]
    }, {
        path: 'products',
        component: product_crud_component_1.ProductCrudComponent,
        canActivate: [auth_guard_1.AuthGuard]
    }, {
        path: 'manufacturers/create',
        component: manufacturer_create_component_1.ManufacturerCreateComponent,
        canActivate: [auth_guard_1.AuthGuard]
    }, {
        path: 'manufacturers',
        component: manufacturer_crud_component_1.ManufacturerCrudComponent,
        canActivate: [auth_guard_1.AuthGuard]
    }, {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: "products/create",
        component: product_create_component_1.ProductCreateComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: "products/update/:id",
        component: product_update_component_1.ProductUpdateComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
