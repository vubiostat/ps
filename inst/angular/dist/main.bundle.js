webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app {\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"container-fluid d-flex flex-column h-100\">\n  <nav class=\"navbar d-flex flex-nowrap flex-row justify-content-between\" style=\"flex: 0 0 auto\">\n    <div class=\"navbar-brand\">\n      <img src=\"assets/ps.jpg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n      Power and Sample Size\n    </div>\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">t-test</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Survival</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Dichotomous</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Regression</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Mantel-Haenszel</a>\n      </li>\n    </ul>\n  </nav>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__t_test_t_test_module__ = __webpack_require__("./src/app/t-test/t-test.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/t-test', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__t_test_t_test_module__["a" /* TTestModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* APP_BASE_HREF */], useValue: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseHref }
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/t-test/abstract-plot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractPlotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Draw;
(function (Draw) {
    Draw[Draw["No"] = 0] = "No";
    Draw[Draw["Yes"] = 1] = "Yes";
    Draw[Draw["Hover"] = 2] = "Hover";
})(Draw || (Draw = {}));
var AbstractPlotComponent = (function () {
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
    AbstractPlotComponent.prototype.getPath = function (data, xName, yName) {
        var _this = this;
        if (xName === void 0) { xName = "x"; }
        if (yName === void 0) { yName = "y"; }
        var xScaleRange = this.xScale.domain().sort(function (a, b) { return a - b; });
        var yScaleRange = this.yScale.domain().sort(function (a, b) { return a - b; });
        var line = __WEBPACK_IMPORTED_MODULE_1_d3__["i" /* line */]().
            x(function (d, i) { return _this.xScale(d[xName]); }).
            y(function (d, i) { return _this.yScale(d[yName]); }).
            defined(function (d, i) {
            var x = d[xName];
            var y = d[yName];
            return typeof (x) === 'number' && typeof (y) == 'number' &&
                x >= xScaleRange[0] && x <= xScaleRange[1] &&
                y >= yScaleRange[0] && y <= yScaleRange[1];
        });
        return line(data);
    };
    AbstractPlotComponent.prototype.setup = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], AbstractPlotComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('fixed-width'),
        __metadata("design:type", Number)
    ], AbstractPlotComponent.prototype, "fixedWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('fixed-height'),
        __metadata("design:type", Number)
    ], AbstractPlotComponent.prototype, "fixedHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('plot'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AbstractPlotComponent.prototype, "plotElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('unit'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AbstractPlotComponent.prototype, "unitElement", void 0);
    return AbstractPlotComponent;
}());



/***/ }),

/***/ "./src/app/t-test/bottom-plot/bottom-plot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".target, .bar {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.drag-disabled {\n  cursor: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/t-test/bottom-plot/bottom-plot.component.html":
/***/ (function(module, exports) {

module.exports = "<svg #plot\n  [style.fontFamily]=\"plotOptions.fontFamily\"\n  [style.fontSize]=\"(plotOptions.fontSize * 18).toString() + 'px'\"\n  [attr.class]=\"name\" [attr.width]=\"fixedWidth\" [attr.height]=\"fixedHeight\"\n  [attr.viewBox]=\"viewBox\">\n\n  <rect #unit x=\"0\" y=\"0\" width=\"1em\" height=\"1em\" stroke=\"none\" fill=\"none\" />\n  <ng-template [ngIf]=\"groups && project\">\n    <text text-anchor=\"middle\"\n      [attr.x]=\"innerWidth / 2 + leftMargin\"\n      [attr.y]=\"height - 5\">\n      Parameter Space\n    </text>\n    <text text-anchor=\"middle\" font-weight=\"bold\"\n      [attr.x]=\"innerWidth / 2 + leftMargin\"\n      [attr.y]=\"(plotOptions.getFontSize() / 2) + 8\">\n      {{title}}\n    </text>\n\n    <!-- alternate groups -->\n    <g *ngFor=\"let group of groups; let i = index; trackBy: trackByIndex\"\n      [attr.transform]=\"translate(leftMargin, topMargin)\">\n\n      <path id=\"{{name}}-group-{{i}}-dist\"\n        [attr.fill]=\"getColor(groups.length - i)\"\n        stroke=\"none\" opacity=\"0.5\" />\n\n      <path id=\"{{name}}-group-{{i}}-center\"\n        [attr.stroke]=\"getColor(groups.length - i)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\" />\n\n      <path id=\"{{name}}-group-{{i}}-left\"\n        [attr.stroke]=\"getColor(groups.length - i)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\" />\n\n      <path id=\"{{name}}-group-{{i}}-right\"\n        [attr.stroke]=\"getColor(groups.length - i)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\" />\n\n      <circle id=\"{{name}}-group-{{i}}-target\"\n        r=\"5\"\n        [attr.fill]=\"getColor(groups.length - i)\" />\n    </g>\n\n    <!-- main group -->\n    <g [attr.transform]=\"translate(leftMargin + targetTranslateOffset, topMargin)\">\n      <path id=\"{{name}}-main-dist\"\n        [attr.fill]=\"getColor(0)\"\n        stroke=\"none\" [attr.opacity]=\"targetDragging ? 0.1 : 0.5\" />\n\n      <path id=\"{{name}}-main-center\"\n        [attr.stroke]=\"getColor(0)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        [attr.opacity]=\"targetDragging ? 0.1 : 0.9\"\n        fill=\"none\" />\n\n      <path #leftBar id=\"{{name}}-main-left\" class=\"bar\"\n        [class.drag-disabled]=\"disableDragCI\"\n        [attr.stroke]=\"getColor(0)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 4\"\n        [attr.opacity]=\"targetDragging ? 0.1 : 0.9\"\n        [attr.transform]=\"translate(barTranslateOffset, 0)\"\n        fill=\"none\"\n        (mouseover)=\"toggleLeftBarInfo(true)\"\n        (mouseout)=\"toggleLeftBarInfo(false)\" />\n\n      <g *ngIf=\"showLeftBarInfo\"\n        [attr.transform]=\"translate(xScale(mainGroup.left + barOffset), yScale(0.5))\">\n        <path id=\"{{name}}-left-box\"\n          stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.9\" />\n        <text id=\"{{name}}-left-coords\" x=\"0\" y=\"-3em\" font-family=\"monospace\" text-anchor=\"middle\">\n          <tspan style=\"white-space: pre\">{{mainGroup.label}}: {{ciWidth() | formatFixed:[mainGroup.left]}}</tspan><tspan x=\"0\" dy=\"1em\" style=\"white-space: pre\">Bound:  {{mainGroup.left | formatFixed:[ciWidth()]}}</tspan>\n        </text>\n      </g>\n\n      <path #rightBar id=\"{{name}}-main-right\" class=\"bar\"\n        [class.drag-disabled]=\"disableDragCI\"\n        [attr.stroke]=\"getColor(0)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 4\"\n        [attr.opacity]=\"targetDragging ? 0.1 : 0.9\"\n        [attr.transform]=\"translate(-barTranslateOffset, 0)\"\n        fill=\"none\"\n        (mouseover)=\"toggleRightBarInfo(true)\"\n        (mouseout)=\"toggleRightBarInfo(false)\" />\n\n      <g *ngIf=\"showRightBarInfo\"\n        [attr.transform]=\"translate(xScale(mainGroup.right - barOffset), yScale(0.5))\">\n        <path id=\"{{name}}-right-box\"\n          stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.9\" />\n        <text id=\"{{name}}-right-coords\" x=\"0\" y=\"-3em\" font-family=\"mono\" text-anchor=\"middle\">\n          <tspan style=\"white-space: pre\">{{mainGroup.label}}: {{ciWidth() | formatFixed:[mainGroup.right]}}</tspan><tspan x=\"0\" dy=\"1em\" style=\"white-space: pre\">Bound:  {{mainGroup.right | formatFixed:[ciWidth()]}}</tspan>\n        </text>\n      </g>\n\n      <g *ngIf=\"showTargetInfo\"\n        [attr.transform]=\"translate(xScale(mainGroup.target), yScale(0.5))\">\n        <path id=\"{{name}}-target-box\"\n          stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.9\" />\n        <text id=\"{{name}}-target-coords\" x=\"0\" y=\"-1.5em\" font-family=\"mono\" text-anchor=\"middle\">\n          <tspan style=\"white-space: pre\">&delta;: {{mainGroup.target + targetOffset | formatFixed:[]}}</tspan>\n        </text>\n      </g>\n\n      <circle #target id=\"{{name}}-main-target\" class=\"target\"\n        [class.drag-disabled]=\"disableDragTarget\"\n        r=\"5\"\n        [attr.fill]=\"getColor(0)\"\n        (mouseover)=\"toggleTargetInfo(true)\"\n        (mouseout)=\"toggleTargetInfo(false)\" />\n    </g>\n\n    <circle r=\"5\"\n      [attr.cx]=\"xScale(0)\"\n      [attr.cy]=\"yScale(0.5)\"\n      [attr.transform]=\"translate(leftMargin, topMargin)\"\n      fill=\"darkseagreen\" />\n\n    <g id=\"{{name}}-bottom-axis\" [attr.transform]=\"translate(leftMargin, innerHeight + topMargin)\"></g>\n  </ng-template>\n</svg>\n"

/***/ }),

/***/ "./src/app/t-test/bottom-plot/bottom-plot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomPlotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3__ = __webpack_require__("./node_modules/d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract_plot_component__ = __webpack_require__("./src/app/t-test/abstract-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project__ = __webpack_require__("./src/app/t-test/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plot_options_service__ = __webpack_require__("./src/app/t-test/plot-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__palette_service__ = __webpack_require__("./src/app/t-test/palette.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








;
var CIBar;
(function (CIBar) {
    CIBar[CIBar["Left"] = 0] = "Left";
    CIBar[CIBar["Right"] = 1] = "Right";
})(CIBar || (CIBar = {}));
;
var BottomPlotComponent = (function (_super) {
    __extends(BottomPlotComponent, _super);
    function BottomPlotComponent(plotOptions, palette) {
        var _this = _super.call(this, plotOptions, palette) || this;
        _this.plotOptions = plotOptions;
        _this.palette = palette;
        _this.disableDragTarget = false;
        _this.disableDragCI = false;
        _this.modelChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.leftMargin = 10;
        _this.rightMargin = 10;
        _this.topMargin = 50;
        _this.bottomMargin = 50;
        _this.viewBox = "0 0 0 0";
        _this.needDraw = __WEBPACK_IMPORTED_MODULE_4__abstract_plot_component__["b" /* Draw */].No;
        // target dragging
        _this.targetOffset = 0;
        _this.targetTranslateOffset = 0;
        _this.targetDragging = false;
        _this.targetWasDragging = false;
        _this.showTargetInfo = false;
        // bar dragging
        _this.barOffset = 0;
        _this.barTranslateOffset = 0;
        _this.barDragging = false;
        _this.barWasDragging = false;
        _this.showLeftBarInfo = false;
        _this.showRightBarInfo = false;
        return _this;
    }
    BottomPlotComponent.prototype.ngOnChanges = function (changes) {
        this.setup();
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
                this.needDraw = __WEBPACK_IMPORTED_MODULE_4__abstract_plot_component__["b" /* Draw */].Hover;
            }
        }
    };
    BottomPlotComponent.prototype.toggleLeftBarInfo = function (value) {
        if (!this.targetDragging && !this.barDragging) {
            this.showLeftBarInfo = value;
            if (value) {
                this.needDraw = __WEBPACK_IMPORTED_MODULE_4__abstract_plot_component__["b" /* Draw */].Hover;
            }
        }
    };
    BottomPlotComponent.prototype.toggleRightBarInfo = function (value) {
        if (!this.targetDragging && !this.barDragging) {
            this.showRightBarInfo = value;
            if (value) {
                this.needDraw = __WEBPACK_IMPORTED_MODULE_4__abstract_plot_component__["b" /* Draw */].Hover;
            }
        }
    };
    BottomPlotComponent.prototype.getColor = function (index, invert) {
        if (invert === void 0) { invert = true; }
        if (invert) {
            index = this.groups.length - index;
        }
        return this.palette.getColor(index, this.plotOptions.paletteTheme);
    };
    BottomPlotComponent.prototype.trackByIndex = function (index, thing) {
        return index;
    };
    BottomPlotComponent.prototype.setupDimensions = function () {
        // margin
        this.topMargin = this.plotOptions.getFontSize() + 20;
        this.bottomMargin = 10 + this.plotOptions.getFontSize() +
            this.plotOptions.getAxisLineWidth() +
            (this.plotOptions.getAxisFontSize() / 2) + 9; // x axis tick (font + tick)
        this.leftMargin = 10;
        this.rightMargin = 10;
        // dimensions
        if (this.fixedWidth) {
            this.width = this.fixedWidth;
        }
        else {
            this.width = this.getDimension('width');
        }
        if (this.fixedHeight) {
            this.height = this.fixedHeight;
        }
        else {
            this.height = this.getDimension('height');
        }
        this.viewBox = "0 0 " + this.width + " " + this.height;
        this.innerWidth = this.width - this.leftMargin - this.rightMargin;
        this.innerHeight = this.height - this.topMargin - this.bottomMargin;
    };
    BottomPlotComponent.prototype.setup = function () {
        if (!this.project) {
            return;
        }
        this.setupTitle();
        this.setupDimensions();
        this.setupPlotData();
        this.setupScales();
        this.setupGroups();
        this.resetDragging();
        this.needDraw = __WEBPACK_IMPORTED_MODULE_4__abstract_plot_component__["b" /* Draw */].Yes;
    };
    BottomPlotComponent.prototype.setupTitle = function () {
        this.title = "Precision (95% Confidence Interval) vs. Effect Size";
    };
    BottomPlotComponent.prototype.setupPlotData = function () {
        this.plotData = this.project.models.map(function (m) { return m.sampDist; });
    };
    BottomPlotComponent.prototype.setupScales = function () {
        var pSpaceRange = this.project.pSpaceRange;
        this.xScale = __WEBPACK_IMPORTED_MODULE_3_d3__["j" /* scaleLinear */]().
            domain(pSpaceRange.toArray()).
            range([0, this.innerWidth]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_3_d3__["j" /* scaleLinear */]().
            domain([0, 0.7]).
            range([0, this.innerHeight]);
        var sampDistExtent = this.plotData.reduce(function (arr, sampDist) {
            var extent = __WEBPACK_IMPORTED_MODULE_3_d3__["g" /* extent */](sampDist, function (d) { return d.y; });
            return __WEBPACK_IMPORTED_MODULE_3_d3__["g" /* extent */](arr.concat(extent));
        }, []);
        this.yScaleSD = __WEBPACK_IMPORTED_MODULE_3_d3__["j" /* scaleLinear */]().
            domain(sampDistExtent.reverse()).
            range([0, this.yScale(0.5)]).
            clamp(true);
    };
    BottomPlotComponent.prototype.setupGroups = function () {
        var _this = this;
        this.groups = this.project.models.map(function (model, i) {
            var range = model.precisionRange;
            // main lines
            var leftLimit = range.min;
            var leftPath = _this.getPath([
                { x: leftLimit, y: 0.40 },
                { x: leftLimit, y: 0.60 }
            ]);
            var rightLimit = range.max;
            var rightPath = _this.getPath([
                { x: rightLimit, y: 0.40 },
                { x: rightLimit, y: 0.60 }
            ]);
            var centerPath = _this.getPath([
                { x: leftLimit, y: 0.5 },
                { x: rightLimit, y: 0.5 }
            ]);
            // sample distribution
            var distPath = _this.getArea(_this.plotData[i], 'x', 'y');
            var result = {
                leftPath: leftPath,
                centerPath: centerPath,
                rightPath: rightPath,
                distPath: distPath,
                left: leftLimit,
                target: model.delta,
                right: rightLimit,
                label: "95% CI"
            };
            return result;
        }).reverse();
        this.mainGroup = this.groups.pop();
    };
    BottomPlotComponent.prototype.resetDragging = function () {
        this.targetTranslateOffset = this.targetOffset = 0;
        this.targetWasDragging = this.targetDragging;
        this.targetDragging = false;
        this.barTranslateOffset = this.barOffset = 0;
        this.barWasDragging = this.barDragging;
        this.barDragging = false;
    };
    BottomPlotComponent.prototype.draw = function () {
        var _this = this;
        if (this.needDraw == __WEBPACK_IMPORTED_MODULE_4__abstract_plot_component__["b" /* Draw */].No) {
            return;
        }
        this.drawInfoBox('left');
        this.drawInfoBox('right');
        this.drawInfoBox('target');
        if (this.needDraw == __WEBPACK_IMPORTED_MODULE_4__abstract_plot_component__["b" /* Draw */].Hover) {
            this.needDraw = __WEBPACK_IMPORTED_MODULE_4__abstract_plot_component__["b" /* Draw */].No;
            return;
        }
        var t = __WEBPACK_IMPORTED_MODULE_3_d3__["k" /* select */](this.plotElement.nativeElement).transition();
        // axes (drawn by d3)
        var xAxis = __WEBPACK_IMPORTED_MODULE_3_d3__["b" /* axisBottom */](this.xScale).ticks(Math.floor(this.innerWidth / 75));
        t.select("#" + this.name + "-bottom-axis").
            call(xAxis).
            attr("font-size", 15 * this.plotOptions.axisFontSize).
            attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);
        // alternate groups
        this.groups.forEach(function (group, index) {
            var prefix = "#" + _this.name + "-group-" + index;
            t.select(prefix + "-dist").attr('d', group.distPath);
            t.select(prefix + "-center").attr('d', group.centerPath);
            t.select(prefix + "-left").attr('d', group.leftPath);
            t.select(prefix + "-right").attr('d', group.rightPath);
            t.select(prefix + "-target").
                attr('cx', _this.xScale(group.target)).
                attr('cy', _this.yScale(0.5));
        });
        // main group
        if (this.targetWasDragging || this.barWasDragging) {
            // don't use animations if user was dragging things
            t = __WEBPACK_IMPORTED_MODULE_3_d3__["k" /* select */](this.plotElement.nativeElement);
        }
        var prefix = "#" + this.name + "-main";
        t.select(prefix + "-dist").attr('d', this.mainGroup.distPath);
        t.select(prefix + "-center").attr('d', this.mainGroup.centerPath);
        t.select(prefix + "-left").attr('d', this.mainGroup.leftPath);
        t.select(prefix + "-right").attr('d', this.mainGroup.rightPath);
        t.select(prefix + "-target").
            attr('cx', this.xScale(this.mainGroup.target)).
            attr('cy', this.yScale(0.5));
        // make target point draggable
        var targetElt = this.targetElement.nativeElement;
        var target = __WEBPACK_IMPORTED_MODULE_3_d3__["k" /* select */](targetElt);
        var targetDrag = __WEBPACK_IMPORTED_MODULE_3_d3__["e" /* drag */]().
            container(targetElt.parentNode.parentNode).
            on("start", this.dragTargetStart.bind(this)).
            on("drag", this.dragTarget.bind(this)).
            on("end", this.dragTargetEnd.bind(this));
        target.call(targetDrag);
        // make left bar draggable
        var leftBarElt = this.leftBarElement.nativeElement;
        var leftBar = __WEBPACK_IMPORTED_MODULE_3_d3__["k" /* select */](leftBarElt);
        var leftBarDrag = __WEBPACK_IMPORTED_MODULE_3_d3__["e" /* drag */]().
            container(leftBarElt.parentNode.parentNode).
            on("start", this.dragBarStart.bind(this, CIBar.Left)).
            on("drag", this.dragBar.bind(this, CIBar.Left)).
            on("end", this.dragBarEnd.bind(this, CIBar.Left));
        leftBar.call(leftBarDrag);
        // make right bar draggable
        var rightBarElt = this.rightBarElement.nativeElement;
        var rightBar = __WEBPACK_IMPORTED_MODULE_3_d3__["k" /* select */](rightBarElt);
        var rightBarDrag = __WEBPACK_IMPORTED_MODULE_3_d3__["e" /* drag */]().
            container(rightBarElt.parentNode.parentNode).
            on("start", this.dragBarStart.bind(this, CIBar.Right)).
            on("drag", this.dragBar.bind(this, CIBar.Right)).
            on("end", this.dragBarEnd.bind(this, CIBar.Right));
        rightBar.call(rightBarDrag);
        this.needDraw = __WEBPACK_IMPORTED_MODULE_4__abstract_plot_component__["b" /* Draw */].No;
    };
    BottomPlotComponent.prototype.drawInfoBox = function (which) {
        var svg = __WEBPACK_IMPORTED_MODULE_3_d3__["k" /* select */](this.plotElement.nativeElement);
        var box = svg.select("#" + this.name + "-" + which + "-box");
        var coords = svg.select("#" + this.name + "-" + which + "-coords");
        if (box.size() > 0 && coords.size() > 0) {
            var dim = coords.node().getBBox();
            var left = dim.x - 5, right = dim.x + dim.width + 5;
            var unit = dim.width / 16;
            var lmid = left + (7 * unit) + 5, rmid = left + (9 * unit) + 5;
            var mid = left + (8 * unit) + 5;
            var top_1 = dim.y - 5, bottom = dim.y + dim.height + 5;
            box.attr("d", __WEBPACK_IMPORTED_MODULE_3_d3__["i" /* line */]()([
                [left, top_1], [right, top_1], [right, bottom],
                [rmid, bottom], [mid, bottom + 5], [lmid, bottom],
                [left, bottom], [left, top_1]
            ]));
        }
    };
    BottomPlotComponent.prototype.ciWidth = function () {
        return Math.abs((this.mainGroup.right - this.barOffset) - (this.mainGroup.left + this.barOffset));
    };
    BottomPlotComponent.prototype.getArea = function (points, xName, yName) {
        var _this = this;
        var area = __WEBPACK_IMPORTED_MODULE_3_d3__["a" /* area */]().
            x(function (d, i) { return _this.xScale(d[xName]); }).
            y0(this.yScaleSD(0)).
            y1(function (d, i) { return _this.yScaleSD(d[yName]); });
        return area(points);
    };
    BottomPlotComponent.prototype.dragTargetStart = function () {
        if (this.disableDragTarget)
            return;
        this.targetDragging = true;
    };
    BottomPlotComponent.prototype.dragTarget = function (event) {
        if (this.disableDragTarget)
            return;
        var mouseX = __WEBPACK_IMPORTED_MODULE_3_d3__["f" /* event */].x - this.leftMargin;
        var x = this.xScale.invert(mouseX);
        if (x >= 0 && x < 0.1) {
            x = 0.1;
            mouseX = this.xScale(x);
        }
        else if (x < 0 && x > -0.1) {
            x = -0.1;
            mouseX = this.xScale(x);
        }
        var targetX = this.xScale(this.mainGroup.target);
        this.targetTranslateOffset = mouseX - targetX;
        this.targetOffset = x - this.mainGroup.target;
    };
    BottomPlotComponent.prototype.dragTargetEnd = function () {
        var _this = this;
        if (this.disableDragTarget)
            return;
        if (this.project) {
            var newDelta = this.mainGroup.target + this.targetOffset;
            this.project.updateModel(0, 'delta', newDelta).then(function () {
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
        var mouseX = __WEBPACK_IMPORTED_MODULE_3_d3__["f" /* event */].x - this.leftMargin;
        var x = this.xScale.invert(mouseX);
        switch (which) {
            case CIBar.Left:
                var leftBarX = this.xScale(this.mainGroup.left);
                this.barTranslateOffset = mouseX - leftBarX;
                this.barOffset = x - this.mainGroup.left;
                break;
            case CIBar.Right:
                var rightBarX = this.xScale(this.mainGroup.right);
                this.barTranslateOffset = rightBarX - mouseX;
                this.barOffset = this.mainGroup.right - x;
                break;
        }
        var centerPath = this.getPath([
            { x: this.mainGroup.left + this.barOffset, y: 0.5 },
            { x: this.mainGroup.right - this.barOffset, y: 0.5 }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_d3__["k" /* select */]("#" + this.name + "-main-center").attr('d', centerPath);
    };
    BottomPlotComponent.prototype.dragBarEnd = function (which) {
        var _this = this;
        if (this.disableDragCI)
            return;
        if (this.project) {
            var model = this.project.getModel(0);
            this.project.updateModel(0, 'ci', this.ciWidth()).then(function () {
                _this.modelChanged.emit();
            });
        }
        this.showLeftBarInfo = false;
        this.showRightBarInfo = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('project'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__project__["a" /* Project */])
    ], BottomPlotComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('disable-drag-target'),
        __metadata("design:type", Object)
    ], BottomPlotComponent.prototype, "disableDragTarget", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('disable-drag-ci'),
        __metadata("design:type", Object)
    ], BottomPlotComponent.prototype, "disableDragCI", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BottomPlotComponent.prototype, "modelChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('target'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], BottomPlotComponent.prototype, "targetElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('leftBar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], BottomPlotComponent.prototype, "leftBarElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('rightBar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], BottomPlotComponent.prototype, "rightBarElement", void 0);
    BottomPlotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 't-test-bottom-plot',
            template: __webpack_require__("./src/app/t-test/bottom-plot/bottom-plot.component.html"),
            styles: [__webpack_require__("./src/app/t-test/bottom-plot/bottom-plot.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__plot_options_service__["a" /* PlotOptionsService */],
            __WEBPACK_IMPORTED_MODULE_7__palette_service__["a" /* PaletteService */]])
    ], BottomPlotComponent);
    return BottomPlotComponent;
}(__WEBPACK_IMPORTED_MODULE_4__abstract_plot_component__["a" /* AbstractPlotComponent */]));



/***/ }),

/***/ "./src/app/t-test/ceil.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CeilPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CeilPipe = (function () {
    function CeilPipe() {
    }
    CeilPipe.prototype.transform = function (value, args) {
        return Math.ceil(value);
    };
    CeilPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'ceil'
        })
    ], CeilPipe);
    return CeilPipe;
}());



/***/ }),

/***/ "./src/app/t-test/draggable-dialog/draggable-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog {\n  display: block;\n  position: absolute;\n  z-index: 100;\n  background-color: white;\n  border: 1px solid #888;\n  border-radius: 10px;\n  box-shadow: 5px 5px 25px #888;\n  top: 20px;\n  left: 20px;\n  width: 25vw;\n  min-width: 300px;\n}\n\n.dialog .header {\n  font-size: larger;\n  font-weight: bold;\n  background-color: #e5e5e5;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 10px 10px 0 0;\n  cursor: move;\n}\n\n.dialog .close {\n  float: right;\n  margin: 5px;\n}\n\n.dialog .content {\n  overflow: auto;\n  height: 50vh;\n  padding: 5px;\n  margin: 0 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/t-test/draggable-dialog/draggable-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div #main *ngIf=\"enabled\" class=\"dialog\"\n  [style.top]=\"yOffset ? yOffset + 'px' : startYOffset\"\n  [style.left]=\"xOffset ? xOffset + 'px' : startXOffset\">\n  <div class=\"header\"\n    (mousedown)=\"mousedown($event)\" (mouseup)=\"mouseup($event)\"\n    (mousemove)=\"mousemove($event)\">\n    {{title}}\n    <button type=\"button\" class=\"close fa fa-times-circle\" (click)=\"close()\"></button>\n  </div>\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/t-test/draggable-dialog/draggable-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DraggableDialogComponent = (function () {
    function DraggableDialogComponent() {
        this.startEnabled = false;
        this.startXOffset = "20px";
        this.startYOffset = "20px";
        this.onDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DraggableDialogComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DraggableDialogComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('start-enabled'),
        __metadata("design:type", Object)
    ], DraggableDialogComponent.prototype, "startEnabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('start-x-offset'),
        __metadata("design:type", Object)
    ], DraggableDialogComponent.prototype, "startXOffset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('start-y-offset'),
        __metadata("design:type", Object)
    ], DraggableDialogComponent.prototype, "startYOffset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])('drag-start'),
        __metadata("design:type", Object)
    ], DraggableDialogComponent.prototype, "onDragStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])('drag-end'),
        __metadata("design:type", Object)
    ], DraggableDialogComponent.prototype, "onDragEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('main'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DraggableDialogComponent.prototype, "mainElement", void 0);
    DraggableDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 't-test-draggable-dialog',
            template: __webpack_require__("./src/app/t-test/draggable-dialog/draggable-dialog.component.html"),
            styles: [__webpack_require__("./src/app/t-test/draggable-dialog/draggable-dialog.component.css")]
        })
    ], DraggableDialogComponent);
    return DraggableDialogComponent;
}());



/***/ }),

/***/ "./src/app/t-test/export-plots/export-plots.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.modal-body {\n}\n\n.modal-body /deep/ a.nav-link {\n  border-color: #bbb #bbb #888;\n  background-color: #eee;\n}\n\n.modal-body /deep/ a.nav-link:hover {\n  border-color: #888;\n  background-color: #f5f5f5;\n  color: #0275d8;\n}\n\n.modal-body /deep/ a.nav-link.active {\n  border-color: #888 #888 #fff;\n  background-color: #fff;\n}\n\n.modal-body /deep/ a.nav-link.active:hover {\n  color: #464a4c;\n}\n\n.modal-body /deep/ ngb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.modal-body /deep/ ul.nav-tabs {\n  /*display: flex;*/\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  border-bottom: 1px solid #888;\n}\n\n.modal-body /deep/ .tab-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.modal-body /deep/ .tab-pane {\n  border: 1px solid #888;\n  border-top: 0;\n  overflow: auto;\n  max-height: 73vh;\n}\n\n.modal-body /deep/ .tab-pane.active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background: white;\n}\n\n.modal-body .left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 20%;\n  border-right: 1px solid #888;\n  padding: 10px;\n}\n\n.modal-body .right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-left: 10px;\n  overflow: auto;\n  padding: 10px;\n}\n\n.modal-footer {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/t-test/export-plots/export-plots.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Export graphs</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body grow-vert h-100\">\n  <div class=\"d-flex flex-column h-100\">\n    <ngb-tabset [destroyOnHide]=\"false\">\n      <ngb-tab [title]=\"topLeftTitle\">\n        <ng-template ngbTabContent>\n          <div class=\"left\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"\n                  [(ngModel)]=\"includeTopLeft\">\n                  Export this graph\n              </label>\n            </div>\n            <ng-template [ngIf]=\"includeTopLeft\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topLeftDropLines\">\n                    Show drop lines\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topLeftTarget\">\n                    Show target\n                </label>\n              </div>\n              <label>\n                Dimensions\n                <select class=\"form-control\" name=\"topLeftDim\"\n                  [(ngModel)]=\"topLeftDim\" (ngModelChange)=\"setDim('topLeft', $event)\">\n                  <option value=\"640x480\">640 by 480</option>\n                  <option value=\"800x600\">800 by 600</option>\n                  <option value=\"1024x768\">1024 by 768</option>\n                  <option value=\"other\">Custom</option>\n                </select>\n              </label>\n              <div *ngIf=\"topLeftDim == 'other'\" class=\"form-group\">\n                <label>\n                  Width\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topLeftWidth\">\n                </label>\n              </div>\n              <div *ngIf=\"topLeftDim == 'other'\" class=\"form-group\">\n                <label>\n                  Height\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topLeftHeight\">\n                </label>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"right\">\n            <t-test-plot #topLeftPlot name=\"top-left-export\"\n              [project]=\"project\" [hover-disabled]=\"true\"\n              [disable-drag]=\"true\"\n              [hide-drop-lines]=\"!topLeftDropLines\"\n              [hide-target]=\"!topLeftTarget\"\n              [fixed-width]=\"topLeftWidth\" [fixed-height]=\"topLeftHeight\"\n              [legend-x-offset]=\"topLeftLegendXOffset\"\n              [legend-y-offset]=\"topLeftLegendYOffset\">\n            </t-test-plot>\n          </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab [title]=\"topRightTitle\">\n        <ng-template ngbTabContent>\n          <div class=\"left\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"\n                  [(ngModel)]=\"includeTopRight\">\n                  Export this graph\n              </label>\n            </div>\n            <ng-template [ngIf]=\"includeTopRight\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topRightDropLines\">\n                    Show drop lines\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topRightTarget\">\n                    Show target\n                </label>\n              </div>\n              <label>\n                Dimensions\n                <select class=\"form-control\" name=\"topRightDim\"\n                  [(ngModel)]=\"topRightDim\" (ngModelChange)=\"setDim('topRight', $event)\">\n                  <option value=\"640x480\">640 by 480</option>\n                  <option value=\"800x600\">800 by 600</option>\n                  <option value=\"1024x768\">1024 by 768</option>\n                  <option value=\"other\">Custom</option>\n                </select>\n              </label>\n              <div *ngIf=\"topRightDim == 'other'\" class=\"form-group\">\n                <label>\n                  Width\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topRightWidth\">\n                </label>\n              </div>\n              <div *ngIf=\"topRightDim == 'other'\" class=\"form-group\">\n                <label>\n                  Height\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topRightHeight\">\n                </label>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"right\">\n            <t-test-plot #topRightPlot name=\"top-right-export\"\n              [project]=\"project\" [hover-disabled]=\"true\"\n              [disable-drag]=\"true\"\n              [hide-drop-lines]=\"!topRightDropLines\"\n              [hide-target]=\"!topRightTarget\"\n              [fixed-width]=\"topRightWidth\" [fixed-height]=\"topRightHeight\"\n              [legend-x-offset]=\"topRightLegendXOffset\"\n              [legend-y-offset]=\"topRightLegendYOffset\">\n            </t-test-plot>\n          </div>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab [title]=\"bottomTitle\">\n        <ng-template ngbTabContent>\n          <div class=\"left\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"\n                  [(ngModel)]=\"includeBottom\">\n                  Export this graph\n              </label>\n            </div>\n            <ng-template [ngIf]=\"includeBottom\">\n              <label>\n                Dimensions\n                <select class=\"form-control\" name=\"bottomDim\"\n                  [(ngModel)]=\"bottomDim\" (ngModelChange)=\"setDim('bottom', $event)\">\n                  <option value=\"640x160\">640 by 160</option>\n                  <option value=\"800x200\">800 by 200</option>\n                  <option value=\"1024x256\">1024 by 256</option>\n                  <option value=\"other\">Custom</option>\n                </select>\n              </label>\n              <div *ngIf=\"bottomDim == 'other'\" class=\"form-group\">\n                <label>\n                  Width\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"bottomWidth\">\n                </label>\n              </div>\n              <div *ngIf=\"bottomDim == 'other'\" class=\"form-group\">\n                <label>\n                  Height\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"bottomHeight\">\n                </label>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"right\">\n            <t-test-bottom-plot #bottomPlot name=\"bottom-export\"\n              [project]=\"project\"\n              [disable-drag-target]=\"true\" [disable-drag-ci]=\"true\"\n              [fixed-width]=\"bottomWidth\" [fixed-height]=\"bottomHeight\">\n            </t-test-bottom-plot>\n          </div>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <div class=\"d-flex-inline flex-row\">\n    <div class=\"form-inline\">\n      <label for=\"export-image-format\" class=\"mr-sm-2\">Image format:</label>\n      <select id=\"export-image-format\" class=\"form-control\" [(ngModel)]=\"imageFormat\">\n        <option *ngFor=\"let format of imageFormats\">{{format}}</option>\n      </select>\n    </div>\n  </div>\n  <p>\n    The graphs you have chosen will be packaged in a ZIP file.\n    <a #downloadLink style=\"display: none\"></a>\n  </p>\n  <div class=\"d-flex flex-row align-items-center\">\n    <button type=\"button\" class=\"btn btn-secondary m-1\" (click)=\"save()\"\n      [disabled]=\"!includeTopLeft && !includeTopRight && !includeBottom\">\n      <i class=\"fa fa-floppy-o\"></i> Save\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary m-1\" (click)=\"cancel()\">\n      <i class=\"fa fa-circle-x\"></i> Close\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/t-test/export-plots/export-plots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportPlotsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project__ = __webpack_require__("./src/app/t-test/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__ = __webpack_require__("./src/app/t-test/plot/plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bottom_plot_bottom_plot_component__ = __webpack_require__("./src/app/t-test/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__export_service__ = __webpack_require__("./src/app/t-test/export.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExportPlotsComponent = (function () {
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
        this.imageFormat = "PNG";
    }
    ExportPlotsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exportService.formats().then(function (response) {
            _this.imageFormats = response.formats;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('project'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */])
    ], ExportPlotsComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('top-left-legend-x-offset'),
        __metadata("design:type", Number)
    ], ExportPlotsComponent.prototype, "topLeftLegendXOffset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('top-left-legend-y-offset'),
        __metadata("design:type", Number)
    ], ExportPlotsComponent.prototype, "topLeftLegendYOffset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('top-right-legend-x-offset'),
        __metadata("design:type", Number)
    ], ExportPlotsComponent.prototype, "topRightLegendXOffset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('top-right-legend-y-offset'),
        __metadata("design:type", Number)
    ], ExportPlotsComponent.prototype, "topRightLegendYOffset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('topLeftPlot'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__["a" /* PlotComponent */])
    ], ExportPlotsComponent.prototype, "topLeftPlot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('topRightPlot'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__["a" /* PlotComponent */])
    ], ExportPlotsComponent.prototype, "topRightPlot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('bottomPlot'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */])
    ], ExportPlotsComponent.prototype, "bottomPlot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('downloadLink'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ExportPlotsComponent.prototype, "downloadLink", void 0);
    ExportPlotsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 't-test-export-plots',
            template: __webpack_require__("./src/app/t-test/export-plots/export-plots.component.html"),
            styles: [__webpack_require__("./src/app/t-test/export-plots/export-plots.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_5__export_service__["a" /* ExportService */]])
    ], ExportPlotsComponent);
    return ExportPlotsComponent;
}());



/***/ }),

/***/ "./src/app/t-test/export.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExportService = (function () {
    function ExportService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/export";
    }
    ExportService.prototype.formats = function () {
        var url = this.apiUrl + "/formats";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.
            get(url, options).
            toPromise().
            then(function (response) { return response.json(); }).
            catch(this.handleError);
    };
    ExportService.prototype.plots = function (format, plots) {
        var url = this.apiUrl + "/plots";
        var params = { format: format, plots: plots };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ExportService);
    return ExportService;
}());



/***/ }),

/***/ "./src/app/t-test/format-fixed.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatFixedPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatFixedPipe = (function () {
    function FormatFixedPipe() {
    }
    FormatFixedPipe.prototype.transform = function (value, others) {
        var widths = others.concat(value).map(function (v) {
            var result = Math.ceil(Math.log10(Math.abs(v)));
            if (v < 0)
                result++;
            return result;
        });
        var width = Math.max.apply(undefined, widths) + 3;
        var result = value.toFixed(2);
        while (result.length < width) {
            result = ' ' + result;
        }
        return result;
    };
    FormatFixedPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'formatFixed'
        })
    ], FormatFixedPipe);
    return FormatFixedPipe;
}());



/***/ }),

/***/ "./src/app/t-test/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h5 {\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/t-test/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"topic == 'overview'\">\n  <h5>Introduction</h5>\n  <p>\n    PS is a program for performing power and sample size calculations. You are\n    using a web-enabled beta-test version of the program, where we are actively\n    working on the interactive user interface. Currently, it can only be used\n    for paired t-tests but it will be expanded for use in studies with\n    dichotomous, continuous, survival response and other data.\n  </p>\n  <h5>Program Output</h5>\n  <p>\n    The program can determine the sample size needed to detect a specified\n    alternative hypothesis with the required power, the power with which a\n    specific alternative hypothesis can be detected with a given sample size,\n    or the specific alternative hypotheses that can be detected with a given\n    power and sample size. It also gives the 95% confidence interval for the\n    test statistic under the specified alternative hypothesis as a measure of\n    the precision of the test statistic.\n  </p>\n  <h5>Interactive Help</h5>\n  <p>\n    Click on any question-mark icon for help or pull-down menu to determine\n    the needed information. In the Start tab, choose one of sample size,\n    power, or detectable difference  and then complete the other fields that\n    appear. Hover over the i icon for information on what is needed in each\n    field. Then click the calculate button. A new tab will appear with\n    sliders for altering the input variables, the desired output variable and\n    various graphs.\n  </p>\n  <h5>Graphical Output</h5>\n  <p>\n    The graphs that can be generated are sample size vs. power, sample size\n    vs. the detectable alternative hypothesis, power vs. sample size, and\n    power vs. the detectable alternative hypothesis.  The y-axes of these\n    graphs are always show the output variable. In addition, a graph of\n    precision vs effect size is always given.  The red dot on the top two\n    graphs can be dragged to enhance the users intuition on how the input and\n    output variables interact.\n  </p>\n  <h5>Interpretation</h5>\n  <p>\n    The output also includes text that describes the power or sample size\n    calculation in English, which may be a useful starting point for a\n    description in a grant application.\n  </p>\n  <h5>Options gear wheel</h5>\n  <p>\n    Click on this icon to change the point size, line width and other graph\n    options.\n  </p>\n  <p>\n    <img src=\"assets/cc.png\"> &copy; William D. Dupont, Jeffrey D. Blume, W.\n    Dale Plummer, Jeremy Stephens 2017\n  </p>\n  <p>\n    Use of this program is restricted by a Creative Commons Attribution\n    Non-Commercial Share Alike license. See\n    <a href=\"https://creativecommons.org/licenses\">https://creativecommons.org/licenses</a>\n    for details. We are grateful for support from Dr. Gordon R. Bernard and\n    the Vanderbilt Institute for Clinical and Translational Research.\n  </p>\n</ng-template>\n<ng-template [ngIf]=\"topic == 'start'\">\n  <p>Select one of the following:</p>\n  <h5>Sample size</h5>\n  <p>\n    For independent t-tests this is the number of experimental patients that\n    must be studied to detect a true difference in population means &delta;\n    with Type I error probability &alpha; given a standard deviation &sigma;\n    and <em>m</em> controls per experimental patient. For paired t-tests it\n    is the number of pairs of patients needed to detect a true difference in\n    population means &delta; with Type I error probability &alpha; given a\n    standard deviation &sigma;.\n  </p>\n  <h5>Power</h5>\n  <p>\n    For independent studies it is the probability of rejecting the null\n    hypothesis with Type I error probability &alpha; given the specified\n    sample size, a standard deviation &sigma; and a control/experimental\n    patient ratio <em>m</em> when the true difference in population means is\n    &delta;. For paired studies it is the probability of rejecting the null\n    hypothesis with Type I error probability &alpha; given the specified\n    sample size, a standard deviation &sigma; when the true difference in\n    population means is &delta;.\n  </p>\n  <h5>Detectable alternative</h5>\n  <p>\n    A difference in population means that can be detected with the specified\n    power and Type I error probability &alpha; given a standard deviation\n    &sigma;, and the specified sample size.\n  </p>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/t-test/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], HelpComponent.prototype, "topic", void 0);
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 't-test-help',
            template: __webpack_require__("./src/app/t-test/help/help.component.html"),
            styles: [__webpack_require__("./src/app/t-test/help/help.component.css")]
        })
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/t-test/output-pane/output-pane.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".plot {\n  height: 80%;\n  /*min-height: 500px;*/\n  position: relative;\n}\n.without-footer {\n  height: 100%;\n}\n\ndiv.show-footer {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n}\n\n.plot /deep/ svg.top-left {\n  position: absolute;\n  left: 0;\n  width: 50%;\n  height: 70%;\n}\n.plot.without-footer /deep/ svg.top-left {\n  height: 68%;\n}\n.plot /deep/ svg.top-right {\n  position: absolute;\n  right: 0;\n  width: 50%;\n  height: 70%;\n}\n.plot.without-footer /deep/ svg.top-right {\n  height: 68%;\n}\n.plot /deep/ svg.bottom {\n  position: absolute;\n  top: 72%;\n  height: 28%;\n  width: 100%;\n}\n.plot.without-footer /deep/ svg.bottom {\n  top: 70%;\n  height: 26%;\n}\n\n.output-footer {\n  position: relative;\n  background-color: #e5e5e5;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  /*padding: 10px 20px;*/\n  /*text-align: justify;*/\n  /*overflow: auto;*/\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.output-footer /deep/ a.nav-link {\n  /*border-color: #bbb #bbb #888;*/\n  /*background-color: #eee;*/\n  border-color: #868e96;\n  background-color: #868e96;\n  color: white;\n}\n\n.output-footer /deep/ a.nav-link:hover {\n  /*border-color: #888;*/\n  /*background-color: #f5f5f5;*/\n  /*color: #0275d8;*/\n}\n\n.output-footer /deep/ a.nav-link.active {\n  /*border-color: #888 #888 #fff;*/\n  /*background-color: #fff;*/\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.output-footer /deep/ a.nav-link.active:hover {\n  /*color: #464a4c;*/\n}\n\n.output-footer /deep/ ngb-tabset {\n  /*display: flex;*/\n  /*flex-direction: column;*/\n  /*flex: auto;*/\n  /*width: 100%;*/\n}\n\n.output-footer /deep/ ul.nav-pills {\n  /*display: flex;*/\n  /*flex: 0 0 auto;*/\n  /*border-bottom: 1px solid #888;*/\n  padding: 5px;\n}\n\n.output-footer /deep/ li.nav-item {\n  margin-right: 5px;\n}\n\n.output-footer /deep/ .tab-content {\n  /*display: flex;*/\n  /*flex-direction: column;*/\n  /*flex: 1 0 auto;*/\n}\n\n.output-footer /deep/ .tab-pane {\n  /*display: flex;*/\n  /*flex-direction: column;*/\n  /*flex: 1 0 auto;*/\n  padding: 10px;\n  /*border: 1px solid #888;*/\n  /*border-top: 0;*/\n  overflow: auto;\n  height: 10vh;\n}\n\n.output-footer /deep/ .tab-pane.active {\n  /*background: white;*/\n}\n\n.output-footer /deep/ span.code {\n  display: inline-block;\n  font-family: monospace;\n  border: 1px solid #e0e0e0;\n  padding: 2px;\n  background-color: #d5d5d5;\n}\n\n.footer-buttons {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n.footer-buttons i {\n  margin: 0 3px;\n}\n\n.dot {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/t-test/output-pane/output-pane.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"plot\" [class.without-footer]=\"!showFooter\">\n  <t-test-plot #topLeft name=\"top-left\"\n    [project]=\"project\"\n    [hover-disabled]=\"hoverDisabled\"\n    (modelChanged)=\"onModelChanged()\">\n  </t-test-plot>\n  <t-test-plot #topRight name=\"top-right\"\n    [project]=\"project\"\n    [hover-disabled]=\"hoverDisabled\"\n    (modelChanged)=\"onModelChanged()\">\n  </t-test-plot>\n  <t-test-bottom-plot #bottom name=\"bottom\"\n    [project]=\"project\"\n    [disable-drag-target]=\"model?.output == 'delta'\"\n    [disable-drag-ci]=\"model?.output == 'n'\"\n    (modelChanged)=\"onModelChanged()\">\n  </t-test-bottom-plot>\n  <div class=\"show-footer\" *ngIf=\"project && !showFooter\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleFooter(true)\">\n      <i class=\"fa fa-envelope-open-o\" aria-hidden=\"true\" title=\"Show footer\"></i>\n      Interpretation / Log\n    </button>\n  </div>\n</div>\n<div class=\"output-footer\" *ngIf=\"project && showFooter\">\n  <div class=\"footer-buttons\">\n    <button type=\"button\" (click)=\"copyFooter()\" title=\"Copy to clipboard\">\n      <i class=\"fa fa-clipboard\"></i>\n    </button>\n    <button type=\"button\" (click)=\"toggleFooter(false)\" title=\"Hide footer\">\n      <i class=\"fa fa-window-minimize\"></i>\n    </button>\n  </div>\n  <ngb-tabset #footerTabset type=\"pills\">\n    <ngb-tab id=\"t-test-interpretation\">\n      <ng-template ngbTabTitle><i *ngIf=\"project.extraName\" class=\"fa fa-circle dot\"></i> Interpretation</ng-template>\n      <ng-template ngbTabContent>\n        {{model?.interpretation()}}\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab id=\"t-test-log\" title=\"Log\">\n      <ng-template ngbTabContent>\n        <ng-template [ngIf]=\"!project\" [ngIfElse]=\"changeHistory\">\n          There have been no changes yet.\n        </ng-template>\n        <ng-template #changeHistory>\n          <ul class=\"log\">\n            <li *ngFor=\"let changes of project.changeHistory\"\n              [innerHTML]=\"project.describeChanges(changes)\">\n            </li>\n          </ul>\n        </ng-template>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>\n"

/***/ }),

/***/ "./src/app/t-test/output-pane/output-pane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputPaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project__ = __webpack_require__("./src/app/t-test/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__ = __webpack_require__("./src/app/t-test/plot/plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bottom_plot_bottom_plot_component__ = __webpack_require__("./src/app/t-test/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__export_plots_export_plots_component__ = __webpack_require__("./src/app/t-test/export-plots/export-plots.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OutputPaneComponent = (function () {
    function OutputPaneComponent(modalService) {
        this.modalService = modalService;
        this.hoverDisabled = false;
        this.modelChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.showFooter = true;
    }
    OutputPaneComponent.prototype.ngOnChanges = function (changes) {
        if (!('project' in changes))
            return;
        if (this.project) {
            this.model = this.project.getModel(0);
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
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__export_plots_export_plots_component__["a" /* ExportPlotsComponent */], { windowClass: 'export-plots' });
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
    OutputPaneComponent.prototype.redrawPlots = function () {
        var _this = this;
        // Set a timeout here to let the UI resize if needed
        setTimeout(function () {
            _this.topLeftPlot.redraw();
            _this.topRightPlot.redraw();
            _this.bottomPlot.redraw();
        }, 1);
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
            case 't-test-interpretation':
                event.clipboardData.setData('text/plain', this.model.interpretation());
                event.preventDefault();
                break;
            case 't-test-log':
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('project'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */])
    ], OutputPaneComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hover-disabled'),
        __metadata("design:type", Object)
    ], OutputPaneComponent.prototype, "hoverDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], OutputPaneComponent.prototype, "modelChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('topLeft'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__["a" /* PlotComponent */])
    ], OutputPaneComponent.prototype, "topLeftPlot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('topRight'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__["a" /* PlotComponent */])
    ], OutputPaneComponent.prototype, "topRightPlot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('bottom'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */])
    ], OutputPaneComponent.prototype, "bottomPlot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('saveDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], OutputPaneComponent.prototype, "saveDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('footerTabset'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbTabset */])
    ], OutputPaneComponent.prototype, "footerTabset", void 0);
    OutputPaneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 't-test-output-pane',
            template: __webpack_require__("./src/app/t-test/output-pane/output-pane.component.html"),
            styles: [__webpack_require__("./src/app/t-test/output-pane/output-pane.component.css")],
            host: {
                '(document:copy)': 'onCopy($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], OutputPaneComponent);
    return OutputPaneComponent;
}());



/***/ }),

/***/ "./src/app/t-test/palette.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaletteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaletteService = (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], PaletteService);
    return PaletteService;
}());



/***/ }),

/***/ "./src/app/t-test/plot-options.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlotOptionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlotOptionsService = (function () {
    function PlotOptionsService() {
        this.fontFamily = "";
        this.fontSize = 1;
        this.axisFontSize = 1;
        this.lineWidth = 1;
        this.axisLineWidth = 1;
        this.paletteTheme = "typical";
        this.lineStyle = "solid";
        this.showLegendBox = false;
        this.legendLabel0 = "Primary";
        this.legendLabel1 = "Secondary";
        this.legendLabel2 = "Tertiary";
        this.legendLabel3 = "Quaternary";
        this.legendLabel4 = "Quinary";
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
    PlotOptionsService.prototype.legendLabel = function (index) {
        var result = this["legendLabel" + index];
        if (!result) {
            switch (index) {
                case 0:
                    result = "Primary";
                    break;
                case 1:
                    result = "Secondary";
                    break;
                case 2:
                    result = "Tertiary";
                    break;
                case 3:
                    result = "Quaternary";
                    break;
                case 4:
                    result = "Quinary";
                    break;
                case 5:
                    result = "Senary";
                    break;
                case 6:
                    result = "Septenary";
                    break;
                case 7:
                    result = "Octonary";
                    break;
                case 8:
                    result = "Nonary";
                    break;
                case 9:
                    result = "Denary";
                    break;
                default:
                    result = "Line " + (index + 1);
                    break;
            }
        }
        return result;
    };
    PlotOptionsService = PlotOptionsService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], PlotOptionsService);
    return PlotOptionsService;
    var PlotOptionsService_1;
}());



/***/ }),

/***/ "./src/app/t-test/plot-options/plot-options.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset {\n  border: 1px solid #bbb;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px;\n}\n\nfieldset legend {\n  font-size: inherit;\n  font-weight: bold;\n  display: table;\n  width: auto;\n}\n\n.form-group {\n  padding: 0 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/t-test/plot-options/plot-options.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"plotOptions && project\" class=\"content\">\n  <fieldset>\n    <legend>Global</legend>\n    <div class=\"form-group\">\n      <label for=\"plot-font-family\">Font family</label>\n      <select id=\"plot-font-family\" class=\"form-control\"\n        [ngModel]=\"plotOptions.fontFamily\" (ngModelChange)=\"changeAttribute('fontFamily', $event)\">\n        <option value=\"\">Default</option>\n        <option value=\"serif\">Serif</option>\n        <option value=\"sans\">Sans-serif</option>\n        <option value=\"monospace\">Monospace</option>\n        <option>Bungee Shade</option>\n        <option>Sancreek</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"plot-palette-theme\">Color palette</label>\n      <select id=\"plot-palette-theme\" class=\"form-control\"\n        [ngModel]=\"plotOptions.paletteTheme\" (ngModelChange)=\"changeAttribute('paletteTheme', $event)\">\n        <option value=\"typical\">Default</option>\n        <option value=\"plasma\">Plasma</option>\n        <option value=\"viridis\">Viridis</option>\n        <option value=\"magma\">Magma</option>\n        <option value=\"pattern\">Pattern</option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-font-size\">Font size: {{plotOptions.fontSize}}</label>\n        <div class=\"input-group\">\n          <input id=\"plot-font-size\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [ngModel]=\"plotOptions.fontSize\" (ngModelChange)=\"changeAttribute('fontSize', $event)\" />\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <label for=\"plot-axis-font-size\">Axis font size: {{plotOptions.axisFontSize}}</label>\n        <div class=\"input-group\">\n          <input id=\"plot-axis-font-size\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [ngModel]=\"plotOptions.axisFontSize\" (ngModelChange)=\"changeAttribute('axisFontSize', $event)\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-line-width\">Line width: {{plotOptions.lineWidth}}</label>\n        <div class=\"input-group\">\n          <input id=\"plot-line-width\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [ngModel]=\"plotOptions.lineWidth\" (ngModelChange)=\"changeAttribute('lineWidth', $event)\" />\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <label for=\"plot-axis-line-width\">Axis line width: {{plotOptions.axisLineWidth}}</label>\n        <div class=\"input-group\">\n          <input id=\"plot-axis-line-width\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [ngModel]=\"plotOptions.axisLineWidth\" (ngModelChange)=\"changeAttribute('axisLineWidth', $event)\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"plot-line-style\">Line style</label>\n      <select id=\"plot-line-style\" class=\"form-control\"\n        [ngModel]=\"plotOptions.lineStyle\" (ngModelChange)=\"changeAttribute('lineStyle', $event)\">\n        <option value=\"solid\">Solid</option>\n        <option value=\"short-dash\">Short Dash</option>\n        <option value=\"medium-dash\">Medium Dash</option>\n        <option value=\"long-dash\">Long Dash</option>\n        <option value=\"dot\">Dotted</option>\n      </select>\n    </div>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input class=\"form-check-input\" type=\"checkbox\" [ngModel]=\"plotOptions.showLegendBox\" (ngModelChange)=\"changeAttribute('showLegendBox', $event)\" />\n        Display legend background\n      </label>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-legend-label-1\">Legend label #1</label>\n      </div>\n      <div class=\"col-sm-6\">\n        <input id=\"plot-legend-label-1\" class=\"form-control\" type=\"text\" [ngModel]=\"plotOptions.legendLabel0\" (ngModelChange)=\"changeAttribute('legendLabel0', $event)\" />\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-legend-label-2\">Legend label #2</label>\n      </div>\n      <div class=\"col-sm-6\">\n        <input id=\"plot-legend-label-2\" class=\"form-control\" type=\"text\" [ngModel]=\"plotOptions.legendLabel1\" (ngModelChange)=\"changeAttribute('legendLabel1', $event)\" />\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-legend-label-3\">Legend label #3</label>\n      </div>\n      <div class=\"col-sm-6\">\n        <input id=\"plot-legend-label-3\" class=\"form-control\" type=\"text\" [ngModel]=\"plotOptions.legendLabel2\" (ngModelChange)=\"changeAttribute('legendLabel2', $event)\" />\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-legend-label-4\">Legend label #4</label>\n      </div>\n      <div class=\"col-sm-6\">\n        <input id=\"plot-legend-label-4\" class=\"form-control\" type=\"text\" [ngModel]=\"plotOptions.legendLabel3\" (ngModelChange)=\"changeAttribute('legendLabel3', $event)\" />\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-legend-label-5\">Legend label #5</label>\n      </div>\n      <div class=\"col-sm-6\">\n        <input id=\"plot-legend-label-5\" class=\"form-control\" type=\"text\" [ngModel]=\"plotOptions.legendLabel4\" (ngModelChange)=\"changeAttribute('legendLabel4', $event)\" />\n      </div>\n    </div>\n  </fieldset>\n  <fieldset>\n    <legend *ngIf=\"model.output == 'n' || model.output == 'nByCI'\">Sample Size</legend>\n    <legend *ngIf=\"model.output == 'power'\">Power</legend>\n    <legend *ngIf=\"model.output == 'delta'\">Detectable Alternative</legend>\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <label for=\"plot-top-y-min\">Minimum</label>\n        <div class=\"input-group\">\n          <ng-template [ngIf]=\"model.output == 'n' || model.output == 'nByCI'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"(project.nRange.max - 1) | round\"\n              [ngModel]=\"project.nRange.min | round\"\n              (ngModelChange)=\"changeRange('n', 'min', $event)\" />\n          </ng-template>\n          <ng-template [ngIf]=\"model.output == 'power'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"(project.powerRange.max - 0.01) | round\"\n              [ngModel]=\"project.powerRange.min | round\"\n              (ngModelChange)=\"changeRange('power', 'min', $event)\" />\n          </ng-template>\n          <ng-template [ngIf]=\"model.output == 'delta'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"(project.deltaRange.max - 0.01) | round\"\n              [ngModel]=\"project.deltaRange.min | round\"\n              (ngModelChange)=\"changeRange('delta', 'min', $event)\" />\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-sm\">\n        <label for=\"plot-top-y-max\">Maximum</label>\n        <div class=\"input-group\">\n          <ng-template [ngIf]=\"model.output == 'n' || model.output == 'nByCI'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"(project.nRange.min + 1) | round\"\n              [ngModel]=\"project.nRange.max | round\"\n              (ngModelChange)=\"changeRange('n', 'max', $event)\" />\n          </ng-template>\n          <ng-template [ngIf]=\"model.output == 'power'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"(project.powerRange.min + 0.01) | round\"\n              [ngModel]=\"project.powerRange.max | round\"\n              (ngModelChange)=\"changeRange('power', 'max', $event)\" />\n          </ng-template>\n          <ng-template [ngIf]=\"model.output == 'delta'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"(project.deltaRange.min + 0.01) | round\"\n              [ngModel]=\"project.deltaRange.max | round\"\n              (ngModelChange)=\"changeRange('delta', 'max', $event)\" />\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <fieldset>\n    <ng-template [ngIf]=\"model.output == 'n' || model.output == 'nByCI'\">\n      <legend>Sample Size vs. Power</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"(project.powerRange.max - 0.01) | round\"\n              [ngModel]=\"project.powerRange.min | round\"\n              (ngModelChange)=\"changeRange('power', 'min', $event)\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"(project.powerRange.min + 0.01) | round\"\n              [ngModel]=\"project.powerRange.max | round\"\n              (ngModelChange)=\"changeRange('power', 'max', $event)\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"model.output == 'power'\">\n      <legend>Power vs. Sample Size</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"(project.nRange.max - 1) | round\"\n              [ngModel]=\"project.nRange.min | round\"\n              (ngModelChange)=\"changeRange('n', 'min', $event)\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"(project.nRange.min + 1) | round\"\n              [ngModel]=\"project.nRange.max | round\"\n              (ngModelChange)=\"changeRange('n', 'max', $event)\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"model.output == 'delta'\">\n      <legend>Detectable Alternative vs. Sample Size</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"(project.nRange.max - 1) | round\"\n              [ngModel]=\"project.nRange.min | round\"\n              (ngModelChange)=\"changeRange('n', 'min', $event)\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"(project.nRange.min + 1) | round\"\n              [ngModel]=\"project.nRange.max | round\"\n              (ngModelChange)=\"changeRange('n', 'max', $event)\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </fieldset>\n  <fieldset>\n    <ng-template [ngIf]=\"model.output == 'n' || model.output == 'nByCI'\">\n      <legend>Sample Size vs. Detectable Alternative</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-right-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"(project.deltaRange.max - 1) | round\"\n              [ngModel]=\"project.deltaRange.min | round\"\n              (ngModelChange)=\"changeRange('delta', 'min', $event)\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-right-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"(project.deltaRange.min - 1) | round\"\n              [ngModel]=\"project.deltaRange.max | round\"\n              (ngModelChange)=\"changeRange('delta', 'max', $event)\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"model.output == 'power'\">\n      <legend>Power vs. Detectable Alternative</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-right-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"(project.deltaRange.max - 1) | round\"\n              [ngModel]=\"project.deltaRange.min | round\"\n              (ngModelChange)=\"changeRange('delta', 'min', $event)\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-right-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"(project.deltaRange.min - 1) | round\"\n              [ngModel]=\"project.deltaRange.max | round\"\n              (ngModelChange)=\"changeRange('delta', 'max', $event)\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"model.output == 'delta'\">\n      <legend>Detectable Alternative vs. Power</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"(project.powerRange.max - 0.01) | round\"\n              [ngModel]=\"project.powerRange.min | round\"\n              (ngModelChange)=\"changeRange('power', 'min', $event)\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"(project.powerRange.min + 0.01) | round\"\n              [ngModel]=\"project.powerRange.max | round\"\n              (ngModelChange)=\"changeRange('power', 'max', $event)\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </fieldset>\n  <fieldset>\n    <legend>Precision vs. Parameter Space</legend>\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <label for=\"plot-bottom-x-min\">X minimum</label>\n        <div class=\"input-group\">\n          <input class=\"form-control\"\n            type=\"number\" step=\"0.01\" [max]=\"(project.pSpaceRange.max - 1) | round\"\n            [ngModel]=\"project.pSpaceRange.min | round\"\n            (ngModelChange)=\"changeRange('pSpace', 'min', $event)\" />\n        </div>\n      </div>\n      <div class=\"col-sm\">\n        <label for=\"plot-bottom-x-max\">X maximum</label>\n        <div class=\"input-group\">\n          <input class=\"form-control\"\n            type=\"number\" step=\"0.01\" [min]=\"(project.pSpaceRange.min + 1) | round\"\n            [ngModel]=\"project.pSpaceRange.max | round\"\n            (ngModelChange)=\"changeRange('pSpace', 'max', $event)\" />\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">\n    Reset all settings\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/t-test/plot-options/plot-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlotOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__("./src/app/t-test/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plot_options_service__ = __webpack_require__("./src/app/t-test/plot-options.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlotOptionsComponent = (function () {
    function PlotOptionsComponent(plotOptions) {
        this.plotOptions = plotOptions;
        this.optionsChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    PlotOptionsComponent.prototype.ngOnChanges = function (changes) {
        if (this.project) {
            this.model = this.project.getModel(0);
        }
    };
    PlotOptionsComponent.prototype.reset = function () {
        this.plotOptions.reset();
        this.project.calculateRanges();
    };
    PlotOptionsComponent.prototype.changeAttribute = function (name, value) {
        this.plotOptions[name] = value;
        this.optionsChanged.emit();
    };
    PlotOptionsComponent.prototype.changeRange = function (name, which, value) {
        this.project[name + "Range"][which] = value;
        this.optionsChanged.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('project'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */])
    ], PlotOptionsComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], PlotOptionsComponent.prototype, "optionsChanged", void 0);
    PlotOptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 't-test-plot-options',
            template: __webpack_require__("./src/app/t-test/plot-options/plot-options.component.html"),
            styles: [__webpack_require__("./src/app/t-test/plot-options/plot-options.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__plot_options_service__["a" /* PlotOptionsService */]])
    ], PlotOptionsComponent);
    return PlotOptionsComponent;
}());



/***/ }),

/***/ "./src/app/t-test/plot/plot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".target {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.legend {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/t-test/plot/plot.component.html":
/***/ (function(module, exports) {

module.exports = "<svg #plot\n  [style.fontFamily]=\"plotOptions.getFontFamily()\"\n  style.fontSize=\"{{plotOptions.getFontSize()}}px\"\n  [attr.class]=\"name\" [attr.width]=\"fixedWidth\" [attr.height]=\"fixedHeight\"\n  [attr.viewBox]=\"viewBox\">\n\n  <ng-template [ngIf]=\"x && y && project\">\n    <text text-anchor=\"middle\"\n      [attr.x]=\"innerWidth / 2 + leftMargin\"\n      [attr.y]=\"height - (plotOptions.getFontSize() / 2)\">\n      {{x.title}}\n    </text>\n    <text text-anchor=\"middle\"\n      [attr.x]=\"-(innerHeight / 2 + topMargin)\"\n      [attr.y]=\"plotOptions.getFontSize()\"\n      transform=\"rotate(-90)\">\n      {{y.title}}\n    </text>\n    <text text-anchor=\"middle\" font-weight=\"bold\"\n      [attr.x]=\"innerWidth / 2 + leftMargin\"\n      [attr.y]=\"plotOptions.getFontSize()\">\n      {{title}}\n    </text>\n\n    <g *ngFor=\"let path of paths | reverse; index as invIndex; trackBy: trackByIndex\"\n      [attr.transform]=\"translate(leftMargin, topMargin)\">\n      <path\n        id=\"{{name}}-path-{{invertIndex(invIndex, paths)}}\"\n        [attr.stroke]=\"getPathColor(invIndex)\"\n        [attr.stroke-width]=\"plotOptions.getLineWidth()\"\n        [attr.stroke-dasharray]=\"getDashArray(invIndex)\"\n        [attr.stroke-linecap]=\"getLineCap(invIndex)\"\n        [attr.opacity]=\"invertIndex(i, paths) == 0 ? 1 : 0.7\"\n        fill=\"none\" />\n    </g>\n\n    <g id=\"{{name}}-x-axis\"\n      [attr.transform]=\"translate(leftMargin, innerHeight + topMargin)\"></g>\n    <g id=\"{{name}}-y-axis\"\n      [attr.transform]=\"translate(leftMargin, topMargin)\"></g>\n\n    <rect [attr.transform]=\"translate(leftMargin, topMargin)\"\n      [attr.width]=\"innerWidth\" [attr.height]=\"innerHeight\"\n      fill=\"none\" pointer-events=\"all\"\n      (mouseout)=\"hideHoverInfo()\"\n      (mousemove)=\"hover($event)\" />\n\n    <g *ngIf=\"!hideTarget\">\n      <ng-template [ngIf]=\"!hideDropLines\">\n        <g *ngFor=\"let path of dropPaths; index as dpIndex; trackBy: trackByIndex\"\n          [attr.transform]=\"translate(leftMargin, topMargin)\">\n          <path id=\"{{name}}-target-drop-{{dpIndex}}\"\n            stroke=\"red\"\n            [attr.stroke-width]=\"plotOptions.getLineWidth() / 2\"\n            stroke-dasharray=\"5, 5\"\n            fill=\"none\" />\n        </g>\n      </ng-template>\n      <circle id=\"{{name}}-target\" class=\"target\" r=\"5\"\n        [attr.transform]=\"translate(leftMargin, topMargin)\"\n        fill=\"red\"\n        (mousemove)=\"hover($event, target)\" />\n    </g>\n\n    <g id=\"{{name}}-legend\" class=\"legend\"\n       *ngIf=\"paths.length > 1\"\n       [attr.transform]=\"translate(leftMargin + 15 + legendXOffset, topMargin + 15 + legendYOffset)\"\n       font-size=\"smaller\" (dblclick)=\"resetLegend()\">\n      <path id=\"{{name}}-legend-box\"\n            fill=\"white\" [attr.fill-opacity]=\"plotOptions.showLegendBox ? 0.8 : 0\"\n            stroke=\"black\" [attr.stroke-opacity]=\"plotOptions.showLegendBox ? 1 : 0\" />\n      <g id=\"{{name}}-legend-labels\">\n        <g *ngFor=\"let path of paths; index as i; trackBy: trackByIndex\"\n           [attr.transform]=\"translate(5, 20 * plotOptions.fontSize * i)\">\n          <path\n            d=\"m0,0 l45,0\"\n            [attr.stroke]=\"getPathColor(i)\"\n            [attr.stroke-width]=\"plotOptions.getLineWidth()\"\n            [attr.stroke-dasharray]=\"getDashArray(i)\"\n            [attr.stroke-linecap]=\"getLineCap(i)\"\n            fill=\"none\" />\n          <text x=\"50\" y=\"5\">{{legendLabel(i)}}</text>\n        </g>\n      </g>\n    </g>\n\n    <g *ngIf=\"isHoverInfoActive()\"\n      [attr.transform]=\"translate(leftMargin + hoverX, topMargin + hoverY)\">\n      <circle *ngIf=\"!isHoverInfoTarget()\" r=\"4\" fill=\"none\" stroke=\"blue\" />\n      <path id=\"{{name}}-hover-info\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.8\" />\n      <text id=\"{{name}}-hover-coords\" y=\"-2.5em\" font-family=\"monospace\" text-anchor=\"middle\">\n        <tspan style=\"white-space: pre\">{{x.sym}}: {{hoverPoint.x | formatFixed:[hoverPoint.y]}}</tspan><tspan x=\"0\" dy=\"1em\" style=\"white-space: pre\">{{y.sym}}: {{hoverPoint.y | formatFixed:[hoverPoint.x]}}</tspan>\n      </text>\n    </g>\n  </ng-template>\n</svg>\n"

/***/ }),

/***/ "./src/app/t-test/plot/plot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__ = __webpack_require__("./src/app/t-test/abstract-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project__ = __webpack_require__("./src/app/t-test/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plot_options_service__ = __webpack_require__("./src/app/t-test/plot-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__palette_service__ = __webpack_require__("./src/app/t-test/palette.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HoverInfo;
(function (HoverInfo) {
    HoverInfo[HoverInfo["Disabled"] = 0] = "Disabled";
    HoverInfo[HoverInfo["NonTarget"] = 1] = "NonTarget";
    HoverInfo[HoverInfo["Target"] = 2] = "Target";
})(HoverInfo || (HoverInfo = {}));
var PlotComponent = (function (_super) {
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
        _this.modelChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.leftMargin = 50;
        _this.rightMargin = 50;
        _this.topMargin = 50;
        _this.bottomMargin = 50;
        _this.yAxisWidth = 10;
        _this.xAxisHeight = 10;
        _this.viewBox = "0 0 0 0";
        _this.hoverInfo = HoverInfo.Disabled;
        _this.targetDragging = false;
        _this.needDraw = __WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__["b" /* Draw */].No;
        return _this;
    }
    PlotComponent.prototype.ngOnChanges = function (changes) {
        this.setup();
    };
    PlotComponent.prototype.ngAfterViewChecked = function () {
        this.draw();
    };
    PlotComponent.prototype.redraw = function () {
        this.setup();
    };
    PlotComponent.prototype.hover = function (event, target) {
        var dim = event.target.getBoundingClientRect();
        var x = event.clientX - dim.left;
        var y = event.clientY - dim.top;
        this.hoverPoint = undefined;
        this.hoverInfo = HoverInfo.Disabled;
        if (target) {
            this.hoverPoint = target;
            this.hoverInfo = HoverInfo.Target;
        }
        else if (!this.hoverDisabled) {
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
            this.needDraw = __WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__["b" /* Draw */].Hover;
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
    PlotComponent.prototype.isHoverInfoActive = function () {
        return this.hoverInfo != HoverInfo.Disabled;
    };
    PlotComponent.prototype.isHoverInfoTarget = function () {
        return this.hoverInfo == HoverInfo.Target;
    };
    PlotComponent.prototype.hideHoverInfo = function () {
        this.hoverInfo = HoverInfo.Disabled;
    };
    PlotComponent.prototype.getPathColor = function (index, invert) {
        if (invert === void 0) { invert = true; }
        // NOTE: This is done backwards from common sense on purpose.
        if (!invert) {
            index = this.paths.length - index - 1;
        }
        return this.palette.getColor(index, this.plotOptions.paletteTheme);
    };
    PlotComponent.prototype.getDashArray = function (index, invert) {
        if (invert === void 0) { invert = true; }
        // NOTE: This is done backwards from common sense on purpose.
        if (!invert) {
            index = this.paths.length - index - 1;
        }
        var pattern = this.palette.getPattern(index, this.plotOptions.paletteTheme);
        return this.plotOptions.dashArray(pattern);
    };
    PlotComponent.prototype.getLineCap = function (index, invert) {
        if (invert === void 0) { invert = true; }
        // NOTE: This is done backwards from common sense on purpose.
        if (!invert) {
            index = this.paths.length - index - 1;
        }
        var pattern = this.palette.getPattern(index, this.plotOptions.paletteTheme);
        return this.plotOptions.lineCap(pattern);
    };
    PlotComponent.prototype.invertIndex = function (invertedIndex, array) {
        return array.length - invertedIndex - 1;
    };
    PlotComponent.prototype.legendLabel = function (index) {
        return this.plotOptions.legendLabel(index);
    };
    PlotComponent.prototype.resetLegend = function () {
        this.legendXOffset = 0;
        this.legendYOffset = 0;
    };
    PlotComponent.prototype.setupDimensions = function () {
        // margin
        this.yAxisWidth = 10 +
            this.plotOptions.getAxisLineWidth() +
            this.plotOptions.getAxisFontSize() + 9; // y axis tick (font + tick)
        this.xAxisHeight = 10 +
            this.plotOptions.getAxisLineWidth() +
            (this.plotOptions.getAxisFontSize() / 2) + 9; // x axis tick (font + tick)
        this.leftMargin = this.plotOptions.getFontSize() + this.yAxisWidth + 10;
        this.rightMargin = 10;
        this.topMargin = this.plotOptions.getFontSize() + 10;
        this.bottomMargin = this.plotOptions.getFontSize() + this.xAxisHeight + 10;
        // dimensions
        if (this.fixedWidth) {
            this.width = this.fixedWidth;
        }
        else {
            this.width = this.getDimension('width');
        }
        if (this.fixedHeight) {
            this.height = this.fixedHeight;
        }
        else {
            this.height = this.getDimension('height');
        }
        this.viewBox = "0 0 " + this.width + " " + this.height;
        this.innerWidth = this.width - this.leftMargin - this.rightMargin;
        this.innerHeight = this.height - this.topMargin - this.bottomMargin;
    };
    PlotComponent.prototype.setupParams = function () {
        // Setup parameters. Dimensions should be setup by this point.
        var model = this.project.getModel(0);
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
        this.mainData = this.plotData[0].slice();
        this.mainData.sort(function (a, b) { return a.x - b.x; });
        this.xBisector = __WEBPACK_IMPORTED_MODULE_1_d3__["d" /* bisector */](function (point) { return point.x; }).left;
        return true;
    };
    PlotComponent.prototype.setupScales = function () {
        this.xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().
            domain(this.x.range.toArray()).
            range([0, this.innerWidth]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().
            domain(this.y.range.toArray().reverse()).
            range([0, this.innerHeight]);
    };
    PlotComponent.prototype.setupTarget = function () {
        var model = this.project.getModel(0);
        this.target = { x: this.x.target, y: this.y.target };
    };
    PlotComponent.prototype.setupPaths = function () {
        var _this = this;
        this.paths = this.plotData.map(function (d, i) {
            return _this.getPath(d, 'x', 'y');
        });
    };
    PlotComponent.prototype.setupDropPaths = function () {
        var _this = this;
        this.dropPaths = [];
        var path = __WEBPACK_IMPORTED_MODULE_1_d3__["i" /* line */]().
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
            return;
        }
        this.setupDimensions();
        if (!this.setupParams()) {
            // setting up parameters failed
            return;
        }
        if (!this.setupPlotData()) {
            // setting up plot data failed
            return;
        }
        this.setupScales();
        this.setupTarget();
        this.setupPaths();
        this.setupDropPaths();
        if (this.lastDragEvent) {
            this.hover(this.lastDragEvent);
            this.lastDragEvent = undefined;
        }
        this.needDraw = __WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__["b" /* Draw */].Yes;
    };
    PlotComponent.prototype.draw = function () {
        if (this.needDraw == __WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__["b" /* Draw */].No) {
            return;
        }
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](this.plotElement.nativeElement);
        if (this.hoverInfo != HoverInfo.Disabled) {
            // draw hover info box
            var box = svg.select("#" + this.name + "-hover-info");
            var coords = svg.select("#" + this.name + "-hover-coords");
            if (box.size() > 0 && coords.size() > 0) {
                var dim = coords.node().getBBox();
                var left = dim.x - 5, right = dim.x + dim.width + 5;
                var unit = dim.width / 16;
                var lmid = left + (7 * unit) + 5, rmid = left + (9 * unit) + 5;
                var mid = left + (8 * unit) + 5;
                var top_1 = dim.y - 5, bottom = dim.y + dim.height + 5;
                box.attr("d", __WEBPACK_IMPORTED_MODULE_1_d3__["i" /* line */]()([
                    [left, top_1], [right, top_1], [right, bottom],
                    [rmid, bottom], [mid, bottom + 5], [lmid, bottom],
                    [left, bottom], [left, top_1]
                ]));
            }
        }
        if (this.needDraw == __WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__["b" /* Draw */].Hover) {
            // only need to draw hover box
            this.needDraw = __WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__["b" /* Draw */].No;
            return;
        }
        var t = svg.transition();
        // axes (drawn by d3)
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["b" /* axisBottom */](this.xScale).ticks(Math.floor(this.innerWidth / 75));
        t.select("#" + this.name + "-x-axis").
            call(xAxis).
            attr("font-size", this.plotOptions.getAxisFontSize() + "px").
            attr("stroke-width", this.plotOptions.getAxisLineWidth());
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* axisLeft */](this.yScale).ticks(Math.floor(this.innerHeight / 75));
        t.select("#" + this.name + "-y-axis").
            call(yAxis).
            attr("font-size", this.plotOptions.getAxisFontSize() + "px").
            attr("stroke-width", this.plotOptions.getAxisLineWidth());
        // paths
        for (var i = 0, ilen = this.paths.length; i < ilen; i++) {
            var path = t.select("#" + this.name + "-path-" + i);
            if (!path.attr("d")) {
                path.attr("d", this.paths[i]);
            }
            else {
                path.attrTween("d", this.pathTween(this.paths[i], 4));
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
            var targetDrag = __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* drag */]().
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
                var top_2 = dim.y - 5, bottom = dim.y + dim.height + 5;
                box.attr("d", __WEBPACK_IMPORTED_MODULE_1_d3__["i" /* line */]()([
                    [left, top_2], [right, top_2], [right, bottom],
                    [left, bottom], [left, top_2]
                ]));
            }
            var legend = svg.select("#" + this.name + "-legend");
            var legendDrag = __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* drag */]().
                on("drag", this.dragLegend.bind(this));
            legend.call(legendDrag);
        }
        this.needDraw = __WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__["b" /* Draw */].No;
    };
    PlotComponent.prototype.dragTargetStart = function () {
        this.targetDragging = true;
    };
    PlotComponent.prototype.dragTarget = function (event) {
        var x = this.xScale.invert(__WEBPACK_IMPORTED_MODULE_1_d3__["f" /* event */].x - this.leftMargin);
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
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](this.plotElement.nativeElement);
        var targetId = "#" + this.name + "-target";
        this.target = point;
        this.setupDropPaths();
        svg.select(targetId).
            attr("cx", this.xScale(this.target.x)).
            attr("cy", this.yScale(this.target.y));
        for (var i = 0, ilen = this.dropPaths.length; i < ilen; i++) {
            svg.select(targetId + "-drop-" + i).attr("d", this.dropPaths[i]);
        }
    };
    PlotComponent.prototype.dragTargetEnd = function (event) {
        var _this = this;
        this.targetDragging = false;
        if (this.project && this.x.name) {
            this.lastDragEvent = event;
            this.project.updateModel(0, this.x.name, this.target.x).then(function () {
                _this.modelChanged.emit();
            });
        }
    };
    PlotComponent.prototype.dragLegend = function () {
        this.legendXOffset += __WEBPACK_IMPORTED_MODULE_1_d3__["f" /* event */].dx;
        this.legendYOffset += __WEBPACK_IMPORTED_MODULE_1_d3__["f" /* event */].dy;
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
                return __WEBPACK_IMPORTED_MODULE_1_d3__["h" /* interpolate */]([p0.x, p0.y], [p1.x, p1.y]);
            });
            return function (t) {
                return t < 1 ? "M" + points.map(function (p) { return p(t); }).join("L") : d1;
            };
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('project'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__project__["a" /* Project */])
    ], PlotComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hover-disabled'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "hoverDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hide-drop-lines'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "hideDropLines", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hide-target'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "hideTarget", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('disable-drag'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "disableDrag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('legend-x-offset'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "legendXOffset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('legend-y-offset'),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "legendYOffset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], PlotComponent.prototype, "modelChanged", void 0);
    PlotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 't-test-plot',
            template: __webpack_require__("./src/app/t-test/plot/plot.component.html"),
            styles: [__webpack_require__("./src/app/t-test/plot/plot.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__plot_options_service__["a" /* PlotOptionsService */],
            __WEBPACK_IMPORTED_MODULE_5__palette_service__["a" /* PaletteService */]])
    ], PlotComponent);
    return PlotComponent;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__["a" /* AbstractPlotComponent */]));



/***/ }),

/***/ "./src/app/t-test/project-factory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectFactoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__t_test_service__ = __webpack_require__("./src/app/t-test/t-test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project__ = __webpack_require__("./src/app/t-test/project.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectFactoryService = (function () {
    function ProjectFactoryService(ttestService) {
        this.ttestService = ttestService;
    }
    ProjectFactoryService.prototype.create = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */](this.ttestService);
    };
    ProjectFactoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__t_test_service__["a" /* TTestService */]])
    ], ProjectFactoryService);
    return ProjectFactoryService;
}());



/***/ }),

/***/ "./src/app/t-test/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__t_test__ = __webpack_require__("./src/app/t-test/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__("./src/app/t-test/range.ts");


var Project = (function () {
    function Project(ttestService) {
        this.ttestService = ttestService;
        this.models = [];
        this.changeHistory = [];
    }
    Project.prototype.addModel = function (model) {
        var _this = this;
        return this.ttestService.calculate(model).
            then(function (result) {
            var model = new __WEBPACK_IMPORTED_MODULE_0__t_test__["a" /* TTest */](result);
            model.calculateRanges();
            _this.models.push(model);
            _this.calculateRanges();
            _this.changeHistory.push({
                'type': 'add', 'index': _this.models.length - 1,
                'params': model.params()
            });
        });
    };
    Project.prototype.updateModel = function (index, key, value) {
        var _this = this;
        var model = this.models[index];
        var which = key;
        var changes = (_a = {}, _a[key] = value, _a);
        if (key === 'output') {
            if (((value == "n" || value == "nByCI") && this.extraName == "n") ||
                (value == "power" && this.extraName == "power") ||
                (value == "delta" && this.extraName == "delta")) {
                // remove extra models that no longer make sense
                for (var i = this.models.length - 1; i > 0; i--) {
                    this.removeModel(i);
                }
                this.extraName = undefined;
            }
            else {
                // changing output is a special case because the calculated values are going
                // to be different for extra models, so these need to be fixed before recalculating
                for (var i_1 = 1, ilen = this.models.length; i_1 < ilen; i_1++) {
                    var params = this.models[0].params();
                    params[this.extraName] = this.models[i_1][this.extraName];
                    Object.assign(this.models[i_1], params);
                }
            }
        }
        else {
            if (this.models[0].output === 'nByCI') {
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
        if (index == 0 && which !== this.extraName) {
            // if the 'main' model was changed and the key is not the 'extra' key,
            // update all of the secondary models as well as the main model
            models = this.models;
        }
        models.forEach(function (m) { Object.assign(m, changes); });
        return models.reduce(function (promise, model) {
            return promise.then(function () { return _this.ttestService.calculate(model); }).
                then(function (result) {
                Object.assign(model, result);
                model.calculateRanges();
            });
        }, Promise.resolve()).then(function () {
            _this.calculateRanges();
            _this.changeHistory.push({
                'type': 'change', 'index': index,
                'key': key, 'params': model.params()
            });
        });
        var _a;
    };
    Project.prototype.removeModel = function (index) {
        this.models.splice(index, 1);
        this.changeHistory.push({
            'type': 'remove', 'index': index
        });
        this.calculateRanges();
    };
    Project.prototype.getModel = function (index) {
        return this.models[index];
    };
    Project.prototype.modelCount = function () {
        return this.models.length;
    };
    Project.prototype.calculateRanges = function () {
        var nRanges = this.models.reduce(function (arr, m) { return m.nRange ? arr.concat(m.nRange) : arr; }, []);
        this.nRange = nRanges.length > 0 ? __WEBPACK_IMPORTED_MODULE_1__range__["a" /* Range */].combine(nRanges) : undefined;
        var powerRanges = this.models.reduce(function (arr, m) { return m.powerRange ? arr.concat(m.powerRange) : arr; }, []);
        this.powerRange = powerRanges.length > 0 ? __WEBPACK_IMPORTED_MODULE_1__range__["a" /* Range */].combine(powerRanges) : undefined;
        var deltaRanges = this.models.reduce(function (arr, m) { return m.deltaRange ? arr.concat(m.deltaRange) : arr; }, []);
        this.deltaRange = deltaRanges.length > 0 ? __WEBPACK_IMPORTED_MODULE_1__range__["a" /* Range */].combine(deltaRanges) : undefined;
        var pSpaceRanges = this.models.reduce(function (arr, m) { return m.pSpaceRange ? arr.concat(m.pSpaceRange) : arr; }, []);
        this.pSpaceRange = pSpaceRanges.length > 0 ? __WEBPACK_IMPORTED_MODULE_1__range__["a" /* Range */].combine(pSpaceRanges) : undefined;
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
    return Project;
}());



/***/ }),

/***/ "./src/app/t-test/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overview {\n  text-align: right;\n}\n\n.btn-secondary {\n  padding: 0.3rem 0.3rem;\n}\n\n.add-remove {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-align: end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important;\n  padding: 0 0.1rem 0.75rem 0.1rem;\n  margin-left: 10px;\n}\n\n.add-remove-center {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important;\n  padding: 0 0 0 0.1rem;\n  margin: 2rem 0 0 1rem;\n  margin-left: 10px;\n  border: 1px solid #333;\n  border-left: 0;\n}\n\n.add-remove i, .add-remove-center i {\n  font-size: larger;\n}\n\n.output {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n.output .range-slider {\n  background-color: #d8ecf3;\n  border-radius: 0.5em;\n}\n\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n.alt {\n  margin-top: 5px;\n}\n\n.alt .range-slider {\n  background-color: #ffff99;\n  border-radius: 0.5em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/t-test/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grow-vert\">\n  <div class=\"form-group\">\n    <label>\n      Output\n      <select class=\"form-control\" name=\"output\"\n        [ngModel]=\"model.output\" (ngModelChange)=\"changeModel(0, 'output', $event)\">\n        <option value=\"n\">Sample size by Power</option>\n        <option value=\"nByCI\">Sample size by 95% CI</option>\n        <option value=\"power\">Power</option>\n        <option value=\"delta\">Detectable alternative</option>\n      </select>\n    </label>\n  </div>\n\n  <div class=\"grow-horiz\">\n    <div class=\"grow-vert range-slider\">\n      <t-test-range-slider name=\"alpha\" label=\"Type I Error (&alpha;)\"\n        [show-dot]=\"project.extraName == 'alpha'\"\n        [min]=\"min.alpha\" [max]=\"max.alpha\"\n        [hard-min]=\"min.alpha\" [hard-max]=\"max.alpha\"\n        [ngModel]=\"model.alpha | round\" (ngModelChange)=\"changeModel(0, 'alpha', $event)\">\n        <ng-template rsHelp>\n          The Type I error probability for a two sided test. This is the\n          probability that we will falsely reject the null hypothesis.\n        </ng-template>\n      </t-test-range-slider>\n    </div>\n    <div class=\"add-remove fa-fw\" [style.color]=\"getColor(0)\">\n      <i *ngIf=\"canAdd('alpha')\" class=\"fa fa-plus-circle\" (click)=\"addInput('alpha')\"\n        ngbPopover=\"Click to add line to plot for alternate value of &quot;alpha&quot;\"\n        triggers=\"hover\" container=\"body\"></i>\n    </div>\n  </div>\n  <ng-template [ngIf]=\"project.extraName == 'alpha'\">\n    <div class=\"grow-horiz\" *ngFor=\"let ex of project.models.slice(1).reverse(); let i = index; trackBy: trackByExtra\">\n      <div class=\"grow-vert range-slider\">\n        <t-test-range-slider name=\"alpha-{{i+2}}\" label=\"Type I Error (&alpha;) #{{i+2}}\"\n          [min]=\"min.alpha\" [max]=\"max.alpha\"\n          [hard-min]=\"min.alpha\" [hard-max]=\"max.alpha\"\n          [ngModel]=\"ex.alpha | round\" (ngModelChange)=\"changeModel(i+1, 'alpha', $event)\">\n        </t-test-range-slider>\n      </div>\n      <div class=\"add-remove fa-fw\" [style.color]=\"getColor(i+1)\">\n        <i class=\"fa fa-minus-circle\" (click)=\"removeInput(i+1)\"\n          ngbPopover=\"Remove line from plot for &quot;alpha&quot;\"\n          triggers=\"hover\" container=\"body\"></i>\n      </div>\n    </div>\n  </ng-template>\n\n  <div class=\"grow-horiz\">\n    <div class=\"grow-vert range-slider\">\n      <t-test-range-slider name=\"sigma\" label=\"Std. deviation (&sigma;)\"\n        [show-dot]=\"project.extraName == 'sigma'\"\n        [min]=\"min.sigma\" [max]=\"max.sigma\" step=\"0.1\"\n        [hard-min]=\"1\"\n        [ngModel]=\"model.sigma | round:1\" (ngModelChange)=\"changeModel(0, 'sigma', $event)\">\n        <ng-template rsHelp>\n          For independent tests σ is the within group standard deviation. For\n          paired designs it is the standard deviation of difference in the\n          response of matched pairs.\n        </ng-template>\n      </t-test-range-slider>\n    </div>\n    <div class=\"add-remove fa-fw\" [style.color]=\"getColor(0)\">\n      <i *ngIf=\"canAdd('sigma')\" class=\"fa fa-plus-circle\" (click)=\"addInput('sigma')\"\n        ngbPopover=\"Click to add line to plot for alternate value of &quot;sigma&quot;\"\n        triggers=\"hover\" container=\"body\"></i>\n    </div>\n  </div>\n  <ng-template [ngIf]=\"project.extraName == 'sigma'\">\n    <div class=\"grow-horiz\" *ngFor=\"let ex of project.models.slice(1).reverse(); let i = index; trackBy: trackByExtra\">\n      <div class=\"grow-vert range-slider\">\n        <t-test-range-slider name=\"sigma-{{i+2}}\" label=\"Std. deviation #{{i+2}}\"\n          [min]=\"min.sigma\" [max]=\"max.sigma\" step=\"0.1\"\n          [hard-min]=\"1\"\n          [ngModel]=\"ex.sigma | round:1\" (ngModelChange)=\"changeModel(i+1, 'sigma', $event)\">\n        </t-test-range-slider>\n      </div>\n      <div class=\"add-remove fa-fw\" [style.color]=\"getColor(i+1)\">\n        <i class=\"fa fa-minus-circle\" (click)=\"removeInput(i+1)\"\n          ngbPopover=\"Remove line from plot for &quot;sigma&quot;\"\n          triggers=\"hover\" container=\"body\"></i>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template [ngIf]=\"!isOutput('nByCI')\" [ngIfElse]=\"nByCI\">\n    <div class=\"grow-horiz\" [class.output]=\"isOutput('delta')\">\n      <div class=\"grow-vert range-slider\">\n        <t-test-range-slider name=\"delta\" label=\"Difference in population means (&delta;)\"\n          [show-dot]=\"project.extraName == 'delta'\"\n          [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\"\n          [is-output]=\"model.output == 'delta'\" [help-tpl]=\"deltaHelp\"\n          [ngModel]=\"model.delta | round:1\" (ngModelChange)=\"changeModel(0, 'delta', $event)\">\n        </t-test-range-slider>\n      </div>\n      <div class=\"add-remove fa-fw\" [style.color]=\"getColor(0)\">\n        <i *ngIf=\"canAdd('delta')\" class=\"fa fa-plus-circle\" (click)=\"addInput('delta')\"\n          ngbPopover=\"Click to add line to plot for alternate value of &quot;delta&quot;\"\n          triggers=\"hover\" container=\"body\"></i>\n      </div>\n    </div>\n    <ng-template [ngIf]=\"project.extraName == 'delta'\">\n      <div class=\"grow-horiz\" *ngFor=\"let ex of project.models.slice(1).reverse(); let i = index; trackBy: trackByExtra\">\n        <div class=\"grow-vert range-slider\">\n          <t-test-range-slider name=\"delta-{{i+2}}\" label=\"Difference in population means (&delta;) #{{i+2}}\"\n            [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\"\n            [ngModel]=\"ex.delta | round:1\" (ngModelChange)=\"changeModel(i+1, 'delta', $event)\">\n          </t-test-range-slider>\n        </div>\n        <div class=\"add-remove fa-fw\" [style.color]=\"getColor(i+1)\">\n          <i class=\"fa fa-minus-circle\" (click)=\"removeInput(i+1)\"\n            ngbPopover=\"Remove line from plot for &quot;delta&quot;\"\n            triggers=\"hover\" container=\"body\"></i>\n        </div>\n      </div>\n    </ng-template>\n\n    <div class=\"grow-horiz\" [class.output]=\"isOutput('power')\">\n      <div class=\"grow-vert range-slider\">\n        <t-test-range-slider name=\"power\" label=\"Power\"\n          [show-dot]=\"project.extraName == 'power'\"\n          [min]=\"min.power\" [max]=\"max.power\"\n          [hard-min]=\"min.power\" [hard-max]=\"max.power\"\n          [is-output]=\"model.output == 'power'\" [help-tpl]=\"powerHelp\"\n          [ngModel]=\"model.power | round\" (ngModelChange)=\"changeModel(0, 'power', $event)\">\n        </t-test-range-slider>\n      </div>\n      <div class=\"add-remove fa-fw\" [style.color]=\"getColor(0)\">\n        <i *ngIf=\"canAdd('power')\" class=\"fa fa-plus-circle\" (click)=\"addInput('power')\"\n          ngbPopover=\"Click to add line to plot for alternate value of &quot;power&quot;\"\n          triggers=\"hover\" container=\"body\"></i>\n      </div>\n    </div>\n    <ng-template [ngIf]=\"project.extraName == 'power'\">\n      <div class=\"grow-horiz\" *ngFor=\"let ex of project.models.slice(1).reverse(); let i = index; trackBy: trackByExtra\">\n        <div class=\"grow-vert range-slider\">\n          <t-test-range-slider name=\"power-{{i+2}}\" label=\"Power #{{i+2}}\"\n            [min]=\"min.power\" [max]=\"max.power\"\n            [hard-min]=\"min.power\" [hard-max]=\"max.power\"\n            [ngModel]=\"ex.power | round\" (ngModelChange)=\"changeModel(i+1, 'power', $event)\">\n          </t-test-range-slider>\n        </div>\n        <div class=\"add-remove fa-fw\" [style.color]=\"getColor(i+1)\">\n          <i class=\"fa fa-minus-circle\" (click)=\"removeInput(i+1)\"\n            ngbPopover=\"Remove line from plot for &quot;power&quot;\"\n            triggers=\"hover\" container=\"body\"></i>\n        </div>\n      </div>\n    </ng-template>\n\n    <div class=\"grow-horiz\" [class.output]=\"isOutput('n')\">\n      <div class=\"grow-vert range-slider\">\n        <t-test-range-slider name=\"n\" label=\"Sample size\"\n          [show-dot]=\"project.extraName == 'n'\"\n          [min]=\"min.n\" [max]=\"max.n\" step=\"1\"\n          [hard-min]=\"1\"\n          [is-output]=\"model.output == 'n'\" [help-tpl]=\"nHelp\"\n          [ngModel]=\"model.n | ceil\" (ngModelChange)=\"changeModel(0, 'n', $event)\">\n        </t-test-range-slider>\n        <t-test-range-slider name=\"ci\" label=\"95% confidence interval width\"\n          [show-dot]=\"project.extraName == 'n'\"\n          [min]=\"min.ci\" [max]=\"max.ci\" step=\"0.1\"\n          [hard-min]=\"1\"\n          [is-output]=\"model.output == 'n'\" [help-tpl]=\"ciHelp\"\n          [ngModel]=\"model.ci | round:1\" (ngModelChange)=\"changeModel(0, 'ci', $event)\">\n        </t-test-range-slider>\n      </div>\n      <div class=\"add-remove-center fa-fw\" [style.color]=\"getColor(0)\">\n        <i *ngIf=\"canAdd('n')\" class=\"fa fa-plus-circle\" (click)=\"addInput('n')\"\n          ngbPopover=\"Click to add line to plot for alternate value of &quot;n&quot; or 95% confidence interval width\"\n          triggers=\"hover\" container=\"body\"></i>\n      </div>\n    </div>\n    <ng-template [ngIf]=\"project.extraName == 'n'\">\n      <div class=\"grow-horiz\" *ngFor=\"let ex of project.models.slice(1).reverse(); let i = index; trackBy: trackByExtra\">\n        <div class=\"grow-vert range-slider\">\n          <t-test-range-slider name=\"n-{{i+2}}\" label=\"Sample size #{{i+2}}\"\n            [min]=\"min.n\" [max]=\"max.n\" step=\"1\"\n            [hard-min]=\"1\"\n            [ngModel]=\"ex.n | ceil\" (ngModelChange)=\"changeModel(i+1, 'n', $event)\">\n          </t-test-range-slider>\n          <t-test-range-slider name=\"ci-{{i+2}}\" label=\"95% confidence interval width #{{i+2}}\"\n            [min]=\"min.ci\" [max]=\"max.ci\" step=\"0.1\"\n            [hard-min]=\"0.1\"\n            [ngModel]=\"ex.ci | round:1\" (ngModelChange)=\"changeModel(i+1, 'ci', $event)\">\n          </t-test-range-slider>\n        </div>\n        <div class=\"add-remove-center fa-fw\" [style.color]=\"getColor(i+1)\">\n          <i class=\"fa fa-minus-circle\" (click)=\"removeInput(i+1)\"\n            ngbPopover=\"Remove line from plot for &quot;n&quot; and 95% confidence interval width\"\n            triggers=\"hover\" container=\"body\"></i>\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n  <ng-template #nByCI>\n    <div class=\"grow-horiz\">\n      <div class=\"grow-vert range-slider\">\n        <t-test-range-slider name=\"ci\" label=\"95% confidence interval width\"\n          [show-dot]=\"project.extraName == 'ci'\"\n          [min]=\"min.ci\" [max]=\"max.ci\" step=\"0.1\" [help-tpl]=\"ciHelp\"\n          [ngModel]=\"model.ci | round:1\" (ngModelChange)=\"changeModel(0, 'ci', $event)\">\n        </t-test-range-slider>\n      </div>\n      <div class=\"add-remove fa-fw\" [style.color]=\"getColor(0)\">\n        <i *ngIf=\"canAdd('ci')\" class=\"fa fa-plus-circle\" (click)=\"addInput('ci')\"\n          ngbPopover=\"Click to add line to plot for alternate value of &quot;ci&quot;\"\n          triggers=\"hover\" container=\"body\"></i>\n      </div>\n    </div>\n    <ng-template [ngIf]=\"project.extraName == 'ci'\">\n      <div class=\"grow-horiz\" *ngFor=\"let ex of project.models.slice(1).reverse(); let i = index; trackBy: trackByExtra\">\n        <div class=\"grow-vert range-slider\">\n          <t-test-range-slider name=\"ci-{{i+2}}\" label=\"95% confidence interval width #{{i+2}}\"\n            [min]=\"min.ci\" [max]=\"max.ci\" step=\"0.1\"\n            [hard-min]=\"0.1\"\n            [ngModel]=\"ex.ci | round:1\" (ngModelChange)=\"changeModel(i+1, 'ci', $event)\">\n          </t-test-range-slider>\n        </div>\n        <div class=\"add-remove fa-fw\" [style.color]=\"getColor(i+1)\">\n          <i class=\"fa fa-minus-circle\" (click)=\"removeInput(i+1)\"\n            ngbPopover=\"Remove line from plot for &quot;ci&quot;\"\n            triggers=\"hover\" container=\"body\"></i>\n        </div>\n      </div>\n    </ng-template>\n\n    <div class=\"grow-horiz output\">\n      <div class=\"grow-vert range-slider\">\n        <t-test-range-slider name=\"n\" label=\"Sample size\"\n          [min]=\"min.n\" [max]=\"max.n\" step=\"1\"\n          [hard-min]=\"1\"\n          [is-output]=\"true\" [help-tpl]=\"nHelp\"\n          [ngModel]=\"model.n | ceil\" (ngModelChange)=\"changeModel(0, 'n', $event)\">\n        </t-test-range-slider>\n      </div>\n      <div class=\"add-remove fa-fw\">\n      </div>\n    </div>\n\n    <div class=\"grow-horiz order-2 alt\">\n      <div class=\"grow-vert range-slider\">\n        <t-test-range-slider name=\"delta\" label=\"Difference in population means (&delta;)\"\n          [show-dot]=\"project.extraName == 'power'\"\n          [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\" [help-tpl]=\"deltaHelp\"\n          [ngModel]=\"model.delta | round:1\" (ngModelChange)=\"changeModel(0, 'delta', $event)\">\n        </t-test-range-slider>\n\n        <t-test-range-slider name=\"power\" label=\"Power\"\n          [show-dot]=\"project.extraName == 'power'\"\n          [min]=\"min.power\" [max]=\"max.power\"\n          [hard-min]=\"min.power\" [hard-max]=\"max.power\"\n          [is-output]=\"model.output == 'power'\" [help-tpl]=\"powerHelp\"\n          [ngModel]=\"model.power | round\" (ngModelChange)=\"changeModel(0, 'power', $event)\">\n        </t-test-range-slider>\n      </div>\n      <div class=\"add-remove-center fa-fw\" [style.color]=\"getColor(0)\">\n        <i *ngIf=\"canAdd('power')\" class=\"fa fa-plus-circle\" (click)=\"addInput('power')\"\n          ngbPopover=\"Click to add line to plot for alternate value of &quot;n&quot; or 95% confidence interval width\"\n          triggers=\"hover\" container=\"body\"></i>\n      </div>\n    </div>\n    <ng-template [ngIf]=\"project.extraName == 'power'\">\n      <div class=\"grow-horiz order-2 alt\" *ngFor=\"let ex of project.models.slice(1).reverse(); let i = index; trackBy: trackByExtra\">\n        <div class=\"grow-vert range-slider\">\n          <t-test-range-slider name=\"delta-{{i+2}}\" label=\"Difference in population means #{{i+2}}\"\n            [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\"\n            [ngModel]=\"ex.delta | round:1\" (ngModelChange)=\"changeModel(i+1, 'delta', $event)\">\n          </t-test-range-slider>\n\n          <t-test-range-slider name=\"power-{{i+2}}\" label=\"Power #{{i+2}}\"\n            [min]=\"min.power\" [max]=\"max.power\"\n            [hard-min]=\"min.power\" [hard-max]=\"max.power\"\n            [ngModel]=\"ex.power | round\" (ngModelChange)=\"changeModel(i+1, 'power', $event)\">\n          </t-test-range-slider>\n        </div>\n        <div class=\"add-remove-center fa-fw\" [style.color]=\"getColor(i+1)\">\n          <i class=\"fa fa-minus-circle\" (click)=\"removeInput(i+1)\"\n            ngbPopover=\"Remove line from plot for &quot;delta&quot; and &quot;power&quot;\"\n            triggers=\"hover\" container=\"body\"></i>\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n<ng-template #deltaHelp>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim nunc,\n  rutrum at ligula id, tempor tincidunt nunc.\n</ng-template>\n<ng-template #powerHelp>\n  For independent tests power is probability of correctly rejecting the\n  null hypothesis of equal population means given n experimental\n  patients, m control patients per experimental patient, a Type I error\n  probability α and a true difference in population means of δ. For\n  paired tests it is the probability of correctly rejecting the null\n  hypothesis of equal population means given n pairs of patients, a Type\n  I error probability α and a true difference in population means of δ.\n</ng-template>\n<ng-template #nHelp>\n  For independent t-tests n is the number of experimental subjects. For\n  pair test n is the number of pairs.\n</ng-template>\n<ng-template #ciHelp>\n  Specifying the 95% confidence interval width will automatically calculate\n  the sample size parameter.\n</ng-template>\n"

/***/ }),

/***/ "./src/app/t-test/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__("./src/app/t-test/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__t_test__ = __webpack_require__("./src/app/t-test/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plot_options_service__ = __webpack_require__("./src/app/t-test/plot-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__palette_service__ = __webpack_require__("./src/app/t-test/palette.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectComponent = (function () {
    function ProjectComponent(plotOptions, palette) {
        this.plotOptions = plotOptions;
        this.palette = palette;
        this.modelChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.model = this.project.getModel(0);
        this.min = new __WEBPACK_IMPORTED_MODULE_2__t_test__["a" /* TTest */](this.model);
        this.max = new __WEBPACK_IMPORTED_MODULE_2__t_test__["a" /* TTest */](this.model);
        this.min.alpha = 0.01;
        this.max.alpha = 0.99;
        this.min.power = 0.01;
        this.max.power = 0.99;
        this.calculateSliderRange('n');
        this.calculateSliderRange('ci');
        this.calculateSliderRange('delta');
        this.calculateSliderRange('sigma');
    };
    ProjectComponent.prototype.isOutput = function (name) {
        return this.model.output === name;
    };
    ProjectComponent.prototype.canAdd = function (name) {
        return this.model.output !== name &&
            (this.project.extraName === undefined || this.project.extraName === name);
    };
    ProjectComponent.prototype.getColor = function (index) {
        return this.palette.getColor(this.project.modelCount() - 1 - index, this.plotOptions.paletteTheme);
    };
    ProjectComponent.prototype.addInput = function (name) {
        var _this = this;
        if (this.project.extraName && this.project.extraName != name) {
            throw new Error("extra attributes must be mutually exclusive");
        }
        this.project.extraName = name;
        var model = this.model.shallowClone();
        this.project.addModel(model).then(function () {
            _this.modelChanged.emit();
        });
    };
    ProjectComponent.prototype.removeInput = function (index) {
        this.project.removeModel(index);
        if (this.project.modelCount() == 1) {
            this.project.extraName = undefined;
        }
        this.modelChanged.emit();
    };
    ProjectComponent.prototype.trackByExtra = function (index, item) {
        return index;
    };
    ProjectComponent.prototype.calculateSliderRange = function (name) {
        var value = this.model[name];
        var range = [value * 0.5, value * 1.5].sort(function (a, b) { return a - b; });
        this.min[name] = range[0];
        this.max[name] = range[1];
    };
    ProjectComponent.prototype.changeModel = function (index, key, value) {
        var _this = this;
        this.project.updateModel(index, key, value).then(function () {
            _this.adjustMinMax(index);
            _this.modelChanged.emit();
        });
    };
    ProjectComponent.prototype.adjustMinMax = function (index) {
        var model = this.project.getModel(index);
        if (model.sigma < this.min.sigma) {
            this.min.sigma = Math.floor(model.sigma);
        }
        else if (model.sigma > this.max.sigma) {
            this.max.sigma = Math.ceil(model.sigma);
        }
        if (model.delta < this.min.delta) {
            this.min.delta = Math.floor(model.delta);
        }
        else if (model.delta > this.max.delta) {
            this.max.delta = Math.ceil(model.delta);
        }
        if (model.n < this.min.n) {
            this.min.n = Math.floor(model.n);
        }
        else if (model.n > this.max.n) {
            this.max.n = Math.ceil(model.n);
        }
        if (model.ci < this.min.ci) {
            this.min.ci = Math.floor(model.ci);
        }
        else if (model.ci > this.max.ci) {
            this.max.ci = Math.ceil(model.ci);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */])
    ], ProjectComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "modelChanged", void 0);
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 't-test-project',
            template: __webpack_require__("./src/app/t-test/project/project.component.html"),
            styles: [__webpack_require__("./src/app/t-test/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__plot_options_service__["a" /* PlotOptionsService */],
            __WEBPACK_IMPORTED_MODULE_4__palette_service__["a" /* PaletteService */]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/t-test/range-slider/range-slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\ndiv.slider-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 5px;\n  border-radius: 5px;\n}\n\ndiv.slider-group .label span {\n  font-weight: bold;\n}\n\ndiv.slider-group .slider,\ndiv.slider-group .number {\n  padding-top: 2ex;\n}\ndiv.slider-group .add-remove {\n  padding-top: 2.3ex;\n}\n\ndiv.slider-group div.inputs input {\n  width: 100%;\n}\n\ndiv.slider-group div.slider {\n  position: relative;\n  padding-left: 0;\n  padding-right: 0;\n}\n\ndiv.slider-group div.slider input {\n  display: block;\n}\n\ndiv.slider-group div.slider div.min,\ndiv.slider-group div.slider div.max {\n  position: absolute;\n  font-size: x-small;\n  top: 0;\n  background-color: #ddd;\n  border-radius: 1ex;\n  padding: 0.5ex;\n}\n\ndiv.slider-group.output div.slider div.min,\ndiv.slider-group.output div.slider div.max {\n  background-color: #ccc;\n}\n\ndiv.slider-group div.slider div.min {\n  left: 0;\n}\n\ndiv.slider-group div.slider div.max {\n  right: 0;\n}\n\n.fa {\n  opacity: 0.7;\n}\n.fa:hover {\n  opacity: 1;\n}\n.dot {\n  color: red;\n  opacity: 1;\n}\n\n.palette-color .fa {\n  opacity: 1;\n}\n\nspan.error {\n  color: red;\n}\n\ninput.error {\n  border: 2px solid red;\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/t-test/range-slider/range-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-group\">\n  <ng-template [ngIf]=\"labelTpl\" [ngIfElse]=\"standardLabel\">\n    <ng-template [ngTemplateOutlet]=\"labelTpl\"></ng-template>\n  </ng-template>\n  <ng-template #standardLabel>\n    <div class=\"label\" *ngIf=\"label\">\n      {{label}}\n      <span *ngIf=\"isOutput\">(Computed value)</span>\n      <ng-template [ngIf]=\"helpTpl\">\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"rsHelp\" popoverTitle=\"{{label}}\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n        <ng-template #rsHelp>\n          <ng-template [ngTemplateOutlet]=\"helpTpl\"></ng-template>\n        </ng-template>\n      </ng-template>\n      <i *ngIf=\"showDot\" class=\"fa fa-circle dot\"></i>\n    </div>\n  </ng-template>\n  <div class=\"inputs row\">\n    <div class=\"col-sm-9\">\n      <div class=\"slider\">\n        <div class=\"min\">{{floor(min)}}</div>\n        <input #range name=\"{{name}}\" type=\"range\" step=\"{{step}}\"\n               min=\"{{min}}\" max=\"{{max}}\"\n               [value]=\"value\"\n               [disabled]=\"isOutput\"\n               (change)=\"rangeChanged(range.value)\"\n               (input)=\"rangeInput(range.value)\" />\n        <div class=\"max\">{{ceil(max)}}</div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"number\">\n        <input #number [class.error]=\"hasError\" name=\"{{name}}\" type=\"number\"\n               step=\"{{step}}\" [min]=\"hardMin\" [max]=\"hardMax\" [value]=\"value\"\n               [disabled]=\"isOutput\"\n               (change)=\"numberChanged(number.value)\"\n               (input)=\"numberInput(number.value)\"\n               (blur)=\"blurred()\"\n               [ngbPopover]=\"errorMsg\" triggers=\"manual\"\n               container=\"body\" #errorPopover=\"ngbPopover\" />\n        <ng-template #errorMsg>\n          <span class=\"error\">Value is out of range ({{hardMin}}, {{hardMax}}).</span><br/>\n          Current value: {{value}}\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/t-test/range-slider/range-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RangeSliderLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RangeSliderHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RangeSliderLabel = (function () {
    function RangeSliderLabel(templateRef) {
        this.templateRef = templateRef;
    }
    RangeSliderLabel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: 'ng-template[rsLabel]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]])
    ], RangeSliderLabel);
    return RangeSliderLabel;
}());

var RangeSliderHelp = (function () {
    function RangeSliderHelp(templateRef) {
        this.templateRef = templateRef;
    }
    RangeSliderHelp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: 'ng-template[rsHelp]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]])
    ], RangeSliderHelp);
    return RangeSliderHelp;
}());

var RangeSliderComponent = (function () {
    function RangeSliderComponent() {
        this.step = 0.01;
        this.isOutput = false;
        this.showDot = false;
        this.hasError = false;
        this.inputSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.dirty = false;
    }
    RangeSliderComponent_1 = RangeSliderComponent;
    RangeSliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputSubject.
            debounceTime(400).
            filter(function (value) {
            // skip values when not dirty
            return _this.dirty;
        }).
            subscribe(function (value) {
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
        this.trySetValue(newValue);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RangeSliderComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RangeSliderComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], RangeSliderComponent.prototype, "min", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], RangeSliderComponent.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RangeSliderComponent.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hard-min'),
        __metadata("design:type", Number)
    ], RangeSliderComponent.prototype, "hardMin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hard-max'),
        __metadata("design:type", Number)
    ], RangeSliderComponent.prototype, "hardMax", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('is-output'),
        __metadata("design:type", Object)
    ], RangeSliderComponent.prototype, "isOutput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('help-tpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], RangeSliderComponent.prototype, "helpTpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('label-tpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], RangeSliderComponent.prototype, "labelTpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('show-dot'),
        __metadata("design:type", Object)
    ], RangeSliderComponent.prototype, "showDot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(RangeSliderLabel),
        __metadata("design:type", RangeSliderLabel)
    ], RangeSliderComponent.prototype, "rsLabelTpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(RangeSliderHelp),
        __metadata("design:type", RangeSliderHelp)
    ], RangeSliderComponent.prototype, "rsHelpTpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("errorPopover"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbPopover */])
    ], RangeSliderComponent.prototype, "errorPopover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("number"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], RangeSliderComponent.prototype, "numberElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("range"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], RangeSliderComponent.prototype, "rangeElement", void 0);
    RangeSliderComponent = RangeSliderComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 't-test-range-slider',
            template: __webpack_require__("./src/app/t-test/range-slider/range-slider.component.html"),
            styles: [__webpack_require__("./src/app/t-test/range-slider/range-slider.component.css")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* forwardRef */])(function () { return RangeSliderComponent_1; }),
                    multi: true
                }
            ]
        })
    ], RangeSliderComponent);
    return RangeSliderComponent;
    var RangeSliderComponent_1;
}());



/***/ }),

/***/ "./src/app/t-test/range.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Range; });
var Range = (function () {
    function Range(min, max) {
        this.min = min;
        this.max = max;
    }
    Range.combine = function (ranges) {
        var range = new Range(ranges[0].min, ranges[0].max);
        for (var i = 1; i < ranges.length; i++) {
            if (ranges[i].min < range.min) {
                range.min = ranges[i].min;
            }
            if (ranges[i].max > range.max) {
                range.max = ranges[i].max;
            }
        }
        return range;
    };
    Range.prototype.toArray = function () {
        return [this.min, this.max];
    };
    return Range;
}());



/***/ }),

/***/ "./src/app/t-test/reverse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value, args) {
        return value.slice().reverse();
    };
    ReversePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/t-test/round.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (value, digits) {
        if (digits === void 0) { digits = 2; }
        var amount = Math.pow(10, digits);
        return Math.round(value * amount) / amount;
    };
    RoundPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'round'
        })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/t-test/start/start.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overview {\n  text-align: right;\n}\n\n.btn-secondary {\n  padding: 0.3rem 0.3rem;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; /* red */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/t-test/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #startForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"output\">\n      What do you want to know?\n      <button type=\"button\" class=\"btn btn-secondary fa fa-question-circle\"\n        (click)=\"toggleHelp()\"></button>\n    </label>\n    <select class=\"form-control\" id=\"output\"\n            required\n            [(ngModel)]=\"model.output\" name=\"output\">\n      <option></option>\n      <option value=\"n\">Sample size by Power</option>\n      <option value=\"nByCI\">Sample size by 95% CI</option>\n      <option value=\"power\">Power</option>\n      <option value=\"delta\">Detectable alternative</option>\n    </select>\n  </div>\n  <!--\n  <div class=\"form-group\" *ngIf=\"model.output\">\n    <label for=\"design\">Paired or independent?</label>\n    <select class=\"form-control\" id=\"design\"\n            required\n            [(ngModel)]=\"model.design\" name=\"design\">\n      <option></option>\n      <option>Paired</option>\n      <option>Independent</option>\n    </select>\n  </div>\n  -->\n  <div *ngIf=\"model.output\">\n    <div class=\"form-group\">\n      <label for=\"alpha\">\n        Type I Error (&alpha;)\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"alphaHelp\" popoverTitle=\"Type I Error (&alpha;)\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n      </label>\n      <input class=\"form-control\" id=\"alpha\"\n             type=\"number\" step=\"0.01\" min=\"0.01\" max=\"0.99\"\n             required\n             [(ngModel)]=\"model.alpha\" name=\"alpha\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sigma\">\n        Standard deviation (&sigma;)\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"sigmaHelp\" popoverTitle=\"Standard deviation (&sigma;)\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n      </label>\n      <input class=\"form-control\" id=\"sigma\"\n             type=\"number\" step=\"0.1\" min=\"0.1\"\n             required\n             [(ngModel)]=\"model.sigma\" name=\"sigma\">\n    </div>\n    <div *ngIf=\"needDelta()\" class=\"form-group\">\n      <label for=\"delta\">Difference in population means (&delta;)</label>\n      <input class=\"form-control\" id=\"delta\"\n             type=\"number\" step=\"0.1\"\n             required\n             [(ngModel)]=\"model.delta\" name=\"delta\">\n    </div>\n    <div *ngIf=\"needPower()\" class=\"form-group\">\n      <label for=\"power\">\n        Power\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"powerHelp\" popoverTitle=\"Power\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n      </label>\n      <input class=\"form-control\" id=\"power\"\n             type=\"number\" step=\"0.01\" min=\"0.01\" max=\"0.99\"\n             required\n             [(ngModel)]=\"model.power\" name=\"power\">\n    </div>\n    <div *ngIf=\"needCI()\" class=\"form-group\">\n      <label for=\"ci\">95% confidence interval width</label>\n      <input class=\"form-control\" id=\"ci\" type=\"number\" required\n             [(ngModel)]=\"model.ci\" name=\"ci\">\n    </div>\n    <ng-template [ngIf]=\"needNOrCI()\">\n      <div class=\"form-check form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"ciMode\" id=\"ciMode-false\"\n                 [(ngModel)]=\"model.ciMode\" [value]=\"false\">\n          Sample size\n          <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n            [ngbPopover]=\"nHelp\" popoverTitle=\"Sample size\"\n            placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n        </label>\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"ciMode\" id=\"ciMode-true\"\n                 [(ngModel)]=\"model.ciMode\" [value]=\"true\">\n          95% confidence interval width\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <input *ngIf=\"!model.ciMode\"\n               class=\"form-control\" id=\"n\"\n               type=\"number\" min=\"1\"\n               required\n               [(ngModel)]=\"model.n\" name=\"n\">\n        <input *ngIf=\"model.ciMode\"\n               class=\"form-control\" id=\"ci\"\n               type=\"number\" min=\"1\" step=\"0.1\"\n               required\n               [(ngModel)]=\"model.ci\" name=\"ci\">\n      </div>\n\n    </ng-template>\n    <ng-template [ngIf]=\"needPowerOrDelta()\">\n      <div class=\"form-check form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"deltaMode\" id=\"deltaMode-false\"\n                 [(ngModel)]=\"model.deltaMode\" [value]=\"false\">\n          Power\n          <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n            [ngbPopover]=\"powerHelp\" popoverTitle=\"Power\"\n            placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n        </label>\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"deltaMode\" id=\"deltaMode-true\"\n                 [(ngModel)]=\"model.deltaMode\" [value]=\"true\">\n          Difference in population means (&delta;)\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <input *ngIf=\"!model.deltaMode\"\n               class=\"form-control\" id=\"power\"\n               type=\"number\" step=\"0.01\" min=\"0.01\" max=\"0.99\"\n               required\n               [(ngModel)]=\"model.power\" name=\"power\">\n        <input *ngIf=\"model.deltaMode\"\n               class=\"form-control\" id=\"delta\"\n               type=\"number\" step=\"0.1\"\n               required\n               [(ngModel)]=\"model.delta\" name=\"delta\">\n      </div>\n\n    </ng-template>\n    <button type=\"submit\" class=\"btn btn-success\"\n            [disabled]=\"!startForm.form.valid\">\n      Calculate\n    </button>\n  </div>\n</form>\n<ng-template #alphaHelp>\n  The Type I error probability for a two sided test. This is the\n  probability that we will falsely reject the null hypothesis.\n</ng-template>\n<ng-template #sigmaHelp>\n  For independent tests σ is the within group standard deviation. For\n  paired designs it is the standard deviation of difference in the\n  response of matched pairs.\n</ng-template>\n<ng-template #powerHelp>\n  For independent tests power is probability of correctly rejecting the null\n  hypothesis of equal population means given n experimental patients, m control\n  patients per experimental patient, a Type I error probability α and a true\n  difference in population means of δ. For paired tests it is the probability\n  of correctly rejecting the null hypothesis of equal population means given n\n  pairs of patients, a Type I error probability α and a true difference in\n  population means of δ.\n</ng-template>\n<ng-template #nHelp>\n  For independent t-tests n is the number of experimental subjects. For\n  pair test n is the number of pairs.\n</ng-template>\n"

/***/ }),

/***/ "./src/app/t-test/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__t_test__ = __webpack_require__("./src/app/t-test/t-test.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartComponent = (function () {
    function StartComponent() {
        this.onCalculate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onToggleHelp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__t_test__["a" /* TTest */])
    ], StartComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], StartComponent.prototype, "onCalculate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], StartComponent.prototype, "onToggleHelp", void 0);
    StartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 't-test-start',
            template: __webpack_require__("./src/app/t-test/start/start.component.html"),
            styles: [__webpack_require__("./src/app/t-test/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/t-test/t-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n#t-test {\n}\n\n#t-test-main {\n  /*min-height: 85vh;*/\n}\n\n#t-test-sidebar {\n  background-color: #e5e5e5;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  /*margin: 10px;*/\n  position: relative;\n}\n\n#t-test-sidebar .overview {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.plot-buttons {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: large;\n  z-index: 99;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.plot-buttons button {\n  padding: 0.4rem 0;\n  margin: 0.2rem 0;\n  width: 2.4rem;\n}\n\n#t-test-sidebar /deep/ a.nav-link {\n  border-color: #bbb #bbb #888;\n  background-color: #eee;\n}\n\n#t-test-sidebar /deep/ a.nav-link:hover {\n  border-color: #888;\n  background-color: #f5f5f5;\n  color: #0275d8;\n}\n\n#t-test-sidebar /deep/ a.nav-link.active {\n  border-color: #888 #888 #fff;\n  background-color: #fff;\n}\n\n#t-test-sidebar /deep/ a.nav-link.active:hover {\n  color: #464a4c;\n}\n\n#t-test-sidebar /deep/ ngb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  /*width: 100%;*/\n}\n\n#t-test-sidebar /deep/ ul.nav-tabs {\n  /*display: flex;*/\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  border-bottom: 1px solid #888;\n}\n\n#t-test-sidebar /deep/ .tab-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n#t-test-sidebar /deep/ .tab-pane {\n  /*display: flex;*/\n  /*flex-direction: column;*/\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  padding: 10px;\n  border: 1px solid #888;\n  border-top: 0;\n  overflow: auto;\n  max-height: 70vh;\n}\n\n#t-test-sidebar /deep/ .tab-pane.active {\n  background: white;\n}\n\n#t-test-footer {\n  margin: 20px 0;\n  padding: 20px;\n  text-align: center;\n}\n#t-test-footer img {\n  margin: auto;\n  display: block;\n}\n#t-test-footer div.build {\n  margin-top: 5px;\n  font-size: smaller;\n}\n\n.block-selection * {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/t-test/t-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"t-test\" class=\"d-flex flex-column h-100\"\n  [class.block-selection]=\"blockSelection\" (mouseup)=\"onMouseUp()\">\n\n  <div id=\"t-test-main\" class=\"row d-flex\" style=\"flex: 1 0 auto\">\n    <div class=\"col-4 d-flex flex-column justify-content-between\">\n      <div id=\"t-test-sidebar\" class=\"d-flex flex-row\" style=\"flex: auto\">\n        <div class=\"overview\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleHelp('overview')\">\n            Overview <i class=\"fa fa-question-circle\"></i>\n          </button>\n        </div>\n        <ngb-tabset #tabset (tabChange)=\"onTabChange($event)\">\n          <ngb-tab title=\"Start\" id=\"t-test-start\">\n            <ng-template ngbTabContent>\n              <t-test-start [model]=\"newModel\"\n                (onCalculate)=\"calculate()\"\n                (onToggleHelp)=\"toggleHelp('start')\">\n              </t-test-start>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab *ngFor=\"let project of projects; let i = index\"\n            title=\"Test {{i+1}}\" id=\"t-test-{{i+1}}\">\n            <ng-template ngbTabContent>\n              <t-test-project [project]=\"project\" (modelChanged)=\"onModelChanged()\">\n              </t-test-project>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n\n      <div id=\"t-test-footer\" class=\"d-flex flex-column\">\n        <img src=\"assets/biostat.jpg\">\n        <div class=\"build\">\n          Build version: {{ commitHash }} ({{ buildTimestamp | date }})\n        </div>\n      </div>\n    </div>\n    <div class=\"col-8\">\n      <div class=\"plot-buttons\" *ngIf=\"selectedProject\">\n        <button class=\"btn btn-secondary\" (click)=\"togglePlotOptions()\" title=\"Toggle plot options\">\n          <i class=\"fa fa-cog\"></i>\n        </button>\n        <button class=\"btn btn-secondary\" (click)=\"save()\" title=\"Export plots\">\n          <i class=\"fa fa-floppy-o\"></i>\n        </button>\n        <button class=\"btn btn-secondary\" (click)=\"toggleHoverBox()\" title=\"Toggle hover box\">\n          <i class=\"fa\" [class.fa-cubes]=\"hoverBoxEnabled\" [class.fa-cube]=\"!hoverBoxEnabled\"></i>\n        </button>\n      </div>\n      <t-test-output-pane #outputPane\n        [project]=\"selectedProject\"\n        [hover-disabled]=\"!hoverBoxEnabled\"\n        (modelChanged)=\"onModelChanged()\">\n      </t-test-output-pane>\n    </div>\n  </div>\n  <t-test-draggable-dialog #helpDialog\n    [title]=\"helpTitles[helpTopic]\"\n    start-x-offset=\"33%\" start-y-offset=\"55px\"\n    (drag-start)=\"onChildDragStarted()\"\n    (drag-end)=\"onChildDragEnded()\">\n    <t-test-help [topic]=\"helpTopic\"></t-test-help>\n  </t-test-draggable-dialog>\n  <t-test-draggable-dialog #plotOptionsDialog\n    title=\"Plot options\"\n    start-x-offset=\"5%\" start-y-offset=\"55px\"\n    (drag-start)=\"onChildDragStarted()\"\n    (drag-end)=\"onChildDragEnded()\">\n    <t-test-plot-options [project]=\"selectedProject\"\n      (optionsChanged)=\"onPlotOptionsChanged()\">\n    </t-test-plot-options>\n  </t-test-draggable-dialog>\n</div>\n"

/***/ }),

/***/ "./src/app/t-test/t-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__t_test__ = __webpack_require__("./src/app/t-test/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_factory_service__ = __webpack_require__("./src/app/t-test/project-factory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__draggable_dialog_draggable_dialog_component__ = __webpack_require__("./src/app/t-test/draggable-dialog/draggable-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__output_pane_output_pane_component__ = __webpack_require__("./src/app/t-test/output-pane/output-pane.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TTestComponent = (function () {
    function TTestComponent(projectFactory) {
        this.projectFactory = projectFactory;
        this.newModel = new __WEBPACK_IMPORTED_MODULE_3__t_test__["a" /* TTest */]();
        this.projects = [];
        this.commitHash = "07b7c4c940bafe1573418f6c5bd897084bd06a45".substr(0, 7);
        this.buildTimestamp = "Mon Feb 12 2018 13:51:45 GMT-0600 (CST)";
        this.helpTitles = {
            'overview': 'PS Overview',
            'start': 'PS Start Tab'
        };
        this.helpTopic = 'overview';
        this.blockSelection = false;
        this.hoverBoxEnabled = true;
    }
    TTestComponent.prototype.ngOnInit = function () {
        /* Add example project */
        var model = new __WEBPACK_IMPORTED_MODULE_3__t_test__["a" /* TTest */]({
            output: 'n', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 32
        });
        this.createProject(model, false);
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
    TTestComponent.prototype.createProject = function (model, select) {
        var _this = this;
        if (select === void 0) { select = true; }
        var project = this.projectFactory.create();
        project.addModel(model).
            then(function (result) {
            _this.projects.push(project);
            if (select) {
                setTimeout(function () {
                    _this.tabset.select("t-test-" + _this.projects.length);
                }, 1);
            }
        }).
            catch(function (err) { return console.error(err); });
    };
    TTestComponent.prototype.onTabChange = function (event) {
        var md = event.nextId.match(/\d+/);
        if (md) {
            var index = parseInt(md[0]) - 1;
            this.selectedProject = this.projects[index];
        }
        else {
            this.selectedProject = undefined;
        }
    };
    TTestComponent.prototype.onModelChanged = function () {
        this.outputPane.redrawPlots();
    };
    TTestComponent.prototype.onPlotOptionsChanged = function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('plotOptionsDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */])
    ], TTestComponent.prototype, "plotOptionsDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('helpDialog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */])
    ], TTestComponent.prototype, "helpDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('tabset'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbTabset */])
    ], TTestComponent.prototype, "tabset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('outputPane'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__output_pane_output_pane_component__["a" /* OutputPaneComponent */])
    ], TTestComponent.prototype, "outputPane", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TTestComponent.prototype, "onResize", null);
    TTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 't-test-root',
            template: __webpack_require__("./src/app/t-test/t-test.component.html"),
            styles: [__webpack_require__("./src/app/t-test/t-test.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__project_factory_service__["a" /* ProjectFactoryService */]])
    ], TTestComponent);
    return TTestComponent;
}());



/***/ }),

/***/ "./src/app/t-test/t-test.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TTestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__t_test_service__ = __webpack_require__("./src/app/t-test/t-test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plot_options_service__ = __webpack_require__("./src/app/t-test/plot-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__palette_service__ = __webpack_require__("./src/app/t-test/palette.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project_factory_service__ = __webpack_require__("./src/app/t-test/project-factory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__export_service__ = __webpack_require__("./src/app/t-test/export.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__t_test_component__ = __webpack_require__("./src/app/t-test/t-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__start_start_component__ = __webpack_require__("./src/app/t-test/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__range_slider_range_slider_component__ = __webpack_require__("./src/app/t-test/range-slider/range-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__project_project_component__ = __webpack_require__("./src/app/t-test/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__output_pane_output_pane_component__ = __webpack_require__("./src/app/t-test/output-pane/output-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__help_help_component__ = __webpack_require__("./src/app/t-test/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__plot_options_plot_options_component__ = __webpack_require__("./src/app/t-test/plot-options/plot-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__plot_plot_component__ = __webpack_require__("./src/app/t-test/plot/plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__bottom_plot_bottom_plot_component__ = __webpack_require__("./src/app/t-test/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__export_plots_export_plots_component__ = __webpack_require__("./src/app/t-test/export-plots/export-plots.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__draggable_dialog_draggable_dialog_component__ = __webpack_require__("./src/app/t-test/draggable-dialog/draggable-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__round_pipe__ = __webpack_require__("./src/app/t-test/round.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ceil_pipe__ = __webpack_require__("./src/app/t-test/ceil.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reverse_pipe__ = __webpack_require__("./src/app/t-test/reverse.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__format_fixed_pipe__ = __webpack_require__("./src/app/t-test/format-fixed.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [
    { path: 't-test', component: __WEBPACK_IMPORTED_MODULE_11__t_test_component__["a" /* TTestComponent */] },
];
var TTestModule = (function () {
    function TTestModule() {
    }
    TTestModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__t_test_component__["a" /* TTestComponent */],
                __WEBPACK_IMPORTED_MODULE_12__start_start_component__["a" /* StartComponent */],
                __WEBPACK_IMPORTED_MODULE_13__range_slider_range_slider_component__["a" /* RangeSliderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__range_slider_range_slider_component__["c" /* RangeSliderLabel */],
                __WEBPACK_IMPORTED_MODULE_13__range_slider_range_slider_component__["b" /* RangeSliderHelp */],
                __WEBPACK_IMPORTED_MODULE_14__project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_15__output_pane_output_pane_component__["a" /* OutputPaneComponent */],
                __WEBPACK_IMPORTED_MODULE_16__help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_17__plot_options_plot_options_component__["a" /* PlotOptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__plot_plot_component__["a" /* PlotComponent */],
                __WEBPACK_IMPORTED_MODULE_19__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */],
                __WEBPACK_IMPORTED_MODULE_20__export_plots_export_plots_component__["a" /* ExportPlotsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_22__round_pipe__["a" /* RoundPipe */],
                __WEBPACK_IMPORTED_MODULE_23__ceil_pipe__["a" /* CeilPipe */],
                __WEBPACK_IMPORTED_MODULE_24__reverse_pipe__["a" /* ReversePipe */],
                __WEBPACK_IMPORTED_MODULE_25__format_fixed_pipe__["a" /* FormatFixedPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__t_test_service__["a" /* TTestService */],
                __WEBPACK_IMPORTED_MODULE_7__plot_options_service__["a" /* PlotOptionsService */],
                __WEBPACK_IMPORTED_MODULE_8__palette_service__["a" /* PaletteService */],
                __WEBPACK_IMPORTED_MODULE_9__project_factory_service__["a" /* ProjectFactoryService */],
                __WEBPACK_IMPORTED_MODULE_10__export_service__["a" /* ExportService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_20__export_plots_export_plots_component__["a" /* ExportPlotsComponent */]
            ]
        })
    ], TTestModule);
    return TTestModule;
}());



/***/ }),

/***/ "./src/app/t-test/t-test.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TTestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TTestService = (function () {
    function TTestService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/ttests";
    }
    TTestService.prototype.calculate = function (model) {
        var url = this.apiUrl + "/calc";
        var params = model.params();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.
            post(url, JSON.stringify(params), options).
            toPromise().
            then(function (response) { return response.json(); }).
            catch(this.handleError);
    };
    TTestService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TTestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TTestService);
    return TTestService;
}());



/***/ }),

/***/ "./src/app/t-test/t-test.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TTest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range__ = __webpack_require__("./src/app/t-test/range.ts");

var TTest = (function () {
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
    TTest.prototype.calculateRanges = function () {
        var values, min, max;
        values = [1.5 * this.sigma, -1.5 * this.sigma].sort(function (a, b) { return a - b; });
        var deltaRange = new __WEBPACK_IMPORTED_MODULE_0__range__["a" /* Range */](values[0], values[1]);
        switch (this.output) {
            case "n":
            case "nByCI":
                values = [this.n * 0.5, this.n * 1.5].sort(function (a, b) { return a - b; });
                min = Math.floor(values[0] * 100) / 100;
                max = Math.ceil(values[1] * 100) / 100;
                this.nRange = new __WEBPACK_IMPORTED_MODULE_0__range__["a" /* Range */](min, max);
                this.powerRange = this.makeXRange(this.nVsPower, this.nRange);
                this.deltaRange = this.makeXRange(this.nVsDelta, this.nRange);
                break;
            case "power":
                this.powerRange = new __WEBPACK_IMPORTED_MODULE_0__range__["a" /* Range */](0, 1);
                this.nRange = this.makeXRange(this.powerVsN, this.powerRange);
                this.deltaRange = deltaRange;
                break;
            case "delta":
                values = [this.delta * 0.5, this.delta * 1.5].sort(function (a, b) { return a - b; });
                min = Math.floor(values[0] * 100) / 100;
                max = Math.ceil(values[1] * 100) / 100;
                this.deltaRange = new __WEBPACK_IMPORTED_MODULE_0__range__["a" /* Range */](min, max);
                this.powerRange = this.makeXRange(this.deltaVsPower, this.deltaRange);
                this.nRange = this.makeXRange(this.deltaVsN, this.deltaRange);
                break;
        }
        this.pSpaceRange = deltaRange;
        this.precisionRange = new __WEBPACK_IMPORTED_MODULE_0__range__["a" /* Range */](this.delta - (this.ci / 2), this.delta + (this.ci / 2));
        if (this.precisionRange.min < this.pSpaceRange.min) {
            this.pSpaceRange.min = this.precisionRange.min - Math.abs(this.precisionRange.min * 0.5);
        }
        if (this.precisionRange.max > this.pSpaceRange.max) {
            this.pSpaceRange.max = this.precisionRange.max + Math.abs(this.precisionRange.max * 0.5);
        }
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
    TTest.prototype.makeXRange = function (data, yRange) {
        var minIndex = 0, maxIndex = data.length - 1;
        for (var i = 1; i < data.length; i++) {
            if (data[i].y >= yRange.min) {
                minIndex = i;
                break;
            }
        }
        for (var i = data.length - 2; i >= 0; i--) {
            if (data[i].y <= yRange.max) {
                maxIndex = i;
                break;
            }
        }
        var values = [data[minIndex].x, data[maxIndex].x].sort(function (a, b) { return a - b; });
        return new __WEBPACK_IMPORTED_MODULE_0__range__["a" /* Range */](values[0], values[1]);
    };
    return TTest;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: "/ps-backend",
    baseHref: "/ps/"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map