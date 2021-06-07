<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span='3' class="left">
        <a href="//bj.meituan.com"><img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团"></a>
      </el-col>
      <el-col :span='15' class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="请输入内容" @focus="focusss" @blur="blurrr"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd 
            v-for="(item,index) in hotPlaceList"
            :key="index">
              <router-link :to="{name: 'goods', params: {name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd 
            v-for="(item,index) in searchList"
            :key="index">
              <router-link :to="{name: 'goods', params: {name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#"
          v-for="(item,index) in suggestList"
          :key="index"
          >{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: ['269全套大保健','本地酒吧人气榜','钟点房情侣房','hahahaaaa'],
      searchList: ['火锅','火锅自助餐','火锅重庆','xixixixixi'],
      suggestList: ['京东第一温泉度假村','99旅馆连锁','尚客优快捷酒店','7天连锁酒店','超级无敌aaaa']
    }
  },
  computed: {
    isHotPlace: function(){
      return this.isFocus && !this.searchWord;
    },
    isSearchList: function(){
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focusss(){
      this.isFocus = true;
      console.log(this.isFocus);
    },
    blurrr(){
      let self = this;
      setTimeout(function(){
        self.isFocus = false;
        console.log(self.isFocus);
      }, 200);
    }
  }
}
</script>
<style lang="scss">
  
</style>