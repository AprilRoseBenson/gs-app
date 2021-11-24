(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_suggested-store_suggested-store_module_ts"],{

/***/ 72715:
/*!*************************************************************************!*\
  !*** ./src/app/pages/suggested-store/suggested-store-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuggestedStorePageRoutingModule": () => (/* binding */ SuggestedStorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _suggested_store_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suggested-store.page */ 54897);




const routes = [
    {
        path: '',
        component: _suggested_store_page__WEBPACK_IMPORTED_MODULE_0__.SuggestedStorePage
    }
];
let SuggestedStorePageRoutingModule = class SuggestedStorePageRoutingModule {
};
SuggestedStorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SuggestedStorePageRoutingModule);



/***/ }),

/***/ 94686:
/*!*****************************************************************!*\
  !*** ./src/app/pages/suggested-store/suggested-store.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuggestedStorePageModule": () => (/* binding */ SuggestedStorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _suggested_store_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./suggested-store-routing.module */ 72715);
/* harmony import */ var _suggested_store_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suggested-store.page */ 54897);







let SuggestedStorePageModule = class SuggestedStorePageModule {
};
SuggestedStorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _suggested_store_routing_module__WEBPACK_IMPORTED_MODULE_0__.SuggestedStorePageRoutingModule
        ],
        declarations: [_suggested_store_page__WEBPACK_IMPORTED_MODULE_1__.SuggestedStorePage]
    })
], SuggestedStorePageModule);



/***/ }),

/***/ 54897:
/*!***************************************************************!*\
  !*** ./src/app/pages/suggested-store/suggested-store.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuggestedStorePage": () => (/* binding */ SuggestedStorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_suggested_store_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./suggested-store.page.html */ 15636);
/* harmony import */ var _suggested_store_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suggested-store.page.scss */ 65825);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ 51491);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);








let SuggestedStorePage = class SuggestedStorePage {
    constructor(router, route, _apiService, alertController, http) {
        this.router = router;
        this.route = route;
        this._apiService = _apiService;
        this.alertController = alertController;
        this.http = http;
        this.isActive = false;
        this.buttonsState = [
            { state: false },
        ];
        this.route.params.subscribe((param) => {
            this.AccountID = param.AccountID;
            console.log(this.AccountID);
            this.getAccount(this.AccountID);
            this.loaddata(this.AccountID);
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
    loaddata(id) {
        let postData = JSON.stringify({
            accountID: id
        });
        let url = "http://192.168.40.32/gs-app/backend/suggest.php";
        this.http.post(url, postData)
            .subscribe(data => {
            if (data != null) {
                this.dataitem = data;
            }
        }, error => {
            console.log("Load Fail");
        });
    }
    storePage(id, name, address, image, contact, oh, mc) {
        this.router.navigate(['store', this.AccountID, { StoreID: id, StoreName: name, StoreAddress: address, Image: image, ContactNo: contact, OpenHours: oh, maximum_cust: mc }]);
    }
    homepagePage() {
        this.router.navigate(['homepage', this.AccountID]);
    }
    suggestedPage() {
        this.router.navigate(['suggested-store', this.AccountID]);
    }
    recentsPage() {
        this.router.navigate(['recents', this.AccountID]);
    }
    favoritesPage() {
        this.router.navigate(['favorites', this.AccountID]);
    }
    profilePage() {
        this.router.navigate(['profile', this.AccountID]);
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Logout',
                message: 'Are you sure you want to logout?',
                buttons: [
                    {
                        text: "Cancel",
                        handler: () => {
                        }
                    },
                    {
                        text: "Yes",
                        handler: () => {
                            this.router.navigate(['mainscreen']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
SuggestedStorePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
SuggestedStorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-suggested-store',
        template: _raw_loader_suggested_store_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_suggested_store_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SuggestedStorePage);



/***/ }),

/***/ 65825:
/*!*****************************************************************!*\
  !*** ./src/app/pages/suggested-store/suggested-store.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #FFE599;\n}\n\nion-card-content {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\nion-card {\n  padding-bottom: 10px;\n}\n\nion-button {\n  text-transform: initial;\n}\n\n.isActive {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Z2dlc3RlZC1zdG9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFHQTtFQUNJLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUoiLCJmaWxlIjoic3VnZ2VzdGVkLXN0b3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRTU5OTtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcblxyXG4uaXNBY3RpdmUge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9Il19 */");

/***/ }),

/***/ 15636:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/suggested-store/suggested-store.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n    <ion-title>Recommended Store</ion-title>\n  </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon name=\"log-out\" style=\"zoom:1.0;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row lines=\"none\" *ngFor=\"let item of dataitem\">\n    <ion-col>\n      <ion-card>\n      <ion-card-header (click)=\"storePage(item.StoreID,item.StoreName,item.StoreAddress,item.Image,item.ContactNo,item.OpenHours,item.maximum_cust)\">\n        <ion-card-subtitle>Grocery Store</ion-card-subtitle>\n        <ion-item lines=\"none\" >\n          <h1>{{item.StoreName}}</h1>\n        <ion-thumbnail item-start>\n          <img src=\"http://192.168.40.32/accountingsystem/public/img/{{item.Image}}\">\n        </ion-thumbnail>&nbsp;&nbsp;\n        \n        </ion-item><br>\n        <ion-row> \n        <ion-icon color=\"dark\" name=\"location-outline\" style=\"zoom:2.5;\"></ion-icon>&nbsp;&nbsp;\n        <ion-label color=\"dark\"><br>  {{item.StoreAddress}}</ion-label>\n        </ion-row><br>\n        <ion-row> \n          <ion-icon color=\"dark\" name=\"time-outline\" style=\"zoom:2.5;\"></ion-icon>&nbsp;&nbsp;\n          <ion-label color=\"dark\"><br>  {{item.OpenHours}}</ion-label>\n          </ion-row><br>\n        <ion-row> \n            <ion-icon  align=\"center\" color=\"tertiary\" name=\"people-outline\" style=\"zoom:2.0;margin-left:5vh;margin-top:0.6vh;\"></ion-icon>&nbsp;&nbsp;\n           <ion-label align=\"center\" color=\"dark\"><br><h2><b> Occupancy Right Now</b></h2></ion-label>  \n        </ion-row>\n        <ion-row> \n          <ion-progress-bar *ngIf=\"item.customer < item.maximum_cust/2\"style=\" height: 30px;\" color=\"success\" [value]=\"item.customer/item.maximum_cust\"  > </ion-progress-bar><br>\n          <ion-progress-bar  *ngIf=\"item.customer >= item.maximum_cust/2  && item.customer < item.maximum_cust/1.25\" style=\" height: 30px;\" color=\"warning\" [value]=\"item.customer/item.maximum_cust\"  > </ion-progress-bar><br>\n          <ion-progress-bar *ngIf=\"item.customer >= item.maximum_cust/1.25\"style=\" height: 30px;\" color=\"danger\" [value]=\"item.customer/item.maximum_cust\"  > </ion-progress-bar>\n        </ion-row>\n        <ion-row> \n          \n          <ion-col>\n           \n          <ion-label  align=\"left\" color=\"tertiary\"><br><h1 >{{item.customer}}</h1></ion-label>\n        </ion-col>\n       \n          <ion-label *ngIf=\"item.customer < item.maximum_cust/2\"align=\"right\" color=\"success\" ><br><h1>Safe</h1></ion-label>\n          <ion-label *ngIf=\"item.customer >= item.maximum_cust/2  && item.customer < item.maximum_cust/1.25\"align=\"right\" color=\"warning\" ><br><h1>Moderate</h1></ion-label>\n          <ion-label *ngIf=\"item.customer >= item.maximum_cust/1.25\"align=\"right\" color=\"danger\" ><br><h1>High Risk</h1></ion-label>\n       \n        <ion-col>\n          <ion-label align=\"right\" color=\"tertiary\" ><br><h1> {{item.maximum_cust}}</h1></ion-label>\n        </ion-col>\n        </ion-row>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n\n\n<ion-toolbar>\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" color=\"secondary\">\n\n    <ion-tab-button (click)=\"homepagePage()\" >\n      <ion-icon name=\"home\" style=\"zoom:1.0;\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"suggestedPage()\">\n      <ion-icon name=\"cart\" style=\"zoom:1.0;\"color=\"light\"></ion-icon>\n      <ion-label>Recommended</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"recentsPage()\">\n      <ion-icon name=\"time\" style=\"zoom:1.0;\"></ion-icon>\n      <ion-label>Recents</ion-label>\n    </ion-tab-button>\n\n \n\n    <ion-tab-button (click)=\"profilePage()\">\n      <ion-icon name=\"person\" style=\"zoom:1.0;\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n  \n</ion-tabs>\n</ion-toolbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_suggested-store_suggested-store_module_ts.js.map