(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/abstract-plot.component.ts":
/*!********************************************!*\
  !*** ./src/app/abstract-plot.component.ts ***!
  \********************************************/
/*! exports provided: Draw, AbstractPlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draw", function() { return Draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractPlotComponent", function() { return AbstractPlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stable */ "./node_modules/stable/stable.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stable__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Draw;
(function (Draw) {
    Draw[Draw["No"] = 0] = "No";
    Draw[Draw["Yes"] = 1] = "Yes";
    Draw[Draw["Hover"] = 2] = "Hover";
})(Draw || (Draw = {}));
var AbstractPlotComponent = /** @class */ (function () {
    function AbstractPlotComponent(plotOptions, palette) {
        this.plotOptions = plotOptions;
        this.palette = palette;
        this.margin = 50;
        this.unitLength = 20;
    }
    AbstractPlotComponent.prototype.ngOnInit = function () {
        this.setup();
    };
    AbstractPlotComponent.prototype.getDimension = function (key) {
        var dim = this.plotElement.nativeElement[key];
        var result = 0;
        if ('value' in dim) {
            result = dim.value;
        }
        else if ('baseVal' in dim) {
            result = dim.baseVal.value;
        }
        else {
            throw new Error("can't get " + key);
        }
        return result;
    };
    AbstractPlotComponent.prototype.translate = function (x, y) {
        if (isNaN(x) || isNaN(y)) {
            return null;
        }
        return "translate(" + x + ", " + y + ")";
    };
    AbstractPlotComponent.prototype.getPath = function (data, xName, yName, curve) {
        var _this = this;
        if (xName === void 0) { xName = "x"; }
        if (yName === void 0) { yName = "y"; }
        if (curve === void 0) { curve = true; }
        var xScaleRange = stable__WEBPACK_IMPORTED_MODULE_2__(this.xScale.domain(), d3__WEBPACK_IMPORTED_MODULE_1__["ascending"]);
        var yScaleRange = stable__WEBPACK_IMPORTED_MODULE_2__(this.yScale.domain(), d3__WEBPACK_IMPORTED_MODULE_1__["ascending"]);
        var line = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().
            x(function (d, i) { return _this.xScale(d[xName]); }).
            y(function (d, i) { return _this.yScale(d[yName]); }).
            defined(function (d, i) {
            var x = d[xName];
            var y = d[yName];
            return typeof (x) === 'number' && typeof (y) == 'number' &&
                x >= xScaleRange[0] && x <= xScaleRange[1] &&
                y >= yScaleRange[0] && y <= yScaleRange[1];
        });
        if (curve) {
            line = line.curve(d3__WEBPACK_IMPORTED_MODULE_1__["curveBasis"]);
        }
        return line(data);
    };
    AbstractPlotComponent.prototype.setup = function () {
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AbstractPlotComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('fixed-width'),
        __metadata("design:type", Number)
    ], AbstractPlotComponent.prototype, "fixedWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('fixed-height'),
        __metadata("design:type", Number)
    ], AbstractPlotComponent.prototype, "fixedHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('plot'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AbstractPlotComponent.prototype, "plotElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('unit'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AbstractPlotComponent.prototype, "unitElement", void 0);
    return AbstractPlotComponent;
}());



/***/ }),

/***/ "./src/app/app-common.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-common.module.ts ***!
  \**************************************/
/*! exports provided: AppCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonModule", function() { return AppCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./round.pipe */ "./src/app/round.pipe.ts");
/* harmony import */ var _ceil_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ceil.pipe */ "./src/app/ceil.pipe.ts");
/* harmony import */ var _reverse_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reverse.pipe */ "./src/app/reverse.pipe.ts");
/* harmony import */ var _format_fixed_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./format-fixed.pipe */ "./src/app/format-fixed.pipe.ts");
/* harmony import */ var _draggable_dialog_draggable_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./draggable-dialog/draggable-dialog.component */ "./src/app/draggable-dialog/draggable-dialog.component.ts");
/* harmony import */ var _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./range-slider/range-slider.component */ "./src/app/range-slider/range-slider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppCommonModule = /** @class */ (function () {
    function AppCommonModule() {
    }
    AppCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
            declarations: [
                _round_pipe__WEBPACK_IMPORTED_MODULE_3__["RoundPipe"],
                _ceil_pipe__WEBPACK_IMPORTED_MODULE_4__["CeilPipe"],
                _reverse_pipe__WEBPACK_IMPORTED_MODULE_5__["ReversePipe"],
                _format_fixed_pipe__WEBPACK_IMPORTED_MODULE_6__["FormatFixedPipe"],
                _draggable_dialog_draggable_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DraggableDialogComponent"],
                _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_8__["RangeSliderComponent"],
                _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_8__["RangeSliderLabel"],
                _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_8__["RangeSliderHelp"],
            ],
            exports: [
                _round_pipe__WEBPACK_IMPORTED_MODULE_3__["RoundPipe"],
                _ceil_pipe__WEBPACK_IMPORTED_MODULE_4__["CeilPipe"],
                _reverse_pipe__WEBPACK_IMPORTED_MODULE_5__["ReversePipe"],
                _format_fixed_pipe__WEBPACK_IMPORTED_MODULE_6__["FormatFixedPipe"],
                _draggable_dialog_draggable_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DraggableDialogComponent"],
                _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_8__["RangeSliderComponent"],
                _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_8__["RangeSliderLabel"],
                _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_8__["RangeSliderHelp"],
            ],
        })
    ], AppCommonModule);
    return AppCommonModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app {\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"container-fluid d-flex flex-column h-100\"\n  appKonami (konami)=\"konamiCode()\">\n\n  <app-menu></app-menu>\n\n  <audio *ngIf=\"konami\" autoplay (ended)=\"audioEnded()\">\n    <source src=\"assets/contra.mp3\" type=\"audio/mpeg\">\n  </audio>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.konami = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.konamiCode = function () {
        this.konami = true;
    };
    AppComponent.prototype.audioEnded = function () {
        this.konami = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-common.module */ "./src/app/app-common.module.ts");
/* harmony import */ var _t_test_t_test_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./t-test/t-test.module */ "./src/app/t-test/t-test.module.ts");
/* harmony import */ var _z_test_z_test_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./z-test/z-test.module */ "./src/app/z-test/z-test.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _konami_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./konami.directive */ "./src/app/konami.directive.ts");
/* harmony import */ var _export_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./export.service */ "./src/app/export.service.ts");
/* harmony import */ var _palette_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./palette.service */ "./src/app/palette.service.ts");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plot-options.service */ "./src/app/plot-options.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__["WelcomeComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _konami_directive__WEBPACK_IMPORTED_MODULE_9__["KonamiDirective"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__["WelcomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
                _t_test_t_test_module__WEBPACK_IMPORTED_MODULE_6__["TTestModule"],
                _z_test_z_test_module__WEBPACK_IMPORTED_MODULE_7__["ZTestModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].baseHref },
                _export_service__WEBPACK_IMPORTED_MODULE_10__["ExportService"],
                _palette_service__WEBPACK_IMPORTED_MODULE_11__["PaletteService"],
                _plot_options_service__WEBPACK_IMPORTED_MODULE_12__["PlotOptionsService"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ceil.pipe.ts":
/*!******************************!*\
  !*** ./src/app/ceil.pipe.ts ***!
  \******************************/
/*! exports provided: CeilPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeilPipe", function() { return CeilPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CeilPipe = /** @class */ (function () {
    function CeilPipe() {
    }
    CeilPipe.prototype.transform = function (value, args) {
        return Math.ceil(value);
    };
    CeilPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ceil'
        })
    ], CeilPipe);
    return CeilPipe;
}());



/***/ }),

/***/ "./src/app/draggable-dialog/draggable-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/draggable-dialog/draggable-dialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog {\n  display: block;\n  position: absolute;\n  z-index: 100;\n  background-color: white;\n  border: 1px solid #888;\n  border-radius: 10px;\n  box-shadow: 5px 5px 25px #888;\n  top: 20px;\n  left: 20px;\n  width: 25vw;\n  min-width: 300px;\n}\n\n.dialog .header {\n  font-size: larger;\n  font-weight: bold;\n  background-color: #e5e5e5;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 10px 10px 0 0;\n  cursor: move;\n}\n\n.dialog .close {\n  float: right;\n  margin: 5px;\n}\n\n.dialog .content {\n  overflow: auto;\n  height: 50vh;\n  padding: 5px;\n  margin: 0 5px;\n}\n"

/***/ }),

/***/ "./src/app/draggable-dialog/draggable-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/draggable-dialog/draggable-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #main *ngIf=\"enabled\" class=\"dialog\"\n  [style.top]=\"yOffset ? yOffset + 'px' : startYOffset\"\n  [style.left]=\"xOffset ? xOffset + 'px' : startXOffset\">\n  <div class=\"header\"\n    (mousedown)=\"mousedown($event)\" (mouseup)=\"mouseup($event)\"\n    (mousemove)=\"mousemove($event)\">\n    {{title}}\n    <button type=\"button\" class=\"close fa fa-times-circle\" (click)=\"close()\"></button>\n  </div>\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/draggable-dialog/draggable-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/draggable-dialog/draggable-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: DraggableDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDialogComponent", function() { return DraggableDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DraggableDialogComponent = /** @class */ (function () {
    function DraggableDialogComponent() {
        this.startEnabled = false;
        this.startXOffset = "20px";
        this.startYOffset = "20px";
        this.onDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enabled = false;
        this.dragging = false;
    }
    DraggableDialogComponent.prototype.ngOnInit = function () {
        this.enabled = this.startEnabled;
    };
    DraggableDialogComponent.prototype.open = function () {
        this.enabled = true;
    };
    DraggableDialogComponent.prototype.toggle = function () {
        this.enabled = !this.enabled;
    };
    DraggableDialogComponent.prototype.close = function () {
        this.enabled = false;
    };
    DraggableDialogComponent.prototype.isOpen = function () {
        return this.enabled;
    };
    DraggableDialogComponent.prototype.mousedown = function (event) {
        this.startDragging();
        var box = this.mainElement.nativeElement.getBoundingClientRect();
        this.xOffset = box.left + window.pageXOffset;
        this.yOffset = box.top + window.pageYOffset;
        this.lastX = event.pageX;
        this.lastY = event.pageY;
    };
    DraggableDialogComponent.prototype.mouseup = function (event) {
        this.stopDragging();
    };
    DraggableDialogComponent.prototype.mousemove = function (event) {
        if (this.dragging) {
            if ((event.buttons & 1) == 0) {
                this.stopDragging();
                return;
            }
            this.xOffset += event.pageX - this.lastX;
            this.yOffset += event.pageY - this.lastY;
            this.lastX = event.pageX;
            this.lastY = event.pageY;
        }
    };
    DraggableDialogComponent.prototype.startDragging = function () {
        this.dragging = true;
        this.onDragStart.emit();
    };
    DraggableDialogComponent.prototype.stopDragging = function () {
        this.dragging = false;
        this.onDragEnd.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DraggableDialogComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DraggableDialogComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('start-enabled'),
        __metadata("design:type", Object)
    ], DraggableDialogComponent.prototype, "startEnabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('start-x-offset'),
        __metadata("design:type", Object)
    ], DraggableDialogComponent.prototype, "startXOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('start-y-offset'),
        __metadata("design:type", Object)
    ], DraggableDialogComponent.prototype, "startYOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('drag-start'),
        __metadata("design:type", Object)
    ], DraggableDialogComponent.prototype, "onDragStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('drag-end'),
        __metadata("design:type", Object)
    ], DraggableDialogComponent.prototype, "onDragEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('main'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DraggableDialogComponent.prototype, "mainElement", void 0);
    DraggableDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-draggable-dialog',
            template: __webpack_require__(/*! ./draggable-dialog.component.html */ "./src/app/draggable-dialog/draggable-dialog.component.html"),
            styles: [__webpack_require__(/*! ./draggable-dialog.component.css */ "./src/app/draggable-dialog/draggable-dialog.component.css")]
        })
    ], DraggableDialogComponent);
    return DraggableDialogComponent;
}());



/***/ }),

/***/ "./src/app/export.service.ts":
/*!***********************************!*\
  !*** ./src/app/export.service.ts ***!
  \***********************************/
/*! exports provided: ExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportService", function() { return ExportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExportService = /** @class */ (function () {
    function ExportService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/export";
    }
    ExportService.prototype.formats = function () {
        var url = this.apiUrl + "/formats";
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.
            get(url, options).
            toPromise().
            then(function (response) { return response.json(); }).
            catch(this.handleError);
    };
    ExportService.prototype.plots = function (format, plots) {
        var url = this.apiUrl + "/plots";
        var params = { format: format, plots: plots };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.
            post(url, JSON.stringify(params), options).
            toPromise().
            then(function (response) { return response.json(); }).
            catch(this.handleError);
    };
    ExportService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ExportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ExportService);
    return ExportService;
}());



/***/ }),

/***/ "./src/app/format-fixed.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/format-fixed.pipe.ts ***!
  \**************************************/
/*! exports provided: FormatFixedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatFixedPipe", function() { return FormatFixedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatFixedPipe = /** @class */ (function () {
    function FormatFixedPipe() {
    }
    FormatFixedPipe.prototype.transform = function (value, others) {
        var widths = others.concat(value).map(function (v) {
            var wholeDigits = Math.ceil(Math.log10(Math.abs(v)));
            return wholeDigits + 4; // 4 = 2 digits after decimal, decimal, +/-
        });
        var width = Math.max.apply(undefined, widths);
        var result = value.toFixed(2);
        while (result.length < width) {
            result = ' ' + result;
        }
        return result;
    };
    FormatFixedPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'formatFixed'
        })
    ], FormatFixedPipe);
    return FormatFixedPipe;
}());



/***/ }),

/***/ "./src/app/konami.directive.ts":
/*!*************************************!*\
  !*** ./src/app/konami.directive.ts ***!
  \*************************************/
/*! exports provided: KonamiDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonamiDirective", function() { return KonamiDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KonamiDirective = /** @class */ (function () {
    function KonamiDirective() {
        this.konami = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.konamiKeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        this.keyIndex = 0;
    }
    KonamiDirective.prototype.onKeyDown = function (event) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].activateKonami)
            return;
        if (event.keyCode === this.konamiKeys[this.keyIndex]) {
            this.keyIndex++;
            if (this.keyIndex === this.konamiKeys.length) {
                this.konami.emit();
            }
        }
        else {
            this.keyIndex = 0;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], KonamiDirective.prototype, "konami", void 0);
    KonamiDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appKonami]',
            host: {
                '(document:keydown)': 'onKeyDown($event)'
            }
        }),
        __metadata("design:paramtypes", [])
    ], KonamiDirective);
    return KonamiDirective;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand a {\n  color: black;\n}\n\n.nav-link.disabled {\n  cursor: not-allowed;\n}\n"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar d-flex flex-nowrap flex-row justify-content-between\" style=\"flex: 0 0 auto\">\n  <div class=\"navbar-brand\">\n    <img src=\"assets/ps.jpg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    <a routerLink=\"\">Power and Sample Size</a>\n  </div>\n  <div *ngIf=\"state == 'main' || state == 'ztest'\" class=\"d-flex flex-row\"\n    ngbPopover=\"Choose a study design to get started.\" container=\"body\"\n    placement=\"bottom\" triggers=\"\">\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"setState('ttest')\">t-test</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/z-test\" routerLinkActive=\"active\">z-test</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Survival</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Dichotomous</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Regression</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Mantel-Haenszel</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"><i class=\"fa fa-home\"></i></a>\n      </li>\n    </ul>\n  </div>\n  <div *ngIf=\"state == 'ttest' || state == 'ttestPaired'\" class=\"d-flex flex-row\">\n    <div class=\"navbar-text mr-2\">t-test Design:</div>\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/t-test\" routerLinkActive=\"active\">Paired</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Independent</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" (click)=\"setState('main')\"><i class=\"fa fa-home\"></i></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuState;
(function (MenuState) {
    MenuState["Main"] = "main";
    MenuState["TTest"] = "ttest";
    MenuState["TTestPaired"] = "ttestPaired";
    MenuState["ZTest"] = "ztest";
})(MenuState || (MenuState = {}));
var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
        this.urlInitialized = false;
        this.state = MenuState.Main;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).
            subscribe(function (e) {
            _this.urlChanged(e.url);
        });
    };
    MenuComponent.prototype.setState = function (state) {
        this.state = state;
    };
    MenuComponent.prototype.urlChanged = function (url) {
        var _this = this;
        switch (url) {
            case "/t-test":
                this.state = MenuState.TTestPaired;
                break;
            case "/z-test":
                this.state = MenuState.ZTest;
                break;
            default:
                this.state = MenuState.Main;
                if (!this.urlInitialized) {
                    setTimeout(function () { return _this.popoverElement.open(); }, 1);
                }
        }
        this.urlInitialized = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPopover"]),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPopover"])
    ], MenuComponent.prototype, "popoverElement", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/palette.service.ts":
/*!************************************!*\
  !*** ./src/app/palette.service.ts ***!
  \************************************/
/*! exports provided: PaletteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaletteService", function() { return PaletteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaletteService = /** @class */ (function () {
    function PaletteService() {
        this.colors = {
            typical: ["#0000DD", "#DD0000", "#000000", "#006600", "#008888"],
            plasma: ["#0D0887", "#7E03A8", "#CC4678", "#F89441", "#F0F921"],
            viridis: ["#440154", "#3B528B", "#21908C", "#5DC863", "#FDE725"],
            magma: ["#000004", "#51127C", "#B63679", "#FB8861", "#FCFDBF"],
            pattern: ["#000000", "#000000", "#000000", "#000000", "#000000"]
        };
        this.patterns = {
            typical: ["any"],
            plasma: ["any"],
            viridis: ["any"],
            magma: ["any"],
            pattern: ["solid", "short-dash", "medium-dash", "long-dash", "dot"]
        };
    }
    PaletteService.prototype.getColor = function (index, name) {
        if (name === void 0) { name = "typical"; }
        if (!(name in this.colors)) {
            throw new Error("invalid palette: " + name);
        }
        if (index == -1) {
            return "";
        }
        var colors = this.colors[name];
        return colors[index % colors.length];
    };
    PaletteService.prototype.getPattern = function (index, name) {
        if (name === void 0) { name = "typical"; }
        if (!(name in this.patterns)) {
            throw new Error("invalid palette: " + name);
        }
        if (index == -1) {
            return "";
        }
        var patterns = this.patterns[name];
        return patterns[index % patterns.length];
    };
    PaletteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PaletteService);
    return PaletteService;
}());



/***/ }),

/***/ "./src/app/plot-options.service.ts":
/*!*****************************************!*\
  !*** ./src/app/plot-options.service.ts ***!
  \*****************************************/
/*! exports provided: PlotOptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotOptionsService", function() { return PlotOptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlotOptionsService = /** @class */ (function () {
    function PlotOptionsService() {
        this.fontFamily = "";
        this.fontSize = 1;
        this.axisFontSize = 1;
        this.lineWidth = 1;
        this.axisLineWidth = 1;
        this.paletteTheme = "typical";
        this.lineStyle = "solid";
        this.showLegendBox = false;
    }
    PlotOptionsService_1 = PlotOptionsService;
    PlotOptionsService.prototype.reset = function () {
        Object.assign(this, new PlotOptionsService_1());
    };
    PlotOptionsService.prototype.getFontFamily = function () {
        if (this.fontFamily == '') {
            return '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
        }
        else {
            return this.fontFamily;
        }
    };
    PlotOptionsService.prototype.getFontSize = function () {
        return this.fontSize * 18;
    };
    PlotOptionsService.prototype.getAxisFontSize = function () {
        return this.axisFontSize * 15;
    };
    PlotOptionsService.prototype.getAxisLineWidth = function () {
        return this.axisLineWidth * 1.5;
    };
    PlotOptionsService.prototype.getLineWidth = function () {
        return this.lineWidth * 3;
    };
    PlotOptionsService.prototype.dashArray = function (style) {
        if (!style || style == "any") {
            style = this.lineStyle;
        }
        switch (style) {
            case "solid":
                return "";
            case "short-dash":
                return "5,5";
            case "medium-dash":
                return "10,10";
            case "long-dash":
                return "15,15";
            case "dot":
                return "1,5";
        }
    };
    PlotOptionsService.prototype.lineCap = function (style) {
        if (!style || style == "any") {
            style = this.lineStyle;
        }
        if (style == "dot") {
            return "round";
        }
        return "";
    };
    PlotOptionsService = PlotOptionsService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PlotOptionsService);
    return PlotOptionsService;
    var PlotOptionsService_1;
}());



/***/ }),

/***/ "./src/app/range-slider/range-slider.component.css":
/*!*********************************************************!*\
  !*** ./src/app/range-slider/range-slider.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n}\n\ndiv.slider-group {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 5px;\n  border-radius: 5px;\n}\n\ndiv.slider-group .label span {\n  font-weight: bold;\n}\n\ndiv.slider-group .slider,\ndiv.slider-group .number {\n  padding-top: 2ex;\n}\n\ndiv.slider-group .add-remove {\n  padding-top: 2.3ex;\n}\n\ndiv.slider-group div.inputs input {\n  width: 100%;\n}\n\ndiv.slider-group div.slider {\n  position: relative;\n  padding-left: 0;\n  padding-right: 0;\n}\n\ndiv.slider-group div.slider input {\n  display: block;\n}\n\ndiv.slider-group div.slider div.min,\ndiv.slider-group div.slider div.max {\n  position: absolute;\n  font-size: x-small;\n  top: 0;\n  background-color: #ddd;\n  border-radius: 1ex;\n  padding: 0.5ex;\n}\n\ndiv.slider-group.output div.slider div.min,\ndiv.slider-group.output div.slider div.max {\n  background-color: #ccc;\n}\n\ndiv.slider-group div.slider div.min {\n  left: 0;\n}\n\ndiv.slider-group div.slider div.max {\n  right: 0;\n}\n\n.fa {\n  opacity: 0.7;\n}\n\n.fa:hover {\n  opacity: 1;\n}\n\n.dot {\n  color: red;\n  opacity: 1;\n}\n\n.palette-color .fa {\n  opacity: 1;\n}\n\nspan.error {\n  color: red;\n}\n\ninput.error {\n  border: 2px solid red;\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/range-slider/range-slider.component.html":
/*!**********************************************************!*\
  !*** ./src/app/range-slider/range-slider.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-group\">\n  <ng-template [ngIf]=\"labelTpl\" [ngIfElse]=\"standardLabel\">\n    <ng-template [ngTemplateOutlet]=\"labelTpl\"></ng-template>\n  </ng-template>\n  <ng-template #standardLabel>\n    <div class=\"label\" *ngIf=\"label\">\n      {{label}}\n      <span *ngIf=\"isOutput\">(Computed value)</span>\n      <ng-template [ngIf]=\"helpTpl\">\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"rsHelp\" popoverTitle=\"{{label}}\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n        <ng-template #rsHelp>\n          <ng-template [ngTemplateOutlet]=\"helpTpl\"></ng-template>\n        </ng-template>\n      </ng-template>\n      <i *ngIf=\"showDot\" class=\"fa fa-circle dot\"></i>\n    </div>\n  </ng-template>\n  <div class=\"inputs row\">\n    <div class=\"col-sm-9\">\n      <div class=\"slider\">\n        <div class=\"min\">{{floor(min)}}</div>\n        <input #range name=\"{{name}}\" type=\"range\" step=\"{{step}}\"\n               min=\"{{min}}\" max=\"{{max}}\"\n               [value]=\"value\"\n               [disabled]=\"isOutput\"\n               (change)=\"rangeChanged(range.value)\"\n               (input)=\"rangeInput(range.value)\" />\n        <div class=\"max\">{{ceil(max)}}</div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"number\">\n        <input #number [class.error]=\"hasError\" name=\"{{name}}\" type=\"number\"\n               step=\"{{step}}\" [min]=\"hardMin\" [max]=\"hardMax\" [value]=\"value\"\n               [disabled]=\"isOutput\"\n               (change)=\"numberChanged(number.value)\"\n               (input)=\"numberInput(number.value)\"\n               (blur)=\"blurred()\"\n               [ngbPopover]=\"errorMsg\" triggers=\"manual\"\n               container=\"body\" #errorPopover=\"ngbPopover\" />\n        <ng-template #errorMsg>\n          <span class=\"error\">Value is out of range ({{hardMin}}, {{hardMax}}).</span><br/>\n          Current value: {{value}}\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/range-slider/range-slider.component.ts":
/*!********************************************************!*\
  !*** ./src/app/range-slider/range-slider.component.ts ***!
  \********************************************************/
/*! exports provided: RangeSliderLabel, RangeSliderHelp, RangeSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeSliderLabel", function() { return RangeSliderLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeSliderHelp", function() { return RangeSliderHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeSliderComponent", function() { return RangeSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RangeSliderLabel = /** @class */ (function () {
    function RangeSliderLabel(templateRef) {
        this.templateRef = templateRef;
    }
    RangeSliderLabel = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: 'ng-template[rsLabel]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], RangeSliderLabel);
    return RangeSliderLabel;
}());

var RangeSliderHelp = /** @class */ (function () {
    function RangeSliderHelp(templateRef) {
        this.templateRef = templateRef;
    }
    RangeSliderHelp = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: 'ng-template[rsHelp]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], RangeSliderHelp);
    return RangeSliderHelp;
}());

var RangeSliderComponent = /** @class */ (function () {
    function RangeSliderComponent() {
        this.step = 0.01;
        this.isOutput = false;
        this.showDot = false;
        this.hasError = false;
        this.inputSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dirty = false;
    }
    RangeSliderComponent_1 = RangeSliderComponent;
    RangeSliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (value) {
            // skip values when not dirty
            return _this.dirty;
        })).subscribe(function (value) {
            _this.trySetValue(value);
        });
    };
    RangeSliderComponent.prototype.ngAfterContentInit = function () {
        if (!this.helpTpl && this.rsHelpTpl) {
            this.helpTpl = this.rsHelpTpl.templateRef;
        }
        if (!this.labelTpl && this.rsLabelTpl) {
            this.labelTpl = this.rsLabelTpl.templateRef;
        }
    };
    RangeSliderComponent.prototype.ngOnChanges = function (changes) {
        if ('isOutput' in changes) {
            var change = changes.isOutput;
            if (change.previousValue === true && change.currentValue === false) {
                // if isOutput changes from true to false, turn on the error message if
                // the value is out of bounds
                if (this.value < this.hardMin || this.value > this.hardMax) {
                    this.hasError = true;
                    this.errorPopover.open();
                }
            }
            else if (change.previousValue === false && change.currentValue === true) {
                this.hasError = false;
                this.errorPopover.close();
            }
        }
    };
    RangeSliderComponent.prototype.floor = function (n) {
        return Math.floor(n);
    };
    RangeSliderComponent.prototype.ceil = function (n) {
        return Math.ceil(n);
    };
    RangeSliderComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    RangeSliderComponent.prototype.registerOnChange = function (fn) {
        this.changeCallback = fn;
    };
    RangeSliderComponent.prototype.registerOnTouched = function (fn) {
    };
    RangeSliderComponent.prototype.setDisabledState = function (isDisabled) {
    };
    RangeSliderComponent.prototype.rangeChanged = function (newValue) {
        this.trySetValue(newValue);
    };
    RangeSliderComponent.prototype.rangeInput = function (newValue) {
        this.dirty = true;
        this.numberElement.nativeElement.value = newValue;
        this.inputSubject.next(newValue);
    };
    RangeSliderComponent.prototype.numberChanged = function (newValue) {
        if (this.dirty) {
            this.trySetValue(newValue);
        }
    };
    RangeSliderComponent.prototype.numberInput = function (newValue) {
        this.dirty = true;
        this.rangeElement.nativeElement.value = newValue;
        this.inputSubject.next(newValue);
    };
    RangeSliderComponent.prototype.blurred = function () {
        if (this.hasError) {
            this.numberElement.nativeElement.value = this.value;
            this.hasError = false;
            this.errorPopover.close();
        }
    };
    RangeSliderComponent.prototype.trySetValue = function (newValue) {
        var value = parseFloat(newValue);
        if (value < this.hardMin || value > this.hardMax) {
            this.hasError = true;
            this.errorPopover.open();
        }
        else {
            this.hasError = false;
            this.errorPopover.close();
            this.value = value;
            this.propagateChange();
        }
        this.dirty = false;
    };
    RangeSliderComponent.prototype.propagateChange = function () {
        if (this.changeCallback) {
            this.changeCallback(this.value);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RangeSliderComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RangeSliderComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RangeSliderComponent.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RangeSliderComponent.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RangeSliderComponent.prototype, "step", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hard-min'),
        __metadata("design:type", Number)
    ], RangeSliderComponent.prototype, "hardMin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hard-max'),
        __metadata("design:type", Number)
    ], RangeSliderComponent.prototype, "hardMax", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('is-output'),
        __metadata("design:type", Object)
    ], RangeSliderComponent.prototype, "isOutput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('help-tpl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], RangeSliderComponent.prototype, "helpTpl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('label-tpl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], RangeSliderComponent.prototype, "labelTpl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('show-dot'),
        __metadata("design:type", Object)
    ], RangeSliderComponent.prototype, "showDot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(RangeSliderLabel),
        __metadata("design:type", RangeSliderLabel)
    ], RangeSliderComponent.prototype, "rsLabelTpl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(RangeSliderHelp),
        __metadata("design:type", RangeSliderHelp)
    ], RangeSliderComponent.prototype, "rsHelpTpl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("errorPopover"),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPopover"])
    ], RangeSliderComponent.prototype, "errorPopover", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("number"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RangeSliderComponent.prototype, "numberElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("range"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RangeSliderComponent.prototype, "rangeElement", void 0);
    RangeSliderComponent = RangeSliderComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-range-slider',
            template: __webpack_require__(/*! ./range-slider.component.html */ "./src/app/range-slider/range-slider.component.html"),
            styles: [__webpack_require__(/*! ./range-slider.component.css */ "./src/app/range-slider/range-slider.component.css")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RangeSliderComponent_1; }),
                    multi: true
                }
            ]
        })
    ], RangeSliderComponent);
    return RangeSliderComponent;
    var RangeSliderComponent_1;
}());



/***/ }),

/***/ "./src/app/range.ts":
/*!**************************!*\
  !*** ./src/app/range.ts ***!
  \**************************/
/*! exports provided: Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
var Range = /** @class */ (function () {
    function Range(min, max) {
        this.min = min;
        this.max = max;
    }
    Range.prototype.combine = function (other) {
        if (other.min < this.min) {
            this.min = other.min;
        }
        if (other.max > this.max) {
            this.max = other.max;
        }
    };
    Range.prototype.toArray = function () {
        return [this.min, this.max];
    };
    Range.prototype.clone = function () {
        return new Range(this.min, this.max);
    };
    return Range;
}());



/***/ }),

/***/ "./src/app/reverse.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/reverse.pipe.ts ***!
  \*********************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value, args) {
        return value.slice().reverse();
    };
    ReversePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/round.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/round.pipe.ts ***!
  \*******************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (value, digits) {
        if (digits === void 0) { digits = 2; }
        var amount = Math.pow(10, digits);
        return Math.round(value * amount) / amount;
    };
    RoundPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'round'
        })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/t-test/bottom-plot/bottom-plot.component.css":
/*!**************************************************************!*\
  !*** ./src/app/t-test/bottom-plot/bottom-plot.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".draggable {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n"

/***/ }),

/***/ "./src/app/t-test/bottom-plot/bottom-plot.component.html":
/*!***************************************************************!*\
  !*** ./src/app/t-test/bottom-plot/bottom-plot.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg #plot\n  [style.fontFamily]=\"plotOptions.fontFamily\"\n  [style.fontSize]=\"(plotOptions.fontSize * 18).toString() + 'px'\"\n  [attr.class]=\"name\" [attr.width]=\"fixedWidth\" [attr.height]=\"fixedHeight\"\n  [attr.viewBox]=\"viewBox\">\n\n  <rect #unit x=\"0\" y=\"0\" width=\"1em\" height=\"1em\" stroke=\"none\" fill=\"none\" />\n  <ng-template [ngIf]=\"groups && project\">\n    <text text-anchor=\"middle\"\n      [attr.x]=\"innerWidth / 2 + leftMargin\"\n      [attr.y]=\"height - 5\">\n      Parameter Space\n    </text>\n    <text text-anchor=\"middle\" font-weight=\"bold\"\n      [attr.x]=\"innerWidth / 2 + leftMargin\"\n      [attr.y]=\"(plotOptions.getFontSize() / 2) + 8\">\n      {{title}}\n    </text>\n\n    <circle r=\"5\" [attr.cx]=\"xScale(0)\" [attr.cy]=\"yScale(0.5)\"\n      [attr.transform]=\"translate(leftMargin, topMargin)\"\n      fill=\"darkseagreen\" />\n\n    <g *ngFor=\"let group of groups; let i = index; trackBy: trackByGroupId\"\n      [id]=\"group.id\">\n\n      <path id=\"{{group.id}}-dist\"\n        [attr.fill]=\"group.color\"\n        [attr.fill-opacity]=\"group.fillOpacity\"\n        stroke=\"none\" />\n\n      <path id=\"{{group.id}}-center\"\n        [attr.stroke]=\"group.color\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\" />\n\n      <path id=\"{{group.id}}-left\"\n        [class.draggable]=\"group.primary && !disableDragCI\"\n        [attr.stroke]=\"group.color\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\"\n        (mouseover)=\"group.primary ? toggleLeftBarInfo(true) : null\"\n        (mouseout)=\"group.primary ? toggleLeftBarInfo(false) : null\" />\n\n      <path id=\"{{group.id}}-right\"\n        [class.draggable]=\"group.primary && !disableDragCI\"\n        [attr.stroke]=\"group.color\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\"\n        (mouseover)=\"group.primary ? toggleRightBarInfo(true) : null\"\n        (mouseout)=\"group.primary ? toggleRightBarInfo(false) : null\" />\n\n      <circle id=\"{{group.id}}-target\"\n        [class.draggable]=\"group.primary && !disableDragTarget\"\n        r=\"5\"\n        [attr.fill]=\"group.color\"\n        (mouseover)=\"group.primary ? toggleTargetInfo(true) : null\"\n        (mouseout)=\"group.primary ? toggleTargetInfo(false) : null\" />\n    </g>\n\n    <g *ngIf=\"showLeftBarInfo\"\n      [attr.transform]=\"translate(leftMargin + xScale(mainGroup.left), topMargin + yScale(0.5))\">\n      <path id=\"{{name}}-left-box\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.9\" />\n      <text id=\"{{name}}-left-coords\" x=\"0\" y=\"-3em\" font-family=\"monospace\" text-anchor=\"middle\">\n        <tspan style=\"white-space: pre\">{{mainGroup.label}}: {{ciWidth() | formatFixed:[mainGroup.left]}}</tspan><tspan x=\"0\" dy=\"1em\" style=\"white-space: pre\"> Bound: {{mainGroup.left | formatFixed:[ciWidth()]}}</tspan>\n      </text>\n    </g>\n\n    <g *ngIf=\"showRightBarInfo\"\n      [attr.transform]=\"translate(leftMargin + xScale(mainGroup.right), topMargin + yScale(0.5))\">\n      <path id=\"{{name}}-right-box\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.9\" />\n      <text id=\"{{name}}-right-coords\" x=\"0\" y=\"-3em\" font-family=\"monospace\" text-anchor=\"middle\">\n        <tspan style=\"white-space: pre\">{{mainGroup.label}}: {{ciWidth() | formatFixed:[mainGroup.right]}}</tspan><tspan x=\"0\" dy=\"1em\" style=\"white-space: pre\"> Bound: {{mainGroup.right | formatFixed:[ciWidth()]}}</tspan>\n      </text>\n    </g>\n\n    <g *ngIf=\"showTargetInfo\"\n      [attr.transform]=\"translate(leftMargin + xScale(mainGroup.target), topMargin + yScale(0.5))\">\n      <path id=\"{{name}}-target-box\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.9\" />\n      <text id=\"{{name}}-target-coords\" x=\"0\" y=\"-1.5em\" font-family=\"mono\" text-anchor=\"middle\">\n        <tspan style=\"white-space: pre\">&delta;: {{mainGroup.target | formatFixed:[]}}</tspan>\n      </text>\n    </g>\n\n    <g id=\"{{name}}-bottom-axis\" [attr.transform]=\"translate(leftMargin, innerHeight + topMargin)\"></g>\n  </ng-template>\n</svg>\n"

/***/ }),

/***/ "./src/app/t-test/bottom-plot/bottom-plot.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/t-test/bottom-plot/bottom-plot.component.ts ***!
  \*************************************************************/
/*! exports provided: BottomPlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomPlotComponent", function() { return BottomPlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stable */ "./node_modules/stable/stable.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../abstract-plot.component */ "./src/app/abstract-plot.component.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project */ "./src/app/t-test/project.ts");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../plot-options.service */ "./src/app/plot-options.service.ts");
/* harmony import */ var _palette_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../palette.service */ "./src/app/palette.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







;
var CIBar;
(function (CIBar) {
    CIBar[CIBar["Left"] = 0] = "Left";
    CIBar[CIBar["Right"] = 1] = "Right";
})(CIBar || (CIBar = {}));
;
var BottomPlotComponent = /** @class */ (function (_super) {
    __extends(BottomPlotComponent, _super);
    function BottomPlotComponent(plotOptions, palette) {
        var _this = _super.call(this, plotOptions, palette) || this;
        _this.plotOptions = plotOptions;
        _this.palette = palette;
        _this.disableDragTarget = false;
        _this.disableDragCI = false;
        _this.modelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.leftMargin = 10;
        _this.rightMargin = 10;
        _this.topMargin = 50;
        _this.bottomMargin = 50;
        _this.viewBox = "0 0 0 0";
        _this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No;
        // target dragging
        _this.targetDragging = false;
        _this.showTargetInfo = false;
        // bar dragging
        _this.barDragging = false;
        _this.showLeftBarInfo = false;
        _this.showRightBarInfo = false;
        return _this;
    }
    BottomPlotComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var result = this.setup();
        if (!result && this.project) {
            // this might happen if the browser elements aren't ready yet
            setTimeout(function () {
                _this.setup();
            }, 1);
        }
    };
    BottomPlotComponent.prototype.ngAfterViewChecked = function () {
        this.draw();
    };
    BottomPlotComponent.prototype.redraw = function () {
        this.setup();
    };
    BottomPlotComponent.prototype.toggleTargetInfo = function (value) {
        if (!this.targetDragging && !this.barDragging) {
            this.showTargetInfo = value;
            if (value) {
                this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover;
            }
        }
    };
    BottomPlotComponent.prototype.toggleLeftBarInfo = function (value) {
        if (!this.targetDragging && !this.barDragging) {
            this.showLeftBarInfo = value;
            if (value) {
                this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover;
            }
        }
    };
    BottomPlotComponent.prototype.toggleRightBarInfo = function (value) {
        if (!this.targetDragging && !this.barDragging) {
            this.showRightBarInfo = value;
            if (value) {
                this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover;
            }
        }
    };
    BottomPlotComponent.prototype.getColor = function (index) {
        return this.palette.getColor(index, this.plotOptions.paletteTheme);
    };
    BottomPlotComponent.prototype.trackByGroupId = function (index, group) {
        return group.id;
    };
    BottomPlotComponent.prototype.setupDimensions = function () {
        // dimensions
        if (this.fixedWidth) {
            this.width = this.fixedWidth;
        }
        else {
            this.width = this.getDimension('width');
            if (this.width == 0) {
                // window isn't ready to draw
                return false;
            }
        }
        if (this.fixedHeight) {
            this.height = this.fixedHeight;
        }
        else {
            this.height = this.getDimension('height');
            if (this.height == 0) {
                // window isn't ready to draw
                return false;
            }
        }
        // margin
        this.topMargin = this.plotOptions.getFontSize() + 20;
        this.bottomMargin = 10 + this.plotOptions.getFontSize() +
            this.plotOptions.getAxisLineWidth() + // x axis line width
            (this.plotOptions.getAxisFontSize() / 2) + 9; // x axis tick (font + tick)
        this.leftMargin = this.plotOptions.getAxisFontSize() + 9;
        this.rightMargin = this.leftMargin;
        this.viewBox = "0 0 " + this.width + " " + this.height;
        this.innerWidth = this.width - this.leftMargin - this.rightMargin;
        this.innerHeight = this.height - this.topMargin - this.bottomMargin;
        return true;
    };
    BottomPlotComponent.prototype.setup = function () {
        if (!this.project) {
            return false;
        }
        this.setupTitle();
        if (!this.setupDimensions()) {
            return false;
        }
        this.setupPlotData();
        this.setupScales();
        this.setupGroups();
        this.resetDragging();
        this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Yes;
        return true;
    };
    BottomPlotComponent.prototype.setupTitle = function () {
        this.title = "Precision (95% Confidence Interval) vs. Effect Size";
    };
    BottomPlotComponent.prototype.setupPlotData = function () {
        this.plotData = this.project.models.map(function (m) { return m.sampDist; });
    };
    BottomPlotComponent.prototype.setupScales = function () {
        var pSpaceRange = this.project.pSpaceRange;
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().
            domain(pSpaceRange.toArray()).
            range([0, this.innerWidth]);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().
            domain([0, 0.7]).
            range([0, this.innerHeight]);
        var sampDistExtent = this.plotData.reduce(function (arr, sampDist) {
            var extent = d3__WEBPACK_IMPORTED_MODULE_1__["extent"](sampDist, function (d) { return d.y; });
            return d3__WEBPACK_IMPORTED_MODULE_1__["extent"](arr.concat(extent));
        }, []);
        this.yScaleSD = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().
            domain(sampDistExtent.reverse()).
            range([0, this.yScale(0.5)]).
            clamp(true);
    };
    BottomPlotComponent.prototype.setupGroups = function () {
        var _this = this;
        this.groups = this.project.models.map(function (model, i) {
            var range = model.precisionRange();
            // main lines
            var leftLimit = range.min;
            var leftPath = _this.getPath([
                { x: leftLimit, y: 0.40 },
                { x: leftLimit, y: 0.60 }
            ], 'x', 'y', false);
            var rightLimit = range.max;
            var rightPath = _this.getPath([
                { x: rightLimit, y: 0.40 },
                { x: rightLimit, y: 0.60 }
            ], 'x', 'y', false);
            var centerPath = _this.getPath([
                { x: leftLimit, y: 0.5 },
                { x: rightLimit, y: 0.5 }
            ], 'x', 'y', false);
            // sample distribution
            var distPath = _this.getArea(_this.plotData[i], 'x', 'y');
            var result = {
                index: i,
                id: _this.name + "-group-" + i,
                leftPath: leftPath,
                centerPath: centerPath,
                rightPath: rightPath,
                distPath: distPath,
                left: leftLimit,
                originalTarget: model.delta,
                target: model.delta,
                right: rightLimit,
                label: "95% CI",
                color: _this.getColor(i),
                fillOpacity: 0.5,
                strokeOpacity: 0.9,
                primary: _this.project.selectedIndex == i
            };
            return result;
        });
        // order group in reverse so that they are drawn properly, put the selected
        // group at the end
        stable__WEBPACK_IMPORTED_MODULE_2__["inplace"](this.groups, function (a, b) {
            if (a.primary)
                return 1;
            if (b.primary)
                return -1;
            return d3__WEBPACK_IMPORTED_MODULE_1__["descending"](b.index, a.index);
        });
        this.mainGroup = this.groups[this.groups.length - 1];
    };
    BottomPlotComponent.prototype.resetDragging = function () {
        this.targetDragging = false;
        this.barDragging = false;
    };
    BottomPlotComponent.prototype.draw = function () {
        var _this = this;
        if (this.needDraw == _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No) {
            return;
        }
        this.drawInfoBox('left');
        this.drawInfoBox('right');
        this.drawInfoBox('target');
        if (this.needDraw == _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover) {
            this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No;
            return;
        }
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.plotElement.nativeElement);
        var t = svg.transition();
        // axes (drawn by d3)
        var xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale).ticks(Math.floor(this.innerWidth / 75));
        t.select("#" + this.name + "-bottom-axis").
            call(xAxis).
            attr("font-size", 15 * this.plotOptions.axisFontSize).
            attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);
        // alternate groups
        this.groups.forEach(function (group, index) {
            var id = "#" + group.id;
            t.select(id).attr('transform', _this.translate(_this.leftMargin, _this.topMargin));
            t.select(id + "-dist").attr('d', group.distPath);
            t.select(id + "-center").attr('d', group.centerPath);
            t.select(id + "-left").attr('d', group.leftPath);
            t.select(id + "-right").attr('d', group.rightPath);
            t.select(id + "-target").
                attr('cx', _this.xScale(group.target)).
                attr('cy', _this.yScale(0.5));
        });
        // make target point draggable
        var target = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#" + this.mainGroup.id + "-target");
        var targetDrag = d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().
            container(target.node().parentNode.parentNode).
            on("start", this.dragTargetStart.bind(this)).
            on("drag", this.dragTarget.bind(this)).
            on("end", this.dragTargetEnd.bind(this));
        target.call(targetDrag);
        // make left bar draggable
        var leftBar = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#" + this.mainGroup.id + "-left");
        var leftBarDrag = d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().
            container(leftBar.node().parentNode.parentNode).
            on("start", this.dragBarStart.bind(this, CIBar.Left)).
            on("drag", this.dragBar.bind(this, CIBar.Left)).
            on("end", this.dragBarEnd.bind(this, CIBar.Left));
        leftBar.call(leftBarDrag);
        // make right bar draggable
        var rightBar = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#" + this.mainGroup.id + "-right");
        var rightBarDrag = d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().
            container(rightBar.node().parentNode.parentNode).
            on("start", this.dragBarStart.bind(this, CIBar.Right)).
            on("drag", this.dragBar.bind(this, CIBar.Right)).
            on("end", this.dragBarEnd.bind(this, CIBar.Right));
        rightBar.call(rightBarDrag);
        this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No;
    };
    BottomPlotComponent.prototype.drawInfoBox = function (which) {
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.plotElement.nativeElement);
        var box = svg.select("#" + this.name + "-" + which + "-box");
        var coords = svg.select("#" + this.name + "-" + which + "-coords");
        if (box.size() > 0 && coords.size() > 0) {
            var dim = coords.node().getBBox();
            var left = dim.x - 5, right = dim.x + dim.width + 5;
            var unit = dim.width / 16;
            var lmid = left + (7 * unit) + 5, rmid = left + (9 * unit) + 5;
            var mid = left + (8 * unit) + 5;
            var top_1 = dim.y - 5, bottom = dim.y + dim.height + 5;
            box.attr("d", d3__WEBPACK_IMPORTED_MODULE_1__["line"]()([
                [left, top_1], [right, top_1], [right, bottom],
                [rmid, bottom], [mid, bottom + 5], [lmid, bottom],
                [left, bottom], [left, top_1]
            ]));
        }
    };
    BottomPlotComponent.prototype.ciWidth = function () {
        return Math.abs(this.mainGroup.right - this.mainGroup.left);
    };
    BottomPlotComponent.prototype.getArea = function (points, xName, yName) {
        var _this = this;
        var area = d3__WEBPACK_IMPORTED_MODULE_1__["area"]().curve(d3__WEBPACK_IMPORTED_MODULE_1__["curveBasis"]).
            x(function (d, i) { return _this.xScale(d[xName]); }).
            y0(this.yScaleSD(0)).
            y1(function (d, i) { return _this.yScaleSD(d[yName]); });
        return area(points);
    };
    BottomPlotComponent.prototype.dragTargetStart = function () {
        if (this.disableDragTarget)
            return;
        this.targetDragging = true;
        this.mainGroup.fillOpacity = 0.1;
        this.mainGroup.strokeOpacity = 0.1;
    };
    BottomPlotComponent.prototype.dragTarget = function (event) {
        if (this.disableDragTarget)
            return;
        var mouseX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x - this.leftMargin;
        var x = this.xScale.invert(mouseX);
        if (x >= 0 && x < 0.1) {
            x = 0.1;
            mouseX = this.xScale(x);
        }
        else if (x < 0 && x > -0.1) {
            x = -0.1;
            mouseX = this.xScale(x);
        }
        var offset = mouseX - this.xScale(this.mainGroup.originalTarget);
        var g = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#" + this.mainGroup.id).
            attr('transform', this.translate(this.leftMargin + offset, this.topMargin));
        this.mainGroup.target = x;
        this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover;
    };
    BottomPlotComponent.prototype.dragTargetEnd = function () {
        var _this = this;
        if (this.disableDragTarget)
            return;
        if (this.project) {
            var newDelta = this.mainGroup.target;
            this.project.updateModel(this.project.selectedIndex, 'delta', newDelta).then(function () {
                _this.modelChanged.emit();
            });
        }
        this.showTargetInfo = false;
    };
    BottomPlotComponent.prototype.dragBarStart = function (which) {
        if (this.disableDragCI)
            return;
        this.barDragging = true;
    };
    BottomPlotComponent.prototype.dragBar = function (which, event) {
        if (this.disableDragCI)
            return;
        var mouseX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x - this.leftMargin;
        var x = this.xScale.invert(mouseX);
        var diff = 0;
        switch (which) {
            case CIBar.Left:
                var leftBarX = this.xScale(this.mainGroup.left);
                diff = x - this.mainGroup.left;
                break;
            case CIBar.Right:
                var rightBarX = this.xScale(this.mainGroup.right);
                diff = this.mainGroup.right - x;
                break;
        }
        this.mainGroup.left += diff;
        this.mainGroup.right -= diff;
        // redraw lines
        var leftPath = this.getPath([
            { x: this.mainGroup.left, y: 0.40 },
            { x: this.mainGroup.left, y: 0.60 }
        ], 'x', 'y', false);
        var rightPath = this.getPath([
            { x: this.mainGroup.right, y: 0.40 },
            { x: this.mainGroup.right, y: 0.60 }
        ], 'x', 'y', false);
        var centerPath = this.getPath([
            { x: this.mainGroup.left, y: 0.5 },
            { x: this.mainGroup.right, y: 0.5 }
        ], 'x', 'y', false);
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.plotElement.nativeElement);
        svg.select("#" + this.mainGroup.id + "-left").attr('d', leftPath);
        svg.select("#" + this.mainGroup.id + "-right").attr('d', rightPath);
        svg.select("#" + this.mainGroup.id + "-center").attr('d', centerPath);
        this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover;
    };
    BottomPlotComponent.prototype.dragBarEnd = function (which) {
        var _this = this;
        if (this.disableDragCI)
            return;
        if (this.project) {
            this.project.updateModel(this.project.selectedIndex, 'ci', this.ciWidth()).then(function () {
                _this.modelChanged.emit();
            });
        }
        this.showLeftBarInfo = false;
        this.showRightBarInfo = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('project'),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_4__["Project"])
    ], BottomPlotComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('disable-drag-target'),
        __metadata("design:type", Object)
    ], BottomPlotComponent.prototype, "disableDragTarget", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('disable-drag-ci'),
        __metadata("design:type", Object)
    ], BottomPlotComponent.prototype, "disableDragCI", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BottomPlotComponent.prototype, "modelChanged", void 0);
    BottomPlotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't-test-bottom-plot',
            template: __webpack_require__(/*! ./bottom-plot.component.html */ "./src/app/t-test/bottom-plot/bottom-plot.component.html"),
            styles: [__webpack_require__(/*! ./bottom-plot.component.css */ "./src/app/t-test/bottom-plot/bottom-plot.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_plot_options_service__WEBPACK_IMPORTED_MODULE_5__["PlotOptionsService"],
            _palette_service__WEBPACK_IMPORTED_MODULE_6__["PaletteService"]])
    ], BottomPlotComponent);
    return BottomPlotComponent;
}(_abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["AbstractPlotComponent"]));



/***/ }),

/***/ "./src/app/t-test/export-plots/export-plots.component.css":
/*!****************************************************************!*\
  !*** ./src/app/t-test/export-plots/export-plots.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.modal-body {\n}\n\n.modal-body .left {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  border-right: 1px solid #888;\n  padding: 10px;\n}\n\n.modal-body .right {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  margin-left: 10px;\n  overflow: auto;\n  padding: 10px;\n}\n\n.modal-footer {\n  align-items: center;\n  justify-content: space-between;\n}\n"

/***/ }),

/***/ "./src/app/t-test/export-plots/export-plots.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/t-test/export-plots/export-plots.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Export graphs</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div id=\"t-test-export-plots-modal-body\" class=\"modal-body grow-vert h-100\">\n  <div class=\"d-flex flex-column h-100\">\n    <ngb-tabset [destroyOnHide]=\"false\">\n      <ngb-tab [title]=\"topLeftTitle\">\n        <ng-template ngbTabContent>\n          <div class=\"left\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"\n                  [(ngModel)]=\"includeTopLeft\">\n                  Export this graph\n              </label>\n            </div>\n            <ng-template [ngIf]=\"includeTopLeft\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topLeftDropLines\">\n                    Show drop lines\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topLeftTarget\">\n                    Show target\n                </label>\n              </div>\n              <label>\n                Dimensions\n                <select class=\"form-control\" name=\"topLeftDim\"\n                  [(ngModel)]=\"topLeftDim\" (ngModelChange)=\"setDim('topLeft', $event)\">\n                  <option value=\"640x480\">640 by 480</option>\n                  <option value=\"800x600\">800 by 600</option>\n                  <option value=\"1024x768\">1024 by 768</option>\n                  <option value=\"other\">Custom</option>\n                </select>\n              </label>\n              <div *ngIf=\"topLeftDim == 'other'\" class=\"form-group\">\n                <label>\n                  Width\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topLeftWidth\">\n                </label>\n              </div>\n              <div *ngIf=\"topLeftDim == 'other'\" class=\"form-group\">\n                <label>\n                  Height\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topLeftHeight\">\n                </label>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"right\">\n            <t-test-plot #topLeftPlot name=\"top-left-export\"\n              [project]=\"project\" [hover-disabled]=\"true\"\n              [disable-drag]=\"true\"\n              [hide-drop-lines]=\"!topLeftDropLines\"\n              [hide-target]=\"!topLeftTarget\"\n              [fixed-width]=\"topLeftWidth\" [fixed-height]=\"topLeftHeight\"\n              [legend-x-offset]=\"topLeftLegendXOffset\"\n              [legend-y-offset]=\"topLeftLegendYOffset\">\n            </t-test-plot>\n          </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab [title]=\"topRightTitle\">\n        <ng-template ngbTabContent>\n          <div class=\"left\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"\n                  [(ngModel)]=\"includeTopRight\">\n                  Export this graph\n              </label>\n            </div>\n            <ng-template [ngIf]=\"includeTopRight\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topRightDropLines\">\n                    Show drop lines\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topRightTarget\">\n                    Show target\n                </label>\n              </div>\n              <label>\n                Dimensions\n                <select class=\"form-control\" name=\"topRightDim\"\n                  [(ngModel)]=\"topRightDim\" (ngModelChange)=\"setDim('topRight', $event)\">\n                  <option value=\"640x480\">640 by 480</option>\n                  <option value=\"800x600\">800 by 600</option>\n                  <option value=\"1024x768\">1024 by 768</option>\n                  <option value=\"other\">Custom</option>\n                </select>\n              </label>\n              <div *ngIf=\"topRightDim == 'other'\" class=\"form-group\">\n                <label>\n                  Width\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topRightWidth\">\n                </label>\n              </div>\n              <div *ngIf=\"topRightDim == 'other'\" class=\"form-group\">\n                <label>\n                  Height\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topRightHeight\">\n                </label>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"right\">\n            <t-test-plot #topRightPlot name=\"top-right-export\"\n              [project]=\"project\" [hover-disabled]=\"true\"\n              [disable-drag]=\"true\"\n              [hide-drop-lines]=\"!topRightDropLines\"\n              [hide-target]=\"!topRightTarget\"\n              [fixed-width]=\"topRightWidth\" [fixed-height]=\"topRightHeight\"\n              [legend-x-offset]=\"topRightLegendXOffset\"\n              [legend-y-offset]=\"topRightLegendYOffset\">\n            </t-test-plot>\n          </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab [title]=\"bottomTitle\">\n        <ng-template ngbTabContent>\n          <div class=\"left\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"\n                  [(ngModel)]=\"includeBottom\">\n                  Export this graph\n              </label>\n            </div>\n            <ng-template [ngIf]=\"includeBottom\">\n              <label>\n                Dimensions\n                <select class=\"form-control\" name=\"bottomDim\"\n                  [(ngModel)]=\"bottomDim\" (ngModelChange)=\"setDim('bottom', $event)\">\n                  <option value=\"640x160\">640 by 160</option>\n                  <option value=\"800x200\">800 by 200</option>\n                  <option value=\"1024x256\">1024 by 256</option>\n                  <option value=\"other\">Custom</option>\n                </select>\n              </label>\n              <div *ngIf=\"bottomDim == 'other'\" class=\"form-group\">\n                <label>\n                  Width\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"bottomWidth\">\n                </label>\n              </div>\n              <div *ngIf=\"bottomDim == 'other'\" class=\"form-group\">\n                <label>\n                  Height\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"bottomHeight\">\n                </label>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"right\">\n            <t-test-bottom-plot #bottomPlot name=\"bottom-export\"\n              [project]=\"project\"\n              [disable-drag-target]=\"true\" [disable-drag-ci]=\"true\"\n              [fixed-width]=\"bottomWidth\" [fixed-height]=\"bottomHeight\">\n            </t-test-bottom-plot>\n          </div>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <div class=\"d-flex-inline flex-row\">\n    <div class=\"form-inline\">\n      <label for=\"export-image-format\" class=\"mr-sm-2\">Image format:</label>\n      <select id=\"export-image-format\" class=\"form-control\" name=\"imageFormat\"\n        [ngModel]=\"imageFormat\" (ngModelChange)=\"imageFormat = $event\">\n        <option *ngFor=\"let format of imageFormats\"\n          [selected]=\"imageFormat == format\">{{format}}</option>\n      </select>\n    </div>\n  </div>\n  <p>\n    The graphs you have chosen will be packaged in a ZIP file.\n    <a #downloadLink style=\"display: none\"></a>\n  </p>\n  <div class=\"d-flex flex-row align-items-center\">\n    <button type=\"button\" class=\"btn btn-secondary m-1\" (click)=\"save()\"\n      [disabled]=\"!includeTopLeft && !includeTopRight && !includeBottom\">\n      <i class=\"fa fa-floppy-o\"></i> Save\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary m-1\" (click)=\"cancel()\">\n      <i class=\"fa fa-circle-x\"></i> Close\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/t-test/export-plots/export-plots.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/t-test/export-plots/export-plots.component.ts ***!
  \***************************************************************/
/*! exports provided: ExportPlotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPlotsComponent", function() { return ExportPlotsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project */ "./src/app/t-test/project.ts");
/* harmony import */ var _plot_plot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plot/plot.component */ "./src/app/t-test/plot/plot.component.ts");
/* harmony import */ var _bottom_plot_bottom_plot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bottom-plot/bottom-plot.component */ "./src/app/t-test/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var _export_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../export.service */ "./src/app/export.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Platform;
(function (Platform) {
    Platform[Platform["iOS"] = 0] = "iOS";
    Platform[Platform["WP"] = 1] = "WP";
    Platform[Platform["Android"] = 2] = "Android";
    Platform[Platform["Linux"] = 3] = "Linux";
    Platform[Platform["Mac"] = 4] = "Mac";
    Platform[Platform["Windows"] = 5] = "Windows";
    Platform[Platform["BB"] = 6] = "BB";
    Platform[Platform["Other"] = 7] = "Other";
})(Platform || (Platform = {}));
/* browser.js v0.1-dev | @ajlkn | MIT licensed */
var platformPatterns = [
    [Platform.iOS, /([0-9_]+) like Mac OS X/],
    [Platform.iOS, /CPU like Mac OS X/],
    [Platform.WP, /Windows Phone ([0-9\.]+)/],
    [Platform.Android, /Android ([0-9\.]+)/],
    [Platform.Linux, /Linux/],
    [Platform.Mac, /Macintosh.+Mac OS X ([0-9_]+)/],
    [Platform.Windows, /Windows NT ([0-9\.]+)/],
    [Platform.BB, /BlackBerry.+Version\/([0-9\.]+)/],
    [Platform.BB, /BB[0-9]+.+Version\/([0-9\.]+)/],
];
var ExportPlotsComponent = /** @class */ (function () {
    function ExportPlotsComponent(activeModal, exportService) {
        this.activeModal = activeModal;
        this.exportService = exportService;
        this.includeTopLeft = true;
        this.topLeftDim = "640x480";
        this.topLeftWidth = 640;
        this.topLeftHeight = 480;
        this.topLeftDropLines = true;
        this.topLeftTarget = true;
        this.includeTopRight = true;
        this.topRightDim = "640x480";
        this.topRightWidth = 640;
        this.topRightHeight = 480;
        this.topRightDropLines = true;
        this.topRightTarget = true;
        this.includeBottom = true;
        this.bottomTitle = "Precision vs. Effect Size";
        this.bottomDim = "640x160";
        this.bottomWidth = 640;
        this.bottomHeight = 160;
        this.imageFormats = [];
    }
    ExportPlotsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var platform = this.detectPlatform();
        switch (platform) {
            case Platform.Windows:
                this.imageFormat = "WMF";
                break;
            case Platform.Mac:
                this.imageFormat = "EPS";
                break;
            case Platform.Linux:
                this.imageFormat = "SVG";
                break;
            default:
                this.imageFormat = "PNG";
                break;
        }
        this.exportService.formats().then(function (response) {
            _this.imageFormats = response.formats;
            var formatOk = _this.imageFormats.some(function (format) {
                return _this.imageFormat == format;
            });
            if (!formatOk) {
                // PNG will always be supported
                _this.imageFormat = "PNG";
            }
        });
        switch (this.project.getModel(0).output) {
            case "n":
            case "nByCI":
                this.topLeftTitle = "Sample Size vs. Power";
                this.topRightTitle = "Sample Size vs. Detectable Alternative";
                break;
            case "power":
                this.topLeftTitle = "Power vs. Sample Size";
                this.topRightTitle = "Power vs. Detectable Alternative";
                break;
            case "delta":
                this.topLeftTitle = "Detectable Alternative vs. Sample Size";
                this.topRightTitle = "Detectable Alternative vs. Power";
                break;
        }
    };
    ExportPlotsComponent.prototype.detectPlatform = function () {
        if (navigator) {
            var ua = navigator.userAgent;
            for (var i = 0, ilen = platformPatterns.length; i < ilen; i++) {
                var pattern = platformPatterns[i];
                if (ua.match(pattern[1])) {
                    return pattern[0];
                }
            }
        }
        return Platform.Other;
    };
    ExportPlotsComponent.prototype.setDim = function (which, value) {
        if (value != 'other') {
            var arr = value.split("x");
            this[which + "Width"] = parseInt(arr[0]);
            this[which + "Height"] = parseInt(arr[1]);
        }
    };
    ExportPlotsComponent.prototype.serializePlot = function (plot) {
        var serializer = new XMLSerializer();
        return serializer.serializeToString(plot.plotElement.nativeElement);
    };
    ExportPlotsComponent.prototype.save = function () {
        var _this = this;
        var plots = [];
        if (this.includeTopLeft) {
            plots.push({
                name: this.topLeftTitle,
                width: this.topLeftWidth,
                height: this.topLeftHeight,
                svg: this.serializePlot(this.topLeftPlot)
            });
        }
        if (this.includeTopRight) {
            plots.push({
                name: this.topRightTitle,
                width: this.topRightWidth,
                height: this.topRightHeight,
                svg: this.serializePlot(this.topRightPlot)
            });
        }
        if (this.includeBottom) {
            plots.push({
                name: this.bottomTitle,
                width: this.bottomWidth,
                height: this.bottomHeight,
                svg: this.serializePlot(this.bottomPlot)
            });
        }
        this.exportService.plots(this.imageFormat, plots).then(function (response) {
            var data = atob(response.data);
            var buf = new ArrayBuffer(data.length);
            var arr = new Uint8Array(buf);
            for (var i = 0; i < data.length; i++) {
                arr[i] = data.charCodeAt(i);
            }
            var blob = new Blob([buf], { type: 'application/zip' });
            var url = URL.createObjectURL(blob);
            var elt = _this.downloadLink.nativeElement;
            elt.href = url;
            elt.download = response.filename;
            elt.click();
            URL.revokeObjectURL(url);
            _this.activeModal.close();
        });
    };
    ExportPlotsComponent.prototype.cancel = function () {
        this.activeModal.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('project'),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_2__["Project"])
    ], ExportPlotsComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('top-left-legend-x-offset'),
        __metadata("design:type", Number)
    ], ExportPlotsComponent.prototype, "topLeftLegendXOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('top-left-legend-y-offset'),
        __metadata("design:type", Number)
    ], ExportPlotsComponent.prototype, "topLeftLegendYOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('top-right-legend-x-offset'),
        __metadata("design:type", Number)
    ], ExportPlotsComponent.prototype, "topRightLegendXOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('top-right-legend-y-offset'),
        __metadata("design:type", Number)
    ], ExportPlotsComponent.prototype, "topRightLegendYOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('topLeftPlot'),
        __metadata("design:type", _plot_plot_component__WEBPACK_IMPORTED_MODULE_3__["PlotComponent"])
    ], ExportPlotsComponent.prototype, "topLeftPlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('topRightPlot'),
        __metadata("design:type", _plot_plot_component__WEBPACK_IMPORTED_MODULE_3__["PlotComponent"])
    ], ExportPlotsComponent.prototype, "topRightPlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bottomPlot'),
        __metadata("design:type", _bottom_plot_bottom_plot_component__WEBPACK_IMPORTED_MODULE_4__["BottomPlotComponent"])
    ], ExportPlotsComponent.prototype, "bottomPlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('downloadLink'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ExportPlotsComponent.prototype, "downloadLink", void 0);
    ExportPlotsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't-test-export-plots',
            template: __webpack_require__(/*! ./export-plots.component.html */ "./src/app/t-test/export-plots/export-plots.component.html"),
            styles: [__webpack_require__(/*! ./export-plots.component.css */ "./src/app/t-test/export-plots/export-plots.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _export_service__WEBPACK_IMPORTED_MODULE_5__["ExportService"]])
    ], ExportPlotsComponent);
    return ExportPlotsComponent;
}());



/***/ }),

/***/ "./src/app/t-test/help/help.component.css":
/*!************************************************!*\
  !*** ./src/app/t-test/help/help.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/t-test/help/help.component.html":
/*!*************************************************!*\
  !*** ./src/app/t-test/help/help.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"topic == 'overview'\">\n  <h5>Introduction</h5>\n  <p>\n    PS is a program for performing power and sample size calculations. You are\n    using a web-enabled beta-test version of the program, where we are actively\n    working on the interactive user interface. Currently, it can only be used\n    for paired t-tests but it will be expanded for use in studies with\n    dichotomous, continuous, survival response and other data.\n  </p>\n  <h5>Program Output</h5>\n  <p>\n    The program can determine the sample size needed to detect a specified\n    alternative hypothesis with the required power, the power with which a\n    specific alternative hypothesis can be detected with a given sample size,\n    or the specific alternative hypotheses that can be detected with a given\n    power and sample size. It also gives the 95% confidence interval for the\n    test statistic under the specified alternative hypothesis as a measure of\n    the precision of the test statistic.\n  </p>\n  <h5>Interactive Help</h5>\n  <p>\n    Click on any question-mark icon for help or pull-down menu to determine\n    the needed information. In the Start tab, choose one of sample size,\n    power, or detectable difference  and then complete the other fields that\n    appear. Hover over the i icon for information on what is needed in each\n    field. Then click the calculate button. A new tab will appear with\n    sliders for altering the input variables, the desired output variable and\n    various graphs.\n  </p>\n  <h5>Graphical Output</h5>\n  <p>\n    The graphs that can be generated are sample size vs. power, sample size\n    vs. the detectable alternative hypothesis, power vs. sample size, and\n    power vs. the detectable alternative hypothesis.  The y-axes of these\n    graphs are always show the output variable. In addition, a graph of\n    precision vs effect size is always given.  The red dot on the top two\n    graphs can be dragged to enhance the users intuition on how the input and\n    output variables interact.\n  </p>\n  <h5>Interpretation</h5>\n  <p>\n    The output also includes text that describes the power or sample size\n    calculation in English, which may be a useful starting point for a\n    description in a grant application.\n  </p>\n  <h5>Options gear wheel</h5>\n  <p>\n    Click on this icon to change the point size, line width and other graph\n    options.\n  </p>\n  <p>\n    <img src=\"assets/cc.png\"> &copy; William D. Dupont, Jeffrey D. Blume, W.\n    Dale Plummer, Jeremy Stephens 2017-2018\n  </p>\n  <p>\n    Use of this program is restricted by a Creative Commons Attribution\n    Non-Commercial Share Alike license. See\n    <a href=\"https://creativecommons.org/licenses\">https://creativecommons.org/licenses</a>\n    for details. We are grateful for support from Dr. Gordon R. Bernard and\n    the Vanderbilt Institute for Clinical and Translational Research.\n  </p>\n</ng-template>\n<ng-template [ngIf]=\"topic == 'start'\">\n  <p>Select one of the following:</p>\n  <h5>Sample size</h5>\n  <p>\n    For independent t-tests this is the number of experimental patients that\n    must be studied to detect a true difference in population means &delta;\n    with Type I error probability &alpha; given a standard deviation &sigma;\n    and <em>m</em> controls per experimental patient. For paired t-tests it\n    is the number of pairs of patients needed to detect a true difference in\n    population means &delta; with Type I error probability &alpha; given a\n    standard deviation &sigma;.\n  </p>\n  <h5>Power</h5>\n  <p>\n    For independent studies it is the probability of rejecting the null\n    hypothesis with Type I error probability &alpha; given the specified\n    sample size, a standard deviation &sigma; and a control/experimental\n    patient ratio <em>m</em> when the true difference in population means is\n    &delta;. For paired studies it is the probability of rejecting the null\n    hypothesis with Type I error probability &alpha; given the specified\n    sample size, a standard deviation &sigma; when the true difference in\n    population means is &delta;.\n  </p>\n  <h5>Detectable alternative</h5>\n  <p>\n    A difference in population means that can be detected with the specified\n    power and Type I error probability &alpha; given a standard deviation\n    &sigma;, and the specified sample size.\n  </p>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/t-test/help/help.component.ts":
/*!***********************************************!*\
  !*** ./src/app/t-test/help/help.component.ts ***!
  \***********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HelpComponent.prototype, "topic", void 0);
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't-test-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/t-test/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/t-test/help/help.component.css")]
        })
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/t-test/output-pane/output-pane.component.css":
/*!**************************************************************!*\
  !*** ./src/app/t-test/output-pane/output-pane.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plot {\n  height: 80%;\n  /*min-height: 500px;*/\n  position: relative;\n}\n.without-footer {\n  height: 100%;\n}\ndiv.show-footer {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n}\n.output-footer {\n  position: relative;\n  background-color: #e5e5e5;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  /*padding: 10px 20px;*/\n  /*text-align: justify;*/\n  /*overflow: auto;*/\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.footer-buttons {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n.footer-buttons i {\n  margin: 0 3px;\n}\n.dot {\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/t-test/output-pane/output-pane.component.html":
/*!***************************************************************!*\
  !*** ./src/app/t-test/output-pane/output-pane.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"t-test-output-pane-plots\" class=\"plot\" [class.without-footer]=\"!showFooter\">\n  <t-test-plot #topLeft name=\"top-left\"\n    [project]=\"project\"\n    [hover-disabled]=\"hoverDisabled\"\n    (modelChanged)=\"onModelChanged()\">\n  </t-test-plot>\n  <t-test-plot #topRight name=\"top-right\"\n    [project]=\"project\"\n    [hover-disabled]=\"hoverDisabled\"\n    (modelChanged)=\"onModelChanged()\">\n  </t-test-plot>\n  <t-test-bottom-plot #bottom name=\"bottom\"\n    [project]=\"project\"\n    [disable-drag-target]=\"model?.output == 'delta'\"\n    [disable-drag-ci]=\"model?.output == 'n'\"\n    (modelChanged)=\"onModelChanged()\">\n  </t-test-bottom-plot>\n  <div class=\"show-footer\" *ngIf=\"project && !showFooter\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleFooter(true)\">\n      <i class=\"fa fa-envelope-open-o\" aria-hidden=\"true\" title=\"Show footer\"></i>\n      Interpretation / Log\n    </button>\n  </div>\n</div>\n<div id=\"t-test-output-pane-footer\" class=\"output-footer\" *ngIf=\"project && showFooter\">\n  <div class=\"footer-buttons\">\n    <button type=\"button\" (click)=\"copyFooter()\" title=\"Copy to clipboard\">\n      <i class=\"fa fa-clipboard\"></i>\n    </button>\n    <button type=\"button\" (click)=\"toggleFooter(false)\" title=\"Hide footer\">\n      <i class=\"fa fa-window-minimize\"></i>\n    </button>\n  </div>\n  <ngb-tabset #footerTabset type=\"pills\">\n    <ngb-tab id=\"t-test-output-pane-interpretation\">\n      <ng-template ngbTabTitle>\n        <i *ngIf=\"project.models.length > 1\" class=\"fa fa-square\"\n          [style.color]=\"getIndicatorColor()\"></i>\n        Interpretation\n      </ng-template>\n      <ng-template ngbTabContent>\n        {{model?.interpretation()}}\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab id=\"t-test-output-pane-log\" title=\"Log\">\n      <ng-template ngbTabContent>\n        <ng-template [ngIf]=\"!project\" [ngIfElse]=\"changeHistory\">\n          There have been no changes yet.\n        </ng-template>\n        <ng-template #changeHistory>\n          <ul class=\"log\">\n            <li *ngFor=\"let changes of project.changeHistory\"\n              [innerHTML]=\"project.describeChanges(changes)\">\n            </li>\n          </ul>\n        </ng-template>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n"

/***/ }),

/***/ "./src/app/t-test/output-pane/output-pane.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/t-test/output-pane/output-pane.component.ts ***!
  \*************************************************************/
/*! exports provided: OutputPaneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputPaneComponent", function() { return OutputPaneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project */ "./src/app/t-test/project.ts");
/* harmony import */ var _plot_plot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plot/plot.component */ "./src/app/t-test/plot/plot.component.ts");
/* harmony import */ var _bottom_plot_bottom_plot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bottom-plot/bottom-plot.component */ "./src/app/t-test/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var _export_plots_export_plots_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../export-plots/export-plots.component */ "./src/app/t-test/export-plots/export-plots.component.ts");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../plot-options.service */ "./src/app/plot-options.service.ts");
/* harmony import */ var _palette_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../palette.service */ "./src/app/palette.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OutputPaneComponent = /** @class */ (function () {
    function OutputPaneComponent(modalService, plotOptions, palette) {
        this.modalService = modalService;
        this.plotOptions = plotOptions;
        this.palette = palette;
        this.hoverDisabled = false;
        this.modelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showFooter = true;
    }
    OutputPaneComponent.prototype.ngOnChanges = function (changes) {
        if (!('project' in changes))
            return;
        if (this.project) {
            this.model = this.project.getModel(this.project.selectedIndex);
        }
        else {
            this.model = undefined;
        }
    };
    OutputPaneComponent.prototype.toggleFooter = function (value) {
        this.showFooter = value;
        setTimeout(this.resize.bind(this), 1);
    };
    OutputPaneComponent.prototype.openSaveDialog = function () {
        var modalRef = this.modalService.open(_export_plots_export_plots_component__WEBPACK_IMPORTED_MODULE_5__["ExportPlotsComponent"], { windowClass: 'export-plots' });
        var component = modalRef.componentInstance;
        component.project = this.project;
        component.topLeftLegendXOffset = this.topLeftPlot.legendXOffset;
        component.topLeftLegendYOffset = this.topLeftPlot.legendYOffset;
        component.topRightLegendXOffset = this.topRightPlot.legendXOffset;
        component.topRightLegendYOffset = this.topRightPlot.legendYOffset;
    };
    OutputPaneComponent.prototype.round = function (n) {
        return Math.round(n * 100) / 100;
    };
    OutputPaneComponent.prototype.ceil = function (n) {
        return Math.ceil(n);
    };
    OutputPaneComponent.prototype.resize = function () {
        this.redrawPlots();
    };
    OutputPaneComponent.prototype.updateProject = function () {
        if (this.project) {
            this.model = this.project.getModel(this.project.selectedIndex);
        }
    };
    OutputPaneComponent.prototype.redrawPlots = function () {
        var _this = this;
        // Set a timeout here to let the UI resize if needed
        setTimeout(function () {
            _this.topLeftPlot.redraw();
            _this.topRightPlot.redraw();
            _this.bottomPlot.redraw();
        }, 1);
    };
    OutputPaneComponent.prototype.getIndicatorColor = function () {
        return this.palette.getColor(this.project.selectedIndex, this.plotOptions.paletteTheme);
    };
    OutputPaneComponent.prototype.describeChanges = function (changes) {
        var result = [];
        for (var key in changes) {
            result.push("<span class=\"code\">" + key + "</span> was changed to <span class=\"code\">" + changes[key] + "</span>");
        }
        return result.join("; ");
    };
    OutputPaneComponent.prototype.copyFooter = function () {
        document.execCommand('copy');
    };
    OutputPaneComponent.prototype.onCopy = function (event) {
        var _this = this;
        switch (this.footerTabset.activeId) {
            case 't-test-output-pane-interpretation':
                event.clipboardData.setData('text/plain', this.model.interpretation());
                event.preventDefault();
                break;
            case 't-test-output-pane-log':
                var text = this.project.changeHistory.
                    map(function (changes) { return _this.project.describeChanges(changes, false); }).
                    join("\r\n");
                event.clipboardData.setData('text/plain', text);
                event.preventDefault();
                break;
        }
    };
    OutputPaneComponent.prototype.onModelChanged = function () {
        this.modelChanged.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('project'),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_2__["Project"])
    ], OutputPaneComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hover-disabled'),
        __metadata("design:type", Object)
    ], OutputPaneComponent.prototype, "hoverDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutputPaneComponent.prototype, "modelChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('topLeft'),
        __metadata("design:type", _plot_plot_component__WEBPACK_IMPORTED_MODULE_3__["PlotComponent"])
    ], OutputPaneComponent.prototype, "topLeftPlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('topRight'),
        __metadata("design:type", _plot_plot_component__WEBPACK_IMPORTED_MODULE_3__["PlotComponent"])
    ], OutputPaneComponent.prototype, "topRightPlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bottom'),
        __metadata("design:type", _bottom_plot_bottom_plot_component__WEBPACK_IMPORTED_MODULE_4__["BottomPlotComponent"])
    ], OutputPaneComponent.prototype, "bottomPlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('saveDialog'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], OutputPaneComponent.prototype, "saveDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('footerTabset'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"])
    ], OutputPaneComponent.prototype, "footerTabset", void 0);
    OutputPaneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't-test-output-pane',
            template: __webpack_require__(/*! ./output-pane.component.html */ "./src/app/t-test/output-pane/output-pane.component.html"),
            styles: [__webpack_require__(/*! ./output-pane.component.css */ "./src/app/t-test/output-pane/output-pane.component.css")],
            host: {
                '(document:copy)': 'onCopy($event)'
            }
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _plot_options_service__WEBPACK_IMPORTED_MODULE_6__["PlotOptionsService"],
            _palette_service__WEBPACK_IMPORTED_MODULE_7__["PaletteService"]])
    ], OutputPaneComponent);
    return OutputPaneComponent;
}());



/***/ }),

/***/ "./src/app/t-test/plot-options/plot-options.component.css":
/*!****************************************************************!*\
  !*** ./src/app/t-test/plot-options/plot-options.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset {\n  border: 1px solid #bbb;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px;\n}\n\nfieldset legend {\n  font-size: inherit;\n  font-weight: bold;\n  display: table;\n  width: auto;\n}\n\nh4 {\n  font-size: inherit;\n  font-weight: bold;\n  border-bottom: 1px solid #bbb;\n  margin: 1em 0;\n  padding-bottom: 0.2em;\n}\n\ndiv.disabled {\n  opacity: 0.5;\n}\n\n.form-group {\n  padding: 0 5px;\n}\n"

/***/ }),

/***/ "./src/app/t-test/plot-options/plot-options.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/t-test/plot-options/plot-options.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"plotOptions && project\" class=\"content\">\n  <fieldset>\n    <legend>Global</legend>\n    <div class=\"form-group\">\n      <label for=\"plot-font-family\">Font family</label>\n      <select #fontFamily id=\"plot-font-family\" class=\"form-control\"\n        [value]=\"plotOptions.fontFamily\"\n        (change)=\"changeAttribute('fontFamily', fontFamily.value)\">\n        <option value=\"\">Default</option>\n        <option value=\"serif\">Serif</option>\n        <option value=\"sans\">Sans-serif</option>\n        <option value=\"monospace\">Monospace</option>\n        <option>Bungee Shade</option>\n        <option>Sancreek</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"plot-palette-theme\">Color palette</label>\n      <select #paletteTheme id=\"plot-palette-theme\" class=\"form-control\"\n        [value]=\"plotOptions.paletteTheme\"\n        (change)=\"changeAttribute('paletteTheme', paletteTheme.value)\">\n        <option value=\"typical\">Default</option>\n        <option value=\"plasma\">Plasma</option>\n        <option value=\"viridis\">Viridis</option>\n        <option value=\"magma\">Magma</option>\n        <option value=\"pattern\">Pattern</option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-font-size\">Font size: {{plotOptions.fontSize}}</label>\n        <div class=\"input-group\">\n          <input #fontSize id=\"plot-font-size\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [value]=\"plotOptions.fontSize\"\n            (change)=\"changeNumberAttribute('fontSize', fontSize.value)\"\n            (input)=\"changeNumberAttribute('fontSize', fontSize.value)\" />\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <label for=\"plot-axis-font-size\">Axis font size: {{plotOptions.axisFontSize}}</label>\n        <div class=\"input-group\">\n          <input #axisFontSize id=\"plot-axis-font-size\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [value]=\"plotOptions.axisFontSize\"\n            (change)=\"changeNumberAttribute('axisFontSize', axisFontSize.value)\"\n            (input)=\"changeNumberAttribute('axisFontSize', axisFontSize.value)\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-line-width\">Line width: {{plotOptions.lineWidth}}</label>\n        <div class=\"input-group\">\n          <input #lineWidth id=\"plot-line-width\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [value]=\"plotOptions.lineWidth\"\n            (change)=\"changeNumberAttribute('lineWidth', lineWidth.value)\"\n            (input)=\"changeNumberAttribute('lineWidth', lineWidth.value)\" />\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <label for=\"plot-axis-line-width\">Axis line width: {{plotOptions.axisLineWidth}}</label>\n        <div class=\"input-group\">\n          <input #axisLineWidth id=\"plot-axis-line-width\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [value]=\"plotOptions.axisLineWidth\"\n            (change)=\"changeNumberAttribute('axisLineWidth', axisLineWidth.value)\"\n            (input)=\"changeNumberAttribute('axisLineWidth', axisLineWidth.value)\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"plot-line-style\">Line style</label>\n      <select #lineStyle id=\"plot-line-style\" class=\"form-control\"\n        [value]=\"plotOptions.lineStyle\"\n        (change)=\"changeAttribute('lineStyle', lineStyle.value)\">\n        <option value=\"solid\">Solid</option>\n        <option value=\"short-dash\">Short Dash</option>\n        <option value=\"medium-dash\">Medium Dash</option>\n        <option value=\"long-dash\">Long Dash</option>\n        <option value=\"dot\">Dotted</option>\n      </select>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input #showLegendBox class=\"form-check-input\" type=\"checkbox\"\n          [checked]=\"plotOptions.showLegendBox\"\n          (change)=\"changeAttribute('showLegendBox', showLegendBox.checked)\"\n          (input)=\"changeAttribute('showLegendBox', showLegendBox.checked)\" />\n        Display legend background\n      </label>\n    </div>\n  </fieldset>\n  <fieldset>\n    <legend>Project</legend>\n    <app-range-slider name=\"projectPointsPerPlot\" label=\"Points per plot\"\n      [min]=\"50\" [max]=\"200\" [hard-min]=\"50\" [hard-max]=\"200\" [step]=\"1\"\n      [ngModel]=\"project.pointsPerPlot\"\n      (ngModelChange)=\"setProjectNumberAttribute('pointsPerPlot', $event)\">\n      <ng-template rsHelp>\n        The number of points to use when drawing plots. More is slower. The\n        number of points to use by default is calculated based on host speed.\n      </ng-template>\n    </app-range-slider>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input #customRanges class=\"form-check-input\" type=\"checkbox\"\n          [checked]=\"project.customRanges\"\n          (change)=\"setProjectAttribute('customRanges', customRanges.checked)\" />\n        Custom plot ranges\n      </label>\n    </div>\n\n    <div class=\"ranges\" [class.disabled]=\"!project.customRanges\">\n      <h4 *ngIf=\"model.output == 'n' || model.output == 'nByCI'\">Sample Size</h4>\n      <h4 *ngIf=\"model.output == 'power'\">Power</h4>\n      <h4 *ngIf=\"model.output == 'delta'\">Detectable Alternative</h4>\n      <div class=\"row mb-4\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-y-min\">Minimum</label>\n          <div class=\"input-group\">\n            <ng-template [ngIf]=\"model.output == 'n' || model.output == 'nByCI'\">\n              <input #nRangeMin *ngIf=\"project.nRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.nRange.max - 1) | round\"\n                [value]=\"project.nRange.min | round\"\n                (change)=\"setProjectRange('n', 'min', nRangeMin.value)\"\n                (input)=\"setProjectRange('n', 'min', nRangeMin.value, true)\"/>\n            </ng-template>\n            <ng-template [ngIf]=\"model.output == 'power'\">\n              <input #powerRangeMin *ngIf=\"project.powerRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.powerRange.max - 0.01) | round\"\n                [value]=\"project.powerRange.min | round\"\n                (change)=\"setProjectRange('power', 'min', powerRangeMin.value)\"\n                (input)=\"setProjectRange('power', 'min', powerRangeMin.value, true)\"/>\n            </ng-template>\n            <ng-template [ngIf]=\"model.output == 'delta'\">\n              <input #deltaRangeMin *ngIf=\"project.deltaRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.deltaRange.max - 0.01) | round\"\n                [value]=\"project.deltaRange.min | round\"\n                (change)=\"setProjectRange('delta', 'min', deltaRangeMin.value)\"\n                (input)=\"setProjectRange('delta', 'min', deltaRangeMin.value, true)\"/>\n            </ng-template>\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-y-max\">Maximum</label>\n          <div class=\"input-group\">\n            <ng-template [ngIf]=\"model.output == 'n' || model.output == 'nByCI'\">\n              <input #nRangeMax *ngIf=\"project.nRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.nRange.min + 1) | round\"\n                [value]=\"project.nRange.max | round\"\n                (change)=\"setProjectRange('n', 'max', nRangeMax.value)\"\n                (input)=\"setProjectRange('n', 'max', nRangeMax.value, true)\"/>\n            </ng-template>\n            <ng-template [ngIf]=\"model.output == 'power'\">\n              <input #powerRangeMax *ngIf=\"project.powerRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.powerRange.min + 0.01) | round\"\n                [value]=\"project.powerRange.max | round\"\n                (change)=\"setProjectRange('power', 'max', powerRangeMax.value)\"\n                (input)=\"setProjectRange('power', 'max', powerRangeMax.value, true)\"/>\n            </ng-template>\n            <ng-template [ngIf]=\"model.output == 'delta'\">\n              <input #deltaRangeMax *ngIf=\"project.deltaRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.deltaRange.min + 0.01) | round\"\n                [value]=\"project.deltaRange.max | round\"\n                (change)=\"setProjectRange('delta', 'max', deltaRangeMax.value)\"\n                (input)=\"setProjectRange('delta', 'max', deltaRangeMax.value, true)\"/>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n      <ng-template [ngIf]=\"model.output == 'n' || model.output == 'nByCI'\">\n        <h4>Sample Size vs. Power</h4>\n        <div class=\"row mb-4\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input #powerRangeMin *ngIf=\"project.powerRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.powerRange.max - 0.01) | round\"\n                [value]=\"project.powerRange.min | round\"\n                (change)=\"setProjectRange('power', 'min', powerRangeMin.value)\"\n                (input)=\"setProjectRange('power', 'min', powerRangeMin.value, true)\"/>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input #powerRangeMax *ngIf=\"project.powerRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.powerRange.min + 0.01) | round\"\n                [value]=\"project.powerRange.max | round\"\n                (change)=\"setProjectRange('power', 'max', powerRangeMax.value)\"\n                (input)=\"setProjectRange('power', 'max', powerRangeMax.value, true)\"/>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"model.output == 'power'\">\n        <h4>Power vs. Sample Size</h4>\n        <div class=\"row mb-4\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input #nRangeMin *ngIf=\"project.nRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.nRange.max - 1) | round\"\n                [value]=\"project.nRange.min | round\"\n                (change)=\"setProjectRange('n', 'min', nRangeMin.value)\"\n                (input)=\"setProjectRange('n', 'min', nRangeMin.value, true)\"/>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input #nRangeMax *ngIf=\"project.nRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.nRange.min + 1) | round\"\n                [value]=\"project.nRange.max | round\"\n                (change)=\"setProjectRange('n', 'max', nRangeMax.value)\"\n                (input)=\"setProjectRange('n', 'max', nRangeMax.value, true)\"/>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"model.output == 'delta'\">\n        <h4>Detectable Alternative vs. Sample Size</h4>\n        <div class=\"row mb-4\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input #nRangeMin *ngIf=\"project.nRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.nRange.max - 1) | round\"\n                [value]=\"project.nRange.min | round\"\n                (change)=\"setProjectRange('n', 'min', nRangeMin.value)\"\n                (input)=\"setProjectRange('n', 'min', nRangeMin.value, true)\"/>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input #nRangeMax *ngIf=\"project.nRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.nRange.min + 1) | round\"\n                [value]=\"project.nRange.max | round\"\n                (change)=\"setProjectRange('n', 'max', nRangeMax.value)\"\n                (input)=\"setProjectRange('n', 'max', nRangeMax.value, true)\"/>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"model.output == 'n' || model.output == 'nByCI'\">\n        <h4>Sample Size vs. Detectable Alternative</h4>\n        <div class=\"row mb-4\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-right-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input #deltaRangeMin *ngIf=\"project.deltaRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.deltaRange.max - 1) | round\"\n                [value]=\"project.deltaRange.min | round\"\n                (change)=\"setProjectRange('delta', 'min', deltaRangeMin.value)\"\n                (input)=\"setProjectRange('delta', 'min', deltaRangeMin.value, true)\"/>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-right-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input #deltaRangeMax *ngIf=\"project.deltaRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.deltaRange.min - 1) | round\"\n                [value]=\"project.deltaRange.max | round\"\n                (change)=\"setProjectRange('delta', 'max', deltaRangeMax.value)\"\n                (input)=\"setProjectRange('delta', 'max', deltaRangeMax.value, true)\"/>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"model.output == 'power'\">\n        <h4>Power vs. Detectable Alternative</h4>\n        <div class=\"row mb-4\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-right-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input #deltaRangeMin *ngIf=\"project.deltaRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.deltaRange.max - 1) | round\"\n                [value]=\"project.deltaRange.min | round\"\n                (change)=\"setProjectRange('delta', 'min', deltaRangeMin.value)\"\n                (input)=\"setProjectRange('delta', 'min', deltaRangeMin.value, true)\"/>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-right-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input #deltaRangeMax *ngIf=\"project.deltaRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.deltaRange.min - 1) | round\"\n                [value]=\"project.deltaRange.max | round\"\n                (change)=\"setProjectRange('delta', 'max', deltaRangeMax.value)\"\n                (input)=\"setProjectRange('delta', 'max', deltaRangeMax.value, true)\"/>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"model.output == 'delta'\">\n        <h4>Detectable Alternative vs. Power</h4>\n        <div class=\"row mb-4\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input #powerRangeMin *ngIf=\"project.powerRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.powerRange.max - 0.01) | round\"\n                [value]=\"project.powerRange.min | round\"\n                (change)=\"setProjectRange('power', 'min', powerRangeMin.value)\"\n                (input)=\"setProjectRange('power', 'min', powerRangeMin.value, true)\"/>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input #powerRangeMax *ngIf=\"project.powerRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.powerRange.min + 0.01) | round\"\n                [value]=\"project.powerRange.max | round\"\n                (change)=\"setProjectRange('power', 'max', powerRangeMax.value)\"\n                (input)=\"setProjectRange('power', 'max', powerRangeMax.value, true)\"/>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <h4>Precision vs. Parameter Space</h4>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-bottom-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input #pSpaceRangeMin *ngIf=\"project.pSpaceRange\" class=\"form-control\"\n              [disabled]=\"!project.customRanges\"\n              type=\"number\" step=\"0.01\" [max]=\"(project.pSpaceRange.max - 1) | round\"\n              [value]=\"project.pSpaceRange.min | round\"\n              (change)=\"setProjectRange('pSpace', 'min', pSpaceRangeMin.value)\"\n              (input)=\"setProjectRange('pSpace', 'min', pSpaceRangeMin.value, true)\"/>\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-bottom-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input #pSpaceRangeMax *ngIf=\"project.pSpaceRange\" class=\"form-control\"\n              [disabled]=\"!project.customRanges\"\n              type=\"number\" step=\"0.01\" [min]=\"(project.pSpaceRange.min + 1) | round\"\n              [value]=\"project.pSpaceRange.max | round\"\n              (change)=\"setProjectRange('pSpace', 'max', pSpaceRangeMax.value)\"\n              (input)=\"setProjectRange('pSpace', 'max', pSpaceRangeMax.value, true)\"/>\n          </div>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"doReset()\">\n    Reset all settings\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/t-test/plot-options/plot-options.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/t-test/plot-options/plot-options.component.ts ***!
  \***************************************************************/
/*! exports provided: PlotOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotOptionsComponent", function() { return PlotOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project */ "./src/app/t-test/project.ts");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../plot-options.service */ "./src/app/plot-options.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlotOptionsComponent = /** @class */ (function () {
    function PlotOptionsComponent(plotOptions) {
        this.plotOptions = plotOptions;
        this.optionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectChangedDelay = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.projectChangedImmediate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PlotOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rangeSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.projectChangedDelay.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400)), this.projectChangedImmediate).subscribe(function (change) {
            if (change.subname) {
                _this.project[change.name][change.subname] = change.value;
            }
            else {
                _this.project[change.name] = change.value;
            }
            if (change.name == 'customRanges' && !change.value) {
                _this.project.resetRanges();
            }
            _this.project.updatePlotData().then(function () {
                _this.projectChanged.emit();
            });
        });
    };
    PlotOptionsComponent.prototype.ngOnChanges = function (changes) {
        if (this.project) {
            this.model = this.project.getModel(0);
        }
    };
    PlotOptionsComponent.prototype.doReset = function () {
        var _this = this;
        this.plotOptions.reset();
        this.project.resetRanges();
        this.project.updatePlotData().then(function () {
            _this.reset.emit();
        });
    };
    PlotOptionsComponent.prototype.changeAttribute = function (name, value) {
        if (this.plotOptions[name] !== value) {
            this.plotOptions[name] = value;
            this.optionChanged.emit();
        }
    };
    PlotOptionsComponent.prototype.changeNumberAttribute = function (name, value) {
        var n = parseFloat(value);
        if (!isNaN(n)) {
            this.changeAttribute(name, n);
        }
    };
    PlotOptionsComponent.prototype.setProjectAttribute = function (name, value) {
        var change = { name: name, value: value };
        this.projectChangedImmediate.next(change);
    };
    PlotOptionsComponent.prototype.setProjectNumberAttribute = function (name, value) {
        var n = parseFloat(value);
        if (isNaN(n))
            return;
        this.setProjectAttribute(name, n);
    };
    PlotOptionsComponent.prototype.setProjectRange = function (name, which, value, delay) {
        if (delay === void 0) { delay = false; }
        var n = parseFloat(value);
        if (isNaN(n))
            return;
        var change = { name: name + "Range", subname: which, value: n };
        if (delay) {
            this.projectChangedDelay.next(change);
        }
        else {
            this.projectChangedImmediate.next(change);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('project'),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_3__["Project"])
    ], PlotOptionsComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlotOptionsComponent.prototype, "optionChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlotOptionsComponent.prototype, "projectChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlotOptionsComponent.prototype, "reset", void 0);
    PlotOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't-test-plot-options',
            template: __webpack_require__(/*! ./plot-options.component.html */ "./src/app/t-test/plot-options/plot-options.component.html"),
            styles: [__webpack_require__(/*! ./plot-options.component.css */ "./src/app/t-test/plot-options/plot-options.component.css")]
        }),
        __metadata("design:paramtypes", [_plot_options_service__WEBPACK_IMPORTED_MODULE_4__["PlotOptionsService"]])
    ], PlotOptionsComponent);
    return PlotOptionsComponent;
}());



/***/ }),

/***/ "./src/app/t-test/plot/plot.component.css":
/*!************************************************!*\
  !*** ./src/app/t-test/plot/plot.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".target {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.legend {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n"

/***/ }),

/***/ "./src/app/t-test/plot/plot.component.html":
/*!*************************************************!*\
  !*** ./src/app/t-test/plot/plot.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg #plot\n  [style.fontFamily]=\"plotOptions.getFontFamily()\"\n  style.fontSize=\"{{plotOptions.getFontSize()}}px\"\n  [attr.class]=\"name\" [attr.width]=\"fixedWidth\" [attr.height]=\"fixedHeight\"\n  [attr.viewBox]=\"viewBox\">\n\n  <ng-template [ngIf]=\"x && y && project\">\n    <text text-anchor=\"middle\"\n      [attr.x]=\"innerWidth / 2 + leftMargin\"\n      [attr.y]=\"height - (plotOptions.getFontSize() / 2)\">\n      {{x.title}}\n    </text>\n    <text text-anchor=\"middle\"\n      [attr.x]=\"-(innerHeight / 2 + topMargin)\"\n      [attr.y]=\"plotOptions.getFontSize()\"\n      transform=\"rotate(-90)\">\n      {{y.title}}\n    </text>\n    <text text-anchor=\"middle\" font-weight=\"bold\"\n      [attr.x]=\"innerWidth / 2 + leftMargin\"\n      [attr.y]=\"plotOptions.getFontSize()\">\n      {{title}}\n    </text>\n\n    <g *ngFor=\"let path of paths; trackBy: trackById\"\n      [attr.transform]=\"translate(leftMargin, topMargin)\">\n      <path\n        [attr.id]=\"path.id\"\n        [attr.stroke]=\"path.color\"\n        [attr.stroke-width]=\"plotOptions.getLineWidth()\"\n        [attr.stroke-dasharray]=\"path.dashArray\"\n        [attr.stroke-linecap]=\"path.lineCap\"\n        [attr.stroke-opacity]=\"path.opacity\"\n        fill=\"none\" />\n    </g>\n\n    <g id=\"{{name}}-x-axis\"\n      [attr.transform]=\"translate(leftMargin, innerHeight + topMargin)\"></g>\n    <g id=\"{{name}}-y-axis\"\n      [attr.transform]=\"translate(leftMargin, topMargin)\"></g>\n\n    <rect [attr.transform]=\"translate(leftMargin, topMargin)\"\n      [attr.width]=\"innerWidth\" [attr.height]=\"innerHeight\"\n      fill=\"none\" pointer-events=\"all\"\n      (mouseout)=\"hideHoverInfo($event)\"\n      (mousemove)=\"hover($event)\" />\n\n    <g *ngIf=\"!hideTarget\">\n      <ng-template [ngIf]=\"!hideDropLines\">\n        <g *ngFor=\"let path of dropPaths; index as dpIndex; trackBy: trackByIndex\"\n          [attr.transform]=\"translate(leftMargin, topMargin)\">\n          <path id=\"{{name}}-target-drop-{{dpIndex}}\"\n            stroke=\"red\"\n            [attr.stroke-width]=\"plotOptions.getLineWidth() / 2\"\n            stroke-dasharray=\"5, 5\"\n            fill=\"none\" />\n        </g>\n      </ng-template>\n      <circle id=\"{{name}}-target\" class=\"target\" r=\"5\"\n        [attr.transform]=\"translate(leftMargin, topMargin)\"\n        fill=\"red\"\n        (mousemove)=\"hover($event, target)\" />\n    </g>\n\n    <g id=\"{{name}}-legend\" class=\"legend\"\n       *ngIf=\"project.models.length > 1\"\n       [attr.transform]=\"translate(leftMargin + 15 + legendXOffset, topMargin + 15 + legendYOffset)\"\n       font-size=\"smaller\" (dblclick)=\"resetLegend()\">\n      <path id=\"{{name}}-legend-box\" *ngIf=\"plotOptions.showLegendBox\"\n            fill=\"white\" fill-opacity=\"0.8\"\n            stroke=\"black\" stroke-opacity=\"1\" />\n      <g id=\"{{name}}-legend-labels\">\n        <g *ngFor=\"let model of project.models; index as i; trackBy: trackByIndex\"\n           [attr.transform]=\"translate(5, 20 * plotOptions.fontSize * i)\">\n          <path\n            d=\"m0,0 l45,0\"\n            [attr.stroke]=\"getPathColor(i)\"\n            [attr.stroke-width]=\"plotOptions.getLineWidth()\"\n            [attr.stroke-dasharray]=\"getDashArray(i)\"\n            [attr.stroke-linecap]=\"getLineCap(i)\"\n            fill=\"none\" />\n          <text x=\"50\" y=\"5\">{{model.name}}</text>\n        </g>\n      </g>\n    </g>\n\n    <g id=\"{{name}}-hover-info\" *ngIf=\"isHoverInfoActive()\" pointer-events=\"none\">\n      <circle *ngIf=\"!isHoverInfoTarget()\" r=\"4\" fill=\"none\" stroke=\"blue\" />\n      <path id=\"{{name}}-hover-box\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.8\" />\n      <text id=\"{{name}}-hover-coords\" font-family=\"monospace\" text-anchor=\"middle\">\n        <tspan style=\"white-space: pre\">{{x.sym}}: {{hoverPoint.x | formatFixed:[hoverPoint.y]}}</tspan><tspan x=\"0\" dy=\"1em\" style=\"white-space: pre\">{{y.sym}}: {{hoverPoint.y | formatFixed:[hoverPoint.x]}}</tspan>\n      </text>\n    </g>\n  </ng-template>\n</svg>\n"

/***/ }),

/***/ "./src/app/t-test/plot/plot.component.ts":
/*!***********************************************!*\
  !*** ./src/app/t-test/plot/plot.component.ts ***!
  \***********************************************/
/*! exports provided: PlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotComponent", function() { return PlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stable */ "./node_modules/stable/stable.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../abstract-plot.component */ "./src/app/abstract-plot.component.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project */ "./src/app/t-test/project.ts");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../plot-options.service */ "./src/app/plot-options.service.ts");
/* harmony import */ var _palette_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../palette.service */ "./src/app/palette.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HoverInfo;
(function (HoverInfo) {
    HoverInfo[HoverInfo["Disabled"] = 0] = "Disabled";
    HoverInfo[HoverInfo["NonTarget"] = 1] = "NonTarget";
    HoverInfo[HoverInfo["Target"] = 2] = "Target";
})(HoverInfo || (HoverInfo = {}));
var PlotComponent = /** @class */ (function (_super) {
    __extends(PlotComponent, _super);
    function PlotComponent(plotOptions, palette) {
        var _this = _super.call(this, plotOptions, palette) || this;
        _this.plotOptions = plotOptions;
        _this.palette = palette;
        _this.hoverDisabled = false;
        _this.hideDropLines = false;
        _this.hideTarget = false;
        _this.disableDrag = false;
        _this.legendXOffset = 0;
        _this.legendYOffset = 0;
        _this.modelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.leftMargin = 50;
        _this.rightMargin = 50;
        _this.topMargin = 50;
        _this.bottomMargin = 50;
        _this.yAxisWidth = 10;
        _this.xAxisHeight = 10;
        _this.viewBox = "0 0 0 0";
        _this.hoverInfo = HoverInfo.Disabled;
        _this.targetDragging = false;
        _this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No;
        return _this;
    }
    PlotComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var result = this.setup();
        if (!result && this.project) {
            // this might happen if the browser elements aren't ready yet
            setTimeout(function () {
                _this.setup();
            }, 1);
        }
    };
    PlotComponent.prototype.ngAfterViewChecked = function () {
        this.draw();
    };
    PlotComponent.prototype.redraw = function () {
        this.setup();
    };
    PlotComponent.prototype.hover = function (event, target) {
        this.hoverPoint = undefined;
        this.hoverInfo = HoverInfo.Disabled;
        if (target) {
            this.hoverPoint = target;
            this.hoverInfo = HoverInfo.Target;
        }
        else if (!this.hoverDisabled) {
            var dim = event.target.getBoundingClientRect();
            var x = event.clientX - dim.left;
            //var y = event.clientY - dim.top;
            var index = this.xBisector(this.mainData, this.xScale.invert(x));
            var point = this.mainData[index];
            if (point) {
                this.hoverPoint = point;
                this.hoverInfo = HoverInfo.NonTarget;
            }
        }
        if (this.hoverPoint) {
            this.hoverX = this.xScale(this.hoverPoint.x);
            this.hoverY = this.yScale(this.hoverPoint.y);
            this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover;
        }
    };
    PlotComponent.prototype.hoverInfoY = function () {
        if (this.hoverY < this.target.y) {
            return "-3.5em";
        }
        return "1em";
    };
    PlotComponent.prototype.trackByIndex = function (index, path) {
        return index;
    };
    PlotComponent.prototype.trackById = function (index, path) {
        return path.id;
    };
    PlotComponent.prototype.isHoverInfoActive = function () {
        return this.hoverInfo != HoverInfo.Disabled;
    };
    PlotComponent.prototype.isHoverInfoTarget = function () {
        return this.hoverInfo == HoverInfo.Target;
    };
    PlotComponent.prototype.hideHoverInfo = function (event) {
        // check to make sure mouse is actually outside box and not just on top of
        // the target dot
        var dim = event.target.getBoundingClientRect();
        var x = event.clientX;
        var y = event.clientY;
        if (x < dim.left || x > dim.right || y < dim.top || y > dim.bottom) {
            this.hoverInfo = HoverInfo.Disabled;
        }
    };
    PlotComponent.prototype.getPathColor = function (index) {
        return this.palette.getColor(index, this.plotOptions.paletteTheme);
    };
    PlotComponent.prototype.getDashArray = function (index) {
        var pattern = this.palette.getPattern(index, this.plotOptions.paletteTheme);
        return this.plotOptions.dashArray(pattern);
    };
    PlotComponent.prototype.getLineCap = function (index) {
        var pattern = this.palette.getPattern(index, this.plotOptions.paletteTheme);
        return this.plotOptions.lineCap(pattern);
    };
    PlotComponent.prototype.resetLegend = function () {
        this.legendXOffset = 0;
        this.legendYOffset = 0;
    };
    PlotComponent.prototype.setupDimensions = function () {
        // dimensions
        if (this.fixedWidth) {
            this.width = this.fixedWidth;
        }
        else {
            this.width = this.getDimension('width');
            if (this.width == 0) {
                // window isn't ready to draw
                return false;
            }
        }
        if (this.fixedHeight) {
            this.height = this.fixedHeight;
        }
        else {
            this.height = this.getDimension('height');
            if (this.height == 0) {
                // window isn't ready to draw
                return false;
            }
        }
        // margin
        this.yAxisWidth = 10 +
            this.plotOptions.getAxisLineWidth() + // y axis line width
            this.plotOptions.getAxisFontSize() + 9; // y axis tick (font + tick)
        this.xAxisHeight = 10 +
            this.plotOptions.getAxisLineWidth() + // x axis line width
            (this.plotOptions.getAxisFontSize() / 2) + 9; // x axis tick (font + tick)
        this.leftMargin = this.plotOptions.getFontSize() + this.yAxisWidth + 10;
        this.rightMargin = this.plotOptions.getAxisFontSize() + 9;
        this.topMargin = this.plotOptions.getFontSize() + 10;
        this.bottomMargin = this.plotOptions.getFontSize() + this.xAxisHeight + 10;
        this.viewBox = "0 0 " + this.width + " " + this.height;
        this.innerWidth = this.width - this.leftMargin - this.rightMargin;
        this.innerHeight = this.height - this.topMargin - this.bottomMargin;
        return true;
    };
    PlotComponent.prototype.setupParams = function () {
        // Setup parameters. Dimensions should be setup by this point.
        var model = this.project.getModel(this.project.selectedIndex);
        if (model.output == 'n' || model.output == 'nByCI') {
            if (this.name == 'top-left' || this.name == 'top-left-export') {
                // Sample Size vs. Power
                this.x = {
                    name: 'power', range: this.project.powerRange, target: model.power,
                    title: 'Power', sym: '1-β'
                };
                this.dataKey = 'nVsPower';
            }
            else if (this.name == 'top-right' || this.name == 'top-right-export') {
                // Sample Size vs. Detectable Alternative
                this.x = {
                    name: 'delta', range: this.project.deltaRange, target: model.delta,
                    title: 'Detectable Alternative', sym: 'δ'
                };
                this.dataKey = 'nVsDelta';
            }
            else {
                return false;
            }
            this.y = {
                name: 'n', range: this.project.nRange, target: model.n,
                title: 'Sample Size', sym: 'n'
            };
        }
        else if (model.output == 'power') {
            if (this.name == 'top-left' || this.name == 'top-left-export') {
                // Power vs. Sample Size
                this.x = {
                    name: 'n', range: this.project.nRange, target: model.n,
                    title: 'Sample Size', sym: 'n'
                };
                this.y = {
                    name: 'power', range: this.project.powerRange, target: model.power,
                    title: 'Power', sym: '1-β'
                };
                this.dataKey = 'powerVsN';
            }
            else if (this.name == 'top-right' || this.name == 'top-right-export') {
                // Power vs. Detectable Alternative
                this.x = {
                    name: 'delta', range: this.project.deltaRange, target: model.delta,
                    title: 'Detectable Alternative', sym: 'δ'
                };
                this.y = {
                    name: 'power', range: this.project.powerRange, target: model.power,
                    title: 'Power', sym: '1-β'
                };
                this.dataKey = 'powerVsDelta';
            }
            else {
                return false;
            }
        }
        else if (model.output == 'delta') {
            if (this.name == 'top-left' || this.name == 'top-left-export') {
                // Detectable Alternative vs. Sample Size
                this.x = {
                    name: 'n', range: this.project.nRange, target: model.n,
                    title: 'Sample Size', sym: 'n'
                };
                this.dataKey = 'deltaVsN';
            }
            else if (this.name == 'top-right' || this.name == 'top-right-export') {
                // Detectable Alternative vs. Power
                this.x = {
                    name: 'power', range: this.project.powerRange, target: model.power,
                    title: 'Power', sym: '1-β'
                };
                this.dataKey = 'deltaVsPower';
            }
            else {
                return false;
            }
            this.y = {
                name: 'delta', range: this.project.deltaRange, target: model.delta,
                title: 'Detectable Alternative', sym: 'δ'
            };
        }
        else {
            return false;
        }
        // format symbol to make widths identical
        while (this.x.sym.length < this.y.sym.length) {
            this.x.sym = ' ' + this.x.sym;
        }
        while (this.y.sym.length < this.x.sym.length) {
            this.y.sym = ' ' + this.y.sym;
        }
        this.title = this.y.title + " vs. " + this.x.title;
        return true;
    };
    PlotComponent.prototype.setupPlotData = function () {
        var _this = this;
        this.plotData = this.project.models.map(function (m) { return m[_this.dataKey]; });
        // Prepare main data for bisection during target point dragging.
        this.mainData = stable__WEBPACK_IMPORTED_MODULE_2__(this.plotData[this.project.selectedIndex], function (a, b) { return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](a.x, b.x); });
        this.xBisector = d3__WEBPACK_IMPORTED_MODULE_1__["bisector"](function (point) { return point.x; }).left;
        return true;
    };
    PlotComponent.prototype.setupScales = function () {
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().
            domain(this.x.range.toArray()).
            range([0, this.innerWidth]);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().
            domain(this.y.range.toArray().reverse()).
            range([0, this.innerHeight]);
    };
    PlotComponent.prototype.setupTarget = function () {
        var model = this.project.getModel(this.project.selectedIndex);
        this.target = { x: this.x.target, y: this.y.target };
    };
    PlotComponent.prototype.setupPaths = function () {
        var _this = this;
        this.paths = this.plotData.map(function (d, i) {
            var id = _this.name + "-path-" + i;
            var path = _this.getPath(d, 'x', 'y');
            var color = _this.getPathColor(i);
            var dashArray = _this.getDashArray(i);
            var lineCap = _this.getLineCap(i);
            var primary = _this.project.selectedIndex == i;
            var result = {
                index: i, id: id, path: path, color: color, dashArray: dashArray,
                lineCap: lineCap, opacity: primary ? 1 : 0.7, primary: primary
            };
            return result;
        });
        // order paths in reverse so that they are drawn properly, put the selected
        // line at the end
        this.paths.sort(function (a, b) {
            if (a.primary)
                return 1;
            if (b.primary)
                return -1;
            return b.index - a.index;
        });
    };
    PlotComponent.prototype.setupDropPaths = function () {
        var _this = this;
        this.dropPaths = [];
        var path = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().
            x(function (d, i) { return _this.xScale(d.x); }).
            y(function (d, i) { return _this.yScale(d.y); });
        var xData = [
            { x: this.target.x, y: this.yScale.domain()[1] },
            { x: this.target.x, y: this.target.y }
        ];
        this.dropPaths.push(path(xData));
        var yData = [
            { x: this.xScale.domain()[0], y: this.target.y },
            { x: this.target.x, y: this.target.y }
        ];
        this.dropPaths.push(path(yData));
    };
    PlotComponent.prototype.setup = function () {
        if (!this.project) {
            return false;
        }
        if (!this.setupDimensions()) {
            return false;
        }
        if (!this.setupParams()) {
            return false;
        }
        if (!this.setupPlotData()) {
            return false;
        }
        this.setupScales();
        this.setupTarget();
        this.setupPaths();
        this.setupDropPaths();
        if (this.lastDragEvent) {
            this.hover(this.lastDragEvent);
            this.lastDragEvent = undefined;
        }
        this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Yes;
        return true;
    };
    PlotComponent.prototype.getHoverBoxPath = function (above, coords) {
        var dim = coords.getBBox();
        var left = dim.x - 5, right = dim.x + dim.width + 5;
        var unit = dim.width / 16;
        var lmid = left + (7 * unit) + 5, rmid = left + (9 * unit) + 5;
        var mid = left + (8 * unit) + 5;
        var top, bottom, bottom2;
        if (above) {
            top = dim.y - 5;
            bottom = dim.y + dim.height + 5;
            bottom2 = bottom + 5;
        }
        else {
            top = dim.y + dim.height + 5;
            bottom = dim.y - 5;
            bottom2 = bottom - 5;
        }
        return d3__WEBPACK_IMPORTED_MODULE_1__["line"]()([
            [left, top], [right, top], [right, bottom],
            [rmid, bottom], [mid, bottom2], [lmid, bottom],
            [left, bottom], [left, top]
        ]);
    };
    PlotComponent.prototype.draw = function () {
        var _this = this;
        if (this.needDraw == _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No) {
            return;
        }
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.plotElement.nativeElement);
        if (this.hoverInfo != HoverInfo.Disabled) {
            // draw hover info box
            var t_1 = svg.transition().duration(50);
            var info = svg.select("#" + this.name + "-hover-info");
            info.attr('transform', this.translate(this.leftMargin + this.hoverX, this.topMargin + this.hoverY));
            var above_1 = this.hoverY >= 50;
            var box = t_1.select("#" + this.name + "-hover-box");
            var coords_1 = t_1.select("#" + this.name + "-hover-coords");
            coords_1.attr('y', above_1 ? "-2.5em" : "2.5em");
            if (box.size() > 0 && coords_1.size() > 0) {
                box.attrTween('d', function () {
                    return _this.getHoverBoxPath.bind(_this, above_1, coords_1.node());
                });
            }
        }
        if (this.needDraw == _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover) {
            // only need to draw hover box
            this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No;
            return;
        }
        var t = svg.transition();
        // axes (drawn by d3)
        var xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale).ticks(Math.floor(this.innerWidth / 75));
        t.select("#" + this.name + "-x-axis").
            call(xAxis).
            attr("font-size", this.plotOptions.getAxisFontSize() + "px").
            attr("stroke-width", this.plotOptions.getAxisLineWidth());
        var yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.yScale).ticks(Math.floor(this.innerHeight / 75));
        t.select("#" + this.name + "-y-axis").
            call(yAxis).
            attr("font-size", this.plotOptions.getAxisFontSize() + "px").
            attr("stroke-width", this.plotOptions.getAxisLineWidth());
        // paths
        for (var i = 0, ilen = this.paths.length; i < ilen; i++) {
            var path = t.select("#" + this.paths[i].id);
            if (!path.attr("d")) {
                path.attr("d", this.paths[i].path);
            }
            else {
                path.attrTween("d", this.pathTween(this.paths[i].path, 4));
            }
        }
        // target
        var targetId = "#" + this.name + "-target";
        t.select(targetId).
            attr('cx', this.xScale(this.target.x)).
            attr('cy', this.yScale(this.target.y));
        // drop paths
        for (var i = 0, ilen = this.dropPaths.length; i < ilen; i++) {
            t.select(targetId + "-drop-" + i).attr("d", this.dropPaths[i]);
        }
        // drag
        if (!this.disableDrag) {
            var target = svg.select(targetId);
            var targetDrag = d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().
                on("start", this.dragTargetStart.bind(this)).
                on("drag", this.dragTarget.bind(this)).
                on("end", this.dragTargetEnd.bind(this));
            target.call(targetDrag);
        }
        // legend box
        if (this.paths.length > 1) {
            var box = svg.select("#" + this.name + "-legend-box");
            var labels = svg.select("#" + this.name + "-legend-labels");
            if (box.size() > 0 && labels.size() > 0) {
                var dim = labels.node().getBBox();
                var left = dim.x - 5, right = dim.x + dim.width + 5;
                var top_1 = dim.y - 5, bottom = dim.y + dim.height + 5;
                box.attr("d", d3__WEBPACK_IMPORTED_MODULE_1__["line"]()([
                    [left, top_1], [right, top_1], [right, bottom],
                    [left, bottom], [left, top_1]
                ]));
            }
            var legend = svg.select("#" + this.name + "-legend");
            var legendDrag = d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().
                on("drag", this.dragLegend.bind(this));
            legend.call(legendDrag);
        }
        this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No;
    };
    PlotComponent.prototype.dragTargetStart = function () {
        this.targetDragging = true;
    };
    PlotComponent.prototype.dragTarget = function (event) {
        var x = this.xScale.invert(d3__WEBPACK_IMPORTED_MODULE_1__["event"].x - this.leftMargin);
        if (x < this.x.range.min) {
            x = this.x.range.min;
        }
        else if (x > this.x.range.max) {
            x = this.x.range.max;
        }
        var index = this.xBisector(this.mainData, x);
        var point = this.mainData[index];
        if (!point)
            return;
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.plotElement.nativeElement);
        var targetId = "#" + this.name + "-target";
        this.target = point;
        this.setupDropPaths();
        svg.select(targetId).
            attr("cx", this.xScale(this.target.x)).
            attr("cy", this.yScale(this.target.y));
        for (var i = 0, ilen = this.dropPaths.length; i < ilen; i++) {
            svg.select(targetId + "-drop-" + i).attr("d", this.dropPaths[i]);
        }
        this.hover(event, this.target);
    };
    PlotComponent.prototype.dragTargetEnd = function (event) {
        var _this = this;
        this.targetDragging = false;
        if (this.project && this.x.name) {
            this.lastDragEvent = event;
            this.project.updateModel(this.project.selectedIndex, this.x.name, this.target.x).
                then(function () {
                _this.modelChanged.emit();
            });
        }
    };
    PlotComponent.prototype.dragLegend = function () {
        this.legendXOffset += d3__WEBPACK_IMPORTED_MODULE_1__["event"].dx;
        this.legendYOffset += d3__WEBPACK_IMPORTED_MODULE_1__["event"].dy;
    };
    // from https://bl.ocks.org/mbostock/3916621
    PlotComponent.prototype.pathTween = function (d1, precision) {
        return function () {
            var path0 = this, path1 = path0.cloneNode(), n0 = path0.getTotalLength(), n1 = (path1.setAttribute("d", d1), path1).getTotalLength();
            // Uniform sampling of distance based on specified precision.
            var distances = [0], i = 0, dt = precision / Math.max(n0, n1);
            while ((i += dt) < 1)
                distances.push(i);
            distances.push(1);
            // Compute point-interpolators at each distance.
            var points = distances.map(function (t) {
                var p0 = path0.getPointAtLength(t * n0), p1 = path1.getPointAtLength(t * n1);
                return d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"]([p0.x, p0.y], [p1.x, p1.y]);
            });
            return function (t) {
                return t < 1 ? "M" + points.map(function (p) { return p(t); }).join("L") : d1;
            };
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('project'),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_4__["Project"])
    ], PlotComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hover-disabled'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "hoverDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hide-drop-lines'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "hideDropLines", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hide-target'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "hideTarget", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('disable-drag'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "disableDrag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('legend-x-offset'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "legendXOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('legend-y-offset'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "legendYOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "modelChanged", void 0);
    PlotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't-test-plot',
            template: __webpack_require__(/*! ./plot.component.html */ "./src/app/t-test/plot/plot.component.html"),
            styles: [__webpack_require__(/*! ./plot.component.css */ "./src/app/t-test/plot/plot.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_plot_options_service__WEBPACK_IMPORTED_MODULE_5__["PlotOptionsService"],
            _palette_service__WEBPACK_IMPORTED_MODULE_6__["PaletteService"]])
    ], PlotComponent);
    return PlotComponent;
}(_abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["AbstractPlotComponent"]));



/***/ }),

/***/ "./src/app/t-test/project-model/project-model.component.css":
/*!******************************************************************!*\
  !*** ./src/app/t-test/project-model/project-model.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".output {\n  order: 1;\n}\n\n.output .range-slider {\n  background-color: #d8ecf3;\n  border-radius: 0.5em;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.alt {\n  margin-top: 5px;\n}\n\n.alt .range-slider {\n  background-color: #ffff99;\n  border-radius: 0.5em;\n}\n"

/***/ }),

/***/ "./src/app/t-test/project-model/project-model.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/t-test/project-model/project-model.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project.models.length > 1\" class=\"form-inline justify-content-between mb-2\">\n  <div class=\"form-group\">\n    <label for=\"t-test-project-{{name}}-model-{{index}}-name\" class=\"mr-2\">Name:</label>\n    <input id=\"t-test-project-{{name}}-model-{{index}}-name\" class=\"form-control\"\n      name=\"name\" type=\"text\" [(ngModel)]=\"model.name\" />\n  </div>\n\n  <button type=\"button\" class=\"btn btn-secondary\"\n    (click)=\"onRemoveButtonClicked()\">\n    <i class=\"fa fa-minus-circle\"></i> Remove\n  </button>\n</div>\n\n<div class=\"grow-horiz\">\n  <div class=\"grow-vert range-slider\">\n    <app-range-slider name=\"alpha\" label=\"Type I Error (&alpha;)\"\n      [min]=\"min.alpha\" [max]=\"max.alpha\"\n      [hard-min]=\"min.alpha\" [hard-max]=\"max.alpha\"\n      [ngModel]=\"model.alpha | round\" (ngModelChange)=\"changeModel('alpha', $event)\">\n      <ng-template rsHelp>\n        The Type I error probability for a two sided test. This is the\n        probability that we will falsely reject the null hypothesis.\n      </ng-template>\n    </app-range-slider>\n  </div>\n</div>\n\n<div class=\"grow-horiz\">\n  <div class=\"grow-vert range-slider\">\n    <app-range-slider name=\"sigma\" label=\"Std. deviation (&sigma;)\"\n      [min]=\"min.sigma\" [max]=\"max.sigma\" step=\"0.1\"\n      [hard-min]=\"1\"\n      [ngModel]=\"model.sigma | round:1\" (ngModelChange)=\"changeModel('sigma', $event)\">\n      <ng-template rsHelp>\n        For independent tests σ is the within group standard deviation. For\n        paired designs it is the standard deviation of difference in the\n        response of matched pairs.\n      </ng-template>\n    </app-range-slider>\n  </div>\n</div>\n\n<ng-template [ngIf]=\"!isOutput('nByCI')\" [ngIfElse]=\"nByCI\">\n  <div class=\"grow-horiz\" [class.output]=\"isOutput('delta')\">\n    <div class=\"grow-vert range-slider\">\n      <app-range-slider name=\"delta\" label=\"Difference in population means (&delta;)\"\n        [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\"\n        [is-output]=\"model.output == 'delta'\" [help-tpl]=\"deltaHelp\"\n        [ngModel]=\"model.delta | round:1\" (ngModelChange)=\"changeModel('delta', $event)\">\n      </app-range-slider>\n    </div>\n  </div>\n\n  <div class=\"grow-horiz\" [class.output]=\"isOutput('power')\">\n    <div class=\"grow-vert range-slider\">\n      <app-range-slider name=\"power\" label=\"Power\"\n        [min]=\"min.power\" [max]=\"max.power\"\n        [hard-min]=\"min.power\" [hard-max]=\"max.power\"\n        [is-output]=\"model.output == 'power'\" [help-tpl]=\"powerHelp\"\n        [ngModel]=\"model.power | round\" (ngModelChange)=\"changeModel('power', $event)\">\n      </app-range-slider>\n    </div>\n  </div>\n\n  <div class=\"grow-horiz\" [class.output]=\"isOutput('n')\">\n    <div class=\"grow-vert range-slider\">\n      <app-range-slider name=\"n\" label=\"Sample size\"\n        [min]=\"min.n\" [max]=\"max.n\" step=\"1\"\n        [hard-min]=\"1\"\n        [is-output]=\"model.output == 'n'\" [help-tpl]=\"nHelp\"\n        [ngModel]=\"model.n | ceil\" (ngModelChange)=\"changeModel('n', $event)\">\n      </app-range-slider>\n      <app-range-slider name=\"ci\" label=\"95% confidence interval width\"\n        [min]=\"min.ci\" [max]=\"max.ci\" step=\"0.1\"\n        [hard-min]=\"1\"\n        [is-output]=\"model.output == 'n'\" [help-tpl]=\"ciHelp\"\n        [ngModel]=\"model.ci | round:1\" (ngModelChange)=\"changeModel('ci', $event)\">\n      </app-range-slider>\n    </div>\n  </div>\n</ng-template>\n<ng-template #nByCI>\n  <div class=\"grow-horiz\">\n    <div class=\"grow-vert range-slider\">\n      <app-range-slider name=\"ci\" label=\"95% confidence interval width\"\n        [min]=\"min.ci\" [max]=\"max.ci\" step=\"0.1\" [help-tpl]=\"ciHelp\"\n        [ngModel]=\"model.ci | round:1\" (ngModelChange)=\"changeModel('ci', $event)\">\n      </app-range-slider>\n    </div>\n  </div>\n\n  <div class=\"grow-horiz output\">\n    <div class=\"grow-vert range-slider\">\n      <app-range-slider name=\"n\" label=\"Sample size\"\n        [min]=\"min.n\" [max]=\"max.n\" step=\"1\"\n        [hard-min]=\"1\"\n        [is-output]=\"true\" [help-tpl]=\"nHelp\"\n        [ngModel]=\"model.n | ceil\" (ngModelChange)=\"changeModel('n', $event)\">\n      </app-range-slider>\n    </div>\n  </div>\n\n  <div class=\"grow-horiz order-2 alt\">\n    <div class=\"grow-vert range-slider\">\n      <app-range-slider name=\"delta\" label=\"Difference in population means (&delta;)\"\n        [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\" [help-tpl]=\"deltaHelp\"\n        [ngModel]=\"model.delta | round:1\" (ngModelChange)=\"changeModel('delta', $event)\">\n      </app-range-slider>\n\n      <app-range-slider name=\"power\" label=\"Power\"\n        [min]=\"min.power\" [max]=\"max.power\"\n        [hard-min]=\"min.power\" [hard-max]=\"max.power\"\n        [is-output]=\"model.output == 'power'\" [help-tpl]=\"powerHelp\"\n        [ngModel]=\"model.power | round\" (ngModelChange)=\"changeModel('power', $event)\">\n      </app-range-slider>\n    </div>\n  </div>\n</ng-template>\n<ng-template #deltaHelp>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim nunc,\n  rutrum at ligula id, tempor tincidunt nunc.\n</ng-template>\n<ng-template #powerHelp>\n  For independent tests power is probability of correctly rejecting the\n  null hypothesis of equal population means given n experimental\n  patients, m control patients per experimental patient, a Type I error\n  probability α and a true difference in population means of δ. For\n  paired tests it is the probability of correctly rejecting the null\n  hypothesis of equal population means given n pairs of patients, a Type\n  I error probability α and a true difference in population means of δ.\n</ng-template>\n<ng-template #nHelp>\n  For independent t-tests n is the number of experimental subjects. For\n  pair test n is the number of pairs.\n</ng-template>\n<ng-template #ciHelp>\n  Specifying the 95% confidence interval width will automatically calculate\n  the sample size parameter.\n</ng-template>\n"

/***/ }),

/***/ "./src/app/t-test/project-model/project-model.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/t-test/project-model/project-model.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModelComponent", function() { return ProjectModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../plot-options.service */ "./src/app/plot-options.service.ts");
/* harmony import */ var _palette_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../palette.service */ "./src/app/palette.service.ts");
/* harmony import */ var _t_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../t-test */ "./src/app/t-test/t-test.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project */ "./src/app/t-test/project.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stable */ "./node_modules/stable/stable.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(stable__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectModelComponent = /** @class */ (function () {
    function ProjectModelComponent(plotOptions, palette) {
        this.plotOptions = plotOptions;
        this.palette = palette;
        this.modelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProjectModelComponent.prototype.ngOnInit = function () {
        this.model = this.project.getModel(this.index);
        this.min = new _t_test__WEBPACK_IMPORTED_MODULE_3__["TTest"](this.model);
        this.max = new _t_test__WEBPACK_IMPORTED_MODULE_3__["TTest"](this.model);
        this.min.alpha = 0.01;
        this.max.alpha = 0.99;
        this.min.power = 0.01;
        this.max.power = 0.99;
        this.calculateSliderRange('n');
        this.calculateSliderRange('ci');
        this.calculateSliderRange('delta');
        this.calculateSliderRange('sigma');
        this.color = this.palette.getColor(this.index, this.plotOptions.paletteTheme);
    };
    ProjectModelComponent.prototype.onRemoveButtonClicked = function () {
        this.remove.emit();
    };
    ProjectModelComponent.prototype.isOutput = function (name) {
        return this.model.output === name;
    };
    ProjectModelComponent.prototype.changeModel = function (key, value) {
        var _this = this;
        this.project.updateModel(this.index, key, value).then(function () {
            _this.adjustMinMax();
            _this.modelChanged.emit();
        });
    };
    ProjectModelComponent.prototype.adjustMinMax = function () {
        if (this.model.sigma < this.min.sigma) {
            this.min.sigma = Math.floor(this.model.sigma);
        }
        else if (this.model.sigma > this.max.sigma) {
            this.max.sigma = Math.ceil(this.model.sigma);
        }
        if (this.model.delta < this.min.delta) {
            this.min.delta = Math.floor(this.model.delta);
        }
        else if (this.model.delta > this.max.delta) {
            this.max.delta = Math.ceil(this.model.delta);
        }
        if (this.model.n < this.min.n) {
            this.min.n = Math.floor(this.model.n);
        }
        else if (this.model.n > this.max.n) {
            this.max.n = Math.ceil(this.model.n);
        }
        if (this.model.ci < this.min.ci) {
            this.min.ci = Math.floor(this.model.ci);
        }
        else if (this.model.ci > this.max.ci) {
            this.max.ci = Math.ceil(this.model.ci);
        }
    };
    ProjectModelComponent.prototype.calculateSliderRange = function (name) {
        var value = this.model[name];
        var range = stable__WEBPACK_IMPORTED_MODULE_6__([value * 0.5, value * 1.5], d3__WEBPACK_IMPORTED_MODULE_5__["ascending"]);
        this.min[name] = range[0];
        this.max[name] = range[1];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_4__["Project"])
    ], ProjectModelComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProjectModelComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectModelComponent.prototype, "modelChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectModelComponent.prototype, "remove", void 0);
    ProjectModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't-test-project-model',
            template: __webpack_require__(/*! ./project-model.component.html */ "./src/app/t-test/project-model/project-model.component.html"),
            styles: [__webpack_require__(/*! ./project-model.component.css */ "./src/app/t-test/project-model/project-model.component.css")]
        }),
        __metadata("design:paramtypes", [_plot_options_service__WEBPACK_IMPORTED_MODULE_1__["PlotOptionsService"],
            _palette_service__WEBPACK_IMPORTED_MODULE_2__["PaletteService"]])
    ], ProjectModelComponent);
    return ProjectModelComponent;
}());



/***/ }),

/***/ "./src/app/t-test/project.service.ts":
/*!*******************************************!*\
  !*** ./src/app/t-test/project.service.ts ***!
  \*******************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _t_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./t-test.service */ "./src/app/t-test/t-test.service.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/app/t-test/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = /** @class */ (function () {
    function ProjectService(ttestService) {
        this.ttestService = ttestService;
        this.projects = [];
    }
    ProjectService.prototype.createProject = function () {
        var project = new _project__WEBPACK_IMPORTED_MODULE_2__["Project"](this.ttestService);
        this.projects.push(project);
        return project;
    };
    ProjectService.prototype.getProjects = function () {
        // return reference for convenience
        return this.projects;
    };
    ProjectService.prototype.numProjects = function () {
        return this.projects.length;
    };
    ProjectService.prototype.setSelectedIndex = function (index) {
        this.selectedIndex = index;
    };
    ProjectService.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_t_test_service__WEBPACK_IMPORTED_MODULE_1__["TTestService"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/t-test/project.ts":
/*!***********************************!*\
  !*** ./src/app/t-test/project.ts ***!
  \***********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var _t_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./t-test */ "./src/app/t-test/t-test.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../range */ "./src/app/range.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stable */ "./node_modules/stable/stable.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(stable__WEBPACK_IMPORTED_MODULE_3__);




var Project = /** @class */ (function () {
    function Project(ttestService) {
        this.ttestService = ttestService;
        this.models = [];
        this.selectedIndex = 0;
        this.changeHistory = [];
        this.customRanges = false;
    }
    Project.prototype.getOutput = function () {
        if (this.models.length > 0) {
            return this.models[0].output;
        }
        return '';
    };
    Project.prototype.updatePlotData = function () {
        var _this = this;
        var ranges = {
            nRange: this.nRange,
            powerRange: this.powerRange,
            deltaRange: this.deltaRange,
            pSpaceRange: this.pSpaceRange
        };
        return this.ttestService.plotData(this.models, ranges, this.pointsPerPlot).
            then(function (result) {
            if (typeof (_this.pointsPerPlot) === 'undefined') {
                _this.pointsPerPlot = result.points;
            }
            result.data.forEach(function (data, i) {
                Object.assign(_this.models[i], data);
            });
            if (_this.customRanges)
                return;
            var output = _this.getOutput();
            var nRange, powerRange, deltaRange;
            for (var i = 0, ilen = _this.models.length; i < ilen; i++) {
                var model = _this.models[i];
                switch (output) {
                    case "n":
                    case "nByCI":
                        powerRange = _this.makeXRange(model.nVsPower, _this.nRange);
                        if (i == 0) {
                            _this.powerRange = powerRange;
                        }
                        else {
                            _this.powerRange.combine(powerRange);
                        }
                        deltaRange = _this.makeXRange(model.nVsDelta, _this.nRange);
                        if (i == 0) {
                            _this.deltaRange = deltaRange;
                        }
                        else {
                            _this.deltaRange.combine(deltaRange);
                        }
                        break;
                    case "power":
                        nRange = _this.makeXRange(model.powerVsN, _this.powerRange);
                        if (i == 0) {
                            _this.nRange = nRange;
                        }
                        else {
                            _this.nRange.combine(nRange);
                        }
                        break;
                    case "delta":
                        powerRange = _this.makeXRange(model.deltaVsPower, _this.deltaRange);
                        if (i == 0) {
                            _this.powerRange = powerRange;
                        }
                        else {
                            _this.powerRange.combine(powerRange);
                        }
                        nRange = _this.makeXRange(model.deltaVsN, _this.deltaRange);
                        if (i == 0) {
                            _this.nRange = nRange;
                        }
                        else {
                            _this.nRange.combine(nRange);
                        }
                        break;
                }
            }
            _this.previousRanges = {
                nRange: _this.nRange ? _this.nRange.clone() : undefined,
                powerRange: _this.powerRange ? _this.powerRange.clone() : undefined,
                deltaRange: _this.deltaRange ? _this.deltaRange.clone() : undefined,
                pSpaceRange: _this.pSpaceRange ? _this.pSpaceRange.clone() : undefined
            };
        });
    };
    Project.prototype.resetRanges = function () {
        if (this.previousRanges) {
            Object.assign(this, this.previousRanges);
        }
    };
    Project.prototype.addModel = function (model) {
        var _this = this;
        return this.ttestService.calculate(model).
            then(function (result) {
            var model = new _t_test__WEBPACK_IMPORTED_MODULE_0__["TTest"](result);
            model.name = _this.getModelName(_this.models.length);
            _this.models.push(model);
            if (!_this.customRanges) {
                _this.calculateRanges();
            }
            _this.changeHistory.push({
                'type': 'add', 'index': _this.models.length - 1,
                'params': model.params()
            });
            return _this.updatePlotData();
        });
    };
    Project.prototype.updateModel = function (index, key, value) {
        var _this = this;
        var model = this.models[index];
        var which = key;
        var changes = (_a = {}, _a[key] = value, _a);
        if (key !== 'output') {
            if (model.output === 'nByCI') {
                if (key === 'delta') {
                    // delta was changed, so turn on "deltaMode"
                    changes.deltaMode = true;
                    which = 'power';
                }
                else if (key === 'power') {
                    // power was changed, so turn off "deltaMode"
                    changes.deltaMode = false;
                }
            }
            else if (this.models[0].output !== 'n') {
                if (key === 'ci') {
                    // 95% confidence interval width was changed, so turn on "ciMode"
                    changes.ciMode = true;
                    which = 'n';
                }
                else if (key === 'n') {
                    // Sample size was changed, so turn off "ciMode"
                    changes.ciMode = false;
                }
            }
        }
        var models = [model];
        if (key === "output") {
            // If the output is changed, all models need to be updated. Additionally,
            // reset the flag to keep ranges.
            models = this.models;
            this.customRanges = false;
        }
        models.forEach(function (m) { Object.assign(m, changes); });
        return models.reduce(function (promise, model) {
            return promise.then(function () {
                return _this.ttestService.calculate(model);
            }).then(function (result) {
                Object.assign(model, result);
            });
        }, Promise.resolve()).then(function () {
            if (!_this.customRanges) {
                _this.calculateRanges();
            }
            _this.changeHistory.push({
                'type': 'change', 'index': index,
                'key': key, 'params': model.params()
            });
            return _this.updatePlotData();
        });
        var _a;
    };
    Project.prototype.removeModel = function (index) {
        this.models.splice(index, 1);
        this.changeHistory.push({
            'type': 'remove', 'index': index
        });
        if (!this.customRanges) {
            this.calculateRanges();
        }
        return this.updatePlotData();
    };
    Project.prototype.getModel = function (index) {
        return this.models[index];
    };
    Project.prototype.modelCount = function () {
        return this.models.length;
    };
    Project.prototype.calculateRanges = function () {
        var nRange = [];
        var powerRange = [];
        var deltaRange = [];
        var pSpaceRange = [];
        var output = this.getOutput();
        var values;
        for (var i = 0, ilen = this.models.length; i < ilen; i++) {
            var model = this.models[i];
            switch (output) {
                case "n": /* fall through */
                case "nByCI":
                    // calculate n range
                    values = stable__WEBPACK_IMPORTED_MODULE_3__([model.n * 0.5, model.n * 1.5], d3__WEBPACK_IMPORTED_MODULE_2__["ascending"]);
                    if (i == 0 || values[0] < nRange[0]) {
                        nRange[0] = values[0];
                    }
                    if (i == 0 || values[1] > nRange[1]) {
                        nRange[1] = values[1];
                    }
                    break;
                case "power":
                    if (i == 0) {
                        powerRange = [0.01, 1];
                    }
                    // calculate delta range
                    values = stable__WEBPACK_IMPORTED_MODULE_3__([1.5 * model.sigma, -1.5 * model.sigma], d3__WEBPACK_IMPORTED_MODULE_2__["ascending"]);
                    if (i == 0 || values[0] < deltaRange[0]) {
                        deltaRange[0] = values[0];
                    }
                    if (i == 0 || values[1] > deltaRange[1]) {
                        deltaRange[1] = values[1];
                    }
                    break;
                case "delta":
                    // calculate delta range
                    values = stable__WEBPACK_IMPORTED_MODULE_3__([model.delta * 0.5, model.delta * 1.5], d3__WEBPACK_IMPORTED_MODULE_2__["ascending"]);
                    if (i == 0 || values[0] < deltaRange[0]) {
                        deltaRange[0] = values[0];
                    }
                    if (i == 0 || values[1] > deltaRange[1]) {
                        deltaRange[1] = values[1];
                    }
                    break;
            }
            // calculate parameter space range
            values = stable__WEBPACK_IMPORTED_MODULE_3__([1.5 * model.sigma, -1.5 * model.sigma], d3__WEBPACK_IMPORTED_MODULE_2__["ascending"]);
            if (i == 0 || values[0] < pSpaceRange[0]) {
                pSpaceRange[0] = values[0];
            }
            if (i == 0 || values[1] > pSpaceRange[1]) {
                pSpaceRange[1] = values[1];
            }
            values = [model.delta - (model.ci / 2), model.delta + (model.ci / 2)];
            if (values[0] < pSpaceRange[0]) {
                pSpaceRange[0] = values[0] - Math.abs(values[0] * 0.5);
            }
            if (values[1] > pSpaceRange[1]) {
                pSpaceRange[1] = values[1] + Math.abs(values[1] * 0.5);
            }
        }
        if (nRange.length > 0) {
            this.nRange = new _range__WEBPACK_IMPORTED_MODULE_1__["Range"](nRange[0], nRange[1]);
        }
        else {
            this.nRange = undefined;
        }
        if (powerRange.length > 0) {
            this.powerRange = new _range__WEBPACK_IMPORTED_MODULE_1__["Range"](powerRange[0], powerRange[1]);
        }
        else {
            this.powerRange = undefined;
        }
        if (deltaRange.length > 0) {
            this.deltaRange = new _range__WEBPACK_IMPORTED_MODULE_1__["Range"](deltaRange[0], deltaRange[1]);
        }
        else {
            this.deltaRange = undefined;
        }
        if (pSpaceRange.length > 0) {
            this.pSpaceRange = new _range__WEBPACK_IMPORTED_MODULE_1__["Range"](pSpaceRange[0], pSpaceRange[1]);
        }
        else {
            this.pSpaceRange = undefined;
        }
    };
    Project.prototype.describeChanges = function (changes, html) {
        if (html === void 0) { html = true; }
        var result;
        if (changes.type == 'add') {
            result = "Added model #" + (changes.index + 1) + ": <span class=\"code\">" + this.paramsToString(changes.params) + "</span>";
        }
        else if (changes.type == 'remove') {
            result = "Removed model #" + (changes.index + 1);
        }
        else if (changes.type == 'change') {
            if (html) {
                result = "Changed <span class=\"code\">" + changes.key + "</span> in model #" + (changes.index + 1) + ": <span class=\"code\">" + this.paramsToString(changes.params) + "</span>";
            }
            else {
                result = "Changed " + changes.key + " in model #" + (changes.index + 1) + ": " + this.paramsToString(changes.params);
            }
        }
        return result;
    };
    Project.prototype.paramsToString = function (params) {
        var result = [];
        for (var key in params) {
            if (key == 'ciMode' || key == 'deltaMode') {
                continue;
            }
            var value = params[key];
            if (typeof (value) === 'string') {
                result.push("\"" + key + "\": \"" + params[key] + "\"");
            }
            else {
                result.push("\"" + key + "\": " + params[key]);
            }
        }
        return "{ " + result.join(', ') + " }";
    };
    Project.prototype.getModelName = function (index) {
        switch (index) {
            case 0:
                return "Primary";
            case 1:
                return "Secondary";
            case 2:
                return "Tertiary";
            case 3:
                return "Quaternary";
            case 4:
                return "Quinary";
            case 5:
                return "Senary";
            case 6:
                return "Septenary";
            case 7:
                return "Octonary";
            case 8:
                return "Nonary";
            case 9:
                return "Denary";
        }
        return "Line " + (index + 1);
    };
    Project.prototype.makeXRange = function (data, yRange) {
        var minIndex = 0, maxIndex = data.length - 1;
        for (var i = 0; i < data.length; i++) {
            if (typeof (data[i].x) === "number" && data[i].y >= yRange.min) {
                minIndex = i;
                break;
            }
        }
        for (var i = data.length - 1; i >= 0; i--) {
            if (typeof (data[i].x) === "number" && data[i].y <= yRange.max) {
                maxIndex = i;
                break;
            }
        }
        var values = stable__WEBPACK_IMPORTED_MODULE_3__([data[minIndex].x, data[maxIndex].x], d3__WEBPACK_IMPORTED_MODULE_2__["ascending"]);
        return new _range__WEBPACK_IMPORTED_MODULE_1__["Range"](values[0], values[1]);
    };
    return Project;
}());



/***/ }),

/***/ "./src/app/t-test/project/project.component.css":
/*!******************************************************!*\
  !*** ./src/app/t-test/project/project.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overview {\n  text-align: right;\n}\n\n.btn-secondary {\n  padding: 0.3rem 0.3rem;\n}\n\nul.nav {\n  border-bottom: 0;\n  z-index: 1;\n}\n\nul.nav li.nav-item {\n  margin-bottom: -1px;\n}\n\nul.nav li.nav-item a.nav-link {\n  cursor: pointer;\n  background-color: #ddd;\n  border-color: #bbb #bbb #aaa;\n  font-size: x-large;\n  padding: 0.25rem 0.75rem;\n}\n\nul.nav li.nav-item a.nav-link.active {\n  border-color: #aaa #aaa #f6f6f6;\n  background-color: #f6f6f6;\n}\n\n.project-model {\n  display: none;\n}\n\n.project-model.active {\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n}\n\n.project-model.tab {\n  padding: 1rem 0.5rem 0 0.5rem;\n  border: 1px solid #aaa;\n  background-color: #f6f6f6;\n}\n"

/***/ }),

/***/ "./src/app/t-test/project/project.component.html":
/*!*******************************************************!*\
  !*** ./src/app/t-test/project/project.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grow-vert\">\n  <div class=\"form-inline justify-content-between mb-2\">\n    <div class=\"form-group\">\n      <label for=\"t-test-project-{{name}}-output\" class=\"mr-2\">Output:</label>\n      <select id=\"t-test-project-{{name}}-output\" class=\"form-control\" name=\"output\"\n        [ngModel]=\"project.getOutput()\" (ngModelChange)=\"changeOutput($event)\">\n        <option value=\"power\">Power</option>\n        <option value=\"n\">Sample size</option>\n        <option value=\"delta\">Detectable alternative</option>\n        <option value=\"nByCI\">Sample size for 95% CI</option>\n      </select>\n    </div>\n\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addModel()\">\n      <i class=\"fa fa-plus-circle\"></i> Add line\n    </button>\n  </div>\n\n  <ul *ngIf=\"project.models.length > 1\" class=\"nav nav-tabs mt-2\">\n    <li *ngFor=\"let model of project.models; index as i; trackBy: trackByIndex\" class=\"nav-item\">\n      <a class=\"nav-link nav-model-link\" [class.active]=\"i == project.selectedIndex\"\n        (click)=\"selectModel(i)\">\n        <i class=\"fa fa-square\" [style.color]=\"getColor(i)\"></i>\n      </a>\n    </li>\n  </ul>\n\n  <div *ngFor=\"let model of project.models; index as i\" class=\"project-model\"\n    [class.active]=\"i == project.selectedIndex\"\n    [class.tab]=\"project.models.length > 1\">\n    <t-test-project-model [project]=\"project\" [index]=\"i\"\n      (modelChanged)=\"onModelChanged()\" (remove)=\"onModelRemove(i)\">\n    </t-test-project-model>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/t-test/project/project.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/t-test/project/project.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plot-options.service */ "./src/app/plot-options.service.ts");
/* harmony import */ var _palette_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../palette.service */ "./src/app/palette.service.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project */ "./src/app/t-test/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(plotOptions, palette) {
        this.plotOptions = plotOptions;
        this.palette = palette;
        this.projectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.selectedModel = this.project.getModel(this.project.selectedIndex);
    };
    ProjectComponent.prototype.changeOutput = function (value) {
        var _this = this;
        this.project.updateModel(0, 'output', value).then(function () {
            _this.projectChanged.emit();
        });
    };
    ProjectComponent.prototype.selectModel = function (index) {
        this.project.selectedIndex = index;
        this.selectedModel = this.project.getModel(index);
        this.projectChanged.emit();
    };
    ProjectComponent.prototype.addModel = function () {
        var _this = this;
        var model = this.selectedModel.shallowClone();
        this.project.addModel(model).then(function () {
            _this.project.selectedIndex = _this.project.models.length - 1;
            _this.projectChanged.emit();
        });
    };
    ProjectComponent.prototype.onModelRemove = function (index) {
        this.removeModel(index);
    };
    ProjectComponent.prototype.removeModel = function (index) {
        var _this = this;
        this.project.removeModel(index).then(function () {
            if (_this.project.selectedIndex >= _this.project.models.length) {
                _this.project.selectedIndex--;
            }
            _this.projectChanged.emit();
        });
    };
    ProjectComponent.prototype.onModelChanged = function () {
        this.projectChanged.emit();
    };
    ProjectComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    ProjectComponent.prototype.getColor = function (index) {
        return this.palette.getColor(index, this.plotOptions.paletteTheme);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_4__["Project"])
    ], ProjectComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "projectChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabset'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"])
    ], ProjectComponent.prototype, "tabset", void 0);
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't-test-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/t-test/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/t-test/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [_plot_options_service__WEBPACK_IMPORTED_MODULE_2__["PlotOptionsService"],
            _palette_service__WEBPACK_IMPORTED_MODULE_3__["PaletteService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/t-test/start/start.component.css":
/*!**************************************************!*\
  !*** ./src/app/t-test/start/start.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overview {\n  text-align: right;\n}\n\n.btn-secondary {\n  padding: 0.3rem 0.3rem;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; /* red */\n}\n"

/***/ }),

/***/ "./src/app/t-test/start/start.component.html":
/*!***************************************************!*\
  !*** ./src/app/t-test/start/start.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #startForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"output\">\n      What do you want to know?\n      <button type=\"button\" class=\"btn btn-secondary fa fa-question-circle\"\n        (click)=\"toggleHelp()\"></button>\n    </label>\n    <select class=\"form-control\" id=\"output\"\n            required\n            [(ngModel)]=\"model.output\" name=\"output\">\n      <option></option>\n      <option value=\"power\">Power</option>\n      <option value=\"n\">Sample size</option>\n      <option value=\"delta\">Detectable alternative</option>\n      <option value=\"nByCI\">Sample size for 95% CI</option>\n    </select>\n  </div>\n  <!--\n  <div class=\"form-group\" *ngIf=\"model.output\">\n    <label for=\"design\">Paired or independent?</label>\n    <select class=\"form-control\" id=\"design\"\n            required\n            [(ngModel)]=\"model.design\" name=\"design\">\n      <option></option>\n      <option>Paired</option>\n      <option>Independent</option>\n    </select>\n  </div>\n  -->\n  <div *ngIf=\"model.output\">\n    <div class=\"form-group\">\n      <label for=\"alpha\">\n        Type I Error (&alpha;)\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"alphaHelp\" popoverTitle=\"Type I Error (&alpha;)\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n      </label>\n      <input class=\"form-control\" id=\"alpha\"\n             type=\"number\" step=\"0.01\" min=\"0.01\" max=\"0.99\"\n             required\n             [(ngModel)]=\"model.alpha\" name=\"alpha\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sigma\">\n        Standard deviation (&sigma;)\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"sigmaHelp\" popoverTitle=\"Standard deviation (&sigma;)\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n      </label>\n      <input class=\"form-control\" id=\"sigma\"\n             type=\"number\" step=\"0.1\" min=\"0.1\"\n             required\n             [(ngModel)]=\"model.sigma\" name=\"sigma\">\n    </div>\n    <div *ngIf=\"needDelta()\" class=\"form-group\">\n      <label for=\"delta\">Difference in population means (&delta;)</label>\n      <input class=\"form-control\" id=\"delta\"\n             type=\"number\" step=\"0.1\"\n             required\n             [(ngModel)]=\"model.delta\" name=\"delta\">\n    </div>\n    <div *ngIf=\"needPower()\" class=\"form-group\">\n      <label for=\"power\">\n        Power\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"powerHelp\" popoverTitle=\"Power\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n      </label>\n      <input class=\"form-control\" id=\"power\"\n             type=\"number\" step=\"0.01\" min=\"0.01\" max=\"0.99\"\n             required\n             [(ngModel)]=\"model.power\" name=\"power\">\n    </div>\n    <div *ngIf=\"needCI()\" class=\"form-group\">\n      <label for=\"ci\">95% confidence interval width</label>\n      <input class=\"form-control\" id=\"ci\" type=\"number\" required\n             [(ngModel)]=\"model.ci\" name=\"ci\">\n    </div>\n    <ng-template [ngIf]=\"needNOrCI()\">\n      <div class=\"form-check form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"ciMode\" id=\"ciMode-false\"\n                 [(ngModel)]=\"model.ciMode\" [value]=\"false\">\n          Sample size\n          <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n            [ngbPopover]=\"nHelp\" popoverTitle=\"Sample size\"\n            placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n        </label>\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"ciMode\" id=\"ciMode-true\"\n                 [(ngModel)]=\"model.ciMode\" [value]=\"true\">\n          95% confidence interval width\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <input *ngIf=\"!model.ciMode\"\n               class=\"form-control\" id=\"n\"\n               type=\"number\" min=\"1\"\n               required\n               [(ngModel)]=\"model.n\" name=\"n\">\n        <input *ngIf=\"model.ciMode\"\n               class=\"form-control\" id=\"ci\"\n               type=\"number\" min=\"1\" step=\"0.1\"\n               required\n               [(ngModel)]=\"model.ci\" name=\"ci\">\n      </div>\n\n    </ng-template>\n    <ng-template [ngIf]=\"needPowerOrDelta()\">\n      <div class=\"form-check form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"deltaMode\" id=\"deltaMode-false\"\n                 [(ngModel)]=\"model.deltaMode\" [value]=\"false\">\n          Power\n          <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n            [ngbPopover]=\"powerHelp\" popoverTitle=\"Power\"\n            placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n        </label>\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"deltaMode\" id=\"deltaMode-true\"\n                 [(ngModel)]=\"model.deltaMode\" [value]=\"true\">\n          Difference in population means (&delta;)\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <input *ngIf=\"!model.deltaMode\"\n               class=\"form-control\" id=\"power\"\n               type=\"number\" step=\"0.01\" min=\"0.01\" max=\"0.99\"\n               required\n               [(ngModel)]=\"model.power\" name=\"power\">\n        <input *ngIf=\"model.deltaMode\"\n               class=\"form-control\" id=\"delta\"\n               type=\"number\" step=\"0.1\"\n               required\n               [(ngModel)]=\"model.delta\" name=\"delta\">\n      </div>\n\n    </ng-template>\n    <button type=\"submit\" class=\"btn btn-success\"\n            [disabled]=\"!startForm.form.valid\">\n      Calculate\n    </button>\n  </div>\n</form>\n<ng-template #alphaHelp>\n  The Type I error probability for a two sided test. This is the\n  probability that we will falsely reject the null hypothesis.\n</ng-template>\n<ng-template #sigmaHelp>\n  For independent tests σ is the within group standard deviation. For\n  paired designs it is the standard deviation of difference in the\n  response of matched pairs.\n</ng-template>\n<ng-template #powerHelp>\n  For independent tests power is probability of correctly rejecting the null\n  hypothesis of equal population means given n experimental patients, m control\n  patients per experimental patient, a Type I error probability α and a true\n  difference in population means of δ. For paired tests it is the probability\n  of correctly rejecting the null hypothesis of equal population means given n\n  pairs of patients, a Type I error probability α and a true difference in\n  population means of δ.\n</ng-template>\n<ng-template #nHelp>\n  For independent t-tests n is the number of experimental subjects. For\n  pair test n is the number of pairs.\n</ng-template>\n"

/***/ }),

/***/ "./src/app/t-test/start/start.component.ts":
/*!*************************************************!*\
  !*** ./src/app/t-test/start/start.component.ts ***!
  \*************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _t_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../t-test */ "./src/app/t-test/t-test.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartComponent = /** @class */ (function () {
    function StartComponent() {
        this.onCalculate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onToggleHelp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StartComponent.prototype.toggleHelp = function () {
        this.onToggleHelp.emit();
    };
    StartComponent.prototype.needDelta = function () {
        return this.model.output !== 'delta' && this.model.output !== 'nByCI';
    };
    StartComponent.prototype.needPower = function () {
        return this.model.output !== 'power' && this.model.output !== 'nByCI';
    };
    StartComponent.prototype.needPowerOrDelta = function () {
        return this.model.output === 'nByCI';
    };
    StartComponent.prototype.needCI = function () {
        return this.model.output === 'nByCI';
    };
    StartComponent.prototype.needNOrCI = function () {
        return this.model.output !== 'n' && this.model.output !== 'nByCI';
    };
    StartComponent.prototype.onSubmit = function () {
        this.onCalculate.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _t_test__WEBPACK_IMPORTED_MODULE_1__["TTest"])
    ], StartComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StartComponent.prototype, "onCalculate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StartComponent.prototype, "onToggleHelp", void 0);
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't-test-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/t-test/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/t-test/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/t-test/t-test.component.css":
/*!*********************************************!*\
  !*** ./src/app/t-test/t-test.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n#t-test {\n}\n\n#t-test-main {\n  /*min-height: 85vh;*/\n}\n\n#t-test-sidebar {\n  background-color: #e5e5e5;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  /*margin: 10px;*/\n  position: relative;\n}\n\n#t-test-sidebar .overview {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.plot-buttons {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: large;\n  z-index: 99;\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n}\n\n.plot-buttons button {\n  padding: 0.4rem 0;\n  margin: 0.2rem 0;\n  width: 2.4rem;\n}\n\n#t-test-sidebar ngb-tabset {\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n  /*width: 100%;*/\n}\n\n#t-test-sidebar t-test-start,\n#t-test-sidebar t-test-project {\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n}\n\n#t-test-footer {\n  margin: 20px 0;\n  padding: 20px;\n  text-align: center;\n}\n\n#t-test-footer img {\n  margin: auto;\n  display: block;\n}\n\n#t-test-footer div.build {\n  margin-top: 5px;\n  font-size: smaller;\n}\n\n.block-selection * {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n"

/***/ }),

/***/ "./src/app/t-test/t-test.component.html":
/*!**********************************************!*\
  !*** ./src/app/t-test/t-test.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"t-test\" class=\"d-flex flex-column h-100\"\n  [class.block-selection]=\"blockSelection\" (mouseup)=\"onMouseUp()\">\n\n  <div id=\"t-test-main\" class=\"row d-flex\" style=\"flex: 1 0 auto\">\n    <div class=\"col-4 d-flex flex-column justify-content-between\">\n      <div id=\"t-test-sidebar\" class=\"d-flex flex-row\" style=\"flex: auto\">\n        <div class=\"overview\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleHelp('overview')\">\n            Overview <i class=\"fa fa-question-circle\"></i>\n          </button>\n        </div>\n        <ngb-tabset #tabset\n          activeId=\"t-test-{{selectedIndex !== undefined ? selectedIndex + 1 : 'start'}}\"\n          (tabChange)=\"onTabChange($event)\">\n          <ngb-tab title=\"Start\" id=\"t-test-start\">\n            <ng-template ngbTabContent>\n              <t-test-start [model]=\"newModel\"\n                (onCalculate)=\"calculate()\"\n                (onToggleHelp)=\"toggleHelp('start')\">\n              </t-test-start>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab *ngFor=\"let project of projects; let i = index\"\n            title=\"t-test #{{i+1}}\" id=\"t-test-{{i+1}}\">\n            <ng-template ngbTabContent>\n              <t-test-project name=\"{{i}}\" [project]=\"project\"\n                (projectChanged)=\"onProjectChanged()\">\n              </t-test-project>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n\n      <div id=\"t-test-footer\" class=\"d-flex flex-column\">\n        <img src=\"assets/biostat.jpg\">\n        <div class=\"build\">\n          Build version: {{ commitHash }} ({{ buildTimestamp | date }})\n        </div>\n      </div>\n    </div>\n    <div class=\"col-8\">\n      <div class=\"plot-buttons\" *ngIf=\"selectedProject\">\n        <button class=\"btn btn-secondary\" (click)=\"togglePlotOptions()\" title=\"Toggle plot options\">\n          <i class=\"fa fa-cog\"></i>\n        </button>\n        <button class=\"btn btn-secondary\" (click)=\"save()\" title=\"Export plots\">\n          <i class=\"fa fa-floppy-o\"></i>\n        </button>\n        <button class=\"btn btn-secondary\" (click)=\"toggleHoverBox()\" title=\"Toggle hover box\">\n          <i class=\"fa\" [class.fa-cubes]=\"hoverBoxEnabled\" [class.fa-cube]=\"!hoverBoxEnabled\"></i>\n        </button>\n      </div>\n      <t-test-output-pane #outputPane\n        [project]=\"selectedProject\"\n        [hover-disabled]=\"!hoverBoxEnabled\"\n        (modelChanged)=\"onModelChanged()\">\n      </t-test-output-pane>\n    </div>\n  </div>\n  <app-draggable-dialog #helpDialog\n    [title]=\"helpTitles[helpTopic]\"\n    start-x-offset=\"33%\" start-y-offset=\"55px\"\n    (drag-start)=\"onChildDragStarted()\"\n    (drag-end)=\"onChildDragEnded()\">\n    <t-test-help [topic]=\"helpTopic\"></t-test-help>\n  </app-draggable-dialog>\n  <app-draggable-dialog #plotOptionsDialog\n    title=\"Plot options\"\n    start-x-offset=\"5%\" start-y-offset=\"55px\"\n    (drag-start)=\"onChildDragStarted()\"\n    (drag-end)=\"onChildDragEnded()\">\n    <t-test-plot-options [project]=\"selectedProject\"\n      (optionChanged)=\"onPlotOptionChanged()\"\n      (projectChanged)=\"onProjectChangedFromPlotOptions()\"\n      (reset)=\"onPlotOptionsReset()\">\n    </t-test-plot-options>\n  </app-draggable-dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/t-test/t-test.component.ts":
/*!********************************************!*\
  !*** ./src/app/t-test/t-test.component.ts ***!
  \********************************************/
/*! exports provided: TTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTestComponent", function() { return TTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _t_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t-test */ "./src/app/t-test/t-test.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.service */ "./src/app/t-test/project.service.ts");
/* harmony import */ var _draggable_dialog_draggable_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../draggable-dialog/draggable-dialog.component */ "./src/app/draggable-dialog/draggable-dialog.component.ts");
/* harmony import */ var _output_pane_output_pane_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./output-pane/output-pane.component */ "./src/app/t-test/output-pane/output-pane.component.ts");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../version */ "./src/app/version.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TTestComponent = /** @class */ (function () {
    function TTestComponent(projectService) {
        this.projectService = projectService;
        this.newModel = new _t_test__WEBPACK_IMPORTED_MODULE_2__["TTest"]();
        this.projects = [];
        this.commitHash = _version__WEBPACK_IMPORTED_MODULE_6__["commitHash"].substr(0, 7);
        this.buildTimestamp = _version__WEBPACK_IMPORTED_MODULE_6__["buildTimestamp"];
        this.helpTitles = {
            'overview': 'PS Overview',
            'start': 'PS Start Tab'
        };
        this.helpTopic = 'overview';
        this.blockSelection = false;
        this.hoverBoxEnabled = true;
        this.projects = this.projectService.getProjects();
        this.selectedIndex = this.projectService.getSelectedIndex();
        this.selectedProject = this.projects[this.selectedIndex];
    }
    TTestComponent.prototype.ngOnInit = function () {
        if (this.projects.length == 0) {
            /* Add example project */
            var model = new _t_test__WEBPACK_IMPORTED_MODULE_2__["TTest"]({
                output: 'power', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 33
            });
            this.createProject(model, false);
        }
    };
    TTestComponent.prototype.toggleHelp = function (topic) {
        if (this.helpDialog.isOpen() && this.helpTopic == topic) {
            this.helpDialog.close();
        }
        else {
            this.helpTopic = topic;
            this.helpDialog.open();
        }
    };
    TTestComponent.prototype.togglePlotOptions = function () {
        this.plotOptionsDialog.toggle();
    };
    TTestComponent.prototype.toggleHoverBox = function () {
        this.hoverBoxEnabled = !this.hoverBoxEnabled;
    };
    TTestComponent.prototype.save = function () {
        this.outputPane.openSaveDialog();
    };
    TTestComponent.prototype.calculate = function () {
        this.createProject(this.newModel);
    };
    TTestComponent.prototype.selectProject = function (index) {
        var _this = this;
        setTimeout(function () {
            _this.tabset.select("t-test-" + (index + 1));
        }, 1);
    };
    TTestComponent.prototype.createProject = function (model, select) {
        var _this = this;
        if (select === void 0) { select = true; }
        var project = this.projectService.createProject();
        project.addModel(model).
            then(function (result) {
            if (select) {
                _this.selectProject(_this.projects.length - 1);
            }
        }).
            catch(function (err) { return console.error(err); });
    };
    TTestComponent.prototype.onTabChange = function (event) {
        var md = event.nextId.match(/\d+/);
        if (md) {
            var index = parseInt(md[0]) - 1;
            this.selectedIndex = index;
            this.selectedProject = this.projects[index];
        }
        else {
            this.selectedIndex = undefined;
            this.selectedProject = undefined;
        }
        this.projectService.setSelectedIndex(this.selectedIndex);
    };
    TTestComponent.prototype.onProjectChanged = function () {
        this.outputPane.updateProject();
        this.outputPane.redrawPlots();
    };
    TTestComponent.prototype.onModelChanged = function () {
        this.outputPane.redrawPlots();
    };
    TTestComponent.prototype.onPlotOptionChanged = function () {
        this.outputPane.redrawPlots();
    };
    TTestComponent.prototype.onPlotOptionsReset = function () {
        this.outputPane.redrawPlots();
    };
    TTestComponent.prototype.onProjectChangedFromPlotOptions = function () {
        this.outputPane.redrawPlots();
    };
    TTestComponent.prototype.onMouseUp = function () {
        this.plotOptionsDialog.stopDragging();
    };
    TTestComponent.prototype.onChildDragStarted = function () {
        this.blockSelection = true;
    };
    TTestComponent.prototype.onChildDragEnded = function () {
        this.blockSelection = false;
    };
    TTestComponent.prototype.onResize = function (event) {
        this.outputPane.resize();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('plotOptionsDialog'),
        __metadata("design:type", _draggable_dialog_draggable_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DraggableDialogComponent"])
    ], TTestComponent.prototype, "plotOptionsDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('helpDialog'),
        __metadata("design:type", _draggable_dialog_draggable_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DraggableDialogComponent"])
    ], TTestComponent.prototype, "helpDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabset'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"])
    ], TTestComponent.prototype, "tabset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('outputPane'),
        __metadata("design:type", _output_pane_output_pane_component__WEBPACK_IMPORTED_MODULE_5__["OutputPaneComponent"])
    ], TTestComponent.prototype, "outputPane", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TTestComponent.prototype, "onResize", null);
    TTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 't-test-root',
            template: __webpack_require__(/*! ./t-test.component.html */ "./src/app/t-test/t-test.component.html"),
            styles: [__webpack_require__(/*! ./t-test.component.css */ "./src/app/t-test/t-test.component.css")]
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], TTestComponent);
    return TTestComponent;
}());



/***/ }),

/***/ "./src/app/t-test/t-test.module.ts":
/*!*****************************************!*\
  !*** ./src/app/t-test/t-test.module.ts ***!
  \*****************************************/
/*! exports provided: TTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTestModule", function() { return TTestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-common.module */ "./src/app/app-common.module.ts");
/* harmony import */ var _t_test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t-test.service */ "./src/app/t-test/t-test.service.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project.service */ "./src/app/t-test/project.service.ts");
/* harmony import */ var _t_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./t-test.component */ "./src/app/t-test/t-test.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start/start.component */ "./src/app/t-test/start/start.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project/project.component */ "./src/app/t-test/project/project.component.ts");
/* harmony import */ var _output_pane_output_pane_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./output-pane/output-pane.component */ "./src/app/t-test/output-pane/output-pane.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./help/help.component */ "./src/app/t-test/help/help.component.ts");
/* harmony import */ var _plot_options_plot_options_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plot-options/plot-options.component */ "./src/app/t-test/plot-options/plot-options.component.ts");
/* harmony import */ var _plot_plot_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./plot/plot.component */ "./src/app/t-test/plot/plot.component.ts");
/* harmony import */ var _bottom_plot_bottom_plot_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bottom-plot/bottom-plot.component */ "./src/app/t-test/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var _export_plots_export_plots_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./export-plots/export-plots.component */ "./src/app/t-test/export-plots/export-plots.component.ts");
/* harmony import */ var _project_model_project_model_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./project-model/project-model.component */ "./src/app/t-test/project-model/project-model.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: 't-test', component: _t_test_component__WEBPACK_IMPORTED_MODULE_9__["TTestComponent"] },
];
var TTestModule = /** @class */ (function () {
    function TTestModule() {
    }
    TTestModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _t_test_component__WEBPACK_IMPORTED_MODULE_9__["TTestComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_10__["StartComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"],
                _output_pane_output_pane_component__WEBPACK_IMPORTED_MODULE_12__["OutputPaneComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_13__["HelpComponent"],
                _plot_options_plot_options_component__WEBPACK_IMPORTED_MODULE_14__["PlotOptionsComponent"],
                _plot_plot_component__WEBPACK_IMPORTED_MODULE_15__["PlotComponent"],
                _bottom_plot_bottom_plot_component__WEBPACK_IMPORTED_MODULE_16__["BottomPlotComponent"],
                _export_plots_export_plots_component__WEBPACK_IMPORTED_MODULE_17__["ExportPlotsComponent"],
                _project_model_project_model_component__WEBPACK_IMPORTED_MODULE_18__["ProjectModelComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _app_common_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"]
            ],
            providers: [
                _t_test_service__WEBPACK_IMPORTED_MODULE_7__["TTestService"],
                _project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"]
            ],
            entryComponents: [
                _export_plots_export_plots_component__WEBPACK_IMPORTED_MODULE_17__["ExportPlotsComponent"]
            ]
        })
    ], TTestModule);
    return TTestModule;
}());



/***/ }),

/***/ "./src/app/t-test/t-test.service.ts":
/*!******************************************!*\
  !*** ./src/app/t-test/t-test.service.ts ***!
  \******************************************/
/*! exports provided: TTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTestService", function() { return TTestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var TTestService = /** @class */ (function () {
    function TTestService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/ttests";
    }
    TTestService.prototype.calculate = function (model) {
        var url = this.apiUrl + "/calc";
        var params = model.params();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.
            post(url, JSON.stringify(params), requestOptions).
            toPromise().
            then(function (response) { return response.json(); }).
            catch(this.handleError);
    };
    TTestService.prototype.plotData = function (models, ranges, pointsPerPlot) {
        var url = this.apiUrl + "/plotData";
        var params = {
            models: models.map(function (m) { return m.params(); }),
            ranges: ranges
        };
        if (typeof (pointsPerPlot) === 'number') {
            params.points = pointsPerPlot;
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.
            post(url, JSON.stringify(params), requestOptions).
            toPromise().
            then(function (response) { return response.json(); }).
            catch(this.handleError);
    };
    TTestService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TTestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], TTestService);
    return TTestService;
}());



/***/ }),

/***/ "./src/app/t-test/t-test.ts":
/*!**********************************!*\
  !*** ./src/app/t-test/t-test.ts ***!
  \**********************************/
/*! exports provided: TTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTest", function() { return TTest; });
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../range */ "./src/app/range.ts");

var TTest = /** @class */ (function () {
    function TTest(attribs) {
        this.ciMode = false;
        this.deltaMode = false;
        if (attribs) {
            this.output = attribs.output;
            this.alpha = attribs.alpha;
            this.sigma = attribs.sigma;
            this.delta = attribs.delta;
            this.power = attribs.power;
            this.n = attribs.n;
            this.ci = attribs.ci;
            this.nVsPower = attribs.nVsPower;
            this.nVsDelta = attribs.nVsDelta;
            this.powerVsN = attribs.powerVsN;
            this.powerVsDelta = attribs.powerVsDelta;
            this.deltaVsPower = attribs.deltaVsPower;
            this.deltaVsN = attribs.deltaVsN;
            this.sampDist = attribs.sampDist;
        }
    }
    TTest.prototype.precisionRange = function () {
        return new _range__WEBPACK_IMPORTED_MODULE_0__["Range"](this.delta - (this.ci / 2), this.delta + (this.ci / 2));
    };
    TTest.prototype.interpretation = function () {
        var alpha = this.alpha.toFixed(2);
        var sigma = this.sigma.toFixed(2);
        var delta = this.delta.toFixed(2);
        var n = Math.ceil(this.n);
        var power = this.power.toFixed(2);
        var result;
        if (this.output == 'n' || this.output == 'nByCI') {
            result = "\n        We are planning a study of a continuous response variable from matched\n        pairs of study subjects. Prior data indicate that the difference in the\n        response of matched pairs is normally distributed with standard\n        deviation " + sigma + ". If the true difference in the mean response of\n        matched pairs is " + delta + ", we will need to study " + n + " pairs of subjects\n        to be able to reject the null hypothesis that this response difference\n        is zero with probability (power) " + power + ". The Type I error probability\n        associated with this test of this null hypothesis is " + alpha + ".\n      ";
        }
        else if (this.output == 'power') {
            result = "\n        We are planning a study with " + n + " pairs of subjects. Prior data\n        indicate that the difference in the response of matched pairs is\n        normally distributed with standard deviation " + sigma + ". If the true\n        difference in the mean response of matched pairs is " + delta + ", we will\n        be able to reject the null hypothesis that this response difference is\n        zero with probability (power) " + power + ". The Type I error probability\n        associated with this test of this null hypothesis is " + alpha + ".\n      ";
        }
        else if (this.output == 'delta') {
            result = "\n        We are planning a study with " + n + " pairs of subjects. Prior data\n        indicate that the difference in the response of matched pairs is\n        normally distributed with standard deviation " + sigma + ". We will be able\n        to detect a true difference in the mean response of matched pairs of\n        -" + delta + " or " + delta + " with probability (power) " + power + ". The Type I\n        error probability associated with this test of the null hypothesis that\n        this response difference is zero is " + alpha + ".\n      ";
        }
        return result.replace(/\s+/g, " ").trim();
    };
    TTest.prototype.params = function () {
        var result = {
            output: this.output, alpha: this.alpha, sigma: this.sigma,
            delta: this.delta, power: this.power, n: this.n, ci: this.ci,
            ciMode: this.ciMode, deltaMode: this.deltaMode
        };
        return result;
    };
    TTest.prototype.shallowClone = function () {
        return Object.assign(new TTest(), this);
    };
    return TTest;
}());



/***/ }),

/***/ "./src/app/version.ts":
/*!****************************!*\
  !*** ./src/app/version.ts ***!
  \****************************/
/*! exports provided: commitHash, buildTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commitHash", function() { return commitHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTimestamp", function() { return buildTimestamp; });
var commitHash = "7c486d7a2853829148eda247f22862cb09290b8c";
var buildTimestamp = "2018-05-14T11:00:36-05:00";



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row\">\n    <div class=\"col-4 d-flex flex-column align-items-end\">\n      <div>\n        <div class=\"mb-3\">\n          <img src=\"assets/ps-large.png\">\n        </div>\n        <div class=\"mb-3\">\n          <img src=\"assets/biostat.jpg\">\n        </div>\n        <div style=\"font-size: smaller; text-align: center\">\n          Build version: {{ commitHash }} ({{ buildTimestamp | date }})\n        </div>\n      </div>\n    </div>\n    <div class=\"col-8\">\n      <p class=\"mb-4\">\n        PS is an interactive program for performing power and sample size\n        calculations that may be downloaded for free. It can be used for studies with\n        dichotomous, continuous, or survival response measures. The alternative\n        hypothesis of interest may be specified either in terms of differing response\n        rates, means, or survival times, or in terms of relative risks or odds\n        ratios. Studies with dichotomous or continuous outcomes may involve either a\n        matched or independent study design. The program can determine the sample\n        size needed to detect a specified alternative hypothesis with the required\n        power, the power with which a specific alternative hypothesis can be detected\n        with a given sample size, or the specific alternative hypotheses that can be\n        detected with a given power and sample size.\n      </p>\n\n      <p>\n        The PS program can produce graphs to explore the relationships between power,\n        sample size and detectable alternative hypotheses. It is often helpful to\n        hold one of these variables constant and plot the other two against each\n        other. The program can generate graphs of sample size versus power for a\n        specific alternative hypothesis, sample size versus detectable alternative\n        hypotheses for a specified power, or power versus detectable alternative\n        hypotheses for a specified sample size. Linear or logarithmic axes may be\n        used for either axes.  Multiple curves can be plotted on a single graphic.\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../version */ "./src/app/version.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.commitHash = _version__WEBPACK_IMPORTED_MODULE_1__["commitHash"].substr(0, 7);
        this.buildTimestamp = _version__WEBPACK_IMPORTED_MODULE_1__["buildTimestamp"];
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/z-test/bottom-plot/bottom-plot.component.css":
/*!**************************************************************!*\
  !*** ./src/app/z-test/bottom-plot/bottom-plot.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".draggable {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n"

/***/ }),

/***/ "./src/app/z-test/bottom-plot/bottom-plot.component.html":
/*!***************************************************************!*\
  !*** ./src/app/z-test/bottom-plot/bottom-plot.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg #plot\n  [style.fontFamily]=\"plotOptions.fontFamily\"\n  [style.fontSize]=\"(plotOptions.fontSize * 18).toString() + 'px'\"\n  [attr.class]=\"name\" [attr.width]=\"fixedWidth\" [attr.height]=\"fixedHeight\"\n  [attr.viewBox]=\"viewBox\">\n\n  <rect #unit x=\"0\" y=\"0\" width=\"1em\" height=\"1em\" stroke=\"none\" fill=\"none\" />\n  <ng-template [ngIf]=\"groups && project\">\n    <text text-anchor=\"middle\"\n      [attr.x]=\"innerWidth / 2 + leftMargin\"\n      [attr.y]=\"height - 5\">\n      Parameter Space\n    </text>\n    <text text-anchor=\"middle\" font-weight=\"bold\"\n      [attr.x]=\"innerWidth / 2 + leftMargin\"\n      [attr.y]=\"(plotOptions.getFontSize() / 2) + 8\">\n      {{title}}\n    </text>\n\n    <circle r=\"5\" [attr.cx]=\"xScale(0)\" [attr.cy]=\"yScale(0.5)\"\n      [attr.transform]=\"translate(leftMargin, topMargin)\"\n      fill=\"darkseagreen\" />\n\n    <g *ngFor=\"let group of groups; let i = index; trackBy: trackByGroupId\"\n      [id]=\"group.id\">\n\n      <path id=\"{{group.id}}-dist\"\n        [attr.fill]=\"group.color\"\n        [attr.fill-opacity]=\"group.fillOpacity\"\n        stroke=\"none\" />\n\n      <path id=\"{{group.id}}-center\"\n        [attr.stroke]=\"group.color\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\" />\n\n      <path id=\"{{group.id}}-left\"\n        [class.draggable]=\"group.primary && !disableDragCI\"\n        [attr.stroke]=\"group.color\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\"\n        (mouseover)=\"group.primary ? toggleLeftBarInfo(true) : null\"\n        (mouseout)=\"group.primary ? toggleLeftBarInfo(false) : null\" />\n\n      <path id=\"{{group.id}}-right\"\n        [class.draggable]=\"group.primary && !disableDragCI\"\n        [attr.stroke]=\"group.color\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\"\n        (mouseover)=\"group.primary ? toggleRightBarInfo(true) : null\"\n        (mouseout)=\"group.primary ? toggleRightBarInfo(false) : null\" />\n\n      <circle id=\"{{group.id}}-target\"\n        [class.draggable]=\"group.primary && !disableDragTarget\"\n        r=\"5\"\n        [attr.fill]=\"group.color\"\n        (mouseover)=\"group.primary ? toggleTargetInfo(true) : null\"\n        (mouseout)=\"group.primary ? toggleTargetInfo(false) : null\" />\n    </g>\n\n    <g *ngIf=\"showLeftBarInfo\"\n      [attr.transform]=\"translate(leftMargin + xScale(mainGroup.left), topMargin + yScale(0.5))\">\n      <path id=\"{{name}}-left-box\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.9\" />\n      <text id=\"{{name}}-left-coords\" x=\"0\" y=\"-3em\" font-family=\"monospace\" text-anchor=\"middle\">\n        <tspan style=\"white-space: pre\">{{mainGroup.label}}: {{ciWidth() | formatFixed:[mainGroup.left]}}</tspan><tspan x=\"0\" dy=\"1em\" style=\"white-space: pre\"> Bound: {{mainGroup.left | formatFixed:[ciWidth()]}}</tspan>\n      </text>\n    </g>\n\n    <g *ngIf=\"showRightBarInfo\"\n      [attr.transform]=\"translate(leftMargin + xScale(mainGroup.right), topMargin + yScale(0.5))\">\n      <path id=\"{{name}}-right-box\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.9\" />\n      <text id=\"{{name}}-right-coords\" x=\"0\" y=\"-3em\" font-family=\"monospace\" text-anchor=\"middle\">\n        <tspan style=\"white-space: pre\">{{mainGroup.label}}: {{ciWidth() | formatFixed:[mainGroup.right]}}</tspan><tspan x=\"0\" dy=\"1em\" style=\"white-space: pre\"> Bound: {{mainGroup.right | formatFixed:[ciWidth()]}}</tspan>\n      </text>\n    </g>\n\n    <g *ngIf=\"showTargetInfo\"\n      [attr.transform]=\"translate(leftMargin + xScale(mainGroup.target), topMargin + yScale(0.5))\">\n      <path id=\"{{name}}-target-box\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.9\" />\n      <text id=\"{{name}}-target-coords\" x=\"0\" y=\"-1.5em\" font-family=\"mono\" text-anchor=\"middle\">\n        <tspan style=\"white-space: pre\">&delta;: {{mainGroup.target | formatFixed:[]}}</tspan>\n      </text>\n    </g>\n\n    <g id=\"{{name}}-bottom-axis\" [attr.transform]=\"translate(leftMargin, innerHeight + topMargin)\"></g>\n  </ng-template>\n</svg>\n"

/***/ }),

/***/ "./src/app/z-test/bottom-plot/bottom-plot.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/z-test/bottom-plot/bottom-plot.component.ts ***!
  \*************************************************************/
/*! exports provided: BottomPlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomPlotComponent", function() { return BottomPlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stable */ "./node_modules/stable/stable.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../abstract-plot.component */ "./src/app/abstract-plot.component.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project */ "./src/app/z-test/project.ts");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../plot-options.service */ "./src/app/plot-options.service.ts");
/* harmony import */ var _palette_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../palette.service */ "./src/app/palette.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







;
var CIBar;
(function (CIBar) {
    CIBar[CIBar["Left"] = 0] = "Left";
    CIBar[CIBar["Right"] = 1] = "Right";
})(CIBar || (CIBar = {}));
;
var BottomPlotComponent = /** @class */ (function (_super) {
    __extends(BottomPlotComponent, _super);
    function BottomPlotComponent(plotOptions, palette) {
        var _this = _super.call(this, plotOptions, palette) || this;
        _this.plotOptions = plotOptions;
        _this.palette = palette;
        _this.disableDragTarget = false;
        _this.disableDragCI = false;
        _this.modelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.leftMargin = 10;
        _this.rightMargin = 10;
        _this.topMargin = 50;
        _this.bottomMargin = 50;
        _this.viewBox = "0 0 0 0";
        _this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No;
        // target dragging
        _this.targetDragging = false;
        _this.showTargetInfo = false;
        // bar dragging
        _this.barDragging = false;
        _this.showLeftBarInfo = false;
        _this.showRightBarInfo = false;
        return _this;
    }
    BottomPlotComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var result = this.setup();
        if (!result && this.project) {
            // this might happen if the browser elements aren't ready yet
            setTimeout(function () {
                _this.setup();
            }, 1);
        }
    };
    BottomPlotComponent.prototype.ngAfterViewChecked = function () {
        this.draw();
    };
    BottomPlotComponent.prototype.redraw = function () {
        this.setup();
    };
    BottomPlotComponent.prototype.toggleTargetInfo = function (value) {
        if (!this.targetDragging && !this.barDragging) {
            this.showTargetInfo = value;
            if (value) {
                this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover;
            }
        }
    };
    BottomPlotComponent.prototype.toggleLeftBarInfo = function (value) {
        if (!this.targetDragging && !this.barDragging) {
            this.showLeftBarInfo = value;
            if (value) {
                this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover;
            }
        }
    };
    BottomPlotComponent.prototype.toggleRightBarInfo = function (value) {
        if (!this.targetDragging && !this.barDragging) {
            this.showRightBarInfo = value;
            if (value) {
                this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover;
            }
        }
    };
    BottomPlotComponent.prototype.getColor = function (index) {
        return this.palette.getColor(index, this.plotOptions.paletteTheme);
    };
    BottomPlotComponent.prototype.trackByGroupId = function (index, group) {
        return group.id;
    };
    BottomPlotComponent.prototype.setupDimensions = function () {
        // dimensions
        if (this.fixedWidth) {
            this.width = this.fixedWidth;
        }
        else {
            this.width = this.getDimension('width');
            if (this.width == 0) {
                // window isn't ready to draw
                return false;
            }
        }
        if (this.fixedHeight) {
            this.height = this.fixedHeight;
        }
        else {
            this.height = this.getDimension('height');
            if (this.height == 0) {
                // window isn't ready to draw
                return false;
            }
        }
        // margin
        this.topMargin = this.plotOptions.getFontSize() + 20;
        this.bottomMargin = 10 + this.plotOptions.getFontSize() +
            this.plotOptions.getAxisLineWidth() + // x axis line width
            (this.plotOptions.getAxisFontSize() / 2) + 9; // x axis tick (font + tick)
        this.leftMargin = this.plotOptions.getAxisFontSize() + 9;
        this.rightMargin = this.leftMargin;
        this.viewBox = "0 0 " + this.width + " " + this.height;
        this.innerWidth = this.width - this.leftMargin - this.rightMargin;
        this.innerHeight = this.height - this.topMargin - this.bottomMargin;
        return true;
    };
    BottomPlotComponent.prototype.setup = function () {
        if (!this.project) {
            return false;
        }
        this.setupTitle();
        if (!this.setupDimensions()) {
            return false;
        }
        this.setupPlotData();
        this.setupScales();
        this.setupGroups();
        this.resetDragging();
        this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Yes;
        return true;
    };
    BottomPlotComponent.prototype.setupTitle = function () {
        this.title = "Precision (95% Confidence Interval) vs. Effect Size";
    };
    BottomPlotComponent.prototype.setupPlotData = function () {
        this.plotData = this.project.models.map(function (m) { return m.sampDist; });
    };
    BottomPlotComponent.prototype.setupScales = function () {
        var pSpaceRange = this.project.pSpaceRange;
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().
            domain(pSpaceRange.toArray()).
            range([0, this.innerWidth]);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().
            domain([0, 0.7]).
            range([0, this.innerHeight]);
        var sampDistExtent = this.plotData.reduce(function (arr, sampDist) {
            var extent = d3__WEBPACK_IMPORTED_MODULE_1__["extent"](sampDist, function (d) { return d.y; });
            return d3__WEBPACK_IMPORTED_MODULE_1__["extent"](arr.concat(extent));
        }, []);
        this.yScaleSD = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().
            domain(sampDistExtent.reverse()).
            range([0, this.yScale(0.5)]).
            clamp(true);
    };
    BottomPlotComponent.prototype.setupGroups = function () {
        var _this = this;
        this.groups = this.project.models.map(function (model, i) {
            var range = model.precisionRange();
            // main lines
            var leftLimit = range.min;
            var leftPath = _this.getPath([
                { x: leftLimit, y: 0.40 },
                { x: leftLimit, y: 0.60 }
            ], 'x', 'y', false);
            var rightLimit = range.max;
            var rightPath = _this.getPath([
                { x: rightLimit, y: 0.40 },
                { x: rightLimit, y: 0.60 }
            ], 'x', 'y', false);
            var centerPath = _this.getPath([
                { x: leftLimit, y: 0.5 },
                { x: rightLimit, y: 0.5 }
            ], 'x', 'y', false);
            // sample distribution
            var distPath = _this.getArea(_this.plotData[i], 'x', 'y');
            var result = {
                index: i,
                id: _this.name + "-group-" + i,
                leftPath: leftPath,
                centerPath: centerPath,
                rightPath: rightPath,
                distPath: distPath,
                left: leftLimit,
                originalTarget: model.delta,
                target: model.delta,
                right: rightLimit,
                label: "95% CI",
                color: _this.getColor(i),
                fillOpacity: 0.5,
                strokeOpacity: 0.9,
                primary: _this.project.selectedIndex == i
            };
            return result;
        });
        // order group in reverse so that they are drawn properly, put the selected
        // group at the end
        stable__WEBPACK_IMPORTED_MODULE_2__["inplace"](this.groups, function (a, b) {
            if (a.primary)
                return 1;
            if (b.primary)
                return -1;
            return d3__WEBPACK_IMPORTED_MODULE_1__["descending"](b.index, a.index);
        });
        this.mainGroup = this.groups[this.groups.length - 1];
    };
    BottomPlotComponent.prototype.resetDragging = function () {
        this.targetDragging = false;
        this.barDragging = false;
    };
    BottomPlotComponent.prototype.draw = function () {
        var _this = this;
        if (this.needDraw == _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No) {
            return;
        }
        this.drawInfoBox('left');
        this.drawInfoBox('right');
        this.drawInfoBox('target');
        if (this.needDraw == _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover) {
            this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No;
            return;
        }
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.plotElement.nativeElement);
        var t = svg.transition();
        // axes (drawn by d3)
        var xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale).ticks(Math.floor(this.innerWidth / 75));
        t.select("#" + this.name + "-bottom-axis").
            call(xAxis).
            attr("font-size", 15 * this.plotOptions.axisFontSize).
            attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);
        // alternate groups
        this.groups.forEach(function (group, index) {
            var id = "#" + group.id;
            t.select(id).attr('transform', _this.translate(_this.leftMargin, _this.topMargin));
            t.select(id + "-dist").attr('d', group.distPath);
            t.select(id + "-center").attr('d', group.centerPath);
            t.select(id + "-left").attr('d', group.leftPath);
            t.select(id + "-right").attr('d', group.rightPath);
            t.select(id + "-target").
                attr('cx', _this.xScale(group.target)).
                attr('cy', _this.yScale(0.5));
        });
        // make target point draggable
        var target = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#" + this.mainGroup.id + "-target");
        var targetDrag = d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().
            container(target.node().parentNode.parentNode).
            on("start", this.dragTargetStart.bind(this)).
            on("drag", this.dragTarget.bind(this)).
            on("end", this.dragTargetEnd.bind(this));
        target.call(targetDrag);
        // make left bar draggable
        var leftBar = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#" + this.mainGroup.id + "-left");
        var leftBarDrag = d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().
            container(leftBar.node().parentNode.parentNode).
            on("start", this.dragBarStart.bind(this, CIBar.Left)).
            on("drag", this.dragBar.bind(this, CIBar.Left)).
            on("end", this.dragBarEnd.bind(this, CIBar.Left));
        leftBar.call(leftBarDrag);
        // make right bar draggable
        var rightBar = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#" + this.mainGroup.id + "-right");
        var rightBarDrag = d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().
            container(rightBar.node().parentNode.parentNode).
            on("start", this.dragBarStart.bind(this, CIBar.Right)).
            on("drag", this.dragBar.bind(this, CIBar.Right)).
            on("end", this.dragBarEnd.bind(this, CIBar.Right));
        rightBar.call(rightBarDrag);
        this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No;
    };
    BottomPlotComponent.prototype.drawInfoBox = function (which) {
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.plotElement.nativeElement);
        var box = svg.select("#" + this.name + "-" + which + "-box");
        var coords = svg.select("#" + this.name + "-" + which + "-coords");
        if (box.size() > 0 && coords.size() > 0) {
            var dim = coords.node().getBBox();
            var left = dim.x - 5, right = dim.x + dim.width + 5;
            var unit = dim.width / 16;
            var lmid = left + (7 * unit) + 5, rmid = left + (9 * unit) + 5;
            var mid = left + (8 * unit) + 5;
            var top_1 = dim.y - 5, bottom = dim.y + dim.height + 5;
            box.attr("d", d3__WEBPACK_IMPORTED_MODULE_1__["line"]()([
                [left, top_1], [right, top_1], [right, bottom],
                [rmid, bottom], [mid, bottom + 5], [lmid, bottom],
                [left, bottom], [left, top_1]
            ]));
        }
    };
    BottomPlotComponent.prototype.ciWidth = function () {
        return Math.abs(this.mainGroup.right - this.mainGroup.left);
    };
    BottomPlotComponent.prototype.getArea = function (points, xName, yName) {
        var _this = this;
        var area = d3__WEBPACK_IMPORTED_MODULE_1__["area"]().curve(d3__WEBPACK_IMPORTED_MODULE_1__["curveBasis"]).
            x(function (d, i) { return _this.xScale(d[xName]); }).
            y0(this.yScaleSD(0)).
            y1(function (d, i) { return _this.yScaleSD(d[yName]); });
        return area(points);
    };
    BottomPlotComponent.prototype.dragTargetStart = function () {
        if (this.disableDragTarget)
            return;
        this.targetDragging = true;
        this.mainGroup.fillOpacity = 0.1;
        this.mainGroup.strokeOpacity = 0.1;
    };
    BottomPlotComponent.prototype.dragTarget = function (event) {
        if (this.disableDragTarget)
            return;
        var mouseX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x - this.leftMargin;
        var x = this.xScale.invert(mouseX);
        if (x >= 0 && x < 0.1) {
            x = 0.1;
            mouseX = this.xScale(x);
        }
        else if (x < 0 && x > -0.1) {
            x = -0.1;
            mouseX = this.xScale(x);
        }
        var offset = mouseX - this.xScale(this.mainGroup.originalTarget);
        var g = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#" + this.mainGroup.id).
            attr('transform', this.translate(this.leftMargin + offset, this.topMargin));
        this.mainGroup.target = x;
        this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover;
    };
    BottomPlotComponent.prototype.dragTargetEnd = function () {
        var _this = this;
        if (this.disableDragTarget)
            return;
        if (this.project) {
            var newDelta = this.mainGroup.target;
            this.project.updateModel(this.project.selectedIndex, 'delta', newDelta).then(function () {
                _this.modelChanged.emit();
            });
        }
        this.showTargetInfo = false;
    };
    BottomPlotComponent.prototype.dragBarStart = function (which) {
        if (this.disableDragCI)
            return;
        this.barDragging = true;
    };
    BottomPlotComponent.prototype.dragBar = function (which, event) {
        if (this.disableDragCI)
            return;
        var mouseX = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x - this.leftMargin;
        var x = this.xScale.invert(mouseX);
        var diff = 0;
        switch (which) {
            case CIBar.Left:
                var leftBarX = this.xScale(this.mainGroup.left);
                diff = x - this.mainGroup.left;
                break;
            case CIBar.Right:
                var rightBarX = this.xScale(this.mainGroup.right);
                diff = this.mainGroup.right - x;
                break;
        }
        this.mainGroup.left += diff;
        this.mainGroup.right -= diff;
        // redraw lines
        var leftPath = this.getPath([
            { x: this.mainGroup.left, y: 0.40 },
            { x: this.mainGroup.left, y: 0.60 }
        ], 'x', 'y', false);
        var rightPath = this.getPath([
            { x: this.mainGroup.right, y: 0.40 },
            { x: this.mainGroup.right, y: 0.60 }
        ], 'x', 'y', false);
        var centerPath = this.getPath([
            { x: this.mainGroup.left, y: 0.5 },
            { x: this.mainGroup.right, y: 0.5 }
        ], 'x', 'y', false);
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.plotElement.nativeElement);
        svg.select("#" + this.mainGroup.id + "-left").attr('d', leftPath);
        svg.select("#" + this.mainGroup.id + "-right").attr('d', rightPath);
        svg.select("#" + this.mainGroup.id + "-center").attr('d', centerPath);
        this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover;
    };
    BottomPlotComponent.prototype.dragBarEnd = function (which) {
        var _this = this;
        if (this.disableDragCI)
            return;
        if (this.project) {
            this.project.updateModel(this.project.selectedIndex, 'ci', this.ciWidth()).then(function () {
                _this.modelChanged.emit();
            });
        }
        this.showLeftBarInfo = false;
        this.showRightBarInfo = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('project'),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_4__["Project"])
    ], BottomPlotComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('disable-drag-target'),
        __metadata("design:type", Object)
    ], BottomPlotComponent.prototype, "disableDragTarget", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('disable-drag-ci'),
        __metadata("design:type", Object)
    ], BottomPlotComponent.prototype, "disableDragCI", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BottomPlotComponent.prototype, "modelChanged", void 0);
    BottomPlotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'z-test-bottom-plot',
            template: __webpack_require__(/*! ./bottom-plot.component.html */ "./src/app/z-test/bottom-plot/bottom-plot.component.html"),
            styles: [__webpack_require__(/*! ./bottom-plot.component.css */ "./src/app/z-test/bottom-plot/bottom-plot.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_plot_options_service__WEBPACK_IMPORTED_MODULE_5__["PlotOptionsService"],
            _palette_service__WEBPACK_IMPORTED_MODULE_6__["PaletteService"]])
    ], BottomPlotComponent);
    return BottomPlotComponent;
}(_abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["AbstractPlotComponent"]));



/***/ }),

/***/ "./src/app/z-test/export-plots/export-plots.component.css":
/*!****************************************************************!*\
  !*** ./src/app/z-test/export-plots/export-plots.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.modal-body {\n}\n\n.modal-body .left {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  border-right: 1px solid #888;\n  padding: 10px;\n}\n\n.modal-body .right {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  margin-left: 10px;\n  overflow: auto;\n  padding: 10px;\n}\n\n.modal-footer {\n  align-items: center;\n  justify-content: space-between;\n}\n"

/***/ }),

/***/ "./src/app/z-test/export-plots/export-plots.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/z-test/export-plots/export-plots.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Export graphs</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div id=\"z-test-export-plots-modal-body\" class=\"modal-body grow-vert h-100\">\n  <div class=\"d-flex flex-column h-100\">\n    <ngb-tabset [destroyOnHide]=\"false\">\n      <ngb-tab [title]=\"topLeftTitle\">\n        <ng-template ngbTabContent>\n          <div class=\"left\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"\n                  [(ngModel)]=\"includeTopLeft\">\n                  Export this graph\n              </label>\n            </div>\n            <ng-template [ngIf]=\"includeTopLeft\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topLeftDropLines\">\n                    Show drop lines\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topLeftTarget\">\n                    Show target\n                </label>\n              </div>\n              <label>\n                Dimensions\n                <select class=\"form-control\" name=\"topLeftDim\"\n                  [(ngModel)]=\"topLeftDim\" (ngModelChange)=\"setDim('topLeft', $event)\">\n                  <option value=\"640x480\">640 by 480</option>\n                  <option value=\"800x600\">800 by 600</option>\n                  <option value=\"1024x768\">1024 by 768</option>\n                  <option value=\"other\">Custom</option>\n                </select>\n              </label>\n              <div *ngIf=\"topLeftDim == 'other'\" class=\"form-group\">\n                <label>\n                  Width\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topLeftWidth\">\n                </label>\n              </div>\n              <div *ngIf=\"topLeftDim == 'other'\" class=\"form-group\">\n                <label>\n                  Height\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topLeftHeight\">\n                </label>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"right\">\n            <z-test-plot #topLeftPlot name=\"top-left-export\"\n              [project]=\"project\" [hover-disabled]=\"true\"\n              [disable-drag]=\"true\"\n              [hide-drop-lines]=\"!topLeftDropLines\"\n              [hide-target]=\"!topLeftTarget\"\n              [fixed-width]=\"topLeftWidth\" [fixed-height]=\"topLeftHeight\"\n              [legend-x-offset]=\"topLeftLegendXOffset\"\n              [legend-y-offset]=\"topLeftLegendYOffset\">\n            </z-test-plot>\n          </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab [title]=\"topRightTitle\">\n        <ng-template ngbTabContent>\n          <div class=\"left\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"\n                  [(ngModel)]=\"includeTopRight\">\n                  Export this graph\n              </label>\n            </div>\n            <ng-template [ngIf]=\"includeTopRight\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topRightDropLines\">\n                    Show drop lines\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topRightTarget\">\n                    Show target\n                </label>\n              </div>\n              <label>\n                Dimensions\n                <select class=\"form-control\" name=\"topRightDim\"\n                  [(ngModel)]=\"topRightDim\" (ngModelChange)=\"setDim('topRight', $event)\">\n                  <option value=\"640x480\">640 by 480</option>\n                  <option value=\"800x600\">800 by 600</option>\n                  <option value=\"1024x768\">1024 by 768</option>\n                  <option value=\"other\">Custom</option>\n                </select>\n              </label>\n              <div *ngIf=\"topRightDim == 'other'\" class=\"form-group\">\n                <label>\n                  Width\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topRightWidth\">\n                </label>\n              </div>\n              <div *ngIf=\"topRightDim == 'other'\" class=\"form-group\">\n                <label>\n                  Height\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topRightHeight\">\n                </label>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"right\">\n            <z-test-plot #topRightPlot name=\"top-right-export\"\n              [project]=\"project\" [hover-disabled]=\"true\"\n              [disable-drag]=\"true\"\n              [hide-drop-lines]=\"!topRightDropLines\"\n              [hide-target]=\"!topRightTarget\"\n              [fixed-width]=\"topRightWidth\" [fixed-height]=\"topRightHeight\"\n              [legend-x-offset]=\"topRightLegendXOffset\"\n              [legend-y-offset]=\"topRightLegendYOffset\">\n            </z-test-plot>\n          </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab [title]=\"bottomTitle\">\n        <ng-template ngbTabContent>\n          <div class=\"left\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"\n                  [(ngModel)]=\"includeBottom\">\n                  Export this graph\n              </label>\n            </div>\n            <ng-template [ngIf]=\"includeBottom\">\n              <label>\n                Dimensions\n                <select class=\"form-control\" name=\"bottomDim\"\n                  [(ngModel)]=\"bottomDim\" (ngModelChange)=\"setDim('bottom', $event)\">\n                  <option value=\"640x160\">640 by 160</option>\n                  <option value=\"800x200\">800 by 200</option>\n                  <option value=\"1024x256\">1024 by 256</option>\n                  <option value=\"other\">Custom</option>\n                </select>\n              </label>\n              <div *ngIf=\"bottomDim == 'other'\" class=\"form-group\">\n                <label>\n                  Width\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"bottomWidth\">\n                </label>\n              </div>\n              <div *ngIf=\"bottomDim == 'other'\" class=\"form-group\">\n                <label>\n                  Height\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"bottomHeight\">\n                </label>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"right\">\n            <z-test-bottom-plot #bottomPlot name=\"bottom-export\"\n              [project]=\"project\"\n              [disable-drag-target]=\"true\" [disable-drag-ci]=\"true\"\n              [fixed-width]=\"bottomWidth\" [fixed-height]=\"bottomHeight\">\n            </z-test-bottom-plot>\n          </div>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <div class=\"d-flex-inline flex-row\">\n    <div class=\"form-inline\">\n      <label for=\"export-image-format\" class=\"mr-sm-2\">Image format:</label>\n      <select id=\"export-image-format\" class=\"form-control\" name=\"imageFormat\"\n        [ngModel]=\"imageFormat\" (ngModelChange)=\"imageFormat = $event\">\n        <option *ngFor=\"let format of imageFormats\"\n          [selected]=\"imageFormat == format\">{{format}}</option>\n      </select>\n    </div>\n  </div>\n  <p>\n    The graphs you have chosen will be packaged in a ZIP file.\n    <a #downloadLink style=\"display: none\"></a>\n  </p>\n  <div class=\"d-flex flex-row align-items-center\">\n    <button type=\"button\" class=\"btn btn-secondary m-1\" (click)=\"save()\"\n      [disabled]=\"!includeTopLeft && !includeTopRight && !includeBottom\">\n      <i class=\"fa fa-floppy-o\"></i> Save\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary m-1\" (click)=\"cancel()\">\n      <i class=\"fa fa-circle-x\"></i> Close\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/z-test/export-plots/export-plots.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/z-test/export-plots/export-plots.component.ts ***!
  \***************************************************************/
/*! exports provided: ExportPlotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPlotsComponent", function() { return ExportPlotsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project */ "./src/app/z-test/project.ts");
/* harmony import */ var _plot_plot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plot/plot.component */ "./src/app/z-test/plot/plot.component.ts");
/* harmony import */ var _bottom_plot_bottom_plot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bottom-plot/bottom-plot.component */ "./src/app/z-test/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var _export_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../export.service */ "./src/app/export.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Platform;
(function (Platform) {
    Platform[Platform["iOS"] = 0] = "iOS";
    Platform[Platform["WP"] = 1] = "WP";
    Platform[Platform["Android"] = 2] = "Android";
    Platform[Platform["Linux"] = 3] = "Linux";
    Platform[Platform["Mac"] = 4] = "Mac";
    Platform[Platform["Windows"] = 5] = "Windows";
    Platform[Platform["BB"] = 6] = "BB";
    Platform[Platform["Other"] = 7] = "Other";
})(Platform || (Platform = {}));
/* browser.js v0.1-dev | @ajlkn | MIT licensed */
var platformPatterns = [
    [Platform.iOS, /([0-9_]+) like Mac OS X/],
    [Platform.iOS, /CPU like Mac OS X/],
    [Platform.WP, /Windows Phone ([0-9\.]+)/],
    [Platform.Android, /Android ([0-9\.]+)/],
    [Platform.Linux, /Linux/],
    [Platform.Mac, /Macintosh.+Mac OS X ([0-9_]+)/],
    [Platform.Windows, /Windows NT ([0-9\.]+)/],
    [Platform.BB, /BlackBerry.+Version\/([0-9\.]+)/],
    [Platform.BB, /BB[0-9]+.+Version\/([0-9\.]+)/],
];
var ExportPlotsComponent = /** @class */ (function () {
    function ExportPlotsComponent(activeModal, exportService) {
        this.activeModal = activeModal;
        this.exportService = exportService;
        this.includeTopLeft = true;
        this.topLeftDim = "640x480";
        this.topLeftWidth = 640;
        this.topLeftHeight = 480;
        this.topLeftDropLines = true;
        this.topLeftTarget = true;
        this.includeTopRight = true;
        this.topRightDim = "640x480";
        this.topRightWidth = 640;
        this.topRightHeight = 480;
        this.topRightDropLines = true;
        this.topRightTarget = true;
        this.includeBottom = true;
        this.bottomTitle = "Precision vs. Effect Size";
        this.bottomDim = "640x160";
        this.bottomWidth = 640;
        this.bottomHeight = 160;
        this.imageFormats = [];
    }
    ExportPlotsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var platform = this.detectPlatform();
        switch (platform) {
            case Platform.Windows:
                this.imageFormat = "WMF";
                break;
            case Platform.Mac:
                this.imageFormat = "EPS";
                break;
            case Platform.Linux:
                this.imageFormat = "SVG";
                break;
            default:
                this.imageFormat = "PNG";
                break;
        }
        this.exportService.formats().then(function (response) {
            _this.imageFormats = response.formats;
            var formatOk = _this.imageFormats.some(function (format) {
                return _this.imageFormat == format;
            });
            if (!formatOk) {
                // PNG will always be supported
                _this.imageFormat = "PNG";
            }
        });
        switch (this.project.getModel(0).output) {
            case "n":
            case "nByCI":
                this.topLeftTitle = "Sample Size vs. Power";
                this.topRightTitle = "Sample Size vs. Detectable Alternative";
                break;
            case "power":
                this.topLeftTitle = "Power vs. Sample Size";
                this.topRightTitle = "Power vs. Detectable Alternative";
                break;
            case "delta":
                this.topLeftTitle = "Detectable Alternative vs. Sample Size";
                this.topRightTitle = "Detectable Alternative vs. Power";
                break;
        }
    };
    ExportPlotsComponent.prototype.detectPlatform = function () {
        if (navigator) {
            var ua = navigator.userAgent;
            for (var i = 0, ilen = platformPatterns.length; i < ilen; i++) {
                var pattern = platformPatterns[i];
                if (ua.match(pattern[1])) {
                    return pattern[0];
                }
            }
        }
        return Platform.Other;
    };
    ExportPlotsComponent.prototype.setDim = function (which, value) {
        if (value != 'other') {
            var arr = value.split("x");
            this[which + "Width"] = parseInt(arr[0]);
            this[which + "Height"] = parseInt(arr[1]);
        }
    };
    ExportPlotsComponent.prototype.serializePlot = function (plot) {
        var serializer = new XMLSerializer();
        return serializer.serializeToString(plot.plotElement.nativeElement);
    };
    ExportPlotsComponent.prototype.save = function () {
        var _this = this;
        var plots = [];
        if (this.includeTopLeft) {
            plots.push({
                name: this.topLeftTitle,
                width: this.topLeftWidth,
                height: this.topLeftHeight,
                svg: this.serializePlot(this.topLeftPlot)
            });
        }
        if (this.includeTopRight) {
            plots.push({
                name: this.topRightTitle,
                width: this.topRightWidth,
                height: this.topRightHeight,
                svg: this.serializePlot(this.topRightPlot)
            });
        }
        if (this.includeBottom) {
            plots.push({
                name: this.bottomTitle,
                width: this.bottomWidth,
                height: this.bottomHeight,
                svg: this.serializePlot(this.bottomPlot)
            });
        }
        this.exportService.plots(this.imageFormat, plots).then(function (response) {
            var data = atob(response.data);
            var buf = new ArrayBuffer(data.length);
            var arr = new Uint8Array(buf);
            for (var i = 0; i < data.length; i++) {
                arr[i] = data.charCodeAt(i);
            }
            var blob = new Blob([buf], { type: 'application/zip' });
            var url = URL.createObjectURL(blob);
            var elt = _this.downloadLink.nativeElement;
            elt.href = url;
            elt.download = response.filename;
            elt.click();
            URL.revokeObjectURL(url);
            _this.activeModal.close();
        });
    };
    ExportPlotsComponent.prototype.cancel = function () {
        this.activeModal.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('project'),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_2__["Project"])
    ], ExportPlotsComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('top-left-legend-x-offset'),
        __metadata("design:type", Number)
    ], ExportPlotsComponent.prototype, "topLeftLegendXOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('top-left-legend-y-offset'),
        __metadata("design:type", Number)
    ], ExportPlotsComponent.prototype, "topLeftLegendYOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('top-right-legend-x-offset'),
        __metadata("design:type", Number)
    ], ExportPlotsComponent.prototype, "topRightLegendXOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('top-right-legend-y-offset'),
        __metadata("design:type", Number)
    ], ExportPlotsComponent.prototype, "topRightLegendYOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('topLeftPlot'),
        __metadata("design:type", _plot_plot_component__WEBPACK_IMPORTED_MODULE_3__["PlotComponent"])
    ], ExportPlotsComponent.prototype, "topLeftPlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('topRightPlot'),
        __metadata("design:type", _plot_plot_component__WEBPACK_IMPORTED_MODULE_3__["PlotComponent"])
    ], ExportPlotsComponent.prototype, "topRightPlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bottomPlot'),
        __metadata("design:type", _bottom_plot_bottom_plot_component__WEBPACK_IMPORTED_MODULE_4__["BottomPlotComponent"])
    ], ExportPlotsComponent.prototype, "bottomPlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('downloadLink'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ExportPlotsComponent.prototype, "downloadLink", void 0);
    ExportPlotsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'z-test-export-plots',
            template: __webpack_require__(/*! ./export-plots.component.html */ "./src/app/z-test/export-plots/export-plots.component.html"),
            styles: [__webpack_require__(/*! ./export-plots.component.css */ "./src/app/z-test/export-plots/export-plots.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _export_service__WEBPACK_IMPORTED_MODULE_5__["ExportService"]])
    ], ExportPlotsComponent);
    return ExportPlotsComponent;
}());



/***/ }),

/***/ "./src/app/z-test/help/help.component.css":
/*!************************************************!*\
  !*** ./src/app/z-test/help/help.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/z-test/help/help.component.html":
/*!*************************************************!*\
  !*** ./src/app/z-test/help/help.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"topic == 'overview'\">\n  <h5>Introduction</h5>\n  <p>\n    PS is a program for performing power and sample size calculations. You are\n    using a web-enabled beta-test version of the program, where we are actively\n    working on the interactive user interface. Currently, it can only be used\n    for paired t-tests but it will be expanded for use in studies with\n    dichotomous, continuous, survival response and other data.\n  </p>\n  <h5>Program Output</h5>\n  <p>\n    The program can determine the sample size needed to detect a specified\n    alternative hypothesis with the required power, the power with which a\n    specific alternative hypothesis can be detected with a given sample size,\n    or the specific alternative hypotheses that can be detected with a given\n    power and sample size. It also gives the 95% confidence interval for the\n    test statistic under the specified alternative hypothesis as a measure of\n    the precision of the test statistic.\n  </p>\n  <h5>Interactive Help</h5>\n  <p>\n    Click on any question-mark icon for help or pull-down menu to determine\n    the needed information. In the Start tab, choose one of sample size,\n    power, or detectable difference  and then complete the other fields that\n    appear. Hover over the i icon for information on what is needed in each\n    field. Then click the calculate button. A new tab will appear with\n    sliders for altering the input variables, the desired output variable and\n    various graphs.\n  </p>\n  <h5>Graphical Output</h5>\n  <p>\n    The graphs that can be generated are sample size vs. power, sample size\n    vs. the detectable alternative hypothesis, power vs. sample size, and\n    power vs. the detectable alternative hypothesis.  The y-axes of these\n    graphs are always show the output variable. In addition, a graph of\n    precision vs effect size is always given.  The red dot on the top two\n    graphs can be dragged to enhance the users intuition on how the input and\n    output variables interact.\n  </p>\n  <h5>Interpretation</h5>\n  <p>\n    The output also includes text that describes the power or sample size\n    calculation in English, which may be a useful starting point for a\n    description in a grant application.\n  </p>\n  <h5>Options gear wheel</h5>\n  <p>\n    Click on this icon to change the point size, line width and other graph\n    options.\n  </p>\n  <p>\n    <img src=\"assets/cc.png\"> &copy; William D. Dupont, Jeffrey D. Blume, W.\n    Dale Plummer, Jeremy Stephens 2017-2018\n  </p>\n  <p>\n    Use of this program is restricted by a Creative Commons Attribution\n    Non-Commercial Share Alike license. See\n    <a href=\"https://creativecommons.org/licenses\">https://creativecommons.org/licenses</a>\n    for details. We are grateful for support from Dr. Gordon R. Bernard and\n    the Vanderbilt Institute for Clinical and Translational Research.\n  </p>\n</ng-template>\n<ng-template [ngIf]=\"topic == 'start'\">\n  <p>Select one of the following:</p>\n  <h5>Sample size</h5>\n  <p>\n    For independent t-tests this is the number of experimental patients that\n    must be studied to detect a true difference in population means &delta;\n    with Type I error probability &alpha; given a standard deviation &sigma;\n    and <em>m</em> controls per experimental patient. For paired t-tests it\n    is the number of pairs of patients needed to detect a true difference in\n    population means &delta; with Type I error probability &alpha; given a\n    standard deviation &sigma;.\n  </p>\n  <h5>Power</h5>\n  <p>\n    For independent studies it is the probability of rejecting the null\n    hypothesis with Type I error probability &alpha; given the specified\n    sample size, a standard deviation &sigma; and a control/experimental\n    patient ratio <em>m</em> when the true difference in population means is\n    &delta;. For paired studies it is the probability of rejecting the null\n    hypothesis with Type I error probability &alpha; given the specified\n    sample size, a standard deviation &sigma; when the true difference in\n    population means is &delta;.\n  </p>\n  <h5>Detectable alternative</h5>\n  <p>\n    A difference in population means that can be detected with the specified\n    power and Type I error probability &alpha; given a standard deviation\n    &sigma;, and the specified sample size.\n  </p>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/z-test/help/help.component.ts":
/*!***********************************************!*\
  !*** ./src/app/z-test/help/help.component.ts ***!
  \***********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HelpComponent.prototype, "topic", void 0);
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'z-test-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/z-test/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/z-test/help/help.component.css")]
        })
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/z-test/output-pane/output-pane.component.css":
/*!**************************************************************!*\
  !*** ./src/app/z-test/output-pane/output-pane.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plot {\n  height: 80%;\n  /*min-height: 500px;*/\n  position: relative;\n}\n.without-footer {\n  height: 100%;\n}\ndiv.show-footer {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n}\n.output-footer {\n  position: relative;\n  background-color: #e5e5e5;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  /*padding: 10px 20px;*/\n  /*text-align: justify;*/\n  /*overflow: auto;*/\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.footer-buttons {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n.footer-buttons i {\n  margin: 0 3px;\n}\n.dot {\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/z-test/output-pane/output-pane.component.html":
/*!***************************************************************!*\
  !*** ./src/app/z-test/output-pane/output-pane.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"z-test-output-pane-plots\" class=\"plot\" [class.without-footer]=\"!showFooter\">\n  <z-test-plot #topLeft name=\"top-left\"\n    [project]=\"project\"\n    [hover-disabled]=\"hoverDisabled\"\n    (modelChanged)=\"onModelChanged()\">\n  </z-test-plot>\n  <z-test-plot #topRight name=\"top-right\"\n    [project]=\"project\"\n    [hover-disabled]=\"hoverDisabled\"\n    (modelChanged)=\"onModelChanged()\">\n  </z-test-plot>\n  <z-test-bottom-plot #bottom name=\"bottom\"\n    [project]=\"project\"\n    [disable-drag-target]=\"model?.output == 'delta'\"\n    [disable-drag-ci]=\"model?.output == 'n'\"\n    (modelChanged)=\"onModelChanged()\">\n  </z-test-bottom-plot>\n  <div class=\"show-footer\" *ngIf=\"project && !showFooter\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleFooter(true)\">\n      <i class=\"fa fa-envelope-open-o\" aria-hidden=\"true\" title=\"Show footer\"></i>\n      Interpretation / Log\n    </button>\n  </div>\n</div>\n<div id=\"z-test-output-pane-footer\" class=\"output-footer\" *ngIf=\"project && showFooter\">\n  <div class=\"footer-buttons\">\n    <button type=\"button\" (click)=\"copyFooter()\" title=\"Copy to clipboard\">\n      <i class=\"fa fa-clipboard\"></i>\n    </button>\n    <button type=\"button\" (click)=\"toggleFooter(false)\" title=\"Hide footer\">\n      <i class=\"fa fa-window-minimize\"></i>\n    </button>\n  </div>\n  <ngb-tabset #footerTabset type=\"pills\">\n    <ngb-tab id=\"z-test-output-pane-interpretation\">\n      <ng-template ngbTabTitle>\n        <i *ngIf=\"project.models.length > 1\" class=\"fa fa-square\"\n          [style.color]=\"getIndicatorColor()\"></i>\n        Interpretation\n      </ng-template>\n      <ng-template ngbTabContent>\n        {{model?.interpretation()}}\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab id=\"z-test-output-pane-log\" title=\"Log\">\n      <ng-template ngbTabContent>\n        <ng-template [ngIf]=\"!project\" [ngIfElse]=\"changeHistory\">\n          There have been no changes yet.\n        </ng-template>\n        <ng-template #changeHistory>\n          <ul class=\"log\">\n            <li *ngFor=\"let changes of project.changeHistory\"\n              [innerHTML]=\"project.describeChanges(changes)\">\n            </li>\n          </ul>\n        </ng-template>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n"

/***/ }),

/***/ "./src/app/z-test/output-pane/output-pane.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/z-test/output-pane/output-pane.component.ts ***!
  \*************************************************************/
/*! exports provided: OutputPaneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputPaneComponent", function() { return OutputPaneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project */ "./src/app/z-test/project.ts");
/* harmony import */ var _plot_plot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plot/plot.component */ "./src/app/z-test/plot/plot.component.ts");
/* harmony import */ var _bottom_plot_bottom_plot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bottom-plot/bottom-plot.component */ "./src/app/z-test/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var _export_plots_export_plots_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../export-plots/export-plots.component */ "./src/app/z-test/export-plots/export-plots.component.ts");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../plot-options.service */ "./src/app/plot-options.service.ts");
/* harmony import */ var _palette_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../palette.service */ "./src/app/palette.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OutputPaneComponent = /** @class */ (function () {
    function OutputPaneComponent(modalService, plotOptions, palette) {
        this.modalService = modalService;
        this.plotOptions = plotOptions;
        this.palette = palette;
        this.hoverDisabled = false;
        this.modelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showFooter = true;
    }
    OutputPaneComponent.prototype.ngOnChanges = function (changes) {
        if (!('project' in changes))
            return;
        if (this.project) {
            this.model = this.project.getModel(this.project.selectedIndex);
        }
        else {
            this.model = undefined;
        }
    };
    OutputPaneComponent.prototype.toggleFooter = function (value) {
        this.showFooter = value;
        setTimeout(this.resize.bind(this), 1);
    };
    OutputPaneComponent.prototype.openSaveDialog = function () {
        var modalRef = this.modalService.open(_export_plots_export_plots_component__WEBPACK_IMPORTED_MODULE_5__["ExportPlotsComponent"], { windowClass: 'export-plots' });
        var component = modalRef.componentInstance;
        component.project = this.project;
        component.topLeftLegendXOffset = this.topLeftPlot.legendXOffset;
        component.topLeftLegendYOffset = this.topLeftPlot.legendYOffset;
        component.topRightLegendXOffset = this.topRightPlot.legendXOffset;
        component.topRightLegendYOffset = this.topRightPlot.legendYOffset;
    };
    OutputPaneComponent.prototype.round = function (n) {
        return Math.round(n * 100) / 100;
    };
    OutputPaneComponent.prototype.ceil = function (n) {
        return Math.ceil(n);
    };
    OutputPaneComponent.prototype.resize = function () {
        this.redrawPlots();
    };
    OutputPaneComponent.prototype.updateProject = function () {
        if (this.project) {
            this.model = this.project.getModel(this.project.selectedIndex);
        }
    };
    OutputPaneComponent.prototype.redrawPlots = function () {
        var _this = this;
        // Set a timeout here to let the UI resize if needed
        setTimeout(function () {
            _this.topLeftPlot.redraw();
            _this.topRightPlot.redraw();
            _this.bottomPlot.redraw();
        }, 1);
    };
    OutputPaneComponent.prototype.getIndicatorColor = function () {
        return this.palette.getColor(this.project.selectedIndex, this.plotOptions.paletteTheme);
    };
    OutputPaneComponent.prototype.describeChanges = function (changes) {
        var result = [];
        for (var key in changes) {
            result.push("<span class=\"code\">" + key + "</span> was changed to <span class=\"code\">" + changes[key] + "</span>");
        }
        return result.join("; ");
    };
    OutputPaneComponent.prototype.copyFooter = function () {
        document.execCommand('copy');
    };
    OutputPaneComponent.prototype.onCopy = function (event) {
        var _this = this;
        switch (this.footerTabset.activeId) {
            case 'z-test-output-pane-interpretation':
                event.clipboardData.setData('text/plain', this.model.interpretation());
                event.preventDefault();
                break;
            case 'z-test-output-pane-log':
                var text = this.project.changeHistory.
                    map(function (changes) { return _this.project.describeChanges(changes, false); }).
                    join("\r\n");
                event.clipboardData.setData('text/plain', text);
                event.preventDefault();
                break;
        }
    };
    OutputPaneComponent.prototype.onModelChanged = function () {
        this.modelChanged.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('project'),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_2__["Project"])
    ], OutputPaneComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hover-disabled'),
        __metadata("design:type", Object)
    ], OutputPaneComponent.prototype, "hoverDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OutputPaneComponent.prototype, "modelChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('topLeft'),
        __metadata("design:type", _plot_plot_component__WEBPACK_IMPORTED_MODULE_3__["PlotComponent"])
    ], OutputPaneComponent.prototype, "topLeftPlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('topRight'),
        __metadata("design:type", _plot_plot_component__WEBPACK_IMPORTED_MODULE_3__["PlotComponent"])
    ], OutputPaneComponent.prototype, "topRightPlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bottom'),
        __metadata("design:type", _bottom_plot_bottom_plot_component__WEBPACK_IMPORTED_MODULE_4__["BottomPlotComponent"])
    ], OutputPaneComponent.prototype, "bottomPlot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('saveDialog'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], OutputPaneComponent.prototype, "saveDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('footerTabset'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"])
    ], OutputPaneComponent.prototype, "footerTabset", void 0);
    OutputPaneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'z-test-output-pane',
            template: __webpack_require__(/*! ./output-pane.component.html */ "./src/app/z-test/output-pane/output-pane.component.html"),
            styles: [__webpack_require__(/*! ./output-pane.component.css */ "./src/app/z-test/output-pane/output-pane.component.css")],
            host: {
                '(document:copy)': 'onCopy($event)'
            }
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _plot_options_service__WEBPACK_IMPORTED_MODULE_6__["PlotOptionsService"],
            _palette_service__WEBPACK_IMPORTED_MODULE_7__["PaletteService"]])
    ], OutputPaneComponent);
    return OutputPaneComponent;
}());



/***/ }),

/***/ "./src/app/z-test/plot-options/plot-options.component.css":
/*!****************************************************************!*\
  !*** ./src/app/z-test/plot-options/plot-options.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset {\n  border: 1px solid #bbb;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px;\n}\n\nfieldset legend {\n  font-size: inherit;\n  font-weight: bold;\n  display: table;\n  width: auto;\n}\n\nh4 {\n  font-size: inherit;\n  font-weight: bold;\n  border-bottom: 1px solid #bbb;\n  margin: 1em 0;\n  padding-bottom: 0.2em;\n}\n\ndiv.disabled {\n  opacity: 0.5;\n}\n\n.form-group {\n  padding: 0 5px;\n}\n"

/***/ }),

/***/ "./src/app/z-test/plot-options/plot-options.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/z-test/plot-options/plot-options.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"plotOptions && project\" class=\"content\">\n  <fieldset>\n    <legend>Global</legend>\n    <div class=\"form-group\">\n      <label for=\"plot-font-family\">Font family</label>\n      <select #fontFamily id=\"plot-font-family\" class=\"form-control\"\n        [value]=\"plotOptions.fontFamily\"\n        (change)=\"changeAttribute('fontFamily', fontFamily.value)\">\n        <option value=\"\">Default</option>\n        <option value=\"serif\">Serif</option>\n        <option value=\"sans\">Sans-serif</option>\n        <option value=\"monospace\">Monospace</option>\n        <option>Bungee Shade</option>\n        <option>Sancreek</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"plot-palette-theme\">Color palette</label>\n      <select #paletteTheme id=\"plot-palette-theme\" class=\"form-control\"\n        [value]=\"plotOptions.paletteTheme\"\n        (change)=\"changeAttribute('paletteTheme', paletteTheme.value)\">\n        <option value=\"typical\">Default</option>\n        <option value=\"plasma\">Plasma</option>\n        <option value=\"viridis\">Viridis</option>\n        <option value=\"magma\">Magma</option>\n        <option value=\"pattern\">Pattern</option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-font-size\">Font size: {{plotOptions.fontSize}}</label>\n        <div class=\"input-group\">\n          <input #fontSize id=\"plot-font-size\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [value]=\"plotOptions.fontSize\"\n            (change)=\"changeNumberAttribute('fontSize', fontSize.value)\"\n            (input)=\"changeNumberAttribute('fontSize', fontSize.value)\" />\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <label for=\"plot-axis-font-size\">Axis font size: {{plotOptions.axisFontSize}}</label>\n        <div class=\"input-group\">\n          <input #axisFontSize id=\"plot-axis-font-size\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [value]=\"plotOptions.axisFontSize\"\n            (change)=\"changeNumberAttribute('axisFontSize', axisFontSize.value)\"\n            (input)=\"changeNumberAttribute('axisFontSize', axisFontSize.value)\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-line-width\">Line width: {{plotOptions.lineWidth}}</label>\n        <div class=\"input-group\">\n          <input #lineWidth id=\"plot-line-width\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [value]=\"plotOptions.lineWidth\"\n            (change)=\"changeNumberAttribute('lineWidth', lineWidth.value)\"\n            (input)=\"changeNumberAttribute('lineWidth', lineWidth.value)\" />\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <label for=\"plot-axis-line-width\">Axis line width: {{plotOptions.axisLineWidth}}</label>\n        <div class=\"input-group\">\n          <input #axisLineWidth id=\"plot-axis-line-width\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [value]=\"plotOptions.axisLineWidth\"\n            (change)=\"changeNumberAttribute('axisLineWidth', axisLineWidth.value)\"\n            (input)=\"changeNumberAttribute('axisLineWidth', axisLineWidth.value)\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"plot-line-style\">Line style</label>\n      <select #lineStyle id=\"plot-line-style\" class=\"form-control\"\n        [value]=\"plotOptions.lineStyle\"\n        (change)=\"changeAttribute('lineStyle', lineStyle.value)\">\n        <option value=\"solid\">Solid</option>\n        <option value=\"short-dash\">Short Dash</option>\n        <option value=\"medium-dash\">Medium Dash</option>\n        <option value=\"long-dash\">Long Dash</option>\n        <option value=\"dot\">Dotted</option>\n      </select>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input #showLegendBox class=\"form-check-input\" type=\"checkbox\"\n          [checked]=\"plotOptions.showLegendBox\"\n          (change)=\"changeAttribute('showLegendBox', showLegendBox.checked)\"\n          (input)=\"changeAttribute('showLegendBox', showLegendBox.checked)\" />\n        Display legend background\n      </label>\n    </div>\n  </fieldset>\n  <fieldset>\n    <legend>Project</legend>\n    <app-range-slider name=\"projectPointsPerPlot\" label=\"Points per plot\"\n      [min]=\"50\" [max]=\"200\" [hard-min]=\"50\" [hard-max]=\"200\" [step]=\"1\"\n      [ngModel]=\"project.pointsPerPlot\"\n      (ngModelChange)=\"setProjectNumberAttribute('pointsPerPlot', $event)\">\n      <ng-template rsHelp>\n        The number of points to use when drawing plots. More is slower. The\n        number of points to use by default is calculated based on host speed.\n      </ng-template>\n    </app-range-slider>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input #customRanges class=\"form-check-input\" type=\"checkbox\"\n          [checked]=\"project.customRanges\"\n          (change)=\"setProjectAttribute('customRanges', customRanges.checked)\" />\n        Custom plot ranges\n      </label>\n    </div>\n\n    <div class=\"ranges\" [class.disabled]=\"!project.customRanges\">\n      <h4 *ngIf=\"model.output == 'n' || model.output == 'nByCI'\">Sample Size</h4>\n      <h4 *ngIf=\"model.output == 'power'\">Power</h4>\n      <h4 *ngIf=\"model.output == 'delta'\">Detectable Alternative</h4>\n      <div class=\"row mb-4\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-y-min\">Minimum</label>\n          <div class=\"input-group\">\n            <ng-template [ngIf]=\"model.output == 'n' || model.output == 'nByCI'\">\n              <input #nRangeMin *ngIf=\"project.nRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.nRange.max - 1) | round\"\n                [value]=\"project.nRange.min | round\"\n                (change)=\"setProjectRange('n', 'min', nRangeMin.value)\"\n                (input)=\"setProjectRange('n', 'min', nRangeMin.value, true)\"/>\n            </ng-template>\n            <ng-template [ngIf]=\"model.output == 'power'\">\n              <input #powerRangeMin *ngIf=\"project.powerRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.powerRange.max - 0.01) | round\"\n                [value]=\"project.powerRange.min | round\"\n                (change)=\"setProjectRange('power', 'min', powerRangeMin.value)\"\n                (input)=\"setProjectRange('power', 'min', powerRangeMin.value, true)\"/>\n            </ng-template>\n            <ng-template [ngIf]=\"model.output == 'delta'\">\n              <input #deltaRangeMin *ngIf=\"project.deltaRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.deltaRange.max - 0.01) | round\"\n                [value]=\"project.deltaRange.min | round\"\n                (change)=\"setProjectRange('delta', 'min', deltaRangeMin.value)\"\n                (input)=\"setProjectRange('delta', 'min', deltaRangeMin.value, true)\"/>\n            </ng-template>\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-y-max\">Maximum</label>\n          <div class=\"input-group\">\n            <ng-template [ngIf]=\"model.output == 'n' || model.output == 'nByCI'\">\n              <input #nRangeMax *ngIf=\"project.nRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.nRange.min + 1) | round\"\n                [value]=\"project.nRange.max | round\"\n                (change)=\"setProjectRange('n', 'max', nRangeMax.value)\"\n                (input)=\"setProjectRange('n', 'max', nRangeMax.value, true)\"/>\n            </ng-template>\n            <ng-template [ngIf]=\"model.output == 'power'\">\n              <input #powerRangeMax *ngIf=\"project.powerRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.powerRange.min + 0.01) | round\"\n                [value]=\"project.powerRange.max | round\"\n                (change)=\"setProjectRange('power', 'max', powerRangeMax.value)\"\n                (input)=\"setProjectRange('power', 'max', powerRangeMax.value, true)\"/>\n            </ng-template>\n            <ng-template [ngIf]=\"model.output == 'delta'\">\n              <input #deltaRangeMax *ngIf=\"project.deltaRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.deltaRange.min + 0.01) | round\"\n                [value]=\"project.deltaRange.max | round\"\n                (change)=\"setProjectRange('delta', 'max', deltaRangeMax.value)\"\n                (input)=\"setProjectRange('delta', 'max', deltaRangeMax.value, true)\"/>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n      <ng-template [ngIf]=\"model.output == 'n' || model.output == 'nByCI'\">\n        <h4>Sample Size vs. Power</h4>\n        <div class=\"row mb-4\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input #powerRangeMin *ngIf=\"project.powerRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.powerRange.max - 0.01) | round\"\n                [value]=\"project.powerRange.min | round\"\n                (change)=\"setProjectRange('power', 'min', powerRangeMin.value)\"\n                (input)=\"setProjectRange('power', 'min', powerRangeMin.value, true)\"/>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input #powerRangeMax *ngIf=\"project.powerRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.powerRange.min + 0.01) | round\"\n                [value]=\"project.powerRange.max | round\"\n                (change)=\"setProjectRange('power', 'max', powerRangeMax.value)\"\n                (input)=\"setProjectRange('power', 'max', powerRangeMax.value, true)\"/>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"model.output == 'power'\">\n        <h4>Power vs. Sample Size</h4>\n        <div class=\"row mb-4\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input #nRangeMin *ngIf=\"project.nRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.nRange.max - 1) | round\"\n                [value]=\"project.nRange.min | round\"\n                (change)=\"setProjectRange('n', 'min', nRangeMin.value)\"\n                (input)=\"setProjectRange('n', 'min', nRangeMin.value, true)\"/>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input #nRangeMax *ngIf=\"project.nRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.nRange.min + 1) | round\"\n                [value]=\"project.nRange.max | round\"\n                (change)=\"setProjectRange('n', 'max', nRangeMax.value)\"\n                (input)=\"setProjectRange('n', 'max', nRangeMax.value, true)\"/>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"model.output == 'delta'\">\n        <h4>Detectable Alternative vs. Sample Size</h4>\n        <div class=\"row mb-4\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input #nRangeMin *ngIf=\"project.nRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.nRange.max - 1) | round\"\n                [value]=\"project.nRange.min | round\"\n                (change)=\"setProjectRange('n', 'min', nRangeMin.value)\"\n                (input)=\"setProjectRange('n', 'min', nRangeMin.value, true)\"/>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input #nRangeMax *ngIf=\"project.nRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.nRange.min + 1) | round\"\n                [value]=\"project.nRange.max | round\"\n                (change)=\"setProjectRange('n', 'max', nRangeMax.value)\"\n                (input)=\"setProjectRange('n', 'max', nRangeMax.value, true)\"/>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"model.output == 'n' || model.output == 'nByCI'\">\n        <h4>Sample Size vs. Detectable Alternative</h4>\n        <div class=\"row mb-4\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-right-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input #deltaRangeMin *ngIf=\"project.deltaRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.deltaRange.max - 1) | round\"\n                [value]=\"project.deltaRange.min | round\"\n                (change)=\"setProjectRange('delta', 'min', deltaRangeMin.value)\"\n                (input)=\"setProjectRange('delta', 'min', deltaRangeMin.value, true)\"/>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-right-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input #deltaRangeMax *ngIf=\"project.deltaRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.deltaRange.min - 1) | round\"\n                [value]=\"project.deltaRange.max | round\"\n                (change)=\"setProjectRange('delta', 'max', deltaRangeMax.value)\"\n                (input)=\"setProjectRange('delta', 'max', deltaRangeMax.value, true)\"/>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"model.output == 'power'\">\n        <h4>Power vs. Detectable Alternative</h4>\n        <div class=\"row mb-4\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-right-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input #deltaRangeMin *ngIf=\"project.deltaRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.deltaRange.max - 1) | round\"\n                [value]=\"project.deltaRange.min | round\"\n                (change)=\"setProjectRange('delta', 'min', deltaRangeMin.value)\"\n                (input)=\"setProjectRange('delta', 'min', deltaRangeMin.value, true)\"/>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-right-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input #deltaRangeMax *ngIf=\"project.deltaRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.deltaRange.min - 1) | round\"\n                [value]=\"project.deltaRange.max | round\"\n                (change)=\"setProjectRange('delta', 'max', deltaRangeMax.value)\"\n                (input)=\"setProjectRange('delta', 'max', deltaRangeMax.value, true)\"/>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"model.output == 'delta'\">\n        <h4>Detectable Alternative vs. Power</h4>\n        <div class=\"row mb-4\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input #powerRangeMin *ngIf=\"project.powerRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [max]=\"(project.powerRange.max - 0.01) | round\"\n                [value]=\"project.powerRange.min | round\"\n                (change)=\"setProjectRange('power', 'min', powerRangeMin.value)\"\n                (input)=\"setProjectRange('power', 'min', powerRangeMin.value, true)\"/>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input #powerRangeMax *ngIf=\"project.powerRange\" class=\"form-control\"\n                [disabled]=\"!project.customRanges\"\n                type=\"number\" step=\"0.01\" [min]=\"(project.powerRange.min + 0.01) | round\"\n                [value]=\"project.powerRange.max | round\"\n                (change)=\"setProjectRange('power', 'max', powerRangeMax.value)\"\n                (input)=\"setProjectRange('power', 'max', powerRangeMax.value, true)\"/>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <h4>Precision vs. Parameter Space</h4>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-bottom-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input #pSpaceRangeMin *ngIf=\"project.pSpaceRange\" class=\"form-control\"\n              [disabled]=\"!project.customRanges\"\n              type=\"number\" step=\"0.01\" [max]=\"(project.pSpaceRange.max - 1) | round\"\n              [value]=\"project.pSpaceRange.min | round\"\n              (change)=\"setProjectRange('pSpace', 'min', pSpaceRangeMin.value)\"\n              (input)=\"setProjectRange('pSpace', 'min', pSpaceRangeMin.value, true)\"/>\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-bottom-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input #pSpaceRangeMax *ngIf=\"project.pSpaceRange\" class=\"form-control\"\n              [disabled]=\"!project.customRanges\"\n              type=\"number\" step=\"0.01\" [min]=\"(project.pSpaceRange.min + 1) | round\"\n              [value]=\"project.pSpaceRange.max | round\"\n              (change)=\"setProjectRange('pSpace', 'max', pSpaceRangeMax.value)\"\n              (input)=\"setProjectRange('pSpace', 'max', pSpaceRangeMax.value, true)\"/>\n          </div>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"doReset()\">\n    Reset all settings\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/z-test/plot-options/plot-options.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/z-test/plot-options/plot-options.component.ts ***!
  \***************************************************************/
/*! exports provided: PlotOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotOptionsComponent", function() { return PlotOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project */ "./src/app/z-test/project.ts");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../plot-options.service */ "./src/app/plot-options.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlotOptionsComponent = /** @class */ (function () {
    function PlotOptionsComponent(plotOptions) {
        this.plotOptions = plotOptions;
        this.optionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectChangedDelay = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.projectChangedImmediate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PlotOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rangeSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.projectChangedDelay.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400)), this.projectChangedImmediate).subscribe(function (change) {
            if (change.subname) {
                _this.project[change.name][change.subname] = change.value;
            }
            else {
                _this.project[change.name] = change.value;
            }
            if (change.name == 'customRanges' && !change.value) {
                _this.project.resetRanges();
            }
            _this.project.updatePlotData().then(function () {
                _this.projectChanged.emit();
            });
        });
    };
    PlotOptionsComponent.prototype.ngOnChanges = function (changes) {
        if (this.project) {
            this.model = this.project.getModel(0);
        }
    };
    PlotOptionsComponent.prototype.doReset = function () {
        var _this = this;
        this.plotOptions.reset();
        this.project.resetRanges();
        this.project.updatePlotData().then(function () {
            _this.reset.emit();
        });
    };
    PlotOptionsComponent.prototype.changeAttribute = function (name, value) {
        if (this.plotOptions[name] !== value) {
            this.plotOptions[name] = value;
            this.optionChanged.emit();
        }
    };
    PlotOptionsComponent.prototype.changeNumberAttribute = function (name, value) {
        var n = parseFloat(value);
        if (!isNaN(n)) {
            this.changeAttribute(name, n);
        }
    };
    PlotOptionsComponent.prototype.setProjectAttribute = function (name, value) {
        var change = { name: name, value: value };
        this.projectChangedImmediate.next(change);
    };
    PlotOptionsComponent.prototype.setProjectNumberAttribute = function (name, value) {
        var n = parseFloat(value);
        if (isNaN(n))
            return;
        this.setProjectAttribute(name, n);
    };
    PlotOptionsComponent.prototype.setProjectRange = function (name, which, value, delay) {
        if (delay === void 0) { delay = false; }
        var n = parseFloat(value);
        if (isNaN(n))
            return;
        var change = { name: name + "Range", subname: which, value: n };
        if (delay) {
            this.projectChangedDelay.next(change);
        }
        else {
            this.projectChangedImmediate.next(change);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('project'),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_3__["Project"])
    ], PlotOptionsComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlotOptionsComponent.prototype, "optionChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlotOptionsComponent.prototype, "projectChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlotOptionsComponent.prototype, "reset", void 0);
    PlotOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'z-test-plot-options',
            template: __webpack_require__(/*! ./plot-options.component.html */ "./src/app/z-test/plot-options/plot-options.component.html"),
            styles: [__webpack_require__(/*! ./plot-options.component.css */ "./src/app/z-test/plot-options/plot-options.component.css")]
        }),
        __metadata("design:paramtypes", [_plot_options_service__WEBPACK_IMPORTED_MODULE_4__["PlotOptionsService"]])
    ], PlotOptionsComponent);
    return PlotOptionsComponent;
}());



/***/ }),

/***/ "./src/app/z-test/plot/plot.component.css":
/*!************************************************!*\
  !*** ./src/app/z-test/plot/plot.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".target {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.legend {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n"

/***/ }),

/***/ "./src/app/z-test/plot/plot.component.html":
/*!*************************************************!*\
  !*** ./src/app/z-test/plot/plot.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg #plot\n  [style.fontFamily]=\"plotOptions.getFontFamily()\"\n  style.fontSize=\"{{plotOptions.getFontSize()}}px\"\n  [attr.class]=\"name\" [attr.width]=\"fixedWidth\" [attr.height]=\"fixedHeight\"\n  [attr.viewBox]=\"viewBox\">\n\n  <ng-template [ngIf]=\"x && y && project\">\n    <text text-anchor=\"middle\"\n      [attr.x]=\"innerWidth / 2 + leftMargin\"\n      [attr.y]=\"height - (plotOptions.getFontSize() / 2)\">\n      {{x.title}}\n    </text>\n    <text text-anchor=\"middle\"\n      [attr.x]=\"-(innerHeight / 2 + topMargin)\"\n      [attr.y]=\"plotOptions.getFontSize()\"\n      transform=\"rotate(-90)\">\n      {{y.title}}\n    </text>\n    <text text-anchor=\"middle\" font-weight=\"bold\"\n      [attr.x]=\"innerWidth / 2 + leftMargin\"\n      [attr.y]=\"plotOptions.getFontSize()\">\n      {{title}}\n    </text>\n\n    <g *ngFor=\"let path of paths; trackBy: trackById\"\n      [attr.transform]=\"translate(leftMargin, topMargin)\">\n      <path\n        [attr.id]=\"path.id\"\n        [attr.stroke]=\"path.color\"\n        [attr.stroke-width]=\"plotOptions.getLineWidth()\"\n        [attr.stroke-dasharray]=\"path.dashArray\"\n        [attr.stroke-linecap]=\"path.lineCap\"\n        [attr.stroke-opacity]=\"path.opacity\"\n        fill=\"none\" />\n    </g>\n\n    <g id=\"{{name}}-x-axis\"\n      [attr.transform]=\"translate(leftMargin, innerHeight + topMargin)\"></g>\n    <g id=\"{{name}}-y-axis\"\n      [attr.transform]=\"translate(leftMargin, topMargin)\"></g>\n\n    <rect [attr.transform]=\"translate(leftMargin, topMargin)\"\n      [attr.width]=\"innerWidth\" [attr.height]=\"innerHeight\"\n      fill=\"none\" pointer-events=\"all\"\n      (mouseout)=\"hideHoverInfo($event)\"\n      (mousemove)=\"hover($event)\" />\n\n    <g *ngIf=\"!hideTarget\">\n      <ng-template [ngIf]=\"!hideDropLines\">\n        <g *ngFor=\"let path of dropPaths; index as dpIndex; trackBy: trackByIndex\"\n          [attr.transform]=\"translate(leftMargin, topMargin)\">\n          <path id=\"{{name}}-target-drop-{{dpIndex}}\"\n            stroke=\"red\"\n            [attr.stroke-width]=\"plotOptions.getLineWidth() / 2\"\n            stroke-dasharray=\"5, 5\"\n            fill=\"none\" />\n        </g>\n      </ng-template>\n      <circle id=\"{{name}}-target\" class=\"target\" r=\"5\"\n        [attr.transform]=\"translate(leftMargin, topMargin)\"\n        fill=\"red\"\n        (mousemove)=\"hover($event, target)\" />\n    </g>\n\n    <g id=\"{{name}}-legend\" class=\"legend\"\n       *ngIf=\"project.models.length > 1\"\n       [attr.transform]=\"translate(leftMargin + 15 + legendXOffset, topMargin + 15 + legendYOffset)\"\n       font-size=\"smaller\" (dblclick)=\"resetLegend()\">\n      <path id=\"{{name}}-legend-box\" *ngIf=\"plotOptions.showLegendBox\"\n            fill=\"white\" fill-opacity=\"0.8\"\n            stroke=\"black\" stroke-opacity=\"1\" />\n      <g id=\"{{name}}-legend-labels\">\n        <g *ngFor=\"let model of project.models; index as i; trackBy: trackByIndex\"\n           [attr.transform]=\"translate(5, 20 * plotOptions.fontSize * i)\">\n          <path\n            d=\"m0,0 l45,0\"\n            [attr.stroke]=\"getPathColor(i)\"\n            [attr.stroke-width]=\"plotOptions.getLineWidth()\"\n            [attr.stroke-dasharray]=\"getDashArray(i)\"\n            [attr.stroke-linecap]=\"getLineCap(i)\"\n            fill=\"none\" />\n          <text x=\"50\" y=\"5\">{{model.name}}</text>\n        </g>\n      </g>\n    </g>\n\n    <g id=\"{{name}}-hover-info\" *ngIf=\"isHoverInfoActive()\" pointer-events=\"none\">\n      <circle *ngIf=\"!isHoverInfoTarget()\" r=\"4\" fill=\"none\" stroke=\"blue\" />\n      <path id=\"{{name}}-hover-box\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.8\" />\n      <text id=\"{{name}}-hover-coords\" font-family=\"monospace\" text-anchor=\"middle\">\n        <tspan style=\"white-space: pre\">{{x.sym}}: {{hoverPoint.x | formatFixed:[hoverPoint.y]}}</tspan><tspan x=\"0\" dy=\"1em\" style=\"white-space: pre\">{{y.sym}}: {{hoverPoint.y | formatFixed:[hoverPoint.x]}}</tspan>\n      </text>\n    </g>\n  </ng-template>\n</svg>\n"

/***/ }),

/***/ "./src/app/z-test/plot/plot.component.ts":
/*!***********************************************!*\
  !*** ./src/app/z-test/plot/plot.component.ts ***!
  \***********************************************/
/*! exports provided: PlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotComponent", function() { return PlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stable */ "./node_modules/stable/stable.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../abstract-plot.component */ "./src/app/abstract-plot.component.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project */ "./src/app/z-test/project.ts");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../plot-options.service */ "./src/app/plot-options.service.ts");
/* harmony import */ var _palette_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../palette.service */ "./src/app/palette.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HoverInfo;
(function (HoverInfo) {
    HoverInfo[HoverInfo["Disabled"] = 0] = "Disabled";
    HoverInfo[HoverInfo["NonTarget"] = 1] = "NonTarget";
    HoverInfo[HoverInfo["Target"] = 2] = "Target";
})(HoverInfo || (HoverInfo = {}));
var PlotComponent = /** @class */ (function (_super) {
    __extends(PlotComponent, _super);
    function PlotComponent(plotOptions, palette) {
        var _this = _super.call(this, plotOptions, palette) || this;
        _this.plotOptions = plotOptions;
        _this.palette = palette;
        _this.hoverDisabled = false;
        _this.hideDropLines = false;
        _this.hideTarget = false;
        _this.disableDrag = false;
        _this.legendXOffset = 0;
        _this.legendYOffset = 0;
        _this.modelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.leftMargin = 50;
        _this.rightMargin = 50;
        _this.topMargin = 50;
        _this.bottomMargin = 50;
        _this.yAxisWidth = 10;
        _this.xAxisHeight = 10;
        _this.viewBox = "0 0 0 0";
        _this.hoverInfo = HoverInfo.Disabled;
        _this.targetDragging = false;
        _this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No;
        return _this;
    }
    PlotComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var result = this.setup();
        if (!result && this.project) {
            // this might happen if the browser elements aren't ready yet
            setTimeout(function () {
                _this.setup();
            }, 1);
        }
    };
    PlotComponent.prototype.ngAfterViewChecked = function () {
        this.draw();
    };
    PlotComponent.prototype.redraw = function () {
        this.setup();
    };
    PlotComponent.prototype.hover = function (event, target) {
        this.hoverPoint = undefined;
        this.hoverInfo = HoverInfo.Disabled;
        if (target) {
            this.hoverPoint = target;
            this.hoverInfo = HoverInfo.Target;
        }
        else if (!this.hoverDisabled) {
            var dim = event.target.getBoundingClientRect();
            var x = event.clientX - dim.left;
            //var y = event.clientY - dim.top;
            var index = this.xBisector(this.mainData, this.xScale.invert(x));
            var point = this.mainData[index];
            if (point) {
                this.hoverPoint = point;
                this.hoverInfo = HoverInfo.NonTarget;
            }
        }
        if (this.hoverPoint) {
            this.hoverX = this.xScale(this.hoverPoint.x);
            this.hoverY = this.yScale(this.hoverPoint.y);
            this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover;
        }
    };
    PlotComponent.prototype.hoverInfoY = function () {
        if (this.hoverY < this.target.y) {
            return "-3.5em";
        }
        return "1em";
    };
    PlotComponent.prototype.trackByIndex = function (index, path) {
        return index;
    };
    PlotComponent.prototype.trackById = function (index, path) {
        return path.id;
    };
    PlotComponent.prototype.isHoverInfoActive = function () {
        return this.hoverInfo != HoverInfo.Disabled;
    };
    PlotComponent.prototype.isHoverInfoTarget = function () {
        return this.hoverInfo == HoverInfo.Target;
    };
    PlotComponent.prototype.hideHoverInfo = function (event) {
        // check to make sure mouse is actually outside box and not just on top of
        // the target dot
        var dim = event.target.getBoundingClientRect();
        var x = event.clientX;
        var y = event.clientY;
        if (x < dim.left || x > dim.right || y < dim.top || y > dim.bottom) {
            this.hoverInfo = HoverInfo.Disabled;
        }
    };
    PlotComponent.prototype.getPathColor = function (index) {
        return this.palette.getColor(index, this.plotOptions.paletteTheme);
    };
    PlotComponent.prototype.getDashArray = function (index) {
        var pattern = this.palette.getPattern(index, this.plotOptions.paletteTheme);
        return this.plotOptions.dashArray(pattern);
    };
    PlotComponent.prototype.getLineCap = function (index) {
        var pattern = this.palette.getPattern(index, this.plotOptions.paletteTheme);
        return this.plotOptions.lineCap(pattern);
    };
    PlotComponent.prototype.resetLegend = function () {
        this.legendXOffset = 0;
        this.legendYOffset = 0;
    };
    PlotComponent.prototype.setupDimensions = function () {
        // dimensions
        if (this.fixedWidth) {
            this.width = this.fixedWidth;
        }
        else {
            this.width = this.getDimension('width');
            if (this.width == 0) {
                // window isn't ready to draw
                return false;
            }
        }
        if (this.fixedHeight) {
            this.height = this.fixedHeight;
        }
        else {
            this.height = this.getDimension('height');
            if (this.height == 0) {
                // window isn't ready to draw
                return false;
            }
        }
        // margin
        this.yAxisWidth = 10 +
            this.plotOptions.getAxisLineWidth() + // y axis line width
            this.plotOptions.getAxisFontSize() + 9; // y axis tick (font + tick)
        this.xAxisHeight = 10 +
            this.plotOptions.getAxisLineWidth() + // x axis line width
            (this.plotOptions.getAxisFontSize() / 2) + 9; // x axis tick (font + tick)
        this.leftMargin = this.plotOptions.getFontSize() + this.yAxisWidth + 10;
        this.rightMargin = this.plotOptions.getAxisFontSize() + 9;
        this.topMargin = this.plotOptions.getFontSize() + 10;
        this.bottomMargin = this.plotOptions.getFontSize() + this.xAxisHeight + 10;
        this.viewBox = "0 0 " + this.width + " " + this.height;
        this.innerWidth = this.width - this.leftMargin - this.rightMargin;
        this.innerHeight = this.height - this.topMargin - this.bottomMargin;
        return true;
    };
    PlotComponent.prototype.setupParams = function () {
        // Setup parameters. Dimensions should be setup by this point.
        var model = this.project.getModel(this.project.selectedIndex);
        if (model.output == 'n' || model.output == 'nByCI') {
            if (this.name == 'top-left' || this.name == 'top-left-export') {
                // Sample Size vs. Power
                this.x = {
                    name: 'power', range: this.project.powerRange, target: model.power,
                    title: 'Power', sym: '1-β'
                };
                this.dataKey = 'nVsPower';
            }
            else if (this.name == 'top-right' || this.name == 'top-right-export') {
                // Sample Size vs. Detectable Alternative
                this.x = {
                    name: 'delta', range: this.project.deltaRange, target: model.delta,
                    title: 'Detectable Alternative', sym: 'δ'
                };
                this.dataKey = 'nVsDelta';
            }
            else {
                return false;
            }
            this.y = {
                name: 'n', range: this.project.nRange, target: model.n,
                title: 'Sample Size', sym: 'n'
            };
        }
        else if (model.output == 'power') {
            if (this.name == 'top-left' || this.name == 'top-left-export') {
                // Power vs. Sample Size
                this.x = {
                    name: 'n', range: this.project.nRange, target: model.n,
                    title: 'Sample Size', sym: 'n'
                };
                this.y = {
                    name: 'power', range: this.project.powerRange, target: model.power,
                    title: 'Power', sym: '1-β'
                };
                this.dataKey = 'powerVsN';
            }
            else if (this.name == 'top-right' || this.name == 'top-right-export') {
                // Power vs. Detectable Alternative
                this.x = {
                    name: 'delta', range: this.project.deltaRange, target: model.delta,
                    title: 'Detectable Alternative', sym: 'δ'
                };
                this.y = {
                    name: 'power', range: this.project.powerRange, target: model.power,
                    title: 'Power', sym: '1-β'
                };
                this.dataKey = 'powerVsDelta';
            }
            else {
                return false;
            }
        }
        else if (model.output == 'delta') {
            if (this.name == 'top-left' || this.name == 'top-left-export') {
                // Detectable Alternative vs. Sample Size
                this.x = {
                    name: 'n', range: this.project.nRange, target: model.n,
                    title: 'Sample Size', sym: 'n'
                };
                this.dataKey = 'deltaVsN';
            }
            else if (this.name == 'top-right' || this.name == 'top-right-export') {
                // Detectable Alternative vs. Power
                this.x = {
                    name: 'power', range: this.project.powerRange, target: model.power,
                    title: 'Power', sym: '1-β'
                };
                this.dataKey = 'deltaVsPower';
            }
            else {
                return false;
            }
            this.y = {
                name: 'delta', range: this.project.deltaRange, target: model.delta,
                title: 'Detectable Alternative', sym: 'δ'
            };
        }
        else {
            return false;
        }
        // format symbol to make widths identical
        while (this.x.sym.length < this.y.sym.length) {
            this.x.sym = ' ' + this.x.sym;
        }
        while (this.y.sym.length < this.x.sym.length) {
            this.y.sym = ' ' + this.y.sym;
        }
        this.title = this.y.title + " vs. " + this.x.title;
        return true;
    };
    PlotComponent.prototype.setupPlotData = function () {
        var _this = this;
        this.plotData = this.project.models.map(function (m) { return m[_this.dataKey]; });
        // Prepare main data for bisection during target point dragging.
        this.mainData = stable__WEBPACK_IMPORTED_MODULE_2__(this.plotData[this.project.selectedIndex], function (a, b) { return d3__WEBPACK_IMPORTED_MODULE_1__["ascending"](a.x, b.x); });
        this.xBisector = d3__WEBPACK_IMPORTED_MODULE_1__["bisector"](function (point) { return point.x; }).left;
        return true;
    };
    PlotComponent.prototype.setupScales = function () {
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().
            domain(this.x.range.toArray()).
            range([0, this.innerWidth]);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().
            domain(this.y.range.toArray().reverse()).
            range([0, this.innerHeight]);
    };
    PlotComponent.prototype.setupTarget = function () {
        var model = this.project.getModel(this.project.selectedIndex);
        this.target = { x: this.x.target, y: this.y.target };
    };
    PlotComponent.prototype.setupPaths = function () {
        var _this = this;
        this.paths = this.plotData.map(function (d, i) {
            var id = _this.name + "-path-" + i;
            var path = _this.getPath(d, 'x', 'y');
            var color = _this.getPathColor(i);
            var dashArray = _this.getDashArray(i);
            var lineCap = _this.getLineCap(i);
            var primary = _this.project.selectedIndex == i;
            var result = {
                index: i, id: id, path: path, color: color, dashArray: dashArray,
                lineCap: lineCap, opacity: primary ? 1 : 0.7, primary: primary
            };
            return result;
        });
        // order paths in reverse so that they are drawn properly, put the selected
        // line at the end
        this.paths.sort(function (a, b) {
            if (a.primary)
                return 1;
            if (b.primary)
                return -1;
            return b.index - a.index;
        });
    };
    PlotComponent.prototype.setupDropPaths = function () {
        var _this = this;
        this.dropPaths = [];
        var path = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().
            x(function (d, i) { return _this.xScale(d.x); }).
            y(function (d, i) { return _this.yScale(d.y); });
        var xData = [
            { x: this.target.x, y: this.yScale.domain()[1] },
            { x: this.target.x, y: this.target.y }
        ];
        this.dropPaths.push(path(xData));
        var yData = [
            { x: this.xScale.domain()[0], y: this.target.y },
            { x: this.target.x, y: this.target.y }
        ];
        this.dropPaths.push(path(yData));
    };
    PlotComponent.prototype.setup = function () {
        if (!this.project) {
            return false;
        }
        if (!this.setupDimensions()) {
            return false;
        }
        if (!this.setupParams()) {
            return false;
        }
        if (!this.setupPlotData()) {
            return false;
        }
        this.setupScales();
        this.setupTarget();
        this.setupPaths();
        this.setupDropPaths();
        if (this.lastDragEvent) {
            this.hover(this.lastDragEvent);
            this.lastDragEvent = undefined;
        }
        this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Yes;
        return true;
    };
    PlotComponent.prototype.getHoverBoxPath = function (above, coords) {
        var dim = coords.getBBox();
        var left = dim.x - 5, right = dim.x + dim.width + 5;
        var unit = dim.width / 16;
        var lmid = left + (7 * unit) + 5, rmid = left + (9 * unit) + 5;
        var mid = left + (8 * unit) + 5;
        var top, bottom, bottom2;
        if (above) {
            top = dim.y - 5;
            bottom = dim.y + dim.height + 5;
            bottom2 = bottom + 5;
        }
        else {
            top = dim.y + dim.height + 5;
            bottom = dim.y - 5;
            bottom2 = bottom - 5;
        }
        return d3__WEBPACK_IMPORTED_MODULE_1__["line"]()([
            [left, top], [right, top], [right, bottom],
            [rmid, bottom], [mid, bottom2], [lmid, bottom],
            [left, bottom], [left, top]
        ]);
    };
    PlotComponent.prototype.draw = function () {
        var _this = this;
        if (this.needDraw == _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No) {
            return;
        }
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.plotElement.nativeElement);
        if (this.hoverInfo != HoverInfo.Disabled) {
            // draw hover info box
            var t_1 = svg.transition().duration(50);
            var info = svg.select("#" + this.name + "-hover-info");
            info.attr('transform', this.translate(this.leftMargin + this.hoverX, this.topMargin + this.hoverY));
            var above_1 = this.hoverY >= 50;
            var box = t_1.select("#" + this.name + "-hover-box");
            var coords_1 = t_1.select("#" + this.name + "-hover-coords");
            coords_1.attr('y', above_1 ? "-2.5em" : "2.5em");
            if (box.size() > 0 && coords_1.size() > 0) {
                box.attrTween('d', function () {
                    return _this.getHoverBoxPath.bind(_this, above_1, coords_1.node());
                });
            }
        }
        if (this.needDraw == _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].Hover) {
            // only need to draw hover box
            this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No;
            return;
        }
        var t = svg.transition();
        // axes (drawn by d3)
        var xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale).ticks(Math.floor(this.innerWidth / 75));
        t.select("#" + this.name + "-x-axis").
            call(xAxis).
            attr("font-size", this.plotOptions.getAxisFontSize() + "px").
            attr("stroke-width", this.plotOptions.getAxisLineWidth());
        var yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.yScale).ticks(Math.floor(this.innerHeight / 75));
        t.select("#" + this.name + "-y-axis").
            call(yAxis).
            attr("font-size", this.plotOptions.getAxisFontSize() + "px").
            attr("stroke-width", this.plotOptions.getAxisLineWidth());
        // paths
        for (var i = 0, ilen = this.paths.length; i < ilen; i++) {
            var path = t.select("#" + this.paths[i].id);
            if (!path.attr("d")) {
                path.attr("d", this.paths[i].path);
            }
            else {
                path.attrTween("d", this.pathTween(this.paths[i].path, 4));
            }
        }
        // target
        var targetId = "#" + this.name + "-target";
        t.select(targetId).
            attr('cx', this.xScale(this.target.x)).
            attr('cy', this.yScale(this.target.y));
        // drop paths
        for (var i = 0, ilen = this.dropPaths.length; i < ilen; i++) {
            t.select(targetId + "-drop-" + i).attr("d", this.dropPaths[i]);
        }
        // drag
        if (!this.disableDrag) {
            var target = svg.select(targetId);
            var targetDrag = d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().
                on("start", this.dragTargetStart.bind(this)).
                on("drag", this.dragTarget.bind(this)).
                on("end", this.dragTargetEnd.bind(this));
            target.call(targetDrag);
        }
        // legend box
        if (this.paths.length > 1) {
            var box = svg.select("#" + this.name + "-legend-box");
            var labels = svg.select("#" + this.name + "-legend-labels");
            if (box.size() > 0 && labels.size() > 0) {
                var dim = labels.node().getBBox();
                var left = dim.x - 5, right = dim.x + dim.width + 5;
                var top_1 = dim.y - 5, bottom = dim.y + dim.height + 5;
                box.attr("d", d3__WEBPACK_IMPORTED_MODULE_1__["line"]()([
                    [left, top_1], [right, top_1], [right, bottom],
                    [left, bottom], [left, top_1]
                ]));
            }
            var legend = svg.select("#" + this.name + "-legend");
            var legendDrag = d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().
                on("drag", this.dragLegend.bind(this));
            legend.call(legendDrag);
        }
        this.needDraw = _abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["Draw"].No;
    };
    PlotComponent.prototype.dragTargetStart = function () {
        this.targetDragging = true;
    };
    PlotComponent.prototype.dragTarget = function (event) {
        var x = this.xScale.invert(d3__WEBPACK_IMPORTED_MODULE_1__["event"].x - this.leftMargin);
        if (x < this.x.range.min) {
            x = this.x.range.min;
        }
        else if (x > this.x.range.max) {
            x = this.x.range.max;
        }
        var index = this.xBisector(this.mainData, x);
        var point = this.mainData[index];
        if (!point)
            return;
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.plotElement.nativeElement);
        var targetId = "#" + this.name + "-target";
        this.target = point;
        this.setupDropPaths();
        svg.select(targetId).
            attr("cx", this.xScale(this.target.x)).
            attr("cy", this.yScale(this.target.y));
        for (var i = 0, ilen = this.dropPaths.length; i < ilen; i++) {
            svg.select(targetId + "-drop-" + i).attr("d", this.dropPaths[i]);
        }
        this.hover(event, this.target);
    };
    PlotComponent.prototype.dragTargetEnd = function (event) {
        var _this = this;
        this.targetDragging = false;
        if (this.project && this.x.name) {
            this.lastDragEvent = event;
            this.project.updateModel(this.project.selectedIndex, this.x.name, this.target.x).
                then(function () {
                _this.modelChanged.emit();
            });
        }
    };
    PlotComponent.prototype.dragLegend = function () {
        this.legendXOffset += d3__WEBPACK_IMPORTED_MODULE_1__["event"].dx;
        this.legendYOffset += d3__WEBPACK_IMPORTED_MODULE_1__["event"].dy;
    };
    // from https://bl.ocks.org/mbostock/3916621
    PlotComponent.prototype.pathTween = function (d1, precision) {
        return function () {
            var path0 = this, path1 = path0.cloneNode(), n0 = path0.getTotalLength(), n1 = (path1.setAttribute("d", d1), path1).getTotalLength();
            // Uniform sampling of distance based on specified precision.
            var distances = [0], i = 0, dt = precision / Math.max(n0, n1);
            while ((i += dt) < 1)
                distances.push(i);
            distances.push(1);
            // Compute point-interpolators at each distance.
            var points = distances.map(function (t) {
                var p0 = path0.getPointAtLength(t * n0), p1 = path1.getPointAtLength(t * n1);
                return d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"]([p0.x, p0.y], [p1.x, p1.y]);
            });
            return function (t) {
                return t < 1 ? "M" + points.map(function (p) { return p(t); }).join("L") : d1;
            };
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('project'),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_4__["Project"])
    ], PlotComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hover-disabled'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "hoverDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hide-drop-lines'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "hideDropLines", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('hide-target'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "hideTarget", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('disable-drag'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "disableDrag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('legend-x-offset'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "legendXOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('legend-y-offset'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "legendYOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "modelChanged", void 0);
    PlotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'z-test-plot',
            template: __webpack_require__(/*! ./plot.component.html */ "./src/app/z-test/plot/plot.component.html"),
            styles: [__webpack_require__(/*! ./plot.component.css */ "./src/app/z-test/plot/plot.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_plot_options_service__WEBPACK_IMPORTED_MODULE_5__["PlotOptionsService"],
            _palette_service__WEBPACK_IMPORTED_MODULE_6__["PaletteService"]])
    ], PlotComponent);
    return PlotComponent;
}(_abstract_plot_component__WEBPACK_IMPORTED_MODULE_3__["AbstractPlotComponent"]));



/***/ }),

/***/ "./src/app/z-test/project-model/project-model.component.css":
/*!******************************************************************!*\
  !*** ./src/app/z-test/project-model/project-model.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".output {\n  order: 1;\n}\n\n.output .range-slider {\n  background-color: #d8ecf3;\n  border-radius: 0.5em;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.alt {\n  margin-top: 5px;\n}\n\n.alt .range-slider {\n  background-color: #ffff99;\n  border-radius: 0.5em;\n}\n"

/***/ }),

/***/ "./src/app/z-test/project-model/project-model.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/z-test/project-model/project-model.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project.models.length > 1\" class=\"form-inline justify-content-between mb-2\">\n  <div class=\"form-group\">\n    <label for=\"z-test-project-{{name}}-model-{{index}}-name\" class=\"mr-2\">Name:</label>\n    <input id=\"z-test-project-{{name}}-model-{{index}}-name\" class=\"form-control\"\n      name=\"name\" type=\"text\" [(ngModel)]=\"model.name\" />\n  </div>\n\n  <button type=\"button\" class=\"btn btn-secondary\"\n    (click)=\"onRemoveButtonClicked()\">\n    <i class=\"fa fa-minus-circle\"></i> Remove\n  </button>\n</div>\n\n<div class=\"grow-horiz\">\n  <div class=\"grow-vert range-slider\">\n    <app-range-slider name=\"alpha\" label=\"Type I Error (&alpha;)\"\n      [min]=\"min.alpha\" [max]=\"max.alpha\"\n      [hard-min]=\"min.alpha\" [hard-max]=\"max.alpha\"\n      [ngModel]=\"model.alpha | round\" (ngModelChange)=\"changeModel('alpha', $event)\">\n      <ng-template rsHelp>\n        The Type I error probability for a two sided test. This is the\n        probability that we will falsely reject the null hypothesis.\n      </ng-template>\n    </app-range-slider>\n  </div>\n</div>\n\n<div class=\"grow-horiz\">\n  <div class=\"grow-vert range-slider\">\n    <app-range-slider name=\"sigma\" label=\"Std. deviation (&sigma;)\"\n      [min]=\"min.sigma\" [max]=\"max.sigma\" step=\"0.1\"\n      [hard-min]=\"1\"\n      [ngModel]=\"model.sigma | round:1\" (ngModelChange)=\"changeModel('sigma', $event)\">\n      <ng-template rsHelp>\n        For independent tests σ is the within group standard deviation. For\n        paired designs it is the standard deviation of difference in the\n        response of matched pairs.\n      </ng-template>\n    </app-range-slider>\n  </div>\n</div>\n\n<ng-template [ngIf]=\"!isOutput('nByCI')\" [ngIfElse]=\"nByCI\">\n  <div class=\"grow-horiz\" [class.output]=\"isOutput('delta')\">\n    <div class=\"grow-vert range-slider\">\n      <app-range-slider name=\"delta\" label=\"Difference in population means (&delta;)\"\n        [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\"\n        [is-output]=\"model.output == 'delta'\" [help-tpl]=\"deltaHelp\"\n        [ngModel]=\"model.delta | round:1\" (ngModelChange)=\"changeModel('delta', $event)\">\n      </app-range-slider>\n    </div>\n  </div>\n\n  <div class=\"grow-horiz\" [class.output]=\"isOutput('power')\">\n    <div class=\"grow-vert range-slider\">\n      <app-range-slider name=\"power\" label=\"Power\"\n        [min]=\"min.power\" [max]=\"max.power\"\n        [hard-min]=\"min.power\" [hard-max]=\"max.power\"\n        [is-output]=\"model.output == 'power'\" [help-tpl]=\"powerHelp\"\n        [ngModel]=\"model.power | round\" (ngModelChange)=\"changeModel('power', $event)\">\n      </app-range-slider>\n    </div>\n  </div>\n\n  <div class=\"grow-horiz\" [class.output]=\"isOutput('n')\">\n    <div class=\"grow-vert range-slider\">\n      <app-range-slider name=\"n\" label=\"Sample size\"\n        [min]=\"min.n\" [max]=\"max.n\" step=\"1\"\n        [hard-min]=\"1\"\n        [is-output]=\"model.output == 'n'\" [help-tpl]=\"nHelp\"\n        [ngModel]=\"model.n | ceil\" (ngModelChange)=\"changeModel('n', $event)\">\n      </app-range-slider>\n      <app-range-slider name=\"ci\" label=\"95% confidence interval width\"\n        [min]=\"min.ci\" [max]=\"max.ci\" step=\"0.1\"\n        [hard-min]=\"1\"\n        [is-output]=\"model.output == 'n'\" [help-tpl]=\"ciHelp\"\n        [ngModel]=\"model.ci | round:1\" (ngModelChange)=\"changeModel('ci', $event)\">\n      </app-range-slider>\n    </div>\n  </div>\n</ng-template>\n<ng-template #nByCI>\n  <div class=\"grow-horiz\">\n    <div class=\"grow-vert range-slider\">\n      <app-range-slider name=\"ci\" label=\"95% confidence interval width\"\n        [min]=\"min.ci\" [max]=\"max.ci\" step=\"0.1\" [help-tpl]=\"ciHelp\"\n        [ngModel]=\"model.ci | round:1\" (ngModelChange)=\"changeModel('ci', $event)\">\n      </app-range-slider>\n    </div>\n  </div>\n\n  <div class=\"grow-horiz output\">\n    <div class=\"grow-vert range-slider\">\n      <app-range-slider name=\"n\" label=\"Sample size\"\n        [min]=\"min.n\" [max]=\"max.n\" step=\"1\"\n        [hard-min]=\"1\"\n        [is-output]=\"true\" [help-tpl]=\"nHelp\"\n        [ngModel]=\"model.n | ceil\" (ngModelChange)=\"changeModel('n', $event)\">\n      </app-range-slider>\n    </div>\n  </div>\n\n  <div class=\"grow-horiz order-2 alt\">\n    <div class=\"grow-vert range-slider\">\n      <app-range-slider name=\"delta\" label=\"Difference in population means (&delta;)\"\n        [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\" [help-tpl]=\"deltaHelp\"\n        [ngModel]=\"model.delta | round:1\" (ngModelChange)=\"changeModel('delta', $event)\">\n      </app-range-slider>\n\n      <app-range-slider name=\"power\" label=\"Power\"\n        [min]=\"min.power\" [max]=\"max.power\"\n        [hard-min]=\"min.power\" [hard-max]=\"max.power\"\n        [is-output]=\"model.output == 'power'\" [help-tpl]=\"powerHelp\"\n        [ngModel]=\"model.power | round\" (ngModelChange)=\"changeModel('power', $event)\">\n      </app-range-slider>\n    </div>\n  </div>\n</ng-template>\n<ng-template #deltaHelp>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim nunc,\n  rutrum at ligula id, tempor tincidunt nunc.\n</ng-template>\n<ng-template #powerHelp>\n  For independent tests power is probability of correctly rejecting the\n  null hypothesis of equal population means given n experimental\n  patients, m control patients per experimental patient, a Type I error\n  probability α and a true difference in population means of δ. For\n  paired tests it is the probability of correctly rejecting the null\n  hypothesis of equal population means given n pairs of patients, a Type\n  I error probability α and a true difference in population means of δ.\n</ng-template>\n<ng-template #nHelp>\n  For independent z-tests n is the number of experimental subjects. For\n  pair test n is the number of pairs.\n</ng-template>\n<ng-template #ciHelp>\n  Specifying the 95% confidence interval width will automatically calculate\n  the sample size parameter.\n</ng-template>\n"

/***/ }),

/***/ "./src/app/z-test/project-model/project-model.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/z-test/project-model/project-model.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModelComponent", function() { return ProjectModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../plot-options.service */ "./src/app/plot-options.service.ts");
/* harmony import */ var _palette_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../palette.service */ "./src/app/palette.service.ts");
/* harmony import */ var _z_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../z-test */ "./src/app/z-test/z-test.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project */ "./src/app/z-test/project.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stable */ "./node_modules/stable/stable.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(stable__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectModelComponent = /** @class */ (function () {
    function ProjectModelComponent(plotOptions, palette) {
        this.plotOptions = plotOptions;
        this.palette = palette;
        this.modelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProjectModelComponent.prototype.ngOnInit = function () {
        this.model = this.project.getModel(this.index);
        this.min = new _z_test__WEBPACK_IMPORTED_MODULE_3__["ZTest"](this.model);
        this.max = new _z_test__WEBPACK_IMPORTED_MODULE_3__["ZTest"](this.model);
        this.min.alpha = 0.01;
        this.max.alpha = 0.99;
        this.min.power = 0.01;
        this.max.power = 0.99;
        this.calculateSliderRange('n');
        this.calculateSliderRange('ci');
        this.calculateSliderRange('delta');
        this.calculateSliderRange('sigma');
        this.color = this.palette.getColor(this.index, this.plotOptions.paletteTheme);
    };
    ProjectModelComponent.prototype.onRemoveButtonClicked = function () {
        this.remove.emit();
    };
    ProjectModelComponent.prototype.isOutput = function (name) {
        return this.model.output === name;
    };
    ProjectModelComponent.prototype.changeModel = function (key, value) {
        var _this = this;
        this.project.updateModel(this.index, key, value).then(function () {
            _this.adjustMinMax();
            _this.modelChanged.emit();
        });
    };
    ProjectModelComponent.prototype.adjustMinMax = function () {
        if (this.model.sigma < this.min.sigma) {
            this.min.sigma = Math.floor(this.model.sigma);
        }
        else if (this.model.sigma > this.max.sigma) {
            this.max.sigma = Math.ceil(this.model.sigma);
        }
        if (this.model.delta < this.min.delta) {
            this.min.delta = Math.floor(this.model.delta);
        }
        else if (this.model.delta > this.max.delta) {
            this.max.delta = Math.ceil(this.model.delta);
        }
        if (this.model.n < this.min.n) {
            this.min.n = Math.floor(this.model.n);
        }
        else if (this.model.n > this.max.n) {
            this.max.n = Math.ceil(this.model.n);
        }
        if (this.model.ci < this.min.ci) {
            this.min.ci = Math.floor(this.model.ci);
        }
        else if (this.model.ci > this.max.ci) {
            this.max.ci = Math.ceil(this.model.ci);
        }
    };
    ProjectModelComponent.prototype.calculateSliderRange = function (name) {
        var value = this.model[name];
        var range = stable__WEBPACK_IMPORTED_MODULE_6__([value * 0.5, value * 1.5], d3__WEBPACK_IMPORTED_MODULE_5__["ascending"]);
        this.min[name] = range[0];
        this.max[name] = range[1];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_4__["Project"])
    ], ProjectModelComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProjectModelComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectModelComponent.prototype, "modelChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectModelComponent.prototype, "remove", void 0);
    ProjectModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'z-test-project-model',
            template: __webpack_require__(/*! ./project-model.component.html */ "./src/app/z-test/project-model/project-model.component.html"),
            styles: [__webpack_require__(/*! ./project-model.component.css */ "./src/app/z-test/project-model/project-model.component.css")]
        }),
        __metadata("design:paramtypes", [_plot_options_service__WEBPACK_IMPORTED_MODULE_1__["PlotOptionsService"],
            _palette_service__WEBPACK_IMPORTED_MODULE_2__["PaletteService"]])
    ], ProjectModelComponent);
    return ProjectModelComponent;
}());



/***/ }),

/***/ "./src/app/z-test/project.service.ts":
/*!*******************************************!*\
  !*** ./src/app/z-test/project.service.ts ***!
  \*******************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _z_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./z-test.service */ "./src/app/z-test/z-test.service.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/app/z-test/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = /** @class */ (function () {
    function ProjectService(ttestService) {
        this.ttestService = ttestService;
        this.projects = [];
    }
    ProjectService.prototype.createProject = function () {
        var project = new _project__WEBPACK_IMPORTED_MODULE_2__["Project"](this.ttestService);
        this.projects.push(project);
        return project;
    };
    ProjectService.prototype.getProjects = function () {
        // return reference for convenience
        return this.projects;
    };
    ProjectService.prototype.numProjects = function () {
        return this.projects.length;
    };
    ProjectService.prototype.setSelectedIndex = function (index) {
        this.selectedIndex = index;
    };
    ProjectService.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_z_test_service__WEBPACK_IMPORTED_MODULE_1__["ZTestService"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/z-test/project.ts":
/*!***********************************!*\
  !*** ./src/app/z-test/project.ts ***!
  \***********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var _z_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./z-test */ "./src/app/z-test/z-test.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../range */ "./src/app/range.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stable */ "./node_modules/stable/stable.js");
/* harmony import */ var stable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(stable__WEBPACK_IMPORTED_MODULE_3__);




var Project = /** @class */ (function () {
    function Project(ztestService) {
        this.ztestService = ztestService;
        this.models = [];
        this.selectedIndex = 0;
        this.changeHistory = [];
        this.customRanges = false;
    }
    Project.prototype.getOutput = function () {
        if (this.models.length > 0) {
            return this.models[0].output;
        }
        return '';
    };
    Project.prototype.updatePlotData = function () {
        var _this = this;
        var ranges = {
            nRange: this.nRange,
            powerRange: this.powerRange,
            deltaRange: this.deltaRange,
            pSpaceRange: this.pSpaceRange
        };
        return this.ztestService.plotData(this.models, ranges, this.pointsPerPlot).
            then(function (result) {
            if (typeof (_this.pointsPerPlot) === 'undefined') {
                _this.pointsPerPlot = result.points;
            }
            result.data.forEach(function (data, i) {
                Object.assign(_this.models[i], data);
            });
            if (_this.customRanges)
                return;
            var output = _this.getOutput();
            var nRange, powerRange, deltaRange;
            for (var i = 0, ilen = _this.models.length; i < ilen; i++) {
                var model = _this.models[i];
                switch (output) {
                    case "n":
                    case "nByCI":
                        powerRange = _this.makeXRange(model.nVsPower, _this.nRange);
                        if (i == 0) {
                            _this.powerRange = powerRange;
                        }
                        else {
                            _this.powerRange.combine(powerRange);
                        }
                        deltaRange = _this.makeXRange(model.nVsDelta, _this.nRange);
                        if (i == 0) {
                            _this.deltaRange = deltaRange;
                        }
                        else {
                            _this.deltaRange.combine(deltaRange);
                        }
                        break;
                    case "power":
                        nRange = _this.makeXRange(model.powerVsN, _this.powerRange);
                        if (i == 0) {
                            _this.nRange = nRange;
                        }
                        else {
                            _this.nRange.combine(nRange);
                        }
                        break;
                    case "delta":
                        powerRange = _this.makeXRange(model.deltaVsPower, _this.deltaRange);
                        if (i == 0) {
                            _this.powerRange = powerRange;
                        }
                        else {
                            _this.powerRange.combine(powerRange);
                        }
                        nRange = _this.makeXRange(model.deltaVsN, _this.deltaRange);
                        if (i == 0) {
                            _this.nRange = nRange;
                        }
                        else {
                            _this.nRange.combine(nRange);
                        }
                        break;
                }
            }
            _this.previousRanges = {
                nRange: _this.nRange ? _this.nRange.clone() : undefined,
                powerRange: _this.powerRange ? _this.powerRange.clone() : undefined,
                deltaRange: _this.deltaRange ? _this.deltaRange.clone() : undefined,
                pSpaceRange: _this.pSpaceRange ? _this.pSpaceRange.clone() : undefined
            };
        });
    };
    Project.prototype.resetRanges = function () {
        if (this.previousRanges) {
            Object.assign(this, this.previousRanges);
        }
    };
    Project.prototype.addModel = function (model) {
        var _this = this;
        return this.ztestService.calculate(model).
            then(function (result) {
            var model = new _z_test__WEBPACK_IMPORTED_MODULE_0__["ZTest"](result);
            model.name = _this.getModelName(_this.models.length);
            _this.models.push(model);
            if (!_this.customRanges) {
                _this.calculateRanges();
            }
            _this.changeHistory.push({
                'type': 'add', 'index': _this.models.length - 1,
                'params': model.params()
            });
            return _this.updatePlotData();
        });
    };
    Project.prototype.updateModel = function (index, key, value) {
        var _this = this;
        var model = this.models[index];
        var which = key;
        var changes = (_a = {}, _a[key] = value, _a);
        if (key !== 'output') {
            if (model.output === 'nByCI') {
                if (key === 'delta') {
                    // delta was changed, so turn on "deltaMode"
                    changes.deltaMode = true;
                    which = 'power';
                }
                else if (key === 'power') {
                    // power was changed, so turn off "deltaMode"
                    changes.deltaMode = false;
                }
            }
            else if (this.models[0].output !== 'n') {
                if (key === 'ci') {
                    // 95% confidence interval width was changed, so turn on "ciMode"
                    changes.ciMode = true;
                    which = 'n';
                }
                else if (key === 'n') {
                    // Sample size was changed, so turn off "ciMode"
                    changes.ciMode = false;
                }
            }
        }
        var models = [model];
        if (key === "output") {
            // If the output is changed, all models need to be updated. Additionally,
            // reset the flag to keep ranges.
            models = this.models;
            this.customRanges = false;
        }
        models.forEach(function (m) { Object.assign(m, changes); });
        return models.reduce(function (promise, model) {
            return promise.then(function () {
                return _this.ztestService.calculate(model);
            }).then(function (result) {
                Object.assign(model, result);
            });
        }, Promise.resolve()).then(function () {
            if (!_this.customRanges) {
                _this.calculateRanges();
            }
            _this.changeHistory.push({
                'type': 'change', 'index': index,
                'key': key, 'params': model.params()
            });
            return _this.updatePlotData();
        });
        var _a;
    };
    Project.prototype.removeModel = function (index) {
        this.models.splice(index, 1);
        this.changeHistory.push({
            'type': 'remove', 'index': index
        });
        if (!this.customRanges) {
            this.calculateRanges();
        }
        return this.updatePlotData();
    };
    Project.prototype.getModel = function (index) {
        return this.models[index];
    };
    Project.prototype.modelCount = function () {
        return this.models.length;
    };
    Project.prototype.calculateRanges = function () {
        var nRange = [];
        var powerRange = [];
        var deltaRange = [];
        var pSpaceRange = [];
        var output = this.getOutput();
        var values;
        for (var i = 0, ilen = this.models.length; i < ilen; i++) {
            var model = this.models[i];
            switch (output) {
                case "n": /* fall through */
                case "nByCI":
                    // calculate n range
                    values = stable__WEBPACK_IMPORTED_MODULE_3__([model.n * 0.5, model.n * 1.5], d3__WEBPACK_IMPORTED_MODULE_2__["ascending"]);
                    if (i == 0 || values[0] < nRange[0]) {
                        nRange[0] = values[0];
                    }
                    if (i == 0 || values[1] > nRange[1]) {
                        nRange[1] = values[1];
                    }
                    break;
                case "power":
                    if (i == 0) {
                        powerRange = [0.01, 1];
                    }
                    // calculate delta range
                    values = stable__WEBPACK_IMPORTED_MODULE_3__([1.5 * model.sigma, -1.5 * model.sigma], d3__WEBPACK_IMPORTED_MODULE_2__["ascending"]);
                    if (i == 0 || values[0] < deltaRange[0]) {
                        deltaRange[0] = values[0];
                    }
                    if (i == 0 || values[1] > deltaRange[1]) {
                        deltaRange[1] = values[1];
                    }
                    break;
                case "delta":
                    // calculate delta range
                    values = stable__WEBPACK_IMPORTED_MODULE_3__([model.delta * 0.5, model.delta * 1.5], d3__WEBPACK_IMPORTED_MODULE_2__["ascending"]);
                    if (i == 0 || values[0] < deltaRange[0]) {
                        deltaRange[0] = values[0];
                    }
                    if (i == 0 || values[1] > deltaRange[1]) {
                        deltaRange[1] = values[1];
                    }
                    break;
            }
            // calculate parameter space range
            values = stable__WEBPACK_IMPORTED_MODULE_3__([1.5 * model.sigma, -1.5 * model.sigma], d3__WEBPACK_IMPORTED_MODULE_2__["ascending"]);
            if (i == 0 || values[0] < pSpaceRange[0]) {
                pSpaceRange[0] = values[0];
            }
            if (i == 0 || values[1] > pSpaceRange[1]) {
                pSpaceRange[1] = values[1];
            }
            values = [model.delta - (model.ci / 2), model.delta + (model.ci / 2)];
            if (values[0] < pSpaceRange[0]) {
                pSpaceRange[0] = values[0] - Math.abs(values[0] * 0.5);
            }
            if (values[1] > pSpaceRange[1]) {
                pSpaceRange[1] = values[1] + Math.abs(values[1] * 0.5);
            }
        }
        if (nRange.length > 0) {
            this.nRange = new _range__WEBPACK_IMPORTED_MODULE_1__["Range"](nRange[0], nRange[1]);
        }
        else {
            this.nRange = undefined;
        }
        if (powerRange.length > 0) {
            this.powerRange = new _range__WEBPACK_IMPORTED_MODULE_1__["Range"](powerRange[0], powerRange[1]);
        }
        else {
            this.powerRange = undefined;
        }
        if (deltaRange.length > 0) {
            this.deltaRange = new _range__WEBPACK_IMPORTED_MODULE_1__["Range"](deltaRange[0], deltaRange[1]);
        }
        else {
            this.deltaRange = undefined;
        }
        if (pSpaceRange.length > 0) {
            this.pSpaceRange = new _range__WEBPACK_IMPORTED_MODULE_1__["Range"](pSpaceRange[0], pSpaceRange[1]);
        }
        else {
            this.pSpaceRange = undefined;
        }
    };
    Project.prototype.describeChanges = function (changes, html) {
        if (html === void 0) { html = true; }
        var result;
        if (changes.type == 'add') {
            result = "Added model #" + (changes.index + 1) + ": <span class=\"code\">" + this.paramsToString(changes.params) + "</span>";
        }
        else if (changes.type == 'remove') {
            result = "Removed model #" + (changes.index + 1);
        }
        else if (changes.type == 'change') {
            if (html) {
                result = "Changed <span class=\"code\">" + changes.key + "</span> in model #" + (changes.index + 1) + ": <span class=\"code\">" + this.paramsToString(changes.params) + "</span>";
            }
            else {
                result = "Changed " + changes.key + " in model #" + (changes.index + 1) + ": " + this.paramsToString(changes.params);
            }
        }
        return result;
    };
    Project.prototype.paramsToString = function (params) {
        var result = [];
        for (var key in params) {
            if (key == 'ciMode' || key == 'deltaMode') {
                continue;
            }
            var value = params[key];
            if (typeof (value) === 'string') {
                result.push("\"" + key + "\": \"" + params[key] + "\"");
            }
            else {
                result.push("\"" + key + "\": " + params[key]);
            }
        }
        return "{ " + result.join(', ') + " }";
    };
    Project.prototype.getModelName = function (index) {
        switch (index) {
            case 0:
                return "Primary";
            case 1:
                return "Secondary";
            case 2:
                return "Tertiary";
            case 3:
                return "Quaternary";
            case 4:
                return "Quinary";
            case 5:
                return "Senary";
            case 6:
                return "Septenary";
            case 7:
                return "Octonary";
            case 8:
                return "Nonary";
            case 9:
                return "Denary";
        }
        return "Line " + (index + 1);
    };
    Project.prototype.makeXRange = function (data, yRange) {
        var minIndex = 0, maxIndex = data.length - 1;
        for (var i = 0; i < data.length; i++) {
            if (typeof (data[i].x) === "number" && data[i].y >= yRange.min) {
                minIndex = i;
                break;
            }
        }
        for (var i = data.length - 1; i >= 0; i--) {
            if (typeof (data[i].x) === "number" && data[i].y <= yRange.max) {
                maxIndex = i;
                break;
            }
        }
        var values = stable__WEBPACK_IMPORTED_MODULE_3__([data[minIndex].x, data[maxIndex].x], d3__WEBPACK_IMPORTED_MODULE_2__["ascending"]);
        return new _range__WEBPACK_IMPORTED_MODULE_1__["Range"](values[0], values[1]);
    };
    return Project;
}());



/***/ }),

/***/ "./src/app/z-test/project/project.component.css":
/*!******************************************************!*\
  !*** ./src/app/z-test/project/project.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overview {\n  text-align: right;\n}\n\n.btn-secondary {\n  padding: 0.3rem 0.3rem;\n}\n\nul.nav {\n  border-bottom: 0;\n  z-index: 1;\n}\n\nul.nav li.nav-item {\n  margin-bottom: -1px;\n}\n\nul.nav li.nav-item a.nav-link {\n  cursor: pointer;\n  background-color: #ddd;\n  border-color: #bbb #bbb #aaa;\n  font-size: x-large;\n  padding: 0.25rem 0.75rem;\n}\n\nul.nav li.nav-item a.nav-link.active {\n  border-color: #aaa #aaa #f6f6f6;\n  background-color: #f6f6f6;\n}\n\n.project-model {\n  display: none;\n}\n\n.project-model.active {\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n}\n\n.project-model.tab {\n  padding: 1rem 0.5rem 0 0.5rem;\n  border: 1px solid #aaa;\n  background-color: #f6f6f6;\n}\n"

/***/ }),

/***/ "./src/app/z-test/project/project.component.html":
/*!*******************************************************!*\
  !*** ./src/app/z-test/project/project.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grow-vert\">\n  <div class=\"form-inline justify-content-between mb-2\">\n    <div class=\"form-group\">\n      <label for=\"z-test-project-{{name}}-output\" class=\"mr-2\">Output:</label>\n      <select id=\"z-test-project-{{name}}-output\" class=\"form-control\" name=\"output\"\n        [ngModel]=\"project.getOutput()\" (ngModelChange)=\"changeOutput($event)\">\n        <option value=\"power\">Power</option>\n        <option value=\"n\">Sample size</option>\n        <option value=\"delta\">Detectable alternative</option>\n        <option value=\"nByCI\">Sample size for 95% CI</option>\n      </select>\n    </div>\n\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addModel()\">\n      <i class=\"fa fa-plus-circle\"></i> Add line\n    </button>\n  </div>\n\n  <ul *ngIf=\"project.models.length > 1\" class=\"nav nav-tabs mt-2\">\n    <li *ngFor=\"let model of project.models; index as i; trackBy: trackByIndex\" class=\"nav-item\">\n      <a class=\"nav-link nav-model-link\" [class.active]=\"i == project.selectedIndex\"\n        (click)=\"selectModel(i)\">\n        <i class=\"fa fa-square\" [style.color]=\"getColor(i)\"></i>\n      </a>\n    </li>\n  </ul>\n\n  <div *ngFor=\"let model of project.models; index as i\" class=\"project-model\"\n    [class.active]=\"i == project.selectedIndex\"\n    [class.tab]=\"project.models.length > 1\">\n    <z-test-project-model [project]=\"project\" [index]=\"i\"\n      (modelChanged)=\"onModelChanged()\" (remove)=\"onModelRemove(i)\">\n    </z-test-project-model>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/z-test/project/project.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/z-test/project/project.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _plot_options_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plot-options.service */ "./src/app/plot-options.service.ts");
/* harmony import */ var _palette_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../palette.service */ "./src/app/palette.service.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project */ "./src/app/z-test/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(plotOptions, palette) {
        this.plotOptions = plotOptions;
        this.palette = palette;
        this.projectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.selectedModel = this.project.getModel(this.project.selectedIndex);
    };
    ProjectComponent.prototype.changeOutput = function (value) {
        var _this = this;
        this.project.updateModel(0, 'output', value).then(function () {
            _this.projectChanged.emit();
        });
    };
    ProjectComponent.prototype.selectModel = function (index) {
        this.project.selectedIndex = index;
        this.selectedModel = this.project.getModel(index);
        this.projectChanged.emit();
    };
    ProjectComponent.prototype.addModel = function () {
        var _this = this;
        var model = this.selectedModel.shallowClone();
        this.project.addModel(model).then(function () {
            _this.project.selectedIndex = _this.project.models.length - 1;
            _this.projectChanged.emit();
        });
    };
    ProjectComponent.prototype.onModelRemove = function (index) {
        this.removeModel(index);
    };
    ProjectComponent.prototype.removeModel = function (index) {
        var _this = this;
        this.project.removeModel(index).then(function () {
            if (_this.project.selectedIndex >= _this.project.models.length) {
                _this.project.selectedIndex--;
            }
            _this.projectChanged.emit();
        });
    };
    ProjectComponent.prototype.onModelChanged = function () {
        this.projectChanged.emit();
    };
    ProjectComponent.prototype.trackByIndex = function (index, item) {
        return index;
    };
    ProjectComponent.prototype.getColor = function (index) {
        return this.palette.getColor(index, this.plotOptions.paletteTheme);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_4__["Project"])
    ], ProjectComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "projectChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabset'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"])
    ], ProjectComponent.prototype, "tabset", void 0);
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'z-test-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/z-test/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/z-test/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [_plot_options_service__WEBPACK_IMPORTED_MODULE_2__["PlotOptionsService"],
            _palette_service__WEBPACK_IMPORTED_MODULE_3__["PaletteService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/z-test/start/start.component.css":
/*!**************************************************!*\
  !*** ./src/app/z-test/start/start.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overview {\n  text-align: right;\n}\n\n.btn-secondary {\n  padding: 0.3rem 0.3rem;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; /* red */\n}\n"

/***/ }),

/***/ "./src/app/z-test/start/start.component.html":
/*!***************************************************!*\
  !*** ./src/app/z-test/start/start.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #startForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"output\">\n      What do you want to know?\n      <button type=\"button\" class=\"btn btn-secondary fa fa-question-circle\"\n        (click)=\"toggleHelp()\"></button>\n    </label>\n    <select class=\"form-control\" id=\"output\"\n            required\n            [(ngModel)]=\"model.output\" name=\"output\">\n      <option></option>\n      <option value=\"power\">Power</option>\n      <option value=\"n\">Sample size</option>\n      <option value=\"delta\">Detectable alternative</option>\n      <option value=\"nByCI\">Sample size for 95% CI</option>\n    </select>\n  </div>\n  <!--\n  <div class=\"form-group\" *ngIf=\"model.output\">\n    <label for=\"design\">Paired or independent?</label>\n    <select class=\"form-control\" id=\"design\"\n            required\n            [(ngModel)]=\"model.design\" name=\"design\">\n      <option></option>\n      <option>Paired</option>\n      <option>Independent</option>\n    </select>\n  </div>\n  -->\n  <div *ngIf=\"model.output\">\n    <div class=\"form-group\">\n      <label for=\"alpha\">\n        Type I Error (&alpha;)\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"alphaHelp\" popoverTitle=\"Type I Error (&alpha;)\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n      </label>\n      <input class=\"form-control\" id=\"alpha\"\n             type=\"number\" step=\"0.01\" min=\"0.01\" max=\"0.99\"\n             required\n             [(ngModel)]=\"model.alpha\" name=\"alpha\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sigma\">\n        Standard deviation (&sigma;)\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"sigmaHelp\" popoverTitle=\"Standard deviation (&sigma;)\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n      </label>\n      <input class=\"form-control\" id=\"sigma\"\n             type=\"number\" step=\"0.1\" min=\"0.1\"\n             required\n             [(ngModel)]=\"model.sigma\" name=\"sigma\">\n    </div>\n    <div *ngIf=\"needDelta()\" class=\"form-group\">\n      <label for=\"delta\">Difference in population means (&delta;)</label>\n      <input class=\"form-control\" id=\"delta\"\n             type=\"number\" step=\"0.1\"\n             required\n             [(ngModel)]=\"model.delta\" name=\"delta\">\n    </div>\n    <div *ngIf=\"needPower()\" class=\"form-group\">\n      <label for=\"power\">\n        Power\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"powerHelp\" popoverTitle=\"Power\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n      </label>\n      <input class=\"form-control\" id=\"power\"\n             type=\"number\" step=\"0.01\" min=\"0.01\" max=\"0.99\"\n             required\n             [(ngModel)]=\"model.power\" name=\"power\">\n    </div>\n    <div *ngIf=\"needCI()\" class=\"form-group\">\n      <label for=\"ci\">95% confidence interval width</label>\n      <input class=\"form-control\" id=\"ci\" type=\"number\" required\n             [(ngModel)]=\"model.ci\" name=\"ci\">\n    </div>\n    <ng-template [ngIf]=\"needNOrCI()\">\n      <div class=\"form-check form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"ciMode\" id=\"ciMode-false\"\n                 [(ngModel)]=\"model.ciMode\" [value]=\"false\">\n          Sample size\n          <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n            [ngbPopover]=\"nHelp\" popoverTitle=\"Sample size\"\n            placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n        </label>\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"ciMode\" id=\"ciMode-true\"\n                 [(ngModel)]=\"model.ciMode\" [value]=\"true\">\n          95% confidence interval width\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <input *ngIf=\"!model.ciMode\"\n               class=\"form-control\" id=\"n\"\n               type=\"number\" min=\"1\"\n               required\n               [(ngModel)]=\"model.n\" name=\"n\">\n        <input *ngIf=\"model.ciMode\"\n               class=\"form-control\" id=\"ci\"\n               type=\"number\" min=\"1\" step=\"0.1\"\n               required\n               [(ngModel)]=\"model.ci\" name=\"ci\">\n      </div>\n\n    </ng-template>\n    <ng-template [ngIf]=\"needPowerOrDelta()\">\n      <div class=\"form-check form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"deltaMode\" id=\"deltaMode-false\"\n                 [(ngModel)]=\"model.deltaMode\" [value]=\"false\">\n          Power\n          <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n            [ngbPopover]=\"powerHelp\" popoverTitle=\"Power\"\n            placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n        </label>\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"deltaMode\" id=\"deltaMode-true\"\n                 [(ngModel)]=\"model.deltaMode\" [value]=\"true\">\n          Difference in population means (&delta;)\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <input *ngIf=\"!model.deltaMode\"\n               class=\"form-control\" id=\"power\"\n               type=\"number\" step=\"0.01\" min=\"0.01\" max=\"0.99\"\n               required\n               [(ngModel)]=\"model.power\" name=\"power\">\n        <input *ngIf=\"model.deltaMode\"\n               class=\"form-control\" id=\"delta\"\n               type=\"number\" step=\"0.1\"\n               required\n               [(ngModel)]=\"model.delta\" name=\"delta\">\n      </div>\n\n    </ng-template>\n    <button type=\"submit\" class=\"btn btn-success\"\n            [disabled]=\"!startForm.form.valid\">\n      Calculate\n    </button>\n  </div>\n</form>\n<ng-template #alphaHelp>\n  The Type I error probability for a two sided test. This is the\n  probability that we will falsely reject the null hypothesis.\n</ng-template>\n<ng-template #sigmaHelp>\n  For independent tests σ is the within group standard deviation. For\n  paired designs it is the standard deviation of difference in the\n  response of matched pairs.\n</ng-template>\n<ng-template #powerHelp>\n  For independent tests power is probability of correctly rejecting the null\n  hypothesis of equal population means given n experimental patients, m control\n  patients per experimental patient, a Type I error probability α and a true\n  difference in population means of δ. For paired tests it is the probability\n  of correctly rejecting the null hypothesis of equal population means given n\n  pairs of patients, a Type I error probability α and a true difference in\n  population means of δ.\n</ng-template>\n<ng-template #nHelp>\n  For independent z-tests n is the number of experimental subjects. For\n  pair test n is the number of pairs.\n</ng-template>\n"

/***/ }),

/***/ "./src/app/z-test/start/start.component.ts":
/*!*************************************************!*\
  !*** ./src/app/z-test/start/start.component.ts ***!
  \*************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _z_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../z-test */ "./src/app/z-test/z-test.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartComponent = /** @class */ (function () {
    function StartComponent() {
        this.onCalculate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onToggleHelp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StartComponent.prototype.toggleHelp = function () {
        this.onToggleHelp.emit();
    };
    StartComponent.prototype.needDelta = function () {
        return this.model.output !== 'delta' && this.model.output !== 'nByCI';
    };
    StartComponent.prototype.needPower = function () {
        return this.model.output !== 'power' && this.model.output !== 'nByCI';
    };
    StartComponent.prototype.needPowerOrDelta = function () {
        return this.model.output === 'nByCI';
    };
    StartComponent.prototype.needCI = function () {
        return this.model.output === 'nByCI';
    };
    StartComponent.prototype.needNOrCI = function () {
        return this.model.output !== 'n' && this.model.output !== 'nByCI';
    };
    StartComponent.prototype.onSubmit = function () {
        this.onCalculate.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _z_test__WEBPACK_IMPORTED_MODULE_1__["ZTest"])
    ], StartComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StartComponent.prototype, "onCalculate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StartComponent.prototype, "onToggleHelp", void 0);
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'z-test-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/z-test/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/z-test/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/z-test/z-test.component.css":
/*!*********************************************!*\
  !*** ./src/app/z-test/z-test.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n#z-test {\n}\n\n#z-test-main {\n  /*min-height: 85vh;*/\n}\n\n#z-test-sidebar {\n  background-color: #e5e5e5;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  /*margin: 10px;*/\n  position: relative;\n}\n\n#z-test-sidebar .overview {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.plot-buttons {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: large;\n  z-index: 99;\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: column;\n}\n\n.plot-buttons button {\n  padding: 0.4rem 0;\n  margin: 0.2rem 0;\n  width: 2.4rem;\n}\n\n#z-test-sidebar ngb-tabset {\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n  /*width: 100%;*/\n}\n\n#z-test-sidebar z-test-start,\n#z-test-sidebar z-test-project {\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n}\n\n#z-test-footer {\n  margin: 20px 0;\n  padding: 20px;\n  text-align: center;\n}\n\n#z-test-footer img {\n  margin: auto;\n  display: block;\n}\n\n#z-test-footer div.build {\n  margin-top: 5px;\n  font-size: smaller;\n}\n\n.block-selection * {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n"

/***/ }),

/***/ "./src/app/z-test/z-test.component.html":
/*!**********************************************!*\
  !*** ./src/app/z-test/z-test.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"z-test\" class=\"d-flex flex-column h-100\"\n  [class.block-selection]=\"blockSelection\" (mouseup)=\"onMouseUp()\">\n\n  <div id=\"z-test-main\" class=\"row d-flex\" style=\"flex: 1 0 auto\">\n    <div class=\"col-4 d-flex flex-column justify-content-between\">\n      <div id=\"z-test-sidebar\" class=\"d-flex flex-row\" style=\"flex: auto\">\n        <div class=\"overview\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleHelp('overview')\">\n            Overview <i class=\"fa fa-question-circle\"></i>\n          </button>\n        </div>\n        <ngb-tabset #tabset\n          activeId=\"z-test-{{selectedIndex !== undefined ? selectedIndex + 1 : 'start'}}\"\n          (tabChange)=\"onTabChange($event)\">\n          <ngb-tab title=\"Start\" id=\"z-test-start\">\n            <ng-template ngbTabContent>\n              <z-test-start [model]=\"newModel\"\n                (onCalculate)=\"calculate()\"\n                (onToggleHelp)=\"toggleHelp('start')\">\n              </z-test-start>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab *ngFor=\"let project of projects; let i = index\"\n            title=\"z-test #{{i+1}}\" id=\"z-test-{{i+1}}\">\n            <ng-template ngbTabContent>\n              <z-test-project name=\"{{i}}\" [project]=\"project\"\n                (projectChanged)=\"onProjectChanged()\">\n              </z-test-project>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n\n      <div id=\"z-test-footer\" class=\"d-flex flex-column\">\n        <img src=\"assets/biostat.jpg\">\n        <div class=\"build\">\n          Build version: {{ commitHash }} ({{ buildTimestamp | date }})\n        </div>\n      </div>\n    </div>\n    <div class=\"col-8\">\n      <div class=\"plot-buttons\" *ngIf=\"selectedProject\">\n        <button class=\"btn btn-secondary\" (click)=\"togglePlotOptions()\" title=\"Toggle plot options\">\n          <i class=\"fa fa-cog\"></i>\n        </button>\n        <button class=\"btn btn-secondary\" (click)=\"save()\" title=\"Export plots\">\n          <i class=\"fa fa-floppy-o\"></i>\n        </button>\n        <button class=\"btn btn-secondary\" (click)=\"toggleHoverBox()\" title=\"Toggle hover box\">\n          <i class=\"fa\" [class.fa-cubes]=\"hoverBoxEnabled\" [class.fa-cube]=\"!hoverBoxEnabled\"></i>\n        </button>\n      </div>\n      <z-test-output-pane #outputPane\n        [project]=\"selectedProject\"\n        [hover-disabled]=\"!hoverBoxEnabled\"\n        (modelChanged)=\"onModelChanged()\">\n      </z-test-output-pane>\n    </div>\n  </div>\n  <app-draggable-dialog #helpDialog\n    [title]=\"helpTitles[helpTopic]\"\n    start-x-offset=\"33%\" start-y-offset=\"55px\"\n    (drag-start)=\"onChildDragStarted()\"\n    (drag-end)=\"onChildDragEnded()\">\n    <z-test-help [topic]=\"helpTopic\"></z-test-help>\n  </app-draggable-dialog>\n  <app-draggable-dialog #plotOptionsDialog\n    title=\"Plot options\"\n    start-x-offset=\"5%\" start-y-offset=\"55px\"\n    (drag-start)=\"onChildDragStarted()\"\n    (drag-end)=\"onChildDragEnded()\">\n    <z-test-plot-options [project]=\"selectedProject\"\n      (optionChanged)=\"onPlotOptionChanged()\"\n      (projectChanged)=\"onProjectChangedFromPlotOptions()\"\n      (reset)=\"onPlotOptionsReset()\">\n    </z-test-plot-options>\n  </app-draggable-dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/z-test/z-test.component.ts":
/*!********************************************!*\
  !*** ./src/app/z-test/z-test.component.ts ***!
  \********************************************/
/*! exports provided: ZTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZTestComponent", function() { return ZTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _z_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./z-test */ "./src/app/z-test/z-test.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.service */ "./src/app/z-test/project.service.ts");
/* harmony import */ var _draggable_dialog_draggable_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../draggable-dialog/draggable-dialog.component */ "./src/app/draggable-dialog/draggable-dialog.component.ts");
/* harmony import */ var _output_pane_output_pane_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./output-pane/output-pane.component */ "./src/app/z-test/output-pane/output-pane.component.ts");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../version */ "./src/app/version.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ZTestComponent = /** @class */ (function () {
    function ZTestComponent(projectService) {
        this.projectService = projectService;
        this.newModel = new _z_test__WEBPACK_IMPORTED_MODULE_2__["ZTest"]();
        this.projects = [];
        this.commitHash = _version__WEBPACK_IMPORTED_MODULE_6__["commitHash"].substr(0, 7);
        this.buildTimestamp = _version__WEBPACK_IMPORTED_MODULE_6__["buildTimestamp"];
        this.helpTitles = {
            'overview': 'PS Overview',
            'start': 'PS Start Tab'
        };
        this.helpTopic = 'overview';
        this.blockSelection = false;
        this.hoverBoxEnabled = true;
        this.projects = this.projectService.getProjects();
        this.selectedIndex = this.projectService.getSelectedIndex();
        this.selectedProject = this.projects[this.selectedIndex];
    }
    ZTestComponent.prototype.ngOnInit = function () {
        if (this.projects.length == 0) {
            /* Add example project */
            var model = new _z_test__WEBPACK_IMPORTED_MODULE_2__["ZTest"]({
                output: 'power', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 33
            });
            this.createProject(model, false);
        }
    };
    ZTestComponent.prototype.toggleHelp = function (topic) {
        if (this.helpDialog.isOpen() && this.helpTopic == topic) {
            this.helpDialog.close();
        }
        else {
            this.helpTopic = topic;
            this.helpDialog.open();
        }
    };
    ZTestComponent.prototype.togglePlotOptions = function () {
        this.plotOptionsDialog.toggle();
    };
    ZTestComponent.prototype.toggleHoverBox = function () {
        this.hoverBoxEnabled = !this.hoverBoxEnabled;
    };
    ZTestComponent.prototype.save = function () {
        this.outputPane.openSaveDialog();
    };
    ZTestComponent.prototype.calculate = function () {
        this.createProject(this.newModel);
    };
    ZTestComponent.prototype.selectProject = function (index) {
        var _this = this;
        setTimeout(function () {
            _this.tabset.select("t-test-" + (index + 1));
        }, 1);
    };
    ZTestComponent.prototype.createProject = function (model, select) {
        var _this = this;
        if (select === void 0) { select = true; }
        var project = this.projectService.createProject();
        project.addModel(model).
            then(function (result) {
            if (select) {
                _this.selectProject(_this.projects.length - 1);
            }
        }).
            catch(function (err) { return console.error(err); });
    };
    ZTestComponent.prototype.onTabChange = function (event) {
        var md = event.nextId.match(/\d+/);
        if (md) {
            var index = parseInt(md[0]) - 1;
            this.selectedIndex = index;
            this.selectedProject = this.projects[index];
        }
        else {
            this.selectedIndex = undefined;
            this.selectedProject = undefined;
        }
        this.projectService.setSelectedIndex(this.selectedIndex);
    };
    ZTestComponent.prototype.onProjectChanged = function () {
        this.outputPane.updateProject();
        this.outputPane.redrawPlots();
    };
    ZTestComponent.prototype.onModelChanged = function () {
        this.outputPane.redrawPlots();
    };
    ZTestComponent.prototype.onPlotOptionChanged = function () {
        this.outputPane.redrawPlots();
    };
    ZTestComponent.prototype.onPlotOptionsReset = function () {
        this.outputPane.redrawPlots();
    };
    ZTestComponent.prototype.onProjectChangedFromPlotOptions = function () {
        this.outputPane.redrawPlots();
    };
    ZTestComponent.prototype.onMouseUp = function () {
        this.plotOptionsDialog.stopDragging();
    };
    ZTestComponent.prototype.onChildDragStarted = function () {
        this.blockSelection = true;
    };
    ZTestComponent.prototype.onChildDragEnded = function () {
        this.blockSelection = false;
    };
    ZTestComponent.prototype.onResize = function (event) {
        this.outputPane.resize();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('plotOptionsDialog'),
        __metadata("design:type", _draggable_dialog_draggable_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DraggableDialogComponent"])
    ], ZTestComponent.prototype, "plotOptionsDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('helpDialog'),
        __metadata("design:type", _draggable_dialog_draggable_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DraggableDialogComponent"])
    ], ZTestComponent.prototype, "helpDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabset'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"])
    ], ZTestComponent.prototype, "tabset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('outputPane'),
        __metadata("design:type", _output_pane_output_pane_component__WEBPACK_IMPORTED_MODULE_5__["OutputPaneComponent"])
    ], ZTestComponent.prototype, "outputPane", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ZTestComponent.prototype, "onResize", null);
    ZTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'z-test-root',
            template: __webpack_require__(/*! ./z-test.component.html */ "./src/app/z-test/z-test.component.html"),
            styles: [__webpack_require__(/*! ./z-test.component.css */ "./src/app/z-test/z-test.component.css")]
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], ZTestComponent);
    return ZTestComponent;
}());



/***/ }),

/***/ "./src/app/z-test/z-test.module.ts":
/*!*****************************************!*\
  !*** ./src/app/z-test/z-test.module.ts ***!
  \*****************************************/
/*! exports provided: ZTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZTestModule", function() { return ZTestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-common.module */ "./src/app/app-common.module.ts");
/* harmony import */ var _z_test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./z-test.service */ "./src/app/z-test/z-test.service.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project.service */ "./src/app/z-test/project.service.ts");
/* harmony import */ var _z_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./z-test.component */ "./src/app/z-test/z-test.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start/start.component */ "./src/app/z-test/start/start.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project/project.component */ "./src/app/z-test/project/project.component.ts");
/* harmony import */ var _output_pane_output_pane_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./output-pane/output-pane.component */ "./src/app/z-test/output-pane/output-pane.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./help/help.component */ "./src/app/z-test/help/help.component.ts");
/* harmony import */ var _plot_options_plot_options_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plot-options/plot-options.component */ "./src/app/z-test/plot-options/plot-options.component.ts");
/* harmony import */ var _plot_plot_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./plot/plot.component */ "./src/app/z-test/plot/plot.component.ts");
/* harmony import */ var _bottom_plot_bottom_plot_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bottom-plot/bottom-plot.component */ "./src/app/z-test/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var _export_plots_export_plots_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./export-plots/export-plots.component */ "./src/app/z-test/export-plots/export-plots.component.ts");
/* harmony import */ var _project_model_project_model_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./project-model/project-model.component */ "./src/app/z-test/project-model/project-model.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: 'z-test', component: _z_test_component__WEBPACK_IMPORTED_MODULE_9__["ZTestComponent"] },
];
var ZTestModule = /** @class */ (function () {
    function ZTestModule() {
    }
    ZTestModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _z_test_component__WEBPACK_IMPORTED_MODULE_9__["ZTestComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_10__["StartComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"],
                _output_pane_output_pane_component__WEBPACK_IMPORTED_MODULE_12__["OutputPaneComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_13__["HelpComponent"],
                _plot_options_plot_options_component__WEBPACK_IMPORTED_MODULE_14__["PlotOptionsComponent"],
                _plot_plot_component__WEBPACK_IMPORTED_MODULE_15__["PlotComponent"],
                _bottom_plot_bottom_plot_component__WEBPACK_IMPORTED_MODULE_16__["BottomPlotComponent"],
                _export_plots_export_plots_component__WEBPACK_IMPORTED_MODULE_17__["ExportPlotsComponent"],
                _project_model_project_model_component__WEBPACK_IMPORTED_MODULE_18__["ProjectModelComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _app_common_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"]
            ],
            providers: [
                _z_test_service__WEBPACK_IMPORTED_MODULE_7__["ZTestService"],
                _project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"]
            ],
            entryComponents: [
                _export_plots_export_plots_component__WEBPACK_IMPORTED_MODULE_17__["ExportPlotsComponent"]
            ]
        })
    ], ZTestModule);
    return ZTestModule;
}());



/***/ }),

/***/ "./src/app/z-test/z-test.service.ts":
/*!******************************************!*\
  !*** ./src/app/z-test/z-test.service.ts ***!
  \******************************************/
/*! exports provided: ZTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZTestService", function() { return ZTestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var ZTestService = /** @class */ (function () {
    function ZTestService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/ztests";
    }
    ZTestService.prototype.calculate = function (model) {
        var url = this.apiUrl + "/calc";
        var params = model.params();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.
            post(url, JSON.stringify(params), requestOptions).
            toPromise().
            then(function (response) { return response.json(); }).
            catch(this.handleError);
    };
    ZTestService.prototype.plotData = function (models, ranges, pointsPerPlot) {
        var url = this.apiUrl + "/plotData";
        var params = {
            models: models.map(function (m) { return m.params(); }),
            ranges: ranges
        };
        if (typeof (pointsPerPlot) === 'number') {
            params.points = pointsPerPlot;
        }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.
            post(url, JSON.stringify(params), requestOptions).
            toPromise().
            then(function (response) { return response.json(); }).
            catch(this.handleError);
    };
    ZTestService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ZTestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ZTestService);
    return ZTestService;
}());



/***/ }),

/***/ "./src/app/z-test/z-test.ts":
/*!**********************************!*\
  !*** ./src/app/z-test/z-test.ts ***!
  \**********************************/
/*! exports provided: ZTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZTest", function() { return ZTest; });
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../range */ "./src/app/range.ts");

var ZTest = /** @class */ (function () {
    function ZTest(attribs) {
        this.ciMode = false;
        this.deltaMode = false;
        if (attribs) {
            this.output = attribs.output;
            this.alpha = attribs.alpha;
            this.sigma = attribs.sigma;
            this.delta = attribs.delta;
            this.power = attribs.power;
            this.n = attribs.n;
            this.ci = attribs.ci;
            this.nVsPower = attribs.nVsPower;
            this.nVsDelta = attribs.nVsDelta;
            this.powerVsN = attribs.powerVsN;
            this.powerVsDelta = attribs.powerVsDelta;
            this.deltaVsPower = attribs.deltaVsPower;
            this.deltaVsN = attribs.deltaVsN;
            this.sampDist = attribs.sampDist;
        }
    }
    ZTest.prototype.precisionRange = function () {
        return new _range__WEBPACK_IMPORTED_MODULE_0__["Range"](this.delta - (this.ci / 2), this.delta + (this.ci / 2));
    };
    ZTest.prototype.interpretation = function () {
        var alpha = this.alpha.toFixed(2);
        var sigma = this.sigma.toFixed(2);
        var delta = this.delta.toFixed(2);
        var n = Math.ceil(this.n);
        var power = this.power.toFixed(2);
        var result;
        if (this.output == 'n' || this.output == 'nByCI') {
            result = "\n        We are planning a study of a continuous response variable from matched\n        pairs of study subjects. Prior data indicate that the difference in the\n        response of matched pairs is normally distributed with standard\n        deviation " + sigma + ". If the true difference in the mean response of\n        matched pairs is " + delta + ", we will need to study " + n + " pairs of subjects\n        to be able to reject the null hypothesis that this response difference\n        is zero with probability (power) " + power + ". The Type I error probability\n        associated with this test of this null hypothesis is " + alpha + ".\n      ";
        }
        else if (this.output == 'power') {
            result = "\n        We are planning a study with " + n + " pairs of subjects. Prior data\n        indicate that the difference in the response of matched pairs is\n        normally distributed with standard deviation " + sigma + ". If the true\n        difference in the mean response of matched pairs is " + delta + ", we will\n        be able to reject the null hypothesis that this response difference is\n        zero with probability (power) " + power + ". The Type I error probability\n        associated with this test of this null hypothesis is " + alpha + ".\n      ";
        }
        else if (this.output == 'delta') {
            result = "\n        We are planning a study with " + n + " pairs of subjects. Prior data\n        indicate that the difference in the response of matched pairs is\n        normally distributed with standard deviation " + sigma + ". We will be able\n        to detect a true difference in the mean response of matched pairs of\n        -" + delta + " or " + delta + " with probability (power) " + power + ". The Type I\n        error probability associated with this test of the null hypothesis that\n        this response difference is zero is " + alpha + ".\n      ";
        }
        return result.replace(/\s+/g, " ").trim();
    };
    ZTest.prototype.params = function () {
        var result = {
            output: this.output, alpha: this.alpha, sigma: this.sigma,
            delta: this.delta, power: this.power, n: this.n, ci: this.ci,
            ciMode: this.ciMode, deltaMode: this.deltaMode
        };
        return result;
    };
    ZTest.prototype.shallowClone = function () {
        return Object.assign(new ZTest(), this);
    };
    return ZTest;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:7788",
    baseHref: "/"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/stephej1/Projects/ps/inst/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map