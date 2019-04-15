<template>
  <div class="like-warp">
    <div class="label">猜你喜欢</div>
    <div class="product">
      <img
        src="//p0.meituan.net/msmerchant/edf0cd383f5bb80fb746bdc5cd1f327510284823.jpg@190w_106h_1e_1c"
        alt
      >
      <div class="title">旺顺阁鱼头泡饼（长阳半岛店）</div>
      <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
      </el-rate>
      <div class="address">长阳镇</div>
      <div class="price">
          <span>￥</span>
          <span class="price">900</span>
          <span>起</span>
      </div>
    </div>
     <div class="product">
      <img
        src="//p0.meituan.net/msmerchant/edf0cd383f5bb80fb746bdc5cd1f327510284823.jpg@190w_106h_1e_1c"
        alt
      >
      <div class="title">旺顺阁鱼头泡饼（长阳半岛店）</div>
      <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
      </el-rate>
      <div class="address">长阳镇</div>
      <div class="price">
          <span>￥</span>
          <span class="price">900</span>
          <span>起</span>
      </div>
    </div>
     <div class="product">
      <img
        src="//p0.meituan.net/msmerchant/edf0cd383f5bb80fb746bdc5cd1f327510284823.jpg@190w_106h_1e_1c"
        alt
      >
      <div class="title">旺顺阁鱼头泡饼（长阳半岛店）</div>
      <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
      </el-rate>
      <div class="address">长阳镇</div>
      <div class="price">
          <span>￥</span>
          <span class="price">900</span>
          <span>起</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            value5:5
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/css/products/like.scss";
</style>