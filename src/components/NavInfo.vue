<template>
  <div>
    <nav
      id="mn_menu"
      class="navbar pt-3 pl-5 pb-0 pt-0 ml-auto navbar-expand-lg navbar-light"
      aria-disabled="true"
    >
      <img class="bici" src="../assets/bici.svg" />
      <li class="nav-item">
        <h3 class="envio mt-2 ml-3">ДОСТАВКА | С СОБОЙ ПН-ВС С 10 ДО 23</h3>
      </li>
      <li class="nav-item ml-4">
        <a class="phone" href="#"
          ><span class="material-icons"> place </span>магазину</a
        >
      </li>

      <li class="nav-item">
        <span class="material-icons mr-2"> phone </span
        ><a class="phone" href="#">0930000000</a>
      </li>
      <li class="nav-item">
        <span class="material-icons mr-2"> phone </span
        ><a class="phone" href="#">0930000000</a>
      </li>
      <li class="nav-item">
        <span class="material-icons mr-2"> phone </span
        ><a class="phone" href="#">0660000000</a>
      </li>
      <li class="nav-item ml-2">
        <span class=""
          ><a class="phone" href="#"
            ><img class="redes" src="../assets/instagram.svg" /></a
        ></span>
      </li>
      <li class="nav-item m-2">
        <span class=""
          ><a
            class="phone"
            href="#"
            ><img class="redes" src="../assets/whatsapp.svg" /></a
        ></span>
      </li>
      <li class="nav-item ml-1">
        <span class=""
          ><a class="phone" href="#"
            ><img class="redes" src="../assets/viber.svg" /></a
        ></span>
      </li>
      <li class="nav-item m-2">
        <span class=""
          ><a class="phone" href="#"
            ><img class="redes" src="../assets/telegram.svg" /></a
        ></span>
      </li>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavInfo",
};
</script>
<style scoped>
.navbar {
  background: red !important;
}
</style>
