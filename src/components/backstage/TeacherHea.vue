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
     
      <el-col :span="2" :offset="14">
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