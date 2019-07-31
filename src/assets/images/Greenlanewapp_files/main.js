(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/interests/interests.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'interests',
        component: _interests_interests_component__WEBPACK_IMPORTED_MODULE_4__["InterestsComponent"],
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"] }
];
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

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'greenlanewapp';
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/interests/interests.component.ts");
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
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"],
                _interests_interests_component__WEBPACK_IMPORTED_MODULE_6__["InterestsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  margin: 0;\n  padding: 0;\n  font-family: 'sfui',\n}\n.center {\n  margin: auto;\n  width: 50%;\n  padding: 10px;\n}\n.header{\n  height: 100px;\n  /*background: transparent;*/\n  /*opacity: .7;*/\n  /*background-color: rgba(0,0,0,0.7);*/\n  padding: 0 0px;  \n  color: #fff;\n}\n.logo{\n  line-height: 100px;\n  float: left;\n  text-transform: uppercase;\n}\n.menu{\n  float: right;\n  line-height: 10px;\n  font-size: 11pt;\n}\n.menu a{\n  color: white;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 0 10px;\n  transition: 0.4s;\n\n}\n.show-menu-btn,.hide-menu-btn{\n  transition: 0.4s;\n  font-size: 10px;\n  cursor: pointer;\n  display: none;\n}\n.show-menu-btn{\n  float: right;\n}\n.show-menu-btn i{\n  line-height: 100px;\n}\n.menu a:hover,\n.show-menu-btn:hover,\n.hide-menu-btn:hover{\n  color: white;\n}\n#chk{\n  position: absolute;\n  visibility: hidden;\n  z-index: -1111;\n}\n.content{\n  padding: 0 20px;\n}\n.content img{\n  width: 100%;\n  max-width: 700px;\n  margin: 20px 0;\n}\n.content p{\n  text-align: justify;\n}\n@media screen and (max-width:800px) {\n  .show-menu-btn,.hide-menu-btn{\n    display: block;\n  }\n  .menu{\n    position: fixed;\n    width: 100%;\n    height: 100vh;\n    /*background: transparent;*/\n    background-color: black;\n    right: -100%;\n    top: 0;\n    text-align: center;\n    padding: 80px 0;\n    line-height: normal;\n    transition: 0.7s;\n    font-size: 10pt;\n  }\n  .menu a{\n    display: block;\n    padding: 20px;\n  }\n  .hide-menu-btn{\n    position: absolute;\n    top: 40px;\n    right: 40px;\n  }\n  #chk:checked ~ .menu{\n    right: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7O0NBRWxCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0NBQ2Y7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7OztFQUdFLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRTtJQUNFLGVBQWU7R0FDaEI7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztJQUNkLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxlQUFlO0lBQ2YsY0FBYztHQUNmO0VBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7R0FDYjtFQUNEO0lBQ0UsU0FBUztHQUNWO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6ICdzZnVpJyxcbn1cbi5jZW50ZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uaGVhZGVye1xuICBoZWlnaHQ6IDEwMHB4O1xuICAvKmJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyovXG4gIC8qb3BhY2l0eTogLjc7Ki9cbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7Ki9cbiAgcGFkZGluZzogMCAwcHg7ICBcbiAgY29sb3I6ICNmZmY7XG59XG4ubG9nb3tcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm1lbnV7XG4gIGZsb2F0OiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbn1cbi5tZW51IGF7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG5cbn1cbi5zaG93LW1lbnUtYnRuLC5oaWRlLW1lbnUtYnRue1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zaG93LW1lbnUtYnRue1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc2hvdy1tZW51LWJ0biBpe1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG59XG4ubWVudSBhOmhvdmVyLFxuLnNob3ctbWVudS1idG46aG92ZXIsXG4uaGlkZS1tZW51LWJ0bjpob3ZlcntcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jY2hre1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogLTExMTE7XG59XG5cbi5jb250ZW50e1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uY29udGVudCBpbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5jb250ZW50IHB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODAwcHgpIHtcbiAgLnNob3ctbWVudS1idG4sLmhpZGUtbWVudS1idG57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm1lbnV7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgLypiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHJpZ2h0OiAtMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDgwcHggMDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHRyYW5zaXRpb246IDAuN3M7XG4gICAgZm9udC1zaXplOiAxMHB0O1xuICB9XG4gIC5tZW51IGF7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAuaGlkZS1tZW51LWJ0bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHB4O1xuICAgIHJpZ2h0OiA0MHB4O1xuICB9XG4gICNjaGs6Y2hlY2tlZCB+IC5tZW51e1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\" background: url('assets/images/forest.jpeg') no-repeat center center fixed; \n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;height: 100vh;\nbackground-color: Black;\nz-index:10;\">\n<div style=\"background-color: rgba(0,0,0,0.7);height: 100vh;\">\n\n</div>\n  Hello\n</div> -->\n\n<!-- Uses a transparent header that draws on top of the layout's background -->\n<!-- <style>\n.demo-layout-transparent {\n  background: url('assets/images/forest.jpeg') center / cover;\n  background-color: rgba(0,0,0,0.7);\n}\n.demo-layout-transparent .mdl-layout__header,\n.demo-layout-transparent .mdl-layout__drawer-button {\n  /* This background is dark, so we set text to white. Use 87% black instead if\n     your background is light. */\n  color: white;\n}\n</style> -->\n<!-- \n\t<div class=\"demo-layout-transparent mdl-layout mdl-js-layout\"> -->\n<!--   <div class=\"header\">\n    <input type=\"checkbox\" id=\"chk\">\n    <label for=\"chk\" class=\"show-menu-btn\">\n     <i class=\"uk-margin-small-right uk-icon\" uk-icon=\"menu\"></i>\n    </label>\n    <ul class=\"menu\">\n      <a href=\"/\">Home</a>\n      <a href=\"/\">About</a>\n      <a href=\"/\">Services</a>\n      <a href=\"/\">Works</a>\n      <a href=\"/\">Contact</a>\n      <label for=\"chk\" class=\"hide-menu-btn\">\n        <i class=\"uk-margin-small-right uk-icon\" uk-icon=\"menu\"></i>\n      </label>\n    </ul>\n</div> -->\n<!--   <main class=\"mdl-layout__content\" style=\"background-color: rgba(0,0,0,0.7);\">\n  </main>\n</div> -->\n<div style=\" background: url('assets/images/forest.jpeg') no-repeat center center fixed; \n-webkit-background-size: cover;\n-moz-background-size: cover;\n-o-background-size: cover;\nbackground-size: cover;height: 100vh;\nz-index:10;\">\n\n<div style=\"background-color: rgba(0,0,0,0.7);height: 100vh;\">\n\t<div class=\"header\" style=\"padding-right: 20px;\">\n\n\t\t<input type=\"checkbox\" id=\"chk\">\n\t\t<label for=\"chk\" class=\"show-menu-btn\" style=\"color: white;\">\n\t\t\t<i class=\"fas fa-bars\" style=\"font-size: 25px;\"></i>\n\t\t</label>\n\t\t<br>\n\t\t<ul class=\"menu\">\n\t\t\t<a href=\"#\" style=\"font-family: sfui;letter-spacing: 3px;\">Impact</a>\n\t\t\t<a href=\"#\" style=\"font-family: sfui;letter-spacing: 3px;\">About Us</a>\n\t\t\t<a href=\"#\" style=\"font-family: sfui;letter-spacing: 3px;\">Curators</a>\n\n\t\t\t<label for=\"chk\" class=\"hide-menu-btn\">\n\t\t\t\t<i class=\"fas fa-times\" style=\"font-size: 25px;\"></i>\n\t\t\t</label>\n\t\t</ul>\n\t</div>\n\t<div class=\"content\">\n\t\t<div class=\"center\">\n\t\t\t<br>\n\t\t\t<br>\n\t\n\t\t\t<img src=\"assets/images/Logowhite.png\" sizes=\"(min-width: 40em) 80vw, 100vw\">\n\t\t\t<br>\n\t\t\t<div align=\"center\">\n\t\t\t\t<h1 style=\"color: #889F2D;font-family: sfui;font-weight: bold;font-size: 16pt;\">Sustainable Living' platform for millennials\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div align=\"center\" style=\"width: 100%;\">\n\t\t\t\t<h1 style=\"color: white;font-family: sfui;font-weight: bold;font-size: 14pt;\">Greenlane TV is a lifestyle internet channel that helps conscious consumers discover and engage with responsible brands.\n\t\t\t\t</h1>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<div align=\"center\">\n\t\t\t\t\t<p style=\"color: white;font-family: sfui;text-align: center;\">\n\t\t\t\t\t\tSave your playlist, progress and earn badges. \n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t\t<button class=\"ui facebook button\">\n\t\t\t\t\t<i class=\"fab fa-facebook-f\"></i>\n\t\t\t\t\t&nbsp; &nbsp; Login using Facebook\n\t\t\t\t</button>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<button class=\"ui google plus button\">\n\t\t\t\t\t<i class=\"fab fa-google\"></i>\n\t\t\t\t\t&nbsp; &nbsp; Login using Google\n\t\t\t\t</button>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<a style=\"color: white;font-family: sfui;text-align: center;\" href=\"/interests\"> Browse without sign up\n\t\t\t\t</a>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\t\t\t\t<div style=\"position:absolute;\n\t\t\t\tbottom:20px;\n\t\t\t\tright:20px;width: 50%;\">\n\t\t\t\t<div class=\"ui grid\" style=\"width: 100%;\">\n\t\t\t\t\t\t<div class=\"six wide column\">\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"four wide column\">\n\t\t\t\t\t\t<p style=\"color: white;font-family: sfui;\"> Follow us on :</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"two wide column\">\n\t\t\t\t\t\t<i class=\"fab fa-facebook-f\" style=\"color: white;font-size: 16pt;\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"two wide column\">\n\t\t\t\t\t\t<i class=\"fab fa-instagram\" style=\"color: white;font-size: 16pt;\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<div class=\"two wide column\">\n\t\t\t\t\t\t<i class=\"fab fa-twitter\" style=\"color: white;font-size: 16pt;\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<br>\n\t\t</div>\n\t</div>\n</div>\n\n</div>\n\n\n\n</div>\n"

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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interests/interests.component.css":
/*!***************************************************!*\
  !*** ./src/app/interests/interests.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add a black background color to the top navigation */\n.topnav {\n  background-color: #f5f5f5;\n  overflow: hidden;\n}\n/* Style the links inside the navigation bar */\n.topnav a {\n  float: left;\n  /*color: #f2f2f2;*/\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n/* Change the color of links on hover */\n.topnav a:hover {\n  background-color: #ddd;\n  color: black;\n}\n/* Add a color to the active/current link */\n.topnav a.active {\n  /*background-color: #4CAF50;*/\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJlc3RzL2ludGVyZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdEQUF3RDtBQUN4RDtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7Q0FDbEI7QUFFRCwrQ0FBK0M7QUFDL0M7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtDQUNqQjtBQUVELHdDQUF3QztBQUN4QztFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0NBQ2Q7QUFFRCw0Q0FBNEM7QUFDNUM7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvaW50ZXJlc3RzL2ludGVyZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgdG9wIG5hdmlnYXRpb24gKi9cbi50b3BuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBTdHlsZSB0aGUgbGlua3MgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciAqL1xuLnRvcG5hdiBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC8qY29sb3I6ICNmMmYyZjI7Ki9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4vKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIGxpbmtzIG9uIGhvdmVyICovXG4udG9wbmF2IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIEFkZCBhIGNvbG9yIHRvIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rICovXG4udG9wbmF2IGEuYWN0aXZlIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyovXG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/interests/interests.component.html":
/*!****************************************************!*\
  !*** ./src/app/interests/interests.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\">\n  <a class=\"active\" href=\"#home\">\n  \t<img src=\"assets/images/logo_small.jpg\" style=\"height: 40px;\">\n  </a>\n  <button class=\"ui button\" style=\"background-color: #37A773;float: right; margin: 14px;  text-align: center;color: white;\">Teal</button>\n</div>"

/***/ }),

/***/ "./src/app/interests/interests.component.ts":
/*!**************************************************!*\
  !*** ./src/app/interests/interests.component.ts ***!
  \**************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
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

var InterestsComponent = /** @class */ (function () {
    function InterestsComponent() {
    }
    InterestsComponent.prototype.ngOnInit = function () {
    };
    InterestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interests',
            template: __webpack_require__(/*! ./interests.component.html */ "./src/app/interests/interests.component.html"),
            styles: [__webpack_require__(/*! ./interests.component.css */ "./src/app/interests/interests.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InterestsComponent);
    return InterestsComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
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

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
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
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/karthik/Desktop/greenlane/greenlanewapp/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/karthik/Desktop/greenlane/greenlanewapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map