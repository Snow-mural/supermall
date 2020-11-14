<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-views :recommends ="recommends"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from 'views/home/childComps/HomeSwiper'
  import RecommendViews from './childComps/RecommendViews'

  import {getHomeMultidata} from 'network/home.js'

  export default {
    name: "home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendViews
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
  .nav-home {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>