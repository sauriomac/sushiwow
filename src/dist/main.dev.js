"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _currency = require("./currency.js");

var _bootstrapVue = require("bootstrap-vue");

var _vue2SmoothScroll = _interopRequireDefault(require("vue2-smooth-scroll"));

var _vueSimpleAlert = _interopRequireDefault(require("vue-simple-alert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueSimpleAlert["default"]);

_vue["default"].use(_vue2SmoothScroll["default"]);

_vue["default"].component('b-sidebar', _bootstrapVue.BSidebar);

_vue["default"].config.productionTip = false;

_vue["default"].filter('currency', _currency.currency);

_vue["default"].use(_bootstrapVue.ModalPlugin);

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');