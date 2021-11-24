(self["webpackChunkgrocery_app"] = self["webpackChunkgrocery_app"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 41474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 64629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 88558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 41474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 64629);
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-qrcode2 */ 58920);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__.NgxQRCodeModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 64629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 79291);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 2777);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/base64-to-gallery/ngx */ 7020);
/* harmony import */ var _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/photo-library/ngx */ 32386);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api.service */ 51491);










let ProfilePage = class ProfilePage {
    constructor(router, route, _apiService, http, alertController, navCtrl, base64ToGallery, toastCtrl, photoLibrary) {
        this.router = router;
        this.route = route;
        this._apiService = _apiService;
        this.http = http;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.base64ToGallery = base64ToGallery;
        this.toastCtrl = toastCtrl;
        this.photoLibrary = photoLibrary;
        this.qrData = null;
        this.createdCode = null;
        this.elementType = 'canvas';
        this.defaultInputBox = false;
        this.button = true;
        this.route.params.subscribe((param) => {
            this.AccountID = param.AccountID;
            console.log(this.AccountID);
            this.getAccount(this.AccountID);
            this.createCode();
        });
    }
    showChange() {
        this.defaultInputBox = true;
        this.button = false;
    }
    ngOnInit() {
    }
    selectedFile(event) {
        this.Image = event.target.files[0];
        const formData = new FormData();
        formData.append('Image', this.Image);
        formData.append('AccountID', this.AccountID);
        this.http.post('http://192.168.40.32/gs-app/backend/UploadPhoto.php', formData).subscribe((response) => {
            console.log(response);
            this.getAccount(this.AccountID);
            this.successAlert();
        });
    }
    updateProfile() {
        let data = {
            Image: this.Image,
        };
        this._apiService.updatePhoto(this.AccountID, data).subscribe((res) => {
            console.log("SUCCESS", res);
        }, (err) => {
            console.log("ERROR", err);
        });
    }
    createCode() {
        this.qrData = this.AccountID;
        this.createdCode = this.qrData;
    }
    downloadQR() {
        const canvas = document.querySelector('canvas');
        const imageData = canvas.toDataURL('image/jpeg').toString();
        console.log('data: ', imageData);
        let data = imageData.split(',')[1];
        this.base64ToGallery.base64ToGallery(data, { prefix: '_img', mediaScanner: true })
            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                header: 'QR Code saved in your Gallery',
                duration: 2000,
                color: 'light'
            });
            toast.present();
        }), err => console.log('err: ', err));
    }
    getAccount(AccountID) {
        this._apiService.getAccount(AccountID).subscribe((res) => {
            console.log('SUCESS');
            this.dataitem = res;
            this.defaultInputBox = false;
            this.button = true;
        }, (err) => {
            console.log('ERROR', err);
        });
    }
    successAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                header: 'Your profile picture was updated',
                duration: 2000,
                color: 'light'
            });
            toast.present();
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
    editPage() {
        this.router.navigate(['edit-profile', this.AccountID]);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_2__.Base64ToGallery },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_native_photo_library_ngx__WEBPACK_IMPORTED_MODULE_3__.PhotoLibrary }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 2777:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #FFE599;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nion-card {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  background: transparent;\n  box-shadow: none !important;\n}\n\n.bg-transparent {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.tl {\n  padding-right: 25px;\n  padding-bottom: 20px;\n  color: black;\n}\n\n.edit {\n  margin-left: 20px;\n}\n\nion-thumbnail.ion-margin-start {\n  width: 120px;\n  height: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n\nion-thumbnail.ion-margin-st {\n  width: 120px;\n  height: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n}\n\nion-thumbnail.ion-margin-start-qr {\n  width: 130px;\n  height: 135px;\n  border: 1px solid black;\n  margin-top: auto;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: auto;\n}\n\nion-label.cn {\n  text-align: center;\n}\n\nimg.pic {\n  width: 120px;\n  height: 120px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 5px gray;\n  display: inline-block;\n}\n\n.p {\n  height: 50px;\n  width: 40px;\n  margin-top: 0px;\n}\n\n.qr {\n  padding-top: 30px;\n}\n\nspan {\n  width: 100px;\n  font-size: 25px;\n}\n\nion-button {\n  text-transform: initial;\n}\n\nion-button.save {\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  height: 30px;\n}\n\nion-button.photo {\n  z-index: 4;\n  position: absolute;\n  right: 25%;\n  top: 60%;\n  margin: auto;\n}\n\nion-list {\n  --ion-item-background: transparent;\n}\n\nion-item {\n  --border-width: 0;\n  --inner-border-width: 0;\n}\n\n.fs {\n  font-size: 0.9em;\n  text-align: center;\n}\n\nion-thumbnail.prnt {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7RUFDRCxrQkFBQTtFQUNBLG1CQUFBO0FBR0g7O0FBREE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNELHVCQUFBO0VBQ0MsZ0JBQUE7RUFDRCxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFJSDs7QUFEQTtFQUNJLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNELHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNELHFCQUFBO0FBS0Y7O0FBREE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFJSjs7QUFEQTtFQUNJLGlCQUFBO0FBSUo7O0FBREE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUlKOztBQURBO0VBQ0ksdUJBQUE7QUFJSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtBQUdKOztBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBR0o7O0FBRUE7RUFDSSxrQ0FBQTtBQUNKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGRTU5OTtcclxuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy10cmFuc3BhcmVudHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi50bHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uZWRpdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbmlvbi10aHVtYm5haWwuaW9uLW1hcmdpbi1zdGFydHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuaW9uLXRodW1ibmFpbC5pb24tbWFyZ2luLXN0e1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbmlvbi10aHVtYm5haWwuaW9uLW1hcmdpbi1zdGFydC1xcntcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogMTM1cHg7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuaW9uLWxhYmVsLmNue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmltZy5waWN7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4OyBcclxuICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICBib3gtc2hhZG93OiAwIDAgNXB4IGdyYXk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIFxyXG59XHJcblxyXG4ucHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ucXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuc3BhbntcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgXHJcbn1cclxuaW9uLWJ1dHRvbi5zYXZle1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAvLyAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBcclxufVxyXG5pb24tYnV0dG9uLnBob3Rve1xyXG4gICAgei1pbmRleDogNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNSU7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxufVxyXG5cclxuLmZze1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tdGh1bWJuYWlsLnBybnR7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 79291:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<meta name='viewport' content='width=device-width, initial-scale=1'>\r\n<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>\r\n\r\n<ion-header>\r\n<ion-toolbar color=\"secondary\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button (click)=\"homepagePage()\">\r\n      <ion-icon name=\"arrow-back\" style=\"zoom:1.0;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"editPage()\" class=\"edit\">\r\n        <ion-icon name=\"settings-outline\" style=\"zoom:1.5;\"></ion-icon>\r\n      </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-card class=\"bg-transparent\">\r\n          <b>YOUR QR ID</b>\r\n          <ion-list   *ngFor=\"let item of dataitem\">\r\n           \r\n            <ion-item >\r\n              <ion-thumbnail   class=\"ion-margin-st\">\r\n                <img class=\"pic\" src=\"http://192.168.40.32/gs-app/images/{{item.Image}}\"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                <ion-button class=\"photo\" (click)=\"showChange()\" *ngIf=\"button\" fill=\"transparent\">\r\n                  <ion-icon   slot=\"end\" color=\"primary\" class=\"p\" name=\"camera\"></ion-icon>\r\n                </ion-button>\r\n                <input  *ngIf=\"defaultInputBox\" type=\"file\"  (change)=\"selectedFile($event)\">\r\n                \r\n              </ion-thumbnail>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>\r\n                <h1><b>{{item.CustomerName}}</b></h1>\r\n                <p class=\"fs\">{{item.CustomerAddress}}</p><br>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-input hidden type=\"text\" [(ngModel)]=\"qrData\"></ion-input>\r\n              <ion-thumbnail  class=\"ion-margin-start-qr\">\r\n              <ion-card *ngIf=\"createdCode\" > \r\n                  <ngx-qrcode [elementType]=\"elementType\" [value]=\"createdCode\"></ngx-qrcode>   \r\n              </ion-card>\r\n              </ion-thumbnail>\r\n            </ion-item>  \r\n           \r\n            <ion-item>\r\n              <ion-button class=\"save\" (click)=\"downloadQR()\" *ngIf=\"elementType==='canvas'\">\r\n                Save your QR Code &nbsp;\r\n              <ion-icon  name=\"download-outline\"></ion-icon>\r\n              </ion-button>    \r\n            </ion-item>\r\n            \r\n          </ion-list>\r\n      <ion-row>\r\n        <ion-item color=\"none\">\r\n            <p class=\"fs\">You may show your QR Code to Grocery Stores for COVID-19 contact tracing.</p>\r\n        </ion-item>\r\n      </ion-row>\r\n    \r\n    \r\n    </ion-card>\r\n    \r\n    \r\n    </ion-grid>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n<ion-toolbar>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\" color=\"secondary\">\r\n  \r\n      <ion-tab-button (click)=\"homepagePage()\">\r\n        <ion-icon name=\"home\" style=\"zoom:1.0;\"></ion-icon>\r\n        <ion-label>Home</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button (click)=\"suggestedPage()\">\r\n        <ion-icon name=\"cart\" style=\"zoom:1.0;\"></ion-icon>\r\n        <ion-label>Recommended</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      <ion-tab-button (click)=\"recentsPage()\">\r\n        <ion-icon name=\"time\" style=\"zoom:1.0;\"></ion-icon>\r\n        <ion-label>Recents</ion-label>\r\n      </ion-tab-button>\r\n  \r\n      \r\n  \r\n      <ion-tab-button (click)=\"profilePage()\">\r\n        <ion-icon name=\"person\" style=\"zoom:1.0;\" color=\"light\"></ion-icon>\r\n        <ion-label>Profile</ion-label>\r\n      </ion-tab-button>\r\n  \r\n    </ion-tab-bar>\r\n  \r\n    \r\n  </ion-tabs>\r\n  </ion-toolbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map