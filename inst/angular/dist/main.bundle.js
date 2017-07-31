webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/abstract-plot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plot_options__ = __webpack_require__("../../../../../src/app/plot-options.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractPlotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbstractPlotComponent = (function () {
    function AbstractPlotComponent() {
    }
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
        var line = __WEBPACK_IMPORTED_MODULE_1_d3__["line"]().
            x(function (d, i) { return _this.xScale(d[xName]); }).
            y(function (d, i) { return _this.yScale(d[yName]); });
        return line(data);
    };
    return AbstractPlotComponent;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], AbstractPlotComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__plot_options__["a" /* PlotOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__plot_options__["a" /* PlotOptions */]) === "function" && _a || Object)
], AbstractPlotComponent.prototype, "plotOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('plot'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object)
], AbstractPlotComponent.prototype, "plotElement", void 0);
var _a, _b;
//# sourceMappingURL=abstract-plot.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app {\n}\n\n#main {\n  /*min-height: 85vh;*/\n}\n\n#sidebar {\n  background-color: #e5e5e5;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  /*margin: 10px;*/\n  position: relative;\n}\n\n#sidebar .overview {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.plot-buttons {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: large;\n  z-index: 99;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.plot-buttons button {\n  padding: 0.4rem 0;\n  margin: 0.2rem 0;\n  width: 2.4rem;\n}\n\n:host /deep/ a.nav-link {\n  border-color: #bbb #bbb #888;\n  background-color: #eee;\n}\n\n:host /deep/ a.nav-link:hover {\n  border-color: #888;\n  background-color: #f5f5f5;\n  color: #0275d8;\n}\n\n:host /deep/ a.nav-link.active {\n  border-color: #888 #888 #fff;\n}\n\n:host /deep/ a.nav-link.active:hover {\n  background-color: #fff;\n  color: #464a4c;\n}\n\n#sidebar /deep/ ngb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  /*width: 100%;*/\n}\n\n#sidebar /deep/ ul.nav-tabs {\n  /*display: flex;*/\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  border-bottom: 1px solid #888;\n}\n\n#sidebar /deep/ .tab-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n#sidebar /deep/ .tab-pane {\n  /*display: flex;*/\n  /*flex-direction: column;*/\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  padding: 10px;\n  border: 1px solid #888;\n  border-top: 0;\n  overflow: auto;\n  max-height: 73vh;\n}\n\n#sidebar /deep/ .tab-pane.active {\n  background: white;\n}\n\n#footer {\n  margin: 20px 0;\n  padding: 20px;\n  text-align: center;\n}\n#footer img {\n  margin: auto;\n  display: block;\n}\n#footer div.text {\n  margin-top: 10px;\n}\n\n.block-selection * {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"container-fluid d-flex flex-column h-100\"\n  [class.block-selection]=\"blockSelection\" (mouseup)=\"mouseup()\">\n  <nav class=\"navbar d-flex flex-nowrap flex-row justify-content-between\" style=\"flex: 0 0 auto\">\n    <div class=\"navbar-brand\">\n      <img src=\"assets/ps.jpg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n      Power and Sample Size\n    </div>\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">t-test</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Survival</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Dichotomous</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Regression</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Mantel-Haenszel</a>\n      </li>\n    </ul>\n  </nav>\n\n  <div id=\"main\" class=\"row d-flex\" style=\"flex: 1 0 auto\">\n    <div class=\"col-4 d-flex flex-column justify-content-between\">\n      <div id=\"sidebar\" class=\"d-flex flex-row\" style=\"flex: auto\">\n        <div class=\"overview\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleHelp('overview')\">\n            Overview <i class=\"fa fa-question-circle\"></i>\n          </button>\n        </div>\n        <ngb-tabset #tabsetChild (tabChange)=\"onTabChange($event)\">\n          <ngb-tab title=\"Start\" id=\"start\">\n            <ng-template ngbTabContent>\n              <app-start [model]=\"newModel\"\n                (onCalculate)=\"calculate()\"\n                (onToggleHelp)=\"toggleHelp('start')\">\n              </app-start>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab *ngFor=\"let modelSet of modelSets; let i = index\"\n            title=\"Test {{i+1}}\" id=\"test-{{i+1}}\">\n            <ng-template ngbTabContent>\n              <app-t-test [modelSet]=\"modelSet\" [plotOptions]=\"plotOptions\"></app-t-test>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n\n      <div id=\"footer\" class=\"d-flex\">\n        <img src=\"assets/vumc.jpg\">\n        <div class=\"text\">Department of Biostatistics</div>\n      </div>\n    </div>\n    <div id=\"right-panel\" class=\"col-8\">\n      <div class=\"plot-buttons\" *ngIf=\"plotOptionsAvailable\">\n        <button class=\"btn btn-secondary\" (click)=\"togglePlotOptions()\">\n          <i class=\"fa fa-cog\"></i>\n        </button>\n        <button class=\"btn btn-secondary\" (click)=\"save()\">\n          <i class=\"fa fa-floppy-o\"></i>\n        </button>\n        <button class=\"btn btn-secondary\" (click)=\"toggleHoverBox()\">\n          <i class=\"fa\" [class.fa-cubes]=\"hoverBoxEnabled\" [class.fa-cube]=\"!hoverBoxEnabled\"></i>\n        </button>\n      </div>\n      <app-output-pane #outputPaneChild\n        [selectedModelSet]=\"selectedModelSet\"\n        [plotOptions]=\"plotOptions\"\n        [hover-disabled]=\"!hoverBoxEnabled\">\n      </app-output-pane>\n    </div>\n  </div>\n  <app-draggable-dialog #helpDialog\n    [title]=\"helpTitles[helpTopic]\"\n    start-x-offset=\"33%\" start-y-offset=\"55px\"\n    (drag-start)=\"childDragStarted()\"\n    (drag-end)=\"childDragEnded()\">\n    <app-help [topic]=\"helpTopic\"></app-help>\n  </app-draggable-dialog>\n  <app-draggable-dialog #plotOptionsDialog\n    title=\"Plot options\"\n    start-x-offset=\"5%\" start-y-offset=\"55px\"\n    (drag-start)=\"childDragStarted()\"\n    (drag-end)=\"childDragEnded()\">\n    <app-plot-options\n      [selectedModelSet]=\"selectedModelSet\"\n      [plotOptions]=\"plotOptions\">\n    </app-plot-options>\n  </app-draggable-dialog>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switch__ = __webpack_require__("../../../../rxjs/add/operator/switch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plot_options__ = __webpack_require__("../../../../../src/app/plot-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__t_test_service__ = __webpack_require__("../../../../../src/app/t-test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__draggable_dialog_draggable_dialog_component__ = __webpack_require__("../../../../../src/app/draggable-dialog/draggable-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__output_pane_output_pane_component__ = __webpack_require__("../../../../../src/app/output-pane/output-pane.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = (function () {
    function AppComponent(ttestService) {
        this.ttestService = ttestService;
        this.title = 'PS: Power and Sample Size Calculation';
        this.newModel = new __WEBPACK_IMPORTED_MODULE_4__t_test__["c" /* TTest */]();
        this.modelSets = [];
        this.plotOptions = new __WEBPACK_IMPORTED_MODULE_5__plot_options__["a" /* PlotOptions */]();
        this.helpTitles = {
            'overview': 'PS Overview',
            'start': 'PS Start Tab'
        };
        this.helpTopic = 'overview';
        this.plotOptionsAvailable = false;
        this.blockSelection = false;
        this.hoverBoxEnabled = true;
        this.selectedModelSet = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_4__t_test__["c" /* TTest */]({
            output: 'n', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 32
        });
        this.addModel(model, false);
    };
    AppComponent.prototype.toggleHelp = function (topic) {
        if (this.helpDialog.isOpen() && this.helpTopic == topic) {
            this.helpDialog.close();
        }
        else {
            this.helpTopic = topic;
            this.helpDialog.open();
        }
    };
    AppComponent.prototype.togglePlotOptions = function () {
        this.plotOptionsDialog.toggle();
    };
    AppComponent.prototype.toggleHoverBox = function () {
        this.hoverBoxEnabled = !this.hoverBoxEnabled;
    };
    AppComponent.prototype.save = function () {
        this.outputChild.openSaveDialog();
    };
    AppComponent.prototype.calculate = function () {
        this.addModel(this.newModel);
    };
    AppComponent.prototype.onTabChange = function (event) {
        var md = event.nextId.match(/\d+/);
        if (md) {
            var index = md[0] - 1;
            this.selectedModelSet.next(this.modelSets[index]);
            this.plotOptionsAvailable = true;
        }
        else {
            this.selectedModelSet.next(undefined);
            this.plotOptionsAvailable = false;
        }
    };
    AppComponent.prototype.addModel = function (model, select) {
        var _this = this;
        if (select === void 0) { select = true; }
        this.ttestService.create(model).
            then(function (result) {
            var model = new __WEBPACK_IMPORTED_MODULE_4__t_test__["c" /* TTest */](result.model);
            var data = result.data;
            var modelSet = new __WEBPACK_IMPORTED_MODULE_4__t_test__["a" /* TTestSet */](model, data);
            _this.modelSets.push(modelSet);
            if (select) {
                setTimeout(function () {
                    _this.tabsetChild.select("test-" + _this.modelSets.length);
                }, 1);
            }
        }).
            catch(function (err) { return console.error(err); });
    };
    AppComponent.prototype.mouseup = function () {
        this.plotOptionsDialog.stopDragging();
    };
    AppComponent.prototype.childDragStarted = function () {
        this.blockSelection = true;
    };
    AppComponent.prototype.childDragEnded = function () {
        this.blockSelection = false;
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('plotOptionsDialog'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "plotOptionsDialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('helpDialog'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */]) === "function" && _b || Object)
], AppComponent.prototype, "helpDialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('tabsetChild'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbTabset */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbTabset */]) === "function" && _c || Object)
], AppComponent.prototype, "tabsetChild", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('outputPaneChild'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__output_pane_output_pane_component__["a" /* OutputPaneComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__output_pane_output_pane_component__["a" /* OutputPaneComponent */]) === "function" && _d || Object)
], AppComponent.prototype, "outputChild", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__t_test_service__["a" /* TTestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__t_test_service__["a" /* TTestService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__t_test_service__ = __webpack_require__("../../../../../src/app/t-test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__palette_service__ = __webpack_require__("../../../../../src/app/palette.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__start_start_component__ = __webpack_require__("../../../../../src/app/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__range_slider_range_slider_component__ = __webpack_require__("../../../../../src/app/range-slider/range-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__t_test_t_test_component__ = __webpack_require__("../../../../../src/app/t-test/t-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__output_pane_output_pane_component__ = __webpack_require__("../../../../../src/app/output-pane/output-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__plot_options_plot_options_component__ = __webpack_require__("../../../../../src/app/plot-options/plot-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plot_plot_component__ = __webpack_require__("../../../../../src/app/plot/plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__bottom_plot_bottom_plot_component__ = __webpack_require__("../../../../../src/app/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__serialize_plot_component__ = __webpack_require__("../../../../../src/app/serialize-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__export_plots_export_plots_component__ = __webpack_require__("../../../../../src/app/export-plots/export-plots.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__draggable_dialog_draggable_dialog_component__ = __webpack_require__("../../../../../src/app/draggable-dialog/draggable-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__start_start_component__["a" /* StartComponent */],
            __WEBPACK_IMPORTED_MODULE_10__range_slider_range_slider_component__["a" /* RangeSliderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__range_slider_range_slider_component__["b" /* RangeSliderLabel */],
            __WEBPACK_IMPORTED_MODULE_10__range_slider_range_slider_component__["c" /* RangeSliderHelp */],
            __WEBPACK_IMPORTED_MODULE_11__t_test_t_test_component__["a" /* TTestComponent */],
            __WEBPACK_IMPORTED_MODULE_12__output_pane_output_pane_component__["a" /* OutputPaneComponent */],
            __WEBPACK_IMPORTED_MODULE_13__help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_14__plot_options_plot_options_component__["a" /* PlotOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__plot_plot_component__["a" /* PlotComponent */],
            __WEBPACK_IMPORTED_MODULE_16__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */],
            __WEBPACK_IMPORTED_MODULE_17__serialize_plot_component__["a" /* SerializePlotComponent */],
            __WEBPACK_IMPORTED_MODULE_18__export_plots_export_plots_component__["a" /* ExportPlotsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__t_test_service__["a" /* TTestService */],
            __WEBPACK_IMPORTED_MODULE_8__palette_service__["a" /* PaletteService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* APP_BASE_HREF */], useValue: __WEBPACK_IMPORTED_MODULE_20__environments_environment__["a" /* environment */].baseHref }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_18__export_plots_export_plots_component__["a" /* ExportPlotsComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bottom-plot/bottom-plot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bottom-plot/bottom-plot.component.html":
/***/ (function(module, exports) {

module.exports = "<svg #plot\n  [style.fontFamily]=\"plotOptions.fontFamily == '' ? null : plotOptions.fontFamily\"\n  [style.fontSize]=\"(plotOptions.fontSize * 110).toString() + '%'\"\n  [attr.class]=\"name\" (window:resize)=\"onResize()\">\n\n  <rect #unit x=\"0\" y=\"0\" width=\"1em\" height=\"1em\" stroke=\"none\" fill=\"none\" />\n  <ng-template [ngIf]=\"groups && modelSet\">\n    <defs>\n      <clipPath [id]=\"clipPathId\">\n        <rect x=\"0\" y=\"0\" [attr.width]=\"width\" [attr.height]=\"height\" />\n      </clipPath>\n    </defs>\n\n    <text text-anchor=\"middle\"\n      [attr.x]=\"width / 2 + margin\" [attr.y]=\"height + margin\" dy=\"2.5em\">\n      Parameter Space\n    </text>\n    <text text-anchor=\"middle\" font-weight=\"bold\"\n      [attr.x]=\"width / 2 + margin\" y=\"0\" dy=\"2em\">\n      {{title}}\n    </text>\n\n    <g *ngFor=\"let group of groups; let i = index\"\n      [attr.transform]=\"translate(margin, margin)\">\n\n      <path [attr.clip-path]=\"clipPath()\" [attr.d]=\"group.distPath\"\n        [attr.fill]=\"palette.getColor(groups.length - 1 - i, plotOptions.paletteTheme)\"\n        stroke=\"none\" opacity=\"0.5\" />\n\n      <path *ngFor=\"let path of group.mainPaths\"\n        [attr.clip-path]=\"clipPath()\"\n        [attr.d]=\"path\"\n        [attr.stroke]=\"palette.getColor(groups.length - 1 - i, plotOptions.paletteTheme)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\" />\n\n      <circle r=\"5\"\n        [attr.cx]=\"xScale(group.target)\"\n        [attr.cy]=\"yScale(0.5)\"\n        [attr.clip-path]=\"clipPath()\"\n        [attr.fill]=\"palette.getColor(groups.length - 1 - i, plotOptions.paletteTheme)\" />\n    </g>\n\n    <circle r=\"5\"\n      [attr.cx]=\"xScale(0)\"\n      [attr.cy]=\"yScale(0.5)\"\n      [attr.clip-path]=\"clipPath()\"\n      [attr.transform]=\"translate(margin, margin)\"\n      fill=\"darkseagreen\" />\n\n    <g #bottomAxis [attr.transform]=\"translate(margin, height + margin)\"></g>\n  </ng-template>\n</svg>\n"

/***/ }),

/***/ "../../../../../src/app/bottom-plot/bottom-plot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__ = __webpack_require__("../../../../../src/app/abstract-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__palette_service__ = __webpack_require__("../../../../../src/app/palette.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomPlotComponent; });
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
var BottomPlotComponent = (function (_super) {
    __extends(BottomPlotComponent, _super);
    function BottomPlotComponent(palette) {
        var _this = _super.call(this) || this;
        _this.palette = palette;
        _this.margin = 50;
        _this.title = "Precision vs. Effect Size";
        return _this;
    }
    BottomPlotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clipPathId = this.name + "-plot-area";
        this.plotOptions.onChange.subscribe(function () { _this.compute(); });
        this.compute();
    };
    BottomPlotComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.modelSet) {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            if (this.modelSet) {
                var callback = function () { _this.compute(); };
                var ranges = this.modelSet.ranges;
                this.subscription = this.modelSet.onCompute.subscribe(callback);
                this.subscription.add(ranges.onChange.subscribe(callback));
                this.compute();
            }
        }
    };
    BottomPlotComponent.prototype.ngAfterViewChecked = function () {
        this.draw();
    };
    BottomPlotComponent.prototype.onResize = function () {
        this.compute();
    };
    BottomPlotComponent.prototype.redraw = function () {
        this.compute();
    };
    BottomPlotComponent.prototype.compute = function () {
        var _this = this;
        if (!this.modelSet) {
            return;
        }
        // margin
        var unitBox = this.unitElement.nativeElement.getBBox();
        if (unitBox && unitBox.width) {
            this.margin = unitBox.width * 2 + (20 * this.plotOptions.axisFontSize);
        }
        // dimensions
        this.width = this.getDimension('width') - (this.margin * 2);
        this.height = this.getDimension('height') - (this.margin * 2);
        var ranges = this.modelSet.ranges;
        var data = this.modelSet.data.map(function (d) { return d.tertiary; });
        // compute scales
        this.xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().
            domain(ranges.pSpace.toArray()).
            range([0, this.width]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().
            domain([0, 0.8]).
            range([0, this.height]);
        var sampDistExtent = data.reduce(function (arr, subData) {
            var extent = __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](subData.data, function (d) { return d.sampDist; });
            return __WEBPACK_IMPORTED_MODULE_1_d3__["extent"](arr.concat(extent));
        }, []);
        this.yScaleSD = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().
            domain(sampDistExtent.reverse()).
            range([0, this.yScale(0.5)]);
        this.groups = data.reverse().map(function (subData) {
            // sample distribution
            var distPath = _this.getArea(subData.data, 'pSpace', 'sampDist');
            // main lines
            var leftLimit = subData.range[0];
            var rightLimit = subData.range[1];
            var points = [
                subData.range.map(function (xValue, i) {
                    return { x: xValue, y: 0.5 };
                }),
                [
                    { x: leftLimit, y: 0.35 },
                    { x: leftLimit, y: 0.65 }
                ],
                [
                    { x: rightLimit, y: 0.35 },
                    { x: rightLimit, y: 0.65 }
                ]
            ];
            var mainPaths = points.map(function (data) { return _this.getPath(data); });
            var result = {
                mainPaths: mainPaths,
                distPath: distPath,
                target: subData.target
            };
            return result;
        });
        this.needDraw = true;
    };
    BottomPlotComponent.prototype.draw = function () {
        if (!this.needDraw) {
            return;
        }
        // axes (drawn by d3)
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](this.xScale).ticks(6);
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.bottomAxisElement.nativeElement).
            call(xAxis).
            attr("font-size", 15 * this.plotOptions.axisFontSize).
            attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);
        this.needDraw = false;
    };
    BottomPlotComponent.prototype.clipPath = function () {
        return "url(#" + this.clipPathId + ")";
    };
    BottomPlotComponent.prototype.getArea = function (points, xName, yName) {
        var _this = this;
        var area = __WEBPACK_IMPORTED_MODULE_1_d3__["area"]().
            x(function (d, i) { return _this.xScale(d[xName]); }).
            y0(this.yScaleSD(0)).
            y1(function (d, i) { return _this.yScaleSD(d[yName]); });
        return area(points);
    };
    return BottomPlotComponent;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__["a" /* AbstractPlotComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__t_test__["a" /* TTestSet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__t_test__["a" /* TTestSet */]) === "function" && _a || Object)
], BottomPlotComponent.prototype, "modelSet", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('unit'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object)
], BottomPlotComponent.prototype, "unitElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('bottomAxis'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _c || Object)
], BottomPlotComponent.prototype, "bottomAxisElement", void 0);
BottomPlotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-bottom-plot',
        template: __webpack_require__("../../../../../src/app/bottom-plot/bottom-plot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bottom-plot/bottom-plot.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__palette_service__["a" /* PaletteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__palette_service__["a" /* PaletteService */]) === "function" && _d || Object])
], BottomPlotComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=bottom-plot.component.js.map

/***/ }),

/***/ "../../../../../src/app/changeable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeEmitter; });
/* harmony export (immutable) */ __webpack_exports__["b"] = Changeable;

var ChangeEmitter = (function () {
    function ChangeEmitter() {
        this.changes = {};
        this.prevChanges = {};
        this.noEmit = false;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    ChangeEmitter.prototype.emit = function () {
        if (!this.noEmit && this.changes && Object.keys(this.changes).length > 0) {
            var changes = Object.assign({}, this.changes);
            this.prevChanges = Object.assign({}, this.changes);
            this.changes = {};
            this.onChange.emit(changes);
        }
    };
    return ChangeEmitter;
}());

function Changeable(target, name) {
    Object.defineProperty(target, name, {
        get: function () {
            return this["_" + name];
        },
        set: function (value) {
            if (value != this["_" + name]) {
                this["_" + name] = value;
                this.changes[name] = value;
                this.emit();
            }
        },
        enumerable: true
    });
}
//# sourceMappingURL=changeable.js.map

/***/ }),

/***/ "../../../../../src/app/draggable-dialog/draggable-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog {\n  display: block;\n  position: absolute;\n  z-index: 100;\n  background-color: white;\n  border: 1px solid #888;\n  border-radius: 10px;\n  box-shadow: 5px 5px 25px #888;\n  top: 20px;\n  left: 20px;\n  width: 25vw;\n  min-width: 300px;\n}\n\n.dialog .header {\n  font-size: larger;\n  font-weight: bold;\n  background-color: #e5e5e5;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 10px 10px 0 0;\n  cursor: move;\n}\n\n.dialog .close {\n  float: right;\n  margin: 5px;\n}\n\n.dialog .content {\n  overflow: auto;\n  height: 50vh;\n  padding: 5px;\n  margin: 0 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/draggable-dialog/draggable-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div #main *ngIf=\"enabled\" class=\"dialog\"\n  [style.top]=\"yOffset ? yOffset + 'px' : startYOffset\"\n  [style.left]=\"xOffset ? xOffset + 'px' : startXOffset\">\n  <div class=\"header\"\n    (mousedown)=\"mousedown($event)\" (mouseup)=\"mouseup($event)\"\n    (mousemove)=\"mousemove($event)\">\n    {{title}}\n    <button type=\"button\" class=\"close fa fa-times-circle\" (click)=\"close()\"></button>\n  </div>\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/draggable-dialog/draggable-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDialogComponent; });
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
        this.onDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
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
    return DraggableDialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], DraggableDialogComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], DraggableDialogComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('start-enabled'),
    __metadata("design:type", Object)
], DraggableDialogComponent.prototype, "startEnabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('start-x-offset'),
    __metadata("design:type", Object)
], DraggableDialogComponent.prototype, "startXOffset", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('start-y-offset'),
    __metadata("design:type", Object)
], DraggableDialogComponent.prototype, "startYOffset", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])('drag-start'),
    __metadata("design:type", Object)
], DraggableDialogComponent.prototype, "onDragStart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])('drag-end'),
    __metadata("design:type", Object)
], DraggableDialogComponent.prototype, "onDragEnd", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('main'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], DraggableDialogComponent.prototype, "mainElement", void 0);
DraggableDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-draggable-dialog',
        template: __webpack_require__("../../../../../src/app/draggable-dialog/draggable-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/draggable-dialog/draggable-dialog.component.css")]
    })
], DraggableDialogComponent);

var _a;
//# sourceMappingURL=draggable-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/export-plots/export-plots.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/export-plots/export-plots.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Export graphs</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>Please select which graphs you want to export.</p>\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\"\n        [(ngModel)]=\"includeTopLeft\">\n      {{topLeft?.title}}\n    </label>\n  </div>\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\"\n        [(ngModel)]=\"includeTopRight\">\n      {{topRight?.title}}\n    </label>\n  </div>\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"checkbox\"\n        [(ngModel)]=\"includeBottom\">\n      {{bottom?.title}}\n    </label>\n  </div>\n  <div class=\"form-inline mb-4\">\n    <label for=\"export-image-format\" class=\"mr-sm-2\">Image format:</label>\n    <select id=\"export-image-format\" class=\"form-control\" [(ngModel)]=\"imageFormat\">\n      <option value=\"svg\">SVG</option>\n      <option value=\"png\">PNG</option>\n    </select>\n  </div>\n  <p>\n    The graphs you have chosen will be packaged in a ZIP file.\n  </p>\n  <a #downloadLink style=\"display: none\"></a>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"save()\"\n    [disabled]=\"!includeTopLeft && !includeTopRight && !includeBottom\">\n    <i class=\"fa fa-floppy-o\"></i> Save\n  </button>\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">\n    <i class=\"fa fa-circle-x\"></i> Close\n  </button>\n</div>\n<app-serialize-plot #topLeftSerializer [plot]=\"topLeft\"></app-serialize-plot>\n<app-serialize-plot #topRightSerializer [plot]=\"topRight\"></app-serialize-plot>\n<app-serialize-plot #bottomSerializer [plot]=\"bottom\"></app-serialize-plot>\n"

/***/ }),

/***/ "../../../../../src/app/export-plots/export-plots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jszip__ = __webpack_require__("../../../../jszip/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jszip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_plot_component__ = __webpack_require__("../../../../../src/app/abstract-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__serialize_plot_component__ = __webpack_require__("../../../../../src/app/serialize-plot.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportPlotsComponent; });
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
    function ExportPlotsComponent(activeModal) {
        this.activeModal = activeModal;
        this.includeTopLeft = true;
        this.includeTopRight = true;
        this.includeBottom = true;
        this.imageFormat = "svg";
    }
    ExportPlotsComponent.prototype.ngOnInit = function () {
    };
    ExportPlotsComponent.prototype.save = function () {
        var _this = this;
        var serializers = [];
        if (this.includeTopLeft)
            serializers.push(this.topLeftSerializer);
        if (this.includeTopRight)
            serializers.push(this.topRightSerializer);
        if (this.includeBottom)
            serializers.push(this.bottomSerializer);
        var date = new Date();
        var month = date.getMonth() + 1;
        var monthStr = month < 10 ? "0" + month : month.toString();
        var day = date.getDate();
        var dayStr = day < 10 ? "0" + day : day.toString();
        var dateStr = date.getFullYear() + "-" + monthStr + "-" + dayStr;
        var zip = new __WEBPACK_IMPORTED_MODULE_2_jszip__();
        var dir = zip.folder("ps-plots-" + dateStr);
        var promise = Promise.resolve();
        serializers.forEach(function (serializer) {
            promise = promise.then(function () {
                var result;
                if (_this.imageFormat == 'svg') {
                    var xml = serializer.serializeAsXML();
                    var blob = new Blob([xml], { type: "image/svg+xml" });
                    result = Promise.resolve(blob);
                }
                else {
                    result = serializer.serialize();
                }
                return result.then(function (blob) {
                    dir.file(serializer.plotTitle() + "." + _this.imageFormat, blob);
                });
            });
        });
        promise.then(function () {
            zip.generateAsync({ type: 'blob' }).then(function (content) {
                var url = URL.createObjectURL(content);
                var elt = _this.downloadLink.nativeElement;
                elt.href = url;
                elt.download = "ps-plots-" + dateStr + ".zip";
                elt.click();
                URL.revokeObjectURL(url);
                _this.activeModal.close();
            });
        });
    };
    ExportPlotsComponent.prototype.cancel = function () {
        this.activeModal.close();
    };
    return ExportPlotsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__abstract_plot_component__["a" /* AbstractPlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__abstract_plot_component__["a" /* AbstractPlotComponent */]) === "function" && _a || Object)
], ExportPlotsComponent.prototype, "topLeft", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__abstract_plot_component__["a" /* AbstractPlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__abstract_plot_component__["a" /* AbstractPlotComponent */]) === "function" && _b || Object)
], ExportPlotsComponent.prototype, "topRight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__abstract_plot_component__["a" /* AbstractPlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__abstract_plot_component__["a" /* AbstractPlotComponent */]) === "function" && _c || Object)
], ExportPlotsComponent.prototype, "bottom", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('downloadLink'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _d || Object)
], ExportPlotsComponent.prototype, "downloadLink", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('topLeftSerializer'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__serialize_plot_component__["a" /* SerializePlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__serialize_plot_component__["a" /* SerializePlotComponent */]) === "function" && _e || Object)
], ExportPlotsComponent.prototype, "topLeftSerializer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('topRightSerializer'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__serialize_plot_component__["a" /* SerializePlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__serialize_plot_component__["a" /* SerializePlotComponent */]) === "function" && _f || Object)
], ExportPlotsComponent.prototype, "topRightSerializer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('bottomSerializer'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__serialize_plot_component__["a" /* SerializePlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__serialize_plot_component__["a" /* SerializePlotComponent */]) === "function" && _g || Object)
], ExportPlotsComponent.prototype, "bottomSerializer", void 0);
ExportPlotsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-export-plots',
        template: __webpack_require__("../../../../../src/app/export-plots/export-plots.component.html"),
        styles: [__webpack_require__("../../../../../src/app/export-plots/export-plots.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _h || Object])
], ExportPlotsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=export-plots.component.js.map

/***/ }),

/***/ "../../../../../src/app/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h5 {\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"topic == 'overview'\">\n  <h5>Introduction</h5>\n  <p>\n    PS is a program for performing power and sample size calculations. You are\n    using a web-enabled beta-test version of the program, where we are actively\n    working on the interactive user interface. Currently, it can only be used\n    for paired t-tests but it will be expanded for use in studies with\n    dichotomous, continuous, survival response and other data.\n  </p>\n  <h5>Program Output</h5>\n  <p>\n    The program can determine the sample size needed to detect a specified\n    alternative hypothesis with the required power, the power with which a\n    specific alternative hypothesis can be detected with a given sample size,\n    or the specific alternative hypotheses that can be detected with a given\n    power and sample size. It also gives the 95% confidence interval for the\n    test statistic under the specified alternative hypothesis as a measure of\n    the precision of the test statistic.\n  </p>\n  <h5>Interactive Help</h5>\n  <p>\n    Click on any question-mark icon for help or pull-down menu to determine\n    the needed information. In the Start tab, choose one of sample size,\n    power, or detectable difference  and then complete the other fields that\n    appear. Hover over the i icon for information on what is needed in each\n    field. Then click the calculate button. A new tab will appear with\n    sliders for altering the input variables, the desired output variable and\n    various graphs.\n  </p>\n  <h5>Graphical Output</h5>\n  <p>\n    The graphs that can be generated are sample size vs. power, sample size\n    vs. the detectable alternative hypothesis, power vs. sample size, and\n    power vs. the detectable alternative hypothesis.  The y-axes of these\n    graphs are always show the output variable. In addition, a graph of\n    precision vs effect size is always given.  The red dot on the top two\n    graphs can be dragged to enhance the users intuition on how the input and\n    output variables interact.\n  </p>\n  <h5>Interpretation</h5>\n  <p>\n    The output also includes text that describes the power or sample size\n    calculation in English, which may be a useful starting point for a\n    description in a grant application.\n  </p>\n  <h5>Options gear wheel</h5>\n  <p>\n    Click on this icon to change the point size, line width and other graph\n    options.\n  </p>\n  <p>\n    <img src=\"assets/cc.png\"> &copy; William D. Dupont, Jeffrey D. Blume, W.\n    Dale Plummer, Jeremy Stephens 2017\n  </p>\n  <p>\n    Use of this program is restricted by a Creative Commons Attribution\n    Non-Commercial Share Alike license. See\n    <a href=\"https://creativecommons.org/licenses\">https://creativecommons.org/licenses</a>\n    for details. We are grateful for support from Dr. Gordon R. Bernard and\n    the Vanderbilt Institute for Clinical and Translational Research.\n  </p>\n</ng-template>\n<ng-template [ngIf]=\"topic == 'start'\">\n  <p>Select one of the following:</p>\n  <h5>Sample size</h5>\n  <p>\n    For independent t-tests this is the number of experimental patients that\n    must be studied to detect a true difference in population means &delta;\n    with Type I error probability &alpha; given a standard deviation &sigma;\n    and <em>m</em> controls per experimental patient. For paired t-tests it\n    is the number of pairs of patients needed to detect a true difference in\n    population means &delta; with Type I error probability &alpha; given a\n    standard deviation &sigma;.\n  </p>\n  <h5>Power</h5>\n  <p>\n    For independent studies it is the probability of rejecting the null\n    hypothesis with Type I error probability &alpha; given the specified\n    sample size, a standard deviation &sigma; and a control/experimental\n    patient ratio <em>m</em> when the true difference in population means is\n    &delta;. For paired studies it is the probability of rejecting the null\n    hypothesis with Type I error probability &alpha; given the specified\n    sample size, a standard deviation &sigma; when the true difference in\n    population means is &delta;.\n  </p>\n  <h5>Detectable alternative</h5>\n  <p>\n    A difference in population means that can be detected with the specified\n    power and Type I error probability &alpha; given a standard deviation\n    &sigma;, and the specified sample size.\n  </p>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
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
    return HelpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], HelpComponent.prototype, "topic", void 0);
HelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-help',
        template: __webpack_require__("../../../../../src/app/help/help.component.html"),
        styles: [__webpack_require__("../../../../../src/app/help/help.component.css")]
    })
], HelpComponent);

//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ "../../../../../src/app/output-pane/output-pane.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".plot {\n  height: 80%;\n  /*min-height: 500px;*/\n  position: relative;\n}\n.without-text {\n  height: 100%;\n}\n\ndiv.show-text {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n}\n\n.plot /deep/ svg.top-left {\n  position: absolute;\n  left: 0;\n  width: 50%;\n  height: 70%;\n}\n.plot.without-text /deep/ svg.top-left {\n  height: 68%;\n}\n.plot /deep/ svg.top-right {\n  position: absolute;\n  right: 0;\n  width: 50%;\n  height: 70%;\n}\n.plot.without-text /deep/ svg.top-right {\n  height: 68%;\n}\n.plot /deep/ svg.bottom {\n  position: absolute;\n  top: 70%;\n  height: 30%;\n  width: 100%;\n}\n.plot.without-text /deep/ svg.bottom {\n  top: 68%;\n  height: 28%;\n}\n\n.output-text {\n  position: relative;\n  background-color: #e5e5e5;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  padding: 10px 20px;\n  text-align: justify;\n  overflow: auto;\n  margin-top: 5px;\n}\n.hide-text {\n  position: absolute;\n  top: 0;\n  right: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/output-pane/output-pane.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"plot\" [class.without-text]=\"!showText\">\n  <app-plot #topLeft name=\"top-left\"\n    [modelSet]=\"modelSet\"\n    [plotOptions]=\"plotOptions\"\n    [hover-disabled]=\"hoverDisabled\">\n  </app-plot>\n  <app-plot #topRight name=\"top-right\"\n    [modelSet]=\"modelSet\"\n    [plotOptions]=\"plotOptions\"\n    [hover-disabled]=\"hoverDisabled\">\n  </app-plot>\n  <app-bottom-plot #bottom name=\"bottom\"\n    [modelSet]=\"modelSet\"\n    [plotOptions]=\"plotOptions\">\n  </app-bottom-plot>\n  <div class=\"show-text\" *ngIf=\"modelSet && !showText\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleText(true)\">\n      <i class=\"fa fa-envelope-open-o\" aria-hidden=\"true\"></i>\n      Interpretation\n    </button>\n  </div>\n</div>\n<div class=\"output-text\" *ngIf=\"modelSet && showText\">\n  <div *ngIf=\"showText\" class=\"hide-text\">\n    <i class=\"fa fa-times-circle\" (click)=\"toggleText(false)\"></i>\n  </div>\n  <ng-template [ngIf]=\"modelSet.model.output == 'n'\">\n    We are planning a study of a continuous response variable from matched\n    pairs of study subjects. Prior data indicate that the difference in the\n    response of matched pairs is normally distributed with standard deviation\n    {{round(modelSet.model.sigma)}}. If the true difference in the mean response of\n    matched pairs is {{round(modelSet.model.delta)}}, we will need to study\n    {{ceil(modelSet.model.n)}} pairs of subjects to be able to reject the null\n    hypothesis that this response difference is zero with probability (power)\n    {{round(modelSet.model.power)}}. The Type I error probability associated with this\n    test of this null hypothesis is {{round(modelSet.model.alpha)}}.\n  </ng-template>\n  <ng-template [ngIf]=\"modelSet.model.output == 'power'\">\n    We are planning a study with {{ceil(modelSet.model.n)}} pairs of subjects. Prior\n    data indicate that the difference in the response of matched pairs is\n    normally distributed with standard deviation {{round(modelSet.model.sigma)}}. If\n    the true difference in the mean response of matched pairs is\n    {{round(modelSet.model.delta)}}, we will be able to reject the null hypothesis\n    that this response difference is zero with probability (power)\n    {{round(modelSet.model.power)}}. The Type I error probability associated with this\n    test of this null hypothesis is {{round(modelSet.model.alpha)}}.\n  </ng-template>\n  <ng-template [ngIf]=\"modelSet.model.output == 'delta'\">\n    We are planning a study with {{ceil(modelSet.model.n)}} pairs of subjects. Prior\n    data indicate that the difference in the response of matched pairs is\n    normally distributed with standard deviation {{round(modelSet.model.sigma)}}. We\n    will be able to detect a true difference in the mean response of matched\n    pairs of -{{round(modelSet.model.delta)}} or {{round(modelSet.model.delta)}} with\n    probability (power) {{round(modelSet.model.power)}}. The Type I error probability\n    associated with this test of the null hypothesis that this response\n    difference is zero is {{round(modelSet.model.alpha)}}.\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/output-pane/output-pane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plot_options__ = __webpack_require__("../../../../../src/app/plot-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plot_plot_component__ = __webpack_require__("../../../../../src/app/plot/plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bottom_plot_bottom_plot_component__ = __webpack_require__("../../../../../src/app/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__export_plots_export_plots_component__ = __webpack_require__("../../../../../src/app/export-plots/export-plots.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputPaneComponent; });
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
        this.showText = true;
    }
    OutputPaneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedModelSet.subscribe(function (modelSet) {
            _this.modelSet = modelSet;
        });
    };
    OutputPaneComponent.prototype.toggleText = function (value) {
        var _this = this;
        this.showText = value;
        setTimeout(function () {
            _this.topLeftPlot.redraw();
            _this.topRightPlot.redraw();
            _this.bottomPlot.redraw();
        }, 1);
    };
    OutputPaneComponent.prototype.openSaveDialog = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__export_plots_export_plots_component__["a" /* ExportPlotsComponent */]);
        modalRef.componentInstance.topLeft = this.topLeftPlot;
        modalRef.componentInstance.topRight = this.topRightPlot;
        modalRef.componentInstance.bottom = this.bottomPlot;
    };
    OutputPaneComponent.prototype.round = function (n) {
        return Math.round(n * 100) / 100;
    };
    OutputPaneComponent.prototype.ceil = function (n) {
        return Math.ceil(n);
    };
    return OutputPaneComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], OutputPaneComponent.prototype, "selectedModelSet", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__plot_options__["a" /* PlotOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__plot_options__["a" /* PlotOptions */]) === "function" && _b || Object)
], OutputPaneComponent.prototype, "plotOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('hover-disabled'),
    __metadata("design:type", Object)
], OutputPaneComponent.prototype, "hoverDisabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('topLeft'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__plot_plot_component__["a" /* PlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__plot_plot_component__["a" /* PlotComponent */]) === "function" && _c || Object)
], OutputPaneComponent.prototype, "topLeftPlot", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('topRight'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__plot_plot_component__["a" /* PlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__plot_plot_component__["a" /* PlotComponent */]) === "function" && _d || Object)
], OutputPaneComponent.prototype, "topRightPlot", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('bottom'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */]) === "function" && _e || Object)
], OutputPaneComponent.prototype, "bottomPlot", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('saveDialog'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* TemplateRef */]) === "function" && _f || Object)
], OutputPaneComponent.prototype, "saveDialog", void 0);
OutputPaneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-output-pane',
        template: __webpack_require__("../../../../../src/app/output-pane/output-pane.component.html"),
        styles: [__webpack_require__("../../../../../src/app/output-pane/output-pane.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _g || Object])
], OutputPaneComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=output-pane.component.js.map

/***/ }),

/***/ "../../../../../src/app/palette.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaletteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaletteService = (function () {
    function PaletteService() {
        this.colors = {
            plasma: ["#0D0887", "#7E03A8", "#CC4678", "#F89441", "#F0F921"],
            viridis: ["#440154", "#3B528B", "#21908C", "#5DC863", "#FDE725"],
            magma: ["#000004", "#51127C", "#B63679", "#FB8861", "#FCFDBF"],
        };
    }
    PaletteService.prototype.getColor = function (index, name) {
        if (name === void 0) { name = "plasma"; }
        if (!(name in this.colors)) {
            throw new Error("invalid palette: " + name);
        }
        if (index == -1) {
            return "";
        }
        var colors = this.colors[name];
        return colors[index % colors.length];
    };
    return PaletteService;
}());
PaletteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], PaletteService);

//# sourceMappingURL=palette.service.js.map

/***/ }),

/***/ "../../../../../src/app/plot-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__changeable__ = __webpack_require__("../../../../../src/app/changeable.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlotOptions; });
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

var PlotOptions = (function (_super) {
    __extends(PlotOptions, _super);
    function PlotOptions() {
        var _this = _super.call(this) || this;
        _this.noEmit = true;
        _this.fontFamily = "";
        _this.fontSize = 1;
        _this.axisFontSize = 1;
        _this.lineWidth = 1;
        _this.axisLineWidth = 1;
        _this.paletteTheme = "plasma";
        _this.noEmit = false;
        _this.changes = {};
        return _this;
    }
    PlotOptions.prototype.attributes = function () {
        return ({
            height: this.height,
            width: this.width,
            fontFamily: this.fontFamily,
            axisFontSize: this.axisFontSize,
            fontSize: this.fontSize,
            lineWidth: this.lineWidth,
            axisLineWidth: this.axisLineWidth
        });
    };
    PlotOptions.prototype.update = function (attribs, emit) {
        if (emit === void 0) { emit = true; }
        this.noEmit = true;
        // don't update height and width
        if ('fontFamily' in attribs) {
            this.fontFamily = attribs.fontFamily;
        }
        if ('fontSize' in attribs) {
            this.fontSize = attribs.fontSize;
        }
        if ('axisFontSize' in attribs) {
            this.axisFontSize = attribs.axisFontSize;
        }
        if ('lineWidth' in attribs) {
            this.lineWidth = attribs.lineWidth;
        }
        if ('axisLineWidth' in attribs) {
            this.axisLineWidth = attribs.axisLineWidth;
        }
        this.noEmit = false;
        if (emit) {
            this.emit();
        }
        else {
            this.changes = {};
        }
    };
    return PlotOptions;
}(__WEBPACK_IMPORTED_MODULE_0__changeable__["a" /* ChangeEmitter */]));

__decorate([
    __WEBPACK_IMPORTED_MODULE_0__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], PlotOptions.prototype, "height", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], PlotOptions.prototype, "width", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0__changeable__["b" /* Changeable */],
    __metadata("design:type", String)
], PlotOptions.prototype, "fontFamily", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], PlotOptions.prototype, "fontSize", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], PlotOptions.prototype, "axisFontSize", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], PlotOptions.prototype, "lineWidth", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], PlotOptions.prototype, "axisLineWidth", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0__changeable__["b" /* Changeable */],
    __metadata("design:type", String)
], PlotOptions.prototype, "paletteTheme", void 0);
//# sourceMappingURL=plot-options.js.map

/***/ }),

/***/ "../../../../../src/app/plot-options/plot-options.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset {\n  border: 1px solid #bbb;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px;\n}\n\nfieldset legend {\n  font-size: inherit;\n  font-weight: bold;\n  display: table;\n  width: auto;\n}\n\n.form-group {\n  padding: 0 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plot-options/plot-options.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"plotOptions && modelSet\" class=\"content\">\n  <fieldset>\n    <legend>Global</legend>\n    <div class=\"form-group\">\n      <label for=\"plot-font-family\">Font family</label>\n      <select id=\"plot-font-family\" class=\"form-control\"\n        [(ngModel)]=\"plotOptions.fontFamily\">\n        <option value=\"\">Default</option>\n        <option value=\"serif\">Serif</option>\n        <option value=\"sans\">Sans-serif</option>\n        <option value=\"monospace\">Monospace</option>\n        <option>Bungee Shade</option>\n        <option>Sancreek</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"plot-palette-theme\">Palette</label>\n      <select id=\"plot-palette-theme\" class=\"form-control\"\n        [(ngModel)]=\"plotOptions.paletteTheme\">\n        <option value=\"plasma\">Plasma</option>\n        <option value=\"viridis\">Viridis</option>\n        <option value=\"magma\">Magma</option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-font-size\">Font size: {{plotOptions.fontSize}}</label>\n        <div class=\"input-group\">\n          <input id=\"plot-font-size\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [(ngModel)]=\"plotOptions.fontSize\" />\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <label for=\"plot-axis-font-size\">Axis font size: {{plotOptions.axisFontSize}}</label>\n        <div class=\"input-group\">\n          <input id=\"plot-axis-font-size\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [(ngModel)]=\"plotOptions.axisFontSize\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-line-width\">Line width: {{plotOptions.lineWidth}}</label>\n        <div class=\"input-group\">\n          <input id=\"plot-line-width\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [(ngModel)]=\"plotOptions.lineWidth\" />\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <label for=\"plot-axis-line-width\">Axis line width: {{plotOptions.axisLineWidth}}</label>\n        <div class=\"input-group\">\n          <input id=\"plot-axis-line-width\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [(ngModel)]=\"plotOptions.axisLineWidth\" />\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <fieldset>\n    <legend *ngIf=\"modelSet.model.output == 'n'\">Sample Size</legend>\n    <legend *ngIf=\"modelSet.model.output == 'power'\">Power</legend>\n    <legend *ngIf=\"modelSet.model.output == 'delta'\">Detectable Alternative</legend>\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <label for=\"plot-top-y-min\">Minimum</label>\n        <div class=\"input-group\">\n          <ng-template [ngIf]=\"modelSet.model.output == 'n'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.n.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.n.min\" />\n          </ng-template>\n          <ng-template [ngIf]=\"modelSet.model.output == 'power'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.power.max - 0.01)\"\n              [(ngModel)]=\"modelSet.ranges.power.min\" />\n          </ng-template>\n          <ng-template [ngIf]=\"modelSet.model.output == 'delta'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.delta.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.delta.min\" />\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-sm\">\n        <label for=\"plot-top-y-max\">Maximum</label>\n        <div class=\"input-group\">\n          <ng-template [ngIf]=\"modelSet.model.output == 'n'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.n.min + 1)\"\n              [(ngModel)]=\"modelSet.ranges.n.max\" />\n          </ng-template>\n          <ng-template [ngIf]=\"modelSet.model.output == 'power'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.power.min + 0.01)\"\n              [(ngModel)]=\"modelSet.ranges.power.max\" />\n          </ng-template>\n          <ng-template [ngIf]=\"modelSet.model.output == 'delta'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.delta.min + 1)\"\n              [(ngModel)]=\"modelSet.ranges.delta.max\" />\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <fieldset>\n    <ng-template [ngIf]=\"modelSet.model.output == 'n'\">\n      <legend>Sample Size vs. Power</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.power.max - 0.01)\"\n              [(ngModel)]=\"modelSet.ranges.power.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.power.min + 0.01)\"\n              [(ngModel)]=\"modelSet.ranges.power.max\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"modelSet.model.output == 'power'\">\n      <legend>Power vs. Sample Size</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.n.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.n.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.n.min + 1)\"\n              [(ngModel)]=\"modelSet.ranges.n.max\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"modelSet.model.output == 'delta'\">\n      <legend>Detectable Alternative vs. Sample Size</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.n.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.n.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.n.min + 1)\"\n              [(ngModel)]=\"modelSet.ranges.n.max\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </fieldset>\n  <fieldset>\n    <ng-template [ngIf]=\"modelSet.model.output == 'n'\">\n      <legend>Sample Size vs. Detectable Alternative</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-right-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.delta.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.delta.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-right-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.delta.min - 1)\"\n              [(ngModel)]=\"modelSet.ranges.delta.max\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"modelSet.model.output == 'power'\">\n      <legend>Power vs. Detectable Alternative</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-right-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.delta.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.delta.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-right-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.delta.min - 1)\"\n              [(ngModel)]=\"modelSet.ranges.delta.max\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"modelSet.model.output == 'delta'\">\n      <legend>Detectable Alternative vs. Power</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.power.max - 0.01)\"\n              [(ngModel)]=\"modelSet.ranges.power.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.power.min + 0.01)\"\n              [(ngModel)]=\"modelSet.ranges.power.max\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </fieldset>\n  <fieldset>\n    <legend>Precision vs. Parameter Space</legend>\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <label for=\"plot-bottom-x-min\">X minimum</label>\n        <div class=\"input-group\">\n          <input class=\"form-control\"\n            type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.pSpace.max - 1)\"\n            [(ngModel)]=\"modelSet.ranges.pSpace.min\" />\n        </div>\n      </div>\n      <div class=\"col-sm\">\n        <label for=\"plot-bottom-x-max\">X maximum</label>\n        <div class=\"input-group\">\n          <input class=\"form-control\"\n            type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.pSpace.min + 1)\"\n            [(ngModel)]=\"modelSet.ranges.pSpace.max\" />\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">\n    Reset all settings\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/plot-options/plot-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plot_options__ = __webpack_require__("../../../../../src/app/plot-options.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlotOptionsComponent; });
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
    function PlotOptionsComponent() {
    }
    PlotOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedModelSet.subscribe(function (modelSet) {
            if (_this.subscription) {
                _this.subscription.unsubscribe();
                _this.subscription = undefined;
            }
            _this.modelSet = modelSet;
            if (modelSet) {
                _this.subscription = modelSet.onCompute.subscribe(function () {
                    _this.setDefaultRanges();
                });
                _this.setDefaultRanges();
            }
        });
        this.defaultPlotOptions = new __WEBPACK_IMPORTED_MODULE_3__plot_options__["a" /* PlotOptions */]();
    };
    PlotOptionsComponent.prototype.reset = function () {
        this.plotOptions.update(this.defaultPlotOptions.attributes());
        if (this.modelSet) {
            this.modelSet.ranges.updateFromArrays(this.defaultRanges.attributes());
        }
    };
    PlotOptionsComponent.prototype.roundFloor = function (n) {
        return Math.floor(n * 100) / 100;
    };
    PlotOptionsComponent.prototype.roundCeil = function (n) {
        return Math.ceil(n * 100) / 100;
    };
    PlotOptionsComponent.prototype.setDefaultRanges = function () {
        this.defaultRanges = __WEBPACK_IMPORTED_MODULE_2__t_test__["b" /* TTestRanges */].fromArrays(this.modelSet.ranges.attributes());
    };
    return PlotOptionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], PlotOptionsComponent.prototype, "selectedModelSet", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__plot_options__["a" /* PlotOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__plot_options__["a" /* PlotOptions */]) === "function" && _b || Object)
], PlotOptionsComponent.prototype, "plotOptions", void 0);
PlotOptionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-plot-options',
        template: __webpack_require__("../../../../../src/app/plot-options/plot-options.component.html"),
        styles: [__webpack_require__("../../../../../src/app/plot-options/plot-options.component.css")]
    })
], PlotOptionsComponent);

var _a, _b;
//# sourceMappingURL=plot-options.component.js.map

/***/ }),

/***/ "../../../../../src/app/plot/plot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".target {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plot/plot.component.html":
/***/ (function(module, exports) {

module.exports = "<svg #plot\n  [style.fontFamily]=\"plotOptions.fontFamily == '' ? null : plotOptions.fontFamily\"\n  [style.fontSize]=\"(plotOptions.fontSize * 110).toString() + '%'\"\n  [attr.class]=\"name\" (window:resize)=\"onResize()\">\n\n  <rect #unit x=\"0\" y=\"0\" width=\"1em\" height=\"1em\" stroke=\"none\" fill=\"none\" />\n  <ng-template [ngIf]=\"x && y && modelSet\">\n    <defs>\n      <clipPath [id]=\"mainClipPathId\">\n        <rect x=\"0\" [attr.y]=\"-plotOptions.lineWidth * 3\"\n          [attr.width]=\"width\"\n          [attr.height]=\"height + plotOptions.lineWidth * 3\" />\n      </clipPath>\n      <clipPath [id]=\"targetClipPathId\">\n        <rect x=\"-5\" [attr.y]=\"-5\"\n          [attr.width]=\"width + 10\"\n          [attr.height]=\"height + 10\" />\n      </clipPath>\n    </defs>\n\n    <text text-anchor=\"middle\"\n      [attr.x]=\"width / 2 + margin\" [attr.y]=\"height + margin\" dy=\"2.5em\">\n      {{x.title}}\n    </text>\n    <text text-anchor=\"middle\"\n      [attr.dx]=\"-(height / 2 + margin)\" dy=\"1em\"\n      transform=\"rotate(-90)\">\n      {{y.title}}\n    </text>\n    <text text-anchor=\"middle\" font-weight=\"bold\"\n      [attr.x]=\"width / 2 + margin\" y=\"0\" dy=\"2em\">\n      {{title}}\n    </text>\n\n    <g *ngFor=\"let path of paths; let i = index\"\n      [attr.transform]=\"translate(margin, margin)\">\n      <path\n        [attr.clip-path]=\"mainClipPath()\"\n        [attr.d]=\"path\"\n        [attr.stroke]=\"palette.getColor(paths.length - 1 - i, plotOptions.paletteTheme)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        [attr.opacity]=\"i == (paths.length - 1) ? 1 : 0.7\"\n        fill=\"none\" />\n    </g>\n\n    <g *ngFor=\"let path of dropPaths\"\n      [attr.transform]=\"translate(margin, margin)\">\n      <path\n        [attr.clip-path]=\"mainClipPath()\"\n        [attr.d]=\"path\"\n        stroke=\"red\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3 / 2\"\n        stroke-dasharray=\"5, 5\"\n        fill=\"none\" />\n    </g>\n\n    <g #bottomAxis [attr.transform]=\"translate(margin, height + margin)\"></g>\n    <g #leftAxis [attr.transform]=\"translate(margin, margin)\"></g>\n\n    <g *ngIf=\"showHoverInfo\"\n      [attr.transform]=\"translate(margin + hoverX, margin + hoverY)\">\n      <circle r=\"4\" fill=\"none\" stroke=\"blue\" />\n      <rect x=\"-3.5em\" [attr.y]=\"hoverInfoY()\" width=\"8em\" height=\"2.5em\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.8\" />\n      <text x=\"-2.5em\" [attr.y]=\"hoverInfoY()\">\n        <tspan dy=\"1em\" text-anchor=\"right\">{{x.sym}}:</tspan>\n        <tspan x=\"0em\" text-anchor=\"left\">{{hoverPoint.x}}</tspan>\n        <tspan x=\"-2.5em\" dy=\"1em\" text-anchor=\"right\">{{y.sym}}:</tspan>\n        <tspan x=\"0em\" text-anchor=\"left\">{{hoverPoint.y}}</tspan>\n      </text>\n    </g>\n\n    <rect [attr.transform]=\"translate(margin, margin)\"\n      [attr.width]=\"width\" [attr.height]=\"height\"\n      fill=\"none\" pointer-events=\"all\"\n      (mouseout)=\"toggleHoverInfo(false)\"\n      (mousemove)=\"hover($event)\" />\n\n    <g *ngIf=\"showTargetInfo\"\n      [attr.transform]=\"translate(margin + xScale(targetPoint.x), margin + yScale(targetPoint.y))\">\n      <rect x=\"0\" y=\"-3.5em\" width=\"8em\" height=\"2.5em\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.8\" />\n      <text x=\"1em\" y=\"-3.5em\">\n        <tspan dy=\"1em\" text-anchor=\"right\">{{x.sym}}:</tspan>\n        <tspan x=\"3.5em\" text-anchor=\"left\">{{targetPoint.x}}</tspan>\n        <tspan x=\"1em\" dy=\"1em\" text-anchor=\"right\">{{y.sym}}:</tspan>\n        <tspan x=\"3.5em\" text-anchor=\"left\">{{targetPoint.y}}</tspan>\n      </text>\n    </g>\n\n    <circle #target class=\"target\" r=\"5\"\n      [attr.cx]=\"xScale(targetPoint.x)\"\n      [attr.cy]=\"yScale(targetPoint.y)\"\n      [attr.transform]=\"translate(margin, margin)\"\n      [attr.clip-path]=\"targetClipPath()\"\n      fill=\"red\"\n      (mouseover)=\"toggleTargetInfo(true)\"\n      (mouseout)=\"toggleTargetInfo(false)\" />\n  </ng-template>\n</svg>\n"

/***/ }),

/***/ "../../../../../src/app/plot/plot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__ = __webpack_require__("../../../../../src/app/abstract-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__palette_service__ = __webpack_require__("../../../../../src/app/palette.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlotComponent; });
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





var PlotComponent = (function (_super) {
    __extends(PlotComponent, _super);
    function PlotComponent(palette) {
        var _this = _super.call(this) || this;
        _this.palette = palette;
        _this.hoverDisabled = false;
        _this.margin = 50;
        _this.targetDragging = false;
        _this.showTargetInfo = false;
        _this.showHoverInfo = false;
        _this.needDraw = false;
        return _this;
    }
    PlotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainClipPathId = this.name + "-plot-area";
        this.targetClipPathId = this.name + "-target-area";
        this.plotOptions.onChange.subscribe(function () { _this.compute(); });
        this.compute();
    };
    PlotComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.modelSet) {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            if (this.modelSet) {
                var callback = function () { _this.compute(); };
                var ranges = this.modelSet.ranges;
                this.subscription = this.modelSet.onCompute.subscribe(callback);
                this.subscription.add(ranges.onChange.subscribe(callback));
                this.compute();
            }
        }
    };
    PlotComponent.prototype.ngAfterViewChecked = function () {
        this.draw();
    };
    PlotComponent.prototype.onResize = function () {
        this.compute();
    };
    PlotComponent.prototype.redraw = function () {
        this.compute();
    };
    PlotComponent.prototype.toggleTargetInfo = function (value) {
        if (!this.targetDragging) {
            this.showTargetInfo = value;
        }
    };
    PlotComponent.prototype.toggleHoverInfo = function (value) {
        this.showHoverInfo = value;
    };
    PlotComponent.prototype.hover = function (event) {
        if (this.hoverDisabled) {
            return;
        }
        var dim = event.target.getBoundingClientRect();
        var x = event.clientX - dim.left;
        var y = event.clientY - dim.top;
        if (x > this.xTargetRange[0] && x < this.xTargetRange[1] &&
            y > this.yTargetRange[0] && y < this.yTargetRange[1]) {
            // hide hover info if too close to the target point
            this.showHoverInfo = false;
            return;
        }
        var index = this.xBisector(this.mainData, this.xScale.invert(x));
        var data = this.mainData[index];
        if (data) {
            this.hoverPoint = {
                x: data[this.x.name],
                y: data[this.y.name]
            };
            this.hoverX = this.xScale(this.hoverPoint.x);
            this.hoverY = this.yScale(this.hoverPoint.y);
            this.showHoverInfo = true;
        }
        else {
            this.showHoverInfo = false;
        }
    };
    PlotComponent.prototype.hoverInfoY = function () {
        if (this.hoverY < this.yTargetRange[0]) {
            return "-3.5em";
        }
        return "1em";
    };
    PlotComponent.prototype.dragTargetStart = function () {
        this.targetDragging = true;
    };
    PlotComponent.prototype.dragTarget = function (event) {
        var x = this.xScale.invert(__WEBPACK_IMPORTED_MODULE_1_d3__["event"].x - this.margin);
        if (x < this.x.range.min) {
            x = this.x.range.min;
        }
        else if (x > this.x.range.max) {
            x = this.x.range.max;
        }
        var index = this.xBisector(this.mainData, x);
        var data = this.mainData[index];
        if (!data)
            return;
        this.targetPoint.x = data[this.x.name];
        this.targetPoint.y = data[this.y.name];
        this.computeDropPaths();
    };
    PlotComponent.prototype.dragTargetEnd = function () {
        this.targetDragging = false;
        this.showTargetInfo = false;
        if (this.modelSet && this.x.name) {
            var output = this.modelSet.model.output;
            this.modelSet.model.update((_a = {},
                _a[output] = this.targetPoint.y,
                _a[this.x.name] = this.targetPoint.x,
                _a));
        }
        var _a;
    };
    PlotComponent.prototype.compute = function () {
        var _this = this;
        if (!this.modelSet) {
            return;
        }
        // setup
        var model = this.modelSet.model;
        var ranges = this.modelSet.ranges;
        var data;
        switch (this.modelSet.model.output) {
            case "n":
                if (this.name == "top-left") {
                    this.x = {
                        name: "power", range: ranges.power, target: model.power,
                        title: "Power", sym: "1-β"
                    };
                }
                else if (this.name == "top-right") {
                    this.x = {
                        name: "delta", range: ranges.delta, target: model.delta,
                        title: "Detectable Alternative", sym: "δ"
                    };
                }
                this.y = {
                    name: "n", range: ranges.n, target: model.n,
                    title: "Sample Size", sym: "n"
                };
                data = this.modelSet.data.map(function (d) { return d.primary.data; });
                break;
            case "power":
                if (this.name == "top-left") {
                    this.x = {
                        name: "n", range: ranges.n, target: model.n,
                        title: "Sample Size", sym: "n"
                    };
                    this.y = {
                        name: "power", range: ranges.power, target: model.power,
                        title: "Power", sym: "1-β"
                    };
                    data = this.modelSet.data.map(function (d) { return d.primary.data; });
                }
                else if (this.name == "top-right") {
                    this.x = {
                        name: "delta", range: ranges.delta, target: model.delta,
                        title: "Detectable Alternative", sym: "δ"
                    };
                    this.y = {
                        name: "power", range: ranges.power, target: model.power,
                        title: "Power", sym: "1-β"
                    };
                    data = this.modelSet.data.map(function (d) { return d.secondary.data; });
                }
                break;
            case "delta":
                if (this.name == "top-left") {
                    this.x = {
                        name: "n", range: ranges.n, target: model.n,
                        title: "Sample Size", sym: "n"
                    };
                }
                else if (this.name == "top-right") {
                    this.x = {
                        name: "power", range: ranges.power, target: model.power,
                        title: "Power", sym: "1-β"
                    };
                }
                this.y = {
                    name: "delta", range: ranges.delta, target: model.delta,
                    title: "Detectable Alternative", sym: "δ"
                };
                data = this.modelSet.data.map(function (d) { return d.primary.data; });
                break;
        }
        if (!this.x || !this.y) {
            console.log("bad:", this.x, this.y);
            return;
        }
        this.title = this.y.title + " vs. " + this.x.title;
        this.targetPoint = { x: this.x.target, y: this.y.target };
        // margin
        var unitBox = this.unitElement.nativeElement.getBBox();
        if (unitBox && unitBox.width) {
            this.margin = unitBox.width * 2 + (20 * this.plotOptions.axisFontSize);
        }
        // dimensions
        this.width = this.getDimension('width') - (this.margin * 2);
        this.height = this.getDimension('height') - (this.margin * 2);
        // scales
        this.xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().
            domain(this.x.range.toArray()).
            range([0, this.width]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().
            domain(this.y.range.toArray().reverse()).
            range([0, this.height]);
        // paths
        data.reverse(); // reverse data so main line is drawn on top
        this.paths = data.map(function (subData) { return _this.getPath(subData, _this.x.name, _this.y.name); });
        this.mainData = data[data.length - 1].slice();
        this.mainData.sort(function (a, b) { return a[_this.x.name] - b[_this.x.name]; });
        // drop paths
        this.computeDropPaths();
        // target hover ranges
        var xTargetPos = this.xScale(this.targetPoint.x);
        this.xTargetRange = [xTargetPos - 5, xTargetPos + 5];
        var yTargetPos = this.yScale(this.targetPoint.y);
        this.yTargetRange = [yTargetPos - 5, yTargetPos + 5];
        this.xBisector = __WEBPACK_IMPORTED_MODULE_1_d3__["bisector"](function (point) { return point[_this.x.name]; }).left;
        this.needDraw = true;
    };
    PlotComponent.prototype.computeDropPaths = function () {
        var _this = this;
        var data = [
            [
                { x: this.xScale.domain()[0], y: this.targetPoint.y },
                { x: this.targetPoint.x, y: this.targetPoint.y }
            ],
            [
                { x: this.targetPoint.x, y: this.yScale.domain()[1] },
                { x: this.targetPoint.x, y: this.targetPoint.y }
            ],
        ];
        this.dropPaths = data.map(function (subData) { return _this.getPath(subData, 'x', 'y'); });
    };
    PlotComponent.prototype.draw = function () {
        if (!this.needDraw) {
            return;
        }
        // axes (drawn by d3)
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](this.xScale).ticks(6);
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.bottomAxisElement.nativeElement).
            call(xAxis).
            attr("font-size", 15 * this.plotOptions.axisFontSize).
            attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](this.yScale).ticks(6);
        __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.leftAxisElement.nativeElement).
            call(yAxis).
            attr("font-size", 15 * this.plotOptions.axisFontSize).
            attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);
        // make target point draggable
        var target = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.targetElement.nativeElement);
        var drag = __WEBPACK_IMPORTED_MODULE_1_d3__["drag"]().
            on("start", this.dragTargetStart.bind(this)).
            on("drag", this.dragTarget.bind(this)).
            on("end", this.dragTargetEnd.bind(this));
        target.call(drag);
        this.needDraw = false;
    };
    PlotComponent.prototype.mainClipPath = function () {
        return "url(#" + this.mainClipPathId + ")";
    };
    PlotComponent.prototype.targetClipPath = function () {
        return "url(#" + this.targetClipPathId + ")";
    };
    return PlotComponent;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__["a" /* AbstractPlotComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__t_test__["a" /* TTestSet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__t_test__["a" /* TTestSet */]) === "function" && _a || Object)
], PlotComponent.prototype, "modelSet", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('hover-disabled'),
    __metadata("design:type", Object)
], PlotComponent.prototype, "hoverDisabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('unit'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object)
], PlotComponent.prototype, "unitElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('bottomAxis'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _c || Object)
], PlotComponent.prototype, "bottomAxisElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('leftAxis'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _d || Object)
], PlotComponent.prototype, "leftAxisElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('target'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _e || Object)
], PlotComponent.prototype, "targetElement", void 0);
PlotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-plot',
        template: __webpack_require__("../../../../../src/app/plot/plot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/plot/plot.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__palette_service__["a" /* PaletteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__palette_service__["a" /* PaletteService */]) === "function" && _f || Object])
], PlotComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=plot.component.js.map

/***/ }),

/***/ "../../../../../src/app/range-slider/range-slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.slider-group {\n  padding: 5px;\n  border-radius: 5px;\n}\n\ndiv.slider-group.output {\n  background-color: #d8ecf3;\n}\n\ndiv.slider-group .label span {\n  font-weight: bold;\n}\n\ndiv.slider-group .slider,\ndiv.slider-group .number {\n  padding-top: 2ex;\n}\ndiv.slider-group .add-remove {\n  padding-top: 2.3ex;\n}\n\ndiv.slider-group div.inputs input {\n  width: 100%;\n}\n\ndiv.slider-group div.slider {\n  position: relative;\n  padding-left: 0;\n  padding-right: 0;\n}\n\ndiv.slider-group div.slider input {\n  display: block;\n}\n\ndiv.slider-group div.slider div.min,\ndiv.slider-group div.slider div.max {\n  position: absolute;\n  font-size: x-small;\n  top: 0;\n  background-color: #ddd;\n  border-radius: 1ex;\n  padding: 0.5ex;\n}\n\ndiv.slider-group.output div.slider div.min,\ndiv.slider-group.output div.slider div.max {\n  background-color: #ccc;\n}\n\ndiv.slider-group div.slider div.min {\n  left: 0;\n}\n\ndiv.slider-group div.slider div.max {\n  right: 0;\n}\n\n.fa {\n  opacity: 0.7;\n}\n.fa:hover {\n  opacity: 1;\n}\n\n.palette-color .fa {\n  opacity: 1;\n}\n\n.error {\n  color: darkred;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/range-slider/range-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-group\" [class.output]=\"isOutput\">\n  <ng-template [ngIf]=\"labelTpl\" [ngIfElse]=\"standardLabel\">\n    <ng-template [ngTemplateOutlet]=\"labelTpl?.templateRef\"></ng-template>\n  </ng-template>\n  <ng-template #standardLabel>\n    <div class=\"label\" *ngIf=\"label\">\n      {{label}}\n      <span *ngIf=\"isOutput\">(Output)</span>\n      <ng-template [ngIf]=\"helpTpl\">\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"rsHelp\" popoverTitle=\"{{label}}\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n        <ng-template #rsHelp>\n          <ng-template [ngTemplateOutlet]=\"helpTpl?.templateRef\"></ng-template>\n        </ng-template>\n      </ng-template>\n    </div>\n  </ng-template>\n  <div class=\"inputs row\">\n    <div class=\"col-sm-8\">\n      <div class=\"slider\">\n        <div class=\"min\">{{floor(min)}}</div>\n        <input #range name=\"{{name}}\" type=\"range\" step=\"{{step}}\"\n               min=\"{{min}}\" max=\"{{max}}\"\n               [value]=\"value\"\n               [disabled]=\"isOutput\"\n               (change)=\"rangeChanged(range.value)\"\n               (input)=\"rangeInput(range.value)\" />\n        <div class=\"max\">{{ceil(max)}}</div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"number\">\n        <input #number name=\"{{name}}\" type=\"number\" step=\"{{step}}\"\n               [min]=\"hardMin\" [max]=\"hardMax\" [value]=\"value\"\n               [disabled]=\"isOutput\"\n               (change)=\"numberChanged(number.value)\"\n               (input)=\"numberInput(number.value)\"\n               [ngbPopover]=\"errorMsg\" triggers=\"manual\"\n               container=\"body\" #errorPopover=\"ngbPopover\" />\n        <ng-template #errorMsg>\n          <span class=\"error\">Value is out of range ({{hardMin}}, {{hardMax}})</span>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"col-sm-1\"\n      [class.palette-color]=\"paletteColor >= 0\"\n      [style.color]=\"palette.getColor(paletteColor, paletteTheme)\">\n\n      <div class=\"add-remove\" *ngIf=\"!isOutput && canAdd\">\n        <i class=\"fa fa-plus-circle\" (click)=\"add()\"\n          ngbPopover=\"Click to add line to plot for alternate value of &quot;{{label}}&quot;\"\n          triggers=\"hover\" container=\"body\"></i>\n      </div>\n      <div class=\"add-remove\" *ngIf=\"canRemove\">\n        <i class=\"fa fa-minus-circle\" (click)=\"remove()\"\n          ngbPopover=\"Remove line from plot for &quot;{{label}}&quot;\"\n          triggers=\"hover\" container=\"body\"></i>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/range-slider/range-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__palette_service__ = __webpack_require__("../../../../../src/app/palette.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RangeSliderLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RangeSliderHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeSliderComponent; });
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
    return RangeSliderLabel;
}());
RangeSliderLabel = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: 'ng-template[rsLabel]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* TemplateRef */]) === "function" && _a || Object])
], RangeSliderLabel);

var RangeSliderHelp = (function () {
    function RangeSliderHelp(templateRef) {
        this.templateRef = templateRef;
    }
    return RangeSliderHelp;
}());
RangeSliderHelp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({ selector: 'ng-template[rsHelp]' }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* TemplateRef */]) === "function" && _b || Object])
], RangeSliderHelp);

var RangeSliderComponent = RangeSliderComponent_1 = (function () {
    function RangeSliderComponent(palette) {
        this.palette = palette;
        this.step = 0.01;
        this.isOutput = false;
        this.canAdd = true;
        this.canRemove = false;
        this.paletteColor = -1;
        this.paletteTheme = "plasma";
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    RangeSliderComponent.prototype.ngOnInit = function () {
    };
    RangeSliderComponent.prototype.ngOnChanges = function (changes) {
        if ('isOutput' in changes) {
            var change = changes.isOutput;
            if (change.previousValue === true && change.currentValue === false) {
                // if isOutput changes from true to false, turn on the error message if
                // the value is out of bounds
                if (this.value < this.hardMin || this.value > this.hardMax) {
                    this.errorPopover.open();
                }
            }
            else if (change.previousValue === false && change.currentValue === true) {
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
        this.value = parseFloat(newValue);
    };
    RangeSliderComponent.prototype.numberChanged = function (newValue) {
        this.trySetValue(newValue);
    };
    RangeSliderComponent.prototype.numberInput = function (newValue) {
        this.value = parseFloat(newValue);
    };
    RangeSliderComponent.prototype.add = function () {
        this.onAdd.emit(this.name);
    };
    RangeSliderComponent.prototype.remove = function () {
        this.onRemove.emit(this.name);
    };
    RangeSliderComponent.prototype.trySetValue = function (newValue) {
        var value = parseFloat(newValue);
        if (value < this.hardMin || value > this.hardMax) {
            this.errorPopover.open();
        }
        else {
            this.errorPopover.close();
            this.value = value;
            this.propagateChange();
        }
    };
    RangeSliderComponent.prototype.propagateChange = function () {
        if (this.changeCallback) {
            this.changeCallback(this.value);
        }
    };
    return RangeSliderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], RangeSliderComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], RangeSliderComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], RangeSliderComponent.prototype, "min", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], RangeSliderComponent.prototype, "max", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], RangeSliderComponent.prototype, "step", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('hard-min'),
    __metadata("design:type", Number)
], RangeSliderComponent.prototype, "hardMin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('hard-max'),
    __metadata("design:type", Number)
], RangeSliderComponent.prototype, "hardMax", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('is-output'),
    __metadata("design:type", Object)
], RangeSliderComponent.prototype, "isOutput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('can-add'),
    __metadata("design:type", Object)
], RangeSliderComponent.prototype, "canAdd", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('can-remove'),
    __metadata("design:type", Object)
], RangeSliderComponent.prototype, "canRemove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('palette-color'),
    __metadata("design:type", Object)
], RangeSliderComponent.prototype, "paletteColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('palette-theme'),
    __metadata("design:type", Object)
], RangeSliderComponent.prototype, "paletteTheme", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])('add'),
    __metadata("design:type", Object)
], RangeSliderComponent.prototype, "onAdd", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])('remove'),
    __metadata("design:type", Object)
], RangeSliderComponent.prototype, "onRemove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ContentChild */])(RangeSliderLabel),
    __metadata("design:type", RangeSliderLabel)
], RangeSliderComponent.prototype, "labelTpl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ContentChild */])(RangeSliderHelp),
    __metadata("design:type", RangeSliderHelp)
], RangeSliderComponent.prototype, "helpTpl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("errorPopover"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbPopover */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbPopover */]) === "function" && _c || Object)
], RangeSliderComponent.prototype, "errorPopover", void 0);
RangeSliderComponent = RangeSliderComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-range-slider',
        template: __webpack_require__("../../../../../src/app/range-slider/range-slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/range-slider/range-slider.component.css")],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* forwardRef */])(function () { return RangeSliderComponent_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__palette_service__["a" /* PaletteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__palette_service__["a" /* PaletteService */]) === "function" && _d || Object])
], RangeSliderComponent);

var _a, _b, RangeSliderComponent_1, _c, _d;
//# sourceMappingURL=range-slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/range.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__changeable__ = __webpack_require__("../../../../../src/app/changeable.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Range; });
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

var Range = (function (_super) {
    __extends(Range, _super);
    function Range(min, max) {
        var _this = _super.call(this) || this;
        _this.noEmit = true;
        _this.min = min;
        _this.max = max;
        _this.noEmit = false;
        _this.changes = {};
        return _this;
    }
    Range.fromArray = function (arr) {
        if (arr.length != 2) {
            throw new Error("invalid array, must be of length 2");
        }
        if (arr[0] > arr[1]) {
            throw new Error("invalid array, must be in order");
        }
        return new Range(arr[0], arr[1]);
    };
    Range.fromData = function (indices, data, propertyName) {
        var minIndex = 0, maxIndex = data.length - 1;
        if (indices[0] > minIndex) {
            minIndex = indices[0];
        }
        if (indices[1] < maxIndex) {
            maxIndex = indices[1];
        }
        var values = [
            data[minIndex][propertyName],
            data[maxIndex][propertyName]
        ].sort(function (a, b) { return a - b; });
        values[0] = Math.floor(values[0] * 100) / 100;
        values[1] = Math.ceil(values[1] * 100) / 100;
        return new Range(values[0], values[1]);
    };
    Range.prototype.toArray = function () {
        return ([this.min, this.max]);
    };
    Range.prototype.findIndices = function (data, propertyName) {
        var minIndex = -1, maxIndex = -1;
        for (var i = 0; i < data.length; i++) {
            if (data[i][propertyName] >= this.min) {
                minIndex = i;
                break;
            }
        }
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i][propertyName] <= this.max) {
                maxIndex = i;
                break;
            }
        }
        return [minIndex, maxIndex];
    };
    return Range;
}(__WEBPACK_IMPORTED_MODULE_0__changeable__["a" /* ChangeEmitter */]));

__decorate([
    __WEBPACK_IMPORTED_MODULE_0__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], Range.prototype, "min", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], Range.prototype, "max", void 0);
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "../../../../../src/app/serialize-plot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_plot_component__ = __webpack_require__("../../../../../src/app/abstract-plot.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerializePlotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SerializePlotComponent = (function () {
    function SerializePlotComponent() {
    }
    SerializePlotComponent.prototype.plotTitle = function () {
        return this.plot.title;
    };
    SerializePlotComponent.prototype.serializeAsXML = function () {
        var serializer = new XMLSerializer();
        return serializer.serializeToString(this.plot.plotElement.nativeElement);
    };
    SerializePlotComponent.prototype.serialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = _this.serializeAsXML();
            var width = _this.plot.getDimension('width');
            var height = _this.plot.getDimension('height');
            var canvas = _this.canvasElement.nativeElement;
            canvas.width = width;
            canvas.height = height;
            var context = canvas.getContext("2d");
            var image = new Image(width, height);
            image.addEventListener('load', function () {
                context.clearRect(0, 0, width, height);
                context.drawImage(image, 0, 0, width, height);
                canvas.toBlob(function (blob) {
                    resolve(blob);
                });
            });
            var src = 'data:image/svg+xml;base64,' + btoa(data);
            image.src = src;
        });
    };
    return SerializePlotComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('plot'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__abstract_plot_component__["a" /* AbstractPlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__abstract_plot_component__["a" /* AbstractPlotComponent */]) === "function" && _a || Object)
], SerializePlotComponent.prototype, "plot", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('canvas'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object)
], SerializePlotComponent.prototype, "canvasElement", void 0);
SerializePlotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-serialize-plot',
        template: '<canvas #canvas style="display: none"></canvas>'
    })
], SerializePlotComponent);

var _a, _b;
//# sourceMappingURL=serialize-plot.component.js.map

/***/ }),

/***/ "../../../../../src/app/start/start.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overview {\n  text-align: right;\n}\n\n.btn-secondary {\n  padding: 0.3rem 0.3rem;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; /* red */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #startForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"output\">\n      What do you want to know?\n      <button type=\"button\" class=\"btn btn-secondary fa fa-question-circle\"\n        (click)=\"toggleHelp()\"></button>\n    </label>\n    <select class=\"form-control\" id=\"output\"\n            required\n            [(ngModel)]=\"model.output\" name=\"output\">\n      <option></option>\n      <option value=\"n\">Sample size</option>\n      <option value=\"power\">Power</option>\n      <option value=\"delta\">Detectable alternative</option>\n    </select>\n  </div>\n  <!--\n  <div class=\"form-group\" *ngIf=\"model.output\">\n    <label for=\"design\">Paired or independent?</label>\n    <select class=\"form-control\" id=\"design\"\n            required\n            [(ngModel)]=\"model.design\" name=\"design\">\n      <option></option>\n      <option>Paired</option>\n      <option>Independent</option>\n    </select>\n  </div>\n  -->\n  <div *ngIf=\"model.output\">\n    <div class=\"form-group\">\n      <label for=\"alpha\">\n        Type I Error (&alpha;)\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"alphaHelp\" popoverTitle=\"Type I Error (&alpha;)\"\n          placement=\"right\" triggers=\"hover\"></i>\n      </label>\n      <ng-template #alphaHelp>\n        The Type I error probability for a two sided test. This is the\n        probability that we will falsely reject the null hypothesis.\n      </ng-template>\n      <input class=\"form-control\" id=\"alpha\"\n             type=\"number\" step=\"0.01\"\n             required\n             [(ngModel)]=\"model.alpha\" name=\"alpha\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sigma\">\n        Standard deviation (&sigma;)\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"sigmaHelp\" popoverTitle=\"Standard deviation (&sigma;)\"\n          placement=\"right\" triggers=\"hover\"></i>\n      </label>\n      <ng-template #sigmaHelp>\n        For independent tests σ is the within group standard deviation. For\n        paired designs it is the standard deviation of difference in the\n        response of matched pairs.\n      </ng-template>\n      <input class=\"form-control\" id=\"sigma\"\n             type=\"number\" step=\"0.1\"\n             required\n             [(ngModel)]=\"model.sigma\" name=\"sigma\">\n    </div>\n    <div *ngIf=\"model.output != 'power'\" class=\"form-group\">\n      <label for=\"power\">\n        Power\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"powerHelp\" popoverTitle=\"Power\"\n          placement=\"right\" triggers=\"hover\"></i>\n      </label>\n      <ng-template #powerHelp>\n        For independent tests power is probability of correctly rejecting the\n        null hypothesis of equal population means given n experimental\n        patients, m control patients per experimental patient, a Type I error\n        probability α and a true difference in population means of δ. For\n        paired tests it is the probability of correctly rejecting the null\n        hypothesis of equal population means given n pairs of patients, a Type\n        I error probability α and a true difference in population means of δ.\n      </ng-template>\n      <input class=\"form-control\" id=\"power\"\n             type=\"number\" step=\"0.01\"\n             required\n             [(ngModel)]=\"model.power\" name=\"power\">\n    </div>\n    <div *ngIf=\"model.output != 'delta'\" class=\"form-group\">\n      <label for=\"delta\">Difference in population means (&delta;)</label>\n      <input class=\"form-control\" id=\"delta\"\n             type=\"number\" step=\"0.1\"\n             required\n             [(ngModel)]=\"model.delta\" name=\"delta\">\n    </div>\n    <div *ngIf=\"model.output != 'n'\" class=\"form-group\">\n      <label for=\"n\">\n        Sample size\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"nHelp\" popoverTitle=\"Sample size\"\n          placement=\"right\" triggers=\"hover\"></i>\n      </label>\n      <ng-template #nHelp>\n        For independent t-tests n is the number of experimental subjects. For\n        pair test n is the number of pairs.\n      </ng-template>\n      <input class=\"form-control\" id=\"n\"\n             type=\"number\"\n             required\n             [(ngModel)]=\"model.n\" name=\"n\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\"\n            [disabled]=\"!startForm.form.valid\">\n      Calculate\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
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
        this.onCalculate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.onToggleHelp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    StartComponent.prototype.toggleHelp = function () {
        this.onToggleHelp.emit();
    };
    StartComponent.prototype.onSubmit = function () {
        this.onCalculate.emit();
    };
    return StartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__t_test__["c" /* TTest */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__t_test__["c" /* TTest */]) === "function" && _a || Object)
], StartComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], StartComponent.prototype, "onCalculate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], StartComponent.prototype, "onToggleHelp", void 0);
StartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-start',
        template: __webpack_require__("../../../../../src/app/start/start.component.html"),
        styles: [__webpack_require__("../../../../../src/app/start/start.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StartComponent);

var _a;
//# sourceMappingURL=start.component.js.map

/***/ }),

/***/ "../../../../../src/app/t-test.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TTestService; });
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
        this.stateless = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].stateless;
    }
    TTestService.prototype.create = function (model) {
        var url;
        if (this.stateless) {
            url = this.apiUrl + "/calc";
        }
        else {
            url = this.apiUrl;
        }
        var params = { model: model.attributes() };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.
            post(url, JSON.stringify(params), options).
            toPromise().
            then(function (response) { return response.json(); }).
            catch(this.handleError);
    };
    TTestService.prototype.update = function (model) {
        if (this.stateless) {
            return this.create(model);
        }
        if (!model.id) {
            throw new Error("model has no id");
        }
        var url = this.apiUrl + "/" + model.id;
        var params = { model: model.attributes() };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.
            put(url, JSON.stringify(params), options).
            toPromise().
            then(function (response) { return response.json(); }).
            catch(this.handleError);
    };
    TTestService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return TTestService;
}());
TTestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], TTestService);

var _a;
//# sourceMappingURL=t-test.service.js.map

/***/ }),

/***/ "../../../../../src/app/t-test.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changeable__ = __webpack_require__("../../../../../src/app/changeable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range__ = __webpack_require__("../../../../../src/app/range.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TTestExtra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TTestRanges; });
/* unused harmony export TTestData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TTestSet; });
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




var TTestExtra = (function (_super) {
    __extends(TTestExtra, _super);
    function TTestExtra(attribs) {
        var _this = _super.call(this) || this;
        if (Object.keys(attribs).length > 1) {
            throw new Error("elements must be mutually exclusive");
        }
        _this.noEmit = true;
        if ('alpha' in attribs) {
            _this.alpha = _this.proxy('alpha', attribs.alpha.slice());
        }
        else if ('sigma' in attribs) {
            _this.sigma = _this.proxy('sigma', attribs.sigma.slice());
        }
        else if ('delta' in attribs) {
            _this.delta = _this.proxy('delta', attribs.delta.slice());
        }
        else if ('power' in attribs) {
            _this.power = _this.proxy('power', attribs.power.slice());
        }
        else if ('n' in attribs) {
            _this.n = _this.proxy('n', attribs.n.slice());
        }
        _this.noEmit = false;
        _this.changes = {};
        return _this;
    }
    TTestExtra.prototype.update = function (attribs, emit) {
        if (emit === void 0) { emit = true; }
        var keys = Object.keys(attribs);
        if (keys.length > 1) {
            throw new Error("elements must be mutually exclusive");
        }
        var key = keys[0];
        var current = this[key];
        if (current === undefined) {
            throw new Error("invalid key: " + key);
        }
        var obj = attribs[key];
        if (Array.isArray(obj)) {
            // normally I'd want to catch all the change events here and combine
            // then into one event, but only one value should be changing here at a time
            obj.forEach(function (value, i) {
                current[i] = value;
            });
        }
        else if ('replace' in obj) {
            obj = obj.replace;
            current[obj.index] = obj.value;
        }
        else if ('remove' in obj) {
            obj = obj.remove;
            current.splice(obj.index, 1);
        }
        else if ('append' in obj) {
            obj = obj.append;
            current.push(obj.value);
        }
    };
    TTestExtra.prototype.attributes = function () {
        var result = {};
        if (this.alpha) {
            result.alpha = this.alpha.slice();
        }
        else if (this.sigma) {
            result.sigma = this.sigma.slice();
        }
        else if (this.delta) {
            result.delta = this.delta.slice();
        }
        else if (this.power) {
            result.power = this.power.slice();
        }
        else if (this.n) {
            result.n = this.n.slice();
        }
        return result;
    };
    TTestExtra.prototype.push = function (name, value) {
        if (this[name] === undefined) {
            throw new Error("elements must be mutually exclusive");
        }
        this.noEmit = true;
        this[name].push(value);
        this.noEmit = false;
        this.changes = (_a = {}, _a[name] = { append: { value: value } }, _a);
        this.emit();
        var _a;
    };
    TTestExtra.prototype.remove = function (name, index) {
        if (this[name] === undefined) {
            throw new Error("invalid name: " + name);
        }
        this.noEmit = true;
        this[name].splice(index, 1);
        this.noEmit = false;
        this.changes = (_a = {}, _a[name] = { remove: { index: index } }, _a);
        this.emit();
        var _a;
    };
    TTestExtra.prototype.isEmpty = function (name) {
        if (this[name] === undefined) {
            throw new Error("invalid name: " + name);
        }
        return this[name].length == 0;
    };
    TTestExtra.prototype.round = function () {
        var attribs = this.attributes();
        for (var key in attribs) {
            attribs[key] = attribs[key].map(function (value) {
                return Math.round(value * 100) / 100;
            });
        }
        return new TTestExtra(attribs);
    };
    TTestExtra.prototype.proxy = function (name, arr) {
        var _this = this;
        var result = new Proxy(arr, {
            set: function (target, property, value, receiver) {
                if (target[property] !== value) {
                    target[property] = value;
                    _this.changes = (_a = {}, _a[name] = { replace: { index: property, value: value } }, _a);
                    _this.emit();
                }
                return true;
                var _a;
            }
        });
        return result;
    };
    return TTestExtra;
}(__WEBPACK_IMPORTED_MODULE_2__changeable__["a" /* ChangeEmitter */]));

__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", Array)
], TTestExtra.prototype, "alpha", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", Array)
], TTestExtra.prototype, "sigma", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", Array)
], TTestExtra.prototype, "delta", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", Array)
], TTestExtra.prototype, "power", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", Array)
], TTestExtra.prototype, "n", void 0);
var TTest = (function (_super) {
    __extends(TTest, _super);
    function TTest(attribs) {
        var _this = _super.call(this) || this;
        _this.subscription = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"]();
        if (attribs) {
            _this.update(attribs, false);
        }
        return _this;
    }
    TTest.prototype.update = function (attribs, emit) {
        var _this = this;
        if (emit === void 0) { emit = true; }
        this.noEmit = true;
        if (attribs.id !== undefined) {
            this.id = attribs.id;
        }
        if (attribs.output !== undefined) {
            this.output = attribs.output;
        }
        if (attribs.design !== undefined) {
            this.design = attribs.design;
        }
        if (attribs.alpha !== undefined) {
            this.alpha = attribs.alpha;
        }
        if (attribs.sigma !== undefined) {
            this.sigma = attribs.sigma;
        }
        if (attribs.delta !== undefined) {
            this.delta = attribs.delta;
        }
        if (attribs.power !== undefined) {
            this.power = attribs.power;
        }
        if (attribs.n !== undefined) {
            this.n = attribs.n;
        }
        if ('extra' in attribs) {
            var extra = attribs.extra;
            if (extra) {
                if (!this.extra) {
                    extra = extra.attributes();
                    this.extra = new TTestExtra(extra);
                    this.subscription = this.extra.onChange.subscribe(function (value) {
                        _this.changes.extra = value;
                        _this.emit();
                    });
                }
                else {
                    this.extra.update(extra);
                }
            }
            else {
                this.subscription.unsubscribe();
                this.extra = undefined;
            }
        }
        this.noEmit = false;
        var changes = this.changes;
        if (emit) {
            this.emit();
        }
        else {
            this.changes = {};
        }
        return changes;
    };
    TTest.prototype.roundUpdate = function (attribs, emit) {
        if (emit === void 0) { emit = true; }
        attribs = Object.assign({}, attribs);
        if (attribs.alpha !== undefined) {
            attribs.alpha = Math.round(attribs.alpha * 100) / 100;
        }
        if (attribs.sigma !== undefined) {
            attribs.sigma = Math.round(attribs.sigma * 100) / 100;
        }
        if (attribs.delta !== undefined) {
            attribs.delta = Math.round(attribs.delta * 100) / 100;
        }
        if (attribs.power !== undefined) {
            attribs.power = Math.round(attribs.power * 100) / 100;
        }
        if (attribs.n !== undefined) {
            attribs.n = Math.ceil(attribs.n);
        }
        this.update(attribs, emit);
    };
    TTest.prototype.isValid = function () {
        return this.alpha > 0 && this.alpha < 1 &&
            this.sigma > 0 &&
            (this.output == "n" || this.output == "power" || this.output == "delta") &&
            (this.output == "n" || this.n > 0) &&
            (this.output == "power" || (this.power > this.alpha && this.power < 1)) &&
            (this.output == "delta" || this.delta > 0);
    };
    TTest.prototype.attributes = function () {
        var result = {
            output: this.output, alpha: this.alpha, sigma: this.sigma,
            delta: this.delta, power: this.power, n: this.n
        };
        if (this.id) {
            result.id = this.id;
        }
        if (this.design) {
            result.design = this.design;
        }
        if (this.extra) {
            result.extra = this.extra.attributes();
        }
        return (result);
    };
    TTest.prototype.round = function () {
        var attribs = this.attributes();
        attribs.alpha = Math.round(attribs.alpha * 100) / 100;
        attribs.sigma = Math.round(attribs.sigma * 100) / 100;
        attribs.delta = Math.round(attribs.delta * 100) / 100;
        attribs.power = Math.round(attribs.power * 100) / 100;
        attribs.n = Math.ceil(attribs.n);
        if (this.extra) {
            attribs.extra = this.extra.round();
        }
        return new TTest(attribs);
    };
    return TTest;
}(__WEBPACK_IMPORTED_MODULE_2__changeable__["a" /* ChangeEmitter */]));

__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", String)
], TTest.prototype, "id", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", String)
], TTest.prototype, "output", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", String)
], TTest.prototype, "design", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], TTest.prototype, "alpha", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], TTest.prototype, "sigma", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], TTest.prototype, "delta", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], TTest.prototype, "power", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], TTest.prototype, "n", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", TTestExtra)
], TTest.prototype, "extra", void 0);
var TTestRanges = (function (_super) {
    __extends(TTestRanges, _super);
    function TTestRanges(attribs) {
        var _this = _super.call(this) || this;
        _this.subscription = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"]();
        if (attribs) {
            _this.update(attribs, false);
        }
        return _this;
    }
    TTestRanges.fromArrays = function (attribs) {
        var result = {};
        result.n = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromArray(attribs.n);
        result.power = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromArray(attribs.power);
        result.delta = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromArray(attribs.delta);
        result.pSpace = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromArray(attribs.pSpace);
        return new TTestRanges(result);
    };
    TTestRanges.prototype.update = function (ranges, emit) {
        if (emit === void 0) { emit = true; }
        this.subscription.unsubscribe();
        this.noEmit = true;
        if ('n' in ranges) {
            this.n = ranges.n;
        }
        if ('power' in ranges) {
            this.power = ranges.power;
        }
        if ('delta' in ranges) {
            this.delta = ranges.delta;
        }
        if ('pSpace' in ranges) {
            this.pSpace = ranges.pSpace;
        }
        this.noEmit = false;
        this.subscribeToChildren();
        if (emit) {
            this.emit();
        }
        else {
            this.changes = {};
        }
    };
    TTestRanges.prototype.updateFromArrays = function (attribs) {
        var result = {};
        result.n = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromArray(attribs.n);
        result.power = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromArray(attribs.power);
        result.delta = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromArray(attribs.delta);
        result.pSpace = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromArray(attribs.pSpace);
        this.update(result);
    };
    TTestRanges.prototype.attributes = function () {
        var result = {};
        result.n = this.n.toArray();
        result.power = this.power.toArray();
        result.delta = this.delta.toArray();
        result.pSpace = this.pSpace.toArray();
        return result;
    };
    TTestRanges.prototype.subscribeToChildren = function () {
        this.subscription = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"]();
        this.subscribeToChild("n");
        this.subscribeToChild("power");
        this.subscribeToChild("delta");
        this.subscribeToChild("pSpace");
    };
    TTestRanges.prototype.subscribeToChild = function (name) {
        var _this = this;
        var child = this[name];
        if (child) {
            var sub = child.onChange.subscribe(function (value) {
                _this.onChange.emit((_a = {}, _a[name] = value, _a));
                var _a;
            });
            this.subscription.add(sub);
        }
    };
    return TTestRanges;
}(__WEBPACK_IMPORTED_MODULE_2__changeable__["a" /* ChangeEmitter */]));

__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */]) === "function" && _a || Object)
], TTestRanges.prototype, "n", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */]) === "function" && _b || Object)
], TTestRanges.prototype, "power", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */]) === "function" && _c || Object)
], TTestRanges.prototype, "delta", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2__changeable__["b" /* Changeable */],
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */]) === "function" && _d || Object)
], TTestRanges.prototype, "pSpace", void 0);
var TTestData = (function () {
    function TTestData() {
    }
    return TTestData;
}());

var TTestSet = (function () {
    function TTestSet(model, data) {
        var _this = this;
        this.model = model;
        this.data = data;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.onCompute = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.model.onChange.subscribe(function (value) {
            _this.onChange.emit({ model: value });
        });
        this.calcRanges();
        this.ranges.onChange.subscribe(function (value) {
            _this.onChange.emit({ ranges: value });
        });
    }
    TTestSet.prototype.update = function (model, data) {
        var _this = this;
        var prevChanges = this.model.prevChanges;
        this.model.update(model);
        this.data = data;
        var skip;
        var changeKeys = Object.keys(prevChanges);
        if (changeKeys.length == 2 && this.model.output in prevChanges) {
            skip = changeKeys.find(function (k) { return k != _this.model.output; });
        }
        this.calcRanges(skip);
        this.onCompute.emit();
    };
    TTestSet.prototype.calcRanges = function (skip) {
        var n, power, delta, pSpace, indices, values, min, max;
        var deltaMax = 2.5 * this.model.sigma;
        var primary = this.data[0].primary;
        var tertiary = this.data[0].tertiary;
        switch (this.model.output) {
            case "n":
                values = [this.model.n * 0.5, this.model.n * 1.5].sort(function (a, b) { return a - b; });
                min = Math.floor(values[0] * 100) / 100;
                max = Math.ceil(values[1] * 100) / 100;
                n = new __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */](min, max);
                indices = n.findIndices(primary.data, 'n');
                if (skip != 'power') {
                    power = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromData(indices, primary.data, 'power');
                }
                if (skip != 'delta') {
                    delta = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromData(indices, primary.data, 'delta');
                }
                break;
            case "power":
                power = new __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */](0, 1.0);
                indices = power.findIndices(primary.data, 'power');
                if (skip != 'n') {
                    n = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromData(indices, primary.data, 'n');
                }
                if (skip != 'delta') {
                    delta = new __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */](-deltaMax, deltaMax);
                }
                break;
            case "delta":
                values = [this.model.delta * 0.5, this.model.delta * 1.5].sort(function (a, b) { return a - b; });
                min = Math.floor(values[0] * 100) / 100;
                max = Math.ceil(values[1] * 100) / 100;
                delta = new __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */](min, max);
                indices = delta.findIndices(primary.data, 'delta');
                if (skip != 'n') {
                    n = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromData(indices, primary.data, 'n');
                }
                if (skip != 'power') {
                    power = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromData(indices, primary.data, 'power');
                }
                break;
        }
        // parameter space
        min = -deltaMax;
        max = deltaMax;
        if (tertiary.range[0] < min) {
            min = tertiary.range[0] - Math.abs(tertiary.range[0] * 0.5);
        }
        if (tertiary.range[1] > max) {
            max = tertiary.range[1] + Math.abs(tertiary.range[1] * 0.5);
        }
        pSpace = new __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */](min, max);
        var attribs = { pSpace: pSpace };
        if (n)
            attribs.n = n;
        if (power)
            attribs.power = power;
        if (delta)
            attribs.delta = delta;
        if (!this.ranges) {
            this.ranges = new TTestRanges(attribs);
        }
        else {
            this.ranges.update(attribs);
        }
    };
    return TTestSet;
}());

var _a, _b, _c, _d;
//# sourceMappingURL=t-test.js.map

/***/ }),

/***/ "../../../../../src/app/t-test/t-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overview {\n  text-align: right;\n}\n\n.btn-secondary {\n  padding: 0.3rem 0.3rem;\n}\n\ndiv.slider-group {\n  padding: 5px;\n  border-radius: 5px;\n}\n\ndiv.slider-group.output {\n  background-color: #d8ecf3;\n}\n\ndiv.slider-group .label span {\n  font-weight: bold;\n}\n\ndiv.slider-group .slider,\ndiv.slider-group .number {\n  padding-top: 2ex;\n}\n\ndiv.slider-group div.inputs input {\n  width: 100%;\n}\n\ndiv.slider-group div.slider {\n  position: relative;\n  padding-left: 0;\n  padding-right: 0;\n}\n\ndiv.slider-group div.slider input {\n  display: block;\n}\n\ndiv.slider-group div.slider div.min,\ndiv.slider-group div.slider div.max {\n  position: absolute;\n  font-size: x-small;\n  top: 0;\n  background-color: #ddd;\n  border-radius: 1ex;\n  padding: 0.5ex;\n}\n\ndiv.slider-group.output div.slider div.min,\ndiv.slider-group.output div.slider div.max {\n  background-color: #ccc;\n}\n\ndiv.slider-group div.slider div.min {\n  left: 0;\n}\n\ndiv.slider-group div.slider div.max {\n  right: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/t-test/t-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label>\n    Output\n    <select class=\"form-control\" name=\"output\"\n            [(ngModel)]=\"round.output\">\n      <option value=\"n\">Sample size</option>\n      <option value=\"power\">Power</option>\n      <option value=\"delta\">Detectable alternative</option>\n    </select>\n  </label>\n</div>\n\n<app-range-slider name=\"alpha\" label=\"Type I Error (&alpha;)\"\n  [min]=\"min.alpha\" [max]=\"max.alpha\"\n  [hard-min]=\"min.alpha\" [hard-max]=\"max.alpha\"\n  [can-add]=\"!round.extra || round.extra.alpha\" (add)=\"addInput($event)\"\n  [palette-color]=\"round.extra?.alpha ? 0 : -1\"\n  [palette-theme]=\"plotOptions.paletteTheme\"\n  [(ngModel)]=\"round.alpha\">\n  <ng-template rsHelp>\n    The Type I error probability for a two sided test. This is the\n    probability that we will falsely reject the null hypothesis.\n  </ng-template>\n</app-range-slider>\n<div class=\"extra\" *ngFor=\"let alpha of round.extra?.alpha; let i = index; trackBy: trackByExtra\">\n  <app-range-slider name=\"alpha-{{i+2}}\" label=\"Type I Error (&alpha;) #{{i+2}}\"\n    [min]=\"min.alpha\" [max]=\"max.alpha\"\n    [hard-min]=\"min.alpha\" [hard-max]=\"max.alpha\"\n    [can-add]=\"false\" [can-remove]=\"true\" (remove)=\"removeInput($event, i)\"\n    [palette-color]=\"i+1\"\n    [palette-theme]=\"plotOptions.paletteTheme\"\n    [(ngModel)]=\"round.extra.alpha[i]\">\n  </app-range-slider>\n</div>\n\n<app-range-slider name=\"sigma\" label=\"Std. deviation (&sigma;)\"\n  [min]=\"min.sigma\" [max]=\"max.sigma\" step=\"0.1\"\n  [hard-min]=\"1\"\n  [can-add]=\"!round.extra || round.extra.sigma\" (add)=\"addInput($event)\"\n  [palette-color]=\"round.extra?.sigma ? 0 : -1\"\n  [palette-theme]=\"plotOptions.paletteTheme\"\n  [(ngModel)]=\"round.sigma\">\n  <ng-template rsHelp>\n    For independent tests σ is the within group standard deviation. For\n    paired designs it is the standard deviation of difference in the\n    response of matched pairs.\n  </ng-template>\n</app-range-slider>\n<div class=\"extra\" *ngFor=\"let sigma of round.extra?.sigma; let i = index; trackBy: trackByExtra\">\n  <app-range-slider name=\"sigma-{{i+2}}\" label=\"Std. deviation #{{i+2}}\"\n    [min]=\"min.sigma\" [max]=\"max.sigma\" step=\"0.1\"\n    [hard-min]=\"1\"\n    [can-add]=\"false\" [can-remove]=\"true\" (remove)=\"removeInput($event, i)\"\n    [palette-color]=\"i+1\"\n    [palette-theme]=\"plotOptions.paletteTheme\"\n    [(ngModel)]=\"round.extra.sigma[i]\">\n  </app-range-slider>\n</div>\n\n<app-range-slider name=\"power\" label=\"Power\"\n  [min]=\"min.power\" [max]=\"max.power\"\n  [hard-min]=\"min.power\" [hard-max]=\"max.power\"\n  [can-add]=\"!round.extra || round.extra.power\" (add)=\"addInput($event)\"\n  [is-output]=\"round.output == 'power'\"\n  [palette-color]=\"round.extra?.power ? 0 : -1\"\n  [palette-theme]=\"plotOptions.paletteTheme\"\n  [(ngModel)]=\"round.power\">\n  <ng-template rsHelp>\n    For independent tests power is probability of correctly rejecting the\n    null hypothesis of equal population means given n experimental\n    patients, m control patients per experimental patient, a Type I error\n    probability α and a true difference in population means of δ. For\n    paired tests it is the probability of correctly rejecting the null\n    hypothesis of equal population means given n pairs of patients, a Type\n    I error probability α and a true difference in population means of δ.\n  </ng-template>\n</app-range-slider>\n<div class=\"extra\" *ngFor=\"let power of round.extra?.power; let i = index; trackBy: trackByExtra\">\n  <app-range-slider name=\"power-{{i+2}}\" label=\"Power #{{i+2}}\"\n    [min]=\"min.power\" [max]=\"max.power\"\n    [hard-min]=\"min.power\" [hard-max]=\"max.power\"\n    [can-add]=\"false\" [can-remove]=\"true\" (remove)=\"removeInput($event, i)\"\n    [palette-color]=\"i+1\"\n    [palette-theme]=\"plotOptions.paletteTheme\"\n    [(ngModel)]=\"round.extra.power[i]\">\n  </app-range-slider>\n</div>\n\n<app-range-slider name=\"delta\" label=\"Difference in population means (&delta;)\"\n  [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\"\n  [can-add]=\"!round.extra || round.extra.delta\" (add)=\"addInput($event)\"\n  [is-output]=\"round.output == 'delta'\"\n  [palette-color]=\"round.extra?.delta ? 0 : -1\"\n  [palette-theme]=\"plotOptions.paletteTheme\"\n  [(ngModel)]=\"round.delta\">\n  <ng-template rsHelp>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim nunc,\n    rutrum at ligula id, tempor tincidunt nunc.\n  </ng-template>\n</app-range-slider>\n<div class=\"extra\" *ngFor=\"let delta of round.extra?.delta; let i = index; trackBy: trackByExtra\">\n  <app-range-slider name=\"delta-{{i+2}}\" label=\"Difference in population means (&delta;) #{{i+2}}\"\n    [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\"\n    [hard-min]=\"min.delta\" [hard-max]=\"max.delta\"\n    [can-add]=\"false\" [can-remove]=\"true\" (remove)=\"removeInput($event, i)\"\n    [palette-color]=\"i+1\"\n    [palette-theme]=\"plotOptions.paletteTheme\"\n    [(ngModel)]=\"round.extra.delta[i]\">\n  </app-range-slider>\n</div>\n\n<app-range-slider name=\"n\" label=\"Sample size\"\n  [min]=\"min.n\" [max]=\"max.n\" step=\"1\"\n  [hard-min]=\"1\"\n  [can-add]=\"!round.extra || round.extra.n\" (add)=\"addInput($event)\"\n  [is-output]=\"round.output == 'n'\"\n  [palette-color]=\"round.extra?.n ? 0 : -1\"\n  [palette-theme]=\"plotOptions.paletteTheme\"\n  [(ngModel)]=\"round.n\">\n  <ng-template rsHelp>\n    For independent t-tests n is the number of experimental subjects. For\n    pair test n is the number of pairs.\n  </ng-template>\n</app-range-slider>\n<div class=\"extra\" *ngFor=\"let n of round.extra?.n; let i = index; trackBy: trackByExtra\">\n  <app-range-slider name=\"n-{{i+2}}\" label=\"Sample size #{{i+2}}\"\n    [min]=\"min.n\" [max]=\"max.n\" step=\"1\"\n    [hard-min]=\"1\"\n    [can-add]=\"false\" [can-remove]=\"true\" (remove)=\"removeInput($event, i)\"\n    [palette-color]=\"i+1\"\n    [palette-theme]=\"plotOptions.paletteTheme\"\n    [(ngModel)]=\"round.extra.n[i]\">\n  </app-range-slider>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/t-test/t-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__t_test_service__ = __webpack_require__("../../../../../src/app/t-test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plot_options__ = __webpack_require__("../../../../../src/app/plot-options.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TTestComponent; });
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
    function TTestComponent(ttestService) {
        this.ttestService = ttestService;
    }
    TTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = this.modelSet.model;
        this.round = this.model.round();
        this.model.onChange.
            debounceTime(100).
            subscribe(function (changes) {
            _this.modelChanged(changes);
        });
        this.round.onChange.subscribe(function (changes) {
            _this.model.update(changes);
        });
        this.min = new __WEBPACK_IMPORTED_MODULE_2__t_test__["c" /* TTest */](this.model);
        this.max = new __WEBPACK_IMPORTED_MODULE_2__t_test__["c" /* TTest */](this.model);
        this.min.alpha = 0.01;
        this.max.alpha = 0.99;
        this.min.power = 0.01;
        this.max.power = 0.99;
        this.calculateSliderRange('n');
        this.calculateSliderRange('delta');
        this.calculateSliderRange('sigma');
    };
    TTestComponent.prototype.addInput = function (name) {
        var extra = this.round.extra;
        if (extra) {
            extra.push(name, this.round[name]);
        }
        else {
            extra = new __WEBPACK_IMPORTED_MODULE_2__t_test__["d" /* TTestExtra */]((_a = {}, _a[name] = [this.round[name]], _a));
            this.round.update({ extra: extra });
        }
        var _a;
    };
    TTestComponent.prototype.removeInput = function (name, index) {
        var extra = this.round.extra;
        if (!extra) {
            return;
        }
        name = name.split("-")[0];
        extra.remove(name, index);
        if (extra.isEmpty(name)) {
            this.round.update({ extra: undefined });
        }
    };
    TTestComponent.prototype.trackByExtra = function (index, item) {
        return index;
    };
    TTestComponent.prototype.calculateSliderRange = function (name) {
        var value = this.model[name];
        var range = [value * 0.5, value * 1.5].sort(function (a, b) { return a - b; });
        this.min[name] = range[0];
        this.max[name] = range[1];
    };
    TTestComponent.prototype.modelChanged = function (changes) {
        var keys = Object.keys(changes);
        if (keys.length > 1 || keys[0] != this.model.output) {
            this.updateModelSet();
        }
    };
    TTestComponent.prototype.updateModelSet = function () {
        var _this = this;
        this.ttestService.update(this.modelSet.model).
            then(function (result) {
            _this.modelSet.update(result.model, result.data);
            _this.round.roundUpdate(result.model, false);
            // adjust min/max
            if (_this.model.sigma < _this.min.sigma) {
                _this.min.sigma = Math.floor(_this.model.sigma);
            }
            else if (_this.model.sigma > _this.max.sigma) {
                _this.max.sigma = Math.ceil(_this.model.sigma);
            }
            if (_this.model.delta < _this.min.delta) {
                _this.min.delta = Math.floor(_this.model.delta);
            }
            else if (_this.model.delta > _this.max.delta) {
                _this.max.delta = Math.ceil(_this.model.delta);
            }
            if (_this.model.n < _this.min.n) {
                _this.min.n = Math.floor(_this.model.n);
            }
            else if (_this.model.n > _this.max.n) {
                _this.max.n = Math.ceil(_this.model.n);
            }
        }, function (error) { });
    };
    return TTestComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__t_test__["a" /* TTestSet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__t_test__["a" /* TTestSet */]) === "function" && _a || Object)
], TTestComponent.prototype, "modelSet", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__plot_options__["a" /* PlotOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__plot_options__["a" /* PlotOptions */]) === "function" && _b || Object)
], TTestComponent.prototype, "plotOptions", void 0);
TTestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-t-test',
        template: __webpack_require__("../../../../../src/app/t-test/t-test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/t-test/t-test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__t_test_service__["a" /* TTestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__t_test_service__["a" /* TTestService */]) === "function" && _c || Object])
], TTestComponent);

var _a, _b, _c;
//# sourceMappingURL=t-test.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: "/ps-backend",
    stateless: true,
    baseHref: "/ps"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map