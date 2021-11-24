(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_store_store_module_ts"],{

/***/ 61662:
/*!*****************************************************!*\
  !*** ./src/app/pages/store/store-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorePageRoutingModule": () => (/* binding */ StorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.page */ 18160);




const routes = [
    {
        path: '',
        component: _store_page__WEBPACK_IMPORTED_MODULE_0__.StorePage
    }
];
let StorePageRoutingModule = class StorePageRoutingModule {
};
StorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StorePageRoutingModule);



/***/ }),

/***/ 39069:
/*!*********************************************!*\
  !*** ./src/app/pages/store/store.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorePageModule": () => (/* binding */ StorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _store_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-routing.module */ 61662);
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.page */ 18160);







let StorePageModule = class StorePageModule {
};
StorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _store_routing_module__WEBPACK_IMPORTED_MODULE_0__.StorePageRoutingModule
        ],
        declarations: [_store_page__WEBPACK_IMPORTED_MODULE_1__.StorePage]
    })
], StorePageModule);



/***/ }),

/***/ 18160:
/*!*******************************************!*\
  !*** ./src/app/pages/store/store.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorePage": () => (/* binding */ StorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_store_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./store.page.html */ 18006);
/* harmony import */ var _store_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.page.scss */ 98506);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ 51491);







let StorePage = class StorePage {
    constructor(router, route, _apiService, http) {
        this.router = router;
        this.route = route;
        this._apiService = _apiService;
        this.http = http;
        this.postdata = {};
        this.route.params.subscribe((param) => {
            this.AccountID = param.AccountID;
            this.getAccount(this.AccountID);
            //Store Page//
            this.StoreID = param.StoreID;
            this.StoreName = param.StoreName;
            this.StoreAddress = param.StoreAddress;
            this.Image = param.Image;
            this.ContactNo = param.ContactNo;
            this.OpenHours = param.OpenHours;
            this.maximum_cust = param.maximum_cust;
            this.postdata.id = this.StoreID;
            this.postdata.name = this.StoreName;
            this.postdata.add = this.StoreAddress;
            this.postdata.image = this.Image;
            this.postdata.contact = this.ContactNo;
            this.postdata.oh = this.OpenHours;
            this.postdata.max_cust = this.maximum_cust;
            this.loaddata(this.StoreID);
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
            StoreID: id
        });
        let url = "http://192.168.40.32/gs-app/backend/getCustomerCount.php";
        this.http.post(url, postData)
            .subscribe(data => {
            if (data != null) {
                this.dataitem = data;
            }
        }, error => {
            console.log("Load Fail");
        });
    }
    storePage() {
        this.router.navigate(['storePage', this.AccountID]);
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
};
StorePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
StorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-store',
        template: _raw_loader_store_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_store_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StorePage);



/***/ }),

/***/ 98506:
/*!*********************************************!*\
  !*** ./src/app/pages/store/store.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #FFE599;\n}\n\nion-card-content {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\nion-card {\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBSUE7RUFDSSxvQkFBQTtBQURKIiwiZmlsZSI6InN0b3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRTU5OTtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ 18006:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store/store.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar color=\"secondary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"homepagePage()\">\r\n          <ion-icon name=\"arrow-back\" style=\"zoom:1.0;\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  \r\n  <ion-card>\r\n    <ion-card-header >\r\n      <ion-card-subtitle>Grocery Store</ion-card-subtitle>\r\n      <ion-item lines=\"none\" >\r\n        <ion-thumbnail slot=\"end\">\r\n        <img src=\"http://192.168.40.32/accountingsystem/public/img/{{postdata.image}}\">\r\n        </ion-thumbnail>&nbsp;&nbsp;\r\n        <ion-input width=\"100%\" readonly=\"true\"  [(ngModel)]=\"postdata.name\"></ion-input>\r\n      </ion-item>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content *ngFor=\"let item of dataitem\">\r\n          <ion-row>  \r\n            <ion-icon color=\"dark\"name=\"location-outline\" style=\"zoom:2.5;\"></ion-icon>\r\n            <ion-input color=\"dark\" readonly=\"true\" value=\"\" [(ngModel)]=\"postdata.add\"></ion-input>\r\n        </ion-row><br>\r\n        <ion-row>\r\n           <ion-icon color=\"dark\"name=\"call-outline\" style=\"zoom:2.5;\"></ion-icon>\r\n           <ion-input color=\"dark\" readonly=\"true\" value=\"\" [(ngModel)]=\"postdata.contact\"></ion-input>\r\n        </ion-row><br>\r\n        <ion-row>\r\n          <ion-icon color=\"dark\"name=\"time-outline\" style=\"zoom:2.5;\"></ion-icon>\r\n          <ion-input color=\"dark\" readonly=\"true\" value=\"\" [(ngModel)]=\"postdata.oh\"></ion-input>\r\n       </ion-row><br>\r\n      \r\n     <ion-row>\r\n        <ion-icon  align=\"center\" color=\"tertiary\" name=\"people-outline\" style=\"zoom:2.0;margin-left:2vh;margin-top:0.9vh;\"></ion-icon>\r\n       <ion-label align=\"center\" color=\"dark\"><br><h2><b> Occupancy Right Now</b></h2></ion-label>  \r\n    </ion-row>\r\n    <ion-row> \r\n      <ion-progress-bar *ngIf=\"item.numbercount < postdata.max_cust/2\"style=\" height: 30px;\" color=\"success\" [value]=\"item.numbercount/postdata.max_cust\"  > </ion-progress-bar><br>\r\n      <ion-progress-bar  *ngIf=\"item.numbercount >= postdata.max_cust/2  && item.numbercount < postdata.max_cust/1.25\" style=\" height: 30px;\" color=\"warning\" [value]=\"item.numbercount/postdata.max_cust\"  > </ion-progress-bar><br>\r\n      <ion-progress-bar *ngIf=\"item.numbercount >= postdata.max_cust/1.25\"style=\" height: 30px;\" color=\"danger\" [value]=\"item.numbercount/postdata.max_cust\"  > </ion-progress-bar>\r\n    </ion-row>\r\n    <ion-row> \r\n      \r\n      <ion-col>\r\n       \r\n      <ion-label  align=\"left\" color=\"tertiary\"><br><h1 >{{item.numbercount}}</h1></ion-label>\r\n    </ion-col>\r\n   \r\n      <ion-label *ngIf=\"item.numbercount < postdata.max_cust/2\"align=\"right\" color=\"success\" ><br><h1>Safe</h1></ion-label>\r\n      <ion-label *ngIf=\"item.numbercount >= postdata.max_cust/2  && item.numbercount < postdata.max_cust/1.25\"align=\"right\" color=\"warning\" ><br><h1>Moderate</h1></ion-label>\r\n      <ion-label *ngIf=\"item.numbercount >= postdata.max_cust/1.25\"align=\"right\" color=\"danger\" ><br><h1>High Risk</h1></ion-label>\r\n   \r\n    <ion-col>\r\n      <ion-label align=\"right\" color=\"tertiary\" ><br><h1> {{postdata.max_cust}}</h1></ion-label>\r\n    </ion-col>\r\n    </ion-row>\r\n       \r\n      </ion-card-content>\r\n    \r\n    </ion-card>\r\n  \r\n  \r\n</ion-content>\r\n\r\n\r\n\r\n<ion-toolbar>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\" color=\"secondary\">\r\n  \r\n      <ion-tab-button (click)=\"homepagePage()\">\r\n        <ion-icon name=\"home\" style=\"zoom:1.0;\"></ion-icon>\r\n        <ion-label>Home</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button (click)=\"suggestedPage()\">\r\n        <ion-icon name=\"cart\" style=\"zoom:1.0;\"></ion-icon>\r\n        <ion-label>Suggested</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button (click)=\"recentsPage()\">\r\n        <ion-icon name=\"time\" style=\"zoom:1.0;\"></ion-icon>\r\n        <ion-label>Recents</ion-label>\r\n      </ion-tab-button>\r\n  \r\n  \r\n  \r\n      <ion-tab-button (click)=\"profilePage()\">\r\n        <ion-icon name=\"person\" style=\"zoom:1.0;\"></ion-icon>\r\n        <ion-label>Profile</ion-label>\r\n      </ion-tab-button>\r\n  \r\n    </ion-tab-bar>\r\n  \r\n    \r\n  </ion-tabs>\r\n  </ion-toolbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_store_store_module_ts.js.map