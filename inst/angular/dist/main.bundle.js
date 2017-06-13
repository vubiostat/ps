webpackJsonp([1,4],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__t_test__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plot_options__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomPlotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BottomPlotComponent = (function () {
    function BottomPlotComponent() {
        this.margin = 50;
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
        this.pSpace = {
            values: this.modelSet.data.pSpace,
            range: this.modelSet.ranges.pSpace
        };
        this.precision = {
            values: this.modelSet.data.precision,
            target: this.modelSet.model.delta
        };
        this.sampDist = {
            values: this.modelSet.data.sampDist
        };
        // compute scales
        this.xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().
            domain(this.pSpace.range.toArray()).
            range([0, this.width]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().
            domain([0, 0.8]).
            range([0, this.height]);
        this.yScaleSD = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]().
            domain(__WEBPACK_IMPORTED_MODULE_1_d3__["extent"](this.sampDist.values).reverse()).
            range([0, this.yScale(0.5)]);
        // sample distribution
        var points = this.pSpace.values.map(function (xValue, i) {
            return { x: xValue, y: _this.sampDist.values[i] };
        });
        this.sampDistPath = this.getArea(points);
        // main lines
        var leftLimit = this.precision.values[0];
        var rightLimit = this.precision.values[1];
        points = [
            this.precision.values.map(function (xValue, i) {
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
        this.paths = this.getPaths(points);
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
    BottomPlotComponent.prototype.getDimension = function (key) {
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
    BottomPlotComponent.prototype.translate = function (x, y) {
        if (isNaN(x) || isNaN(y)) {
            return null;
        }
        return "translate(" + x + ", " + y + ")";
    };
    BottomPlotComponent.prototype.clipPath = function () {
        return "url(#" + this.clipPathId + ")";
    };
    BottomPlotComponent.prototype.getArea = function (points) {
        var _this = this;
        var area = __WEBPACK_IMPORTED_MODULE_1_d3__["area"]().
            x(function (d, i) { return _this.xScale(d.x); }).
            y0(this.yScaleSD(0)).
            y1(function (d, i) { return _this.yScaleSD(d.y); });
        return area(points);
    };
    BottomPlotComponent.prototype.getPaths = function (points) {
        var _this = this;
        return points.map(function (data) {
            var line = __WEBPACK_IMPORTED_MODULE_1_d3__["line"]().
                x(function (d, i) { return _this.xScale(d.x); }).
                y(function (d, i) { return _this.yScale(d.y); });
            return line(data);
        });
    };
    return BottomPlotComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], BottomPlotComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__t_test__["a" /* TTestSet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__t_test__["a" /* TTestSet */]) === "function" && _a || Object)
], BottomPlotComponent.prototype, "modelSet", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__plot_options__["a" /* PlotOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__plot_options__["a" /* PlotOptions */]) === "function" && _b || Object)
], BottomPlotComponent.prototype, "plotOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('plot'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _c || Object)
], BottomPlotComponent.prototype, "plotElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('unit'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _d || Object)
], BottomPlotComponent.prototype, "unitElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('bottomAxis'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _e || Object)
], BottomPlotComponent.prototype, "bottomAxisElement", void 0);
BottomPlotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-bottom-plot',
        template: __webpack_require__(230),
        styles: [__webpack_require__(220)]
    })
], BottomPlotComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=bottom-plot.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__t_test__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plot_options__ = __webpack_require__(25);
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
        this.enabled = false;
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
    PlotOptionsComponent.prototype.toggle = function () {
        this.enabled = !this.enabled;
    };
    PlotOptionsComponent.prototype.close = function () {
        this.enabled = false;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-plot-options',
        template: __webpack_require__(233),
        styles: [__webpack_require__(223)]
    })
], PlotOptionsComponent);

var _a, _b;
//# sourceMappingURL=plot-options.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plot_options__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__t_test__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlotComponent = (function () {
    function PlotComponent() {
        this.margin = 50;
        this.targetDragging = false;
        this.showTargetInfo = false;
        this.showHoverInfo = false;
        this.needDraw = false;
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
        var dim = event.target.getBoundingClientRect();
        var x = event.clientX - dim.left;
        var y = event.clientY - dim.top;
        if (x > this.xTargetRange[0] && x < this.xTargetRange[1] &&
            y > this.yTargetRange[0] && y < this.yTargetRange[1]) {
            // hide hover info if too close to the target point
            this.showHoverInfo = false;
            return;
        }
        var index = this.xBisector(this.mainPoints, this.xScale.invert(x));
        this.hoverPoint = this.mainPoints[index];
        if (this.hoverPoint) {
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
        var index = this.xBisector(this.mainPoints, x);
        var point = this.mainPoints[index];
        if (!point)
            return;
        this.targetPoint.x = point.x;
        this.targetPoint.y = point.y;
        this.computeDropPaths();
    };
    PlotComponent.prototype.dragTargetEnd = function () {
        this.targetDragging = false;
        this.showTargetInfo = false;
        if (this.modelSet && this.x.change) {
            var output = this.modelSet.model.output;
            this.modelSet.model.update((_a = {},
                _a[output] = this.targetPoint.y,
                _a[this.x.change] = this.targetPoint.x,
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
        var data = this.modelSet.data;
        switch (this.modelSet.model.output) {
            case "n":
                if (this.name == "top-left") {
                    this.x = {
                        values: data.power, range: ranges.power, target: model.power,
                        change: "power", title: "Power", sym: "1-β"
                    };
                }
                else if (this.name == "top-right") {
                    this.x = {
                        values: data.delta, range: ranges.delta, target: model.delta,
                        change: "delta", title: "Detectable Alternative", sym: "δ"
                    };
                }
                this.y = {
                    values: data.n, range: ranges.n, target: model.n,
                    title: "Sample Size", sym: "n"
                };
                break;
            case "power":
                if (this.name == "top-left") {
                    this.x = {
                        values: data.n, range: ranges.n, target: model.n,
                        change: "n", title: "Sample Size", sym: "n"
                    };
                    this.y = {
                        values: data.power, range: ranges.power, target: model.power,
                        title: "Power", sym: "1-β"
                    };
                }
                else if (this.name == "top-right") {
                    this.x = {
                        values: data.delta, range: ranges.delta, target: model.delta,
                        change: "delta", title: "Detectable Alternative", sym: "δ"
                    };
                    this.y = {
                        values: data.powerByDelta, range: ranges.power, target: model.power,
                        title: "Power", sym: "1-β"
                    };
                }
                break;
            case "delta":
                if (this.name == "top-left") {
                    this.x = {
                        values: data.n, range: ranges.n, target: model.n,
                        change: "n", title: "Sample Size", sym: "n"
                    };
                }
                else if (this.name == "top-right") {
                    this.x = {
                        values: data.power, range: ranges.power, target: model.power,
                        change: "power", title: "Power", sym: "1-β"
                    };
                }
                this.y = {
                    values: data.delta, range: ranges.delta, target: model.delta,
                    title: "Detectable Alternative", sym: "δ"
                };
                break;
        }
        if (!this.x || !this.y || !this.x.values || !this.y.values) {
            console.log("bad:", this.x, this.y);
            return;
        }
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
        var points;
        if (Array.isArray(this.x.values[0])) {
            // multiple sets of x values
            points = this.x.values.map(function (xValues) {
                return xValues.map(function (xValue, i) {
                    return { x: xValue, y: _this.y.values[i] };
                });
            });
        }
        else if (Array.isArray(this.y.values[0])) {
            // multiple sets of y values
            points = this.y.values.map(function (yValues) {
                return yValues.map(function (yValue, i) {
                    return { x: _this.x.values[i], y: yValue };
                });
            });
        }
        if (points) {
            this.paths = this.getPaths(points);
            this.mainPoints = points[0];
            this.mainPoints.sort(function (a, b) { return a.x - b.x; });
        }
        // drop paths
        this.computeDropPaths();
        // target hover ranges
        var xTargetPos = this.xScale(this.targetPoint.x);
        this.xTargetRange = [xTargetPos - 5, xTargetPos + 5];
        var yTargetPos = this.yScale(this.targetPoint.y);
        this.yTargetRange = [yTargetPos - 5, yTargetPos + 5];
        this.xBisector = __WEBPACK_IMPORTED_MODULE_1_d3__["bisector"](function (point) { return point.x; }).left;
        this.needDraw = true;
    };
    PlotComponent.prototype.computeDropPaths = function () {
        var points = [
            [
                { x: this.xScale.domain()[0], y: this.targetPoint.y },
                { x: this.targetPoint.x, y: this.targetPoint.y }
            ],
            [
                { x: this.targetPoint.x, y: this.yScale.domain()[1] },
                { x: this.targetPoint.x, y: this.targetPoint.y }
            ],
        ];
        this.dropPaths = this.getPaths(points);
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
    PlotComponent.prototype.getDimension = function (key) {
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
    PlotComponent.prototype.translate = function (x, y) {
        if (isNaN(x) || isNaN(y)) {
            return null;
        }
        return "translate(" + x + ", " + y + ")";
    };
    PlotComponent.prototype.mainClipPath = function () {
        return "url(#" + this.mainClipPathId + ")";
    };
    PlotComponent.prototype.targetClipPath = function () {
        return "url(#" + this.targetClipPathId + ")";
    };
    PlotComponent.prototype.getPaths = function (points) {
        var _this = this;
        return points.map(function (data) {
            var line = __WEBPACK_IMPORTED_MODULE_1_d3__["line"]().
                x(function (d, i) { return _this.xScale(d.x); }).
                y(function (d, i) { return _this.yScale(d.y); });
            return line(data);
        });
    };
    return PlotComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], PlotComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__plot_options__["a" /* PlotOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__plot_options__["a" /* PlotOptions */]) === "function" && _a || Object)
], PlotComponent.prototype, "plotOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__t_test__["a" /* TTestSet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__t_test__["a" /* TTestSet */]) === "function" && _b || Object)
], PlotComponent.prototype, "modelSet", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], PlotComponent.prototype, "changeName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('plot'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _c || Object)
], PlotComponent.prototype, "plotElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('unit'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _d || Object)
], PlotComponent.prototype, "unitElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('bottomAxis'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _e || Object)
], PlotComponent.prototype, "bottomAxisElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('leftAxis'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _f || Object)
], PlotComponent.prototype, "leftAxisElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('target'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _g || Object)
], PlotComponent.prototype, "targetElement", void 0);
PlotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-plot',
        template: __webpack_require__(234),
        styles: [__webpack_require__(224)]
    })
], PlotComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=plot.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 149;


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(58);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switch__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__t_test__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plot_options__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__t_test_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plot_options_plot_options_component__ = __webpack_require__(128);
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
        this.helpOpen = false;
        this.plotOptionsAvailable = false;
        this.selectedModelSet = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_4__t_test__["c" /* TTest */]({
            output: 'n', alpha: 0.05, power: 0.8, delta: 5, sigma: 10, n: 32
        });
        this.addModel(model, false);
    };
    AppComponent.prototype.toggleHelp = function () {
        this.helpOpen = !this.helpOpen;
    };
    AppComponent.prototype.closeHelp = function () {
        this.helpOpen = false;
    };
    AppComponent.prototype.togglePlotOptions = function () {
        this.plotOptionsChild.toggle();
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
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('plotOptionsChild'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__plot_options_plot_options_component__["a" /* PlotOptionsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__plot_options_plot_options_component__["a" /* PlotOptionsComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "plotOptionsChild", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('tabsetChild'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbTabset */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbTabset */]) === "function" && _b || Object)
], AppComponent.prototype, "tabsetChild", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(229),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__t_test_service__["a" /* TTestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__t_test_service__["a" /* TTestService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__t_test_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__start_start_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__range_slider_range_slider_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__t_test_t_test_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__output_pane_output_pane_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__help_help_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__plot_options_plot_options_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__plot_plot_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bottom_plot_bottom_plot_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environments_environment__ = __webpack_require__(58);
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
            __WEBPACK_IMPORTED_MODULE_8__start_start_component__["a" /* StartComponent */],
            __WEBPACK_IMPORTED_MODULE_9__range_slider_range_slider_component__["a" /* RangeSliderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__range_slider_range_slider_component__["b" /* RangeSliderLabel */],
            __WEBPACK_IMPORTED_MODULE_10__t_test_t_test_component__["a" /* TTestComponent */],
            __WEBPACK_IMPORTED_MODULE_11__output_pane_output_pane_component__["a" /* OutputPaneComponent */],
            __WEBPACK_IMPORTED_MODULE_12__help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_13__plot_options_plot_options_component__["a" /* PlotOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__plot_plot_component__["a" /* PlotComponent */],
            __WEBPACK_IMPORTED_MODULE_15__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__t_test_service__["a" /* TTestService */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* APP_BASE_HREF */], useValue: __WEBPACK_IMPORTED_MODULE_16__environments_environment__["a" /* environment */].baseHref }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    HelpComponent.prototype.close = function () {
        this.onClose.emit();
    };
    return HelpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], HelpComponent.prototype, "onClose", void 0);
HelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-help',
        template: __webpack_require__(231),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);

//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plot_options__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bottom_plot_bottom_plot_component__ = __webpack_require__(127);
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
    function OutputPaneComponent() {
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], OutputPaneComponent.prototype, "selectedModelSet", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__plot_options__["a" /* PlotOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__plot_options__["a" /* PlotOptions */]) === "function" && _b || Object)
], OutputPaneComponent.prototype, "plotOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('topLeft'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__["a" /* PlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__["a" /* PlotComponent */]) === "function" && _c || Object)
], OutputPaneComponent.prototype, "topLeftPlot", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('topRight'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__["a" /* PlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__plot_plot_component__["a" /* PlotComponent */]) === "function" && _d || Object)
], OutputPaneComponent.prototype, "topRightPlot", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('bottom'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__bottom_plot_bottom_plot_component__["a" /* BottomPlotComponent */]) === "function" && _e || Object)
], OutputPaneComponent.prototype, "bottomPlot", void 0);
OutputPaneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-output-pane',
        template: __webpack_require__(232),
        styles: [__webpack_require__(222)]
    })
], OutputPaneComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=output-pane.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RangeSliderLabel; });
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

var RangeSliderComponent = RangeSliderComponent_1 = (function () {
    function RangeSliderComponent() {
        this.step = 0.01;
        this.isOutput = false;
    }
    RangeSliderComponent.prototype.ngOnInit = function () {
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
        this.value = parseFloat(newValue);
        this.propagateChange();
    };
    RangeSliderComponent.prototype.rangeInput = function (newValue) {
        this.value = parseFloat(newValue);
    };
    RangeSliderComponent.prototype.numberChanged = function (newValue) {
        this.value = parseFloat(newValue);
        this.propagateChange();
    };
    RangeSliderComponent.prototype.numberInput = function (newValue) {
        this.value = parseFloat(newValue);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], RangeSliderComponent.prototype, "hardMin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], RangeSliderComponent.prototype, "hardMax", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], RangeSliderComponent.prototype, "isOutput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ContentChild */])(RangeSliderLabel),
    __metadata("design:type", RangeSliderLabel)
], RangeSliderComponent.prototype, "labelTpl", void 0);
RangeSliderComponent = RangeSliderComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-range-slider',
        template: __webpack_require__(235),
        styles: [__webpack_require__(225)],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* forwardRef */])(function () { return RangeSliderComponent_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], RangeSliderComponent);

var _a, RangeSliderComponent_1;
//# sourceMappingURL=range-slider.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__changeable__ = __webpack_require__(56);
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
    Range.fromData = function (indices, data) {
        var minIndex = 0, maxIndex = data.length - 1;
        if (indices[0] > minIndex) {
            minIndex = indices[0];
        }
        if (indices[1] < maxIndex) {
            maxIndex = indices[1];
        }
        var values = [data[minIndex], data[maxIndex]].sort(function (a, b) { return a - b; });
        values[0] = Math.floor(values[0] * 100) / 100;
        values[1] = Math.ceil(values[1] * 100) / 100;
        return new Range(values[0], values[1]);
    };
    Range.prototype.toArray = function () {
        return ([this.min, this.max]);
    };
    Range.prototype.findIndices = function (data) {
        var minIndex = -1, maxIndex = -1;
        for (var i = 0; i < data.length; i++) {
            if (data[i] >= this.min) {
                minIndex = i;
                break;
            }
        }
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i] <= this.max) {
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__t_test__ = __webpack_require__(23);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], StartComponent.prototype, "onCalculate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], StartComponent.prototype, "onToggleHelp", void 0);
StartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-start',
        template: __webpack_require__(236),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [])
], StartComponent);

var _a;
//# sourceMappingURL=start.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__t_test__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__t_test_service__ = __webpack_require__(57);
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
        this.onToggleHelp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
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
    TTestComponent.prototype.toggleAlternates = function () {
        this.model.showAlternates = !this.model.showAlternates;
    };
    TTestComponent.prototype.toggleHelp = function () {
        this.onToggleHelp.emit();
    };
    TTestComponent.prototype.calculateSliderRange = function (name) {
        var value = this.model[name];
        var range = [value * 0.5, value * 1.5].sort(function (a, b) { return a - b; });
        this.min[name] = range[0];
        this.max[name] = range[1];
    };
    TTestComponent.prototype.modelChanged = function (changes) {
        var keys = Object.keys(changes);
        if (keys.length > 1 || (keys[0] != "showAlternates" && keys[0] != this.model.output)) {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], TTestComponent.prototype, "onToggleHelp", void 0);
TTestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-t-test',
        template: __webpack_require__(237),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__t_test_service__["a" /* TTestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__t_test_service__["a" /* TTestService */]) === "function" && _b || Object])
], TTestComponent);

var _a, _b;
//# sourceMappingURL=t-test.component.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "#app {\n  height: 95vh;\n}\n\n#header {\n  line-height: 2em;\n  height: 2em;\n}\n#header img {\n  vertical-align: text-bottom;\n}\n#header {\n  font-size: 150%;\n}\n#header img {\n  height: 1em;\n}\n\n#main {\n  min-height: 85vh;\n}\n\n#sidebar {\n  background-color: #e5e5e5;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px;\n  position: relative;\n}\n\n#plot {\n  min-height: 100%;\n}\n\n#plot-options-button {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: large;\n  z-index: 99;\n}\n\n:host /deep/ a.nav-link {\n  border-color: #bbb #bbb #888;\n  background-color: #eee;\n}\n\n:host /deep/ a.nav-link:hover {\n  border-color: #888;\n  background-color: #f5f5f5;\n  color: #0275d8;\n}\n\n:host /deep/ a.nav-link.active {\n  border-color: #888 #888 #fff;\n}\n\n:host /deep/ a.nav-link.active:hover {\n  background-color: #fff;\n  color: #464a4c;\n}\n\n:host /deep/ ul.nav-tabs {\n  border-bottom: 1px solid #888;\n}\n\n:host /deep/ .tab-pane {\n  padding: 10px;\n  border: 1px solid #888;\n  border-top: 0;\n}\n\n:host /deep/ .tab-pane.active {\n  background: white;\n}\n\n#footer {\n  margin: 10px;\n  padding: 10px;\n  text-align: center;\n}\n#footer img {\n  margin: auto;\n  display: block;\n}\n#footer div.text {\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "svg /deep/ text.axis-label {\n}\n\nsvg /deep/ text.title {\n  font-weight: bold;\n}\n\nsvg /deep/ path.line {\n  stroke: steelblue;\n  stroke-width: 1;\n  fill: none;\n}\n\nsvg /deep/ path.alt-line {\n  stroke: lightblue;\n  stroke-width: 1;\n  fill: none;\n}\n\nsvg /deep/ path.pspace-line {\n  stroke: maroon;\n  stroke-width: 1;\n  fill: none;\n}\n\nsvg /deep/ path.dist-area {\n  fill: #ffcdc8;\n  stroke: none;\n}\n\nsvg /deep/ path.ab-line {\n  stroke: black;\n  stroke-width: 0.25;\n  stroke-dasharray: 5, 5;\n  fill: none;\n}\n\nsvg /deep/ path.drop-line {\n  stroke: red;\n  stroke-width: 0.5;\n  stroke-dasharray: 5, 5;\n  fill: none;\n}\n\nsvg /deep/ circle.target {\n  fill: red;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\nsvg /deep/ circle.pspace-center {\n  fill: darkseagreen;\n}\n\nsvg /deep/ circle.pspace-target {\n  fill: maroon;\n}\n\nsvg /deep/ g.focus rect,\nsvg /deep/ g.target-info rect {\n  stroke: black;\n  stroke-width: 1;\n  fill: white;\n  fill-opacity: 0.8;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  left: 10px;\n  top: 0;\n  width: 40%;\n  z-index: 100;\n  background: white;\n  border: 1px solid black;\n  border-radius: 5px;\n  box-shadow: 3px 3px 2px #aaa;\n}\n\n.header {\n  font-size: larger;\n  font-weight: bold;\n  background-color: #eee;\n  border-bottom: 1px solid #ccc;\n  padding: 5px;\n  border-radius: 5px 5px 0 0;\n}\n.close {\n  float: right;\n  margin: 5px;\n}\n\n.content {\n  overflow: auto;\n  height: 50vh;\n  padding: 10px;\n  margin: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".plot {\n  height: 80%;\n  /*min-height: 500px;*/\n  position: relative;\n}\n.without-text {\n  height: 100%;\n}\n\ndiv.show-text {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n}\n\n.plot /deep/ svg.top-left {\n  position: absolute;\n  left: 0;\n  width: 50%;\n  height: 70%;\n}\n.plot.without-text /deep/ svg.top-left {\n  height: 68%;\n}\n.plot /deep/ svg.top-right {\n  position: absolute;\n  right: 0;\n  width: 50%;\n  height: 70%;\n}\n.plot.without-text /deep/ svg.top-right {\n  height: 68%;\n}\n.plot /deep/ svg.bottom {\n  position: absolute;\n  top: 70%;\n  height: 30%;\n  width: 100%;\n}\n.plot.without-text /deep/ svg.bottom {\n  top: 68%;\n  height: 28%;\n}\n\n.output-text {\n  position: relative;\n  background-color: #e5e5e5;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  padding: 10px 20px;\n  text-align: justify;\n  overflow: auto;\n  margin-top: 5px;\n}\n.hide-text {\n  position: absolute;\n  top: 0;\n  right: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".plot-options {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 20px;\n  width: 75%;\n  z-index: 100;\n  background-color: white;\n  border: 1px solid #888;\n  border-radius: 10px;\n  box-shadow: 5px 5px 25px #888;\n}\n\n.plot-options .header {\n  font-size: larger;\n  font-weight: bold;\n  background-color: #e5e5e5;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 10px 10px 0 0;\n}\n\n.plot-options .close {\n  float: right;\n  margin: 5px;\n}\n\n.plot-options .content {\n  overflow: auto;\n  height: 50vh;\n  padding: 5px;\n  margin: 0 5px;\n}\n\n.plot-options fieldset {\n  border: 1px solid #bbb;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px;\n}\n\n.plot-options fieldset legend {\n  font-size: inherit;\n  font-weight: bold;\n  display: table;\n  width: auto;\n}\n\n.plot-options .form-group {\n  padding: 0 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "div.slider-group {\n  padding: 5px;\n  border-radius: 5px;\n}\n\ndiv.slider-group.output {\n  background-color: #d8ecf3;\n}\n\ndiv.slider-group .label span {\n  font-weight: bold;\n}\n\ndiv.slider-group .slider,\ndiv.slider-group .number {\n  padding-top: 2ex;\n}\n\ndiv.slider-group div.inputs input {\n  width: 100%;\n}\n\ndiv.slider-group div.slider {\n  position: relative;\n  padding-left: 0;\n  padding-right: 0;\n}\n\ndiv.slider-group div.slider input {\n  display: block;\n}\n\ndiv.slider-group div.slider div.min,\ndiv.slider-group div.slider div.max {\n  position: absolute;\n  font-size: x-small;\n  top: 0;\n  background-color: #ddd;\n  border-radius: 1ex;\n  padding: 0.5ex;\n}\n\ndiv.slider-group.output div.slider div.min,\ndiv.slider-group.output div.slider div.max {\n  background-color: #ccc;\n}\n\ndiv.slider-group div.slider div.min {\n  left: 0;\n}\n\ndiv.slider-group div.slider div.max {\n  right: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".overview {\n  text-align: right;\n}\n\n.btn-secondary {\n  padding: 0.3rem 0.3rem;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; /* red */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".overview {\n  text-align: right;\n}\n\n.btn-secondary {\n  padding: 0.3rem 0.3rem;\n}\n\ndiv.slider-group {\n  padding: 5px;\n  border-radius: 5px;\n}\n\ndiv.slider-group.output {\n  background-color: #d8ecf3;\n}\n\ndiv.slider-group .label span {\n  font-weight: bold;\n}\n\ndiv.slider-group .slider,\ndiv.slider-group .number {\n  padding-top: 2ex;\n}\n\ndiv.slider-group div.inputs input {\n  width: 100%;\n}\n\ndiv.slider-group div.slider {\n  position: relative;\n  padding-left: 0;\n  padding-right: 0;\n}\n\ndiv.slider-group div.slider input {\n  display: block;\n}\n\ndiv.slider-group div.slider div.min,\ndiv.slider-group div.slider div.max {\n  position: absolute;\n  font-size: x-small;\n  top: 0;\n  background-color: #ddd;\n  border-radius: 1ex;\n  padding: 0.5ex;\n}\n\ndiv.slider-group.output div.slider div.min,\ndiv.slider-group.output div.slider div.max {\n  background-color: #ccc;\n}\n\ndiv.slider-group div.slider div.min {\n  left: 0;\n}\n\ndiv.slider-group div.slider div.max {\n  right: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"container-fluid\">\n  <div id=\"header\">\n    <img src=\"assets/ps.jpg\">\n    Power and Sample Size\n  </div>\n\n  <div id=\"main\" class=\"row\">\n    <div class=\"col-sm-4\">\n      <div id=\"sidebar\">\n        <ngb-tabset #tabsetChild (tabChange)=\"onTabChange($event)\">\n          <ngb-tab title=\"Start\" id=\"start\">\n            <template ngbTabContent>\n              <app-start [model]=\"newModel\"\n                (onCalculate)=\"calculate()\"\n                (onToggleHelp)=\"toggleHelp()\">\n              </app-start>\n            </template>\n          </ngb-tab>\n          <ngb-tab *ngFor=\"let modelSet of modelSets; let i = index\"\n            title=\"Test {{i+1}}\" id=\"test-{{i+1}}\">\n            <template ngbTabContent>\n              <app-t-test [modelSet]=\"modelSet\" (onToggleHelp)=\"toggleHelp()\">\n              </app-t-test>\n            </template>\n          </ngb-tab>\n        </ngb-tabset>\n      </div>\n      <app-plot-options #plotOptionsChild\n        [selectedModelSet]=\"selectedModelSet\"\n        [plotOptions]=\"plotOptions\">\n      </app-plot-options>\n\n      <div id=\"footer\">\n        <img src=\"assets/vumc.jpg\">\n        <div class=\"text\">Department of Biostatistics</div>\n      </div>\n    </div>\n    <div id=\"right-panel\" class=\"col-sm-8\">\n      <app-help *ngIf=\"helpOpen\" (onClose)=\"closeHelp()\"></app-help>\n      <button id=\"plot-options-button\" class=\"btn btn-secondary\"\n        (click)=\"togglePlotOptions()\" *ngIf=\"plotOptionsAvailable\">\n        <i class=\"fa fa-cog\"></i>\n      </button>\n      <app-output-pane\n        [selectedModelSet]=\"selectedModelSet\"\n        [plotOptions]=\"plotOptions\">\n      </app-output-pane>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changeable__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range__ = __webpack_require__(163);
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




var TTest = (function (_super) {
    __extends(TTest, _super);
    function TTest(attribs) {
        var _this = _super.call(this) || this;
        _this.showAlternates = false;
        if (attribs) {
            _this.update(attribs, false);
        }
        return _this;
    }
    TTest.prototype.round = function () {
        var attribs = this.attributes();
        attribs.alpha = Math.round(attribs.alpha * 100) / 100;
        attribs.sigma = Math.round(attribs.sigma * 100) / 100;
        attribs.delta = Math.round(attribs.delta * 100) / 100;
        attribs.power = Math.round(attribs.power * 100) / 100;
        attribs.n = Math.ceil(attribs.n);
        return new TTest(attribs);
    };
    TTest.prototype.update = function (attribs, emit) {
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
        if (attribs.showAlternates !== undefined) {
            this.showAlternates = attribs.showAlternates;
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
        return (result);
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
    __metadata("design:type", Object)
], TTest.prototype, "showAlternates", void 0);
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
        switch (this.model.output) {
            case "n":
                values = [this.model.n * 0.5, this.model.n * 1.5].sort(function (a, b) { return a - b; });
                min = Math.floor(values[0] * 100) / 100;
                max = Math.ceil(values[1] * 100) / 100;
                n = new __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */](min, max);
                indices = n.findIndices(this.data.n);
                if (skip != 'power') {
                    power = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromData(indices, this.data.power[0]);
                }
                if (skip != 'delta') {
                    delta = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromData(indices, this.data.delta[0]);
                }
                break;
            case "power":
                power = new __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */](0, 1.0);
                indices = power.findIndices(this.data.power);
                if (skip != 'n') {
                    n = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromData(indices, this.data.n[0]);
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
                indices = delta.findIndices(this.data.delta);
                if (skip != 'n') {
                    n = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromData(indices, this.data.n[0]);
                }
                if (skip != 'power') {
                    power = __WEBPACK_IMPORTED_MODULE_3__range__["a" /* Range */].fromData(indices, this.data.power[0]);
                }
                break;
        }
        // parameter space
        min = -deltaMax;
        max = deltaMax;
        if (this.data.precision[0] < min) {
            min = this.data.precision[0] - Math.abs(this.data.precision[0] * 0.5);
        }
        if (this.data.precision[1] > max) {
            max = this.data.precision[1] + Math.abs(this.data.precision[1] * 0.5);
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

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<svg #plot\n  [style.fontFamily]=\"plotOptions.fontFamily == '' ? null : plotOptions.fontFamily\"\n  [style.fontSize]=\"(plotOptions.fontSize * 110).toString() + '%'\"\n  [attr.class]=\"name\" (window:resize)=\"onResize()\">\n\n  <rect #unit x=\"0\" y=\"0\" width=\"1em\" height=\"1em\" stroke=\"none\" fill=\"none\" />\n  <ng-template [ngIf]=\"pSpace && precision && sampDist && modelSet\">\n    <defs>\n      <clipPath [id]=\"clipPathId\">\n        <rect x=\"0\" y=\"0\" [attr.width]=\"width\" [attr.height]=\"height\" />\n      </clipPath>\n    </defs>\n\n    <text text-anchor=\"middle\"\n      [attr.x]=\"width / 2 + margin\" [attr.y]=\"height + margin\" dy=\"2.5em\">\n      Parameter Space\n    </text>\n    <text text-anchor=\"middle\" font-weight=\"bold\"\n      [attr.x]=\"width / 2 + margin\" y=\"0\" dy=\"2em\">\n      Precision vs. Effect Size\n    </text>\n\n    <g [attr.transform]=\"translate(margin, margin)\">\n      <path [attr.clip-path]=\"clipPath()\" [attr.d]=\"sampDistPath\"\n        fill=\"#ffcdc8\" stroke=\"none\" />\n    </g>\n\n    <g *ngFor=\"let path of paths\" [attr.transform]=\"translate(margin, margin)\">\n      <path\n        [attr.clip-path]=\"clipPath()\"\n        [attr.d]=\"path\"\n        stroke=\"maroon\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\" />\n    </g>\n\n    <circle r=\"5\"\n      [attr.cx]=\"xScale(0)\"\n      [attr.cy]=\"yScale(0.5)\"\n      [attr.clip-path]=\"clipPath()\"\n      [attr.transform]=\"translate(margin, margin)\"\n      fill=\"darkseagreen\" />\n\n    <circle r=\"5\"\n      [attr.cx]=\"xScale(precision.target)\"\n      [attr.cy]=\"yScale(0.5)\"\n      [attr.clip-path]=\"clipPath()\"\n      [attr.transform]=\"translate(margin, margin)\"\n      fill=\"maroon\" />\n\n    <g #bottomAxis [attr.transform]=\"translate(margin, height + margin)\"></g>\n  </ng-template>\n</svg>\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  t-test Overview\n  <button type=\"button\" class=\"close fa fa-times-circle\" (click)=\"close()\"></button>\n</div>\n<div class=\"content\">\n  <p>\n    Continuous Response Measures in Two Groups -- Paired and independent t-tests:\n    The approach of <a href=\"#ref3\">Dupont and Plummer (1990)</a> is used for\n    paired and independent samples.  The ratio of number of patients in the\n    samples being compared may be specified by the user.  This method produces\n    results that are in close agreement with those of\n    <a href=\"#ref6\">Pearson and Hartley (1970)</a>.\n  </p>\n\n  <p>\n    Each null hypothesis is tested with respect to a two-sided alternative\n    hypothesis.\n  </p>\n\n  <h4>Output</h4>\n\n  <h5>Sample size</h5>\n  <p>\n    For independent t-tests this is the number of experimental patients\n    that must be studied to detect a true difference in population means\n    &delta; with Type I error probability &alpha; given a standard\n    deviation &sigma; and <i>m</i> controls per experimental patient.  For\n    paired t-tests it is the number of pairs of patients needed to detect a\n    true difference in population means &delta; with Type I error\n    probability &alpha; given a standard deviation &sigma;.\n  </p>\n\n  <h5>Power</h5>\n  <p>\n    For independent studies it is the probability of rejecting the null\n    hypothesis with Type I error probability &alpha; given the specified\n    sample size, a standard deviation &sigma; and a control/experimental\n    patient ratio <i>m</i> when the true difference in population means is\n    &delta;.  For paired studies it is the probability of rejecting the\n    null hypothesis with Type I error probability &alpha; given the\n    specified sample size, a standard deviation &sigma; when the true\n    difference in population means is &delta;.\n  </p>\n\n  <h5>Detectable alternative</h5>\n  <p>\n    A difference in population means that can be detected with the\n    specified power and Type I error probability &alpha; given a standard\n    deviation &sigma;, and the specified sample size.\n  </p>\n\n  <h4>Input</h4>\n\n  <h5>Type I error (&alpha;)</h5>\n  <p>\n    The Type I error probability for a two sided test.  This is the probability\n    that we will falsely reject the null hypothesis.\n  </p>\n\n  <h5>Sample size (<em>n</em>)</h5>\n  <p>\n    For independent t-tests <em>n</em> is the number of experimental subjects.  For\n    pair test <em>n</em> is the number of pairs.\n  </p>\n\n  <h5>Power</h5>\n  <p>\n    For independent tests <i>power</i> is probability of correctly rejecting the\n    null hypothesis of equal population means given <i>n</i> experimental\n    patients, <i>m</i> control patients per experimental patient,  a Type I error\n    probability &alpha; and a true difference in population means of &delta;.\n    For paired tests it is the probability of correctly rejecting the null\n    hypothesis of equal population means given <i>n</i> pairs of patients, a Type\n    I error probability &alpha; and a true difference in population means of\n    &delta;.\n  </p>\n\n  <h5>Difference in population means (&delta;)</h5>\n\n  <h5>Standard deviation (&sigma;)</h5>\n  <p>\n    For independent tests &sigma; is the within group standard deviation.  For\n    paired designs it is the standard deviation of difference in the response of\n    matched pairs.\n  </p>\n\n  <h5>Ratio (<i>m</i>)</h5>\n  <p>\n    For independent tests <i>m</i> is the ratio of control to experimental\n    patients.  <i>m</i> is not defined for paired studies.\n  </p>\n\n  <h4>References</h4>\n  <ol>\n    <li><a name=\"ref1\"></a>Casagrande JT, Pike MC, Smith PG:  \"An Improved Approximate Formula for Calculating Sample Sizes for Comparing Two Binomial Distributions\", Biometrics, 1978; 34:483-486.</li>\n    <li><a name=\"ref2\"></a>Dupont, WD: \"Power Calculations for Matched Case-Control Studies\", Biometrics, 1988; 44:1157-1168.</li>\n    <li><a name=\"ref3\"></a>Dupont WD, Plummer WD: \"Power and Sample Size Calculations: A Review and Computer Program\", Controlled Clinical Trials 1990; 11:116-28.</li>\n    <li><a name=\"ref4\"></a>Dupont WD, Plummer WD:  \"Power and Sample Size Calculations for Studies Involving Linear Regression\", Controlled Clinical Trials 1998; 19:589-601.</li>\n    <li><a name=\"ref5\"></a>Fleiss JL:  \"Statistical Methods for Rates and Proportions\" 2nd Ed. NewYork: John Wiley, 1981:38-46.</li>\n    <li><a name=\"ref6\"></a>Pearson ES and Hartley HO: \"Biometrika Tables for Statisticians Vol I\", 3rd Ed., Cambridge:  Cambridge U. Press, 1970.</li>\n    <li><a name=\"ref7\"></a>Schlesselman:  Case-control Studies: Design, Conduct, Analysis. New York: Oxford U. Press; 1982:144-152.</li>\n    <li><a name=\"ref8\"></a>Schoenfeld DA, Richter JR: \"Nomograms for Calculating the Number of Patients Needed for a Clinical Trial With Survival as an Endpoint\" Biometrics 1982; 38:163-170.</li>\n    <li><a name=\"ref9\"></a>Wittes J, Wallenstein S:  \"The Power of the Mantel-Haenszel Test\" J Am Stat Assoc, 1987; 82:1104-1109.</li>\n    <li><a name=\"ref10\"></a>Visual Components Sybase Inc.  First Impression Active X User's Guide: High Performance Software for Charting Data for Microsoft Visual Basic, Visual C++, and Other Languages. Version 5.0.  Overland Park, KS: Visual Components Sybase Inc.</li>\n    <li><a name=\"ref11\"></a>Mantel, N., &amp; Haenszel, W. (1959) Statistical aspects of the analysis of data from retrospective studies of disease. Journal of the National Cancer Institute, 22, 719-748.</li>\n    <li><a name=\"ref12\"></a>Dupont, WD (2008). Statistical Modeling for Biomedical Researchers, 2nd Edition. Cambridge, U.K.: Cambridge University Press.</li>\n    <li><a name=\"ref13\"></a>Dupont WD and Plummer WD: PS power and sample size program available for free on the Internet.  Controlled Clin Trials,1997;18:274</li>\n  </ol>\n</div>\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div class=\"plot\" [class.without-text]=\"!showText\">\n  <app-plot #topLeft name=\"top-left\" [modelSet]=\"modelSet\" [plotOptions]=\"plotOptions\">\n  </app-plot>\n  <app-plot #topRight name=\"top-right\" [modelSet]=\"modelSet\" [plotOptions]=\"plotOptions\">\n  </app-plot>\n  <app-bottom-plot #bottom name=\"bottom\" [modelSet]=\"modelSet\" [plotOptions]=\"plotOptions\">\n  </app-bottom-plot>\n  <div class=\"show-text\" *ngIf=\"modelSet && !showText\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleText(true)\">\n      <i class=\"fa fa-envelope-open-o\" aria-hidden=\"true\"></i>\n      Interpretation\n    </button>\n  </div>\n</div>\n<div class=\"output-text\" *ngIf=\"modelSet && showText\">\n  <div *ngIf=\"showText\" class=\"hide-text\">\n    <i class=\"fa fa-times-circle\" (click)=\"toggleText(false)\"></i>\n  </div>\n  <ng-template [ngIf]=\"modelSet.model.output == 'n'\">\n    We are planning a study of a continuous response variable from matched\n    pairs of study subjects. Prior data indicate that the difference in the\n    response of matched pairs is normally distributed with standard deviation\n    {{round(modelSet.model.sigma)}}. If the true difference in the mean response of\n    matched pairs is {{round(modelSet.model.delta)}}, we will need to study\n    {{ceil(modelSet.model.n)}} pairs of subjects to be able to reject the null\n    hypothesis that this response difference is zero with probability (power)\n    {{round(modelSet.model.power)}}. The Type I error probability associated with this\n    test of this null hypothesis is {{round(modelSet.model.alpha)}}.\n  </ng-template>\n  <ng-template [ngIf]=\"modelSet.model.output == 'power'\">\n    We are planning a study with {{ceil(modelSet.model.n)}} pairs of subjects. Prior\n    data indicate that the difference in the response of matched pairs is\n    normally distributed with standard deviation {{round(modelSet.model.sigma)}}. If\n    the true difference in the mean response of matched pairs is\n    {{round(modelSet.model.delta)}}, we will be able to reject the null hypothesis\n    that this response difference is zero with probability (power)\n    {{round(modelSet.model.power)}}. The Type I error probability associated with this\n    test of this null hypothesis is {{round(modelSet.model.alpha)}}.\n  </ng-template>\n  <ng-template [ngIf]=\"modelSet.model.output == 'delta'\">\n    We are planning a study with {{ceil(modelSet.model.n)}} pairs of subjects. Prior\n    data indicate that the difference in the response of matched pairs is\n    normally distributed with standard deviation {{round(modelSet.model.sigma)}}. We\n    will be able to detect a true difference in the mean response of matched\n    pairs of -{{round(modelSet.model.delta)}} or {{round(modelSet.model.delta)}} with\n    probability (power) {{round(modelSet.model.power)}}. The Type I error probability\n    associated with this test of the null hypothesis that this response\n    difference is zero is {{round(modelSet.model.alpha)}}.\n  </ng-template>\n</div>\n"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<div class=\"plot-options\" *ngIf=\"enabled\">\n  <div class=\"header\">\n    Plot options\n    <button type=\"button\" class=\"close fa fa-times-circle\" (click)=\"close()\"></button>\n  </div>\n  <div *ngIf=\"plotOptions && modelSet\" class=\"content\">\n    <fieldset>\n      <legend>Global</legend>\n      <div class=\"form-group\">\n        <label for=\"plot-font-family\">Font family</label>\n        <select id=\"plot-font-family\" class=\"form-control\"\n          [(ngModel)]=\"plotOptions.fontFamily\">\n          <option value=\"\">Default</option>\n          <option value=\"serif\">Serif</option>\n          <option value=\"sans\">Sans-serif</option>\n          <option value=\"monospace\">Monospace</option>\n          <option>Bungee Shade</option>\n          <option>Sancreek</option>\n        </select>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <label for=\"plot-font-size\">Font size: {{plotOptions.fontSize}}</label>\n          <div class=\"input-group\">\n            <input id=\"plot-font-size\" class=\"form-control\"\n              type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n              [(ngModel)]=\"plotOptions.fontSize\" />\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <label for=\"plot-axis-font-size\">Axis font size: {{plotOptions.axisFontSize}}</label>\n          <div class=\"input-group\">\n            <input id=\"plot-axis-font-size\" class=\"form-control\"\n              type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n              [(ngModel)]=\"plotOptions.axisFontSize\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <label for=\"plot-line-width\">Line width: {{plotOptions.lineWidth}}</label>\n          <div class=\"input-group\">\n            <input id=\"plot-line-width\" class=\"form-control\"\n              type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n              [(ngModel)]=\"plotOptions.lineWidth\" />\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <label for=\"plot-axis-line-width\">Axis line width: {{plotOptions.axisLineWidth}}</label>\n          <div class=\"input-group\">\n            <input id=\"plot-axis-line-width\" class=\"form-control\"\n              type=\"range\" min=\"0.1\" max=\"2\" step=\"0.1\"\n              [(ngModel)]=\"plotOptions.axisLineWidth\" />\n          </div>\n        </div>\n      </div>\n    </fieldset>\n    <fieldset>\n      <legend *ngIf=\"modelSet.model.output == 'n'\">Sample Size</legend>\n      <legend *ngIf=\"modelSet.model.output == 'power'\">Power</legend>\n      <legend *ngIf=\"modelSet.model.output == 'delta'\">Detectable Alternative</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-top-y-min\">Minimum</label>\n          <div class=\"input-group\">\n            <ng-template [ngIf]=\"modelSet.model.output == 'n'\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.n.max - 1)\"\n                [(ngModel)]=\"modelSet.ranges.n.min\" />\n            </ng-template>\n            <ng-template [ngIf]=\"modelSet.model.output == 'power'\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.power.max - 0.01)\"\n                [(ngModel)]=\"modelSet.ranges.power.min\" />\n            </ng-template>\n            <ng-template [ngIf]=\"modelSet.model.output == 'delta'\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.delta.max - 1)\"\n                [(ngModel)]=\"modelSet.ranges.delta.min\" />\n            </ng-template>\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-top-y-max\">Maximum</label>\n          <div class=\"input-group\">\n            <ng-template [ngIf]=\"modelSet.model.output == 'n'\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.n.min + 1)\"\n                [(ngModel)]=\"modelSet.ranges.n.max\" />\n            </ng-template>\n            <ng-template [ngIf]=\"modelSet.model.output == 'power'\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.power.min + 0.01)\"\n                [(ngModel)]=\"modelSet.ranges.power.max\" />\n            </ng-template>\n            <ng-template [ngIf]=\"modelSet.model.output == 'delta'\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.delta.min + 1)\"\n                [(ngModel)]=\"modelSet.ranges.delta.max\" />\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n    <fieldset>\n      <ng-template [ngIf]=\"modelSet.model.output == 'n'\">\n        <legend>Sample Size vs. Power</legend>\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.power.max - 0.01)\"\n                [(ngModel)]=\"modelSet.ranges.power.min\" />\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.power.min + 0.01)\"\n                [(ngModel)]=\"modelSet.ranges.power.max\" />\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"modelSet.model.output == 'power'\">\n        <legend>Power vs. Sample Size</legend>\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.n.max - 1)\"\n                [(ngModel)]=\"modelSet.ranges.n.min\" />\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.n.min + 1)\"\n                [(ngModel)]=\"modelSet.ranges.n.max\" />\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"modelSet.model.output == 'delta'\">\n        <legend>Detectable Alternative vs. Sample Size</legend>\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.n.max - 1)\"\n                [(ngModel)]=\"modelSet.ranges.n.min\" />\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.n.min + 1)\"\n                [(ngModel)]=\"modelSet.ranges.n.max\" />\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </fieldset>\n    <fieldset>\n      <ng-template [ngIf]=\"modelSet.model.output == 'n'\">\n        <legend>Sample Size vs. Detectable Alternative</legend>\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-right-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.delta.max - 1)\"\n                [(ngModel)]=\"modelSet.ranges.delta.min\" />\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-right-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.delta.min - 1)\"\n                [(ngModel)]=\"modelSet.ranges.delta.max\" />\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"modelSet.model.output == 'power'\">\n        <legend>Power vs. Detectable Alternative</legend>\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-right-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.delta.max - 1)\"\n                [(ngModel)]=\"modelSet.ranges.delta.min\" />\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-right-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.delta.min - 1)\"\n                [(ngModel)]=\"modelSet.ranges.delta.max\" />\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"modelSet.model.output == 'delta'\">\n        <legend>Detectable Alternative vs. Power</legend>\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-min\">X minimum</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.power.max - 0.01)\"\n                [(ngModel)]=\"modelSet.ranges.power.min\" />\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <label for=\"plot-top-left-x-max\">X maximum</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\"\n                type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.power.min + 0.01)\"\n                [(ngModel)]=\"modelSet.ranges.power.max\" />\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </fieldset>\n    <fieldset>\n      <legend>Precision vs. Parameter Space</legend>\n      <div class=\"row\">\n        <div class=\"col-sm\">\n          <label for=\"plot-bottom-x-min\">X minimum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [max]=\"roundFloor(modelSet.ranges.pSpace.max - 1)\"\n              [(ngModel)]=\"modelSet.ranges.pSpace.min\" />\n          </div>\n        </div>\n        <div class=\"col-sm\">\n          <label for=\"plot-bottom-x-max\">X maximum</label>\n          <div class=\"input-group\">\n            <input class=\"form-control\"\n              type=\"number\" step=\"0.01\" [min]=\"roundCeil(modelSet.ranges.pSpace.min + 1)\"\n              [(ngModel)]=\"modelSet.ranges.pSpace.max\" />\n          </div>\n        </div>\n      </div>\n    </fieldset>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">\n      Reset all settings\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<svg #plot\n  [style.fontFamily]=\"plotOptions.fontFamily == '' ? null : plotOptions.fontFamily\"\n  [style.fontSize]=\"(plotOptions.fontSize * 110).toString() + '%'\"\n  [attr.class]=\"name\" (window:resize)=\"onResize()\">\n\n  <rect #unit x=\"0\" y=\"0\" width=\"1em\" height=\"1em\" stroke=\"none\" fill=\"none\" />\n  <ng-template [ngIf]=\"x && y && modelSet\">\n    <defs>\n      <clipPath [id]=\"mainClipPathId\">\n        <rect x=\"0\" [attr.y]=\"-plotOptions.lineWidth * 3\"\n          [attr.width]=\"width\"\n          [attr.height]=\"height + plotOptions.lineWidth * 3\" />\n      </clipPath>\n      <clipPath [id]=\"targetClipPathId\">\n        <rect x=\"-5\" [attr.y]=\"-5\"\n          [attr.width]=\"width + 10\"\n          [attr.height]=\"height + 10\" />\n      </clipPath>\n    </defs>\n\n    <text text-anchor=\"middle\"\n      [attr.x]=\"width / 2 + margin\" [attr.y]=\"height + margin\" dy=\"2.5em\">\n      {{x.title}}\n    </text>\n    <text text-anchor=\"middle\"\n      [attr.dx]=\"-(height / 2 + margin)\" dy=\"1em\"\n      transform=\"rotate(-90)\">\n      {{y.title}}\n    </text>\n    <text text-anchor=\"middle\" font-weight=\"bold\"\n      [attr.x]=\"width / 2 + margin\" y=\"0\" dy=\"2em\">\n      {{y.title}} vs. {{x.title}}\n    </text>\n\n    <g [attr.transform]=\"translate(margin, margin)\">\n      <path\n        [attr.clip-path]=\"mainClipPath()\"\n        [attr.d]=\"paths[1]\"\n        stroke=\"lightblue\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        [style.display]=\"modelSet.model.showAlternates ? null : 'none'\"\n        fill=\"none\" />\n    </g>\n\n    <g [attr.transform]=\"translate(margin, margin)\">\n      <path\n        [attr.clip-path]=\"mainClipPath()\"\n        [attr.d]=\"paths[2]\"\n        stroke=\"lightblue\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        [style.display]=\"modelSet.model.showAlternates ? null : 'none'\"\n        fill=\"none\" />\n    </g>\n\n    <g [attr.transform]=\"translate(margin, margin)\">\n      <path\n        [attr.clip-path]=\"mainClipPath()\"\n        [attr.d]=\"paths[0]\"\n        stroke=\"steelblue\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3\"\n        fill=\"none\" />\n    </g>\n\n    <g *ngFor=\"let path of dropPaths\"\n      [attr.transform]=\"translate(margin, margin)\">\n      <path\n        [attr.clip-path]=\"mainClipPath()\"\n        [attr.d]=\"path\"\n        stroke=\"red\"\n        [attr.stroke-width]=\"plotOptions.lineWidth * 3 / 2\"\n        stroke-dasharray=\"5, 5\"\n        fill=\"none\" />\n    </g>\n\n    <g #bottomAxis [attr.transform]=\"translate(margin, height + margin)\"></g>\n    <g #leftAxis [attr.transform]=\"translate(margin, margin)\"></g>\n\n    <g *ngIf=\"showHoverInfo\"\n      [attr.transform]=\"translate(margin + hoverX, margin + hoverY)\">\n      <circle r=\"4\" fill=\"none\" stroke=\"blue\" />\n      <rect x=\"-3.5em\" [attr.y]=\"hoverInfoY()\" width=\"8em\" height=\"2.5em\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.8\" />\n      <text x=\"-2.5em\" [attr.y]=\"hoverInfoY()\">\n        <tspan dy=\"1em\" text-anchor=\"right\">{{x.sym}}:</tspan>\n        <tspan x=\"0em\" text-anchor=\"left\">{{hoverPoint.x}}</tspan>\n        <tspan x=\"-2.5em\" dy=\"1em\" text-anchor=\"right\">{{y.sym}}:</tspan>\n        <tspan x=\"0em\" text-anchor=\"left\">{{hoverPoint.y}}</tspan>\n      </text>\n    </g>\n\n    <rect [attr.transform]=\"translate(margin, margin)\"\n      [attr.width]=\"width\" [attr.height]=\"height\"\n      fill=\"none\" pointer-events=\"all\"\n      (mouseout)=\"toggleHoverInfo(false)\"\n      (mousemove)=\"hover($event)\" />\n\n    <g *ngIf=\"showTargetInfo\"\n      [attr.transform]=\"translate(margin + xScale(targetPoint.x), margin + yScale(targetPoint.y))\">\n      <rect x=\"0\" y=\"-3.5em\" width=\"8em\" height=\"2.5em\"\n        stroke=\"black\" stroke-width=\"1\" fill=\"white\" fill-opacity=\"0.8\" />\n      <text x=\"1em\" y=\"-3.5em\">\n        <tspan dy=\"1em\" text-anchor=\"right\">{{x.sym}}:</tspan>\n        <tspan x=\"3.5em\" text-anchor=\"left\">{{targetPoint.x}}</tspan>\n        <tspan x=\"1em\" dy=\"1em\" text-anchor=\"right\">{{y.sym}}:</tspan>\n        <tspan x=\"3.5em\" text-anchor=\"left\">{{targetPoint.y}}</tspan>\n      </text>\n    </g>\n\n    <circle #target r=\"5\"\n      [attr.cx]=\"xScale(targetPoint.x)\"\n      [attr.cy]=\"yScale(targetPoint.y)\"\n      [attr.transform]=\"translate(margin, margin)\"\n      [attr.clip-path]=\"targetClipPath()\"\n      fill=\"red\" cursor=\"grab\"\n      (mouseover)=\"toggleTargetInfo(true)\"\n      (mouseout)=\"toggleTargetInfo(false)\" />\n  </ng-template>\n</svg>\n"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-group\" [class.output]=\"isOutput\">\n  <div class=\"label\" *ngIf=\"label\">\n    {{label}}\n    <span *ngIf=\"isOutput\">(Output)</span>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"labelTpl?.templateRef\"></ng-template>\n  <div class=\"inputs row\">\n    <div class=\"col-sm-9\">\n      <div class=\"slider\">\n        <div class=\"min\">{{floor(min)}}</div>\n        <input #range name=\"{{name}}\" type=\"range\" step=\"{{step}}\"\n               min=\"{{min}}\" max=\"{{max}}\"\n               [value]=\"value\"\n               [disabled]=\"isOutput\"\n               (change)=\"rangeChanged(range.value)\"\n               (input)=\"rangeInput(range.value)\" />\n        <div class=\"max\">{{ceil(max)}}</div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"number\">\n        <input #number name=\"{{name}}\" type=\"number\" step=\"{{step}}\"\n               [min]=\"hardMin\" [max]=\"hardMax\" [value]=\"value\"\n               [disabled]=\"isOutput\"\n               (change)=\"numberChanged(number.value)\"\n               (input)=\"numberInput(number.value)\" />\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<div class=\"overview\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleHelp()\">\n    Overview <i class=\"fa fa-question-circle\"></i>\n  </button>\n</div>\n<form (ngSubmit)=\"onSubmit()\" #startForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"output\">\n      What do you want to know?\n      <button type=\"button\" class=\"btn btn-secondary fa fa-question-circle\"\n        (click)=\"toggleHelp()\"></button>\n    </label>\n    <select class=\"form-control\" id=\"output\"\n            required\n            [(ngModel)]=\"model.output\" name=\"output\">\n      <option></option>\n      <option value=\"n\">Sample size</option>\n      <option value=\"power\">Power</option>\n      <option value=\"delta\">Detectable alternative</option>\n    </select>\n  </div>\n  <!--\n  <div class=\"form-group\" *ngIf=\"model.output\">\n    <label for=\"design\">Paired or independent?</label>\n    <select class=\"form-control\" id=\"design\"\n            required\n            [(ngModel)]=\"model.design\" name=\"design\">\n      <option></option>\n      <option>Paired</option>\n      <option>Independent</option>\n    </select>\n  </div>\n  -->\n  <div *ngIf=\"model.output\">\n    <div class=\"form-group\">\n      <label for=\"alpha\">\n        Type I Error (&alpha;)\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"alphaHelp\" popoverTitle=\"Type I Error (&alpha;)\"\n          placement=\"right\" triggers=\"hover\"></i>\n      </label>\n      <ng-template #alphaHelp>\n        The Type I error probability for a two sided test. This is the\n        probability that we will falsely reject the null hypothesis.\n      </ng-template>\n      <input class=\"form-control\" id=\"alpha\"\n             type=\"number\" step=\"0.01\"\n             required\n             [(ngModel)]=\"model.alpha\" name=\"alpha\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"sigma\">\n        Standard deviation (&sigma;)\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"sigmaHelp\" popoverTitle=\"Standard deviation (&sigma;)\"\n          placement=\"right\" triggers=\"hover\"></i>\n      </label>\n      <ng-template #sigmaHelp>\n        For independent tests σ is the within group standard deviation. For\n        paired designs it is the standard deviation of difference in the\n        response of matched pairs.\n      </ng-template>\n      <input class=\"form-control\" id=\"sigma\"\n             type=\"number\" step=\"0.1\"\n             required\n             [(ngModel)]=\"model.sigma\" name=\"sigma\">\n    </div>\n    <div *ngIf=\"model.output != 'power'\" class=\"form-group\">\n      <label for=\"power\">\n        Power\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"powerHelp\" popoverTitle=\"Power\"\n          placement=\"right\" triggers=\"hover\"></i>\n      </label>\n      <ng-template #powerHelp>\n        For independent tests power is probability of correctly rejecting the\n        null hypothesis of equal population means given n experimental\n        patients, m control patients per experimental patient, a Type I error\n        probability α and a true difference in population means of δ. For\n        paired tests it is the probability of correctly rejecting the null\n        hypothesis of equal population means given n pairs of patients, a Type\n        I error probability α and a true difference in population means of δ.\n      </ng-template>\n      <input class=\"form-control\" id=\"power\"\n             type=\"number\" step=\"0.01\"\n             required\n             [(ngModel)]=\"model.power\" name=\"power\">\n    </div>\n    <div *ngIf=\"model.output != 'delta'\" class=\"form-group\">\n      <label for=\"delta\">Difference in population means (&delta;)</label>\n      <input class=\"form-control\" id=\"delta\"\n             type=\"number\" step=\"0.1\"\n             required\n             [(ngModel)]=\"model.delta\" name=\"delta\">\n    </div>\n    <div *ngIf=\"model.output != 'n'\" class=\"form-group\">\n      <label for=\"n\">\n        Sample size\n        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\n          [ngbPopover]=\"nHelp\" popoverTitle=\"Sample size\"\n          placement=\"right\" triggers=\"hover\"></i>\n      </label>\n      <ng-template #nHelp>\n        For independent t-tests n is the number of experimental subjects. For\n        pair test n is the number of pairs.\n      </ng-template>\n      <input class=\"form-control\" id=\"n\"\n             type=\"number\"\n             required\n             [(ngModel)]=\"model.n\" name=\"n\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\"\n            [disabled]=\"!startForm.form.valid\">\n      Calculate\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div class=\"overview\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleHelp()\">\n    Overview <i class=\"fa fa-question-circle\"></i>\n  </button>\n</div>\n<div class=\"form-group\">\n  <label>\n    Output\n    <select class=\"form-control\" name=\"output\"\n            [(ngModel)]=\"round.output\">\n      <option value=\"n\">Sample size</option>\n      <option value=\"power\">Power</option>\n      <option value=\"delta\">Detectable alternative</option>\n    </select>\n  </label>\n</div>\n\n<app-range-slider label=\"Type I Error (&alpha;)\"\n  [min]=\"min.alpha\" [max]=\"max.alpha\"\n  [hardMin]=\"min.alpha\" [hardMax]=\"max.alpha\"\n  [(ngModel)]=\"round.alpha\">\n</app-range-slider>\n\n<app-range-slider\n  [min]=\"min.sigma\" [max]=\"max.sigma\" step=\"0.1\"\n  [hardMin]=\"1\"\n  [(ngModel)]=\"round.sigma\">\n  <ng-template rsLabel>\n    <div class=\"label row\">\n      <div class=\"col-sm\">\n        Std. deviation (&sigma;)\n      </div>\n      <div class=\"col-sm form-check\">\n        <label class=\"form-check-label\">\n          <input name=\"show-alternates\" type=\"checkbox\"\n            class=\"form-check-input\"\n            [(ngModel)]=\"round.showAlternates\" />\n          Alternates\n        </label>\n      </div>\n    </div>\n  </ng-template>\n</app-range-slider>\n\n<app-range-slider label=\"Power\"\n  [min]=\"min.power\" [max]=\"max.power\"\n  [hardMin]=\"min.power\" [hardMax]=\"max.power\"\n  [isOutput]=\"round.output == 'power'\"\n  [(ngModel)]=\"round.power\">\n</app-range-slider>\n\n<app-range-slider label=\"Difference in population means (&delta;)\"\n  [min]=\"min.delta\" [max]=\"max.delta\" step=\"0.1\"\n  [isOutput]=\"round.output == 'delta'\" [(ngModel)]=\"round.delta\">\n</app-range-slider>\n\n<app-range-slider label=\"Sample size\"\n  [min]=\"min.n\" [max]=\"max.n\" step=\"1\"\n  [hardMin]=\"1\"\n  [isOutput]=\"round.output == 'n'\" [(ngModel)]=\"round.n\">\n</app-range-slider>\n"

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__changeable__ = __webpack_require__(56);
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
//# sourceMappingURL=plot-options.js.map

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(150);


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(58);
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

/***/ 58:
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

/***/ })

},[276]);
//# sourceMappingURL=main.bundle.js.map