<template>
  <div id="home">
    <navbar class="home-navbar"><div slot="center">购物街</div></navbar>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/NavBar";
export default {
  name: "Home",
  components: {
    navbar,
  },
};
</script>

<style scoped>
.home-navbar{
  color:white;
  background-color: var(--color-tint);
}
</style>
