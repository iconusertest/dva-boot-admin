(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{2174:function(e,a,t){"use strict";t.r(a);var r=t(321);a.default=Object(r.a)({namespace:"transferTree",state:{dataSource:[],asyncDataSource:[]},subscriptions:{setup:function(e){var a=e.dispatch;e.history.listen(function(e){"/transferTree"===e.pathname&&a({type:"@request",afterResponse:function(e){return e.data},payload:[{valueField:"dataSource",url:"/tree/getData"},{valueField:"asyncDataSource",url:"/tree/getAsyncData"}]})})}}})}}]);