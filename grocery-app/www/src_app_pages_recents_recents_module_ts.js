(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_recents_recents_module_ts"],{

/***/ 28526:
/*!*********************************************************!*\
  !*** ./src/app/pages/recents/recents-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentsPageRoutingModule": () => (/* binding */ RecentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _recents_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recents.page */ 87077);




const routes = [
    {
        path: '',
        component: _recents_page__WEBPACK_IMPORTED_MODULE_0__.RecentsPage
    }
];
let RecentsPageRoutingModule = class RecentsPageRoutingModule {
};
RecentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecentsPageRoutingModule);



/***/ }),

/***/ 39555:
/*!*************************************************!*\
  !*** ./src/app/pages/recents/recents.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentsPageModule": () => (/* binding */ RecentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _recents_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recents-routing.module */ 28526);
/* harmony import */ var _recents_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recents.page */ 87077);







let RecentsPageModule = class RecentsPageModule {
};
RecentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recents_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecentsPageRoutingModule
        ],
        declarations: [_recents_page__WEBPACK_IMPORTED_MODULE_1__.RecentsPage]
    })
], RecentsPageModule);



/***/ }),

/***/ 87077:
/*!***********************************************!*\
  !*** ./src/app/pages/recents/recents.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentsPage": () => (/* binding */ RecentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_recents_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recents.page.html */ 60414);
/* harmony import */ var _recents_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recents.page.scss */ 65057);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ 51491);








let RecentsPage = class RecentsPage {
    constructor(router, route, _apiService, http, alertController, alrt) {
        this.router = router;
        this.route = route;
        this._apiService = _apiService;
        this.http = http;
        this.alertController = alertController;
        this.alrt = alrt;
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
        let url = "http://192.168.40.32/gs-app/backend/getrecents.php";
        this.http.post(url, postData)
            .subscribe(data => {
            if (data != null) {
                this.dataitem = data;
            }
            else {
                this.presentAlert();
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
    recentsPage() {
        this.router.navigate(['recents', this.AccountID]);
    }
    favoritesPage() {
        this.router.navigate(['favorites', this.AccountID]);
    }
    suggestedPage() {
        this.router.navigate(['suggested-store', this.AccountID]);
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
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alrt.create({
                subHeader: 'No recents',
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
};
RecentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
RecentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-recents',
        template: _raw_loader_recents_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recents_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecentsPage);



/***/ }),

/***/ 65057:
/*!*************************************************!*\
  !*** ./src/app/pages/recents/recents.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #FFE599;\n}\n\nion-card-content {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\nion-card {\n  padding-bottom: 10px;\n}\n\nion-button {\n  text-transform: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2VudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBR0E7RUFDSSx1QkFBQTtBQUFKIiwiZmlsZSI6InJlY2VudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZFNTk5O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 60414:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recents/recents.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n    <ion-title>Recent</ion-title>\r\n  </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"logout()\">\r\n        <ion-icon name=\"log-out\" style=\"zoom:1.0;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-row lines=\"none\" *ngFor=\"let item of dataitem\">\r\n    <ion-col>\r\n      <ion-card>\r\n      <ion-card-header (click)=\"storePage(item.StoreID,item.StoreName,item.StoreAddress,item.Image,item.ContactNo,item.OpenHours,item.maximum_cust)\">\r\n        <ion-card-subtitle>Grocery Store</ion-card-subtitle>\r\n        <ion-item lines=\"none\" >\r\n          <h1>{{item.StoreName}}</h1>\r\n        <ion-thumbnail item-start>\r\n          <img src=\"http://192.168.40.32/accountingsystem/public/img/{{item.Image}}\">\r\n        </ion-thumbnail>&nbsp;&nbsp;\r\n        \r\n        </ion-item><br>\r\n        <ion-row> \r\n          <ion-icon color=\"dark\" name=\"location-outline\" style=\"zoom:2.5;\"></ion-icon>&nbsp;&nbsp;\r\n          <ion-label color=\"dark\"><br>  {{item.StoreAddress}}</ion-label>\r\n        </ion-row><br>\r\n          <ion-row>\r\n            <ion-icon color=\"dark\" name=\"log-in-outline\" style=\"zoom:2.5;\"></ion-icon>\r\n            <ion-label color=\"dark\"><br>&nbsp;&nbsp;<b>TIME IN:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.time_in}}</ion-label>\r\n          </ion-row><br>\r\n          <ion-row>\r\n            <ion-icon color=\"dark\" name=\"log-out-outline\" style=\"zoom:2.5;\"></ion-icon>\r\n            <ion-label color=\"dark\"><br>&nbsp;&nbsp;<b>TIME OUT:</b>&nbsp;&nbsp;{{item.time_out}}</ion-label>\r\n          </ion-row><br>\r\n        </ion-card-header>\r\n        \r\n      </ion-card>\r\n      \r\n    \r\n\r\n\r\n</ion-col>\r\n</ion-row>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-toolbar>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\" color=\"secondary\">\r\n  \r\n      <ion-tab-button (click)=\"homepagePage()\">\r\n        <ion-icon name=\"home\" style=\"zoom:1.0;\"></ion-icon>\r\n        <ion-label>Home</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"suggestedPage()\">\r\n        <ion-icon name=\"cart\" style=\"zoom:1.0;\"></ion-icon>\r\n        <ion-label>Recommended</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"recentsPage()\">\r\n        <ion-icon name=\"time\" style=\"zoom:1.0;\" color=\"light\"></ion-icon>\r\n        <ion-label>Recents</ion-label>\r\n      </ion-tab-button>\r\n  \r\n     \r\n      <ion-tab-button (click)=\"profilePage()\">\r\n        <ion-icon name=\"person\" style=\"zoom:1.0;\"></ion-icon>\r\n        <ion-label>Profile</ion-label>\r\n      </ion-tab-button>\r\n  \r\n    </ion-tab-bar>\r\n  \r\n    \r\n  </ion-tabs>\r\n  </ion-toolbar>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recents_recents_module_ts.js.map