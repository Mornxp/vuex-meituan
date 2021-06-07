<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
    />

    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
    />

    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script>
// 23:00又讲到vuefix插件去除语法错误警告

// 29:00讲到vue通过自定义指令给document绑定事件
// 42:30 讲完自定义指令，开始讲远程搜索

// 50:00 开始讲第二行，热门城市

// 57:00 开始讲城市列表

// 1:05:10 将路由模式配置为history

import mSelect from "./select.vue";
export default {
  data() {
    return {
      provinceList: [
        "山东",
        "河北",
        "河南",
        "黑龙江",
        "辽宁",
        "吉林",
        "四川",
        "贵州",
        "云南",
        "山东",
        "河北",
        "河南",
        "黑龙江",
        "辽宁",
        "吉林",
        "四川",
        "贵州",
        "云南",
        "山东",
        "河北",
        "河南",
        "黑龙江",
        "辽宁",
        "吉林",
        "四川",
        "贵州",
        "云南"
      ],
      province: "省份",
      cityList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗", "奉天"],
      city: "城市",
      cityActive: false,
      provinceActive: false,
      searchList: [
        "哈尔滨", "佳木斯", "牡丹江", "鹤岗", "奉天"
      ],
      searchWord: '',
      loading: false
    };
  },
  components: {
    mSelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod(e){
      //请求后端接口
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
