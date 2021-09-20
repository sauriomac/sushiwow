<template>
  <footer id="sticky-footer" class="footer py-4 bg-dark text-white-50">
    <Navm class="navm" />
    <div class="container mt-5">
      <div class="row">
        <div
          class="
            font-weight-bold
            text-warning text-lg-left text-sm-center text-md-center
            col col-lg-3 col-md-12 col-xs-12 col-sm-12
            mt-5
          "
        >
          <p>вулиця Академіка Курчатова,67678678 Київ вулиця Акад</p>
          <p>вул Курчатова,765665 Київ вулиця Академіка</p>
          <p>вулиця Академіка Курчатова,5565685Київ вулиця</p>
        </div>
        <div
          class="col col-lg-6 col-md-12 col-xs-12 col-sm-12 text-center mt-5"
        >
          <ul class="lista">
            <li class="nav-item">
              <span class="mr-1"
                ><a class="phone" href="#"
                  ><img class="redes" src="../assets/instagram.svg" /></a
              ></span>
            </li>
            <li class="nav-item">
              <span class="mr-1"
                ><a
                  class="phone"
                  href="#"
                  ><img class="redes" src="../assets/whatsapp.svg" /></a
              ></span>
            </li>
            <li class="nav-item">
              <span class="mr-1"
                ><a class="phone" href="#"
                  ><img class="redes" src="../assets/viber.svg" /></a
              ></span>
            </li>
            <li class="nav-item">
              <span class="mr-1"
                ><a class="phone" href="#"
                  ><img class="redes" src="../assets/telegram.svg" /></a
              ></span>
            </li>
          </ul>
          <img class="logo" src="../assets/logo.png" />
        </div>
        <div class="col col-lg-3 col-md-12 col-xs-12 col-sm-12 mt-5">
          <ul>
            <li class="nav-item ml-n5">
              <span class="material-icons mr-1"> phone </span>
              <a class="phone" href="#">0600000000</a>
            </li>
            <li class="nav-item ml-n5">
              <span class="material-icons mr-1"> phone </span
              ><a class="phone" href="#">0933500000</a>
            </li>
            <li class="nav-item ml-n5">
              <span class="material-icons mr-1"> phone </span
              ><a class="phone" href="#">0600000000</a>
            </li>
          </ul>
        </div>
      </div>

      <small>Copyright &copy; sushiwow</small>
    </div>
  </footer>
</template>
<script>
import Navm from "./Navbottom.vue";
export default {
  name: "Products",
  components: {
    Navm,
  },
};
</script>

<style>
/* .logo{
  height: 40%;
  width: 40%;
} */
.mapa {
  height: 200px;
  widows: 100%;
  border: 5px solid #ffc107;
  border-radius: 9px;
}
.lista li {
  list-style-type: none;
  display: inline;
  padding-right: 5px;
}
</style>
