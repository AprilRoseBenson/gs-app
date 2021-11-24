'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
var rxjs = require('rxjs');
var core$1 = require('@angular/core');

/**
 * @hidden
 *
 * Wraps method that returns an observable that can be completed. Provided opts.resultFinalPredicate dictates when the observable completes.
 */
function CordovaFiniteObservable(opts) {
    if (opts === void 0) { opts = {}; }
    opts.observable = true;
    return function (target, methodName, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var wrappedObservable = wrap(this, methodName, opts).apply(this, args);
                return new rxjs.Observable(function (observer) {
                    var wrappedSubscription = wrappedObservable.subscribe({
                        next: function (x) {
                            observer.next(opts.resultTransform ? x[opts.resultTransform] : x);
                            if (opts.resultFinalPredicate && x[opts.resultFinalPredicate]) {
                                observer.complete();
                            }
                        },
                        error: function (err) {
                            observer.error(err);
                        },
                        complete: function () {
                            observer.complete();
                        },
                    });
                    return function () {
                        wrappedSubscription.unsubscribe();
                    };
                });
            },
            enumerable: true,
        };
    };
}
var PhotoLibrary = /** @class */ (function (_super) {
    tslib.__extends(PhotoLibrary, _super);
    function PhotoLibrary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoLibrary.prototype.getLibrary = function (success, error, options) { return core.cordova(this, "getLibrary", { "observable": true }, arguments); };
    PhotoLibrary.prototype.requestAuthorization = function (options) { return core.cordova(this, "requestAuthorization", { "callbackOrder": "reverse" }, arguments); };
    PhotoLibrary.prototype.getAlbums = function () { return core.cordova(this, "getAlbums", { "callbackOrder": "reverse" }, arguments); };
    PhotoLibrary.prototype.getThumbnailURL = function (photo, options) { return core.cordova(this, "getThumbnailURL", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    PhotoLibrary.prototype.getPhotoURL = function (photo, options) { return core.cordova(this, "getPhotoURL", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    PhotoLibrary.prototype.getThumbnail = function (photo, options) { return core.cordova(this, "getThumbnail", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    PhotoLibrary.prototype.getPhoto = function (photo, options) { return core.cordova(this, "getPhoto", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    PhotoLibrary.prototype.saveImage = function (url, album, options) { return core.cordova(this, "saveImage", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    PhotoLibrary.prototype.saveVideo = function (url, album) { return core.cordova(this, "saveVideo", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    PhotoLibrary.pluginName = "PhotoLibrary";
    PhotoLibrary.plugin = "cordova-plugin-photo-library";
    PhotoLibrary.pluginRef = "cordova.plugins.photoLibrary";
    PhotoLibrary.repo = "https://github.com/terikon/cordova-plugin-photo-library";
    PhotoLibrary.install = "ionic cordova plugin add cordova-plugin-photo-library --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"To choose photos\"";
    PhotoLibrary.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
    PhotoLibrary.platforms = ["Android", "Browser", "iOS"];
    PhotoLibrary.decorators = [
        { type: core$1.Injectable }
    ];
    return PhotoLibrary;
}(core.IonicNativePlugin));

exports.CordovaFiniteObservable = CordovaFiniteObservable;
exports.PhotoLibrary = PhotoLibrary;
