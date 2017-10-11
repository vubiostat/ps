webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/abstract-plot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractPlotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], AbstractPlotComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('plot'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], AbstractPlotComponent.prototype, "plotElement", void 0);
var _a;
//# sourceMappingURL=abstract-plot.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app {\n}\n\n#main {\n  /*min-height: 85vh;*/\n}\n\n#sidebar {\n  background-color: #e5e5e5;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  /*margin: 10px;*/\n  position: relative;\n}\n\n#sidebar .overview {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.plot-buttons {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: large;\n  z-index: 99;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.plot-buttons button {\n  padding: 0.4rem 0;\n  margin: 0.2rem 0;\n  width: 2.4rem;\n}\n\n#sidebar /deep/ a.nav-link {\n  border-color: #bbb #bbb #888;\n  background-color: #eee;\n}\n\n#sidebar /deep/ a.nav-link:hover {\n  border-color: #888;\n  background-color: #f5f5f5;\n  color: #0275d8;\n}\n\n#sidebar /deep/ a.nav-link.active {\n  border-color: #888 #888 #fff;\n  background-color: #fff;\n}\n\n#sidebar /deep/ a.nav-link.active:hover {\n  color: #464a4c;\n}\n\n#sidebar /deep/ ngb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  /*width: 100%;*/\n}\n\n#sidebar /deep/ ul.nav-tabs {\n  /*display: flex;*/\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  border-bottom: 1px solid #888;\n}\n\n#sidebar /deep/ .tab-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n#sidebar /deep/ .tab-pane {\n  /*display: flex;*/\n  /*flex-direction: column;*/\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  padding: 10px;\n  border: 1px solid #888;\n  border-top: 0;\n  overflow: auto;\n  max-height: 73vh;\n}\n\n#sidebar /deep/ .tab-pane.active {\n  background: white;\n}\n\n#footer {\n  margin: 20px 0;\n  padding: 20px;\n  text-align: center;\n}\n#footer img {\n  margin: auto;\n  display: block;\n}\n#footer div.text {\n  margin-top: 10px;\n}\n\n.block-selection * {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"container-fluid d-flex flex-column h-100\"\n  [class.block-selection]=\"blockSelection\" (mouseup)=\"mouseup()\">\n  <nav class=\"navbar d-flex flex-nowrap flex-row justify-content-between\" style=\"flex: 0 0 auto\">\n    <div class=\"navbar-brand\">\n      <img src=\"assets/ps.jpg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n      Power and Sample Size\n    </div>\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">t-test</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Survival</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Dichotomous</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Regression</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Mantel-Haenszel</a>\n      </li>\n    </ul>\n  </nav>\n\n  <div id=\"main\" class=\"row d-flex\" style=\"flex: 1 0 auto\">\n    <div class=\"col-4 d-flex flex-column justify-content-between\">\n      <div id=\"sidebar\" class=\"d-flex flex-row\" style=\"flex: auto\">\n        <div class=\"overview\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleHelp('overview')\">\n            Overview <i class=\"fa fa-question-circle\"></i>\n          </button>\n        </div>\n        <ngb-tabset #tabsetChild (tabChange)=\"onTabChange($event)\">\n          <ngb-tab title=\"Start\" id=\"start\">\n            <ng-template ngbTabContent>\n              <app-start [model]=\"newModel\"\n                (onCalculate)=\"calculate()\"\n                (onToggleHelp)=\"toggleHelp('start')\">\n              </app-start>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab *ngFor=\"let modelSet of modelSets; let i = index\"\n            title=\"Test {{i+1}}\" id=\"test-{{i+1}}\">\n            <ng-template ngbTabContent>\n              <app-t-test [model-set]=\"modelSet\"></app-t-test>\n            </ng-template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n\n      <div id=\"footer\" class=\"d-flex\">\n        <img src=\"assets/vumc.jpg\">\n        <div class=\"text\">Department of Biostatistics</div>\n      </div>\n    </div>\n    <div id=\"right-panel\" class=\"col-8\">\n      <div class=\"plot-buttons\" *ngIf=\"plotOptionsAvailable\">\n        <button class=\"btn btn-secondary\" (click)=\"togglePlotOptions()\">\n          <i class=\"fa fa-cog\"></i>\n        </button>\n        <button class=\"btn btn-secondary\" (click)=\"save()\">\n          <i class=\"fa fa-floppy-o\"></i>\n        </button>\n        <button class=\"btn btn-secondary\" (click)=\"toggleHoverBox()\">\n          <i class=\"fa\" [class.fa-cubes]=\"hoverBoxEnabled\" [class.fa-cube]=\"!hoverBoxEnabled\"></i>\n        </button>\n      </div>\n      <app-output-pane #outputPaneChild\n        [selected-model-set]=\"selectedModelSet\"\n        [hover-disabled]=\"!hoverBoxEnabled\">\n      </app-output-pane>\n    </div>\n  </div>\n  <app-draggable-dialog #helpDialog\n    [title]=\"helpTitles[helpTopic]\"\n    start-x-offset=\"33%\" start-y-offset=\"55px\"\n    (drag-start)=\"childDragStarted()\"\n    (drag-end)=\"childDragEnded()\">\n    <app-help [topic]=\"helpTopic\"></app-help>\n  </app-draggable-dialog>\n  <app-draggable-dialog #plotOptionsDialog\n    title=\"Plot options\"\n    start-x-offset=\"5%\" start-y-offset=\"55px\"\n    (drag-start)=\"childDragStarted()\"\n    (drag-end)=\"childDragEnded()\">\n    <app-plot-options [selected-model-set]=\"selectedModelSet\">\n    </app-plot-options>\n  </app-draggable-dialog>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switch__ = __webpack_require__("../../../../rxjs/add/operator/switch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__t_test_service__ = __webpack_require__("../../../../../src/app/t-test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__draggable_dialog_draggable_dialog_component__ = __webpack_require__("../../../../../src/app/draggable-dialog/draggable-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__output_pane_output_pane_component__ = __webpack_require__("../../../../../src/app/output-pane/output-pane.component.ts");
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
        this.newModel = new __WEBPACK_IMPORTED_MODULE_4__t_test__["a" /* TTest */]();
        this.modelSets = [];
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
        var model = new __WEBPACK_IMPORTED_MODULE_4__t_test__["a" /* TTest */]({
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
            var model = new __WEBPACK_IMPORTED_MODULE_4__t_test__["a" /* TTest */](result.model);
            var data = result.data;
            var modelSet = new __WEBPACK_IMPORTED_MODULE_4__t_test__["c" /* TTestSet */]();
            modelSet.add(model, data);
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
    AppComponent.prototype.onResize = function (event) {
        this.outputChild.resize();
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('plotOptionsDialog'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "plotOptionsDialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('helpDialog'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */]) === "function" && _b || Object)
], AppComponent.prototype, "helpDialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('tabsetChild'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbTabset */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbTabset */]) === "function" && _c || Object)
], AppComponent.prototype, "tabsetChild", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('outputPaneChild'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__output_pane_output_pane_component__["a" /* OutputPaneComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__output_pane_output_pane_component__["a" /* OutputPaneComponent */]) === "function" && _d || Object)
], AppComponent.prototype, "outputChild", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onResize", null);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__t_test_service__["a" /* TTestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__t_test_service__["a" /* TTestService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__t_test_service__ = __webpack_require__("../../../../../src/app/t-test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plot_options_service__ = __webpack_require__("../../../../../src/app/plot-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__palette_service__ = __webpack_require__("../../../../../src/app/palette.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__start_start_component__ = __webpack_require__("../../../../../src/app/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__range_slider_range_slider_component__ = __webpack_require__("../../../../../src/app/range-slider/range-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__t_test_t_test_component__ = __webpack_require__("../../../../../src/app/t-test/t-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__output_pane_output_pane_component__ = __webpack_require__("../../../../../src/app/output-pane/output-pane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plot_options_plot_options_component__ = __webpack_require__("../../../../../src/app/plot-options/plot-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__plot_plot_component__ = __webpack_require__("../../../../../src/app/plot/plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bottom_plot_bottom_plot_component__ = __webpack_require__("../../../../../src/app/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__serialize_plot_component__ = __webpack_require__("../../../../../src/app/serialize-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__export_plots_export_plots_component__ = __webpack_require__("../../../../../src/app/export-plots/export-plots.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__draggable_dialog_draggable_dialog_component__ = __webpack_require__("../../../../../src/app/draggable-dialog/draggable-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__round_pipe__ = __webpack_require__("../../../../../src/app/round.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ceil_pipe__ = __webpack_require__("../../../../../src/app/ceil.pipe.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__start_start_component__["a" /* StartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__range_slider_range_slider_component__["a" /* RangeSliderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__range_slider_range_slider_component__["c" /* RangeSliderLabel */],
            __WEBPACK_IMPORTED_MODULE_11__range_slider_range_slider_component__["b" /* RangeSliderHelp */],
            __WEBPACK_IMPORTED_MODULE_12__t_test_t_test_component__["a" /* TTestComponent */],
            __WEBPACK_IMPORTED_MODULE_13__output_pane_output_pane_component__["a" /* OutputPaneComponent */],
            __WEBPACK_IMPORTED_MODULE_14__help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_15__plot_options_plot_options_component__["a" /* PlotOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__plot_plot_component__["a" /* PlotComponent */],
            __WEBPACK_IMPORTED_MODULE_17__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */],
            __WEBPACK_IMPORTED_MODULE_18__serialize_plot_component__["a" /* SerializePlotComponent */],
            __WEBPACK_IMPORTED_MODULE_19__export_plots_export_plots_component__["a" /* ExportPlotsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__draggable_dialog_draggable_dialog_component__["a" /* DraggableDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_22__round_pipe__["a" /* RoundPipe */],
            __WEBPACK_IMPORTED_MODULE_23__ceil_pipe__["a" /* CeilPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__t_test_service__["a" /* TTestService */],
            __WEBPACK_IMPORTED_MODULE_8__plot_options_service__["a" /* PlotOptionsService */],
            __WEBPACK_IMPORTED_MODULE_9__palette_service__["a" /* PaletteService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* APP_BASE_HREF */], useValue: __WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].baseHref }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_19__export_plots_export_plots_component__["a" /* ExportPlotsComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bottom-plot/bottom-plot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".target, .bar {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bottom-plot/bottom-plot.component.html":
/***/ (function(module, exports) {

module.exports = "<svg #plot\n  [style.fontFamily]=\"plotOptions.fontFamily\"\n  [style.fontSize]=\"(plotOptions.fontSize * 110).toString() + '%'\"\n  [attr.class]=\"name\" [attr.width]=\"fixedWidth\" [attr.height]=\"fixedHeight\">\n\n  <rect #unit x=\"0\" y=\"0\" width=\"1em\" height=\"1em\" stroke=\"none\" fill=\"none\" />\n  <ng-template [ngIf]=\"groups && modelSet\">\n    <defs>\n      <clipPath id=\"{{name}}-plot-area\">\n        <rect x=\"0\" y=\"0\" [attr.width]=\"innerWidth\" [attr.height]=\"innerHeight\" />\n      </clipPath>\n    </defs>\n\n    <text text-anchor=\"middle\"\n      [attr.x]=\"innerWidth / 2 + margin\" [attr.y]=\"innerHeight + margin\" dy=\"2.5em\">\n      Parameter Space\n    </text>\n    <text text-anchor=\"middle\" font-weight=\"bold\"\n      [attr.x]=\"innerWidth / 2 + margin\" y=\"0\" dy=\"2em\">\n      {{title}}\n    </text>\n\n    <!-- alternate groups -->\n    <g *ngFor=\"let group of groups; let i = index; trackBy: trackByIndex\"\n      [attr.transform]=\"translate(margin, margin)\">\n\n      <path id=\"{{name}}-group-{{i}}-dist\"\n        attr.clip-path=\"url(#{{name}}-plot-area)\"\n        [attr.fill]=\"getColor(groups.length - i)\"\n        stroke=\"none\" opacity=\"0.5\" />\n\n      <path id=\"{{name}}-group-{{i}}-center\"\n        attr.clip-path=\"url(#{{name}}-plot-area)\"\n        [attr.stroke]=\"getColor(groups.length - i)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\" />\n\n      <path id=\"{{name}}-group-{{i}}-left\"\n        attr.clip-path=\"url(#{{name}}-plot-area)\"\n        [attr.stroke]=\"getColor(groups.length - i)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\" />\n\n      <path id=\"{{name}}-group-{{i}}-right\"\n        attr.clip-path=\"url(#{{name}}-plot-area)\"\n        [attr.stroke]=\"getColor(groups.length - i)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\" />\n\n      <circle id=\"{{name}}-group-{{i}}-target\"\n        attr.clip-path=\"url(#{{name}}-plot-area)\"\n        r=\"5\"\n        [attr.fill]=\"getColor(groups.length - i)\" />\n    </g>\n\n    <!-- main group -->\n    <g [attr.transform]=\"translate(margin + targetTranslateOffset, margin)\">\n      <path id=\"{{name}}-main-dist\"\n        attr.clip-path=\"url(#{{name}}-plot-area)\"\n        [attr.fill]=\"getColor(0)\"\n        stroke=\"none\" [attr.opacity]=\"targetDragging ? 0.1 : 0.5\" />\n\n      <path id=\"{{name}}-main-center\"\n        attr.clip-path=\"url(#{{name}}-plot-area)\"\n        [attr.stroke]=\"getColor(0)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        [attr.opacity]=\"targetDragging ? 0.1 : 0.9\"\n        fill=\"none\" />\n\n      <path #leftBar id=\"{{name}}-main-left\" class=\"bar\"\n        attr.clip-path=\"url(#{{name}}-plot-area)\"\n        [attr.stroke]=\"getColor(0)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 4\"\n        [attr.opacity]=\"targetDragging ? 0.1 : 0.9\"\n        [attr.transform]=\"translate(barTranslateOffset, 0)\"\n        fill=\"none\"\n        (mouseover)=\"toggleLeftBarInfo(true)\"\n        (mouseout)=\"toggleLeftBarInfo(false)\" />\n\n      <g *ngIf=\"showLeftBarInfo\"\n        [attr.transform]=\"translate(xScale(mainGroup.left + barOffset) - (4 * unitLength), yScale(0.5))\">\n        <rect x=\"0\" y=\"-3.5em\" width=\"8em\" height=\"1.5em\"\n          stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.9\" />\n        <text x=\"1em\" y=\"-2.5em\">95% CI: {{ciWidth() | round}}</text>\n      </g>\n\n      <path #rightBar id=\"{{name}}-main-right\" class=\"bar\"\n        attr.clip-path=\"url(#{{name}}-plot-area)\"\n        [attr.stroke]=\"getColor(0)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 4\"\n        [attr.opacity]=\"targetDragging ? 0.1 : 0.9\"\n        [attr.transform]=\"translate(-barTranslateOffset, 0)\"\n        fill=\"none\"\n        (mouseover)=\"toggleRightBarInfo(true)\"\n        (mouseout)=\"toggleRightBarInfo(false)\" />\n\n      <g *ngIf=\"showRightBarInfo\"\n        [attr.transform]=\"translate(xScale(mainGroup.right - barOffset) - (4 * unitLength), yScale(0.5))\">\n        <rect x=\"0\" y=\"-3.5em\" width=\"8em\" height=\"1.5em\"\n          stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.9\" />\n        <text x=\"1em\" y=\"-2.5em\">95% CI: {{ciWidth() | round}}</text>\n      </g>\n\n      <g *ngIf=\"showTargetInfo\"\n        [attr.transform]=\"translate(xScale(mainGroup.target), yScale(0.5))\">\n        <rect x=\"0\" y=\"-3.5em\" width=\"6em\" height=\"1.5em\"\n          stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.8\" />\n        <text x=\"1em\" y=\"-3.5em\">\n          <tspan dy=\"1em\" text-anchor=\"right\">&delta;:</tspan>\n          <tspan x=\"2.5em\" text-anchor=\"left\">{{(mainGroup.target + targetOffset) | round}}</tspan>\n        </text>\n      </g>\n\n      <circle #target id=\"{{name}}-main-target\" class=\"target\"\n        attr.clip-path=\"url(#{{name}}-plot-area)\"\n        r=\"5\"\n        [attr.fill]=\"getColor(0)\"\n        (mouseover)=\"toggleTargetInfo(true)\"\n        (mouseout)=\"toggleTargetInfo(false)\" />\n    </g>\n\n    <circle r=\"5\"\n      [attr.cx]=\"xScale(0)\"\n      [attr.cy]=\"yScale(0.5)\"\n      attr.clip-path=\"url(#{{name}}-plot-area)\"\n      [attr.transform]=\"translate(margin, margin)\"\n      fill=\"darkseagreen\" />\n\n    <g id=\"{{name}}-bottom-axis\" [attr.transform]=\"translate(margin, innerHeight + margin)\"></g>\n  </ng-template>\n</svg>\n"

/***/ }),

/***/ "../../../../../src/app/bottom-plot/bottom-plot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomPlotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__abstract_plot_component__ = __webpack_require__("../../../../../src/app/abstract-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plot_options_service__ = __webpack_require__("../../../../../src/app/plot-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__palette_service__ = __webpack_require__("../../../../../src/app/palette.service.ts");
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
        var _this = _super.call(this) || this;
        _this.plotOptions = plotOptions;
        _this.palette = palette;
        _this.disableDragTarget = false;
        _this.disableDragCI = false;
        _this.title = "Precision vs. Effect Size";
        _this.margin = 50;
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
    BottomPlotComponent.prototype.ngOnInit = function () {
        this.plotOptions.onChange.subscribe(this.compute.bind(this));
        this.compute();
    };
    BottomPlotComponent.prototype.ngOnChanges = function (changes) {
        if (changes.modelSet) {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            if (this.modelSet) {
                var observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].merge(this.modelSet.onCompute, this.modelSet.onChange);
                this.subscription = observable.debounceTime(10).subscribe(this.compute.bind(this));
                this.compute();
            }
        }
        else if (changes.fixedWidth || changes.fixedHeight) {
            this.compute();
        }
    };
    BottomPlotComponent.prototype.ngAfterViewChecked = function () {
        this.draw();
    };
    BottomPlotComponent.prototype.redraw = function () {
        this.compute();
    };
    BottomPlotComponent.prototype.toggleTargetInfo = function (value) {
        if (!this.targetDragging && !this.barDragging) {
            this.showTargetInfo = value;
        }
    };
    BottomPlotComponent.prototype.toggleLeftBarInfo = function (value) {
        if (!this.targetDragging && !this.barDragging) {
            this.showLeftBarInfo = value;
        }
    };
    BottomPlotComponent.prototype.toggleRightBarInfo = function (value) {
        if (!this.targetDragging && !this.barDragging) {
            this.showRightBarInfo = value;
        }
    };
    BottomPlotComponent.prototype.getColor = function (index) {
        return this.palette.getColor(index, this.plotOptions.paletteTheme);
    };
    BottomPlotComponent.prototype.trackByIndex = function (index, thing) {
        return index;
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
            this.unitLength = unitBox.width;
        }
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
        this.innerWidth = this.width - (this.margin * 2);
        this.innerHeight = this.height - (this.margin * 2);
        var ranges = this.modelSet.ranges;
        var data = this.modelSet.models.map(function (m) { return m.data.tertiary; });
        // compute scales
        this.xScale = __WEBPACK_IMPORTED_MODULE_4_d3__["scaleLinear"]().
            domain(ranges.pSpace.toArray()).
            range([0, this.innerWidth]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_4_d3__["scaleLinear"]().
            domain([0, 0.8]).
            range([0, this.innerHeight]);
        var sampDistExtent = data.reduce(function (arr, subData) {
            var extent = __WEBPACK_IMPORTED_MODULE_4_d3__["extent"](subData.data, function (d) { return d.sampDist; });
            return __WEBPACK_IMPORTED_MODULE_4_d3__["extent"](arr.concat(extent));
        }, []);
        this.yScaleSD = __WEBPACK_IMPORTED_MODULE_4_d3__["scaleLinear"]().
            domain(sampDistExtent.reverse()).
            range([0, this.yScale(0.5)]).
            clamp(true);
        this.groups = data.reverse().map(function (subData) {
            // main lines
            var leftLimit = subData.range[0];
            var leftPath = _this.getPath([
                { x: leftLimit, y: 0.35 },
                { x: leftLimit, y: 0.65 }
            ]);
            var rightLimit = subData.range[1];
            var rightPath = _this.getPath([
                { x: rightLimit, y: 0.35 },
                { x: rightLimit, y: 0.65 }
            ]);
            var centerPath = _this.getPath([
                { x: leftLimit, y: 0.5 },
                { x: rightLimit, y: 0.5 }
            ]);
            // sample distribution
            var distPath = _this.getArea(subData.data, 'pSpace', 'sampDist');
            var result = {
                leftPath: leftPath,
                centerPath: centerPath,
                rightPath: rightPath,
                distPath: distPath,
                left: leftLimit,
                target: subData.target,
                right: rightLimit
            };
            return result;
        });
        this.mainGroup = this.groups.pop();
        // reset dragging
        this.targetTranslateOffset = this.targetOffset = 0;
        this.targetWasDragging = this.targetDragging;
        this.targetDragging = false;
        this.barTranslateOffset = this.barOffset = 0;
        this.barWasDragging = this.barDragging;
        this.barDragging = false;
        this.needDraw = true;
    };
    BottomPlotComponent.prototype.draw = function () {
        var _this = this;
        if (!this.needDraw) {
            return;
        }
        var t = __WEBPACK_IMPORTED_MODULE_4_d3__["select"](this.plotElement.nativeElement).transition();
        // axes (drawn by d3)
        var xAxis = __WEBPACK_IMPORTED_MODULE_4_d3__["axisBottom"](this.xScale).ticks(6);
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
            t = __WEBPACK_IMPORTED_MODULE_4_d3__["select"](this.plotElement.nativeElement);
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
        var target = __WEBPACK_IMPORTED_MODULE_4_d3__["select"](targetElt);
        var targetDrag = __WEBPACK_IMPORTED_MODULE_4_d3__["drag"]().
            container(targetElt.parentNode.parentNode).
            on("start", this.dragTargetStart.bind(this)).
            on("drag", this.dragTarget.bind(this)).
            on("end", this.dragTargetEnd.bind(this));
        target.call(targetDrag);
        // make left bar draggable
        var leftBarElt = this.leftBarElement.nativeElement;
        var leftBar = __WEBPACK_IMPORTED_MODULE_4_d3__["select"](leftBarElt);
        var leftBarDrag = __WEBPACK_IMPORTED_MODULE_4_d3__["drag"]().
            container(leftBarElt.parentNode.parentNode).
            on("start", this.dragBarStart.bind(this, CIBar.Left)).
            on("drag", this.dragBar.bind(this, CIBar.Left)).
            on("end", this.dragBarEnd.bind(this, CIBar.Left));
        leftBar.call(leftBarDrag);
        // make right bar draggable
        var rightBarElt = this.rightBarElement.nativeElement;
        var rightBar = __WEBPACK_IMPORTED_MODULE_4_d3__["select"](rightBarElt);
        var rightBarDrag = __WEBPACK_IMPORTED_MODULE_4_d3__["drag"]().
            container(rightBarElt.parentNode.parentNode).
            on("start", this.dragBarStart.bind(this, CIBar.Right)).
            on("drag", this.dragBar.bind(this, CIBar.Right)).
            on("end", this.dragBarEnd.bind(this, CIBar.Right));
        rightBar.call(rightBarDrag);
        this.needDraw = false;
    };
    BottomPlotComponent.prototype.ciWidth = function () {
        return Math.abs((this.mainGroup.right - this.barOffset) - (this.mainGroup.left + this.barOffset));
    };
    BottomPlotComponent.prototype.getArea = function (points, xName, yName) {
        var _this = this;
        var area = __WEBPACK_IMPORTED_MODULE_4_d3__["area"]().
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
        var mouseX = __WEBPACK_IMPORTED_MODULE_4_d3__["event"].x - this.margin;
        var x = this.xScale.invert(mouseX);
        if (x >= 0 && x < 1) {
            x = 1;
            mouseX = this.xScale(1);
        }
        else if (x < 0 && x > -1) {
            x = -1;
            mouseX = this.xScale(-1);
        }
        var targetX = this.xScale(this.mainGroup.target);
        this.targetTranslateOffset = mouseX - targetX;
        this.targetOffset = x - this.mainGroup.target;
    };
    BottomPlotComponent.prototype.dragTargetEnd = function () {
        if (this.disableDragTarget)
            return;
        if (this.modelSet) {
            var modelChanges = {
                delta: this.mainGroup.target + this.targetOffset
            };
            this.modelSet.getModel(0).update(modelChanges);
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
        var mouseX = __WEBPACK_IMPORTED_MODULE_4_d3__["event"].x - this.margin;
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
        __WEBPACK_IMPORTED_MODULE_4_d3__["select"]("#" + this.name + "-main-center").attr('d', centerPath);
    };
    BottomPlotComponent.prototype.dragBarEnd = function (which) {
        if (this.disableDragCI)
            return;
        if (this.modelSet) {
            var modelChanges = {
                ci: this.ciWidth(),
                ciMode: true
            };
            this.modelSet.getModel(0).update(modelChanges);
        }
        this.showLeftBarInfo = false;
        this.showRightBarInfo = false;
    };
    return BottomPlotComponent;
}(__WEBPACK_IMPORTED_MODULE_5__abstract_plot_component__["a" /* AbstractPlotComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('model-set'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__t_test__["c" /* TTestSet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__t_test__["c" /* TTestSet */]) === "function" && _a || Object)
], BottomPlotComponent.prototype, "modelSet", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('fixed-width'),
    __metadata("design:type", Number)
], BottomPlotComponent.prototype, "fixedWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('fixed-height'),
    __metadata("design:type", Number)
], BottomPlotComponent.prototype, "fixedHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('disable-drag-target'),
    __metadata("design:type", Object)
], BottomPlotComponent.prototype, "disableDragTarget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('disable-drag-ci'),
    __metadata("design:type", Object)
], BottomPlotComponent.prototype, "disableDragCI", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('unit'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object)
], BottomPlotComponent.prototype, "unitElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('target'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object)
], BottomPlotComponent.prototype, "targetElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('leftBar'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _d || Object)
], BottomPlotComponent.prototype, "leftBarElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('rightBar'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _e || Object)
], BottomPlotComponent.prototype, "rightBarElement", void 0);
BottomPlotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-bottom-plot',
        template: __webpack_require__("../../../../../src/app/bottom-plot/bottom-plot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bottom-plot/bottom-plot.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__plot_options_service__["a" /* PlotOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__plot_options_service__["a" /* PlotOptionsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__palette_service__["a" /* PaletteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__palette_service__["a" /* PaletteService */]) === "function" && _g || Object])
], BottomPlotComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=bottom-plot.component.js.map

/***/ }),

/***/ "../../../../../src/app/ceil.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CeilPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return CeilPipe;
}());
CeilPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'ceil'
    })
], CeilPipe);

//# sourceMappingURL=ceil.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/changeable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeEmitter; });
/* harmony export (immutable) */ __webpack_exports__["b"] = Changeable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var ChangeEmitter = (function () {
    function ChangeEmitter() {
        this.changes = {};
        this.prevChanges = {};
        this.noEmit = false;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ChangeEmitter.prototype.emit = function (attribs) {
        if (attribs === void 0) { attribs = {}; }
        if (!this.noEmit && this.changes && Object.keys(this.changes).length > 0) {
            var event = Object.assign({}, attribs);
            event.changes = Object.assign({}, this.changes);
            this.prevChanges = Object.assign({}, this.changes);
            this.changes = {};
            this.onChange.emit(event);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return DraggableDialogComponent;
}());
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('drag-start'),
    __metadata("design:type", Object)
], DraggableDialogComponent.prototype, "onDragStart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('drag-end'),
    __metadata("design:type", Object)
], DraggableDialogComponent.prototype, "onDragEnd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('main'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], DraggableDialogComponent.prototype, "mainElement", void 0);
DraggableDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.modal-body {\n}\n\n.modal-body /deep/ a.nav-link {\n  border-color: #bbb #bbb #888;\n  background-color: #eee;\n}\n\n.modal-body /deep/ a.nav-link:hover {\n  border-color: #888;\n  background-color: #f5f5f5;\n  color: #0275d8;\n}\n\n.modal-body /deep/ a.nav-link.active {\n  border-color: #888 #888 #fff;\n  background-color: #fff;\n}\n\n.modal-body /deep/ a.nav-link.active:hover {\n  color: #464a4c;\n}\n\n.modal-body /deep/ ngb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.modal-body /deep/ ul.nav-tabs {\n  /*display: flex;*/\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  border-bottom: 1px solid #888;\n}\n\n.modal-body /deep/ .tab-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.modal-body /deep/ .tab-pane {\n  border: 1px solid #888;\n  border-top: 0;\n  overflow: auto;\n  max-height: 73vh;\n}\n\n.modal-body /deep/ .tab-pane.active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background: white;\n}\n\n.modal-body .left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 20%;\n  border-right: 1px solid #888;\n  padding: 10px;\n}\n\n.modal-body .right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-left: 10px;\n  overflow: auto;\n  padding: 10px;\n}\n\n.modal-footer {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/export-plots/export-plots.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Export graphs</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body grow-vert h-100\">\n  <div class=\"d-flex flex-column h-100\">\n    <ngb-tabset [destroyOnHide]=\"false\">\n      <ngb-tab [title]=\"topLeftTitle\">\n        <ng-template ngbTabContent>\n          <div class=\"left\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"\n                  [(ngModel)]=\"includeTopLeft\">\n                  Export this graph\n              </label>\n            </div>\n            <ng-template [ngIf]=\"includeTopLeft\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topLeftDropLines\">\n                    Show drop lines\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topLeftTarget\">\n                    Show target\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  Width\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topLeftWidth\">\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  Height\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topLeftHeight\">\n                </label>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"right\">\n            <app-plot #topLeftPlot name=\"top-left-export\"\n              [model-set]=\"modelSet\" [hover-disabled]=\"true\"\n              [disable-drag]=\"true\"\n              [hide-drop-lines]=\"!topLeftDropLines\"\n              [hide-target]=\"!topLeftTarget\"\n              [fixed-width]=\"topLeftWidth\" [fixed-height]=\"topLeftHeight\">\n            </app-plot>\n          </div>\n          <app-serialize-plot #topLeftSerializer\n            [plot]=\"topLeftPlot\"\n            [width]=\"topLeftWidth\" [height]=\"topLeftHeight\">\n          </app-serialize-plot>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab [title]=\"topRightTitle\">\n        <ng-template ngbTabContent>\n          <div class=\"left\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"\n                  [(ngModel)]=\"includeTopRight\">\n                  Export this graph\n              </label>\n            </div>\n            <ng-template [ngIf]=\"includeTopRight\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topRightDropLines\">\n                    Show drop lines\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\"\n                    [(ngModel)]=\"topRightTarget\">\n                    Show target\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  Width\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topRightWidth\">\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  Height\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"topRightHeight\">\n                </label>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"right\">\n            <app-plot #topRightPlot name=\"top-right-export\"\n              [model-set]=\"modelSet\" [hover-disabled]=\"true\"\n              [disable-drag]=\"true\"\n              [hide-drop-lines]=\"!topRightDropLines\"\n              [hide-target]=\"!topRightTarget\"\n              [fixed-width]=\"topRightWidth\" [fixed-height]=\"topRightHeight\">\n            </app-plot>\n          </div>\n          <app-serialize-plot #topRightSerializer\n            [plot]=\"topRightPlot\"\n            [width]=\"topRightWidth\" [height]=\"topRightHeight\">\n          </app-serialize-plot>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab [title]=\"bottomTitle\">\n        <ng-template ngbTabContent>\n          <div class=\"left\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"\n                  [(ngModel)]=\"includeBottom\">\n                  Export this graph\n              </label>\n            </div>\n            <ng-template [ngIf]=\"includeBottom\">\n              <div class=\"form-group\">\n                <label>\n                  Width\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"bottomWidth\">\n                </label>\n              </div>\n              <div class=\"form-group\">\n                <label>\n                  Height\n                  <input class=\"form-control\" type=\"number\"\n                    [(ngModel)]=\"bottomHeight\">\n                </label>\n              </div>\n            </ng-template>\n          </div>\n          <div class=\"right\">\n            <app-bottom-plot #bottomPlot name=\"bottom-export\"\n              [model-set]=\"modelSet\"\n              [disable-drag-target]=\"true\" [disable-drag-ci]=\"true\"\n              [fixed-width]=\"bottomWidth\" [fixed-height]=\"bottomHeight\">\n            </app-bottom-plot>\n          </div>\n          <app-serialize-plot #bottomSerializer\n            [plot]=\"bottomPlot\"\n            [width]=\"bottomWidth\" [height]=\"bottomHeight\">\n          </app-serialize-plot>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <div class=\"d-flex-inline flex-row\">\n    <div class=\"form-inline\">\n      <label for=\"export-image-format\" class=\"mr-sm-2\">Image format:</label>\n      <select id=\"export-image-format\" class=\"form-control\" [(ngModel)]=\"imageFormat\">\n        <option value=\"svg\">SVG</option>\n        <option value=\"png\">PNG</option>\n      </select>\n    </div>\n  </div>\n  <p>\n    The graphs you have chosen will be packaged in a ZIP file.\n    <a #downloadLink style=\"display: none\"></a>\n  </p>\n  <div class=\"d-flex flex-row align-items-center\">\n    <button type=\"button\" class=\"btn btn-secondary m-1\" (click)=\"save()\"\n      [disabled]=\"!includeTopLeft && !includeTopRight && !includeBottom\">\n      <i class=\"fa fa-floppy-o\"></i> Save\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary m-1\" (click)=\"cancel()\">\n      <i class=\"fa fa-circle-x\"></i> Close\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/export-plots/export-plots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportPlotsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jszip__ = __webpack_require__("../../../../jszip/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jszip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plot_plot_component__ = __webpack_require__("../../../../../src/app/plot/plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bottom_plot_bottom_plot_component__ = __webpack_require__("../../../../../src/app/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__serialize_plot_component__ = __webpack_require__("../../../../../src/app/serialize-plot.component.ts");
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
        this.topLeftWidth = 640;
        this.topLeftHeight = 480;
        this.topLeftDropLines = true;
        this.topLeftTarget = true;
        this.includeTopRight = true;
        this.topRightWidth = 640;
        this.topRightHeight = 480;
        this.topRightDropLines = true;
        this.topRightTarget = true;
        this.includeBottom = true;
        this.bottomTitle = "Precision vs. Effect Size";
        this.bottomWidth = 640;
        this.bottomHeight = 200;
        this.imageFormat = "svg";
    }
    ExportPlotsComponent.prototype.ngOnInit = function () {
        switch (this.modelSet.getModel(0).output) {
            case "n":
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
        serializers.forEach(function (serializer, i) {
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
                }, function (err) { return console.error(err); });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('model-set'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__t_test__["c" /* TTestSet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__t_test__["c" /* TTestSet */]) === "function" && _a || Object)
], ExportPlotsComponent.prototype, "modelSet", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('topLeftPlot'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__plot_plot_component__["a" /* PlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__plot_plot_component__["a" /* PlotComponent */]) === "function" && _b || Object)
], ExportPlotsComponent.prototype, "topLeftPlot", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('topRightPlot'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__plot_plot_component__["a" /* PlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__plot_plot_component__["a" /* PlotComponent */]) === "function" && _c || Object)
], ExportPlotsComponent.prototype, "topRightPlot", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('bottomPlot'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */]) === "function" && _d || Object)
], ExportPlotsComponent.prototype, "bottomPlot", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('topLeftSerializer'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__serialize_plot_component__["a" /* SerializePlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__serialize_plot_component__["a" /* SerializePlotComponent */]) === "function" && _e || Object)
], ExportPlotsComponent.prototype, "topLeftSerializer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('topRightSerializer'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__serialize_plot_component__["a" /* SerializePlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__serialize_plot_component__["a" /* SerializePlotComponent */]) === "function" && _f || Object)
], ExportPlotsComponent.prototype, "topRightSerializer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('bottomSerializer'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__serialize_plot_component__["a" /* SerializePlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__serialize_plot_component__["a" /* SerializePlotComponent */]) === "function" && _g || Object)
], ExportPlotsComponent.prototype, "bottomSerializer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('downloadLink'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _h || Object)
], ExportPlotsComponent.prototype, "downloadLink", void 0);
ExportPlotsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-export-plots',
        template: __webpack_require__("../../../../../src/app/export-plots/export-plots.component.html"),
        styles: [__webpack_require__("../../../../../src/app/export-plots/export-plots.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _j || Object])
], ExportPlotsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], HelpComponent.prototype, "topic", void 0);
HelpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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

module.exports = "<div class=\"plot\" [class.without-text]=\"!showText\">\n  <app-plot #topLeft name=\"top-left\"\n    [model-set]=\"modelSet\"\n    [hover-disabled]=\"hoverDisabled\">\n  </app-plot>\n  <app-plot #topRight name=\"top-right\"\n    [model-set]=\"modelSet\"\n    [hover-disabled]=\"hoverDisabled\">\n  </app-plot>\n  <app-bottom-plot #bottom name=\"bottom\"\n    [model-set]=\"modelSet\"\n    [disable-drag-target]=\"model?.output == 'delta'\"\n    [disable-drag-ci]=\"model?.output == 'n'\">\n  </app-bottom-plot>\n  <div class=\"show-text\" *ngIf=\"modelSet && !showText\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleText(true)\">\n      <i class=\"fa fa-envelope-open-o\" aria-hidden=\"true\"></i>\n      Interpretation\n    </button>\n  </div>\n</div>\n<div class=\"output-text\" *ngIf=\"modelSet && showText\">\n  <div *ngIf=\"showText\" class=\"hide-text\">\n    <i class=\"fa fa-times-circle\" (click)=\"toggleText(false)\"></i>\n  </div>\n  <ng-template [ngIf]=\"model.output == 'n'\">\n    We are planning a study of a continuous response variable from matched\n    pairs of study subjects. Prior data indicate that the difference in the\n    response of matched pairs is normally distributed with standard deviation\n    {{round(model.sigma)}}. If the true difference in the mean response of\n    matched pairs is {{round(model.delta)}}, we will need to study\n    {{ceil(model.n)}} pairs of subjects to be able to reject the null\n    hypothesis that this response difference is zero with probability (power)\n    {{round(model.power)}}. The Type I error probability associated with this\n    test of this null hypothesis is {{round(model.alpha)}}.\n  </ng-template>\n  <ng-template [ngIf]=\"model.output == 'power'\">\n    We are planning a study with {{ceil(model.n)}} pairs of subjects. Prior\n    data indicate that the difference in the response of matched pairs is\n    normally distributed with standard deviation {{round(model.sigma)}}. If\n    the true difference in the mean response of matched pairs is\n    {{round(model.delta)}}, we will be able to reject the null hypothesis\n    that this response difference is zero with probability (power)\n    {{round(model.power)}}. The Type I error probability associated with this\n    test of this null hypothesis is {{round(model.alpha)}}.\n  </ng-template>\n  <ng-template [ngIf]=\"model.output == 'delta'\">\n    We are planning a study with {{ceil(model.n)}} pairs of subjects. Prior\n    data indicate that the difference in the response of matched pairs is\n    normally distributed with standard deviation {{round(model.sigma)}}. We\n    will be able to detect a true difference in the mean response of matched\n    pairs of -{{round(model.delta)}} or {{round(model.delta)}} with\n    probability (power) {{round(model.power)}}. The Type I error probability\n    associated with this test of the null hypothesis that this response\n    difference is zero is {{round(model.alpha)}}.\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/output-pane/output-pane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputPaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__ = __webpack_require__("../../../../../src/app/plot/plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bottom_plot_bottom_plot_component__ = __webpack_require__("../../../../../src/app/bottom-plot/bottom-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__export_plots_export_plots_component__ = __webpack_require__("../../../../../src/app/export-plots/export-plots.component.ts");
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
            if (_this.modelSet) {
                _this.model = modelSet.getModel(0);
            }
            else {
                _this.model = undefined;
            }
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
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__export_plots_export_plots_component__["a" /* ExportPlotsComponent */], { windowClass: 'export-plots' });
        modalRef.componentInstance.modelSet = this.modelSet;
    };
    OutputPaneComponent.prototype.round = function (n) {
        return Math.round(n * 100) / 100;
    };
    OutputPaneComponent.prototype.ceil = function (n) {
        return Math.ceil(n);
    };
    OutputPaneComponent.prototype.resize = function () {
        this.topLeftPlot.redraw();
        this.topRightPlot.redraw();
        this.bottomPlot.redraw();
    };
    return OutputPaneComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('selected-model-set'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], OutputPaneComponent.prototype, "selectedModelSet", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hover-disabled'),
    __metadata("design:type", Object)
], OutputPaneComponent.prototype, "hoverDisabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('topLeft'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__["a" /* PlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__["a" /* PlotComponent */]) === "function" && _b || Object)
], OutputPaneComponent.prototype, "topLeftPlot", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('topRight'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__["a" /* PlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__["a" /* PlotComponent */]) === "function" && _c || Object)
], OutputPaneComponent.prototype, "topRightPlot", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('bottom'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */]) === "function" && _d || Object)
], OutputPaneComponent.prototype, "bottomPlot", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('saveDialog'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */]) === "function" && _e || Object)
], OutputPaneComponent.prototype, "saveDialog", void 0);
OutputPaneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-output-pane',
        template: __webpack_require__("../../../../../src/app/output-pane/output-pane.component.html"),
        styles: [__webpack_require__("../../../../../src/app/output-pane/output-pane.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _f || Object])
], OutputPaneComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=output-pane.component.js.map

/***/ }),

/***/ "../../../../../src/app/palette.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaletteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], PaletteService);

//# sourceMappingURL=palette.service.js.map

/***/ }),

/***/ "../../../../../src/app/plot-options.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlotOptionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__changeable__ = __webpack_require__("../../../../../src/app/changeable.ts");
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


var PlotOptionsService = (function (_super) {
    __extends(PlotOptionsService, _super);
    function PlotOptionsService() {
        var _this = _super.call(this) || this;
        _this.setDefaults(false);
        return _this;
    }
    PlotOptionsService.prototype.setDefaults = function (emit) {
        if (emit === void 0) { emit = true; }
        this.update({
            fontFamily: "",
            fontSize: 1,
            axisFontSize: 1,
            lineWidth: 1,
            axisLineWidth: 1,
            paletteTheme: "plasma",
            lineStyle: "solid"
        }, emit);
    };
    PlotOptionsService.prototype.attributes = function () {
        return ({
            height: this.height,
            width: this.width,
            fontFamily: this.fontFamily,
            axisFontSize: this.axisFontSize,
            fontSize: this.fontSize,
            lineWidth: this.lineWidth,
            axisLineWidth: this.axisLineWidth,
            paletteTheme: this.paletteTheme,
            lineStyle: this.lineStyle
        });
    };
    PlotOptionsService.prototype.update = function (attribs, emit) {
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
        if ('paletteTheme' in attribs) {
            this.paletteTheme = attribs.paletteTheme;
        }
        if ('lineStyle' in attribs) {
            this.lineStyle = attribs.lineStyle;
        }
        this.noEmit = false;
        if (emit) {
            this.emit();
        }
        else {
            this.changes = {};
        }
    };
    PlotOptionsService.prototype.dashArray = function () {
        switch (this.lineStyle) {
            case "solid":
                return "";
            case "dashed":
                return "5,5";
            case "dotted":
                return "1,5";
        }
    };
    PlotOptionsService.prototype.lineCap = function () {
        if (this.lineStyle == "dotted") {
            return "round";
        }
        return "";
    };
    return PlotOptionsService;
}(__WEBPACK_IMPORTED_MODULE_1__changeable__["a" /* ChangeEmitter */]));
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], PlotOptionsService.prototype, "height", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], PlotOptionsService.prototype, "width", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__changeable__["b" /* Changeable */],
    __metadata("design:type", String)
], PlotOptionsService.prototype, "fontFamily", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], PlotOptionsService.prototype, "fontSize", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], PlotOptionsService.prototype, "axisFontSize", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], PlotOptionsService.prototype, "lineWidth", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__changeable__["b" /* Changeable */],
    __metadata("design:type", Number)
], PlotOptionsService.prototype, "axisLineWidth", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__changeable__["b" /* Changeable */],
    __metadata("design:type", String)
], PlotOptionsService.prototype, "paletteTheme", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__changeable__["b" /* Changeable */],
    __metadata("design:type", String)
], PlotOptionsService.prototype, "lineStyle", void 0);
PlotOptionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PlotOptionsService);

//# sourceMappingURL=plot-options.service.js.map

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

module.exports = "<div *ngIf=\"plotOptions && modelSet\" class=\"content\">\n  <fieldset>\n    <legend>Global</legend>\n    <div class=\"form-group\">\n      <label for=\"plot-font-family\">Font family</label>\n      <select id=\"plot-font-family\" class=\"form-control\"\n        [(ngModel)]=\"plotOptions.fontFamily\">\n        <option value=\"\">Default</option>\n        <option value=\"serif\">Serif</option>\n        <option value=\"sans\">Sans-serif</option>\n        <option value=\"monospace\">Monospace</option>\n        <option>Bungee Shade</option>\n        <option>Sancreek</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"plot-palette-theme\">Palette</label>\n      <select id=\"plot-palette-theme\" class=\"form-control\"\n        [(ngModel)]=\"plotOptions.paletteTheme\">\n        <option value=\"plasma\">Plasma</option>\n        <option value=\"viridis\">Viridis</option>\n        <option value=\"magma\">Magma</option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-font-size\">Font size: {{plotOptions.fontSize}}</label>\n        <div class=\"input-group\">\n          <input id=\"plot-font-size\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [(ngModel)]=\"plotOptions.fontSize\" />\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <label for=\"plot-axis-font-size\">Axis font size: {{plotOptions.axisFontSize}}</label>\n        <div class=\"input-group\">\n          <input id=\"plot-axis-font-size\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [(ngModel)]=\"plotOptions.axisFontSize\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <label for=\"plot-line-width\">Line width: {{plotOptions.lineWidth}}</label>\n        <div class=\"input-group\">\n          <input id=\"plot-line-width\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [(ngModel)]=\"plotOptions.lineWidth\" />\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <label for=\"plot-axis-line-width\">Axis line width: {{plotOptions.axisLineWidth}}</label>\n        <div class=\"input-group\">\n          <input id=\"plot-axis-line-width\" class=\"form-control\"\n            type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n            [(ngModel)]=\"plotOptions.axisLineWidth\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"plot-line-style\">Line style</label>\n      <select id=\"plot-line-style\" class=\"form-control\"\n        [(ngModel)]=\"plotOptions.lineStyle\">\n        <option value=\"solid\">Solid</option>\n        <option value=\"dashed\">Dashed</option>\n        <option value=\"dotted\">Dotted</option>\n      </select>\n    </div>\n  </fieldset>\n  <fieldset>\n    <legend *ngIf=\"model.output == 'n'\">Sample Size</legend>\n    <legend *ngIf=\"model.output == 'power'\">Power</legend>\n    <legend *ngIf=\"model.output == 'delta'\">Detectable Alternative</legend>\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <label for=\"plot-top-y-min\">Minimum</label>\n        <div class=\"input-group\">\n          <ng-template [ngIf]=\"model.output == 'n'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.n.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.n.min\" />\n          </ng-template>\n          <ng-template [ngIf]=\"model.output == 'power'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.power.max - 0.01)\"\n              [(ngModel)]=\"modelSet.ranges.power.min\" />\n          </ng-template>\n          <ng-template [ngIf]=\"model.output == 'delta'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.delta.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.delta.min\" />\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"col-sm\">\n        <label for=\"plot-top-y-max\">Maximum</label>\n        <div class=\"input-group\">\n          <ng-template [ngIf]=\"model.output == 'n'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.n.min + 1)\"\n              [(ngModel)]=\"modelSet.ranges.n.max\" />\n          </ng-template>\n          <ng-template [ngIf]=\"model.output == 'power'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.power.min + 0.01)\"\n              [(ngModel)]=\"modelSet.ranges.power.max\" />\n          </ng-template>\n          <ng-template [ngIf]=\"model.output == 'delta'\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.delta.min + 1)\"\n              [(ngModel)]=\"modelSet.ranges.delta.max\" />\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <fieldset>\n    <ng-template [ngIf]=\"model.output == 'n'\">\n      <legend>Sample Size vs. Power</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.power.max - 0.01)\"\n              [(ngModel)]=\"modelSet.ranges.power.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.power.min + 0.01)\"\n              [(ngModel)]=\"modelSet.ranges.power.max\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"model.output == 'power'\">\n      <legend>Power vs. Sample Size</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.n.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.n.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.n.min + 1)\"\n              [(ngModel)]=\"modelSet.ranges.n.max\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"model.output == 'delta'\">\n      <legend>Detectable Alternative vs. Sample Size</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.n.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.n.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.n.min + 1)\"\n              [(ngModel)]=\"modelSet.ranges.n.max\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </fieldset>\n  <fieldset>\n    <ng-template [ngIf]=\"model.output == 'n'\">\n      <legend>Sample Size vs. Detectable Alternative</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-right-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.delta.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.delta.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-right-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.delta.min - 1)\"\n              [(ngModel)]=\"modelSet.ranges.delta.max\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"model.output == 'power'\">\n      <legend>Power vs. Detectable Alternative</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-right-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.delta.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.delta.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-right-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.delta.min - 1)\"\n              [(ngModel)]=\"modelSet.ranges.delta.max\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template [ngIf]=\"model.output == 'delta'\">\n      <legend>Detectable Alternative vs. Power</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.power.max - 0.01)\"\n              [(ngModel)]=\"modelSet.ranges.power.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-left-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.power.min + 0.01)\"\n              [(ngModel)]=\"modelSet.ranges.power.max\" />\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </fieldset>\n  <fieldset>\n    <legend>Precision vs. Parameter Space</legend>\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <label for=\"plot-bottom-x-min\">X minimum</label>\n        <div class=\"input-group\">\n          <input class=\"form-control\"\n            type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.pSpace.max - 1)\"\n            [(ngModel)]=\"modelSet.ranges.pSpace.min\" />\n        </div>\n      </div>\n      <div class=\"col-sm\">\n        <label for=\"plot-bottom-x-max\">X maximum</label>\n        <div class=\"input-group\">\n          <input class=\"form-control\"\n            type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.pSpace.min + 1)\"\n            [(ngModel)]=\"modelSet.ranges.pSpace.max\" />\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">\n    Reset all settings\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/plot-options/plot-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlotOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plot_options_service__ = __webpack_require__("../../../../../src/app/plot-options.service.ts");
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
                _this.model = modelSet.getModel(0);
                _this.setDefaultRanges();
            }
        });
    };
    PlotOptionsComponent.prototype.reset = function () {
        this.plotOptions.setDefaults();
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('selected-model-set'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], PlotOptionsComponent.prototype, "selectedModelSet", void 0);
PlotOptionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-plot-options',
        template: __webpack_require__("../../../../../src/app/plot-options/plot-options.component.html"),
        styles: [__webpack_require__("../../../../../src/app/plot-options/plot-options.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__plot_options_service__["a" /* PlotOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__plot_options_service__["a" /* PlotOptionsService */]) === "function" && _b || Object])
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

module.exports = "<svg #plot\n  [style.fontFamily]=\"plotOptions.fontFamily == '' ? null : plotOptions.fontFamily\"\n  [style.fontSize]=\"(plotOptions.fontSize * 110).toString() + '%'\"\n  [attr.class]=\"name\" [attr.width]=\"fixedWidth\" [attr.height]=\"fixedHeight\">\n\n  <rect #unit x=\"0\" y=\"0\" width=\"1em\" height=\"1em\" stroke=\"none\" fill=\"none\" />\n  <ng-template [ngIf]=\"x && y && modelSet\">\n    <defs>\n      <clipPath id=\"{{name}}-plot-area\">\n        <rect x=\"0\" [attr.y]=\"-plotOptions.lineWidth * 3\"\n          [attr.width]=\"innerWidth\"\n          [attr.height]=\"innerHeight + plotOptions.lineWidth * 3\" />\n      </clipPath>\n      <clipPath id=\"{{name}}-target-area\">\n        <rect x=\"-5\" [attr.y]=\"-5\"\n          [attr.width]=\"innerWidth + 10\"\n          [attr.height]=\"innerHeight + 10\" />\n      </clipPath>\n    </defs>\n\n    <text text-anchor=\"middle\"\n      [attr.x]=\"innerWidth / 2 + margin\" [attr.y]=\"innerHeight + margin\" dy=\"2.5em\">\n      {{x.title}}\n    </text>\n    <text text-anchor=\"middle\"\n      [attr.dx]=\"-(innerHeight / 2 + margin)\" dy=\"1em\"\n      transform=\"rotate(-90)\">\n      {{y.title}}\n    </text>\n    <text text-anchor=\"middle\" font-weight=\"bold\"\n      [attr.x]=\"innerWidth / 2 + margin\" y=\"0\" dy=\"2em\">\n      {{title}}\n    </text>\n\n    <g *ngFor=\"let path of paths; index as i; trackBy: trackPathBy\"\n      [attr.transform]=\"translate(margin, margin)\">\n      <path\n        id=\"{{name}}-path-{{i}}\"\n        attr.clip-path=\"url(#{{name}}-plot-area)\"\n        [attr.stroke]=\"palette.getColor(paths.length - 1 - i, plotOptions.paletteTheme)\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        [attr.stroke-dasharray]=\"plotOptions.dashArray()\"\n        [attr.stroke-linecap]=\"plotOptions.lineCap()\"\n        [attr.opacity]=\"(paths.length - 1) == i ? 1 : 0.7\"\n        fill=\"none\" />\n    </g>\n\n    <ng-template [ngIf]=\"!hideDropLines\">\n      <g *ngFor=\"let path of dropPaths; index as i; trackBy: trackPathBy\"\n        [attr.transform]=\"translate(margin, margin)\">\n        <path id=\"{{name}}-drop-{{i}}\"\n          attr.clip-path=\"url(#{{name}}-plot-area)\"\n          stroke=\"red\"\n          [attr.stroke-width]=\"plotOptions.lineWidth * 3 / 2\"\n          stroke-dasharray=\"5, 5\"\n          fill=\"none\" />\n      </g>\n    </ng-template>\n\n    <g id=\"{{name}}-x-axis\" [attr.transform]=\"translate(margin, innerHeight + margin)\"></g>\n    <g id=\"{{name}}-y-axis\" [attr.transform]=\"translate(margin, margin)\"></g>\n\n    <g *ngIf=\"showHoverInfo\"\n      [attr.transform]=\"translate(margin + hoverX, margin + hoverY)\">\n      <circle r=\"4\" fill=\"none\" stroke=\"blue\" />\n      <rect x=\"-3.5em\" [attr.y]=\"hoverInfoY()\" width=\"8em\" height=\"2.5em\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.8\" />\n      <text x=\"-2.5em\" [attr.y]=\"hoverInfoY()\">\n        <tspan dy=\"1em\" text-anchor=\"right\">{{x.sym}}:</tspan>\n        <tspan x=\"0em\" text-anchor=\"left\">{{hoverPoint.x}}</tspan>\n        <tspan x=\"-2.5em\" dy=\"1em\" text-anchor=\"right\">{{y.sym}}:</tspan>\n        <tspan x=\"0em\" text-anchor=\"left\">{{hoverPoint.y}}</tspan>\n      </text>\n    </g>\n\n    <ng-template [ngIf]=\"!hideTarget\">\n      <rect [attr.transform]=\"translate(margin, margin)\"\n        [attr.width]=\"innerWidth\" [attr.height]=\"innerHeight\"\n        fill=\"none\" pointer-events=\"all\"\n        (mouseout)=\"toggleHoverInfo(false)\"\n        (mousemove)=\"hover($event)\" />\n\n      <g *ngIf=\"showTargetInfo\"\n        [attr.transform]=\"translate(margin + xScale(targetPoint.x), margin + yScale(targetPoint.y))\">\n        <rect x=\"0\" y=\"-3.5em\" width=\"8em\" height=\"2.5em\"\n          stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.8\" />\n        <text x=\"1em\" y=\"-3.5em\">\n          <tspan dy=\"1em\" text-anchor=\"right\">{{x.sym}}:</tspan>\n          <tspan x=\"3.5em\" text-anchor=\"left\">{{targetPoint.x}}</tspan>\n          <tspan x=\"1em\" dy=\"1em\" text-anchor=\"right\">{{y.sym}}:</tspan>\n          <tspan x=\"3.5em\" text-anchor=\"left\">{{targetPoint.y}}</tspan>\n        </text>\n      </g>\n\n      <circle #target class=\"target\" r=\"5\"\n        [attr.transform]=\"translate(margin, margin)\"\n        attr.clip-path=\"url(#{{name}}-target-area)\"\n        fill=\"red\"\n        (mouseover)=\"toggleTargetInfo(true)\"\n        (mouseout)=\"toggleTargetInfo(false)\" />\n    </ng-template>\n  </ng-template>\n</svg>\n"

/***/ }),

/***/ "../../../../../src/app/plot/plot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__ = __webpack_require__("../../../../../src/app/abstract-plot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plot_options_service__ = __webpack_require__("../../../../../src/app/plot-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__palette_service__ = __webpack_require__("../../../../../src/app/palette.service.ts");
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
    function PlotComponent(plotOptions, palette) {
        var _this = _super.call(this) || this;
        _this.plotOptions = plotOptions;
        _this.palette = palette;
        _this.hoverDisabled = false;
        _this.drawOnInit = true;
        _this.hideDropLines = false;
        _this.hideTarget = false;
        _this.disableDrag = false;
        _this.margin = 50;
        _this.dropPaths = [];
        _this.targetDragging = false;
        _this.showTargetInfo = false;
        _this.showHoverInfo = false;
        _this.needDraw = false;
        _this.initialized = false;
        return _this;
    }
    PlotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.plotOptions.onChange.subscribe(function () { _this.compute(); });
        if (this.drawOnInit) {
            this.compute();
        }
        this.initialized = true;
    };
    PlotComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.modelSet) {
            // model set changed
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            if (this.modelSet) {
                var callback = function () { _this.compute(); };
                this.subscription = this.modelSet.onCompute.subscribe(callback);
                this.subscription.add(this.modelSet.onChange.subscribe(callback));
                if (this.initialized) {
                    this.compute();
                }
            }
        }
        else if (changes.fixedWidth || changes.fixedHeight) {
            if (this.initialized) {
                this.compute();
            }
        }
    };
    PlotComponent.prototype.ngAfterViewChecked = function () {
        this.draw();
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
    PlotComponent.prototype.trackPathBy = function (index, path) {
        return index;
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
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.plotElement.nativeElement);
        this.newTargetPoint = { x: data[this.x.name], y: data[this.y.name] };
        svg.select("circle.target").
            attr("cx", this.xScale(this.newTargetPoint.x)).
            attr("cy", this.yScale(this.newTargetPoint.y));
        this.newDropPaths = this.getDropPaths();
        svg.select("#" + this.name + "-drop-0").attr("d", this.newDropPaths[0]);
        svg.select("#" + this.name + "-drop-1").attr("d", this.newDropPaths[1]);
    };
    PlotComponent.prototype.dragTargetEnd = function () {
        this.targetDragging = false;
        this.showTargetInfo = false;
        if (this.modelSet && this.x.name) {
            var model = this.modelSet.getModel(0);
            model.update((_a = {},
                _a[model.output] = this.newTargetPoint.y,
                _a[this.x.name] = this.newTargetPoint.x,
                _a));
        }
        var _a;
    };
    PlotComponent.prototype.compute = function () {
        var _this = this;
        if (!this.modelSet) {
            return;
        }
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
        this.innerWidth = this.width - (this.margin * 2);
        this.innerHeight = this.height - (this.margin * 2);
        // setup
        this.lastX = this.x;
        this.lastY = this.y;
        var model = this.modelSet.getModel(0);
        var ranges = this.modelSet.ranges;
        var plotData;
        switch (model.output) {
            case "n":
                if (this.name == "top-left" || this.name == "top-left-export") {
                    this.x = {
                        name: "power", range: ranges.power, target: model.power,
                        title: "Power", sym: "1-β"
                    };
                }
                else if (this.name == "top-right" || this.name == "top-right-export") {
                    this.x = {
                        name: "delta", range: ranges.delta, target: model.delta,
                        title: "Detectable Alternative", sym: "δ"
                    };
                }
                this.y = {
                    name: "n", range: ranges.n, target: model.n,
                    title: "Sample Size", sym: "n"
                };
                plotData = this.modelSet.models.map(function (m) { return m.data.primary.data; });
                break;
            case "power":
                if (this.name == "top-left" || this.name == "top-left-export") {
                    this.x = {
                        name: "n", range: ranges.n, target: model.n,
                        title: "Sample Size", sym: "n"
                    };
                    this.y = {
                        name: "power", range: ranges.power, target: model.power,
                        title: "Power", sym: "1-β"
                    };
                    plotData = this.modelSet.models.map(function (m) { return m.data.primary.data; });
                }
                else if (this.name == "top-right" || this.name == "top-right-export") {
                    this.x = {
                        name: "delta", range: ranges.delta, target: model.delta,
                        title: "Detectable Alternative", sym: "δ"
                    };
                    this.y = {
                        name: "power", range: ranges.power, target: model.power,
                        title: "Power", sym: "1-β"
                    };
                    plotData = this.modelSet.models.map(function (m) { return m.data.secondary.data; });
                }
                break;
            case "delta":
                if (this.name == "top-left" || this.name == "top-left-export") {
                    this.x = {
                        name: "n", range: ranges.n, target: model.n,
                        title: "Sample Size", sym: "n"
                    };
                }
                else if (this.name == "top-right" || this.name == "top-right-export") {
                    this.x = {
                        name: "power", range: ranges.power, target: model.power,
                        title: "Power", sym: "1-β"
                    };
                }
                this.y = {
                    name: "delta", range: ranges.delta, target: model.delta,
                    title: "Detectable Alternative", sym: "δ"
                };
                plotData = this.modelSet.models.map(function (m) { return m.data.primary.data; });
                break;
        }
        if (!this.x || !this.y) {
            console.log("bad:", this.x, this.y);
            return;
        }
        this.title = this.y.title + " vs. " + this.x.title;
        this.targetPoint = { x: this.x.target, y: this.y.target };
        this.newTargetPoint = undefined;
        this.mainData = plotData[0].slice();
        this.mainData.sort(function (a, b) { return a[_this.x.name] - b[_this.x.name]; });
        // margin
        var unitBox = this.unitElement.nativeElement.getBBox();
        if (unitBox && unitBox.width) {
            this.margin = unitBox.width * 2 + (20 * this.plotOptions.axisFontSize);
        }
        // scales
        this.xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().
            domain(this.x.range.toArray()).
            range([0, this.innerWidth]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().
            domain(this.y.range.toArray().reverse()).
            range([0, this.innerHeight]);
        // paths
        plotData.reverse(); // plot lines in reverse for proper z-index
        this.paths = plotData.map(function (d) { return _this.getPath(d, _this.x.name, _this.y.name); });
        // drop paths
        this.dropPaths = this.getDropPaths();
        // target hover ranges
        var xTargetPos = this.xScale(this.targetPoint.x);
        this.xTargetRange = [xTargetPos - 5, xTargetPos + 5];
        var yTargetPos = this.yScale(this.targetPoint.y);
        this.yTargetRange = [yTargetPos - 5, yTargetPos + 5];
        this.xBisector = __WEBPACK_IMPORTED_MODULE_1_d3__["bisector"](function (point) { return point[_this.x.name]; }).left;
        this.needDraw = true;
    };
    PlotComponent.prototype.getDropPaths = function () {
        var _this = this;
        var point = this.newTargetPoint || this.targetPoint;
        var data = [
            [
                { x: this.xScale.domain()[0], y: point.y },
                { x: point.x, y: point.y }
            ],
            [
                { x: point.x, y: this.yScale.domain()[1] },
                { x: point.x, y: point.y }
            ],
        ];
        return data.map(function (subData) { return _this.getPath(subData, 'x', 'y'); });
    };
    PlotComponent.prototype.draw = function () {
        if (!this.needDraw) {
            return;
        }
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.plotElement.nativeElement);
        var t = svg.transition();
        // axes (drawn by d3)
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](this.xScale).ticks(6);
        t.select("#" + this.name + "-x-axis").
            call(xAxis).
            attr("font-size", 15 * this.plotOptions.axisFontSize).
            attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](this.yScale).ticks(6);
        t.select("#" + this.name + "-y-axis").
            call(yAxis).
            attr("font-size", 15 * this.plotOptions.axisFontSize).
            attr("stroke-width", this.plotOptions.axisLineWidth * 1.5);
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
        for (var i = 0, ilen = this.dropPaths.length; i < ilen; i++) {
            t.select("#" + this.name + "-drop-" + i).attr("d", this.dropPaths[i]);
        }
        // target
        t.select('circle.target').
            attr("cx", this.xScale(this.targetPoint.x)).
            attr("cy", this.yScale(this.targetPoint.y));
        // make target point draggable
        if (!this.disableDrag) {
            var target = __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this.targetElement.nativeElement);
            var drag = __WEBPACK_IMPORTED_MODULE_1_d3__["drag"]().
                on("start", this.dragTargetStart.bind(this)).
                on("drag", this.dragTarget.bind(this)).
                on("end", this.dragTargetEnd.bind(this));
            target.call(drag);
        }
        this.needDraw = false;
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
                return __WEBPACK_IMPORTED_MODULE_1_d3__["interpolate"]([p0.x, p0.y], [p1.x, p1.y]);
            });
            return function (t) {
                return t < 1 ? "M" + points.map(function (p) { return p(t); }).join("L") : d1;
            };
        };
    };
    return PlotComponent;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_plot_component__["a" /* AbstractPlotComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('model-set'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__t_test__["c" /* TTestSet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__t_test__["c" /* TTestSet */]) === "function" && _a || Object)
], PlotComponent.prototype, "modelSet", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hover-disabled'),
    __metadata("design:type", Object)
], PlotComponent.prototype, "hoverDisabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('draw-on-init'),
    __metadata("design:type", Object)
], PlotComponent.prototype, "drawOnInit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hide-drop-lines'),
    __metadata("design:type", Object)
], PlotComponent.prototype, "hideDropLines", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hide-target'),
    __metadata("design:type", Object)
], PlotComponent.prototype, "hideTarget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('fixed-width'),
    __metadata("design:type", Number)
], PlotComponent.prototype, "fixedWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('fixed-height'),
    __metadata("design:type", Number)
], PlotComponent.prototype, "fixedHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('disable-drag'),
    __metadata("design:type", Object)
], PlotComponent.prototype, "disableDrag", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('plot'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object)
], PlotComponent.prototype, "plotElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('unit'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object)
], PlotComponent.prototype, "unitElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('target'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _d || Object)
], PlotComponent.prototype, "targetElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('drop1'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _e || Object)
], PlotComponent.prototype, "drop1Element", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('drop2'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _f || Object)
], PlotComponent.prototype, "drop2Element", void 0);
PlotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-plot',
        template: __webpack_require__("../../../../../src/app/plot/plot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/plot/plot.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__plot_options_service__["a" /* PlotOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__plot_options_service__["a" /* PlotOptionsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__palette_service__["a" /* PaletteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__palette_service__["a" /* PaletteService */]) === "function" && _h || Object])
], PlotComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=plot.component.js.map

/***/ }),

/***/ "../../../../../src/app/range-slider/range-slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\ndiv.slider-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 5px;\n  border-radius: 5px;\n}\n\ndiv.slider-group .label span {\n  font-weight: bold;\n}\n\ndiv.slider-group .slider,\ndiv.slider-group .number {\n  padding-top: 2ex;\n}\ndiv.slider-group .add-remove {\n  padding-top: 2.3ex;\n}\n\ndiv.slider-group div.inputs input {\n  width: 100%;\n}\n\ndiv.slider-group div.slider {\n  position: relative;\n  padding-left: 0;\n  padding-right: 0;\n}\n\ndiv.slider-group div.slider input {\n  display: block;\n}\n\ndiv.slider-group div.slider div.min,\ndiv.slider-group div.slider div.max {\n  position: absolute;\n  font-size: x-small;\n  top: 0;\n  background-color: #ddd;\n  border-radius: 1ex;\n  padding: 0.5ex;\n}\n\ndiv.slider-group.output div.slider div.min,\ndiv.slider-group.output div.slider div.max {\n  background-color: #ccc;\n}\n\ndiv.slider-group div.slider div.min {\n  left: 0;\n}\n\ndiv.slider-group div.slider div.max {\n  right: 0;\n}\n\n.fa {\n  opacity: 0.7;\n}\n.fa:hover {\n  opacity: 1;\n}\n\n.palette-color .fa {\n  opacity: 1;\n}\n\nspan.error {\n  color: red;\n}\n\ninput.error {\n  border: 2px solid red;\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/range-slider/range-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-group\">\n  <ng-template [ngIf]=\"labelTpl\" [ngIfElse]=\"standardLabel\">\n    <ng-template [ngTemplateOutlet]=\"labelTpl?.templateRef\"></ng-template>\n  </ng-template>\n  <ng-template #standardLabel>\n    <div class=\"label\" *ngIf=\"label\">\n      {{label}}\n      <span *ngIf=\"isOutput\">(Computed value)</span>\n      <ng-template [ngIf]=\"helpTpl\">\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"rsHelp\" popoverTitle=\"{{label}}\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n        <ng-template #rsHelp>\n          <ng-template [ngTemplateOutlet]=\"helpTpl?.templateRef\"></ng-template>\n        </ng-template>\n      </ng-template>\n    </div>\n  </ng-template>\n  <div class=\"inputs row\">\n    <div class=\"col-sm-9\">\n      <div class=\"slider\">\n        <div class=\"min\">{{floor(min)}}</div>\n        <input #range name=\"{{name}}\" type=\"range\" step=\"{{step}}\"\n               min=\"{{min}}\" max=\"{{max}}\"\n               [value]=\"value\"\n               [disabled]=\"isOutput\"\n               (change)=\"rangeChanged(range.value)\"\n               (input)=\"rangeInput(range.value)\" />\n        <div class=\"max\">{{ceil(max)}}</div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"number\">\n        <input #number [class.error]=\"hasError\" name=\"{{name}}\" type=\"number\"\n               step=\"{{step}}\" [min]=\"hardMin\" [max]=\"hardMax\" [value]=\"value\"\n               [disabled]=\"isOutput\"\n               (change)=\"numberChanged(number.value)\"\n               (input)=\"numberInput(number.value)\"\n               (blur)=\"blurred()\"\n               [ngbPopover]=\"errorMsg\" triggers=\"manual\"\n               container=\"body\" #errorPopover=\"ngbPopover\" />\n        <ng-template #errorMsg>\n          <span class=\"error\">Value is out of range ({{hardMin}}, {{hardMax}}).</span><br/>\n          Current value: {{value}}\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/range-slider/range-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RangeSliderLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RangeSliderHelp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: 'ng-template[rsLabel]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */]) === "function" && _a || Object])
], RangeSliderLabel);

var RangeSliderHelp = (function () {
    function RangeSliderHelp(templateRef) {
        this.templateRef = templateRef;
    }
    return RangeSliderHelp;
}());
RangeSliderHelp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: 'ng-template[rsHelp]' }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */]) === "function" && _b || Object])
], RangeSliderHelp);

var RangeSliderComponent = RangeSliderComponent_1 = (function () {
    function RangeSliderComponent() {
        this.step = 0.01;
        this.isOutput = false;
        this.hasError = false;
        this.inputSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.dirty = false;
    }
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
    return RangeSliderComponent;
}());
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(RangeSliderLabel),
    __metadata("design:type", RangeSliderLabel)
], RangeSliderComponent.prototype, "labelTpl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(RangeSliderHelp),
    __metadata("design:type", RangeSliderHelp)
], RangeSliderComponent.prototype, "helpTpl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("errorPopover"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbPopover */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbPopover */]) === "function" && _c || Object)
], RangeSliderComponent.prototype, "errorPopover", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("number"),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _d || Object)
], RangeSliderComponent.prototype, "numberElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("range"),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _e || Object)
], RangeSliderComponent.prototype, "rangeElement", void 0);
RangeSliderComponent = RangeSliderComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-range-slider',
        template: __webpack_require__("../../../../../src/app/range-slider/range-slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/range-slider/range-slider.component.css")],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return RangeSliderComponent_1; }),
                multi: true
            }
        ]
    })
], RangeSliderComponent);

var _a, _b, RangeSliderComponent_1, _c, _d, _e;
//# sourceMappingURL=range-slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/range.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Range; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__changeable__ = __webpack_require__("../../../../../src/app/changeable.ts");
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

/***/ "../../../../../src/app/round.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    return RoundPipe;
}());
RoundPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'round'
    })
], RoundPipe);

//# sourceMappingURL=round.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/serialize-plot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerializePlotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_plot_component__ = __webpack_require__("../../../../../src/app/abstract-plot.component.ts");
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
            var canvas = _this.canvasElement.nativeElement;
            canvas.width = _this.width;
            canvas.height = _this.height;
            var context = canvas.getContext("2d");
            var image = new Image(_this.width, _this.height);
            image.addEventListener('load', function () {
                context.clearRect(0, 0, _this.width, _this.height);
                context.drawImage(image, 0, 0, _this.width, _this.height);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('plot'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__abstract_plot_component__["a" /* AbstractPlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__abstract_plot_component__["a" /* AbstractPlotComponent */]) === "function" && _a || Object)
], SerializePlotComponent.prototype, "plot", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], SerializePlotComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], SerializePlotComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('canvas'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object)
], SerializePlotComponent.prototype, "canvasElement", void 0);
SerializePlotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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

module.exports = "<form (ngSubmit)=\"onSubmit()\" #startForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"output\">\n      What do you want to know?\n      <button type=\"button\" class=\"btn btn-secondary fa fa-question-circle\"\n        (click)=\"toggleHelp()\"></button>\n    </label>\n    <select class=\"form-control\" id=\"output\"\n            required\n            [(ngModel)]=\"model.output\" name=\"output\">\n      <option></option>\n      <option value=\"n\">Sample size</option>\n      <option value=\"power\">Power</option>\n      <option value=\"delta\">Detectable alternative</option>\n    </select>\n  </div>\n  <!--\n  <div class=\"form-group\" *ngIf=\"model.output\">\n    <label for=\"design\">Paired or independent?</label>\n    <select class=\"form-control\" id=\"design\"\n            required\n            [(ngModel)]=\"model.design\" name=\"design\">\n      <option></option>\n      <option>Paired</option>\n      <option>Independent</option>\n    </select>\n  </div>\n  -->\n  <div *ngIf=\"model.output\">\n    <div class=\"form-group\">\n      <label for=\"alpha\">\n        Type I Error (&alpha;)\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"alphaHelp\" popoverTitle=\"Type I Error (&alpha;)\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n      </label>\n      <ng-template #alphaHelp>\n        The Type I error probability for a two sided test. This is the\n        probability that we will falsely reject the null hypothesis.\n      </ng-template>\n      <input class=\"form-control\" id=\"alpha\"\n             type=\"number\" step=\"0.01\"\n             required\n             [(ngModel)]=\"model.alpha\" name=\"alpha\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sigma\">\n        Standard deviation (&sigma;)\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"sigmaHelp\" popoverTitle=\"Standard deviation (&sigma;)\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n      </label>\n      <ng-template #sigmaHelp>\n        For independent tests σ is the within group standard deviation. For\n        paired designs it is the standard deviation of difference in the\n        response of matched pairs.\n      </ng-template>\n      <input class=\"form-control\" id=\"sigma\"\n             type=\"number\" step=\"0.1\"\n             required\n             [(ngModel)]=\"model.sigma\" name=\"sigma\">\n    </div>\n    <div *ngIf=\"model.output != 'power'\" class=\"form-group\">\n      <label for=\"power\">\n        Power\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"powerHelp\" popoverTitle=\"Power\"\n          placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n      </label>\n      <ng-template #powerHelp>\n        For independent tests power is probability of correctly rejecting the\n        null hypothesis of equal population means given n experimental\n        patients, m control patients per experimental patient, a Type I error\n        probability α and a true difference in population means of δ. For\n        paired tests it is the probability of correctly rejecting the null\n        hypothesis of equal population means given n pairs of patients, a Type\n        I error probability α and a true difference in population means of δ.\n      </ng-template>\n      <input class=\"form-control\" id=\"power\"\n             type=\"number\" step=\"0.01\"\n             required\n             [(ngModel)]=\"model.power\" name=\"power\">\n    </div>\n    <div *ngIf=\"model.output != 'delta'\" class=\"form-group\">\n      <label for=\"delta\">Difference in population means (&delta;)</label>\n      <input class=\"form-control\" id=\"delta\"\n             type=\"number\" step=\"0.1\"\n             required\n             [(ngModel)]=\"model.delta\" name=\"delta\">\n    </div>\n    <ng-template [ngIf]=\"model.output != 'n'\">\n      <div class=\"form-check form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"ciMode\" id=\"ciMode-false\"\n                 [(ngModel)]=\"model.ciMode\" [value]=\"false\">\n          Sample size\n          <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n            [ngbPopover]=\"nHelp\" popoverTitle=\"Sample size\"\n            placement=\"right\" triggers=\"hover\" container=\"body\"></i>\n        </label>\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"ciMode\" id=\"ciMode-true\"\n                 [(ngModel)]=\"model.ciMode\" [value]=\"true\">\n          95% confidence interval width\n        </label>\n      </div>\n      <ng-template #nHelp>\n        For independent t-tests n is the number of experimental subjects. For\n        pair test n is the number of pairs.\n      </ng-template>\n\n      <div class=\"form-group\">\n        <input *ngIf=\"!model.ciMode\"\n               class=\"form-control\" id=\"n\"\n               type=\"number\"\n               required\n               [(ngModel)]=\"model.n\" name=\"n\">\n        <input *ngIf=\"model.ciMode\"\n               class=\"form-control\" id=\"ci\"\n               type=\"number\"\n               required\n               [(ngModel)]=\"model.ci\" name=\"ci\">\n      </div>\n\n    </ng-template>\n    <button type=\"submit\" class=\"btn btn-success\"\n            [disabled]=\"!startForm.form.valid\">\n      Calculate\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
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
    StartComponent.prototype.onSubmit = function () {
        this.onCalculate.emit();
    };
    return StartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__t_test__["a" /* TTest */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__t_test__["a" /* TTest */]) === "function" && _a || Object)
], StartComponent.prototype, "model", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], StartComponent.prototype, "onCalculate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], StartComponent.prototype, "onToggleHelp", void 0);
StartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TTestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TTestService);

var _a;
//# sourceMappingURL=t-test.service.js.map

/***/ }),

/***/ "../../../../../src/app/t-test.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TTestRanges; });
/* unused harmony export TTestData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TTestSet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("../../../../rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changeable__ = __webpack_require__("../../../../../src/app/changeable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range__ = __webpack_require__("../../../../../src/app/range.ts");
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




var TTest = (function (_super) {
    __extends(TTest, _super);
    function TTest(attribs) {
        var _this = _super.call(this) || this;
        _this.ciMode = false;
        if (attribs) {
            _this.update(attribs, false);
        }
        return _this;
    }
    TTest.prototype.update = function (attribs, emit, eventAttribs) {
        if (emit === void 0) { emit = true; }
        if (eventAttribs === void 0) { eventAttribs = {}; }
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
        if (attribs.ci !== undefined) {
            this.ci = attribs.ci;
        }
        if (attribs.ciMode !== undefined) {
            this.ciMode = attribs.ciMode;
        }
        this.noEmit = false;
        var changes = this.changes;
        if (emit) {
            this.emit(eventAttribs);
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
        if (attribs.ci !== undefined) {
            attribs.ci = Math.ceil(attribs.ci);
        }
        this.update(attribs, emit);
    };
    TTest.prototype.attributes = function () {
        var result = {
            output: this.output, alpha: this.alpha, sigma: this.sigma,
            delta: this.delta, power: this.power, n: this.n, ci: this.ci,
            ciMode: this.ciMode
        };
        if (this.id) {
            result.id = this.id;
        }
        if (this.design) {
            result.design = this.design;
        }
        return result;
    };
    TTest.prototype.round = function () {
        var attribs = this.attributes();
        attribs.alpha = Math.round(attribs.alpha * 100) / 100;
        attribs.sigma = Math.round(attribs.sigma * 100) / 100;
        attribs.delta = Math.round(attribs.delta * 100) / 100;
        attribs.power = Math.round(attribs.power * 100) / 100;
        attribs.n = Math.ceil(attribs.n);
        return new TTest(attribs);
    };
    TTest.prototype.clone = function () {
        return new TTest(this.attributes());
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
    __metadata("design:type", Number)
], TTest.prototype, "ci", void 0);
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
            var sub = child.onChange.subscribe(function (childEvent) {
                var event = {};
                for (var key in childEvent) {
                    if (key == 'changes') {
                        event.changes = (_a = {}, _a[name] = childEvent.changes, _a);
                    }
                    else {
                        event[key] = childEvent[key];
                    }
                }
                _this.onChange.emit(event);
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
    function TTestSet() {
        this.models = [];
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onCompute = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    TTestSet.prototype.add = function (model, data) {
        var _this = this;
        var index = this.models.length;
        this.models.push({ model: model, data: data });
        if (this.models.length == 1) {
            var attribs = this.calcRangeAttributes(model, data);
            this.ranges = new TTestRanges(attribs);
            this.rangeSub = this.ranges.onChange.subscribe(function (value) {
                _this.onChange.emit({ ranges: value });
            });
        }
        this.onChange.emit({ added: index });
        return index;
    };
    TTestSet.prototype.getModel = function (index) {
        return this.models[index].model;
    };
    TTestSet.prototype.getData = function (index) {
        return this.models[index].data;
    };
    TTestSet.prototype.update = function (index, modelChanges, data, eventAttribs, emit) {
        if (eventAttribs === void 0) { eventAttribs = {}; }
        if (emit === void 0) { emit = true; }
        var model = this.models[index].model;
        this.models[index].data = data;
        var prevChanges = model.prevChanges;
        model.update(modelChanges, emit, eventAttribs);
        if (index == 0) {
            var skip = void 0;
            var changeKeys = Object.keys(prevChanges);
            if (changeKeys.length == 2 && model.output in prevChanges) {
                skip = changeKeys.find(function (k) { return k != model.output; });
            }
            var attribs = this.calcRangeAttributes(model, data, skip);
            this.ranges.update(attribs, emit);
        }
        if (emit) {
            this.onCompute.emit();
        }
    };
    TTestSet.prototype.triggerCompute = function () {
        this.onCompute.emit();
    };
    TTestSet.prototype.setOutputQuietly = function (output) {
        this.models.forEach(function (m) { return m.model.update({ output: output }, false); });
    };
    TTestSet.prototype.remove = function (index) {
        if (index == 0) {
            throw new Error("can't remove first model");
        }
        var m = this.models[index];
        m.model.onChange.complete();
        this.models.splice(index, 1);
        this.onChange.emit({ removed: index });
    };
    TTestSet.prototype.extraModels = function () {
        return this.models.slice(1).map(function (m) { return m.model; });
    };
    TTestSet.prototype.reduceModels = function (initial, callback) {
        return this.models.reduce(function (a, m, i) {
            return callback(a, m.model, i);
        }, initial);
    };
    TTestSet.prototype.calcRangeAttributes = function (model, data, skip) {
        var n, power, delta, pSpace, indices, values, min, max;
        var deltaMax = 1.5 * model.sigma;
        var primary = data.primary;
        var tertiary = data.tertiary;
        switch (model.output) {
            case "n":
                values = [model.n * 0.5, model.n * 1.5].sort(function (a, b) { return a - b; });
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
                values = [model.delta * 0.5, model.delta * 1.5].sort(function (a, b) { return a - b; });
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
        return attribs;
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
exports.push([module.i, ".overview {\n  text-align: right;\n}\n\n.btn-secondary {\n  padding: 0.3rem 0.3rem;\n}\n\n.add-remove {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-align: end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important;\n  padding: 0 0.1rem 0.75rem 0.1rem;\n  margin-left: 10px;\n}\n\n.add-remove-center {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important;\n  padding: 0 0 0 0.1rem;\n  margin: 2rem 0 0 1rem;\n  margin-left: 10px;\n  border: 1px solid #333;\n  border-left: 0;\n}\n\n.output {\n  background-color: #d8ecf3;\n  border-radius: 0.5em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/t-test/t-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label>\n    Output\n    <select class=\"form-control\" name=\"output\"\n            [(ngModel)]=\"model.output\">\n      <option value=\"n\">Sample size</option>\n      <option value=\"power\">Power</option>\n      <option value=\"delta\">Detectable alternative</option>\n    </select>\n  </label>\n</div>\n\n<div class=\"grow-horiz\">\n  <app-range-slider name=\"alpha\" label=\"Type I Error (&alpha;)\"\n    [min]=\"min.alpha\" [max]=\"max.alpha\"\n    [hard-min]=\"min.alpha\" [hard-max]=\"max.alpha\"\n    [ngModel]=\"model.alpha | round\" (ngModelChange)=\"model.alpha = $event\">\n    <ng-template rsHelp>\n      The Type I error probability for a two sided test. This is the\n      probability that we will falsely reject the null hypothesis.\n    </ng-template>\n  </app-range-slider>\n  <div class=\"add-remove fa-fw\" [style.color]=\"getColor(0)\">\n    <i *ngIf=\"canAdd('alpha')\" class=\"fa fa-plus-circle\" (click)=\"addInput('alpha')\"\n      ngbPopover=\"Click to add line to plot for alternate value of &quot;alpha&quot;\"\n      triggers=\"hover\" container=\"body\"></i>\n  </div>\n</div>\n<ng-template [ngIf]=\"extraName == 'alpha'\">\n  <div class=\"grow-horiz\" *ngFor=\"let ex of extraModels; let i = index; trackBy: trackByExtra\">\n    <app-range-slider name=\"alpha-{{i+2}}\" label=\"Type I Error (&alpha;) #{{i+2}}\"\n      [min]=\"min.alpha\" [max]=\"max.alpha\"\n      [hard-min]=\"min.alpha\" [hard-max]=\"max.alpha\"\n      [ngModel]=\"ex.alpha | round\" (ngModelChange)=\"ex.alpha = $event\">\n    </app-range-slider>\n    <div class=\"add-remove fa-fw\" [style.color]=\"getColor(i+1)\">\n      <i class=\"fa fa-minus-circle\" (click)=\"removeInput(i+1)\"\n        ngbPopover=\"Remove line from plot for &quot;alpha&quot;\"\n        triggers=\"hover\" container=\"body\"></i>\n    </div>\n  </div>\n</ng-template>\n\n<div class=\"grow-horiz\">\n  <app-range-slider name=\"sigma\" label=\"Std. deviation (&sigma;)\"\n    [min]=\"min.sigma\" [max]=\"max.sigma\" step=\"0.1\"\n    [hard-min]=\"1\"\n    [ngModel]=\"model.sigma | round:1\" (ngModelChange)=\"model.sigma = $event\">\n    <ng-template rsHelp>\n      For independent tests σ is the within group standard deviation. For\n      paired designs it is the standard deviation of difference in the\n      response of matched pairs.\n    </ng-template>\n  </app-range-slider>\n  <div class=\"add-remove fa-fw\" [style.color]=\"getColor(0)\">\n    <i *ngIf=\"canAdd('sigma')\" class=\"fa fa-plus-circle\" (click)=\"addInput('sigma')\"\n      ngbPopover=\"Click to add line to plot for alternate value of &quot;sigma&quot;\"\n      triggers=\"hover\" container=\"body\"></i>\n  </div>\n</div>\n<ng-template [ngIf]=\"extraName == 'sigma'\">\n  <div class=\"grow-horiz\" *ngFor=\"let ex of extraModels; let i = index; trackBy: trackByExtra\">\n    <app-range-slider name=\"sigma-{{i+2}}\" label=\"Std. deviation #{{i+2}}\"\n      [min]=\"min.sigma\" [max]=\"max.sigma\" step=\"0.1\"\n      [hard-min]=\"1\"\n      [ngModel]=\"ex.sigma | round:1\" (ngModelChange)=\"ex.sigma = $event\">\n    </app-range-slider>\n    <div class=\"add-remove fa-fw\" [style.color]=\"getColor(i+1)\">\n      <i class=\"fa fa-minus-circle\" (click)=\"removeInput(i+1)\"\n        ngbPopover=\"Remove line from plot for &quot;sigma&quot;\"\n        triggers=\"hover\" container=\"body\"></i>\n    </div>\n  </div>\n</ng-template>\n\n<div class=\"grow-horiz\">\n  <div class=\"grow-vert\" [class.output]=\"isOutput('power')\">\n    <app-range-slider name=\"power\" label=\"Power\"\n      [min]=\"min.power\" [max]=\"max.power\"\n      [hard-min]=\"min.power\" [hard-max]=\"max.power\"\n      [is-output]=\"model.output == 'power'\"\n      [ngModel]=\"model.power | round\" (ngModelChange)=\"model.power = $event\">\n      <ng-template rsHelp>\n        For independent tests power is probability of correctly rejecting the\n        null hypothesis of equal population means given n experimental\n        patients, m control patients per experimental patient, a Type I error\n        probability α and a true difference in population means of δ. For\n        paired tests it is the probability of correctly rejecting the null\n        hypothesis of equal population means given n pairs of patients, a Type\n        I error probability α and a true difference in population means of δ.\n      </ng-template>\n    </app-range-slider>\n  </div>\n  <div class=\"add-remove fa-fw\" [style.color]=\"getColor(0)\">\n    <i *ngIf=\"canAdd('power')\" class=\"fa fa-plus-circle\" (click)=\"addInput('power')\"\n      ngbPopover=\"Click to add line to plot for alternate value of &quot;power&quot;\"\n      triggers=\"hover\" container=\"body\"></i>\n  </div>\n</div>\n<ng-template [ngIf]=\"extraName == 'power'\">\n  <div class=\"grow-horiz\" *ngFor=\"let ex of extraModels; let i = index; trackBy: trackByExtra\">\n    <app-range-slider name=\"power-{{i+2}}\" label=\"Power #{{i+2}}\"\n      [min]=\"min.power\" [max]=\"max.power\"\n      [hard-min]=\"min.power\" [hard-max]=\"max.power\"\n      [ngModel]=\"ex.power | round\" (ngModelChange)=\"ex.power = $event\">\n    </app-range-slider>\n    <div class=\"add-remove fa-fw\" [style.color]=\"getColor(i+1)\">\n      <i class=\"fa fa-minus-circle\" (click)=\"removeInput(i+1)\"\n        ngbPopover=\"Remove line from plot for &quot;power&quot;\"\n        triggers=\"hover\" container=\"body\"></i>\n    </div>\n  </div>\n</ng-template>\n\n<div class=\"grow-horiz\">\n  <div class=\"grow-vert\" [class.output]=\"isOutput('delta')\">\n    <app-range-slider name=\"delta\" label=\"Difference in population means (&delta;)\"\n      [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\"\n      [is-output]=\"model.output == 'delta'\"\n      [ngModel]=\"model.delta | round:1\" (ngModelChange)=\"model.delta = $event\">\n      <ng-template rsHelp>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim nunc,\n        rutrum at ligula id, tempor tincidunt nunc.\n      </ng-template>\n    </app-range-slider>\n  </div>\n  <div class=\"add-remove fa-fw\" [style.color]=\"getColor(0)\">\n    <i *ngIf=\"canAdd('delta')\" class=\"fa fa-plus-circle\" (click)=\"addInput('delta')\"\n      ngbPopover=\"Click to add line to plot for alternate value of &quot;delta&quot;\"\n      triggers=\"hover\" container=\"body\"></i>\n  </div>\n</div>\n<ng-template [ngIf]=\"extraName == 'delta'\">\n  <div class=\"grow-horiz\" *ngFor=\"let ex of extraModels; let i = index; trackBy: trackByExtra\">\n    <app-range-slider name=\"delta-{{i+2}}\" label=\"Difference in population means (&delta;) #{{i+2}}\"\n      [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\"\n      [hard-min]=\"min.delta\" [hard-max]=\"max.delta\"\n      [ngModel]=\"ex.delta | round:1\" (ngModelChange)=\"ex.delta = $event\">\n    </app-range-slider>\n    <div class=\"add-remove fa-fw\" [style.color]=\"getColor(i+1)\">\n      <i class=\"fa fa-minus-circle\" (click)=\"removeInput(i+1)\"\n        ngbPopover=\"Remove line from plot for &quot;delta&quot;\"\n        triggers=\"hover\" container=\"body\"></i>\n    </div>\n  </div>\n</ng-template>\n\n<div class=\"grow-horiz\">\n  <div class=\"grow-vert\" [class.output]=\"isOutput('n')\">\n    <app-range-slider name=\"n\" label=\"Sample size\"\n      [min]=\"min.n\" [max]=\"max.n\" step=\"1\"\n      [hard-min]=\"1\"\n      [is-output]=\"model.output == 'n'\"\n      [ngModel]=\"model.n | ceil\" (ngModelChange)=\"model.n = $event\">\n      <ng-template rsHelp>\n        For independent t-tests n is the number of experimental subjects. For\n        pair test n is the number of pairs.\n      </ng-template>\n    </app-range-slider>\n    <app-range-slider name=\"ci\" label=\"95% confidence interval width\"\n      [min]=\"min.ci\" [max]=\"max.ci\"\n      [hard-min]=\"1\"\n      [is-output]=\"model.output == 'n'\"\n      [ngModel]=\"model.ci | round\" (ngModelChange)=\"model.ci = $event\">\n      <ng-template rsHelp>\n        Specifying the 95% confidence interval width will automatically calculate\n        the sample size parameter.\n      </ng-template>\n    </app-range-slider>\n  </div>\n  <div class=\"add-remove-center fa-fw\" [style.color]=\"getColor(0)\">\n    <i *ngIf=\"canAdd('n')\" class=\"fa fa-plus-circle\" (click)=\"addInput('n')\"\n      ngbPopover=\"Click to add line to plot for alternate value of &quot;n&quot; or 95% confidence interval width\"\n      triggers=\"hover\" container=\"body\"></i>\n  </div>\n</div>\n<ng-template [ngIf]=\"extraName == 'n'\">\n  <div class=\"grow-horiz\" *ngFor=\"let ex of extraModels; let i = index; trackBy: trackByExtra\">\n    <div class=\"grow-vert\">\n      <app-range-slider name=\"n-{{i+2}}\" label=\"Sample size #{{i+2}}\"\n        [min]=\"min.n\" [max]=\"max.n\" step=\"1\"\n        [hard-min]=\"1\"\n        [ngModel]=\"ex.n | ceil\" (ngModelChange)=\"ex.n = $event\">\n      </app-range-slider>\n\n      <app-range-slider name=\"ci-{{i+2}}\" label=\"95% confidence interval width #{{i+2}}\"\n        [min]=\"min.ci\" [max]=\"max.ci\"\n        [hard-min]=\"1\"\n        [ngModel]=\"ex.ci | round\" (ngModelChange)=\"ex.ci = $event\">\n      </app-range-slider>\n    </div>\n    <div class=\"add-remove-center fa-fw\" [style.color]=\"getColor(i+1)\">\n      <i class=\"fa fa-minus-circle\" (click)=\"removeInput(i+1)\"\n        ngbPopover=\"Remove line from plot for &quot;n&quot; and 95% confidence interval width\"\n        triggers=\"hover\" container=\"body\"></i>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/t-test/t-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__t_test__ = __webpack_require__("../../../../../src/app/t-test.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__t_test_service__ = __webpack_require__("../../../../../src/app/t-test.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plot_options_service__ = __webpack_require__("../../../../../src/app/plot-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__palette_service__ = __webpack_require__("../../../../../src/app/palette.service.ts");
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
    function TTestComponent(plotOptions, ttestService, palette) {
        this.plotOptions = plotOptions;
        this.ttestService = ttestService;
        this.palette = palette;
    }
    TTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = this.modelSet.getModel(0);
        this.extraModels = this.modelSet.extraModels();
        this.model.onChange.
            debounceTime(100).
            subscribe(function (event) {
            _this.modelChanged(0, event);
        });
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
    TTestComponent.prototype.isOutput = function (name) {
        return this.model.output === name;
    };
    TTestComponent.prototype.canAdd = function (name) {
        return this.model.output !== name &&
            (this.extraName === undefined || this.extraName === name);
    };
    TTestComponent.prototype.getColor = function (index) {
        return this.palette.getColor(index);
    };
    TTestComponent.prototype.addInput = function (name) {
        var _this = this;
        if (this.extraName && this.extraName != name) {
            throw new Error("extra attributes must be mutually exclusive");
        }
        this.extraName = name;
        var model = this.model.clone();
        var index = this.modelSet.add(model, this.modelSet.getData(0));
        model.onChange.
            debounceTime(100).
            subscribe(function (event) {
            _this.modelChanged(index, event);
        });
        this.extraModels = this.modelSet.extraModels();
    };
    TTestComponent.prototype.removeInput = function (index) {
        this.modelSet.remove(index);
        this.extraModels = this.modelSet.extraModels();
        if (this.modelSet.models.length == 1) {
            this.extraName = undefined;
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
    TTestComponent.prototype.modelChanged = function (index, event) {
        var _this = this;
        if (event.recalculation) {
            // Don't do anything, since this change came from a backend
            // recalculation.
            return;
        }
        var changes = event.changes;
        var model = this.modelSet.getModel(index);
        if (index == 0 && 'output' in changes) {
            // output was changed, which means each model needs to be updated before
            // firing the compute event, or the plots will get confused
            this.modelSet.setOutputQuietly(changes.output);
            var promise = this.modelSet.reduceModels(Promise.resolve(), function (promise, model, index) {
                return promise.then(function () { return _this.ttestService.update(model); }).
                    then(function (result) {
                    _this.modelSet.update(index, result.model, result.data, {}, false);
                });
            });
            promise.then(function () { return _this.modelSet.triggerCompute(); });
        }
        else {
            if ('ci' in changes) {
                // 95% confidence interval width was changed, so turn on "ciMode"
                model.ciMode = true;
            }
            else if ('n' in changes) {
                // Sample size was changed, so turn off "ciMode"
                model.ciMode = false;
            }
            this.updateModelSet(index);
        }
    };
    TTestComponent.prototype.updateModelSet = function (index) {
        var _this = this;
        var model = this.modelSet.getModel(index);
        this.ttestService.update(model).
            then(function (result) {
            _this.modelSet.update(index, result.model, result.data, { recalculation: true });
            _this.adjustMinMax(index);
        }, function (error) { });
    };
    TTestComponent.prototype.adjustMinMax = function (index) {
        var model = this.modelSet.getModel(index);
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
    return TTestComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('model-set'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__t_test__["c" /* TTestSet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__t_test__["c" /* TTestSet */]) === "function" && _a || Object)
], TTestComponent.prototype, "modelSet", void 0);
TTestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-t-test',
        template: __webpack_require__("../../../../../src/app/t-test/t-test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/t-test/t-test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__plot_options_service__["a" /* PlotOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__plot_options_service__["a" /* PlotOptionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__t_test_service__["a" /* TTestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__t_test_service__["a" /* TTestService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__palette_service__["a" /* PaletteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__palette_service__["a" /* PaletteService */]) === "function" && _d || Object])
], TTestComponent);

var _a, _b, _c, _d;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map