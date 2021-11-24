(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_forgotpw_forgotpw_module_ts"],{

/***/ 81668:
/*!***********************************************************!*\
  !*** ./src/app/pages/forgotpw/forgotpw-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpwPageRoutingModule": () => (/* binding */ ForgotpwPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _forgotpw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpw.page */ 7737);




const routes = [
    {
        path: '',
        component: _forgotpw_page__WEBPACK_IMPORTED_MODULE_0__.ForgotpwPage
    }
];
let ForgotpwPageRoutingModule = class ForgotpwPageRoutingModule {
};
ForgotpwPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotpwPageRoutingModule);



/***/ }),

/***/ 45232:
/*!***************************************************!*\
  !*** ./src/app/pages/forgotpw/forgotpw.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpwPageModule": () => (/* binding */ ForgotpwPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _forgotpw_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpw-routing.module */ 81668);
/* harmony import */ var _forgotpw_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpw.page */ 7737);







let ForgotpwPageModule = class ForgotpwPageModule {
};
ForgotpwPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgotpw_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotpwPageRoutingModule
        ],
        declarations: [_forgotpw_page__WEBPACK_IMPORTED_MODULE_1__.ForgotpwPage]
    })
], ForgotpwPageModule);



/***/ }),

/***/ 7737:
/*!*************************************************!*\
  !*** ./src/app/pages/forgotpw/forgotpw.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpwPage": () => (/* binding */ ForgotpwPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_forgotpw_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgotpw.page.html */ 63927);
/* harmony import */ var _forgotpw_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpw.page.scss */ 85562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);







let ForgotpwPage = class ForgotpwPage {
    constructor(navCTrl, http, alrt) {
        this.navCTrl = navCTrl;
        this.http = http;
        this.alrt = alrt;
        this.data = {};
        this.accounts = [];
        this.data.EmailAddress = '';
    }
    ngOnInit() {
    }
    CheckGmail() {
        if (this.data.EmailAddress !== '') {
            console.log('Email: ', this.data.EmailAddress);
            let url = 'http://192.168.40.32/gs-app/backend/getEmail.php';
            let dataPost = JSON.stringify({
                email: this.data.EmailAddress
            });
            this.http.post(url, dataPost)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res))
                .subscribe(data => {
                if (data != null) {
                    this.accountID = data[0].AccountID;
                    this.navCTrl.navigateForward(['/resetpassword', this.accountID]);
                }
                else {
                    this.presentAlert();
                    this.data.EmailAddress = '';
                }
            });
        }
        else {
            console.log('Enter email');
        }
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alrt.create({
                subHeader: 'No matches email address',
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
};
ForgotpwPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
ForgotpwPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgotpw',
        template: _raw_loader_forgotpw_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgotpw_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotpwPage);



/***/ }),

/***/ 85562:
/*!***************************************************!*\
  !*** ./src/app/pages/forgotpw/forgotpw.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ionic-background-color: peachpuff;\n  --background: #FFE599;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.background-pict {\n  height: 80vh;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-card-title {\n  color: #242020;\n  font-size: 25px;\n  text-align: center;\n}\n\nion-card-subtitle {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #242020;\n  font-size: 14px;\n  text-align: center;\n}\n\na {\n  height: 50vh;\n  text-decoration: none;\n  color: blue;\n  font-weight: 300;\n  font-size: 15px;\n}\n\nion-card {\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-item {\n  --ion-item-background:transparent;\n  --border-width:0;\n  --inner-border-width:0;\n  --highlight-color-focused:none;\n}\n\nion-button {\n  width: 300px;\n  height: 40px;\n  --border-radius: 10px;\n  --background: #3c91c9;\n  color: #fff;\n  font-weight: 400;\n  text-transform: none;\n  font-size: 20px;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-card-content {\n  --ion-item-background:transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHB3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ1EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUtSOztBQUhBO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUpBO0VBQ0ksaUNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFPSjs7QUFMQTtFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUxBO0VBQ0ksaUNBQUE7QUFRSiIsImZpbGUiOiJmb3Jnb3Rwdy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWlvbmljLWJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRTU5OTtcclxuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmJhY2tncm91bmQtcGljdHtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW9uLWNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjojMjQyMDIwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjojMjQyMDIwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmF7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgIGNvbG9yOmJsdWU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbmlvbi1jYXJke1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItd2lkdGg6MDtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOjA7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOm5vbmU7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzYzkxYzk7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 63927:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpw/forgotpw.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"background-pict\">\r\n  <div class=\"flex-center\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>Forgot Password</ion-card-title>\r\n        <ion-card-subtitle>Enter your email address to reset</ion-card-subtitle>\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content> \r\n        <ion-list lines = \"full\">\r\n        <ion-item >\r\n          <ion-label position=\"floating\">Email Address</ion-label>\r\n          <ion-input [(ngModel)] = \"data.EmailAddress\" type=\"email\"></ion-input>\r\n        </ion-item>\r\n      </ion-list> \r\n        <ion-button type =\"button\" (click)=\"CheckGmail()\" \r\n                color=\"primary\" shape=\"block\" expand=\"block\">\r\n                Continue\r\n        </ion-button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgotpw_forgotpw_module_ts.js.map