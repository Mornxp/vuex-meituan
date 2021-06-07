<template>
  <div class="page-changeCity">
    <el-row>
      <m-province/>
    </el-row>
    <el-row>
      <hot-city title="热门城市：" :list="hotList"/>
    </el-row>
    <el-row>
      <hot-city title="最近访问：" :list="recentList"/>
    </el-row>
    <el-row>
      <m-category/>
    </el-row>
  </div>
</template>
<script>
import mProvince from '@/components/changeCity/province.vue'
import hotCity from "@/components/changecity/hot.vue"
import mCategory from "@/components/changecity/category.vue"
export default {
  data(){
    return {
      hotList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗", "奉天"],
      recentList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗", "奉天"]

    }
  },
  components: {
    mProvince,
    hotCity,
    mCategory

  }
}
</script>