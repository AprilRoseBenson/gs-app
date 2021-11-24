(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_edit-profile_edit-profile_module_ts"],{

/***/ 59094:
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageRoutingModule": () => (/* binding */ EditProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page */ 11847);




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePage
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ 60483:
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-routing.module */ 59094);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 11847);







let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageRoutingModule
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage]
    })
], EditProfilePageModule);



/***/ }),

/***/ 11847:
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePage": () => (/* binding */ EditProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-profile.page.html */ 27998);
/* harmony import */ var _edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.scss */ 53663);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ 51491);








let EditProfilePage = class EditProfilePage {
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
            let customer_information = res[0];
            this.CustomerName = customer_information.CustomerName;
            this.CustomerAddress = customer_information.CustomerAddress;
            this.Age = customer_information.Age;
            this.Gender = customer_information.Gender;
            this.ContactNo = customer_information.ContactNo;
        }, (err) => {
            console.log('ERROR', err);
        });
    }
    updateProfile() {
        let data = {
            CustomerName: this.CustomerName,
            CustomerAddress: this.CustomerAddress,
            Age: this.Age,
            Gender: this.Gender,
            ContactNo: this.ContactNo,
        };
        this._apiService.updateProfile(this.AccountID, data).subscribe((res) => {
            console.log("SUCCESS", res);
            this.successAlert();
        }, (err) => {
            console.log("ERROR", err);
        });
    }
    successAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Edit Info',
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
    TP() {
        this.router.navigate(['termsand-conditions', this.AccountID]);
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
EditProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
EditProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-profile',
        template: _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditProfilePage);



/***/ }),

/***/ 53663:
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #FFE599;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.background-pict {\n  height: 80vh;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-card {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: white;\n  box-shadow: none !important;\n}\n\nion-card-title {\n  color: #1F9BFD;\n}\n\nion-label {\n  color: #1F9BFD;\n}\n\nion-label.profile {\n  color: white;\n  font-size: 15px;\n}\n\nion-label.password {\n  color: black;\n  font-size: 15px;\n}\n\nion-tab-button.password {\n  border-bottom: 2px solid #1F9BFD;\n  max-width: 100%;\n}\n\nion-tab-button.profile {\n  background-color: #1F9BFD;\n  border-bottom: 2px solid #1F9BFD;\n  max-width: 100%;\n}\n\nspan {\n  width: 30px;\n  font-size: 25px;\n}\n\nion-button {\n  text-transform: initial;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQyxhQUFBO0VBQ0Qsc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFLQTtFQUNJLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7QUFGSjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6ImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkU1OTk7XHJcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLXBpY3R7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG5pb24tY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiAjMUY5QkZEO1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogIzFGOUJGRDtcclxufVxyXG5pb24tbGFiZWwucHJvZmlsZXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmlvbi1sYWJlbC5wYXNzd29yZHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmlvbi10YWItYnV0dG9uLnBhc3N3b3Jke1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzFGOUJGRDtcclxuICAgIG1heC13aWR0aDogMTAwJTsgIFxyXG59XHJcbmlvbi10YWItYnV0dG9uLnByb2ZpbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxRjlCRkQ7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMUY5QkZEO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5zcGFue1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 27998:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<meta name='viewport' content='width=device-width, initial-scale=1'>\n<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\n\n<ion-header>\n<ion-toolbar color=\"secondary\">\n  <ion-buttons slot=\"start\">\n    <ion-button (click)=\"discardAlert()\">\n      <ion-icon name=\"arrow-back\" style=\"zoom:1.0;\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"TP()\" class=\"edit\">Terms & Policies</ion-button>\n</ion-buttons>\n</ion-toolbar>\n</ion-header>\n\n<ion-content full-screen>\n<div class=\"background-pict\">\n \n    <ion-card>\n      <ion-toolbar>\n        <ion-tabs>\n          <ion-tab-bar slot=\"bottom\" >    \n            <ion-tab-button class=\"profile\" (click)=\"editProfile()\">\n              <ion-label class=\"profile\">Profie</ion-label>\n            </ion-tab-button>\n      \n            <ion-tab-button class=\"password\" (click)=\"editPassword()\">\n              <ion-label class=\"password\">Password</ion-label>\n            </ion-tab-button>\n          </ion-tab-bar>\n        </ion-tabs>\n      </ion-toolbar>\n      <ion-card-header>\n        <ion-card-title><b>User Profile</b></ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n      <ion-list lines=\"full\">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\"><b>Full Name</b></ion-label>\n              <ion-input [(ngModel)]=\"CustomerName\" type=\"text\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\"><b>Address</b></ion-label>\n              <ion-input [(ngModel)]=\"CustomerAddress\" type=\"text\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"stacked\"><b>Age</b></ion-label>\n                <ion-input [(ngModel)]=\"Age\" type=\"text\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"stacked\"><b>Gender</b></ion-label>\n                <ion-input [(ngModel)]=\"Gender\" type=\"text\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"stacked\"><b>Contact No.</b></ion-label>\n                <ion-input [(ngModel)]=\"ContactNo\" type=\"text\"></ion-input>\n              </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"button\" (click)=\"updateProfile()\" color=\"primary\">\n              Save Changes\n            </ion-button>\n          </ion-col>\n        </ion-row>    \n      </ion-list>      \n      </ion-card-content>\n    </ion-card>\n  </div>\n \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_edit-profile_edit-profile_module_ts.js.map