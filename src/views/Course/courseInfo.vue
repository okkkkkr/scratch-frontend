<template>
  <div>
      <el-button @click="callback()" icon="el-icon-arrow-left" circle></el-button>
      <el-button type="primary" @click="fillInfo()" round>报名课程</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      courseInfo: {},
    };
  },
  watch: {},
  computed: {},
  methods: {
      callback(){
          this.$router.push("/stuPage/course")
      },
      fillInfo(){
          this.$router.push("/fill-info")
      }
  },
  created() {},
  mounted() {
    sessionStorage.getItem("courseId");
    //获取课程信息
    this.$http
      .get("这里填获取课程信息接口")
      .then((res) => {
        this.courseInfo = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style lang="less">
@import "./course.less";
</style>