(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_search_search_module_ts"],{

/***/ 76980:
/*!*******************************************************!*\
  !*** ./src/app/pages/search/search-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 9166);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 20281:
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 76980);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 9166);







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 9166:
/*!*********************************************!*\
  !*** ./src/app/pages/search/search.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./search.page.html */ 86620);
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss */ 15411);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ 51491);








let SearchPage = class SearchPage {
    constructor(_apiService, alertController, router, route, http) {
        this._apiService = _apiService;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.http = http;
        this.route.params.subscribe((param) => {
            this.AccountID = param.AccountID;
            console.log(this.AccountID);
            // this.suggestdata(this.AccountID);
        });
        this.loaddata();
    }
    ngOnInit() {
    }
    search(ev) {
        const val = ev.target.value;
        if (val && val.trim() != '') {
            this.store = this.store.filter((stores) => {
                return (stores.StoreName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.loaddata();
        }
    }
    loaddata() {
        this._apiService.getSearch()
            .subscribe(list => {
            console.log(list);
            this.store = list;
        });
    }
    suggestdata(id) {
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
    back() {
        this.router.navigate(['homepage', this.AccountID]);
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
SearchPage.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchPage);



/***/ }),

/***/ 15411:
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #FFE599;\n}\n\nion-card-content {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\nion-card {\n  padding-bottom: 10px;\n}\n\nion-button {\n  text-transform: initial;\n}\n\n.isActive {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFHQTtFQUNJLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUoiLCJmaWxlIjoic2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRTU5OTtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcblxyXG4uaXNBY3RpdmUge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9Il19 */");

/***/ }),

/***/ 86620:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" style=\"zoom:1.0;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>  \n      <ion-searchbar animated (ionChange)=\"search($event)\"></ion-searchbar>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n <ion-list>\n   <ion-item (click)=\"storePage(stores.id,stores.StoreName,stores.StoreAddress,stores.Image,stores.ContactNo,stores.OpenHours,stores.maximum_cust)\" *ngFor=\"let stores of store\">\n    \n     \n    <ion-thumbnail item-start>\n      <img small src=\"http://192.168.40.32/accountingsystem/public/img/{{stores.Image}}\">\n    </ion-thumbnail>\n  \n    \n    <ion-label>\n   \n    <h2>{{stores.StoreName}}</h2>\n    <h5>{{stores.StoreAddress}}</h5>\n  </ion-label>\n\n\n\n  <ion-row>\n    <ion-label *ngIf=\"stores.customer < stores.maximum_cust/2\"align=\"right\" color=\"success\" ><br><h2>Safe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2></ion-label>\n    <ion-progress-bar *ngIf=\"stores.customer < stores.maximum_cust/2\"style=\" height: 10px;\" color=\"success\" [value]=\"stores.customer/stores.maximum_cust\"  > </ion-progress-bar><br>\n  </ion-row>\n  <ion-row>\n    <ion-label *ngIf=\"stores.customer >= stores.maximum_cust/2  && stores.customer <stores.maximum_cust/1.25\"align=\"right\" color=\"warning\" ><br><h2>Moderate</h2></ion-label>\n    <ion-progress-bar  *ngIf=\"stores.customer >= stores.maximum_cust/2  && stores.customer <stores.maximum_cust/1.25\" style=\" height: 10px;\" color=\"warning\" [value]=\"stores.customer/stores.maximum_cust\"  > </ion-progress-bar><br>\n  </ion-row>\n  <ion-row>\n  <ion-label *ngIf=\"stores.customer >=stores.maximum_cust/1.25\"align=\"right\" color=\"danger\" ><br><h2>High Risk</h2></ion-label>\n  <ion-progress-bar  *ngIf=\"stores.customer >=stores.maximum_cust/1.25\"style=\" height: 10px;\" color=\"danger\" [value]=\"stores.customer/stores.maximum_cust\"  > </ion-progress-bar>\n</ion-row>\n  \n \n\n   </ion-item>\n </ion-list>\n</ion-content>\n\n\n\n<ion-toolbar>\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" color=\"secondary\">\n\n    <ion-tab-button (click)=\"homepagePage()\" >\n      <ion-icon name=\"home\" style=\"zoom:1.0;\"color=\"light\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"suggestedPage()\">\n      <ion-icon name=\"cart\" style=\"zoom:1.0;\"></ion-icon>\n      <ion-label>Recommended</ion-label>\n    </ion-tab-button>\n   \n\n    <ion-tab-button (click)=\"recentsPage()\">\n      <ion-icon name=\"time\" style=\"zoom:1.0;\"></ion-icon>\n      <ion-label>Recents</ion-label>\n    </ion-tab-button>\n\n    \n\n    <ion-tab-button (click)=\"profilePage()\">\n      <ion-icon name=\"person\" style=\"zoom:1.0;\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n  \n</ion-tabs>\n</ion-toolbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_search_search_module_ts.js.map