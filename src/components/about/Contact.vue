<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">1623487989@qq.com</p>

      <router-link :to="{ name: 'phoneNumber' }">电话:to</router-link>
      |
      <router-link to="/phone">电话-to</router-link>
      |
      <router-link to="/about/contact">联系人</router-link>

      <router-view></router-view>
    </div>
  </div>
</template>
