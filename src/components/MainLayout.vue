<script setup>
import MainNav from './MainNav.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <main-nav />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>