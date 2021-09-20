import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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


    getSushi1: state => state.productos.sushi1,
    getSushi2: state => state.productos.sushi2,
    getSushi3: state => state.productos.sushi3,
    getSushi4: state => state.productos.sushi4,
    getSushi5: state => state.productos.sushi5,
    getSushi6: state => state.productos.sushi6,
    getSushi7: state => state.productos.sushi7,
    getSushi8: state => state.productos.sushi8,
    getSushi9: state => state.productos.sushi9,
    getSushiAll: state => state.AllProductos,
    getAddProduct: state => state.ProductDetails,
    getproductosCheckout: state => state.productosCheckout,
    getShowModal: state => state.showModal,


    // countfcartproducts: state => state.mycartproductlist.length,
    mycartproductlist: state => state.mycartproductlist,
    cartTotal: state => {
      let total = 0
      state.mycartproductlist.forEach(item => {
        total += item.cantidad * item.precio
      })
      return state.mycartproductlist.reduce((total, item) => total + item.cantidad * item.precio, 0)
      return total
    },
    countfcartproduct: state => {
      let totalcantidad = 0
      state.mycartproductlist.forEach(item => {
        totalcantidad += item.cantidad
      })
      return state.mycartproductlist.reduce((totalcantidad, item) => totalcantidad + item.cantidad, 0)
      return totalcantidad
    },

  },
  mutations: {

    setProductos(state, payload) {
      state.productos = payload
    },
    setAllProductos(state, payload) {
      state.AllProductos = payload
    },
    SetCheckout(state) {
      state.mycartproductlist = []
      console.log(state.mycartproductlist)
    },
    SetAddProduct(state, payload) {
      state.ProductDetails = payload
    },

    ADD_TO_CART: (state, product) => {
      let found = state.mycartproductlist.find(productList => productList.id == product.id)

      if (found) {
        found.cantidad++;
      }
      else {
        state.mycartproductlist.push(product)
      }
    },
    DELETE_FROM_CART: (state, product) => {
      state.mycartproductlist.splice(product, 1)
    },
    ToggleModal: (state) => {
      state.showModal = !state.showModal;
    }



  },
  actions: {

    AddProduct: ({ commit }, payload) => {
      commit('SetAddProduct', payload);
    },
    async fetchData({ commit, state }) {
      try {
        state.cargando = true;
        const res = await fetch(`https://robust-charge-142003.firebaseio.com/.json`)
        const productos = await res.json()
        commit('setProductos', productos)
      } catch (error) {
        console.log(error)
      }
      finally {
        state.cargando = false;
      }
    },

    async fetchData2({ commit, state }) {
      try {
        state.cargando = true;
        const res = await fetch('https://fire-5f9d8-default-rtdb.europe-west1.firebasedatabase.app/.json')
        const AllProductos = await res.json()

        commit('setAllProductos', AllProductos)
      } catch (error) {
        console.log(error)
      }
      finally {
        state.cargando = false;
      }
    },

    removeItemFromCart({ commit, state }, id) {
      const product = state.item.findIndex(x => x.id === id);
      commit("DELETE_FROM_CART", product);
    },
 
    Checkout: (commit) => {
      commit('SetCheckout');
    },
  },
  modules: {

  }
})
