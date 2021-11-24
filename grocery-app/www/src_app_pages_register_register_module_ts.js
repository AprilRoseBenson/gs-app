(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 81557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 66690);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 60207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 81557);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 66690);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 66690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 84315);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 43436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ 51491);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);









let RegisterPage = class RegisterPage {
    constructor(alertController, router, http, _apiService) {
        this.alertController = alertController;
        this.router = router;
        this.http = http;
        this._apiService = _apiService;
        this.isTermsAccepted = false;
        this.customPopoverOptions = {};
        this.customPopoverOptions2 = {};
    }
    TermsandCondtions() {
        this.isTermsAccepted = !this.isTermsAccepted;
    }
    tp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Agreement to Terms',
                subHeader: 'Last Updated: October 25, 2021',
                message: '<div class="c-no-margin">' +
                    '<p   >These Terms and Conditions constitute a legally binding agreement made between you, the Customer (whom we refer as “you”, “your” or the “Customer” in this application) concerning your access to and use of our mobile application (the Grocery Store Recommender App).  You agree that by accessing this Application, you have read, understood, and agree to be bound by all of these Terms and Conditions Use. As such, information collected from this application   shall be held in strict confidence and shall only be used solely for records keeping purposes.</p><p>IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE APPLICATION AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p> <p>The Application is intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Application. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use prior to you using the Application.</p>' +
                    '</div>',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    dp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Data Policy',
                subHeader: 'Last Updated: October 25, 2021',
                message: '<div class="c-no-margin">' +
                    '<p   >Per Section 2 (Declaration of Policy) of the Data Privacy Act of 2012, it is the policy of the State to protect the fundamental human right of privacy, of communication while ensuring the free flow of information to promote innovation and growth. The State recognizes the vital role of information and communication technology in nation-building and its inherent obligation to ensure the personal information and communications system in the government and in the private sector are secured and protected..</p>' +
                    '</div>',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    AddAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.CustomerName == null || this.CustomerAddress == null || this.Age == null || this.Gender == null || this.ContactNo == null || this.Username == null || this.EmailAddress == null || this.Password == null) {
                console.log("All fields are required");
                const alert = yield this.alertController.create({
                    cssClass: 'basic-alert',
                    header: 'Sign Up',
                    subHeader: 'All fields are required!',
                    buttons: ['Try Again']
                });
                yield alert.present();
            }
            else if (this.CustomerName !== '' && this.CustomerAddress !== '' && this.Age !== '' && this.Gender !== '' && this.ContactNo !== '' && this.Username !== '' && this.EmailAddress !== '' && this.Password !== '') {
                console.log("CustomerName:", this.CustomerName);
                console.log("CustomerAddress:", this.CustomerAddress);
                console.log("Age:", this.Age);
                console.log("Gender:", this.Gender);
                console.log("ContactNo:", this.ContactNo);
                console.log("Username:", this.Username);
                console.log("EmailAddress:", this.EmailAddress);
                console.log("Password:", this.Password);
                let url = 'http://192.168.40.32/gs-app/backend/create.php';
                let data = JSON.stringify({
                    CustomerName: this.CustomerName,
                    CustomerAddress: this.CustomerAddress,
                    Age: this.Age,
                    Gender: this.Gender,
                    ContactNo: this.ContactNo,
                    Username: this.Username,
                    EmailAddress: this.EmailAddress,
                    Password: this.Password,
                });
                this.http.post(url, data)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res))
                    .subscribe(data => {
                    if (data != null) {
                        this.successAlert();
                    }
                    else {
                        this.FailPopup();
                    }
                });
            }
        });
    }
    cancel() {
        this.router.navigate(['mainscreen']);
    }
    login() {
        this.router.navigate(['login']);
    }
    successAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Registered Successfully! ',
                message: 'Do you want to proceed?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.router.navigate(['\login']);
                        }
                    }, {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                            this.CustomerName = '';
                            this.CustomerAddress = '';
                            this.Age = '';
                            this.Gender = '';
                            this.ContactNo = '';
                            this.Username = '';
                            this.EmailAddress = '';
                            this.Password = '';
                            this.isTermsAccepted = false;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    FailPopup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Error',
                subHeader: 'All fields are required!',
                buttons: ['Try Again']
            });
            yield alert.present();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 43436:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #FFE599;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.background-pict {\n  height: 138vh;\n  width: 100%;\n  background: url(\"http://192.168.40.32/gs-app/images/log.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-card-title {\n  color: #242020;\n  font-size: 25px;\n  text-align: center;\n}\n\nion-card {\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-item {\n  --ion-item-background:transparent;\n  --border-width:0;\n  --inner-border-width:0;\n  --highlight-color-focused:none;\n}\n\nion-card-content {\n  --ion-item-background:transparent;\n}\n\nion-button {\n  width: 350px;\n  height: 40px;\n  --border-radius: 10px;\n  --background: #3c91c9;\n  color: #fff;\n  font-weight: 400;\n  text-transform: none;\n  font-size: 20px;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-card-subtitle {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #242020;\n  font-size: 14px;\n  text-align: center;\n}\n\n.my-custom-class {\n  justify-content: left;\n  color: #A0A !important;\n  font-size: 2em !important;\n}\n\n.c-no-margin {\n  font-size: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkRBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUdKOztBQURBO0VBQ0ksaUNBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQU9KOztBQUpFO0VBQ0UsY0FBQTtBQU9KIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRTU5OTtcclxuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbi5iYWNrZ3JvdW5kLXBpY3R7XHJcbiAgICBoZWlnaHQ6IDEzOHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly8xOTIuMTY4LjQwLjMyL2dzLWFwcC9pbWFnZXMvbG9nLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW9uLWNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjojMjQyMDIwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOjA7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDowO1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDpub25lO1xyXG59XHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzNjOTFjOTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6IzI0MjAyMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubXktY3VzdG9tLWNsYXNze1xyXG4gICAganVzdGlmeS1jb250ZW50OmxlZnQ7XHJcbiAgICBjb2xvcjogI0EwQSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcclxuICAgIFxyXG4gIH1cclxuICAuYy1uby1tYXJnaW57XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICB9Il19 */");

/***/ }),

/***/ 84315:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n \r\n   \r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>Create Account</ion-card-title>\r\n        <ion-card-subtitle>Kindly fill up this form to be officially registered</ion-card-subtitle>\r\n      </ion-card-header>\r\n\r\n    <ion-card-content>\r\n    <ion-list lines = \"full\">\r\n    <ion-item>\r\n      <ion-label position =\"floating\">Full Name</ion-label>\r\n      <ion-input [(ngModel)] = \"CustomerName\" type = \"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position =\"floating\">Full Address</ion-label>\r\n      <ion-input [(ngModel)] = \"CustomerAddress\" type = \"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n    <ion-item>\r\n   \r\n      \r\n      <ion-label position =\"floating\">Age</ion-label>\r\n      <ion-input [(ngModel)] = \"Age\" type = \"text\"></ion-input>\r\n    </ion-item>\r\n  </ion-col>\r\n  <ion-col>\r\n    <ion-item>\r\n    \r\n      <ion-label position =\"floating\">Gender</ion-label>\r\n      <ion-select [(ngModel)]=\"Gender\" placeholder=\"Choose One\">\r\n      <ion-select-option value = \"Female\">Female</ion-select-option>\r\n      <ion-select-option value = \"Male\">Male</ion-select-option>\r\n      <ion-select-option value = \"I prefer not to say\">I prefer not to say</ion-select-option>\r\n    </ion-select>\r\n    </ion-item>\r\n  </ion-col>\r\n  <ion-col>\r\n    <ion-item>\r\n      <ion-label position =\"floating\">Contact No.</ion-label>\r\n      <ion-input [(ngModel)] = \"ContactNo\" type = \"text\"></ion-input>\r\n    </ion-item>\r\n  </ion-col>\r\n  </ion-row>\r\n\r\n    <ion-item>\r\n      <ion-label position =\"floating\">Username</ion-label>\r\n      <ion-input [(ngModel)] = \"Username\" type = \"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position =\"floating\">Email Address</ion-label>\r\n      <ion-input [(ngModel)] = \"EmailAddress\" type = \"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position =\"floating\">Password</ion-label>\r\n      <ion-input [(ngModel)] = \"Password\" type = \"password\"></ion-input>\r\n    </ion-item>\r\n    <ion-card-subtitle><ion-checkbox (ionChange)=\"TermsandCondtions()\"></ion-checkbox>&nbsp;Check here to indicate that you agree to our <a (click)=\"tp()\">Terms</a>\r\n      and that you have read our <a (click)=\"dp()\">Data Policy</a>.\r\n    </ion-card-subtitle>\r\n    <ion-button [disabled]=\"!isTermsAccepted\" shape=\"block\" type =\"button\" (click)=\"AddAccount()\" >SIGN UP</ion-button>\r\n    <ion-card-subtitle>Already have an account ? <a (click)=\"login()\">Sign In</a></ion-card-subtitle>\r\n  </ion-list>\r\n  </ion-card-content>\r\n  </ion-card>\r\n  \r\n \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map