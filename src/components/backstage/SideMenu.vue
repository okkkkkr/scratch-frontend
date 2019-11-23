<template>
  <div>
      <div :class="[rotate ? 'openWrapper opensiderWrapper' : 'closeWrapper opensiderWrapper']">
      <img
        :class="[rotate ? 'opensider sider' : 'closesider sider']"
        src="../../assets/bars-close.png"
        @click="changeFlag"
      />
    </div> 
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      @mouseover="changeFlag"
      @mouseout="changeFlag"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">教师管理</span>
        </template>
        <el-menu-item-group>
          <span slot="title">管理内容</span>
          <el-menu-item index="1-1">教室上课情况</el-menu-item>
          <el-menu-item index="1-2">教学动态</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      isCollapse: true,
      rotate: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeFlag() {
      this.isCollapse = !this.isCollapse;
      this.rotate = !this.rotate;
    }
  }
};
</script>

<style lang="less">
  @import "./SideMenu.less";  
</style>