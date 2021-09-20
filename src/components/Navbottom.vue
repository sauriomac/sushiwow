<template>
<div>
    <nav class="navbarfooter bg-transparent navbar pt-3 pb-0 px-auto navbar-expand-lg fixed-bottom">
        <div>
            <ul class="menu-principal navbar-nav">
                 <li class="check nav-item mt-n4" >
                    <div class="carrito ml-auto nav-link bg-red">
                        <h5 class="p-3 badge text-white text-uppercase">
                            <div class="carro">
                                <span class="span1 badge badge-light">
                                    <span class="
                        badge badge-danger
                        text-white text-uppercase
                        font-weight-bold
                        ">{{ countfcartproduct }}</span>
                                </span>
                                                               <span class="pointer p-3 m-5-auto bg-warning" @click="openModal">
                                    {{ cartTotal | currency }}
                                </span>
                            </div>
                        </h5>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
import {mapMutations,mapState, mapGetters } from 'vuex'

export default {
name:
      "Navm"  
    ,

computed: {
        ...mapGetters(["countfcartproduct", "cartTotal"]),
        ...mapState(["showModal"]),
    },
methods: {

        ...mapMutations({openModal:'ToggleModal'})
    }
    
    }
</script>
<style scoped>
.navbarfooter{
    background:transparent !important;
}
</style>