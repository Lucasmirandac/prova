"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductRead2Component = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var product_read2_datasource_1 = require("./product-read2-datasource");
var ProductRead2Component = /** @class */ (function () {
    function ProductRead2Component() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['id', 'name', 'price', 'description'];
    }
    ProductRead2Component.prototype.ngOnInit = function () {
        this.dataSource = new product_read2_datasource_1.ProductRead2DataSource();
    };
    ProductRead2Component.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], ProductRead2Component.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], ProductRead2Component.prototype, "sort");
    __decorate([
        core_1.ViewChild(table_1.MatTable)
    ], ProductRead2Component.prototype, "table");
    ProductRead2Component = __decorate([
        core_1.Component({
            selector: 'app-product-read2',
            templateUrl: './product-read2.component.html',
            styleUrls: ['./product-read2.component.css']
        })
    ], ProductRead2Component);
    return ProductRead2Component;
}());
exports.ProductRead2Component = ProductRead2Component;
