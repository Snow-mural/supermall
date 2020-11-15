<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-views :recommends ="recommends"/>
    <feature-views/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from 'views/home/childComps/HomeSwiper'
  import RecommendViews from './childComps/RecommendViews'
  import FeatureViews from './childComps/FeatureViews'

  import {getHomeMultidata} from 'network/home.js'

  export default {
    name: "home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendViews,
      FeatureViews
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
   #home {
     padding-top: 44px;
   }
  .nav-home {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: var(--color-tint);
    color: #ffffff;
    z-index: 1;
  }
</style>