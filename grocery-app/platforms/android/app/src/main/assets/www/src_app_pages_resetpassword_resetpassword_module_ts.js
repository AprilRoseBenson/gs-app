(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_resetpassword_resetpassword_module_ts"],{

/***/ 69615:
/*!*********************************************************************!*\
  !*** ./src/app/pages/resetpassword/resetpassword-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordPageRoutingModule": () => (/* binding */ ResetpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetpassword.page */ 95521);




const routes = [
    {
        path: '',
        component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordPage
    }
];
let ResetpasswordPageRoutingModule = class ResetpasswordPageRoutingModule {
};
ResetpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetpasswordPageRoutingModule);



/***/ }),

/***/ 8025:
/*!*************************************************************!*\
  !*** ./src/app/pages/resetpassword/resetpassword.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordPageModule": () => (/* binding */ ResetpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resetpassword-routing.module */ 69615);
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetpassword.page */ 95521);







let ResetpasswordPageModule = class ResetpasswordPageModule {
};
ResetpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetpasswordPageRoutingModule
        ],
        declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_1__.ResetpasswordPage]
    })
], ResetpasswordPageModule);



/***/ }),

/***/ 95521:
/*!***********************************************************!*\
  !*** ./src/app/pages/resetpassword/resetpassword.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetpasswordPage": () => (/* binding */ ResetpasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./resetpassword.page.html */ 25046);
/* harmony import */ var _resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetpassword.page.scss */ 7903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ 16137);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.service */ 51491);








let ResetpasswordPage = class ResetpasswordPage {
    constructor(route, router, _apiService, alrt, toastCtrl) {
        this.route = route;
        this.router = router;
        this._apiService = _apiService;
        this.alrt = alrt;
        this.toastCtrl = toastCtrl;
        this.route.params.subscribe((param) => {
            this.AccountID = param.AccountID;
            console.log(this.AccountID);
            this.getAccount(this.AccountID);
        });
    }
    ngOnInit() {
    }
    getAccount(AccountID) {
        this._apiService.getAccount(AccountID).subscribe((res) => {
            console.log('SUCESS');
        }, (err) => {
            console.log('ERROR', err);
        });
    }
    Reset() {
        let data = {
            Password: this.Password,
        };
        this._apiService.Reset(this.AccountID, data).subscribe((res) => {
            if (this.Password == this.ConfirmPassword) {
                console.log('SUCESS');
                this.successAlert();
                this.router.navigateByUrl('/login');
            }
            else {
                this.presentAlert();
                this.ConfirmPassword = '';
            }
        }, (err) => {
            console.log('ERROR', err);
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alrt.create({
                subHeader: 'Password confirmation does not match the password',
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
    successAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                header: 'Password has been changed!',
                duration: 2000,
                color: 'light'
            });
            toast.present();
        });
    }
};
ResetpasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ResetpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-resetpassword',
        template: _raw_loader_resetpassword_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_resetpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResetpasswordPage);



/***/ }),

/***/ 7903:
/*!*************************************************************!*\
  !*** ./src/app/pages/resetpassword/resetpassword.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ionic-background-color: peachpuff;\n  --background: #FFE599;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.background-pict {\n  height: 90vh;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-card-title {\n  color: #242020;\n  font-size: 25px;\n  text-align: center;\n}\n\nion-card-subtitle {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #242020;\n  font-size: 14px;\n  text-align: center;\n}\n\na {\n  height: 50vh;\n  text-decoration: none;\n  color: blue;\n  font-weight: 300;\n  font-size: 14px;\n}\n\nion-card {\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-item {\n  --ion-item-background:transparent;\n  --border-width:0;\n  --inner-border-width:0;\n  --highlight-color-focused:none;\n}\n\nion-button {\n  width: 300px;\n  height: 40px;\n  --border-radius: 10px;\n  --background: #3c91c9;\n  color: #fff;\n  font-weight: 400;\n  text-transform: none;\n  font-size: 20px;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-card-content {\n  --ion-item-background:transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDUSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSVI7O0FBRkE7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBS0o7O0FBSEE7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBQUE7RUFDSSxpQ0FBQTtBQUdKIiwiZmlsZSI6InJlc2V0cGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb25pYy1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkU1OTk7XHJcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG4uYmFja2dyb3VuZC1waWN0e1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5pb24tY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiMyNDIwMjA7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiMyNDIwMjA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYXtcclxuICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgY29sb3I6Ymx1ZTtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci13aWR0aDowO1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6MDtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6bm9uZTtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjM2M5MWM5O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuXHJcbiAgICAgXHJcbiAgIFxyXG4gICAgXHJcbn1cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 25046:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpassword/resetpassword.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"forgotpw\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"background-pict\">\n  <div class=\"flex-center\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>New Password</ion-card-title>\n        <ion-card-subtitle>Please create a new password that you don't use on any other site</ion-card-subtitle>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <ion-list lines = \"full\">\n        <ion-item>\n          <ion-label position=\"floating\">Create New Password</ion-label>\n          <ion-input [(ngModel)] = \"Password\" type=\"password\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position =\"floating\">Confirm Password</ion-label>\n          <ion-input [(ngModel)] = \"ConfirmPassword\" type = \"password\"></ion-input>\n        </ion-item>\n      </ion-list >\n        <ion-button type =\"button\" (click)=\"Reset()\" \n                color=\"primary\" shape=\"block\">\n                Reset\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_resetpassword_resetpassword_module_ts.js.map