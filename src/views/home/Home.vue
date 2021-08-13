<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <HomeSwiper
      ref="hSwiper"
      :banners="banners"
      @swiperLoaded="swiperLoaded"
    ></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <FeatureView></FeatureView>
    <TabControl :titles="titles" class="tab-control"></TabControl>
    <ol>
      <li v-for="item in products">列表{{ item }}</li>
    </ol>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import { getBannerData } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: [],
      products: [],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    };
  },
  created() {
    getBannerData().then((res) => {
      console.log(res);

      //banner数据
      this.banners.push({
        link: "https://www.baidu.com",
        image: require("assets/img/banner/banner2.jpg"),
      });
      this.banners.push({
        link: "https://www.baidu.com",
        image: require("assets/img/banner/banner3.jpg"),
      });
      this.banners.push({
        link: "https://www.baidu.com",
        image: require("assets/img/banner/banner4.jpg"),
      });
      this.banners.push({
        link: "https://www.baidu.com",
        image: require("assets/img/banner/banner5.jpg"),
      });
      this.banners.push({
        link: "https://www.baidu.com",
        image: require("assets/img/banner/banner6.jpg"),
      });

      this.recommends.push({
        title: "秋季金品",
        link: "https://www.baidu.com",
        image: require("assets/img/banner/banner4.jpg"),
      });
      this.recommends.push({
        title: "限时秒杀",
        link: "https://www.baidu.com",
        image: require("assets/img/banner/banner5.jpg"),
      });
      this.recommends.push({
        title: "折扣优惠",
        link: "https://www.baidu.com",
        image: require("assets/img/banner/banner6.jpg"),
      });
      this.recommends.push({
        title: "当下流行",
        link: "https://www.baidu.com",
        image: require("assets/img/banner/banner7.jpg"),
      });

      this.titles.push("流行");
      this.titles.push("新款");
      this.titles.push("精选");

      for (var i = 1; i < 100; i++) {
        this.products.push(i);
      }
    });
  },

  methods: {
    swiperLoaded() {
      //this.tabOffsetTop = this.$refs.contentTab.$el.offsetTop;
    },
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
  position: sticky;
  top: 44px;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
