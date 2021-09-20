<template>
<transition 
  name="fade" 
>
    <div class="modal2" v-show="showModal">
      <div class="contenido"><Cartlist />
        <div v-if="cartTotal > 0">
              <button class="btn-lg btn-block btn-dark text-white block px-5 text-center" @click="()=>{
                  const fun = goToDetails;
                  const fon = openModal;
                    fun();
                    fon();}">
                оформити на 
                <b class="cart-total">{{ cartTotal | currency }}</b>
              </button>
          </div>
          <div v-else>
              <div class="text-center">
                <h4 class="bg-dark text-white text-center">
                  carro compras esta vacio
                </h4>
              </div>
          </div>
      
      
      </div>
        
        
        <button class="buttonClose btn btn-danger rounded-circle" @click="openModal" >
          X
        </button>
    </div>
    </transition>
</template>

<script>
import {mapMutations,mapState, mapGetters } from 'vuex';
import Cartlist from "../views/CartList.vue";
    export default {
        name: "Modal2",
        components: {
      Cartlist
      },

       
    computed:{
        ...mapState(["showModal"]),
        ...mapGetters([ "cartTotal"]),
    },
        
  methods: {
    ...mapMutations({openModal:'ToggleModal'}),

    goToDetails(){
        this.$router.push('/Checkout');
        
    }
   
  },
        
    }
</script>

<style scoped>
 .modal2 {
    /* width: 100%; */
    width: 70%;
    height: 650;
    box-sizing: border-box;
    padding: 1em;
    position: fixed;
    top: 59%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0 0 30px rgba(34, 33, 33, 0.2);
    border: 0;
    border-radius: 26px;
    line-height: 1.5em;
    opacity: 1;
    transition: all 0.2s;
    z-index: 99999;
    
    
  }
  .buttonClose {
    position: absolute;
    top:-10px;
    right:-20px;
    background-color: white;
    
  }
  .contenido {
    overflow-y: auto;
    max-height: 500px;
    margin-top: 20px;
  }

</style>