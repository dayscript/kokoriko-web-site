(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accompaniments/accompaniments.component.css":
/*!*************************************************************!*\
  !*** ./src/app/accompaniments/accompaniments.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/accompaniments/accompaniments.component.html":
/*!**************************************************************!*\
  !*** ./src/app/accompaniments/accompaniments.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cuenta\">\n    <!--Hola + Botones de usuario-->\n    <div class=\"row user-container\">\n\n        <div class=\"medium-4 columns\">\n            <div class=\"row\">\n                <div class=\"small-4 columns\">\n                    <img src=\"/themes/contrib/kokoriko_theme/images/default-user.jpg\" alt=\"\" class=\"photo\">\n                </div>\n\n                <div class=\"small-8 columns text-align-left\">\n                    <div class=\"hi\">HOLA</div>\n                    <div class=\"user\">Ginna Paola Delgado</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"columns medium-7\">\n            <div class=\"botones\">\n                <a href=\"#\" class=\"button account\">¿Cómo funciona?</a>\n                <a href=\"#\" class=\"button account\">Actualizar datos</a>\n                <a href=\"#\" class=\"button account\">Cerrar sesión</a>\n            </div>\n        </div>\n    </div>\n    <!--Hola + Botones de usuario-->\n\n\n    <!--Banner central-->\n    <div class=\"row hide-for-small-only\">\n        <div class=\"columns medium-12\">\n            <img src=\"/themes/contrib/kokoriko_theme/images/banner-kkp.jpg\" alt=\"\" class=\"banner\">\n        </div>  \n    </div>\n    <!--Banner central-->\n\n    <!--Estado de cuenta-->\n    <div class=\"row\">\n        <!--Navegador izquierda-->\n        <div class=\"columns medium-4\">\n            <div class=\"container-cuenta\">\n                <h3>Estado de cuenta</h3>\n                <hr>\n                <div class=\"fecha\">Septiembre 20 de 2018</div>\n                <div>Tienes disponibles</div>\n\n                <div class=\"kokoripesos\">25.000</div>\n                <img src=\"/themes/contrib/kokoriko_theme/images/kokoripesos-red.png\" alt=\"\" class=\"text-center\">\n                <hr>\n                <div class=\"vencidos\"><span>1.050 Kokoripesos </span> por vencer</div>\n                <div class=\"fecha\">Septiembre 20 de 2018</div>\n                <hr>\n                <div class=\"recent\">Ultima redención: <span>Septiembre 20 de 2018</span></div>\n                <div class=\"recent\">Ultima acumulación: <span>Septiembre 20 de 2018</span></div>\n            </div>\n        </div>\n        <!--Navegador izquierda-->\n\n        <!--Tabla derecha-->\n        <div class=\"columns medium-8\">\n\n            <ul class=\"tabs hide-for-small-only\" data-tab>\n                <li class=\"tab-title active\"><a href=\"#panel1\">Redime tus Kokoripesos</a></li>\n                <li class=\"tab-title\"><a href=\"#panel2\">Kokoripesos acumulados</a></li>\n                <li class=\"tab-title\"><a href=\"#panel3\">Listado de mis redenciones</a></li>\n            </ul>\n            <div class=\"menu-cuenta show-for-small-only\">\n                <select>\n                    <option value=\"\">Redime tus Kokoripesos</option>\n                    <option value=\"\">Kokoripesos acumulados</option>\n                    <option value=\"\">Listado de mis redenciones</option>\n                </select>\n            </div>\n            <div class=\"tabs-content\">\n                <div class=\"content active\" id=\"panel1\">\n                    <div class=\"row text-center\">\n                       <div class=\"container-redimir\">\n                           <div class=\"medium-12 columns\">\n                               <div class=\"redimir\">Ingresa el valor que deseas redimir</div>\n\n                               <div class=\"row\">\n                                   <div class=\"medium-12 columns\">\n                                       <div class=\"row collapse\">\n                                           <div class=\"small-8 medium-10 columns\">\n                                               <input type=\"text\" placeholder=\"Ingrese el monto a redimir\">\n                                           </div>\n                                           <div class=\"small-4 medium-2 columns\">\n                                               <a href=\"#\" class=\"button postfix\">Redimir</a>\n                                           </div>\n                                       </div>\n                                   </div>\n                               </div>\n                               <div class=\"note\">El cupón con el valor redimido será enviado a su correo electrónico</div>\n                           </div>\n                       </div>\n                    </div>\n                </div>\n                <div class=\"content\" id=\"panel2\">\n                    <table border=\"1\" width=\"100%\">\n                        <thead>\n                        <tr>\n                            <th>FECHA FACTURA</th>\n                            <th>N° FACTURA</th>\n                            <th>RESTAURANTE</th>\n                            <th>VR. FACTURA</th>\n                            <th>KOKORIPESOS</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <td>03/11/2017</td>\n                            <td>T57-210301</td>\n                            <td>Diver Plaza Alamos Bogotá</td>\n                            <td>$10200</td>\n                            <td>102</td>\n                        </tr>\n                        <tr>\n                            <td>03/11/2017</td>\n                            <td>T57-210301</td>\n                            <td>Diver Plaza Alamos Bogotá</td>\n                            <td>$10200</td>\n                            <td>102</td>\n                        </tr>\n                        <tr>\n                            <td>03/11/2017</td>\n                            <td>T57-210301</td>\n                            <td>Diver Plaza Alamos Bogotá</td>\n                            <td>$10200</td>\n                            <td>102</td>\n                        </tr>\n                        <tr>\n                            <td>03/11/2017</td>\n                            <td>T57-210301</td>\n                            <td>Diver Plaza Alamos Bogotá</td>\n                            <td>$10200</td>\n                            <td>102</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"content\" id=\"panel3\">\n\n                </div>\n            </div>\n\n\n        </div>\n        <!--Tabla derecha-->\n    </div>\n    <!--Estado de cuenta-->\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/accompaniments/accompaniments.component.ts":
/*!************************************************************!*\
  !*** ./src/app/accompaniments/accompaniments.component.ts ***!
  \************************************************************/
/*! exports provided: AccompanimentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccompanimentsComponent", function() { return AccompanimentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccompanimentsComponent = /** @class */ (function () {
    function AccompanimentsComponent() {
        this.elements = drupalSettings.kokoriko.kokorikoJS;
    }
    AccompanimentsComponent.prototype.ngOnInit = function () {
        console.log(this.elements);
    };
    AccompanimentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'block-accompaniments',
            template: __webpack_require__(/*! ./accompaniments.component.html */ "./src/app/accompaniments/accompaniments.component.html"),
            styles: [__webpack_require__(/*! ./accompaniments.component.css */ "./src/app/accompaniments/accompaniments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccompanimentsComponent);
    return AccompanimentsComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accompaniments_accompaniments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accompaniments/accompaniments.component */ "./src/app/accompaniments/accompaniments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _accompaniments_accompaniments_component__WEBPACK_IMPORTED_MODULE_2__["AccompanimentsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [
                _accompaniments_accompaniments_component__WEBPACK_IMPORTED_MODULE_2__["AccompanimentsComponent"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ariel/projects/web/kokoriko/web/modules/custom/kokoriko/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
