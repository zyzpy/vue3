<template>
  <div class="system-container">
    <el-container class="main-wrapper">
      <!-- 左侧导航区域 Sidebar组件 -->
      <Sidebar
          :is-collapse="isCollapse"
          :menuData="menu_list.data"
          :active-menu-index="activeMenuIndex"
      />

      <!-- 右侧内容区 -->
      <el-container>
        <el-header class="operate-header">
          <div class="header-left">
            <el-button link class="collapse-btn" @click="toggleSidebar">
              <el-icon :size="20">
                <component :is="collapseIcon"/>
              </el-icon>
            </el-button>
            <!-- 面包屑组件区域 -->
            <div class="breadcrumb-container">
              <el-breadcrumb separator="/">
                <Breadcrumb/>
              </el-breadcrumb>
            </div>
          </div>
          <div class="toolbar">
            <el-button type="primary" plain>退出系统</el-button>
          </div>
        </el-header>

        <!-- 多页签导航组件 -->
        <Tags />

        <!-- 主要内容区域 -->
        <el-main>
          <div class="content-card">
            <div class="table-container">
              <RouterView/>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import { menuData } from '@/utils/commonData'
import { useRoute } from 'vue-router'

import Sidebar from '@/components/layout/Sidebar.vue'
import Breadcrumb from '@/components/layout/Breadcrumb.vue'
import Tags from '@/components/layout/Tags.vue'

// 引入 Pinia 页签 store
import { useTabsStore } from '@/stores/tabs'

const route = useRoute()
const tabsStore = useTabsStore()

// 监听路由变化，自动添加页签（首页处理特殊）
watch(
    () => route.path,
    (newPath) => {
      let title: string
      if (newPath === '/home') {
        title = '首页'
      } else {
        title = typeof route.meta.title === 'string' ? route.meta.title : '无标题'
      }
      tabsStore.addTab({ title, path: newPath })
    },
    { immediate: true }
)

// 侧边栏状态
const isCollapse = ref(false)
const toggleSidebar = () => {
  isCollapse.value = !isCollapse.value
}

// 菜单数据
const activeMenuIndex = ref('100')
const menu_list = menuData

// 折叠图标计算属性
const collapseIcon = computed(() => isCollapse.value ? Expand : Fold)
</script>

<style scoped>
@import '@/assets/home.css';
</style>
