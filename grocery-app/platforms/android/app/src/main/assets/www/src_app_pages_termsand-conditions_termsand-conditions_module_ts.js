(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_termsand-conditions_termsand-conditions_module_ts"],{

/***/ 57562:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/termsand-conditions/termsand-conditions-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsandConditionsPageRoutingModule": () => (/* binding */ TermsandConditionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _termsand_conditions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsand-conditions.page */ 76356);




const routes = [
    {
        path: '',
        component: _termsand_conditions_page__WEBPACK_IMPORTED_MODULE_0__.TermsandConditionsPage
    }
];
let TermsandConditionsPageRoutingModule = class TermsandConditionsPageRoutingModule {
};
TermsandConditionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsandConditionsPageRoutingModule);



/***/ }),

/***/ 42192:
/*!*************************************************************************!*\
  !*** ./src/app/pages/termsand-conditions/termsand-conditions.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsandConditionsPageModule": () => (/* binding */ TermsandConditionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _termsand_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsand-conditions-routing.module */ 57562);
/* harmony import */ var _termsand_conditions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsand-conditions.page */ 76356);







let TermsandConditionsPageModule = class TermsandConditionsPageModule {
};
TermsandConditionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _termsand_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsandConditionsPageRoutingModule
        ],
        declarations: [_termsand_conditions_page__WEBPACK_IMPORTED_MODULE_1__.TermsandConditionsPage]
    })
], TermsandConditionsPageModule);



/***/ }),

/***/ 76356:
/*!***********************************************************************!*\
  !*** ./src/app/pages/termsand-conditions/termsand-conditions.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsandConditionsPage": () => (/* binding */ TermsandConditionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_termsand_conditions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./termsand-conditions.page.html */ 21656);
/* harmony import */ var _termsand_conditions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsand-conditions.page.scss */ 16107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ 51491);






let TermsandConditionsPage = class TermsandConditionsPage {
    constructor(router, route, _apiService) {
        this.router = router;
        this.route = route;
        this._apiService = _apiService;
        this.route.params.subscribe((param) => {
            this.AccountID = param.AccountID;
            console.log(this.AccountID);
            this.getAccount(this.AccountID);
        });
    }
    getAccount(AccountID) {
        this._apiService.getAccount(AccountID).subscribe((res) => {
            console.log('SUCESS');
        }, (err) => {
            console.log('ERROR', err);
        });
    }
    ngOnInit() {
    }
    TP() {
        this.router.navigate(['edit-profile', this.AccountID]);
    }
};
TermsandConditionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
TermsandConditionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-termsand-conditions',
        template: _raw_loader_termsand_conditions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_termsand_conditions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TermsandConditionsPage);



/***/ }),

/***/ 16107:
/*!*************************************************************************!*\
  !*** ./src/app/pages/termsand-conditions/termsand-conditions.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #FFE599;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.background-pict {\n  height: 150vh;\n  width: 100%;\n  background: url(\"http://192.168.40.32/gs-app/images/log.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%;\n  flex-direction: column;\n  justify-content: center;\n}\n\np {\n  text-align: justify;\n  text-indent: 20px;\n}\n\nion-card-title {\n  color: #242020;\n  font-size: 25px;\n  text-align: center;\n  font-weight: 20;\n}\n\nion-card {\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nion-item {\n  --ion-item-background:transparent;\n  --border-width:1px solid;\n  --inner-border-width:0;\n  --highlight-color-focused:none;\n}\n\nion-buttons {\n  float: right;\n}\n\nion-card-subtitle {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: #242020;\n  font-size: 14px;\n  text-align: center;\n}\n\nb {\n  color: #242020;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zYW5kLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSw2REFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDQTtFQUNHLG1CQUFBO0VBQ0EsaUJBQUE7QUFFSDs7QUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDRCxlQUFBO0FBR0g7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUdKOztBQURBO0VBRUksWUFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBS0oiLCJmaWxlIjoidGVybXNhbmQtY29uZGl0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkU1OTk7XHJcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG4uYmFja2dyb3VuZC1waWN0e1xyXG4gICAgaGVpZ2h0OiAxNTB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwOi8vMTkyLjE2OC40MC4zMi9ncy1hcHAvaW1hZ2VzL2xvZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbnB7XHJcbiAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgIHRleHQtaW5kZW50OiAyMHB4O1xyXG59XHJcbmlvbi1jYXJkLXRpdGxle1xyXG4gICAgY29sb3I6IzI0MjAyMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgZm9udC13ZWlnaHQ6IDIwO1xyXG4gIFxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOjFweCBzb2xpZDtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOjA7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOm5vbmU7XHJcbn1cclxuaW9uLWJ1dHRvbnN7XHJcbiAgIFxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjojMjQyMDIwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmJ7XHJcbiAgICBjb2xvcjojMjQyMDIwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 21656:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/termsand-conditions/termsand-conditions.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  \n  \n    <ion-card>\n      <ion-card-header>\n        <ion-buttons>\n          <ion-button (click)=\"TP()\">\n            <ion-icon name=\"close\" style=\"zoom:1.0;\"></ion-icon>\n          </ion-button>\n        </ion-buttons><br>\n        <ion-card-title>Grocery Store Recommender App Terms and Conditions\n        </ion-card-title>\n        <ion-card-subtitle><b>Last Updated:</b> October 25, 2021\n        </ion-card-subtitle>\n      </ion-card-header>\n\n    <ion-card-content>\n      <b>Agreement to Terms</b> <br>\n    <p>These Terms and Conditions constitute a legally binding agreement made between you, \n      the Customer (whom we refer as “you”, “your” or the “Customer” in this application)\n       concerning your access to and use of our mobile application (the Grocery Store Recommender App). \n       You agree that by accessing this Application, you have read, understood, and agree to be bound\n        by all of these Terms and Conditions Use. As such, information collected from this application \n        shall be held in strict confidence and shall only be used solely for records keeping purposes.\n      </p><br>\n      <p>IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, \n        THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE APPLICATION AND YOU MUST DISCONTINUE USE \n        IMMEDIATELY.\n        </p>\n        <br>\n      <p>The Application is intended for users who are at least 13 \n        years of age. All users who are minors in the jurisdiction in which they reside (generally\n         under the age of 18) must have the permission of, and be directly supervised by, their \n         parent or guardian to use the Application. If you are a minor, you must have your parent \n         or guardian read and agree to these Terms of Use prior to you using the Application.\n        </p><br><br>\n        <b>Data Policy</b> <br>\n        <p>Per Section 2 (Declaration of Policy) of the Data Privacy Act of 2012, it is the policy of \n          the State to protect the fundamental human right of privacy, of communication while ensuring \n          the free flow of information to promote innovation and growth. The State recognizes the vital \n          role of information and communication technology in nation-building and its inherent obligation \n          to ensure the personal information and communications system in the government and in the private \n          sector are secured and protected.\n\n          </p>\n  </ion-card-content>\n  </ion-card>\n \n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_termsand-conditions_termsand-conditions_module_ts.js.map