"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"],
  meta: {
    title: 'sushiwow'
  }
}, {
  path: '/cartList',
  name: 'CartList',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/CartList.vue'));
    });
  }
}, {
  path: '/Philadelphia',
  name: 'sushi1',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/Sushi1.vue'));
    });
  },
  meta: {
    title: 'Philadelphia'
  }
}, {
  path: '/Kaliforniya',
  name: 'sushi2',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/Sushi2.vue'));
    });
  }
}, {
  path: '/Sushi3',
  name: 'sushi3',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/Sushi3.vue'));
    });
  }
}, {
  path: '/Sushi4',
  name: 'sushi4',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/Sushi4.vue'));
    });
  }
}, {
  path: '/Sushi5',
  name: 'sushi5',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/Sushi5.vue'));
    });
  }
}, {
  path: '/Sushi6',
  name: 'Sushi6',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/Sushi6.vue'));
    });
  }
}, {
  path: '/Sushi7',
  name: 'Sushi7',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/Sushi7.vue'));
    });
  }
}, {
  path: '/Sushi8',
  name: 'Sushi8',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/Sushi8.vue'));
    });
  }
}, {
  path: '/Sushi9',
  name: 'Sushi9',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/Sushi9.vue'));
    });
  }
}, {
  path: '/ProductDetail',
  name: 'ProductDetail',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/ProductDetail.vue'));
    });
  }
}, {
  path: '/Checkout',
  name: '/Checkout',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../components/Checkout.vue'));
    });
  }
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;