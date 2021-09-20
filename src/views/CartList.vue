<template>
  <div class="Cartlist about mt-n5">
    <div class="container my-5" >
      <div class="row">
      <ul class="list-group col-xs-6 col-sm-12
       col-md-12 col-lg-12"  v-for="(item, index) in  mycartproductlist" v-bind:key="index">
        
        <li class="list-group-item d-flex justify-content-between align-items-center mr-0 pr-4
        ">
           <img class="card-img" v-bind:src="item.imgURL" alt="">
          {{item.nombre}}  
          <button
            class="btnadd btn btn-sm btn-xs m-1 p-1 bg-danger"
            @click="cantidad=>item.cantidad--"  :disabled="item.cantidad === 1">-</button>{{item.cantidad}} 
          <button class="btnadd btn btn-sm bg-danger m-1 p-1"  @click="cantidad=>item.cantidad++">+</button>
        
        
        <h5 class="list-group-item m-1 p-1">{{item.cantidad * item.precio | currency}}</h5>
        <button class="btn btn-warning btn-md btn-lg btn-sm btn-xs" @click="deletefromcart(item.index)">Del</button>
        
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  
  name: 'Cartlist',
  computed: {
    ...mapGetters(["mycartproductlist", "cartTotal"]),
     ...mapActions(["AddCheckout"]),
  },
  methods: {
    ...mapMutations(["DELETE_FROM_CART"]),
    deletefromcart(item) {
      this.DELETE_FROM_CART(item);
    },
    
    addtocheck(item) {
      this.AddCheckout(item);
    },
  },
};
</script>
<style>
.Cartlist {
  overflow-y: auto;
  
}

.btnadd{
  border: 4px solid white !important;
}
</style>