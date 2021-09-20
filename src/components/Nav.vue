<template>
<div>
    <nav class="navbar pt-4 pb-0 px- navbar-expand-lg sticky-top">
        <a class="navbar-brand" href="#">
            <router-link class="nav-link" to="/"><img id="logo" class="logo" alt="Vue logo" src="../assets/logo.png" />
            </router-link>
        </a>
        <button class="navbar-toggler ml-5" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="menu-principal navbar-nav mr-auto mt-5">
                <li class="nav-item active mt-n2  " data-toggle="collapse" data-target=".navbar-collapse.show">
                    <router-link  class="nav-link menu " to="/Philadelphia">Філадельфія</router-link>
                </li>
                <li class="nav-item mt-n2"  data-toggle="collapse" data-target=".navbar-collapse.show" >
                    <router-link  class="nav-link menu" to="/Kaliforniya">Каліфорнія</router-link>
                </li>
                <li class="nav-item mt-n2" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <router-link  class="nav-link menu" to="/sushi3">Макі</router-link>
                </li>
                <li class="nav-item mt-n2" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <router-link  class="nav-link menu" to="/sushi4">Спайсі роли</router-link>
                </li>
                <li class="nav-item mt-n2" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <router-link  class="nav-link menu" to="/sushi5">нігірі</router-link>
                </li>
                <li class="nav-item mt-n2" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <router-link  class="nav-link menu" to="/sushi6">Дракони</router-link>
                </li>

                <li class="nav-item mt-n2" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <router-link  class="nav-link menu" to="/sushi7">Спайсі гункан</router-link>
                </li>

                <li class="nav-item mt-n2" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <router-link  class="nav-link menu" to="/sushi8">Інші роли</router-link>
                </li>
                <li class="nav-item mt-n2" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <router-link class="nav-link menu" to="/sushi9">Сети</router-link>
                </li>
                <li class="nav-item mt-n2" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <router-link class="nav-link menu" to="/">всі</router-link>
                </li>
                <li class="check2 nav-item mt-n4" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <div class="carrito pr-0 nav-link bg-red">
                        <div class=" badge text-white text-uppercase">
                            <div class="carro">
                                <div class="palos">
                                <img id="logo" class="palillos" alt="Vue logo" src="../assets/chopsticks.svg" />
                                <span class="span1 badge badge-light">
                                    
                                    <span class="
                        badge badge-danger
                        text-white text-uppercase
                        font-weight-bold
                        ">
                        {{ countfcartproduct }}</span>
                                </span>
                                </div>
<span class="pointer p-3 m-5-auto bg-warning" @click="openModal">
                                    {{ cartTotal | currency }}
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>

<script>
import {mapMutations,mapState, mapGetters } from 'vuex';
export default {
name:
      "Nav"  
    ,

computed: {
        ...mapGetters(["countfcartproduct", "cartTotal"]),
        ...mapState(["showModal"]),
    },
methods: {

        ...mapMutations({openModal:'ToggleModal'})
    },
    
    }
</script>

<style  scoped>
.palillos {
    height: 78px !important;
    width: 80px ! important;
    position:absolute;
    display:block;
    top:-60px;
    right:-50px


}
.carro {
    
    display: flex
}
.palos {
    position: relative !important;
}

.navbar {
    background: red !important;
  }

</style>
