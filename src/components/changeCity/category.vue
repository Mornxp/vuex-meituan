<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
      
    </dl>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list: 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'.split(''),
    }
  }
}
</script>
<style lang="scss">
  @import "@/assets/css/changecity/category.scss"
</style>