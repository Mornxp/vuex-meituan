<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"/>
      深圳
      <router-link class="changeCity" :to="{name: 'changeCity'}">
        切换城市
      </router-link>
      [
      <a href="#">深圳市</a>
      <a href="#">南山区</a>
      <a href="#">南头街道</a>
      ]
    </div>
    <div class="m-user">
      <router-link class="login" :to="{name: 'login'}">
        立即登录
      </router-link>
      <router-link class="register" :to="{name: 'register'}">
        注册
      </router-link>
    </div>
  </div>
</template>
<script>
export default {

}
</script>