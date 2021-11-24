(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_homepage_homepage_module_ts"],{

/***/ 49002:
/*!***********************************************************!*\
  !*** ./src/app/pages/homepage/homepage-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepagePageRoutingModule": () => (/* binding */ HomepagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _homepage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.page */ 4671);




const routes = [
    {
        path: '',
        component: _homepage_page__WEBPACK_IMPORTED_MODULE_0__.HomepagePage
    }
];
let HomepagePageRoutingModule = class HomepagePageRoutingModule {
};
HomepagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomepagePageRoutingModule);



/***/ }),

/***/ 79531:
/*!***************************************************!*\
  !*** ./src/app/pages/homepage/homepage.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepagePageModule": () => (/* binding */ HomepagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage-routing.module */ 49002);
/* harmony import */ var _homepage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.page */ 4671);







let HomepagePageModule = class HomepagePageModule {
};
HomepagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomepagePageRoutingModule
        ],
        declarations: [_homepage_page__WEBPACK_IMPORTED_MODULE_1__.HomepagePage]
    })
], HomepagePageModule);



/***/ }),

/***/ 4671:
/*!*************************************************!*\
  !*** ./src/app/pages/homepage/homepage.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepagePage": () => (/* binding */ HomepagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_homepage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./homepage.page.html */ 8399);
/* harmony import */ var _homepage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.page.scss */ 61592);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ 51491);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);








let HomepagePage = class HomepagePage {
    constructor(router, route, _apiService, alertController, http) {
        this.router = router;
        this.route = route;
        this._apiService = _apiService;
        this.alertController = alertController;
        this.http = http;
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
        let url = "http://192.168.40.32/gs-app/backend/homepage.php";
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
    search() {
        this.router.navigate(['search', this.AccountID]);
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
HomepagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
HomepagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-homepage',
        template: _raw_loader_homepage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_homepage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomepagePage);



/***/ }),

/***/ 61592:
/*!***************************************************!*\
  !*** ./src/app/pages/homepage/homepage.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #FFE599;\n}\n\nion-card-content {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\nion-card {\n  padding-bottom: 10px;\n}\n\nion-button {\n  text-transform: initial;\n}\n\nbutton {\n  background-color: transparent;\n}\n\n.isActive {\n  color: red;\n}\n\ndiv.visible {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUdBO0VBQ0ksdUJBQUE7QUFBSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKIiwiZmlsZSI6ImhvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRTU5OTtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaXNBY3RpdmUge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbmRpdi52aXNpYmxlIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 8399:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/homepage/homepage.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n    <ion-title>Home</ion-title>\r\n  </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"search()\">\r\n        <ion-icon name=\"search\" style=\"zoom:1.0;\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button (click)=\"logout()\">\r\n        <ion-icon name=\"log-out\" style=\"zoom:1.0;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row lines=\"none\" *ngFor=\"let item of dataitem;\">\r\n    <ion-col>\r\n      <ion-card>\r\n      <ion-card-header >\r\n        <ion-card-subtitle>Grocery Store</ion-card-subtitle>\r\n        <ion-item lines=\"none\" (click)=\"storePage(item.id,item.StoreName,item.StoreAddress,item.Image,item.ContactNo,item.OpenHours,item.maximum_cust)\">\r\n          <h1>{{item.StoreName}}</h1>\r\n        <ion-thumbnail item-start>\r\n          <img src=\"http://192.168.40.32/accountingsystem/public/img/{{item.Image}}\">\r\n        </ion-thumbnail>&nbsp;&nbsp;\r\n        \r\n        </ion-item><br>\r\n        <ion-row> \r\n        <ion-icon color=\"dark\" name=\"location-outline\" style=\"zoom:2.5;\"></ion-icon>&nbsp;&nbsp;\r\n        <ion-label color=\"dark\"><br>  {{item.StoreAddress}}</ion-label>\r\n        </ion-row><br>\r\n        <ion-row> \r\n          <ion-icon color=\"dark\" name=\"time-outline\" style=\"zoom:2.5;\"></ion-icon>&nbsp;&nbsp;\r\n          <ion-label color=\"dark\"><br>  {{item.OpenHours}}</ion-label>\r\n          </ion-row><br>\r\n        <ion-row> \r\n            <ion-icon  align=\"center\" color=\"tertiary\" name=\"people-outline\" style=\"zoom:2.0;margin-left:5vh;margin-top:0.6vh;\"></ion-icon>&nbsp;&nbsp;\r\n           <ion-label align=\"center\" color=\"dark\"><br><h2><b> Occupancy Right Now</b></h2></ion-label>  \r\n        </ion-row>\r\n        <ion-row> \r\n          <ion-progress-bar *ngIf=\"item.customer < item.maximum_cust/2\"style=\" height: 30px;\" color=\"success\" [value]=\"item.customer/item.maximum_cust\"  > </ion-progress-bar><br>\r\n          <ion-progress-bar  *ngIf=\"item.customer >= item.maximum_cust/2  && item.customer < item.maximum_cust/1.25\" style=\" height: 30px;\" color=\"warning\" [value]=\"item.customer/item.maximum_cust\"  > </ion-progress-bar><br>\r\n          <ion-progress-bar *ngIf=\"item.customer >= item.maximum_cust/1.25\"style=\" height: 30px;\" color=\"danger\" [value]=\"item.customer/item.maximum_cust\"  > </ion-progress-bar>\r\n        </ion-row>\r\n        <ion-row> \r\n          \r\n          <ion-col> \r\n          <ion-label  align=\"left\" color=\"tertiary\"><br><h1 >{{item.customer}}</h1></ion-label>\r\n          </ion-col>\r\n       \r\n          <ion-label *ngIf=\"item.customer < item.maximum_cust/2\"align=\"right\" color=\"success\" ><br><h1>Safe</h1></ion-label>\r\n          <ion-label *ngIf=\"item.customer >= item.maximum_cust/2  && item.customer < item.maximum_cust/1.25\"align=\"right\" color=\"warning\" ><br><h1>Moderate</h1></ion-label>\r\n          <ion-label *ngIf=\"item.customer >= item.maximum_cust/1.25\"align=\"right\" color=\"danger\" ><br><h1>High Risk</h1></ion-label>\r\n       \r\n        <ion-col>\r\n          <ion-label align=\"right\" color=\"tertiary\" ><br><h1> {{item.maximum_cust}}</h1></ion-label>\r\n        </ion-col>\r\n        </ion-row>\r\n       \r\n        </ion-card-header>\r\n       \r\n      \r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n\r\n\r\n<ion-toolbar>\r\n<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\" color=\"secondary\">\r\n\r\n    <ion-tab-button (click)=\"homepagePage()\" >\r\n      <ion-icon name=\"home\" style=\"zoom:1.0;\"color=\"light\"></ion-icon>\r\n      <ion-label>Home</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"suggestedPage()\">\r\n      <ion-icon name=\"cart\" style=\"zoom:1.0;\"></ion-icon>\r\n      <ion-label>Recommended</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"recentsPage()\">\r\n      <ion-icon name=\"time\" style=\"zoom:1.0;\"></ion-icon>\r\n      <ion-label>Recents</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"profilePage()\">\r\n      <ion-icon name=\"person\" style=\"zoom:1.0;\"></ion-icon>\r\n      <ion-label>Profile</ion-label>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n  \r\n</ion-tabs>\r\n</ion-toolbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_homepage_homepage_module_ts.js.map