<template>
  <div class="container">
    <!-- 个人作品内容展示 -->
    <div class="charge">
      <el-link @click="changeFlag" icon="el-icon-edit" v-if="flag">管理</el-link>
      <el-link @click="changeFlag" icon="el-icon-check" v-else>完成</el-link>
    </div>
    <div class="row">
      <div class="col-sm-3" v-for="item in myWorks" :key="item.title">
        <div class="cont">
          <img
            style="width:100%;height:100%;"
            :src="`http://39.108.222.204:8089/common/static/${item.banner}`"
            alt
          />
          <div class="worksInfo">
            <h5>{{ item.title }}</h5>
            <p>{{ item.introduction }}</p>
          </div>
        </div>
        <div v-if="!flag" class="container manager">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </div>
      </div>
    </div>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="8"
        layout="total, prev, pager, next"
        :total="this.myWorks.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      flag: true,
      myWorks: [],
      pageData: {
        currentPage: "1",
        pageSize: "8"
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    changeFlag() {
      this.flag = !this.flag
    }
  },
  created() {},
  mounted() {
    let loginId = sessionStorage.getItem("loginId");

    this.$http
      .post(`/api/${loginId}/portfolio/list`, this.pageData)
      .then(res => {
        this.myWorks = res.data.data.list;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="less">
@import "./myWorks.less";
</style>