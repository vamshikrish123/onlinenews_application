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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'dailynews';
    }
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _business_business_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./business/business.component */ "./src/app/business/business.component.ts");
/* harmony import */ var _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./entertainment/entertainment.component */ "./src/app/entertainment/entertainment.component.ts");
/* harmony import */ var _home_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/api.service */ "./src/app/home/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sports_sports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sports/sports.component */ "./src/app/sports/sports.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _business_businessservice_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./business/businessservice.service */ "./src/app/business/businessservice.service.ts");
/* harmony import */ var _entertainment_entertainmentservice_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./entertainment/entertainmentservice.service */ "./src/app/entertainment/entertainmentservice.service.ts");
/* harmony import */ var _sports_sportsservice_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sports/sportsservice.service */ "./src/app/sports/sportsservice.service.ts");
/* harmony import */ var _technology_technology_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./technology/technology.component */ "./src/app/technology/technology.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { ApiService } from './business/api.service';







var ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'business', component: _business_business_component__WEBPACK_IMPORTED_MODULE_10__["BusinessComponent"] },
    { path: 'entertainment', component: _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_11__["EntertainmentComponent"] },
    { path: 'sports', component: _sports_sports_component__WEBPACK_IMPORTED_MODULE_14__["SportsComponent"] },
    { path: 'technology', component: _technology_technology_component__WEBPACK_IMPORTED_MODULE_19__["TechnologyComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _business_business_component__WEBPACK_IMPORTED_MODULE_10__["BusinessComponent"],
                _entertainment_entertainment_component__WEBPACK_IMPORTED_MODULE_11__["EntertainmentComponent"],
                _sports_sports_component__WEBPACK_IMPORTED_MODULE_14__["SportsComponent"],
                _technology_technology_component__WEBPACK_IMPORTED_MODULE_19__["TechnologyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(ROUTES),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
            ],
            providers: [_home_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], _business_businessservice_service__WEBPACK_IMPORTED_MODULE_16__["BusinessserviceService"], _entertainment_entertainmentservice_service__WEBPACK_IMPORTED_MODULE_17__["EntertainmentserviceService"], _sports_sportsservice_service__WEBPACK_IMPORTED_MODULE_18__["SportsserviceService"]],
            //providers: [ApiService],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/business/business.component.css":
/*!*************************************************!*\
  !*** ./src/app/business/business.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .flex-box{\r\n    display: flex;\r\n  }\r\n  .flex-card{\r\n    margin: 5px;\r\n  }*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MvYnVzaW5lc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7S0FjSyIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzL2J1c2luZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmZsZXgtY2FyZHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH0qLyJdfQ== */"

/***/ }),

/***/ "./src/app/business/business.component.html":
/*!**************************************************!*\
  !*** ./src/app/business/business.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!--<div class=\"flex-box\">\n    <div class=\"flexbox-card\">\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n    </div>\n    <div class=\"flexbox-card\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Shiba Inu</mat-card-title>\n          <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n            bred for hunting.\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button>\n        </mat-card-actions>\n      </mat-card>\n          </div>\n</div>   -->\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div *ngFor = \"let news of news.articles\">\n      <div class=\"col-sm\">\n          <mat-card-title>{{news.title}}</mat-card-title><br>\n          <mat-card-subtitle>News</mat-card-subtitle><br>\n          <img mat-card-image src=\"{{news.urlToImage}}\" height=\"350\" width=\"750\">\n          <p>{{news.description}}</p>\n          <a href=\"{{news.url}}\">More Details</a><br>\n      </div>\n    </div>\n  </div>\n  </div>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/business/business.component.ts":
/*!************************************************!*\
  !*** ./src/app/business/business.component.ts ***!
  \************************************************/
/*! exports provided: BusinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessComponent", function() { return BusinessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _businessservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./businessservice.service */ "./src/app/business/businessservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ApiService } from './api.service';

var BusinessComponent = /** @class */ (function () {
    function BusinessComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    BusinessComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    BusinessComponent.prototype.getNews = function () {
        var _this = this;
        this.apiService.getNews().subscribe(function (response) { _this.news = response; });
    };
    BusinessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business',
            template: __webpack_require__(/*! ./business.component.html */ "./src/app/business/business.component.html"),
            styles: [__webpack_require__(/*! ./business.component.css */ "./src/app/business/business.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _businessservice_service__WEBPACK_IMPORTED_MODULE_2__["BusinessserviceService"]])
    ], BusinessComponent);
    return BusinessComponent;
}());



/***/ }),

/***/ "./src/app/business/businessservice.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/business/businessservice.service.ts ***!
  \*****************************************************/
/*! exports provided: BusinessserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessserviceService", function() { return BusinessserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusinessserviceService = /** @class */ (function () {
    function BusinessserviceService(http) {
        this.http = http;
    }
    BusinessserviceService.prototype.getNews = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8e26bafacf2244a98aaa53c3aacf76c3');
    };
    BusinessserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BusinessserviceService);
    return BusinessserviceService;
}());



/***/ }),

/***/ "./src/app/entertainment/entertainment.component.css":
/*!***********************************************************!*\
  !*** ./src/app/entertainment/entertainment.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .flex-box{\r\n    display: flex;\r\n  }\r\n  \r\n  .flex-card{\r\n    margin: 5px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50ZXJ0YWlubWVudC9lbnRlcnRhaW5tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSxvRkFBb0Y7SUFDcEYsdUJBQXVCO0dBQ3hCOztFQUVEO0lBQ0UsY0FBYztHQUNmOztFQUNEO0lBQ0UsWUFBWTtHQUNiIiwiZmlsZSI6InNyYy9hcHAvZW50ZXJ0YWlubWVudC9lbnRlcnRhaW5tZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LWJveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5mbGV4LWNhcmR7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/entertainment/entertainment.component.html":
/*!************************************************************!*\
  !*** ./src/app/entertainment/entertainment.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!--div class=\"flex-box\">\n    <div class=\"flexbox-card\">\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n    </div>\n    <div class=\"flexbox-card\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Shiba Inu</mat-card-title>\n          <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n            bred for hunting.\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button>\n        </mat-card-actions>\n      </mat-card>\n          </div>\n           <div class=\"flexbox-card\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Shiba Inu</mat-card-title>\n          <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n            bred for hunting.\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button>\n        </mat-card-actions>\n      </mat-card>\n          </div>\n          <div class=\"flexbox-card\">\n            <mat-card class=\"example-card\">\n              <mat-card-header>\n                <div mat-card-avatar class=\"example-header-image\"></div>\n                <mat-card-title>Shiba Inu</mat-card-title>\n                <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n              </mat-card-header>\n              <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n              <mat-card-content>\n                <p>\n                  The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                  bred for hunting.\n                </p>\n              </mat-card-content>\n              <mat-card-actions>\n                <button mat-button>LIKE</button>\n                <button mat-button>SHARE</button>\n              </mat-card-actions>\n            </mat-card>\n                </div>\n</div>\n<app-footer></app-footer>   -->\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div *ngFor = \"let news of news.articles\">\n      <div class=\"col-sm\">\n          <mat-card-title>{{news.title}}</mat-card-title><br>\n          <mat-card-subtitle>News</mat-card-subtitle><br>\n          <img mat-card-image src=\"{{news.urlToImage}}\" height=\"350\" width=\"750\">\n          <p>{{news.description}}</p>\n          <a href=\"{{news.url}}\">More Details</a><br>\n      </div>\n    </div>\n  </div>\n  </div>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/entertainment/entertainment.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/entertainment/entertainment.component.ts ***!
  \**********************************************************/
/*! exports provided: EntertainmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntertainmentComponent", function() { return EntertainmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entertainmentservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entertainmentservice.service */ "./src/app/entertainment/entertainmentservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntertainmentComponent = /** @class */ (function () {
    function EntertainmentComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    EntertainmentComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    EntertainmentComponent.prototype.getNews = function () {
        var _this = this;
        this.apiService.getNews().subscribe(function (response) { _this.news = response; });
    };
    EntertainmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entertainment',
            template: __webpack_require__(/*! ./entertainment.component.html */ "./src/app/entertainment/entertainment.component.html"),
            styles: [__webpack_require__(/*! ./entertainment.component.css */ "./src/app/entertainment/entertainment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _entertainmentservice_service__WEBPACK_IMPORTED_MODULE_2__["EntertainmentserviceService"]])
    ], EntertainmentComponent);
    return EntertainmentComponent;
}());



/***/ }),

/***/ "./src/app/entertainment/entertainmentservice.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/entertainment/entertainmentservice.service.ts ***!
  \***************************************************************/
/*! exports provided: EntertainmentserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntertainmentserviceService", function() { return EntertainmentserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntertainmentserviceService = /** @class */ (function () {
    function EntertainmentserviceService(http) {
        this.http = http;
    }
    EntertainmentserviceService.prototype.getNews = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8e26bafacf2244a98aaa53c3aacf76c3');
    };
    EntertainmentserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EntertainmentserviceService);
    return EntertainmentserviceService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".context-dark, .bg-gray-dark, .bg-primary {\r\n    color: #808080;\r\n}\r\n\r\n.footer-classic a, .footer-classic a:focus, .footer-classic a:active {\r\n    color: #808080;\r\n}\r\n\r\n.nav-list li {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.nav-list li a:hover:before {\r\n    margin-left: 0;\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\nul, ol {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.social-inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    padding: 23px;\r\n    font: 900 13px/1 \"Lato\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n    text-transform: uppercase;\r\n    color:#808080;\r\n}\r\n\r\n.social-container .col {\r\n    border: 1px solid #808080;\r\n}\r\n\r\n.nav-list li a:before {\r\n    content: \"\\f14f\";\r\n    font: 400 21px/1 \"Material Design Icons\";\r\n    color: #4d6de6;\r\n    display: inline-block;\r\n    vertical-align: baseline;\r\n    margin-left: -28px;\r\n    margin-right: 7px;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transition: .22s ease;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7Q0FDYjs7QUFFRDtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0hBQW9IO0lBQ3BILDBCQUEwQjtJQUMxQixjQUFjO0NBQ2pCOztBQUNEO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsc0JBQXNCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRleHQtZGFyaywgLmJnLWdyYXktZGFyaywgLmJnLXByaW1hcnkge1xyXG4gICAgY29sb3I6ICM4MDgwODA7XHJcbn1cclxuXHJcbi5mb290ZXItY2xhc3NpYyBhLCAuZm9vdGVyLWNsYXNzaWMgYTpmb2N1cywgLmZvb3Rlci1jbGFzc2ljIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG59XHJcbi5uYXYtbGlzdCBsaSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLm5hdi1saXN0IGxpIGE6aG92ZXI6YmVmb3JlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbnVsLCBvbCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNvY2lhbC1pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIzcHg7XHJcbiAgICBmb250OiA5MDAgMTNweC8xIFwiTGF0b1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiM4MDgwODA7XHJcbn1cclxuLnNvY2lhbC1jb250YWluZXIgLmNvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xyXG59XHJcbi5uYXYtbGlzdCBsaSBhOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjE0ZlwiO1xyXG4gICAgZm9udDogNDAwIDIxcHgvMSBcIk1hdGVyaWFsIERlc2lnbiBJY29uc1wiO1xyXG4gICAgY29sb3I6ICM0ZDZkZTY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAuMjJzIGVhc2U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n\n<footer class=\"section footer-classic context-dark bg-image\" style=\"background: #2d3246;\">\n        <div class=\"container\">\n          <div class=\"row row-30\">\n            <div class=\"col-md-4 col-xl-5\">\n              <div class=\"pr-xl-4\"><a class=\"brand\" href=\"index.html\"><img class=\"brand-logo-light\" src=\"images/agency/logo-inverse-140x37.png\" alt=\"\" width=\"140\" height=\"37\" srcset=\"images/agency/logo-retina-inverse-280x74.png 2x\"></a>\n                <p>We created this project on Angular 5 </p>\n                \n                <p class=\"rights\"><span>©  </span><span class=\"copyright-year\">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <h5>Contacts</h5>\n              <dl class=\"contact-list\">\n                <dt>Address:</dt>\n                <dd>BVRIT College Narsapur-502313</dd>\n              </dl>\n              <dl class=\"contact-list\">\n                <dt>email:</dt>\n                <dd><a href=\"mailto:#\">15211a1272@bvrit.ac.in</a></dd>\n              </dl>\n              <dl class=\"contact-list\">\n                <dt>phones:</dt>\n                <dd><a href=\"tel:#\">+91 9133407677</a> <span>or</span> <a href=\"tel:#\">+91 9571195353</a>\n                </dd>\n              </dl>\n            </div>\n            <div class=\"col-md-4 col-xl-3\">\n              <h5>Links</h5>\n              <ul class=\"nav-list\">\n                <li><a href=\"#\">About</a></li>\n                <li><a href=\"#\">Projects</a></li>\n                <li><a href=\"#\">Blog</a></li>\n                <li><a href=\"#\">Contacts</a></li>\n                <li><a href=\"#\">Pricing</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"row no-gutters social-container\">\n          <div class=\"col\"><a class=\"social-inner\" href=\"#\"><span class=\"icon mdi mdi-facebook\"></span><span>Facebook</span></a></div>\n          <div class=\"col\"><a class=\"social-inner\" href=\"#\"><span class=\"icon mdi mdi-instagram\"></span><span>instagram</span></a></div>\n          <div class=\"col\"><a class=\"social-inner\" href=\"#\"><span class=\"icon mdi mdi-twitter\"></span><span>twitter</span></a></div>\n          <div class=\"col\"><a class=\"social-inner\" href=\"#\"><span class=\"icon mdi mdi-youtube-play\"></span><span>google</span></a></div>\n        </div>\n      </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 0;\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #212529;\r\n    background-color: #f7f7f7;\r\n}\r\n.navbar {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 5px;\r\n}\r\n.topbar{\r\n  background-color: #212529;\r\n  padding: 0;\r\n}\r\n.topbar .container .row {\r\n  margin:-7px;\r\n  padding:0;\r\n}\r\n.topbar .container .row .col-md-12 { \r\n  padding:0;\r\n}\r\n.topbar p{\r\n  margin:0;\r\n  display:inline-block;\r\n  font-size: 13px;\r\n  color: #f1f6ff;\r\n}\r\n.topbar p > i{\r\n  margin-right:5px;\r\n}\r\n.topbar p:last-child{\r\n  text-align:right;\r\n}\r\nheader .navbar {\r\n    margin-bottom: 0;\r\n}\r\n.topbar li.topbar {\r\n    display: inline;\r\n    padding-right: 18px;\r\n    line-height: 52px;\r\n    transition: all .3s linear;\r\n}\r\n.topbar li.topbar:hover {\r\n    color: #1bbde8;\r\n}\r\n.topbar ul.info i {\r\n    color: #131313;\r\n    font-style: normal;\r\n    margin-right: 8px;\r\n    display: inline-block;\r\n    position: relative;\r\n    top: 4px;\r\n}\r\n.topbar ul.info li {\r\n    float: right;\r\n    padding-left: 30px;\r\n    color: #ffffff;\r\n    font-size: 13px;\r\n    line-height: 44px;\r\n}\r\n.topbar ul.info i span {\r\n    color: #aaa;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    line-height: 50px;\r\n    padding-left: 18px;\r\n}\r\nul.social-network {\r\n  border:none;\r\n  margin:0;\r\n  padding:0;\r\n}\r\nul.social-network li {\r\n  border:none;  \r\n  margin:0;\r\n}\r\nul.social-network li i {\r\n  margin:0;\r\n}\r\nul.social-network li {\r\n    display:inline;\r\n    margin: 0 5px;\r\n    border: 0px solid #2D2D2D;\r\n    padding: 5px 0 0;\r\n    width: 32px;\r\n    display: inline-block;\r\n    text-align: center;\r\n    height: 32px;\r\n    vertical-align: baseline;\r\n    color: #000;\r\n}\r\nul.social-network {\r\n  list-style: none;\r\n  margin: 5px 0 10px -25px;\r\n  float: right;\r\n}\r\n.waves-effect {\r\n    position: relative;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n    vertical-align: middle;\r\n    z-index: 1;\r\n    will-change: opacity, transform;\r\n    transition: .3s ease-out;\r\n    color: #fff;\r\n}\r\na {\r\n  color: #0a0a0a;\r\n  text-decoration: none;\r\n}\r\nli {\r\n    list-style-type: none;\r\n}\r\n.bg-image-full {\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    -o-background-size: cover;\r\n}\r\n.bg-dark {\r\n    background-color: #222!important;\r\n}\r\n.mx-background-top-linear {\r\n    background: linear-gradient(45deg, #54d400 48%, #1b1e21 48%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtHQUFrRztJQUNsRyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFFSSxjQUFjO0lBRWQsZ0JBQWdCO0lBRWhCLG9CQUFvQjtJQUVwQiwrQkFBK0I7SUFDL0IsYUFBYTtDQUNoQjtBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsWUFBWTtFQUNaLFVBQVU7Q0FDWDtBQUVEO0VBQ0UsVUFBVTtDQUNYO0FBRUQ7RUFDRSxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwyQkFBMkI7Q0FDOUI7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztDQUNaO0FBRUQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7Q0FDWDtBQUVEO0VBQ0UsWUFBWTtFQUNaLFNBQVM7Q0FDVjtBQUVEO0VBQ0UsU0FBUztDQUNWO0FBRUQ7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0NBQ2Y7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtDQUNkO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsWUFBWTtDQUNmO0FBQ0Q7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0NBQ3ZCO0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFHN0IsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksaUNBQWlDO0NBQ3BDO0FBRUQ7SUFHSSw2REFBNkQ7Q0FDaEUiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi50b3BiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udG9wYmFyIC5jb250YWluZXIgLnJvdyB7XHJcbiAgbWFyZ2luOi03cHg7XHJcbiAgcGFkZGluZzowO1xyXG59XHJcblxyXG4udG9wYmFyIC5jb250YWluZXIgLnJvdyAuY29sLW1kLTEyIHsgXHJcbiAgcGFkZGluZzowO1xyXG59XHJcblxyXG4udG9wYmFyIHB7XHJcbiAgbWFyZ2luOjA7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjZjFmNmZmO1xyXG59XHJcblxyXG4udG9wYmFyIHAgPiBpe1xyXG4gIG1hcmdpbi1yaWdodDo1cHg7XHJcbn1cclxuLnRvcGJhciBwOmxhc3QtY2hpbGR7XHJcbiAgdGV4dC1hbGlnbjpyaWdodDtcclxufSBcclxuXHJcbmhlYWRlciAubmF2YmFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50b3BiYXIgbGkudG9wYmFyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xyXG59XHJcblxyXG4udG9wYmFyIGxpLnRvcGJhcjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzFiYmRlODtcclxufVxyXG5cclxuLnRvcGJhciB1bC5pbmZvIGkge1xyXG4gICAgY29sb3I6ICMxMzEzMTM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNHB4O1xyXG59XHJcblxyXG4udG9wYmFyIHVsLmluZm8gbGkge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDtcclxufVxyXG5cclxuLnRvcGJhciB1bC5pbmZvIGkgc3BhbiB7XHJcbiAgICBjb2xvcjogI2FhYTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxufVxyXG5cclxudWwuc29jaWFsLW5ldHdvcmsge1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6MDtcclxufVxyXG5cclxudWwuc29jaWFsLW5ldHdvcmsgbGkge1xyXG4gIGJvcmRlcjpub25lOyAgXHJcbiAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbnVsLnNvY2lhbC1uZXR3b3JrIGxpIGkge1xyXG4gIG1hcmdpbjowO1xyXG59XHJcblxyXG51bC5zb2NpYWwtbmV0d29yayBsaSB7XHJcbiAgICBkaXNwbGF5OmlubGluZTtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMkQyRDJEO1xyXG4gICAgcGFkZGluZzogNXB4IDAgMDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbnVsLnNvY2lhbC1uZXR3b3JrIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogNXB4IDAgMTBweCAtMjVweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi53YXZlcy1lZmZlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2Utb3V0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuYSB7XHJcbiAgY29sb3I6ICMwYTBhMGE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLmJnLWltYWdlLWZ1bGwge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uYmctZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyIWltcG9ydGFudDtcclxufVxyXG5cclxuLm14LWJhY2tncm91bmQtdG9wLWxpbmVhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzU0ZDQwMCA0OCUsICMxYjFlMjEgNDglKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICM1NGQ0MDAgNDglLCAjMWIxZTIxIDQ4JSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1NGQ0MDAgNDglLCAjMWIxZTIxIDQ4JSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n\n<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n<div class=\"fixed-top\">\n  <header class=\"topbar\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <ul class=\"social-network\">\n              <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n              <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n              <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n              <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-pinterest\"></i></a></li>\n              <li><a class=\"waves-effect waves-dark\" href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n            </ul>\n          </div>\n\n        </div>\n      </div>\n  </header>\n  <nav class=\"navbar navbar-expand-lg navbar-dark mx-background-top-linear\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"index.html\" style=\"text-transform: uppercase;\"> NEWS UPDATES</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n\n        <ul class=\"navbar-nav ml-auto\">\n\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/home\">Home\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/business\">Business</a>\n          </li>\n\n         <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/entertainment\">Entertainment</a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/sports\">Sports</a>\n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/technology\">Technology</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/api.service.ts":
/*!*************************************!*\
  !*** ./src/app/home/api.service.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getNews = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=8e26bafacf2244a98aaa53c3aacf76c3');
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-size: cover;\r\n  }\r\n  \r\n  .flex-box{\r\n    display: flex;\r\n  }\r\n  .flex-card{\r\n    margin: 5px;\r\n  }*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7S0FhSyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAuZmxleC1ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuZmxleC1jYXJke1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfSovIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<div class=\"flex-box\">\n    <div *ngFor = \"let news of news.articles\">\n    <div class=\"flexbox-card\">\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{news.title}}</mat-card-title>\n      <mat-card-subtitle>News</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"{{news.urlToImage}}\">\n    <mat-card-content>   -->\n    <!--<p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n        bred for hunting.\n      </p>-->\n<!--      <p>{{news.description}}</p><br>\n      <a href=\"{{news.url}}\">More Details</a>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>\n    </div>\n</div>\n</div>\n<app-footer></app-footer>     -->\n\n<app-header></app-header><br><br><br><br>\n<div class=\"container\">\n  <div class=\"row\">\n      <div *ngFor = \"let news of news.articles\">\n    <div class=\"col-sm\">\n        <mat-card-title>{{news.title}}</mat-card-title><br>\n        <mat-card-subtitle>News</mat-card-subtitle><br>\n        <img mat-card-image src=\"{{news.urlToImage}}\" height=\"350\" width=\"750\">\n        <p>{{news.description}}</p>\n        <a href=\"{{news.url}}\">More Details</a><br><br>\n    </div>\n  </div>\n</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/home/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    HomeComponent.prototype.getNews = function () {
        var _this = this;
        this.apiService.getNews().subscribe(function (response) { _this.news = response; });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/sports/sports.component.css":
/*!*********************************************!*\
  !*** ./src/app/sports/sports.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb3J0cy9zcG9ydHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sports/sports.component.html":
/*!**********************************************!*\
  !*** ./src/app/sports/sports.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n    <div class=\"row\">\n        <div *ngFor = \"let news of news.articles\">\n      <div class=\"col-sm\">\n          <mat-card-title>{{news.title}}</mat-card-title><br>\n          <mat-card-subtitle>News</mat-card-subtitle><br>\n          <img mat-card-image src=\"{{news.urlToImage}}\" height=\"350\" width=\"750\">\n          <p>{{news.description}}</p>\n          <a href=\"{{news.url}}\">More Details</a><br>\n      </div>\n    </div>\n  </div>\n  </div>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/sports/sports.component.ts":
/*!********************************************!*\
  !*** ./src/app/sports/sports.component.ts ***!
  \********************************************/
/*! exports provided: SportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsComponent", function() { return SportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sportsservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sportsservice.service */ "./src/app/sports/sportsservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SportsComponent = /** @class */ (function () {
    function SportsComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    SportsComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    SportsComponent.prototype.getNews = function () {
        var _this = this;
        this.apiService.getNews().subscribe(function (response) { _this.news = response; });
    };
    SportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sports',
            template: __webpack_require__(/*! ./sports.component.html */ "./src/app/sports/sports.component.html"),
            styles: [__webpack_require__(/*! ./sports.component.css */ "./src/app/sports/sports.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _sportsservice_service__WEBPACK_IMPORTED_MODULE_2__["SportsserviceService"]])
    ], SportsComponent);
    return SportsComponent;
}());



/***/ }),

/***/ "./src/app/sports/sportsservice.service.ts":
/*!*************************************************!*\
  !*** ./src/app/sports/sportsservice.service.ts ***!
  \*************************************************/
/*! exports provided: SportsserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsserviceService", function() { return SportsserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SportsserviceService = /** @class */ (function () {
    function SportsserviceService(http) {
        this.http = http;
    }
    SportsserviceService.prototype.getNews = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8e26bafacf2244a98aaa53c3aacf76c3');
    };
    SportsserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SportsserviceService);
    return SportsserviceService;
}());



/***/ }),

/***/ "./src/app/technology/technology.component.css":
/*!*****************************************************!*\
  !*** ./src/app/technology/technology.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2hub2xvZ3kvdGVjaG5vbG9neS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/technology/technology.component.html":
/*!******************************************************!*\
  !*** ./src/app/technology/technology.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n    <div class=\"row\">\n        <div *ngFor = \"let news of news.articles\">\n      <div class=\"col-sm\">\n          <mat-card-title>{{news.title}}</mat-card-title><br>\n          <mat-card-subtitle>News</mat-card-subtitle><br>\n          <img mat-card-image src=\"{{news.urlToImage}}\" height=\"350\" width=\"750\">\n          <p>{{news.description}}</p>\n          <a href=\"{{news.url}}\" height=\"350\" width=\"750\">More Details</a><br>\n      </div>\n    </div>\n  </div>\n  </div>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/technology/technology.component.ts":
/*!****************************************************!*\
  !*** ./src/app/technology/technology.component.ts ***!
  \****************************************************/
/*! exports provided: TechnologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyComponent", function() { return TechnologyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _technologyservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./technologyservice.service */ "./src/app/technology/technologyservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TechnologyComponent = /** @class */ (function () {
    function TechnologyComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    TechnologyComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    TechnologyComponent.prototype.getNews = function () {
        var _this = this;
        this.apiService.getNews().subscribe(function (response) { _this.news = response; });
    };
    TechnologyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-technology',
            template: __webpack_require__(/*! ./technology.component.html */ "./src/app/technology/technology.component.html"),
            styles: [__webpack_require__(/*! ./technology.component.css */ "./src/app/technology/technology.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _technologyservice_service__WEBPACK_IMPORTED_MODULE_2__["TechnologyserviceService"]])
    ], TechnologyComponent);
    return TechnologyComponent;
}());



/***/ }),

/***/ "./src/app/technology/technologyservice.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/technology/technologyservice.service.ts ***!
  \*********************************************************/
/*! exports provided: TechnologyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyserviceService", function() { return TechnologyserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TechnologyserviceService = /** @class */ (function () {
    function TechnologyserviceService(http) {
        this.http = http;
    }
    TechnologyserviceService.prototype.getNews = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8e26bafacf2244a98aaa53c3aacf76c3');
    };
    TechnologyserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TechnologyserviceService);
    return TechnologyserviceService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ASUS\dailynews\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map