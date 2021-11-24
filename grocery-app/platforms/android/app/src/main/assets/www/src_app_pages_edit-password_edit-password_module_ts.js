(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_edit-password_edit-password_module_ts"],{

/***/ 22321:
/*!*********************************************************************!*\
  !*** ./src/app/pages/edit-password/edit-password-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPasswordPageRoutingModule": () => (/* binding */ EditPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _edit_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-password.page */ 16775);




const routes = [
    {
        path: '',
        component: _edit_password_page__WEBPACK_IMPORTED_MODULE_0__.EditPasswordPage
    }
];
let EditPasswordPageRoutingModule = class EditPasswordPageRoutingModule {
};
EditPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditPasswordPageRoutingModule);



/***/ }),

/***/ 77477:
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-password/edit-password.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPasswordPageModule": () => (/* binding */ EditPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _edit_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-password-routing.module */ 22321);
/* harmony import */ var _edit_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-password.page */ 16775);







let EditPasswordPageModule = class EditPasswordPageModule {
};
EditPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPasswordPageRoutingModule
        ],
        declarations: [_edit_password_page__WEBPACK_IMPORTED_MODULE_1__.EditPasswordPage]
    })
], EditPasswordPageModule);



/***/ }),

/***/ 16775:
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-password/edit-password.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPasswordPage": () => (/* binding */ EditPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_edit_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-password.page.html */ 93431);
/* harmony import */ var _edit_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-password.page.scss */ 27385);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ 51491);








let EditPasswordPage = class EditPasswordPage {
    constructor(router, route, _apiService, http, alertController) {
        this.router = router;
        this.route = route;
        this._apiService = _apiService;
        this.http = http;
        this.alertController = alertController;
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
    updatePassword() {
        let data = {
            Password: this.NewPassword,
            CurrentPassword: this.CurrentPassword
        };
        this._apiService.getAccount(this.AccountID).subscribe((res) => {
            let customer_information = res[0];
            if (this.NewPassword == this.RetypeNewPassword && this.CurrentPassword == customer_information.Password) {
                this._apiService.Reset(this.AccountID, data).subscribe((res) => {
                    console.log('SUCESS');
                    this.successAlert();
                    this.NewPassword = '';
                    this.RetypeNewPassword = '';
                    this.CurrentPassword = '';
                }, (err) => {
                    console.log('ERROR', err);
                });
            }
            else if (this.NewPassword == this.RetypeNewPassword && this.CurrentPassword != customer_information.Password) {
                this.errorAlert();
                this.NewPassword = '';
                this.CurrentPassword = '';
                this.RetypeNewPassword = '';
                console.log('ERROR');
            }
            else if (this.NewPassword != this.RetypeNewPassword && this.CurrentPassword == customer_information.Password) {
                this.errorAlert1();
                this.NewPassword = '';
                this.CurrentPassword = '';
                this.RetypeNewPassword = '';
                console.log('ERROR');
            }
            else {
                this.errorAlert2();
                this.NewPassword = '';
                this.CurrentPassword = '';
                this.RetypeNewPassword = '';
                console.log('ERROR');
            }
        }, (err) => {
            console.log('ERROR', err);
        });
    }
    TP() {
        this.router.navigate(['termsand-conditions', this.AccountID]);
    }
    successAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Change Password',
                message: 'Changes has been saved!',
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['profile', this.AccountID]);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    errorAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Current Password does not match the password',
                buttons: [
                    {
                        text: 'OK',
                    }
                ]
            });
            yield alert.present();
        });
    }
    errorAlert1() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Please make sure your passwords match',
                buttons: [
                    {
                        text: 'OK',
                    }
                ]
            });
            yield alert.present();
        });
    }
    errorAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Passwords does not match',
                buttons: [
                    {
                        text: 'OK',
                    }
                ]
            });
            yield alert.present();
        });
    }
    discardAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Edit Info',
                message: 'Discard changes?',
                buttons: [
                    {
                        text: "Cancel",
                        handler: () => {
                        }
                    },
                    {
                        text: "Yes",
                        handler: () => {
                            this.router.navigate(['profile', this.AccountID]);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editProfile() {
        this.router.navigate(['edit-profile', this.AccountID]);
    }
    editPassword() {
        this.router.navigate(['edit-password', this.AccountID]);
    }
};
EditPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
EditPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-password',
        template: _raw_loader_edit_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditPasswordPage);



/***/ }),

/***/ 27385:
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-password/edit-password.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #FFE599;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.background-pict {\n  height: 80vh;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-card {\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  justify-content: center;\n  background: white;\n  box-shadow: none !important;\n}\n\nion-card-title {\n  color: #1F9BFD;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-label {\n  color: #1F9BFD;\n}\n\nion-label.profile {\n  color: black;\n  font-size: 15px;\n}\n\nion-label.password {\n  color: white;\n  font-size: 15px;\n}\n\nion-tab-button.password {\n  background-color: #1F9BFD;\n  border-bottom: 2px solid #1F9BFD;\n  max-width: 100%;\n}\n\nion-tab-button.profile {\n  border-bottom: 2px solid #1F9BFD;\n  max-width: 100%;\n}\n\nspan {\n  width: 30px;\n  font-size: 25px;\n}\n\nion-button {\n  text-transform: initial;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpKOztBQU9BO0VBQ0ksY0FBQTtBQUpKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFISjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUE7RUFFSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoiZWRpdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkU1OTk7XHJcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXBpY3R7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgIFxyXG5cclxufVxyXG5cclxuXHJcbmlvbi1jYXJkLXRpdGxle1xyXG4gICAgY29sb3I6ICMxRjlCRkQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogIzFGOUJGRDtcclxufVxyXG5pb24tbGFiZWwucHJvZmlsZXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmlvbi1sYWJlbC5wYXNzd29yZHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmlvbi10YWItYnV0dG9uLnBhc3N3b3Jke1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxRjlCRkQ7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMUY5QkZEO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbmlvbi10YWItYnV0dG9uLnByb2ZpbGV7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMUY5QkZEO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyBcclxufVxyXG5cclxuc3BhbntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 93431:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-password/edit-password.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<meta name='viewport' content='width=device-width, initial-scale=1'>\n<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\n\n<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"discardAlert()\">\n        <ion-icon name=\"arrow-back\" style=\"zoom:1.0;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"TP()\" class=\"edit\">Terms & Policies</ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n  </ion-header>\n\n<ion-content full-screen>\n<div class=\"background-pict\">\n \n    <ion-card >\n      <ion-toolbar>\n        <ion-tabs>\n          <ion-tab-bar slot=\"bottom\" >    \n            <ion-tab-button class=\"profile\" (click)=\"editProfile()\">\n              <ion-label class=\"profile\">Profie</ion-label>\n            </ion-tab-button>\n      \n            <ion-tab-button class=\"password\" (click)=\"editPassword()\">\n              <ion-label class=\"password\">Password</ion-label>\n            </ion-tab-button>\n          </ion-tab-bar>\n        </ion-tabs>\n      </ion-toolbar>\n      <ion-card-header>\n        <ion-card-title><b>User Password</b></ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n      <ion-list lines=\"full\">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\"><b>Current Password</b></ion-label>\n              <ion-input [(ngModel)]=\"CurrentPassword\" type=\"password\"></ion-input>\n            \n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\"><b>New Password</b></ion-label>\n              <ion-input [(ngModel)]=\"NewPassword\" type=\"password\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\"><b>Re-type new password</b></ion-label>\n              <ion-input [(ngModel)]=\"RetypeNewPassword\" type=\"password\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col>\n            <ion-button type=\"button\" (click)=\"updatePassword()\" color=\"primary\">\n              Update Password\n            </ion-button>\n          </ion-col>\n        </ion-row>    \n      </ion-list>      \n      </ion-card-content>\n    </ion-card>\n  </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_edit-password_edit-password_module_ts.js.map