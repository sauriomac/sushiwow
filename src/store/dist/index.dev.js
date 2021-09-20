"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    cargando: false,
    mycartproductlist: [],
    productos: [],
    ProductDetails: {},
    AllProductos: [],
    showModal: false,
    showmodalalert: false
  },
  getters: {
    getSushi1: function getSushi1(state) {
      return state.productos.sushi1;
    },
    getSushi2: function getSushi2(state) {
      return state.productos.sushi2;
    },
    getSushi3: function getSushi3(state) {
      return state.productos.sushi3;
    },
    getSushi4: function getSushi4(state) {
      return state.productos.sushi4;
    },
    getSushi5: function getSushi5(state) {
      return state.productos.sushi5;
    },
    getSushi6: function getSushi6(state) {
      return state.productos.sushi6;
    },
    getSushi7: function getSushi7(state) {
      return state.productos.sushi7;
    },
    getSushi8: function getSushi8(state) {
      return state.productos.sushi8;
    },
    getSushi9: function getSushi9(state) {
      return state.productos.sushi9;
    },
    getSushiAll: function getSushiAll(state) {
      return state.AllProductos;
    },
    getAddProduct: function getAddProduct(state) {
      return state.ProductDetails;
    },
    getproductosCheckout: function getproductosCheckout(state) {
      return state.productosCheckout;
    },
    getShowModal: function getShowModal(state) {
      return state.showModal;
    },
    // countfcartproducts: state => state.mycartproductlist.length,
    mycartproductlist: function mycartproductlist(state) {
      return state.mycartproductlist;
    },
    cartTotal: function cartTotal(state) {
      var total = 0;
      state.mycartproductlist.forEach(function (item) {
        total += item.cantidad * item.precio;
      });
      return state.mycartproductlist.reduce(function (total, item) {
        return total + item.cantidad * item.precio;
      }, 0);
      return total;
    },
    countfcartproduct: function countfcartproduct(state) {
      var totalcantidad = 0;
      state.mycartproductlist.forEach(function (item) {
        totalcantidad += item.cantidad;
      });
      return state.mycartproductlist.reduce(function (totalcantidad, item) {
        return totalcantidad + item.cantidad;
      }, 0);
      return totalcantidad;
    }
  },
  mutations: {
    setProductos: function setProductos(state, payload) {
      state.productos = payload;
    },
    setAllProductos: function setAllProductos(state, payload) {
      state.AllProductos = payload;
    },
    SetCheckout: function SetCheckout(state) {
      state.mycartproductlist = [];
      console.log(state.mycartproductlist);
    },
    SetAddProduct: function SetAddProduct(state, payload) {
      state.ProductDetails = payload;
    },
    ADD_TO_CART: function ADD_TO_CART(state, product) {
      var found = state.mycartproductlist.find(function (productList) {
        return productList.id == product.id;
      });

      if (found) {
        found.cantidad++;
      } else {
        state.mycartproductlist.push(product);
      }
    },
    DELETE_FROM_CART: function DELETE_FROM_CART(state, product) {
      state.mycartproductlist.splice(product, 1);
    },
    ToggleModal: function ToggleModal(state) {
      state.showModal = !state.showModal;
    }
  },
  actions: {
    AddProduct: function AddProduct(_ref, payload) {
      var commit = _ref.commit;
      commit('SetAddProduct', payload);
    },
    fetchData: function fetchData(_ref2) {
      var commit, state, res, productos;
      return regeneratorRuntime.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref2.commit, state = _ref2.state;
              _context.prev = 1;
              state.cargando = true;
              _context.next = 5;
              return regeneratorRuntime.awrap(fetch("https://robust-charge-142003.firebaseio.com/.json"));

            case 5:
              res = _context.sent;
              _context.next = 8;
              return regeneratorRuntime.awrap(res.json());

            case 8:
              productos = _context.sent;
              commit('setProductos', productos);
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 15:
              _context.prev = 15;
              state.cargando = false;
              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 12, 15, 18]]);
    },
    fetchData2: function fetchData2(_ref3) {
      var commit, state, res, AllProductos;
      return regeneratorRuntime.async(function fetchData2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref3.commit, state = _ref3.state;
              _context2.prev = 1;
              state.cargando = true;
              _context2.next = 5;
              return regeneratorRuntime.awrap(fetch('https://fire-5f9d8-default-rtdb.europe-west1.firebasedatabase.app/.json'));

            case 5:
              res = _context2.sent;
              _context2.next = 8;
              return regeneratorRuntime.awrap(res.json());

            case 8:
              AllProductos = _context2.sent;
              commit('setAllProductos', AllProductos);
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 15:
              _context2.prev = 15;
              state.cargando = false;
              return _context2.finish(15);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 12, 15, 18]]);
    },
    removeItemFromCart: function removeItemFromCart(_ref4, id) {
      var commit = _ref4.commit,
          state = _ref4.state;
      var product = state.item.findIndex(function (x) {
        return x.id === id;
      });
      commit("DELETE_FROM_CART", product);
    },
    Checkout: function Checkout(commit) {
      commit('SetCheckout');
    }
  },
  modules: {}
});

exports["default"] = _default;