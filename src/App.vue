<template>
  <div class="app" id="app">
    <NavInfo/>
    <Nav class="sticky-top mt-0  "/>
    <router-view />
    <Footer />
     <Navm class="navm" />
    <Modal2 />
  </div>
</template>
<script>
  import { mapGetters, mapState, mapMutations } from "vuex"
  import Modal2 from "./components/Modal2.vue"
  import Footer from "@/components/Footer.vue"
  import Nav from "@/components/Nav.vue"
  import NavInfo from "@/components/NavInfo.vue"
  import  Navm  from "@/components/Navbottom.vue"

  export default {
    data() {
      return {
        hover: false,
      };
    },
     mounted() {
    this.$store.dispatch("fetchData2");
  },
      computed: {
        ...mapGetters(["countfcartproduct", "cartTotal"]),
        ...mapState(["showModal"]),
    },
      methods: {

        ...mapMutations({openModal:'ToggleModal'})
    },
    components: {
      Footer,
      Modal2,
      Nav,
      NavInfo,
       Navm,
    },
  };
</script>

<style>
  * {
    list-style: none;
    text-decoration: none !important;
  }
.swal2-confirm {
  background-color:#ffc107!important;
}
@media screen and (max-width: 1300px) {
    #mn_menu {
      display: none;
    }

    
}

  @media (max-width: 577px)
{

 
.col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
    

}

.footer{
  background: red !important;
  margin-top: 0px;
  border-radius: 9px 9px 0px 0px;
}
.list-group-item  .card-img{
  display:none;
}
.modal2 {
   
    width: 89% !important;
}

.navbar-toggler {

  margin-left: 260px !important;
  margin-top: -92px;
}


.navbar-brand .logo{
  margin-top: -29px !important;
}
/* .check{
  display:flex;
} */
.banner {
  
    height: 200px !important;
    background-size: cover !important;
    
  }

  .banner img{
    display: none;
  }
.menu-principal{
  margin-top: -80px;
}

.cajaa{
  background: #e7fafd;
}

#navbar-toggle:checked + label .nav-menu {
  display: block;
}
.card-img{
      height: 50px !important;
    width: 75px !important;
    border-radius: 10px;
}

.modal2 {
   
    width: 89%;}

}

.mobil{
  height: 200px;
}

@media screen and (max-width:892px )
{

.check2{
  display:none;
}
}

@media screen and (min-width: 959px)
{
.navm{
   display: none;
 }

}
@media screen and (min-width: 959px)
{
.navbarfooter{
   display: none;
 }


}
@media screen and (min-width: 577px)
{


.modal2 {
   
    width: 89%;}


}
.redes{
  height: 30px;
  color: #ffc107;
  transition: all 0.5s ease-in-out;
}

.redes:hover{
    transform: scale(1.8);
  
}
  .icono {
    color: #ffc107;
  }

  .phone {
    font-weight: 800 !important;
    color: #fff;
    font-size: 18px;
    margin-right: 5px;
    line-height: 1;
    width: 100%;
  }

  .envio {
    font-weight: 800;
    color: #ffc107;
    font-size: 17px;
    margin-right: 16px;
    line-height: 1;
    width: 100%;
  }

  .dropdown-menu {
    background: red;
    border: transparent;
    margin-top: -41px;
    margin-left: 2px;
  }

  .dropdown-item {
    font-weight: 800 !important;
    font-size: 20px;
  }

  .dropdown-item:hover {
    background: red;
    color: rgb(255, 193, 7);
  }

  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='-10 0 50 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(255, 193, 7)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    border: 5px solid #343a40;
    border-radius: 0.5rem;
  }

  .navbar-toggler:active {
    border-radius: none;
  }

  .carro span {
    font-size: 21px;
    border-radius: 29px;
    border: 4px solid #2c3e50;
    
  }

  .pointer {
    cursor: pointer;
    
  }

  .material-icons {
    color: #ffc107;
    margin-top: 3px;
  }

  .card-img {
    height: 100px;
    width: 150px;
    border-radius: 10px;
  }

  /* .cart{
   position: fixed;
   top:20px;
   right: -20px;
   z-index:auto;
 } */
  .banner {
    padding-top: 200px;
    width: 100%;
    height: 700px;
    background: url("./assets/banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  

  #logo {
    width: 80%;
    height: 0%;
    margin: auto;
  }

  .bici {
    width: 5%;
    height: 5%;
  }

  .menu {
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    color: #ffc107;
    transition: background-size 0.3s;
  }

  .menu:hover,
  a:focus {
    background-position: 50% 100%;
    background-size: 50% 3px;
    color: #ffc107;
  }

  .contenedor {
    height: 100%;
    width: 100%;
    display: flex;
    background: white;
    flex-wrap: wrap;
    padding-bottom: 100px;
    padding-top: 50px;
margin-left: 0;
margin-left: 0;
    justify-content: space-evenly;
  }

  .fono {
    color: white;
    font-size: larger;
    margin-left: 250px;
  }

  .btn-primary-outline {
    background-color: transparent;
    border-color: transparent;
  }

  .principal {
    margin-top: 2px !important;
    background: white;
  }

  .titulo h1 {
    margin-bottom: 20px auto;
    line-height: 100px !important;
    color: #e7fafd;
  }

  /* .app{
  
 
  background-repeat: no-repeat;
  background-size:contain;
  background-position: top center;
} */

  .modal-scrollable .modal-dialog {
    position: absolute !important;
    right: 0 !important;
    top: 55px !important;
    margin: auto !important;
    width: 320px !important;
    height: 100% !important;
    -webkit-transform: translateZ(0) !important;
    transform: translateZ(0) !important;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    color: #2c3e50;
  }

  /* #nav {
  padding: 30px;
} */

  .carrito {
    display: inline-block;
  }

  .card-img-top {
    margin-top: -50px;
  }

  .card {
    border-radius: 14px;
    border: red 6px solid;
    background: red;
    margin-top: 30px;
    margin-bottom: 60px;
    margin-left: 10px;
    margin-right: 10px;
    height: 65vmin 10vmax;
    transition: all 0.7s ease-in-out;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .btn {
    border: 4px solid red;
    border-radius: 10px;
    background: white !important;
    color: red;
  }

  #nav {
    background: red !important;
  }

  #nav a {
    font-weight: bold;
    color: #e7fafd;
  }

  .navbar a {
    font-weight: bold;
    color: #e7fafd !important;
  }

  .navbar a:hover {
    color: #ebd72a !important;
  }

  .navbar a:active {
    color: blue !important;
  }

  #otro {
    background: red;

    width: 100%;
  }

  #nav a.router-link-exact-active {
    color: #ffc107;
  }

  path{
    fill: #ffc107 !important;
  }

  /* .nav-link{
    margin-right: 40px !important;
} */
</style>