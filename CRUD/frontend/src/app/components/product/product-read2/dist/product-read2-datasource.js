"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ProductRead2DataSource = void 0;
var collections_1 = require("@angular/cdk/collections");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var EXAMPLE_DATA = [
    { id: 1, name: 'Hydrogen', price: 9.99, description: "blablabla" },
    { id: 2, name: 'Helium', price: 9.99, description: "blablabla" },
    { id: 3, name: 'Lithium', price: 9.99, description: "blablabla" },
    { id: 4, name: 'Beryllium', price: 9.99, description: "blablabla" },
    { id: 5, name: 'Boron', price: 9.99, description: "blablabla" },
    { id: 6, name: 'Carbon', price: 9.99, description: "blablabla" },
    { id: 7, name: 'Nitrogen', price: 9.99, description: "blablabla" },
    { id: 8, name: 'Oxygen', price: 9.99, description: "blablabla" },
    { id: 9, name: 'Fluorine', price: 9.99, description: "blablabla" },
    { id: 10, name: 'Neon', price: 9.99, description: "blablabla" },
    { id: 11, name: 'Sodium', price: 9.99, description: "blablabla" },
    { id: 12, name: 'Magnesium', price: 9.99, description: "blablabla" },
    { id: 13, name: 'Aluminum', price: 9.99, description: "blablabla" },
    { id: 14, name: 'Silicon', price: 9.99, description: "blablabla" },
    { id: 15, name: 'Phosphorus', price: 9.99, description: "blablabla" },
    { id: 16, name: 'Sulfur', price: 9.99, description: "blablabla" },
    { id: 17, name: 'Chlorine', price: 9.99, description: "blablabla" },
    { id: 18, name: 'Argon', price: 9.99, description: "blablabla" },
    { id: 19, name: 'Potassium', price: 9.99, description: "blablabla" },
    { id: 20, name: 'Calcium', price: 9.99, description: "blablabla" },
];
/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var ProductRead2DataSource = /** @class */ (function (_super) {
    __extends(ProductRead2DataSource, _super);
    function ProductRead2DataSource() {
        var _this = _super.call(this) || this;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    ProductRead2DataSource.prototype.connect = function () {
        var _this = this;
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        var dataMutations = [
            rxjs_1.of(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        return rxjs_1.merge.apply(void 0, dataMutations).pipe(operators_1.map(function () {
            return _this.getPagedData(_this.getSortedData(__spreadArrays(_this.data)));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    ProductRead2DataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    ProductRead2DataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    ProductRead2DataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return ProductRead2DataSource;
}(collections_1.DataSource));
exports.ProductRead2DataSource = ProductRead2DataSource;
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
