<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd 
      v-for="(item, index) in nav.list" :key="index"
      :class="{active: kind === item.tab}"
      :data-type="item.tab"
      >{{item.text}}</dd>

    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img
            :src="item.image"
            class="image"
          />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价￥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
      
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      kind: 'all',
      list:[
        {
          image: 'http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg',
          title: 'Coacos COFFEE（心园里店）',
          sub_title: '味香浓醇环境优雅',
          price_info: {
            current_price: 19,
            old_price: 36
          },
          address: '朝阳大道100号'
        },{
          image: 'http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg',
          title: 'Coacos COFFEE（心园里店）',
          sub_title: '味香浓醇环境优雅',
          price_info: {
            current_price: 19,
            old_price: 36
          },
          address: '朝阳大道100号'
        },{
          image: 'http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg',
          title: 'Coacos COFFEE（心园里店）',
          sub_title: '味香浓醇环境优雅',
          price_info: {
            current_price: 19,
            old_price: 36
          },
          address: '朝阳大道100号'
        },{
          image: 'http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg',
          title: 'Coacos COFFEE（心园里店）',
          sub_title: '味香浓醇环境优雅',
          price_info: {
            current_price: 19,
            old_price: 36
          },
          address: '朝阳大道100号'
        },{
          image: 'http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg',
          title: 'Coacos COFFEE（心园里店）',
          sub_title: '味香浓醇环境优雅',
          price_info: {
            current_price: 19,
            old_price: 36
          },
          address: '朝阳大道100号'
        }
      ]
    }
  },
  props: ['nav'],
  methods: {
    over(e){
      // console.log(e);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      console.log(tagName);
      if(tagName != 'dd'){
        return false;
      }
      this.kind = dom.getAttribute('data-type')
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
