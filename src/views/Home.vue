<template>
  <div>
    <Banner />
    <Products />
  </div>
</template>

<script>
import Products from '@/components/Products.vue';
import  Banner from "../components/Banner.vue";

export default {
  name: 'Home',
  components: {
    Products,
    Banner
  },
  computed: {

  },
}
</script>
<style scope>

.containerr {
  display: grid;
 grid-template-columns: 2fr 1fr 1fr;
grid-template-rows: 400px 200px 200px;
grid-gap: 6px;
margin: 100px;
 
 
 
}
.titulo{
  align-content: center;
  margin-top:10px ;

}

[class *="box"]{
  background: red;
  height: 100%;
  width: 100%;
  margin: 10px;
 
 transition: all .2s ease-in-out;
}

[class *="box"]:hover{
  transform: scale(1.1);
}
[class *="box"]{
  background: url('../assets/banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  height: 100%;
  width: 100%;
  margin: 10px;
  padding-top: 30px;
  border-radius: 9px;
   transition: all .7s ease-in-out;
  pointer-events: visible;
}

 .box-1:hover{
  transform: scale(1.1);

  color: yellow;
}




/* .home{
  background: url('../assets/Back.jpg');
  background-repeat: no-repeat;
  background-size: cover;
} */

/* .hom{
   background: url('../assets/Back.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
} */


</style>

