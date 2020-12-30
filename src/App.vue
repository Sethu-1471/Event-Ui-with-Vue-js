<template>
  <div id="app">
    <transition name="fade" mode="out-in">
    <router-view />
    </transition>
  </div>
</template>

<script>
import jQuery from "jquery";
import chatbot from "./components/chatbot";
jQuery(document).ready(function() {
  jQuery(function() {
    jQuery(this).bind("contextmenu", function(event) {
      event.preventDefault();
    });
  });
});
export default {
  name: "App",
  components: {
    chatbot
  },
  mounted(){

  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active{
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter, .fade-leave-active{
  opacity: 0;
}
#app {
  font-family: Roboto, sans-serif;
  font-size: 15px;
  color: #2c3e50;
  background-color: #200F21;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge*/
  user-select: none; /* Non-prefixed version, currentl not supported by any browser */
}
#myBtn {
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 9999999999999999;
  font-size: 20px;
  padding: 15px;
}
</style>
