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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* a {\n  color: black;\n  padding: 5px;\n  margin: 0;\n  transition: all .3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\na:hover {\n  background-color: white;\n  border-radius: 4px;\n} */\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<app-repo></app-repo>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(route) {
        this.title = 'Gitsearch';
        this.router = route;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _repo_repo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repo/repo.component */ "./src/app/repo/repo.component.ts");
/* harmony import */ var _gity_git_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gity/git.service */ "./src/app/gity/git.service.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _price_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./price.directive */ "./src/app/price.directive.ts");
/* harmony import */ var _prop_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prop.pipe */ "./src/app/prop.pipe.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _repo_repo_component__WEBPACK_IMPORTED_MODULE_4__["RepoComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                _price_directive__WEBPACK_IMPORTED_MODULE_8__["PriceDirective"],
                _prop_pipe__WEBPACK_IMPORTED_MODULE_9__["PropPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_7__["RoutingModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_10__["NgProgressModule"].forRoot(),
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_11__["NgProgressHttpModule"] // progress bar to load http requests
            ],
            providers: [_gity_git_service__WEBPACK_IMPORTED_MODULE_5__["GitService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gity/git.service.ts":
/*!*************************************!*\
  !*** ./src/app/gity/git.service.ts ***!
  \*************************************/
/*! exports provided: GitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitService", function() { return GitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GitService = /** @class */ (function () {
    function GitService(http) {
        this.http = http;
    }
    GitService.prototype.getProfileInfo = function (name) {
        return this.http.get("https://api.github.com/users/" + name + '?access_token=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].accessToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GitService.prototype.getUserRepos = function (name) {
        return this.http.get("https://api.github.com/users/" + name + '/repos?access_token=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].accessToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
        // return this.http.get("https://api.github.com/users/" + name + '/repos?client_id=' + environment.clientID + '?client_secret=' + environment.clientSecret).pipe(map(res => res.json()));
    };
    GitService.prototype.getContributors = function (name, repo) {
        return this.http.get("https://api.github.com/repos/" + name + "/" + repo + "/contributors" + '?access_token=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].accessToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    GitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GitService);
    return GitService;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Sorry We Couldn't Find It\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/price.directive.ts":
/*!************************************!*\
  !*** ./src/app/price.directive.ts ***!
  \************************************/
/*! exports provided: PriceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceDirective", function() { return PriceDirective; });
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

var PriceDirective = /** @class */ (function () {
    function PriceDirective() {
    }
    PriceDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appPrice]'
        }),
        __metadata("design:paramtypes", [])
    ], PriceDirective);
    return PriceDirective;
}());



/***/ }),

/***/ "./src/app/prop.pipe.ts":
/*!******************************!*\
  !*** ./src/app/prop.pipe.ts ***!
  \******************************/
/*! exports provided: PropPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropPipe", function() { return PropPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PropPipe = /** @class */ (function () {
    function PropPipe() {
    }
    PropPipe.prototype.transform = function (value, args) {
        return null;
    };
    PropPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'prop'
        })
    ], PropPipe);
    return PropPipe;
}());



/***/ }),

/***/ "./src/app/repo/repo.component.css":
/*!*****************************************!*\
  !*** ./src/app/repo/repo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: #fff;\n}\n\n.top h1 {\n  font-family: 'Fredoka One', cursive;\n  font-size: 3rem;\n  color: #5f6063;\n  /* color: transparent;\n  -webkit-text-stroke-width: 0.5px;\n  -webkit-text-stroke-color: #000;\n  -webkit-transition: color 2s;\n  transition: color 2s; */\n}\n\n/* .top h1:hover {\n  color: #07cff6;\n  -webkit-text-stroke-width: 0.5px;\n  -webkit-text-stroke-color: #07cff6;\n} */\n\n.top img {\n  width: 50px;\n  height: 50px;\n  margin-left: 10px;\n}\n\n/* **************************************************** */\n\n/* SEARCH INPUT STYLING */\n\n/* **************************************************** */\n\n.search {\n  position: relative;\n  width: 400px;\n}\n\n.search input {\n  width: 100%;\n  padding: 10px;\n  border: 3px solid grey;\n  color: #202124;\n  background-color: transparent;\n  height: 45px;\n  border-radius: 50px;\n  outline: none;\n}\n\n.searchButton {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  color: grey;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.contData {\n  margin-top: 10%;\n}\n\n/* **************************************************** */\n\n/* CARD STYLING */\n\n/* **************************************************** */\n\n.contData .keyInfoCard {\n  position: fixed;\n  top: 200px;\n  width: 380px;\n  margin: 10px;\n  /* background-image: linear-gradient(45deg, #00C9FF, #12F6D0, #92FE9D); */\n  background-image: linear-gradient(172deg, #2d74a2 20%, #fff 20.4%);\n  border-radius: 10px;\n  box-shadow: 0 30px 40px 5px rgba(0, 0, 0, 0.09);\n  border: none !important;\n  /* background-image: url(\"/assets/images/cool-background.png\");\n  background-repeat: no-repeat;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  background-position: center top; */\n}\n\n.keyInfoCard img {\n  position: relative;\n  top: -30px;\n  width: 150px;\n  height: 150px;\n  margin: auto;\n  border-radius: 50%;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.4);\n}\n\n/* .keyInfoCard .fa {\n  font-size: 20px;\n  color: #202124;\n} */\n\n.keyInfoCard .bio {\n  word-wrap: break-word;\n  max-width: 300px;\n  line-height: 20px;\n  font-size: 14px;\n  color: #80868b;\n}\n\n.keyInfoCard h5 {\n  text-align: left !important;\n}\n\n.keyInfoCard p {\n  line-height: 10px;\n  color: #3c4043;\n}\n\n.tableCont {\n  margin: auto;\n  overflow-x: hidden;\n}\n\n#livesite {\n  padding: 5px;\n  color: orange;\n  border-radius: 50%;\n}\n\n#plane1 {\n  padding: 5px;\n  color: #05618C;\n  border-radius: 50%;\n}\n\ntbody {\n  border-color: #000;\n  color: #3c4043;\n  /* background-image: linear-gradient(30deg, #00C9FF, #12F6D0, #92FE9D); */\n}\n\n.repo-card {\n  border: none !important;\n  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.09);\n  /* border: 1px solid #2d74a2; */\n  padding: 20px;\n  margin: 20px 10px;\n  border-radius: 12px;\n}\n\n.repo-card .fa-cookie-bite {\n  color: orange;\n  cursor: pointer;\n}\n\n.repo-card .fa-cookie-bite:hover + .tultip{\n  opacity: 1;\n  transition: all .2s ease;\n}\n\n.repo-card .tultip{\n  opacity: 0;\n  position: absolute;\n  top:20px;\n  right: 5px;\n  color: #5f6063;\n  padding: 5px 10px;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.09);\n  background-color: #fff;\n  border-radius: 8px;\n}\n\n.repo-card .repo-name {\n  font-weight: 600;\n  color: #3c4043;\n  letter-spacing: 1px;\n}\n\n.repo-card .repo-name::first-letter {\n  text-transform: uppercase;\n}\n\n.repo-card .desc-div {\n  min-height: 50px;\n}\n\n.repo-card .repo-desc {\n  font-size: 0.9rem;\n  letter-spacing: 1px;\n  color: #80868b;\n}\n\n.repo-card .repo-date {\n  color: #80868b;\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n\n.repo-card .git-btn {\n  background-color: #f1f1f1;\n  color: #5f6063;\n  font-weight: 600;\n  font-size: 0.9rem;\n  border-radius: 8px;\n}\n\n.repo-card .live-btn {\n  background-color: #2d74a2;\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.9rem;\n  border-radius: 8px;\n}\n\n.repoName {\n  text-transform: uppercase;\n  font-size: 18px;\n}\n\n.languageBadge {\n  padding: 10px;\n  text-align: center;\n  color: #fff;\n  font-size: 14px;\n}\n\n.stats-holder {\n  width: 100%;\n  display: flex;\n  font-family: 'Quicksand', sans-serif;\n}\n\n.user-stats {\n  flex: 1;\n  text-align: center;\n}\n\n.user-stats strong {\n  display: block;\n  float: left;\n  clear: both;\n  width: 100%;\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.2px;\n}\n\n.user-stats span {\n  font-size: 26px;\n  color: #5E5E5E;\n  width: 40px;\n  height: 40px;\n  margin: 5px;\n  display: inline-block;\n  border-radius: 50%;\n  cursor: pointer;\n  -webkit-animation: pulse 3s infinite;\n          animation: pulse 3s infinite;\n}\n\n.user-stats span:hover {\n  -webkit-animation: none;\n          animation: none;\n}\n\n/* PULSE Animation */\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44);\n  }\n\n  70% {\n    -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);\n  }\n\n  100% {\n    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.9);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(204, 169, 44);\n  }\n\n  70% {\n    box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);\n  }\n\n  100% {\n    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);\n  }\n}\n\n/* PULSE Animation END*/\n\n@media (max-width:3000px) {}\n\n@media (max-width:2000px) {}\n\n@media (max-width:1700px) {}\n\n@media (max-width:1500px) {}\n\n@media (max-width:1350px) {\n  .container-fluid {\n    padding-left: 30px!important;\n    padding-right: 30px!important;\n  }\n\n  .contData {\n    padding-top: 5vh;\n  }\n\n  .contData .keyInfoCard {\n    position: fixed;\n    top: 200px;\n    width: 350px;\n  }\n}\n\n@media (max-width:1100px) {}\n\n@media (max-width:1020px) {}\n\n@media (max-width:760px) {\n  .container-fluid {\n    padding: 20px !important;\n  }\n\n  .contData {\n    padding-top: 0vh !important;\n  }\n\n  #profile {\n    margin-top: 25vh;\n  }\n\n  .repo-header {\n    margin-top: 50px;\n  }\n\n  .contData .keyInfoCard {\n    position: relative;\n    top: 0px;\n    width: 100%;\n    margin: 0 !important;\n  }\n\n  .top h1 {\n    font-size: 1.5rem;\n  }\n\n  .repo-card {\n    margin: 20px 0px !important;\n  }\n}\n"

/***/ }),

/***/ "./src/app/repo/repo.component.html":
/*!******************************************!*\
  !*** ./src/app/repo/repo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"container-fluid fixed-top px-5 py-0\" align=\"center\">\n\n  <div class=\"row top justify-content-start mt-3\">\n    <h1>GIT-SEARCH WEB APP</h1>\n    <img src=\"assets/images/github.svg\" class=\"d-none d-sm-none d-md-inline\">\n\n  </div>\n\n  <div class=\"row justify-content-center mb-2\">\n    <div class=\"search d-block\">\n      <input type=\"text\" class=\"searchTerm\" [ngClass]=\"{'redBorder':error}\" placeholder=\"Who are you looking for?\" id=\"user\" [(ngModel)]=\"username\" #user=\"ngModel\" name=\"username\" (keydown.enter)=\"getUser()\" autocomplete=\"off\">\n      <span class=\"searchButton\" (click)=\"getUser()\">\n        <i class=\"fa fa-search\"></i>\n      </span>\n    </div>\n\n  </div>\n  <div class=\"text-center redText\" *ngIf=\"error\">\n    <i>user not found</i>\n  </div>\n\n</nav>\n\n<div class=\"container-fluid contData px-5\">\n\n  <div class=\"row\" id=\"profile\" *ngIf=\"profile\">\n\n    <div class=\"col-md-3\">\n\n      <h3 style=\"position:fixed;\" class=\"ml-3 font-weight-bold text-muted d-none d-sm-none d-md-block\">Profile</h3>\n\n      <div class=\"card keyInfoCard my-5 px-3 pb-3\">\n\n        <img src=\"{{profile.avatar_url}}\" alt=\"Profile Image\">\n\n        <h3> {{profile.name == null ? profile.login : profile.name}}</h3>\n        <!-- <h3>{{profile.name}}</h3> -->\n        <!-- <h5 *ngIf=\"profile.email\">{{profile.email}}</h5> -->\n\n        <div *ngIf=\"profile.bio != null\">\n          <h6><strong>BIO</strong></h6>\n          <p class=\"bio\">{{profile.bio}}</p>\n        </div>\n\n        <div>\n          <p *ngIf=\"profile.blog.length != 0\">\n            <i class=\"fa fa-id-card mr-2\"></i>\n            Visit {{profile.name == null ? profile.login : profile.name}}'s\n            <a href=\"{{profile.blog}}\" target=\"_blank\"> Portfolio</a>\n          </p>\n        </div>\n\n        <p *ngIf=\"profile.location != null \">\n          <i class=\"fa fa-map-marker-alt mr-2\"></i>{{profile.location}}\n        </p>\n        <p>\n          <i class=\"fab fa-github-square mr-2\"></i>\n          <span>Visit {{profile.name == null ? profile.login : profile.name}}'s Github</span>\n          <a href=\"{{profile.html_url}}\" target=\"_blank\"> Profile</a>\n        </p>\n        <p>\n          <i class=\"fa fa-calendar mr-2\"></i>\n          <span><strong>Joined Github : </strong></span>\n          <span>{{profile.created_at | date : 'MMM d, y'}}</span>\n\n        </p>\n\n        <hr>\n\n        <div class=\"stats-holder\">\n          <div class=\"user-stats\">\n            <strong><i class=\"fa fa-archive mr-2 hide-ms\"></i>Repositories</strong>\n            <span>{{profile.public_repos}}</span>\n\n          </div>\n          <div class=\"user-stats\">\n            <strong><i class=\"fas fa-user-circle mr-2 hide-ms\"></i>Following</strong>\n            <span>{{profile.following}}</span>\n\n          </div>\n          <div class=\"user-stats\">\n            <strong><i class=\"fas fa-user-circle mr-2 hide-ms\"></i>Followers</strong>\n            <span>{{profile.followers}}</span>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-0 col-md-1\">\n\n    </div>\n\n    <div class=\"col-md-8\">\n\n\n\n\n      <h3 class=\"font-weight-bold text-muted ml-2 repo-header\">Repositories</h3>\n\n\n\n\n      <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n\n      <div *ngIf=\"!loading\">\n\n\n        <div class=\"row\">\n          <div class=\"col-md-4\" *ngFor=\"let repo of repos\">\n            <div class=\"card repo-card\">\n\n\n\n              <div class=\"row\">\n\n                <div class=\"col-10 col-md-10\">\n                  <h5 class=\"repo-name\">{{repo.name}}</h5>\n\n                </div>\n\n                <div class=\"col-2 col-md-2\">\n                  <span *ngIf=\"repo.fork\">\n                    <i class=\"fas fa-cookie-bite\"></i>\n                    <span class=\"tultip\">\n                      forked repository\n                    </span>\n                  </span>\n\n\n                </div>\n\n              </div>\n\n              <div class=\"desc-div mb-2\">\n\n                <p class=\"repo-desc\"> {{repo.description === null || repo.description === undefined ? '—' : repo.description | slice :0 :70}} <span style=\"font-size:1.1rem;\">{{repo.description?.length > 70 ? '&hellip;' : ''}}</span> </p>\n\n              </div>\n\n\n              <div class=\"d-inline repo-date mb-1\">\n                <span>\n                  <i class=\"fas fa-file-alt mr-2\"></i>\n                </span>\n                <span>&nbsp;{{repo.language}}</span>\n              </div>\n\n\n              <div class=\"d-inline repo-date mb-1\">\n                <span>\n                  <i class=\"fas fa-user mr-2\"></i>\n                </span>\n                <span>{{repo.contributors?.length > 1 ? repo.contributors?.length + ' Contributors' : repo.contributors?.length + ' Contributor'}}</span>\n              </div>\n\n\n\n\n              <div class=\"d-inline repo-date mb-1\">\n                <span>\n                  <i class=\"fas fa-calendar-day mr-2\"></i>\n                </span>\n\n                <span class=\"create-date\">\n                  {{repo.created_at | date}}\n                </span>\n              </div>\n\n              <div class=\"row mt-3\">\n                <div class=\"col-6 col-md-6\">\n                  <a role=\"button\" class=\"btn btn-md git-btn\" href=\"{{repo.html_url}}\" target=\"_blank\">\n                    Github\n                  </a>\n                </div>\n                <div class=\"col-6 col-md-6 text-right\">\n                  <a href=\"{{repo.homepage}}\" target=\"_blank\" role=\"button\" class=\"btn btn-md live-btn\" *ngIf=\"repo.homepage\">\n                    Live site\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/repo/repo.component.ts":
/*!****************************************!*\
  !*** ./src/app/repo/repo.component.ts ***!
  \****************************************/
/*! exports provided: RepoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoComponent", function() { return RepoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gity_git_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gity/git.service */ "./src/app/gity/git.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepoComponent = /** @class */ (function () {
    // contributors:any[] = [];
    function RepoComponent(gitService, route) {
        this.gitService = gitService;
        this.route = route;
        this.repos = [];
        this.username = 'wess58';
        this.error = false;
        this.loading = false;
    }
    RepoComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    RepoComponent.prototype.getUser = function () {
        var _this = this;
        // console.log('username', this.username);
        this.loading = true;
        this.gitService.getProfileInfo(this.username.split(" ").join("")).subscribe(function (profile) {
            _this.profile = profile;
            _this.loading = false;
            // console.log('profile', this.profile);
            _this.error = false;
            // console.log('error', this.error);
        }, function (error) {
            _this.error = true;
            // console.log('error', this.error);
        });
        this.getRepos();
    };
    RepoComponent.prototype.getRepos = function () {
        var _this = this;
        this.gitService.getUserRepos(this.username.split(" ").join("")).subscribe(function (results) {
            _this.repos = results;
            _this.repos.sort(function (a, b) { return b.id - a.id; });
            console.log('repos', _this.repos);
            _this.repos.forEach(function (repo) {
                _this.gitService.getContributors(_this.username.split(" ").join(""), repo.name).subscribe(function (res) {
                    repo.contributors = res;
                    repo.description = repo.description.replace(/(https?:\/\/[^\s]+)/g, "LINK");
                    // console.log(repo.stargazers_count);
                    // console.log('contributors' , repo.name + " - " + repo.contributors.length);
                });
            });
        });
    };
    RepoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-repo',
            template: __webpack_require__(/*! ./repo.component.html */ "./src/app/repo/repo.component.html"),
            styles: [__webpack_require__(/*! ./repo.component.css */ "./src/app/repo/repo.component.css")]
        }),
        __metadata("design:paramtypes", [_gity_git_service__WEBPACK_IMPORTED_MODULE_2__["GitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RepoComponent);
    return RepoComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
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
    production: true,
    clientID: 'b0096ac6d420a3b2c4ce',
    clientSecret: '5fd881e86b8fe14975c7a703a825f8c95ee67bab',
    accessToken: 'c7f9d0b1a1461cfaab574bd0407d2fc9302cd2ee'
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/meliora/Documents/moringaschool/core/Angular/Gitsearch/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map