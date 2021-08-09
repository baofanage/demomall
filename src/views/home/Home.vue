<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <HomeSwiper
      ref="hSwiper"
      :banners="banners"
      @swiperLoaded="swiperLoaded"
    ></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView.vue";
import { getBannerData } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getBannerData().then((res) => {
      console.log(res);
      for (var i = 0; i < 4; i++) {
        this.banners.push({
          link: "www.baidu.com",
          image:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.miyanlife.com%2Fmnt%2Ftimg%2F190812%2F11063A5L-6.jpg&refer=http%3A%2F%2Fimg.miyanlife.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631070579&t=6ba0de2ed9ffe45c876f057cda6cd88e",
        });
        this.recommends.push({
          title: "秋季金品",
          link: "www.baidu.com",
          image:
            "https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0809%2F3afc0415j00qxjwm9000oc000cl00clg.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
        });
      }
    });
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}

.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
