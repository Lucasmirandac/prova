"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var usuario_1 = require("./usuario");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.usuario = new usuario_1.Usuario();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.fazerLogin = function () {
        this.authService.fazerLogin(this.usuario);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.sass']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
