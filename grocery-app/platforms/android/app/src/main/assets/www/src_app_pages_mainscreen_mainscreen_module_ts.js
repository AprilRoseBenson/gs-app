(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_mainscreen_mainscreen_module_ts"],{

/***/ 53709:
/*!***************************************************************!*\
  !*** ./src/app/pages/mainscreen/mainscreen-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainscreenPageRoutingModule": () => (/* binding */ MainscreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mainscreen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainscreen.page */ 94736);




const routes = [
    {
        path: '',
        component: _mainscreen_page__WEBPACK_IMPORTED_MODULE_0__.MainscreenPage
    }
];
let MainscreenPageRoutingModule = class MainscreenPageRoutingModule {
};
MainscreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainscreenPageRoutingModule);



/***/ }),

/***/ 41736:
/*!*******************************************************!*\
  !*** ./src/app/pages/mainscreen/mainscreen.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainscreenPageModule": () => (/* binding */ MainscreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mainscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainscreen-routing.module */ 53709);
/* harmony import */ var _mainscreen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainscreen.page */ 94736);







let MainscreenPageModule = class MainscreenPageModule {
};
MainscreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mainscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainscreenPageRoutingModule
        ],
        declarations: [_mainscreen_page__WEBPACK_IMPORTED_MODULE_1__.MainscreenPage]
    })
], MainscreenPageModule);



/***/ }),

/***/ 94736:
/*!*****************************************************!*\
  !*** ./src/app/pages/mainscreen/mainscreen.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainscreenPage": () => (/* binding */ MainscreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mainscreen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mainscreen.page.html */ 70601);
/* harmony import */ var _mainscreen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainscreen.page.scss */ 73905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let MainscreenPage = class MainscreenPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    loginPage() {
        this.route.navigate(['login']);
    }
    signupPage() {
        this.route.navigate(['register']);
    }
};
MainscreenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MainscreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-mainscreen',
        template: _raw_loader_mainscreen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mainscreen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainscreenPage);



/***/ }),

/***/ 73905:
/*!*******************************************************!*\
  !*** ./src/app/pages/mainscreen/mainscreen.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  margin-top: 100px;\n  --ion-background-color: #fff;\n}\n\n.background-container {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  background: url(\"http://192.168.40.32/gs-app/images/home_screen.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-card {\n  text-align: center;\n  background: transparent;\n  box-shadow: none;\n}\n\nion-card ion-card-title {\n  margin-top: 1000px;\n  font-size: 20px;\n  color: #239b47;\n  font-weight: 400;\n}\n\nion-card ion-card-content {\n  margin-top: 200px;\n}\n\nion-card ion-card-content ion-button {\n  width: 200px;\n  height: 50px;\n  --border-radius: 10px;\n  --background: #3c91c9;\n  color: #fff;\n  font-weight: 400;\n  text-transform: none;\n  font-size: 20px;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media screen and (min-width: 500px) {\n  .background-filter {\n    height: 100%;\n    width: 100%;\n    background: rgba(235, 228, 198, 0.9);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5zY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBRUksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUVBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7QUFISjs7QUFLSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhSOztBQVNBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG9DQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7RUFOTjtBQUNGIiwiZmlsZSI6Im1haW5zY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWNvbnRhaW5lcntcclxuXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwOi8vMTkyLjE2OC40MC4zMi9ncy1hcHAvaW1hZ2VzL2hvbWVfc2NyZWVuLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcblxyXG5pb24tY2FyZC10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDEwMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMjM5YjQ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzNjOTFjOTtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1MDBweCl7XHJcbiAgICAuYmFja2dyb3VuZC1maWx0ZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM1LCAyMjgsIDE5OCwgMC45KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 70601:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mainscreen/mainscreen.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <div class=\"background-container\">\r\n\r\n    <div class=\"background-filter\">\r\n\r\n\r\n\r\n    <ion-card>\r\n      <ion-card-header>\r\n      \r\n        \r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-button (click)=\"loginPage()\" shape=\"block\">\r\n          Sign in\r\n        </ion-button>\r\n        <ion-button (click)=\"signupPage()\"  shape=\"block\">\r\n          Sign Up\r\n        </ion-button>\r\n        \r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mainscreen_mainscreen_module_ts.js.map