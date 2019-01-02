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

module.exports = "<div id=\"cuenta\">\n    <!--Hola + Botones de usuario-->\n    <div class=\"row user-container\">\n\n        <div class=\"medium-4 columns\">\n            <div class=\"row\">\n                <!--<div class=\"small-4 columns\">\n                    <img src=\"{{user.user_picture}}\" alt=\"\" class=\"photo\">\n                </div>-->\n\n                <div class=\"small-12 columns text-align-left\">\n                    <div class=\"hi\">HOLA</div>\n                    <div class=\"user\">{{user.field_nombres}} {{user.field_apellidos}}</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"columns medium-7\">\n            <div class=\"botones\">\n                <a href=\"#block-comofunciona\" id=\"menu-como\" class=\"button account\">¿Cómo funciona?</a>\n                <a href=\"/user/{{user.uid}}/edit\" class=\"button account\">Actualizar datos</a>\n                <a href=\"/user/logout\" class=\"button account\">Cerrar sesión</a>\n            </div>\n        </div>\n    </div>\n    <!--Hola + Botones de usuario-->\n\n\n    <!--Banner central-->\n    <div class=\"row hide-for-small-only\">\n        <div class=\"columns medium-12\">\n            <img src=\"/themes/contrib/kokoriko_theme/images/banner-kkp.jpg\" alt=\"\" class=\"banner\">\n        </div>\n    </div>\n    <!--Banner central-->\n\n    <!--Estado de cuenta-->\n    <div class=\"row\">\n        <!--Navegador izquierda-->\n        <div class=\"columns medium-4\">\n            <div class=\"container-cuenta\">\n                <h3>Estado de cuenta</h3>\n                <hr>\n                <div class=\"fecha\"></div>\n                <div>Tienes disponibles</div>\n\n                <div *ngIf=\"getTotalPoints() !== false else elseKokoripesos\" [innerHTML]=getTotalPoints() class=\"kokoripesos\"> </div>\n                <ng-template #elseKokoripesos>Cargando...</ng-template>\n                <img src=\"/themes/contrib/kokoriko_theme/images/kokoripesos-red.png\" alt=\"\" class=\"text-center\">\n                <p class=\"legal\">*Estimado cliente, estamos trabajando por ti es por esto que tus puntos están siendo validados  y serán sujetos a ajustes de acuerdo a las compras registradas con tu numero de cedula, sin embargo no dudes en comunicarte con nosotros ante cualquier novedad al siguiente correo servicioalcliente@grupoiga.co.</p>\n\n                <hr>\n                <div *ngIf=\"getPointsOvercome() else elseOvercome\" [innerHTML]=getPointsOvercome() class=\"kokoripesos\"> </div>\n                <ng-template #elseOvercome>--</ng-template>\n\n                <div class=\"vencidos\"><span>{{getPointsOvercome()}} Kokoripesos </span> por vencer</div>\n                <div class=\"fecha\"> {{getDate() | date: 'mediumDate'}}</div>\n                <hr>\n                <div class=\"recent\">Última redención:   <span>{{ getRedemptionLast() | date}}</span></div>\n                <div class=\"recent\">Última acumulación: <span>{{ getInvoiceLast()    | date}}</span></div>\n            </div>\n        </div>\n        <!--Navegador izquierda-->\n\n        <!--Tabla derecha-->\n        <div class=\"columns medium-8\">\n\n            <ul class=\"tabs hide-for-small-only\" data-tab>\n                <li class=\"tab-title active\"><a href=\"#panel1\">Redime tus Kokoripesos</a></li>\n                <li class=\"tab-title\"><a href=\"#panel2\">Kokoripesos acumulados</a></li>\n                <li class=\"tab-title\"><a href=\"#panel3\">Listado de mis redenciones</a></li>\n            </ul>\n            <div class=\"menu-cuenta show-for-small-only\">\n                <select>\n                    <option value=\"\">Redime tus Kokoripesos</option>\n                    <option value=\"\">Kokoripesos acumulados</option>\n                    <option value=\"\">Listado de mis redenciones</option>\n                </select>\n            </div>\n            <div class=\"tabs-content\">\n                <div class=\"content active\" id=\"panel1\">\n                    <div class=\"row text-center\">\n                       <div class=\"container-redimir\">\n                           <div class=\"medium-12 columns\">\n                               <div class=\"redimir\">Ingresa el numero de kokoripesos que deseas redimir</div>\n\n                               <div class=\"row\">\n                                   <div class=\"medium-12 columns\">\n                                       <div class=\"row collapse\" *ngIf=\"getTotalPoints()\">\n                                            <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\n                                              <div class=\"small-8 medium-10 columns\">\n                                                <input type=\"hidden\" formControlName=\"entity_id\">\n                                                <input type=\"text\" formControlName=\"value\" required placeholder=\"Ingresa los kokoripesos a redimir \">\n                                              </div>\n                                              <div class=\"small-4 medium-2 columns\">\n                                                <button type=\"submit\" class=\"redemption-submit\" [disabled]=\"!profileForm.valid\">Redimir</button>\n                                              </div>\n                                            </form>\n                                       </div>\n                                   </div>\n                               </div>\n                               <div *ngIf=\"redemption?.message\">\n                                     <span class=\"success\" [innerHTML]=\"redemption?.message\"></span>\n                               </div>\n                               <div *ngIf=\"errors\">\n                                     <span class=\"error\" *ngFor=\"let error of errors.value\"[innerHTML]=\"error\"></span>\n                               </div>\n                               <div class=\"note\">El cupón con el valor redimido será enviado a su correo electrónico</div>\n                               <div class=\"note\">Este código es válido para su redención dentro de los 30 días calendario siguientes a la fecha de su expedición, y te permitirá pagar todo o parte de cualquiera de los productos que estén vigentes en la carta menú del restaurante donde pretendas adquirir el producto, o de los disponibles por el canal domicilios. El producto se encontrará sujeto a la disponibilidad del restaurante. Para reclamar este beneficio a través del canal de domicilios, el cliente deberá realizar una compra de mínimo $15.000 pesos y asumir el recargo por domicilio. Es necesario informar o entregar el código de canje, en físico o enseñarlo en algún dispositivo electrónico, al cajero del restaurante Kokoriko. En el caso que el canje se realice a través del canal de domicilios, se deberá suministrar el código de redención al asesor telefónico al momento de efectuar el pedido. Este código no es válido para redención a través de las plataformas digitales de domicilios y las compras que se realicen por este medio no acumularán Kokoripesos. Compañía Comercial e Industrial de la Sabana Avesco S.A.S. y Avinco S.A.S. Consulte los términos y condiciones del Programa en www.kokoriko.com.co/kokoripesos</div>\n                           </div>\n                       </div>\n                    </div>\n                </div>\n                <div class=\"content\" id=\"panel2\">\n                    <table border=\"1\" width=\"100%\">\n                        <thead>\n                        <tr>\n                            <th>FECHA</th>\n                            <th>N° FACTURA</th>\n                            <th>RESTAURANTE</th>\n                            <!-- <th>VR. FACTURA</th> -->\n                            <th>KOKORIPESOS</th>\n                            <th>DESCRIPCIÓN</th>\n                        </tr>\n                        </thead>\n                        <tbody *ngIf=\"incentives\">\n                        <!-- <tbody> -->\n                        <tr *ngFor=\"let invoice of getInformationPoints()\">\n                            <td>{{invoice.date | date:'y-m-d'}}</td>\n                            <td>{{invoice.invoice_code}}</td>\n                            <td>{{invoice.restaurant_code}}</td>\n                            <!-- <td>{{invoice.value}}</td> -->\n                            <td>{{invoice.points}}</td>\n                            <td>{{invoice.description}}</td>\n                        </tr>\n                        <div *ngIf=\"!incentives?.invoices\">\n                           No se han encontrado datos.\n                        </div>\n\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"content\" id=\"panel3\">\n                  <table border=\"1\" width=\"100%\">\n                      <thead>\n                        <tr>\n                            <th>FECHA DE REDENCIÓN</th>\n                            <th>CÓDIGO</th>\n                            <th>KOKORIPESOS REDIMIDOS</th>\n                        </tr>\n                      </thead>\n                      <tbody *ngIf=\"incentives?.redemptions\">\n                        <tr *ngFor=\"let redemption of incentives?.redemptions\">\n                            <td>{{redemption.created_at}}</td>\n                            <td>{{redemption.token}}</td>\n                            <td>$ {{redemption.value}}</td>\n                        </tr>\n                        <div *ngIf=\"!incentives?.invoices\">\n                           No se han encontrado datos.\n                        </div>\n                      </tbody>\n                  </table>\n                </div>\n            </div>\n\n\n        </div>\n        <!--Tabla derecha-->\n    </div>\n    <!--Estado de cuenta-->\n\n\n</div>\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function AccompanimentsComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.update_entity = true;
        this.user = drupalSettings.kokoriko.kokorikoJS;
        if (this.user) {
            this.setUserValidator(true);
        }
        this.api = 'https://incentives.demodayscript.com/api'; //'http://incentives.kokoriko.local:8000/api';//
        this.errors = null;
        this.redemption = null;
        this.redemption_value = 0;
    }
    AccompanimentsComponent.prototype.setUser = function (user) {
        this.user = user;
    };
    AccompanimentsComponent.prototype.getUser = function () {
        return this.user;
    };
    AccompanimentsComponent.prototype.setUserValidator = function (value) {
        this.user.validator = value;
    };
    AccompanimentsComponent.prototype.getUserValidation = function () {
        return this.user.validator;
    };
    AccompanimentsComponent.prototype.setRedemptionLast = function (data) {
        this.redemption_last = data;
    };
    AccompanimentsComponent.prototype.getRedemptionLast = function () {
        return this.redemption_last;
    };
    AccompanimentsComponent.prototype.setRedemptionValue = function (data) {
        this.redemption_value = data;
    };
    AccompanimentsComponent.prototype.getRedemptionValue = function () {
        return this.redemption_value;
    };
    AccompanimentsComponent.prototype.setInvoiceLast = function (data) {
        this.invoice_last = data;
    };
    AccompanimentsComponent.prototype.getInvoiceLast = function () {
        return this.invoice_last;
    };
    AccompanimentsComponent.prototype.setIncentivesApi = function (data) {
        this.api = data;
    };
    AccompanimentsComponent.prototype.getIncentivesApi = function () {
        return this.api;
    };
    AccompanimentsComponent.prototype.setIncentives = function (data) {
        if (typeof data.entity !== 'undefined') {
            this.incentives = data.entity;
        }
        else {
            this.incentives = null;
        }
    };
    AccompanimentsComponent.prototype.getIncentives = function () {
        return this.incentives;
    };
    AccompanimentsComponent.prototype.getTotalPoints = function () {
        if (typeof this.incentives !== 'undefined') {
            return this.incentives.totalpoints;
        }
        return false;
    };
    AccompanimentsComponent.prototype.setTotalPoints = function (value) {
        this.incentives.totalpoints = value;
    };
    AccompanimentsComponent.prototype.getPointsOvercome = function () {
        if (typeof this.incentives !== 'undefined') {
            return this.incentives.points_overcome.toString();
        }
        else {
            return false;
        }
    };
    AccompanimentsComponent.prototype.setPointsOvercome = function (value) {
        this.incentives.points_overcome = value;
    };
    AccompanimentsComponent.prototype.setHeaders = function () {
        var header = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, PUT, PATCH, DELETE, OPTIONS',
            'Access-Control-Allow-Origin': '*'
        };
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](header);
    };
    AccompanimentsComponent.prototype.getHeaders = function () {
        return this.headers;
    };
    AccompanimentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setHeaders();
        setTimeout(function () {
            _this.run();
        }, 500);
    };
    AccompanimentsComponent.prototype.run = function () {
        var _this = this;
        this.setRedemptionValue(0);
        if (this.getUserValidation()) {
            this.http.get(this.api + "/entities/" + this.user.field_no_identificacion, this.headers)
                .subscribe(function (data) {
                _this.incentives = data;
            }, function (error) {
                _this.errors = error;
                console.log("error", _this.errors);
            }, function () {
                _this.errors = null;
                if (_this.incentives.redemptions.length != 0) {
                    _this.redemption_last = _this.incentives.redemptions[_this.incentives.redemptions.length - 1].created_at;
                }
                if (_this.incentives.invoices.length != 0) {
                    _this.invoice_last = _this.incentives.invoices[_this.incentives.invoices.length - 1].created_at;
                }
                _this.incentives.points = (_this.incentives.points <= 0) ? 0 : _this.incentives.points;
                _this.updateEntity();
                _this.buidForm();
            });
        }
        else {
            console.error('User data not is valid!', this.user);
        }
    };
    AccompanimentsComponent.prototype.updateEntity = function () {
        var _this = this;
        if (this.update_entity) {
            this.user.zoho_lead_to_contact = 1;
            this.http.put(this.api + "/entities/" + this.incentives.id, this.user, this.headers)
                .subscribe(function (data) {
                console.log("PATCH Request is successful ", data);
            }, function (error) {
                _this.errors = error;
                console.log("error", _this.errors);
            }, function () {
                _this.run();
            });
        }
        this.update_entity = false;
    };
    AccompanimentsComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('request: ', this.profileForm.value);
        this.http.post(this.api + "/redemptions", this.profileForm.value, this.headers)
            .subscribe(function (data) {
            _this.redemption = data;
            _this.errors = null;
        }, function (error) {
            _this.errors = error.error;
            console.log("error", _this.errors);
        }, function () {
            console.log('response:', _this.redemption);
            _this.run();
        });
    };
    AccompanimentsComponent.prototype.getDate = function () {
        var d = new Date();
        d.setDate(d.getDate() + 15);
        return d;
    };
    AccompanimentsComponent.prototype.buidForm = function () {
        this.profileForm = this.fb.group({
            entity_id: [this.incentives.id
            ],
            value: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ],
        });
    };
    AccompanimentsComponent.prototype.getInformationPoints = function () {
        var points = [];
        var data = {
            date: '',
            value: 0,
            points: 0,
            invoice_code: '',
            restaurant_code: '',
            description: '',
        };
        this.incentives.entity.forEach(function (key, item) {
            item.entity_information.forEach(function (element, key) {
                data.value += parseInt(element.value);
                data.date = element.invoice_date_up;
                data.restaurant_code = element.restaurant_code;
            });
            data.points = data.value / 1000;
            data.description = 'Acomulacion por compras';
            data.invoice_code = item.identificacion;
            points.push(data);
        });
        this.incentives.point_values.forEach(function (item, key) {
            data.date = item.created_at;
            data.value = item.value;
            data.points = item.points;
            data.description = item.description;
            data.invoice_code = null;
            data.restaurant_code = null;
            points.push(data);
        });
        return points;
    };
    AccompanimentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'block-accompaniments',
            template: __webpack_require__(/*! ./accompaniments.component.html */ "./src/app/accompaniments/accompaniments.component.html"),
            styles: [__webpack_require__(/*! ./accompaniments.component.css */ "./src/app/accompaniments/accompaniments.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
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