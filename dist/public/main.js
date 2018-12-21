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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _generate_generate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generate/generate.component */ "./src/app/generate/generate.component.ts");
/* harmony import */ var _requests_requests_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./requests/requests.component */ "./src/app/requests/requests.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { DeleteComponent } from './delete/delete.component';
var routes = [
    { path: 'employees/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"] },
    { path: 'employees/:id', component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"] },
    { path: 'employees', component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
    { path: 'delete/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
    { path: 'schedule', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleComponent"] },
    { path: 'requests', component: _requests_requests_component__WEBPACK_IMPORTED_MODULE_8__["RequestsComponent"] },
    //{path: 'schedule/:mondayAM/:mondayPM/:tuesdayAM/:tuesdayPM/:wednesdayAM/:wednesdayPM/:thursdayAM/:thursdayPM/:fridayAM/:fridayPM/:saturdayAM/:saturdayPM/:sundayAM/:sundayPM', component: ScheduleComponent},
    { path: '', component: _generate_generate_component__WEBPACK_IMPORTED_MODULE_7__["GenerateComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to Restaurant Scheduler!\n  </h1>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_SERVICENAME) {
        this._SERVICENAME = _SERVICENAME;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/delete/delete.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _generate_generate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./generate/generate.component */ "./src/app/generate/generate.component.ts");
/* harmony import */ var _requests_requests_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./requests/requests.component */ "./src/app/requests/requests.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_6__["NewComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
                _delete_delete_component__WEBPACK_IMPORTED_MODULE_9__["DeleteComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_12__["ScheduleComponent"],
                _generate_generate_component__WEBPACK_IMPORTED_MODULE_13__["GenerateComponent"],
                _requests_requests_component__WEBPACK_IMPORTED_MODULE_14__["RequestsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/delete/delete.component.css":
/*!*********************************************!*\
  !*** ./src/app/delete/delete.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/delete/delete.component.html":
/*!**********************************************!*\
  !*** ./src/app/delete/delete.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  delete works!\n</p>\n"

/***/ }),

/***/ "./src/app/delete/delete.component.ts":
/*!********************************************!*\
  !*** ./src/app/delete/delete.component.ts ***!
  \********************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
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

var DeleteComponent = /** @class */ (function () {
    function DeleteComponent() {
    }
    DeleteComponent.prototype.ngOnInit = function () {
    };
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.css */ "./src/app/delete/delete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <script>\n    console.log(\"RUNNING SCRIPT TAG...\")\n    var boxCheckSound = new Audio();\n    boxCheckSound.src=\"./static/sounds/boxCheck1.wav\";\n    console.log(boxCheckSound);\n  </script>\n</head>\n\n<a [routerLink]=\"['/employees/new']\">Add new employees</a> | <a [routerLink]=\"['/']\">Make Schedule</a>\n\n<h1>Editing details for {{employee.name}}</h1>\n\n<form name=\"editForm\" #editForm= \"ngForm\" (submit)=\"updateEmployee(editForm)\">\n    Name: <input type=\"text\" name=\"name\" #name= \"ngModel\" [(ngModel)]=\"employee.name\" required><br>\n    <h3 *ngIf=\"name.errors?.required\">Name is required!</h3>\n    Desired shifts per week: <input type=\"number\" name=\"shiftsPerWeek\" #shiftsPerWeek=\"ngModel\" [(ngModel)]=\"employee.shiftsPerWeek\" required><br>\n    <h3 *ngIf=\"shiftsPerWeek.errors?.required\">Please specify how many shifts per week this employee should work.</h3>\n    Bartender shifts per week: <input type=\"number\" name=\"bartenderPerWeek\" #bartenderPerWeek=\"ngModel\" [(ngModel)]=\"employee.bartenderPerWeek\" required><br>\n    <h3 *ngIf=\"bartenderPerWeek.errors?.required\">Please specify how many times per week this employee should bartend.</h3>\n    <div *ngIf=\"employee.bartenderPerWeek>0\">\n      Should this employee also be scheduled as a server?\n      <select name=\"alsoServer\" #alsoServer=\"ngModel\" [(ngModel)]=\"employee.alsoServer\">\n        <option value=\"true\">Yes</option>\n        <option value=\"false\">No</option>\n      </select><br>\n    </div>\n    Shifts led per week: <input type=\"number\" name=\"shiftLeaderPerWeek\" #shiftLeaderPerWeek=\"ngModel\" [(ngModel)]=\"employee.shiftLeaderPerWeek\" required><br>\n    <h3 *ngIf=\"shiftLeaderPerWeek.errors?.required\">Please specify how many shifts per week this employee should lead.</h3>\n    <h2>Requests</h2>\n    <input type = \"checkbox\" name= \"mondayAMRequest\" onmousedown= \"var boxCheckSound = new Audio();\n    boxCheckSound.src= 'footstep-stone3.wav'; \n    console.log(boxCheckSound); boxCheckSound.load(); boxCheckSound.play();\" value= \"mondayAMRequest\" class = \"request\" #mondayAMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.mondayAMRequest\"> mondayAM\n    <input type = \"checkbox\" \n    name= \"mondayPMRequest\" \n    onmousedown= \n      \"var boxCheckSound = new Audio();\n      boxCheckSound.src= 'boxCheck1.ogg';\n      console.log(boxCheckSound); \n      boxCheckSound.load(); \n      boxCheckSound.play();\" \n    value= \"mondayPMRequest\" \n    class = \"request\" \n    #mondayPMRequest=\"ngModel\" \n    [(ngModel)]=\"employee.requests.mondayPMRequest\"> \n    mondayPM<br>\n    <input type = \"checkbox\" name= \"tuesdayAMRequest\" onmousedown= \"boxCheckSound()\" value= \"tuesdayAMRequest\" class = \"request\" #tuesdayAMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.tuesdayAMRequest\"> tuesdayAM\n    <input type = \"checkbox\" name= \"tuesdayPMRequest\" value= \"tuesdayPMRequest\" class = \"request\" #tuesdayPMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.tuesdayPMRequest\"> tuesdayPM<br>\n    <input type = \"checkbox\" name= \"wednesdayAMRequest\" value= \"wednesdayAMRequest\" class = \"request\" #wednesdayAMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.wednesdayAMRequest\"> wednesdayAM\n    <input type = \"checkbox\" name= \"wednesdayPMRequest\" value= \"wednesdayPMRequest\" class = \"request\" #wednesdayPMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.wednesdayPMRequest\"> wednesdayAM<br>\n    <input type = \"checkbox\" name= \"thursdayAMRequest\" value= \"thursdayAMRequest\" class = \"request\" #thursdayAMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.thursdayAMRequest\"> thursdayAM\n    <input type = \"checkbox\" name= \"thursdayPMRequest\" value= \"thursdayPMRequest\" class = \"request\" #thursdayPMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.thursdayPMRequest\"> thursdayPM<br>\n    <input type = \"checkbox\" name= \"fridayAMRequest\" value= \"fridayAMRequest\" class = \"request\" #fridayAMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.fridayAMRequest\"> fridayAM\n    <input type = \"checkbox\" name= \"fridayPMRequest\" value= \"fridayPMRequest\" class = \"request\" #fridayPMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.fridayPMRequest\"> fridayPM<br>\n    <input type = \"checkbox\" name= \"saturdayAMRequest\" value= \"saturdayAMRequest\" class = \"request\" #saturdayAMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.saturdayAMRequest\"> saturdayAM\n    <input type = \"checkbox\" name= \"saturdayPMRequest\" value= \"saturdayPMRequest\" class = \"request\" #saturdayPMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.saturdayPMRequest\"> saturdayPM<br>\n    <input type = \"checkbox\" name= \"sundayAMRequest\" value= \"sundayAMRequest\" class = \"request\" #sundayAMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.sundayAMRequest\"> sundayAM\n    <input type = \"checkbox\" name= \"sundayPMRequest\" value= \"sundayPMRequest\" class = \"request\" #sundayPMRequest=\"ngModel\" [(ngModel)]=\"employee.requests.sundayPMRequest\"> sundayPM<br>\n    <!-- <script type=\"text/javascript\">\n      function requestReset(event){\n        event.preventDefault();\n        console.log(\"EXECUTING SELECTIVE RESET...\")\n        var items=document.getElementsByClassName('request');\n        for(var i=0; i<items.length; i++){\n          if(items[i].type=='checkbox')\n            items[i].checked=false;\n      }\n    }\t\n</script> -->\n    <button id=\"checkAll\" (click)=\"requestAll()\" value= \"checkAll\">Check all</button>\n    <button id=\"uncheckAll\" (click)=\"requestReset()\" value= \"uncheckAll\">Uncheck all</button>\n    <h2>Availability</h2><br>\n    Monday Morning:\n    <select name=\"mondayAM\" #mondayAM=\"ngModel\" [(ngModel)]=\"employee.shifts.mondayAM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Monday Evening:\n    <select name=\"mondayPM\" #mondayPM=\"ngModel\" [(ngModel)]=\"employee.shifts.mondayPM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Tuesday Morning:\n    <select name=\"tuesdayAM\" #tuesdayAM=\"ngModel\" [(ngModel)]=\"employee.shifts.tuesdayAM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Tuesday Evening:\n    <select name=\"tuesdayPM\" #tuesdayPM=\"ngModel\" [(ngModel)]=\"employee.shifts.tuesdayPM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Wednesday Morning:\n    <select name=\"wednesdayAM\" #wednesdayAM=\"ngModel\" [(ngModel)]=\"employee.shifts.wednesdayAM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Wednesday Evening:\n    <select name=\"wednesdayPM\" #wednesdayPM=\"ngModel\" [(ngModel)]=\"employee.shifts.wednesdayPM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Thursday Morning:\n    <select name=\"thursdayAM\" #thursdayAM=\"ngModel\" [(ngModel)]=\"employee.shifts.thursdayAM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Thursday Evening:\n    <select name=\"thursdayPM\" #thursdayPM=\"ngModel\" [(ngModel)]=\"employee.shifts.thursdayPM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Friday Morning:\n    <select name=\"fridayAM\" #fridayAM=\"ngModel\" [(ngModel)]=\"employee.shifts.fridayAM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Friday Evening:\n    <select name=\"fridayPM\" #fridayPM=\"ngModel\" [(ngModel)]=\"employee.shifts.fridayPM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Saturday Morning:\n    <select name=\"saturdayAM\" #saturdayAM=\"ngModel\" [(ngModel)]=\"employee.shifts.saturdayAM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Saturday Evening:\n    <select name=\"saturdayPM\" #saturdayPM=\"ngModel\" [(ngModel)]=\"employee.shifts.saturdayPM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Sunday Morning:\n    <select name=\"sundayAM\" #sundayAM=\"ngModel\" [(ngModel)]=\"employee.shifts.sundayAM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n    Sunday Evening:\n    <select name=\"sundayPM\" #sundayPM=\"ngModel\" [(ngModel)]=\"employee.shifts.sundayPM\">\n      <option value=\"true\">Available</option>\n      <option value=\"false\">Unavailable</option>\n    </select><br>\n  \n  <button type= \"submit\" [disabled]=\"!editForm.valid\">Update details</button>\n  </form>\n  \n  <a [routerLink]=\"['/']\">Back to main page</a><button (click)=\"deleteEmployee(employee['_id'])\">Delete</button>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as $ from 'jquery';


var EditComponent = /** @class */ (function () {
    function EditComponent(_dataService, _route, router) {
        this._dataService = _dataService;
        this._route = _route;
        this.router = router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boxCheckSound = function () {
            var boxCheckSound = new Audio();
            boxCheckSound.src = "./static/sounds/boxCheck1.wav";
            console.log(boxCheckSound);
            boxCheckSound.play();
        };
        this._route.params.subscribe(function (params) { return _this.id = params['id']; });
        this._dataService.getOneEmployee(this.id).subscribe(function (data) {
            console.log("HERE IS DATA: ", data);
            console.log("HERE IS DATA OF EMPLOYEE: ", data['employee']);
            // if(data['status'] == 'success'){
            _this.employee = data['employee'];
            console.log("HERE IS EMPLOYEE: ", _this.employee);
            // }
            // else{
            //   // this._route.navigateByUrl('')
            // }
        });
    };
    EditComponent.prototype.boxCheckSound = function () {
        console.log("RUNNING SCRIPT TAG...");
        var boxCheckSound = new Audio();
        boxCheckSound.src = "./static/sounds/boxCheck1.wav";
        console.log(boxCheckSound);
        boxCheckSound.play();
    };
    EditComponent.prototype.updateEmployee = function (form) {
        var _this = this;
        var observable = this._dataService.updateEmployee(this.id, this.employee);
        observable.subscribe(function (data) { _this.employee = data['employee']; });
        this.router.navigate(['/']);
    };
    EditComponent.prototype.requestReset = function () {
        event.preventDefault();
        console.log("EXECUTING SELECTIVE RESET...");
        var items = document.getElementsByClassName('request');
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == 'checkbox')
                items[i].checked = false;
            var requestedShift = items[i].value;
            this.employee.requests[requestedShift] = false;
            //console.log(this.employee.requests);
        }
    };
    EditComponent.prototype.requestAll = function () {
        event.preventDefault();
        console.log("CHECKING ALL BOXEN...");
        var items = document.getElementsByClassName('request');
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == 'checkbox')
                items[i].checked = true;
            var requestedShift = items[i].value;
            this.employee.requests[requestedShift] = true;
            //console.log(this.employee.requests);
        }
        // for (let request in this.employee.requests){
        //   this.employee.requests[request]=true;
        // }
    };
    EditComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        console.log("RUNNING DELETE FROM COMPONENT WITH ID: ", id);
        var observable = this._dataService.delete(id);
        observable.subscribe(function (data) { _this.router.navigate(['/']); });
        this.router.navigate(['/']);
        // .map(data => {
        //   this.employees = data['employees'];
        // }})
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/generate/generate.component.css":
/*!*************************************************!*\
  !*** ./src/app/generate/generate.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/generate/generate.component.html":
/*!**************************************************!*\
  !*** ./src/app/generate/generate.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    <a [routerLink]=\"['employees']\">View employee directory</a>\n</p>\n<h1>Make new schedule</h1>\n<h3>Select how many servers should be scheduled for each shift</h3>\n<h3>(this count includes shift leader but not bartender)</h3>\n<form name=\"scheduleForm\" #scheduleForm= \"ngForm\" (submit)=\"generateSchedule(scheduleForm)\">\nMonday Morning: \n<input type=\"number\" value=\"4\" name=\"mondayAM\" #mondayAMServers=\"ngModel\" [(ngModel)]=\"newSchedule.mondayAMServers\" min=\"1\" max=\"100\">\nMonday Evening:\n<input type=\"number\" value=\"4\" name=\"mondayPM\" #mondayPMServers=\"ngModel\" [(ngModel)]=\"newSchedule.mondayPMServers\" min=\"1\" max=\"100\"><br>\nTuesday Morning:\n<input type=\"number\" value=\"4\" name=\"tuesdayAM\" #tuesdayAMServers=\"ngModel\" [(ngModel)]=\"newSchedule.tuesdayAMServers\" min=\"1\" max=\"100\">\nTuesday Evening:\n<input type=\"number\" value=\"4\" name=\"tuesdayPM\" #tuesdayPMServers=\"ngModel\" [(ngModel)]=\"newSchedule.tuesdayPMServers\" min=\"1\" max=\"100\"><br>\nWednesday Morning:\n<input type=\"number\" value=\"4\" name=\"wednesdayAM\" #wednesdayAMServers=\"ngModel\" [(ngModel)]=\"newSchedule.wednesdayAMServers\" min=\"1\" max=\"100\">\nWednesday Evening:\n<input type=\"number\" value=\"4\" name=\"wednesdayPM\" #wednesdayPMServers=\"ngModel\" [(ngModel)]=\"newSchedule.wednesdayPMServers\" min=\"1\" max=\"100\"><br>\nThursday Morning:\n<input type=\"number\" value=\"5\" name=\"thursdayAM\" #thursdayAMServers=\"ngModel\" [(ngModel)]=\"newSchedule.thursdayAMServers\" min=\"1\" max=\"100\">\nThursday Evening:\n<input type=\"number\" value=\"5\" name=\"thursdayPM\" #thursdayPMServers=\"ngModel\" [(ngModel)]=\"newSchedule.thursdayPMServers\" min=\"1\" max=\"100\"><br>\nFriday Morning:\n<input type=\"number\" value=\"6\" name=\"fridayAM\" #fridayAMServers=\"ngModel\" [(ngModel)]=\"newSchedule.fridayAMServers\" min=\"1\" max=\"100\">\nFriday Evening:\n<input type=\"number\" value=\"6\" name=\"fridayAM\" #fridayPMServers=\"ngModel\" [(ngModel)]=\"newSchedule.fridayPMServers\" min=\"1\" max=\"100\"><br>\nSaturday Morning:\n<input type=\"number\" value=\"6\" name=\"saturdayAM\" #saturdayAMServers=\"ngModel\" [(ngModel)]=\"newSchedule.saturdayAMServers\" min=\"1\" max=\"100\">\nSaturday Evening:\n<input type=\"number\" value=\"6\" name=\"saturdayPM\" #saturdayPMServers=\"ngModel\" [(ngModel)]=\"newSchedule.saturdayPMServers\" min=\"1\" max=\"100\"><br>\nSunday Morning:\n<input type=\"number\" value=\"5\" name=\"sundayAM\" #sundayAMServers=\"ngModel\" [(ngModel)]=\"newSchedule.sundayAMServers\" min=\"1\" max=\"100\">\nSunday Evening:\n<input type=\"number\" value=\"5\" name=\"sundayPM\" #sundayPMServers=\"ngModel\" [(ngModel)]=\"newSchedule.sundayPMServers\" min=\"1\" max=\"100\"><br>\n<button type= \"submit\"> Make schedule! </button>\n</form>"

/***/ }),

/***/ "./src/app/generate/generate.component.ts":
/*!************************************************!*\
  !*** ./src/app/generate/generate.component.ts ***!
  \************************************************/
/*! exports provided: GenerateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateComponent", function() { return GenerateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GenerateComponent = /** @class */ (function () {
    function GenerateComponent(_dataService, _route, router) {
        this._dataService = _dataService;
        this._route = _route;
        this.router = router;
        this.newSchedule = {
            mondayAMServers: 4,
            mondayPMServers: 4,
            tuesdayAMServers: 4,
            tuesdayPMServers: 4,
            wednesdayAMServers: 4,
            wednesdayPMServers: 4,
            thursdayAMServers: 5,
            thursdayPMServers: 5,
            fridayAMServers: 6,
            fridayPMServers: 6,
            saturdayAMServers: 6,
            saturdayPMServers: 6,
            sundayAMServers: 4,
            sundayPMServers: 4
        };
    }
    GenerateComponent.prototype.ngOnInit = function () {
    };
    GenerateComponent.prototype.generateSchedule = function () {
        var data = {
            mondayAMServers: this.newSchedule.mondayAMServers,
            mondayPMServers: this.newSchedule.mondayPMServers,
            tuesdayAMServers: this.newSchedule.tuesdayAMServers,
            tuesdayPMServers: this.newSchedule.tuesdayPMServers,
            wednesdayAMServers: this.newSchedule.wednesdayAMServers,
            wednesdayPMServers: this.newSchedule.wednesdayPMServers,
            thursdayAMServers: this.newSchedule.thursdayAMServers,
            thursdayPMServers: this.newSchedule.thursdayPMServers,
            fridayAMServers: this.newSchedule.fridayAMServers,
            fridayPMServers: this.newSchedule.fridayPMServers,
            saturdayAMServers: this.newSchedule.saturdayAMServers,
            saturdayPMServers: this.newSchedule.saturdayPMServers,
            sundayAMServers: this.newSchedule.sundayAMServers,
            sundayPMServers: this.newSchedule.sundayPMServers
        };
        this.router.navigate(['/schedule'], { queryParams: {
                mondayAMServers: data.mondayAMServers,
                mondayPMServers: data.mondayPMServers,
                tuesdayAMServers: data.tuesdayAMServers,
                tuesdayPMServers: data.tuesdayPMServers,
                wednesdayAMServers: data.wednesdayAMServers,
                wednesdayPMServers: data.wednesdayPMServers,
                thursdayAMServers: data.thursdayAMServers,
                thursdayPMServers: data.thursdayPMServers,
                fridayAMServers: data.fridayAMServers,
                fridayPMServers: data.fridayPMServers,
                saturdayAMServers: data.saturdayAMServers,
                saturdayPMServers: data.saturdayPMServers,
                sundayAMServers: data.sundayAMServers,
                sundayPMServers: data.sundayPMServers
            } });
    };
    GenerateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generate',
            template: __webpack_require__(/*! ./generate.component.html */ "./src/app/generate/generate.component.html"),
            styles: [__webpack_require__(/*! ./generate.component.css */ "./src/app/generate/generate.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GenerateComponent);
    return GenerateComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.addEmployee = function (employee) {
        console.log("ADDING EMPLOYEE", employee);
        return this._http.post('/api/things', employee);
        {
        }
    };
    HttpService.prototype.getEmployees = function () {
        // our http response is an Observable, store it in a variable
        // let tempObservable = this._http.get('/pets');
        // subscribe to the Observable and provide the code we would like to do with our data from the response
        // tempObservable.subscribe(data => console.log("Pets retrieved!", data));
        console.log("GETTING THINGS...");
        console.log(this._http.get('/api/things'));
        return this._http.get('/api/things');
    };
    HttpService.prototype.generateSchedule = function () {
    };
    HttpService.prototype.getOneEmployee = function (id) {
        console.log("HERE IS THE REQUESTED ID");
        console.log(id);
        return this._http.get('/api/things/' + id);
    };
    HttpService.prototype.updateEmployee = function (id, employee) {
        console.log("RUNNING UPDATEEMPLOYEE");
        return this._http.put("/api/things/" + id, employee);
        //.map(data => data)
    };
    HttpService.prototype.delete = function (id) {
        console.log("RUNNING DELETE FROM SERVICE FOR ID: ", id);
        return this._http.get('/api/things/delete/' + id);
        //console.log( result)
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/employees/new']\">Add new employees</a> | <a [routerLink]=\"['/']\">Make Schedule</a>\n\n<h1>All employees</h1>\n\n<ul *ngFor=\"let employee of employees\">\n  <li>{{employee.name}} <a [routerLink]=\"['/employees', employee['_id']]\">Show details</a></li>\n</ul> "

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(_dataService, _route, router) {
        this._dataService = _dataService;
        this._route = _route;
        this.router = router;
        this.employees = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    ListComponent.prototype.getEmployees = function () {
        var _this = this;
        var observable = this._dataService.getEmployees();
        observable.subscribe(function (data) {
            console.log("HERE IS THE OBSERVABLE", data);
            _this.employees = data['employees'];
            console.log("EMPLOYEES: ", _this.employees);
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/employees/']\">Back to employee directory</a>\n\n<form name=\"employeeForm\" #employeeForm= \"ngForm\" (submit)=\"addEmployee(employeeForm)\">\n  Name: <input type=\"text\" name=\"name\" #name= \"ngModel\" [(ngModel)]=\"employeeToAdd.name\" required><br>\n  <h3 *ngIf=\"name.errors?.required\">Name is required!</h3>\n  Desired shifts per week: <input type=\"number\" name=\"shiftsPerWeek\" #shiftsPerWeek=\"ngModel\" [(ngModel)]=\"employeeToAdd.shiftsPerWeek\" required><br>\n  <h3 *ngIf=\"shiftsPerWeek.errors?.required\">Please specify how many shifts per week this employee should work.</h3>\n  Bartender shifts per week: <input type=\"number\" name=\"bartenderPerWeek\" #bartenderPerWeek=\"ngModel\" [(ngModel)]=\"employeeToAdd.bartenderPerWeek\" required><br>\n  <h3 *ngIf=\"bartenderPerWeek.errors?.required\">Please specify how many times per week this employee should bartend.</h3>\n  <div *ngIf=\"employeeToAdd.bartenderPerWeek>0\">\n    Should this employee also be scheduled as a server?\n    <select name=\"alsoServer\" #alsoServer=\"ngModel\" [(ngModel)]=\"employeeToAdd.alsoServer\">\n      <option value=\"true\">Yes</option>\n      <option value=\"false\">No</option>\n    </select><br>\n  </div>\n  Shifts led per week: <input type=\"number\" name=\"shiftLeaderPerWeek\" #shiftLeaderPerWeek=\"ngModel\" [(ngModel)]=\"employeeToAdd.shiftLeaderPerWeek\" required><br>\n  <h3 *ngIf=\"shiftLeaderPerWeek.errors?.required\">Please specify how many shifts per week this employee should lead.</h3>\n  <h2>Availability</h2><br>\n  Monday Morning:\n  <select name=\"mondayAM\" #mondayAM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.mondayAM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Monday Evening:\n  <select name=\"mondayPM\" #mondayPM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.mondayPM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Tuesday Morning:\n  <select name=\"tuesdayAM\" #tuesdayAM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.tuesdayAM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Tuesday Evening:\n  <select name=\"tuesdayPM\" #tuesdayPM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.tuesdayPM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Wednesday Morning:\n  <select name=\"wednesdayAM\" #wednesdayAM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.wednesdayAM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Wednesday Evening:\n  <select name=\"wednesdayPM\" #wednesdayPM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.wednesdayPM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Thursday Morning:\n  <select name=\"thursdayAM\" #thursdayAM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.thursdayAM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Thursday Evening:\n  <select name=\"thursdayPM\" #thursdayPM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.thursdayPM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Friday Morning:\n  <select name=\"fridayAM\" #fridayAM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.fridayAM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Friday Evening:\n  <select name=\"fridayPM\" #fridayPM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.fridayPM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Saturday Morning:\n  <select name=\"saturdayAM\" #saturdayAM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.saturdayAM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Saturday Evening:\n  <select name=\"saturdayPM\" #saturdayPM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.saturdayPM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Sunday Morning:\n  <select name=\"sundayAM\" #sundayAM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.sundayAM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n  Sunday Evening:\n  <select name=\"sundayPM\" #sundayPM=\"ngModel\" [(ngModel)]=\"employeeToAdd.shifts.sundayPM\">\n    <option value=\"true\">Available</option>\n    <option value=\"false\">Unavailable</option>\n  </select><br>\n\n<button type= \"submit\" [disabled]=\"!employeeForm.valid\"> Add employee! </button>\n</form>\n\n<!-- {{ employeeToAdd | json }} -->"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewComponent = /** @class */ (function () {
    function NewComponent(_dataService, _route, router) {
        this._dataService = _dataService;
        this._route = _route;
        this.router = router;
        this.employeeToAdd = {
            name: '',
            shiftsPerWeek: 5,
            bartenderPerWeek: 0,
            shiftLeaderPerWeek: 0,
            alsoServer: true,
            shifts: {
                mondayAM: true,
                mondayPM: true,
                tuesdayAM: true,
                tuesdayPM: true,
                wednesdayAM: true,
                wednesdayPM: true,
                thursdayAM: true,
                thursdayPM: true,
                fridayAM: true,
                fridayPM: true,
                saturdayAM: true,
                sundayAM: true,
                sundayPM: true,
            },
            requests: {
                mondayAMRequest: false,
                mondayPMRequest: false,
                tuesdayAMRequest: false,
                tuesdayPMRequest: false,
                wednesdayAMRequest: false,
                wednesdayPMRequest: false,
                thursdayAMRequest: false,
                thursdayPMRequest: false,
                fridayAMRequest: false,
                fridayPMRequest: false,
                saturdayAMRequest: false,
                saturdayPMRequest: false,
                sundayAMRequest: false,
                sundayPMRequest: false,
            }
        };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.addEmployee = function () {
        var data = {
            name: this.employeeToAdd.name,
            shiftsPerWeek: this.employeeToAdd.shiftsPerWeek,
            bartenderPerWeek: this.employeeToAdd.bartenderPerWeek,
            alsoServer: this.employeeToAdd.alsoServer,
            shiftLeaderPerWeek: this.employeeToAdd.shiftLeaderPerWeek,
            shifts: this.employeeToAdd.shifts,
        };
        console.log("ADDING EMPLOYEE FROM NEW.COMPONENT.TS");
        var observable = this._dataService.addEmployee({ newEmployee: data });
        observable.subscribe(function (data) { return console.log("Got our data!", data); });
        console.log("ROUTER NAVIGATE?");
        this.router.navigate(['/employees']);
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/requests/requests.component.css":
/*!*************************************************!*\
  !*** ./src/app/requests/requests.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/requests/requests.component.html":
/*!**************************************************!*\
  !*** ./src/app/requests/requests.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <a [routerLink]=\"['/employees/new']\">Add new employees</a> | <a [routerLink]=\"['/']\">Make Schedule</a>\n<h1>Requests</h1>\n<div *ngFor=\"let employee of employees\">\n  {{employee.requests}}\n    <ul *ngFor=\"let request of employee.requests\">\n      <li *ngIf= \"employee.requests.request===true\">\n          <a [routerLink]=\"['/employees', employee['_id']]\">{{employee.name}}</a>\n          <p>{{employee.requests.request}}</p>\n      </li>\n    </ul>\n</div>\n<h2>Create new request</h2>\n<select #ngFor=\"let employee of employees\">\n  <option value=\"employee['name']\"> {{employee.name}}</option>\n</select> -->\n"

/***/ }),

/***/ "./src/app/requests/requests.component.ts":
/*!************************************************!*\
  !*** ./src/app/requests/requests.component.ts ***!
  \************************************************/
/*! exports provided: RequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsComponent", function() { return RequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestsComponent = /** @class */ (function () {
    function RequestsComponent(_dataService, _route, router) {
        this._dataService = _dataService;
        this._route = _route;
        this.router = router;
        this.employees = [];
    }
    RequestsComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    RequestsComponent.prototype.getEmployees = function () {
        var _this = this;
        var observable = this._dataService.getEmployees();
        observable.subscribe(function (data) {
            console.log("HERE IS THE OBSERVABLE", data);
            _this.employees = data['employees'];
            console.log("EMPLOYEES: ", _this.employees);
        });
    };
    RequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requests',
            template: __webpack_require__(/*! ./requests.component.html */ "./src/app/requests/requests.component.html"),
            styles: [__webpack_require__(/*! ./requests.component.css */ "./src/app/requests/requests.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RequestsComponent);
    return RequestsComponent;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.component.css":
/*!*************************************************!*\
  !*** ./src/app/schedule/schedule.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.more_info {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/schedule/schedule.component.html":
/*!**************************************************!*\
  !*** ./src/app/schedule/schedule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <script>\n      console.log(\"RUNNING SCRIPT TAG...\")\n      var moreInfoSound = new Audio();\n      moreInfoSound.src=\"./static/sounds/moreInfo1.wav\";\n      console.log(boxCheckSound);\n    </script>\n  </head>\n<a [routerLink]=\"['/employees/new']\">Add new employees</a> | <a [routerLink]=\"['/employees/']\">View and edit employees</a>\n<h1 *ngIf=\"!newShifts\">Generating Schedule...</h1>\n<h1 *ngIf=\"!!newShifts\">Your Schedule</h1>\n   <table>\n      <!-- <th>Section</th><th>Employee</th> -->\n      <span *ngFor= \"let newShift of newShifts\">\n          <h3>{{shifts[newShifts.indexOf(newShift)][0]}}</h3>\n        <tr *ngFor= \"let person of newShift\">\n          <td>{{person.section}}:</td><td>{{person.employee}}</td><button (click)= \"remove(person.employee,shifts[newShifts.indexOf(newShift)][0],person.section)\">Remove</button>\n        </tr>\n      </span>\n    </table>    \n<h2 *ngIf=\"this.problems.length>0\">Potential problems with this schedule:</h2>\n  <ul *ngFor= \"let problem of problems\">\n    <li>{{problem}} \n      <button *ngIf= \"problem.indexOf('Could')===0\" class=\"more_info\" (click)=\"moreInfo(problem.slice(problem.indexOf('on ')+3, problem.indexOf('.')))\" value= \"moreInfo\"    \n      onmousedown= \n      \"var moreInfoSound = new Audio();\n      moreInfoSound.src= 'moreInfo1.wav';\n      console.log(moreInfoSound); \n      moreInfoSound.load(); \n      moreInfoSound.play();\">\n      MORE INFO</button>\n    </li>\n  </ul>\n<span *ngIf=\"this.scrutinized.name.length>0\">\n  <h2>Viewing details for {{scrutinized.name}}</h2>\n  <h3>Current schedule</h3>\n  <span *ngFor= \"let assignment of scrutinizedShift\">\n    <p>{{assignment[0]}}: {{assignment[1]}}</p> <button (click)= \"remove(assignment[1], scrutinized.name, assignment[0])\">Remove</button>\n  </span>\n  <h3 *ngIf=\"this.scrutinized.eligible.length===0\">No employees eligible without complications</h3>\n  <h3 *ngIf=\"this.scrutinized.eligible.length>0\">Employees eligible without complications:</h3>\n  <span *ngFor= \"let employee of this.scrutinized.eligible\">\n    <p>{{employee}}</p> \n    <span *ngFor= \"let vacancy of this.scrutinized.vacancies\">\n      <button (click)=\"patch(employee, scrutinized.name, vacancy)\">Assign to {{vacancy}}</button>\n    </span>\n  </span>\n  <h3 *ngIf=\"this.scrutinized.requests.length===0\">No employees requesting this shift off</h3>\n  <h3 *ngIf=\"this.scrutinized.requests.length>0\">Employees requesting this shift off:</h3>\n  <span *ngFor= \"let employee of this.scrutinized.requests\">\n    <p>{{employee}}</p> \n    <span *ngFor= \"let vacancy of this.scrutinized.vacancies\">\n      <button (click)=\"patch(employee, scrutinized.name, vacancy)\">Assign to {{vacancy}}</button>\n    </span>\n  </span>\n<span *ngIf=\"this.scrutinized.name[this.scrutinized.name.length-2]!=='A'\">\n  <h3 *ngIf=\"this.scrutinized.doubles.length===0\">No eligible doubles</h3>\n  <h3 *ngIf=\"this.scrutinized.doubles.length>0\">Potential doubles:</h3>\n  <span *ngFor= \"let employee of this.scrutinized.doubles\">\n    <p>{{employee}}</p>\n    <span *ngFor= \"let vacancy of this.scrutinized.vacancies\">\n        <button (click)=\"patch(employee, scrutinized.name, vacancy)\">Assign to {{vacancy}}</button>\n    </span>\n  </span>\n</span>\n<h3 *ngIf=\"this.scrutinized.hourmax.length===0\">No employees available for overtime.</h3>\n<h3 *ngIf=\"this.scrutinized.hourmax.length>0\">Employees available for overtime:</h3>\n<span *ngFor= \"let employee of this.scrutinized.hourmax\">\n  <p>{{employee}}</p>\n  <span *ngFor= \"let vacancy of this.scrutinized.vacancies\">\n      <button (click)=\"patch(employee, scrutinized.name, vacancy)\">Assign to {{vacancy}}</button>\n  </span>\n</span>\n<h3 *ngIf=\"this.scrutinized.barmax.length>0\">Available employees already at capacity for bartending shifts:</h3>\n<span *ngFor= \"let employee of this.scrutinized.barmax\">\n  <p>{{employee}}</p> <button (click= \"patch(employee, scrutinized.name, section1\")>Assign to section1</button>\n\n</span>\n<h3 *ngIf=\"this.scrutinized.leadmax.length>0\">Available employees already at capacity for leading shifts:</h3>\n<span *ngFor= \"let employee of this.scrutinized.leadmax\">\n  <p>{{employee}}</p>\n</span>\n\n\n"

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: KeysPipe, ValuesPipe, ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesPipe", function() { return ValuesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value);
    };
    KeysPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "keys",
            pure: false
        })
    ], KeysPipe);
    return KeysPipe;
}());

var ValuesPipe = /** @class */ (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value).map(function (key) { return value[key]; });
    };
    ValuesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "values",
            pure: false
        })
    ], ValuesPipe);
    return ValuesPipe;
}());

var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(_dataService, _route, router) {
        this._dataService = _dataService;
        this._route = _route;
        this.router = router;
        this.employees = [];
        this.schedule = {
            mondayAM: {},
            mondayPM: {},
            tuesdayAM: {},
            tuesdayPM: {},
            wednesdayAM: {},
            wednesdayPM: {},
            thursdayAM: {},
            thursdayPM: {},
            fridayAM: {},
            fridayPM: {},
            saturdayAM: {},
            saturdayPM: {},
            sundayAM: {},
            sundayPM: {}
        };
        this.problems = [];
        this.requestList = [];
        this.formerRequestList = [];
        this.doubles = [];
        this.formerDoubles = [];
        this.hourmax = [];
        this.formerHourmax = [];
        this.barmax = [];
        this.formerBarmax = [];
        this.leadmax = [];
        this.formerLeadmax = [];
        this.scrutinized = {
            name: "",
            roster: {},
            requests: [],
            doubles: [],
            hourmax: [],
            leadmax: [],
            barmax: [],
            vacancies: [],
            eligible: []
        };
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        //var employees = [];
        // this._route.params.subscribe((params: Params) => {
        //   this.mondayAMServers=params['mondayAM'];
        //   console.log("ID: ", this.id);
        // })
        this.getEmployees();
        //let mondayAMServers=this._route.snapshot.queryParams["mondayAMServers"];
        //console.log(mondayAMServers);
        // this._route.params.subscribe((params: Params) => {
        //   console.log(params['mondayAMServers']);
        // });
        //employees = this.getEmployees();
    };
    ScheduleComponent.prototype.moreInfo = function (shift) {
        console.log("RUNNING moreInfo for shift: ", shift);
        this.scrutinized.name = shift;
        this.scrutinized.roster = [];
        this.scrutinizedShift = Object.entries(this.schedule[shift]);
        //console.log(this.scrutinizedShift);
        for (var i = 0; i < this.scrutinizedShift.length; i++) {
            var temp = [];
            temp.push({
                section: this.scrutinizedShift[i][0],
                employee: this.scrutinizedShift[i][1]
            });
            this.scrutinized.roster.push(temp);
        }
        console.log("ROSTER: ", this.scrutinized.roster);
        if (this.requestCheck(shift).length > 0) {
            this.scrutinized.requests = this.requestCheck(shift);
        }
        if (this.hourmaxCheck(shift).length > 0) {
            this.scrutinized.hourmax = this.hourmaxCheck(shift);
        }
        if (this.barmaxCheck(shift).length > 0) {
            this.scrutinized.barmax = this.barmaxCheck(shift);
        }
        if (this.leadmaxCheck(shift).length > 0) {
            this.scrutinized.requests = this.leadmaxCheck(shift);
        }
        if (this.doublesCheck(shift).length > 0) {
            this.scrutinized.doubles = this.doublesCheck(shift);
        }
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            if (employee.shifts[shift] === true && employee.alreadyScheduled[shift] === false && employee.requests[shift + "Request"] === false && employee.shiftsPerWeek > employee.shiftsScheduled) {
                this.scrutinized.eligible.push(employee.name);
            }
        }
        console.log("ELIGIBLE: ", this.scrutinized.eligible);
        this.scrutinized.vacancies = [];
        for (var i = 0; i < this.problems.length; i++) {
            if (this.problems[i].indexOf(shift) > -1) {
                if (this.problems[i].indexOf("shift leader") > -1) {
                    this.scrutinized.vacancies.push("section1");
                }
                else if (this.problems[i].indexOf("bartender") > -1) {
                    this.scrutinized.vacancies.push("bartender");
                }
                else {
                    this.scrutinized.vacancies.push(this.problems[i].slice(this.problems[i].indexOf("work") + 5, this.problems[i].indexOf(" on ")));
                }
            }
        }
        return this.scrutinized;
    };
    //The below function checks whether the shift currently being scheduled is a morning. If it is, it returns the night shift of the same day.
    ScheduleComponent.prototype.isMorning = function (shift) {
        var str = shift.toString();
        if (str[str.length - 2] === "P") {
            return "false";
        }
        var night = str.slice(0, str.length - 2) + "PM";
        for (var key in this.employees[0].shifts) {
            if (key.toString() === night) {
                return key;
            }
        }
    };
    //The below function sorts the employees in order of highest to lowest based on priority, so that the scheduling function can evaluate them in the proper order.
    ScheduleComponent.prototype.prioritySort = function (arr) {
        for (var i = 1; i < this.employees.length; i++) {
            if (this.employees[i].priority > this.employees[i - 1].priority) {
                var temp = this.employees[i - 1];
                this.employees[i - 1] = this.employees[i];
                this.employees[i] = temp;
                i = 1;
            }
        }
        return arr;
    };
    //This algorithm will not schedule an employee to a double shift, because anyone scheduled in the morning will be marked as unavailable for the evening. In the event that a PM shift cannot be filled, the below code will check and see if there is anyone eligible to work it who is already scheduled that morning, and return a list of employees who could be scheduled to a double if necessary.
    ScheduleComponent.prototype.doublesCheck = function (shift) {
        var result = [];
        for (var i = 0; i < this.doubles.length; i++) {
            if (this.doubles[i].indexOf(shift) === 0) {
                result.push(this.doubles[i].slice(shift.length + 1, this.doubles[i].length));
            }
        }
        return result;
    };
    //In the event that a shift cannot be filled, the below code checks whether anyone has requested it off.
    ScheduleComponent.prototype.requestCheck = function (shift) {
        var result = [];
        for (var i = 0; i < this.requestList.length; i++) {
            if (this.requestList[i].indexOf(shift) === 0) {
                result.push(this.requestList[i].slice(shift.length, this.requestList[i].length));
            }
        }
        return result;
    };
    //In the event that a shift cannot be filled, the below code checks whether anyone could work it but has reached their allotted shifts for the week.
    ScheduleComponent.prototype.hourmaxCheck = function (shift) {
        var result = [];
        for (var i = 0; i < this.hourmax.length; i++) {
            if (this.hourmax[i].indexOf(shift) === 0) {
                result.push(this.hourmax[i].slice(shift.length + 1, this.hourmax[i].length));
            }
        }
        return result;
    };
    //The below functions work like hourmaxCheck but check for bartender and shift leader designations.
    ScheduleComponent.prototype.leadmaxCheck = function (shift) {
        var result = [];
        for (var i = 0; i < this.leadmax.length; i++) {
            if (this.leadmax[i].indexOf(shift) === 0) {
                result.push(this.leadmax[i].slice(shift.length + 1, this.leadmax[i].length));
            }
        }
        return result;
    };
    ScheduleComponent.prototype.barmaxCheck = function (shift) {
        var result = [];
        for (var i = 0; i < this.barmax.length; i++) {
            if (this.barmax[i].indexOf(shift) === 0) {
            }
        }
        return result;
    };
    //The below functions check for whether an employee has maxed their hours AND bartender/shift leader allotments so that they won't show up on both problem reports.
    ScheduleComponent.prototype.barmaxFilter = function (shift) {
        var result = this.barmaxCheck(shift);
        for (var i = result.length; i >= 0; i--) {
            if (this.hourmaxCheck(shift).indexOf(result[i]) > -1) {
                result[i] = result[result.length - 1];
                result.pop();
                i++;
            }
        }
        return result;
    };
    ScheduleComponent.prototype.leadmaxFilter = function (shift) {
        var result = this.leadmaxCheck(shift);
        for (var i = result.length; i >= 0; i--) {
            if (this.hourmaxCheck(shift).indexOf(result[i]) > -1) {
                result[i] = result[result.length - 1];
                result.pop();
                i++;
            }
        }
        return result;
    };
    //The below function schedules the bartender for a single shift. This will be run on every day first, so that qualified bartenders will not be scheduled to serving shifts until all bartender shifts are filled.
    ScheduleComponent.prototype.scheduleBartender = function (shift) {
        var sortedEmployees = this.prioritySort(this.employees);
        for (var i = 0; i < sortedEmployees.length; i++) {
            var server = sortedEmployees[i];
            if (server.shifts[shift] === true &&
                server.alreadyScheduled[shift] !== true) {
                if (server.shiftsScheduled >= server.shiftsPerWeek &&
                    this.hourmax.indexOf(shift + " " + server.name) === -1) {
                    this.hourmax.push(shift + " " + server.name);
                }
                if (server.bartenderScheduled >= server.bartenderPerWeek &&
                    server.bartenderPerWeek > 0 &&
                    this.barmax.indexOf(shift + " " + server.name) === -1) {
                    this.barmax.push(shift + " " + server.name);
                }
                if (this.barmax.indexOf(shift + " " + server.name) > -1 ||
                    this.hourmax.indexOf(shift + " " + server.name) > -1) {
                    continue;
                }
                console.log("Scheduling " + server.name + " on " + shift + " as bartender.");
                this.schedule[shift].bartender = server.name;
                server.bartenderScheduled++;
                server.shiftsScheduled++;
                server.alreadyScheduled[shift] = true;
                //If this is a morning shift, the below code checks that server's availability for the corresponding night shift. If they are available, their availability will be set to false but a note will be made in their file that this has happened in case the manager needs to schedule someone to a double shift.
                if (this.isMorning(shift) != "false") {
                    if (server.shifts[this.isMorning(shift)] === true) {
                        server.alreadyScheduled[this.isMorning(shift)] = true;
                        this.doubles.push(this.isMorning(shift) + " " + server.name);
                    }
                }
                return;
            }
        }
        // let problem = "Could not find eligible bartender on " + shift + ".";
        // if (this.hourmaxCheck(shift).length > 0) {
        //   problem =
        //     problem + " " + this.hourmaxCheck(shift).length + " overtime options.";
        // }
        // if (this.barmaxFilter(shift).length > 0) {
        //   problem =
        //     problem +
        //     " " +
        //     this.barmaxCheck(shift).length +
        //     " bartender overschedule options.";
        // }
        // this.problems.push(problem);
    };
    //The below code is nearly identical to the bartender scheduling logic, but handles shift leaders.
    ScheduleComponent.prototype.scheduleShiftLeader = function (shift) {
        for (var key in this.schedule) {
            if (key.toString() === shift.toString()) {
                var shift = key;
            }
        }
        var sortedEmployees = this.prioritySort(this.employees);
        for (var i = 0; i < sortedEmployees.length; i++) {
            var server = sortedEmployees[i];
            if (server.alsoServer === true &&
                server.shifts[shift] === true &&
                server.alreadyScheduled[shift] !== true) {
                if (server.shiftsScheduled >= server.shiftsPerWeek &&
                    this.hourmax.indexOf(shift + " " + server.name) === -1) {
                    this.hourmax.push(shift + " " + server.name);
                }
                if (server.shiftLeaderScheduled >= server.shiftLeaderPerWeek &&
                    server.shiftLeaderPerWeek > 0 &&
                    this.leadmax.indexOf(shift + " " + server.name) === -1) {
                    this.leadmax.push(shift + " " + server.name);
                }
                if (this.leadmax.indexOf(shift + " " + server.name) > -1 ||
                    this.hourmax.indexOf(shift + " " + server.name) > -1) {
                    continue;
                }
                console.log("Scheduling " + server.name + " on " + shift + " as shift leader.");
                this.schedule[shift].section1 = server.name;
                server.shiftLeaderScheduled++;
                server.shiftsScheduled++;
                server.alreadyScheduled[shift] = true;
                if (this.isMorning(shift) != "false") {
                    if (server.shifts[this.isMorning(shift)] === true) {
                        server.alreadyScheduled[this.isMorning(shift)] = true;
                        this.doubles.push(this.isMorning(shift) + " " + server.name);
                    }
                }
                return;
            }
        }
        // let problem = "Could not find eligible shift leader on " + shift + ".";
        // if (this.hourmaxCheck(shift).length > 0) {
        //   problem =
        //     problem + " " + this.hourmaxCheck(shift).length + " overtime options.";
        // }
        // if (this.leadmaxFilter(shift).length > 0) {
        //   problem =
        //     problem +
        //     " " +
        //     this.leadmaxFilter(shift).length +
        //     " leader overschedule options.";
        // }
        // this.problems.push(problem);
    };
    //The below code fills out the shift with non-shift-leader, non-bartender servers. totalServers represents the total number of people working the shift, including shift leader and bartender.
    ScheduleComponent.prototype.scheduleRemainder = function (shift, totalServers) {
        if (totalServers === void 0) { totalServers = 5; }
        var sortedEmployees = this.prioritySort(this.employees);
        //outerloop:
        for (var i = 2; i < totalServers; i++) {
            var section = "section" + i.toString();
            innerloop: for (var q = 0; q < sortedEmployees.length; q++) {
                var server = sortedEmployees[q];
                if (server.alsoServer === true &&
                    server.shifts[shift] === true &&
                    server.alreadyScheduled[shift] !== true) {
                    if (server.shiftsScheduled >= server.shiftsPerWeek) {
                        if (this.hourmax.indexOf(shift + " " + server.name) === -1) {
                            //console.log("Adding to hourmax: " + shift + " " + server.name);
                            this.hourmax.push(shift + " " + server.name);
                        }
                        continue innerloop;
                    }
                    console.log("Scheduling " +
                        server.name +
                        " on " +
                        shift +
                        " as " +
                        section +
                        ".");
                    this.schedule[shift][section] = server.name;
                    server.shiftsScheduled++;
                    server.alreadyScheduled[shift] = true;
                    if (this.isMorning(shift) != "false") {
                        if (server.shifts[this.isMorning(shift)] === true) {
                            server.alreadyScheduled[this.isMorning(shift)] = true;
                            this.doubles.push(this.isMorning(shift) + " " + server.name);
                        }
                    }
                    break innerloop;
                }
            }
            // if (!this.schedule[shift][section]) {
            //   let problem =
            //     "Could not find employee to work " + section + " on " + shift + ".";
            //   if (this.doublesCheck(shift).length > 0) {
            //     problem =
            //       problem +
            //       " " +
            //       this.doublesCheck(shift).length +
            //       " potential doubles.";
            //   }
            //   if (this.requestCheck(shift).length > 0) {
            //     problem =
            //       problem + " " + this.requestCheck(shift).length + " requests.";
            //   }
            //   if (this.hourmaxCheck(shift).length > 0) {
            //     problem =
            //       problem +
            //       " " +
            //       this.hourmaxCheck(shift).length +
            //       " overtime options.";
            //   }
            //   this.problems.push(problem);
            // }
        }
    };
    ScheduleComponent.prototype.makeSchedule = function (fridayAMServers, fridayPMServers, saturdayAMServers, saturdayPMServers, sundayAMServers, sundayPMServers, mondayAMServers, mondayPMServers, tuesdayAMServers, tuesdayPMServers, wednesdayAMServers, wednesdayPMServers, thursdayAMServers, thursdayPMServers) {
        if (fridayAMServers === void 0) { fridayAMServers = this._route.snapshot.queryParams["fridayAMServers"]; }
        if (fridayPMServers === void 0) { fridayPMServers = this._route.snapshot.queryParams["fridayPMServers"]; }
        if (saturdayAMServers === void 0) { saturdayAMServers = this._route.snapshot.queryParams["saturdayAMServers"]; }
        if (saturdayPMServers === void 0) { saturdayPMServers = this._route.snapshot.queryParams["saturdayPMServers"]; }
        if (sundayAMServers === void 0) { sundayAMServers = this._route.snapshot.queryParams["sundayAMServers"]; }
        if (sundayPMServers === void 0) { sundayPMServers = this._route.snapshot.queryParams["sundayPMServers"]; }
        if (mondayAMServers === void 0) { mondayAMServers = this._route.snapshot.queryParams["mondayAMServers"]; }
        if (mondayPMServers === void 0) { mondayPMServers = this._route.snapshot.queryParams["mondayAMServers"]; }
        if (tuesdayAMServers === void 0) { tuesdayAMServers = this._route.snapshot.queryParams["tuesdayAMServers"]; }
        if (tuesdayPMServers === void 0) { tuesdayPMServers = this._route.snapshot.queryParams["tuesdayPMServers"]; }
        if (wednesdayAMServers === void 0) { wednesdayAMServers = this._route.snapshot.queryParams["wednesdayAMServers"]; }
        if (wednesdayPMServers === void 0) { wednesdayPMServers = this._route.snapshot.queryParams["wednesdayPMServers"]; }
        if (thursdayAMServers === void 0) { thursdayAMServers = this._route.snapshot.queryParams["thursdayAMServers"]; }
        if (thursdayPMServers === void 0) { thursdayPMServers = this._route.snapshot.queryParams["thursdayPMServers"]; }
        this.scheduleBartender("fridayAM");
        this.scheduleBartender("fridayPM");
        this.scheduleBartender("saturdayAM");
        this.scheduleBartender("saturdayPM");
        this.scheduleBartender("sundayAM");
        this.scheduleBartender("sundayPM");
        this.scheduleBartender("thursdayAM");
        this.scheduleBartender("thursdayPM");
        this.scheduleBartender("wednesdayAM");
        this.scheduleBartender("wednesdayPM");
        this.scheduleBartender("tuesdayAM");
        this.scheduleBartender("tuesdayPM");
        this.scheduleBartender("mondayAM");
        this.scheduleBartender("mondayPM");
        this.scheduleShiftLeader("fridayAM");
        this.scheduleShiftLeader("fridayPM");
        this.scheduleShiftLeader("saturdayAM");
        this.scheduleShiftLeader("saturdayPM");
        this.scheduleShiftLeader("sundayAM");
        this.scheduleShiftLeader("sundayPM");
        this.scheduleShiftLeader("thursdayAM");
        this.scheduleShiftLeader("thursdayPM");
        this.scheduleShiftLeader("wednesdayAM");
        this.scheduleShiftLeader("wednesdayPM");
        this.scheduleShiftLeader("tuesdayAM");
        this.scheduleShiftLeader("tuesdayPM");
        this.scheduleShiftLeader("mondayAM");
        this.scheduleShiftLeader("mondayPM");
        this.scheduleRemainder("fridayAM", fridayAMServers);
        this.scheduleRemainder("fridayPM", fridayPMServers);
        this.scheduleRemainder("saturdayAM", saturdayAMServers);
        this.scheduleRemainder("saturdayPM", saturdayPMServers);
        this.scheduleRemainder("sundayAM", sundayAMServers);
        this.scheduleRemainder("sundayPM", sundayPMServers);
        this.scheduleRemainder("thursdayAM", thursdayAMServers);
        this.scheduleRemainder("thursdayPM", thursdayPMServers);
        this.scheduleRemainder("wednesdayAM", wednesdayAMServers);
        this.scheduleRemainder("wednesdayPM", wednesdayPMServers);
        this.scheduleRemainder("tuesdayAM", tuesdayAMServers);
        this.scheduleRemainder("tuesdayPM", tuesdayPMServers);
        this.scheduleRemainder("mondayAM", mondayAMServers);
        this.scheduleRemainder("mondayPM", mondayPMServers);
        console.log(this.schedule);
        //console.log("Potential problems with this schedule:", this.problems);
        this.problemCheck();
        //console.log(this.employees[3]);
        //this.patch("Lord Nightstalker","saturdayPM", "section4");
        console.log("FORMER REQUEST LIST: ", this.formerRequestList);
        //this.remove("Manuel", "fridayAM", "section2");
        //console.log(this.employees[3]);
        return this.schedule;
    };
    ScheduleComponent.prototype.problemCheck = function () {
        this.newProblems = [];
        for (var q = 0; q < this.employees.length; q++) {
            if (this.employees[q].shiftsPerWeek > this.employees[q].shiftsScheduled &&
                this.employees[q].hiatus === false) {
                this.newProblems.push(this.employees[q].name +
                    " did not get the desired amount of shifts (" +
                    this.employees[q].shiftsPerWeek +
                    " expected, " +
                    this.employees[q].shiftsScheduled +
                    " received).");
            }
            if (this.employees[q].shiftsPerWeek < this.employees[q].shiftsScheduled &&
                this.employees[q].hiatus === false) {
                this.newProblems.push(this.employees[q].name +
                    " received more shifts than desired (" +
                    this.employees[q].shiftsPerWeek +
                    " expected, " +
                    this.employees[q].shiftsScheduled +
                    " received).");
            }
        }
        for (var shift in this.schedule) {
            if (!this.schedule[shift].bartender) {
                var problem = "Could not find eligible bartender on " + shift + ".";
                if (this.hourmaxCheck(shift).length > 0) {
                    problem =
                        problem +
                            " " +
                            this.hourmaxCheck(shift).length +
                            " overtime options.";
                }
                if (this.barmaxFilter(shift).length > 0) {
                    problem =
                        problem +
                            " " +
                            this.barmaxCheck(shift).length +
                            " bartender overschedule options.";
                }
                this.newProblems.push(problem);
            }
            if (!this.schedule[shift].section1) {
                var problem = "Could not find eligible shift leader on " + shift + ".";
                if (this.hourmaxCheck(shift).length > 0) {
                    problem =
                        problem +
                            " " +
                            this.hourmaxCheck(shift).length +
                            " overtime options.";
                }
                if (this.leadmaxFilter(shift).length > 0) {
                    problem =
                        problem +
                            " " +
                            this.leadmaxCheck(shift).length +
                            " leader overschedule options.";
                }
                this.newProblems.push(problem);
            }
            for (var i = 2; i < this._route.snapshot.queryParams[shift + "Servers"]; i++) {
                var section = "section" + i;
                if (!this.schedule[shift][section]) {
                    var problem = "Could not find employee to work " + section + " on " + shift + ".";
                    if (this.doublesCheck(shift).length > 0) {
                        problem =
                            problem +
                                " " +
                                this.doublesCheck(shift).length +
                                " potential doubles.";
                    }
                    if (this.requestCheck(shift).length > 0) {
                        problem =
                            problem + " " + this.requestCheck(shift).length + " requests.";
                    }
                    if (this.hourmaxCheck(shift).length > 0) {
                        problem =
                            problem +
                                " " +
                                this.hourmaxCheck(shift).length +
                                " overtime options.";
                    }
                    this.newProblems.push(problem);
                }
            }
        }
        console.log("NEWPROBLEMS: ", this.newProblems);
        this.problems = this.newProblems;
    };
    //The below method pulls the rest of the data for an employee when only the name is available.
    ScheduleComponent.prototype.findEmployeeByName = function (name) {
        console.log("SEARCHING FOR " + name + "...");
        for (var x in this.employees) {
            console.log(this.employees[x].name);
            if (this.employees[x].name === name) {
                console.log("FOUND " + name);
                return this.employees[x];
            }
        }
    };
    //The below function executes when a server is manually scheduled after the automatic schedule creation.
    ScheduleComponent.prototype.patch = function (employee, shift, section) {
        //console.log("EMPLOYEE: ", employee);
        console.log("Patching " + employee + " as " + section + " on " + shift);
        var server = this.findEmployeeByName(employee);
        //console.log("SERVER: " +server);
        //console.log("PATCHING WITH SERVER.NAME:", server.name);
        // for(var x in this.employees){
        //   if(this.employees[x].name===employee){
        //     var server = this.employees[x];
        //     break;
        //   }
        // }
        this.schedule[shift][section] = server.name;
        server.shiftsScheduled++;
        if (shift === "bartender") {
            server.bartenderScheduled++;
        }
        if (shift === "section1") {
            server.shiftLeaderScheduled++;
        }
        server.alreadyScheduled[shift] === true;
        if (this.isMorning(shift) != "false") {
            if (server.shifts[this.isMorning(shift)] === true) {
                server.alreadyScheduled[this.isMorning(shift)] = false;
            }
        }
        for (var i = 0; i < this.doubles.length; i++) {
            if (this.doubles[i].indexOf(server.name) > -1 &&
                this.doubles[i].indexOf(shift) > -1) {
                this.formerDoubles.push(this.doubles[i]);
                this.doubles[i] = this.doubles[this.doubles.length - 1];
                this.doubles.pop();
                break;
            }
        }
        for (var i = 0; i < this.requestList.length; i++) {
            if (this.requestList[i].indexOf(server.name) > -1 &&
                this.requestList[i].indexOf(shift) > -1) {
                this.formerRequestList.push(this.requestList[i]);
                this.requestList[i] = this.requestList[this.requestList.length - 1];
                this.requestList.pop();
                break;
            }
        }
        for (var i = 0; i < this.hourmax.length; i++) {
            if (this.hourmax[i].indexOf(server.name) > -1 &&
                this.hourmax[i].indexOf(shift) > -1) {
                this.formerHourmax.push(this.hourmax[i]);
                this.hourmax[i] = this.hourmax[this.hourmax.length - 1];
                this.hourmax.pop();
                break;
            }
        }
        for (var i = 0; i < this.leadmax.length; i++) {
            if (this.leadmax[i].indexOf(server.name) > -1 &&
                this.leadmax[i].indexOf(shift) > -1) {
                this.formerLeadmax.push(this.leadmax[i]);
                this.leadmax[i] = this.leadmax[this.leadmax.length - 1];
                this.leadmax.pop();
                break;
            }
        }
        for (var i = 0; i < this.barmax.length; i++) {
            if (this.barmax[i].indexOf(server.name) > -1 &&
                this.barmax[i].indexOf(shift) > -1) {
                this.formerBarmax.push(this.barmax[i]);
                this.barmax[i] = this.barmax[this.barmax.length - 1];
                this.barmax.pop();
                break;
            }
        }
        console.log("THIS.SCRUTINIZED.ELIGIBLE: ", this.scrutinized.eligible);
        console.log("SERVER.NAME: ", server.name);
        for (var i = 0; i < this.scrutinized.eligible.length; i++) {
            if (this.scrutinized.eligible[i] === server.name) {
                this.scrutinized.eligible[i] = this.scrutinized.eligible[this.scrutinized.eligible.length - 1];
                this.scrutinized.eligible.pop();
                break;
            }
        }
        for (var i = 0; i < this.schedule[shift].length; i++) {
        }
        console.log("PATCHED SHIFT: ", this.schedule[shift]);
        this.problemCheck();
        this.moreInfo(shift);
    };
    ScheduleComponent.prototype.remove = function (employee, shift, section) {
        //console.log("EMPLOYEE: ", employee);
        console.log("Removing " + employee + " from " + section + " on " + shift);
        var server = this.findEmployeeByName(employee);
        delete this.schedule[shift][section];
        server.shiftsScheduled--;
        if (section === "bartender") {
            server.bartenderScheduled--;
        }
        if (section === "section1") {
            server.shiftLeaderScheduled--;
        }
        server.alreadyScheduled[shift] = false;
        console.log("SERVER ALREADY: ", server.alreadyScheduled[shift]);
        if (this.isMorning(shift) != "false") {
            if (server.shifts[this.isMorning(shift)] === true) {
                server.alreadyScheduled[this.isMorning(shift)] = false;
                //this.doubles.push(this.isMorning(shift) + " " + server.name);
            }
        }
        for (var i = 0; i < this.formerDoubles.length; i++) {
            if (this.formerDoubles[i].indexOf(server.name) > -1 &&
                this.formerDoubles[i].indexOf(shift) > -1) {
                this.doubles.push(this.formerDoubles[i]);
                this.formerDoubles[i] = this.formerDoubles[this.formerDoubles.length - 1];
                this.formerDoubles.pop();
                break;
            }
        }
        for (var i = 0; i < this.formerRequestList.length; i++) {
            if (this.formerRequestList[i].indexOf(server.name) > -1 &&
                this.formerRequestList[i].indexOf(shift) > -1) {
                this.requestList.push(this.formerRequestList[i]);
                this.formerRequestList[i] = this.formerRequestList[this.formerRequestList.length - 1];
                this.formerRequestList.pop();
                break;
            }
        }
        for (var i = 0; i < this.formerHourmax.length; i++) {
            if (this.formerHourmax[i].indexOf(server.name) > -1 &&
                this.formerHourmax[i].indexOf(shift) > -1) {
                this.hourmax.push(this.formerHourmax[i]);
                this.formerHourmax[i] = this.formerHourmax[this.formerHourmax.length - 1];
                this.formerHourmax.pop();
                break;
            }
        }
        for (var i = 0; i < this.formerLeadmax.length; i++) {
            if (this.formerLeadmax[i].indexOf(server.name) > -1 &&
                this.formerLeadmax[i].indexOf(shift) > -1) {
                this.leadmax.push(this.leadmax[i]);
                this.formerLeadmax[i] = this.formerLeadmax[this.formerLeadmax.length - 1];
                this.formerLeadmax.pop();
                break;
            }
        }
        for (var i = 0; i < this.formerBarmax.length; i++) {
            if (this.formerBarmax[i].indexOf(server.name) > -1 &&
                this.formerBarmax[i].indexOf(shift) > -1) {
                this.barmax.push(this.formerBarmax[i]);
                this.formerBarmax[i] = this.formerBarmax[this.formerBarmax.length - 1];
                this.formerBarmax.pop();
                break;
            }
        }
        // for (let i = 0; i < this.schedule[shift].length; i++) {
        // }
        console.log("TRIMMED SHIFT: ", this.schedule[shift]);
        this.problemCheck();
        this.moreInfo(shift);
    };
    ScheduleComponent.prototype.getEmployees = function () {
        var _this = this;
        var observable = this._dataService.getEmployees();
        observable.subscribe(function (data) {
            console.log("HERE IS THE OBSERVABLE", data);
            _this.employees = data["employees"];
            console.log("HERE ARE THE EMPLOYEES: ", _this.employees);
            //The below code automatically assigns extra properties to each employee to help the algorithm make decisions
            for (var i = 0; i < _this.employees.length; i++) {
                var server = _this.employees[i];
                //We keep track of the number of shifts that have been scheduled this week so that the limits will not be exceeded.
                server.shiftsScheduled = 0;
                server.bartenderScheduled = 0;
                server.shiftLeaderScheduled = 0;
                server.availability = 0;
                //The below code checks whether the employee has requested the entire week off, in order to keep someone who is on hiatus from being recommended for shifts.
                server.hiatus = true;
                for (var key_1 in server.requests) {
                    if (server.requests[key_1] === false) {
                        server.hiatus = false;
                    }
                }
                //We keep track of whether an employee has already been scheduled to a particular shift so that they will not work two sections on the same shift.
                server.alreadyScheduled = {
                    mondayAM: false,
                    mondayPM: false,
                    tuesdayAM: false,
                    tuesdayPM: false,
                    wednesdayAM: false,
                    wednesdayPM: false,
                    thursdayAM: false,
                    fridayAM: false,
                    fridayPM: false,
                    saturdayAM: false,
                    saturdayPM: false,
                    sundayAM: false,
                    sundayPM: false
                };
                for (var key in server.shifts) {
                    var requestSearch = key.toString() + "Request";
                    //console.log(requestSearch);
                    //console.log(server.name, server.requests, server.requests.tuesdayPMRequest);
                    if (server.requests[requestSearch] === true) {
                        // console.log(
                        //   "REQUEST FOUND FOR " + server.name + " ON " + key.toString()
                        // );
                        server.shifts[key] = false;
                        if (server.hiatus === false) {
                            _this.requestList.push(key + server.name);
                        }
                    }
                    if (server.shifts[key] === true) {
                        server.availability++;
                    }
                }
                server.priority = server.shiftsPerWeek + 14 - server.availability;
                if (server.alsoServer === false) {
                    server.priority += 7;
                }
                //Priority decides who is scheduled when multiple employees can work the same shift. An employee will receive higher priority if there are less other shifts available for them, to guarantee that someone who can only work one particular shift will always get it. An employee who can work more shifts per week will receive higher priority; their priority will be higher than that of an employee with open availability who can only work once a week, but lower than that of a server who can only work one specific shift.  Also, an employee who only bartends and never serves will receive a sizable bump in priority for bartending shifts.
            }
            _this.schedule = _this.makeSchedule();
            console.log("HERE IS SCHEDULE: ", _this.schedule);
            _this.shifts = Object.entries(_this.schedule);
            _this.newShifts = [];
            for (var i_1 = 0; i_1 < _this.shifts.length; i_1++) {
                var temp = [];
                var parts = Object.entries(_this.shifts[i_1][1]);
                for (var partNum = 0; partNum < parts.length; partNum++) {
                    temp.push({
                        section: parts[partNum][0],
                        employee: parts[partNum][1]
                    });
                }
                _this.newShifts.push(temp);
            }
        });
    };
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-list",
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/schedule/schedule.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/employees/new']\">Add new employees</a> | <a [routerLink]=\"['/employees/']\">Back to employee directory</a> | <a [routerLink]=\"['/']\">Make Schedule</a>\n<h1 *ngIf= \"!employee\"> Employee not found.  If this employee has been recently edited, refresh the page.</h1>\n<span *ngIf= \"employee\">\n<h3>{{employee.name}}</h3>\n<p>Desired shifts per week: {{employee.shiftsPerWeek}}</p><br>\n<p>Maximum bartender shifts allowed per week: {{employee.bartenderPerWeek}}</p><br>\n<p *ngIf=\"employee.bartenderPerWeek>0\">Is this employee also a server: {{employee.alsoServer}}</p>\n<p>Maximum shift leader allowed per week: {{employee.shiftLeaderPerWeek}}</p><br>\n<h3>Shifts requested off</h3>\n<p *ngIf= \"employee.requests.mondayAMRequest\"> Monday AM</p>\n<p *ngIf= \"employee.requests.mondayPMRequest\"> Monday PM</p>\n<p *ngIf= \"employee.requests.tuesdayAMRequest\"> Tuesday AM</p>\n<p *ngIf= \"employee.requests.tuesdayAMRequest\"> Tuesday PM</p>\n<p *ngIf= \"employee.requests.wednesdayAMRequest\"> Wednesday AM</p>\n<p *ngIf= \"employee.requests.wednesdayPMRequest\"> Wednesday PM</p>\n<p *ngIf= \"employee.requests.thursdayAMRequest\"> Thuraday AM</p>\n<p *ngIf= \"employee.requests.thursdayPMRequest\"> Thursday PM</p>\n<p *ngIf= \"employee.requests.fridayAMRequest\"> Friday AM</p>\n<p *ngIf= \"employee.requests.fridayPMRequest\"> Friday PM</p>\n<p *ngIf= \"employee.requests.saturdayAMRequest\"> Saturday AM</p>\n<p *ngIf= \"employee.requests.saturdayAMRequest\"> Saturday PM</p>\n<p *ngIf= \"employee.requests.sundayAMRequest\"> Sunday AM</p>\n<p *ngIf= \"employee.requests.sundayAMRequest\"> Sunday PM</p>\n<!-- ADD LOOP THROUGH REQUESTS HERE -->\n<h3>Availability</h3>\n<table>\n  <th>Day</th>\n  <th>Morning</th>\n  <th>Evening</th>\n  <tr>\n    <td>Monday</td>\n    <td>{{employee.shifts.mondayAM}}</td>\n    <td>{{employee.shifts.mondayPM}}</td>\n  </tr>\n  <tr>\n    <td>Tuesday</td>\n    <td>{{employee.shifts.tuesdayAM}}</td>\n    <td>{{employee.shifts.tuesdayPM}}</td>\n  </tr>\n  <tr>\n    <td>Wednesday</td>\n    <td>{{employee.shifts.wednesdayAM}}</td>\n    <td>{{employee.shifts.wednesdayPM}}</td>\n  </tr>\n  <tr>\n    <td>Thursday</td>\n    <td>{{employee.shifts.thursdayAM}}</td>\n    <td>{{employee.shifts.thursdayPM}}</td>\n  </tr>\n  <tr>\n   <td>Friday</td>\n   <td>{{employee.shifts.fridayAM}}</td>\n   <td>{{employee.shifts.fridayPM}}</td>\n  </tr>\n  <tr>\n    <td>Saturday</td>\n    <td>{{employee.shifts.saturdayAM}}</td>\n    <td>{{employee.shifts.saturdayPM}}</td>\n  </tr>\n  <tr>\n    <td>Sunday</td>\n    <td>{{employee.shifts.sundayAM}}</td>\n    <td>{{employee.shifts.sundayPM}}</td>\n  </tr>\n</table>\n</span>\n<a [routerLink]=\"['/employees']\">Back</a> <a [routerLink]=\"['/edit', employee['_id']]\">Edit</a>"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewComponent = /** @class */ (function () {
    function ViewComponent(_dataService, _route, router) {
        this._dataService = _dataService;
        this._route = _route;
        this.router = router;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log("ID: ", _this.id);
        });
        console.log("WILL WE RUN GETONEEMPLOYEE?");
        this.getOneEmployee(this.id);
    };
    ViewComponent.prototype.getOneEmployee = function (id) {
        var _this = this;
        console.log("YES WE WILL! AND THE ID IS ", id);
        var observable = this._dataService.getOneEmployee(id);
        observable.subscribe(function (data) {
            console.log("HERE IS THE OBSERVABLE", data);
            _this.employee = data['employee'];
            console.log(_this.employee);
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewComponent);
    return ViewComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ActionJack/Desktop/Scheduling/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map