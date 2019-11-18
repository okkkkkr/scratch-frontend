<template>
  <div class="header">
    <el-row :gutter="20" class="row">
      <el-col :span="3">
        <div class="logo">
          <img src="../../assets/logo.png" />
        </div>
      </el-col>
      <el-col :span="5">
        <el-input v-model="search" placeholder="请输入搜索内容" clearable></el-input>
      </el-col>
      <el-col :span="14">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-custom"></i>教师管理
            </template>
            <el-menu-item index="1-1">教学动态</el-menu-item>
            <el-menu-item index="1-2">教室上课情况</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-home"></i>班级管理
            </template>
            <el-menu-item index="2-1">分班管理</el-menu-item>
            <el-menu-item index="2-2">批量注册</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-platform"></i>学生管理
            </template>
            <el-menu-item index="3-1">学生个人信息</el-menu-item>
            <el-menu-item index="3-2">学生课堂活跃度</el-menu-item>
            <el-menu-item index="3-3">学生课堂表现分</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-s-order"></i>课程管理
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-s-marketing"></i>访问数据
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="2">
        <el-dropdown>
          <el-button icon="el-icon-user" circle></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="el-icon-postcard"></i>
              个人信息</el-dropdown-item>
            <el-dropdown-item>
              <i class="el-icon-sort"></i>
              更改账号</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown class="more">
          <i class="el-icon-plus"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="el-icon-edit"></i>
              写示例
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="el-icon-data-board"></i>
              课程发布
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: "",
      activeIndex: "1",
      rotate: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    changerotate() {
      this.rotate = !this.rotate;
      console.log(this.rotate);
    }
  }
};
</script>

<style lang="less">
@import "./Header.less";
</style>