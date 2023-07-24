<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="/"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleClick"
      >
        <el-menu-item index="/">
          <el-icon><icon-menu /></el-icon>
          <span>Home</span>
        </el-menu-item>
        <el-menu-item index="/main-list">
          <el-icon><Document /></el-icon>
          <span>List</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  // Location,
  // Setting,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// const route = useRoute()
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClick = (path) => {
  router.push(path)
}
</script>
