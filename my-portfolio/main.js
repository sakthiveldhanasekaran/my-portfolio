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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _profile_data_profile_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-data/profile-data.component */ "./src/app/profile-data/profile-data.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");








var routes = [
    {
        path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'me', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    },
    {
        path: 'me/:child', component: _profile_data_profile_data_component__WEBPACK_IMPORTED_MODULE_6__["ProfileDataComponent"]
    },
    {
        path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    },
    {
        path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <div class=\"logo\">\n      <a routerLink=\"/\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"45\" height=\"45\" viewBox=\"0 0 75 75\">\n              <g>\n                  <rect height=\"30\" width=\"12\" x=\"25.5\" y=\"15.5\" fill=\"#222\" stroke=\"none\"></rect>\n                  <rect height=\"30\" width=\"12\" y=\"29.5\" x=\"36.5\" fill=\"#222\" stroke=\"none\"></rect>\n              </g>\n          </svg>\n      </a>\n    </div>\n    <div class=\"menu\">\n      <nav>\n        <ul>\n          <li><a routerLink=\"/\">Dashboard</a></li>\n          <li><a routerLink=\"/contact\">Contact</a></li>\n          <li><a routerLink=\"/me\">Me</a></li>\n        </ul>\n      </nav>\n    </div>\n  </div>\n</header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header div.logo {\n  float: left; }\n\nheader div.menu {\n  float: right; }\n\nheader div.menu nav {\n    display: block; }\n\nheader div.menu nav ul {\n      display: flex; }\n\nheader div.menu nav ul li a {\n        display: block;\n        padding: 16px;\n        text-decoration: none;\n        color: #222;\n        font-weight: 700;\n        font-size: 13px;\n        text-transform: uppercase; }\n\nheader div.menu nav ul li a:hover {\n        background-color: #3857ff;\n        color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFBvcnRmb2xpb1xcbXktcG9ydGZvbGlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JBO0VBRVEsV0FBVyxFQUFBOztBQUZuQjtFQU1RLFlBQVksRUFBQTs7QUFOcEI7SUFTWSxjQUFjLEVBQUE7O0FBVDFCO01BWWdCLGFBQWEsRUFBQTs7QUFaN0I7UUFpQndCLGNBQWM7UUFDZCxhQXBCUDtRQXFCTyxxQkFBcUI7UUFDckIsV0FBVztRQUNYLGdCQXhDWDtRQXlDVyxlQUFlO1FBQ2YseUJBQXlCLEVBQUE7O0FBdkJqRDtRQTJCd0IseUJBcENDO1FBcUNELFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250czogKFxyXG4gICAgcm9ib3RvOiAjeydSb2JvdG8nLCBzYW5zLXNlcmlmfSxcclxuICAgIGNhdmVhdDogI3snQ2F2ZWF0JywgY3Vyc2l2ZX1cclxuKTtcclxuXHJcbkBmdW5jdGlvbiBmb250KCRmb250KSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRzLCAkZm9udCk7XHJcbn1cclxuXHJcbiRmb250LXdlaWdodHM6IChcclxuICAgIHJlZ3VsYXI6IDQwMCxcclxuICAgIG1lZGl1bTogNTAwLFxyXG4gICAgYm9sZDogNzAwLFxyXG4gICAgYmxhY2s6IDkwMFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIHdlaWdodHMoJHdlaWdodCkge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRmb250LXdlaWdodHMsICR3ZWlnaHQpO1xyXG59XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgICBwcmltYXJ5LWdyZXk6ICNlNWU1ZTUsXHJcbiAgICBwcmltYXJ5LWJsdWU6ICMzODU3ZmZcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBjb2xvcnMoJGNvbG9yKSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yKTtcclxufVxyXG5cclxuJHBhZGRpbmctMTY6IDE2cHg7XHJcblxyXG5oZWFkZXIge1xyXG4gICAgZGl2LmxvZ28ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5tZW51IHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHBhZGRpbmctMTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHRzKGJvbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3JzKHByaW1hcnktYmx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _profile_data_profile_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-data/profile-data.component */ "./src/app/profile-data/profile-data.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _profile_data_profile_data_component__WEBPACK_IMPORTED_MODULE_10__["ProfileDataComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form>\n  <div>\n    <input type=\"text\" placeholder=\"Full name\">\n  </div>\n  <div>\n    <input type=\"text\" placeholder=\"Email address\">\n  </div>\n  <div>\n    <textarea placeholder=\"\"></textarea>\n  </div>\n  <button type=\"submit\">Send Message</button>\n</form>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  width: 600px;\n  margin: 0 auto; }\n  form div {\n    margin-bottom: 10px; }\n  form div input, form div textarea {\n      padding: 15px;\n      font-size: 18px;\n      border: 1px solid #ccc;\n      width: 100%;\n      outline: none; }\n  form div input:hover,\n    form div input:focus,\n    form div textarea:hover,\n    form div textarea:focus {\n      border: 1px solid #3857ff; }\n  form button {\n    padding: 15px;\n    font-size: 18px;\n    color: white;\n    background-color: #3857ff;\n    border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOlxcUG9ydGZvbGlvXFxteS1wb3J0Zm9saW8vc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osY0FBYyxFQUFBO0VBRmxCO0lBSVEsbUJBQW1CLEVBQUE7RUFKM0I7TUFNWSxhQUFhO01BQ2IsZUFBZTtNQUNmLHNCQUFzQjtNQUN0QixXQUFXO01BQ1gsYUFBYSxFQUFBO0VBVnpCOzs7O01BaUJZLHlCQUF5QixFQUFBO0VBakJyQztJQXFCUSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQ6aG92ZXIsXHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMsXHJcbiAgICAgICAgdGV4dGFyZWE6aG92ZXIsXHJcbiAgICAgICAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg1N2ZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODU3ZmY7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n  <div class=\"hero\"></div>\n  <div class=\"blue-hero\">\n    <div class=\"container\">\n      <div class=\"about-content\">\n        <h2>About Me</h2>\n        <p class=\"about-short\">\n          Hello, I'm Sakthivel -- a Front-End developer living in Chennai, Tamil Nadu, India. I have a passion for web development and love to create attractive websites.\n          <a routerLink=\"/me\">read more..</a>\n        </p>\n        <div class=\"sign-wrap\">\n          <span class=\"signature\">Sakthivel</span>\n          <br>\n          <span class=\"name\">Sakthivel Dhanasekaran, B.E</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard .hero {\n  background: #e5e5e5;\n  height: 320px; }\n\n.dashboard .blue-hero {\n  background: #3857ff; }\n\n.dashboard .blue-hero .container {\n    padding-top: 120px;\n    padding-bottom: 120px; }\n\n.dashboard .blue-hero .container .about-content {\n      padding: 0 20px;\n      max-width: 600px;\n      margin: 0 auto; }\n\n.dashboard .blue-hero .container .about-content h2 {\n        font-size: 48px;\n        font-weight: 500;\n        color: white;\n        margin-bottom: 48px;\n        text-align: center; }\n\n.dashboard .blue-hero .container .about-content p {\n        color: white;\n        font-weight: 400;\n        line-height: 18px;\n        font-size: 15px;\n        font-family: Roboto, sans-serif; }\n\n.dashboard .blue-hero .container .about-content p a {\n          color: white;\n          text-decoration: none;\n          border-bottom: 1px solid rgba(255, 255, 255, 0.5); }\n\n.dashboard .blue-hero .container .about-content p a:hover {\n          border-bottom: 1px solid white; }\n\n.dashboard .blue-hero .container .about-content .sign-wrap {\n        font-size: 24px;\n        color: white;\n        font-weight: 400;\n        margin-top: 48px; }\n\n.dashboard .blue-hero .container .about-content .sign-wrap .signature {\n          font-family: Caveat, cursive; }\n\n.dashboard .blue-hero .container .about-content .sign-wrap .name {\n          font-weight: 400;\n          font-size: 11px;\n          text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxQb3J0Zm9saW9cXG15LXBvcnRmb2xpby9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJBO0VBRVEsbUJBL0JpQjtFQWdDakIsYUFBYSxFQUFBOztBQUhyQjtFQU9RLG1CQW5DaUIsRUFBQTs7QUE0QnpCO0lBU1ksa0JBQWtCO0lBQ2xCLHFCQUFxQixFQUFBOztBQVZqQztNQVlnQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWMsRUFBQTs7QUFkOUI7UUFnQm9CLGVBQWU7UUFDZixnQkExQkw7UUEyQkssWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixrQkFBa0IsRUFBQTs7QUFwQnRDO1FBd0JvQixZQUFZO1FBQ1osZ0JBbkNKO1FBb0NJLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsK0JBaERlLEVBQUE7O0FBb0JuQztVQStCd0IsWUFBWTtVQUNaLHFCQUFxQjtVQUNyQixpREFBa0QsRUFBQTs7QUFqQzFFO1VBcUN3Qiw4QkFBOEIsRUFBQTs7QUFyQ3REO1FBMENvQixlQUFlO1FBQ2YsWUFBWTtRQUNaLGdCQXRESjtRQXVESSxnQkFBZ0IsRUFBQTs7QUE3Q3BDO1VBZ0R3Qiw0QkFuRVEsRUFBQTs7QUFtQmhDO1VBb0R3QixnQkE5RFI7VUErRFEsZUFBZTtVQUNmLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAgIHByaW1hcnktZ3JleTogI2U1ZTVlNSxcclxuICAgIHByaW1hcnktYmx1ZTogIzM4NTdmZlxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGNvbG9ycygkY29sb3IpIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3IpO1xyXG59XHJcblxyXG4kZm9udHM6IChcclxuICAgIHJvYm90bzogI3snUm9ib3RvJywgc2Fucy1zZXJpZn0sXHJcbiAgICBjYXZlYXQ6ICN7J0NhdmVhdCcsIGN1cnNpdmV9LFxyXG4gICAgcm9ib3RvLXNsYWI6ICN7J1JvYm90byBTbGFiJywgc2VyaWZ9XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZm9udCgkZm9udCkge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRmb250cywgJGZvbnQpO1xyXG59XHJcblxyXG4kZm9udC13ZWlnaHRzOiAoXHJcbiAgICByZWd1bGFyOiA0MDAsXHJcbiAgICBtZWRpdW06IDUwMCxcclxuICAgIGJvbGQ6IDcwMCxcclxuICAgIGJsYWNrOiA5MDBcclxuKTtcclxuXHJcbkBmdW5jdGlvbiB3ZWlnaHRzKCR3ZWlnaHQpIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkZm9udC13ZWlnaHRzLCAkd2VpZ2h0KTtcclxufVxyXG5cclxuLmRhc2hib2FyZCB7XHJcbiAgICAuaGVybyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3JzKHByaW1hcnktZ3JleSk7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmx1ZS1oZXJvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMocHJpbWFyeS1ibHVlKTtcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XHJcbiAgICAgICAgICAgIC5hYm91dC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHdlaWdodHMobWVkaXVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB3ZWlnaHRzKHJlZ3VsYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogZm9udChyb2JvdG8pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNpZ24td3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogd2VpZ2h0cyhyZWd1bGFyKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2lnbmF0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGZvbnQoY2F2ZWF0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHdlaWdodHMocmVndWxhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/profile-data/profile-data.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profile-data/profile-data.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile-data works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile-data/profile-data.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile-data/profile-data.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtZGF0YS9wcm9maWxlLWRhdGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile-data/profile-data.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-data/profile-data.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDataComponent", function() { return ProfileDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileDataComponent = /** @class */ (function () {
    function ProfileDataComponent() {
    }
    ProfileDataComponent.prototype.ngOnInit = function () {
    };
    ProfileDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-data',
            template: __webpack_require__(/*! ./profile-data.component.html */ "./src/app/profile-data/profile-data.component.html"),
            styles: [__webpack_require__(/*! ./profile-data.component.scss */ "./src/app/profile-data/profile-data.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileDataComponent);
    return ProfileDataComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
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

module.exports = __webpack_require__(/*! D:\Portfolio\my-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map