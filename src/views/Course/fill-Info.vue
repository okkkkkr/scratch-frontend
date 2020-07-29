<template>
  <div>
     &nbsp;
    <h5>用户报名信息表单</h5>
     &nbsp;
     <el-button @click="submit()" type="success">提交报名</el-button>
     <el-button @click="quit()" type="warning">取消报名</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      courseCont: {},
      report:{},
      message:""
    };
  },
  watch: {},
  computed: {},
  methods: {
      submit(){
          this.$http.post("这里是报名表提交的地址", this.report).then(res => {
              if(code != 200){
                  this.failedTips();
              }
              this.successTips();
              //跳转页面的计时器
          let jump = setInterval(() => {
            if (this.time > 0) {
              this.time--;
            } else {
              this.time = 1;
              clearInterval(jump);
              this.$router.push({ path: "/stuPage/course" });
            }
          }, 3000);
          }).catch(err => {
              console.log(err);
          })
      },
      quit(){
          this.$router.push('/courseInfo');
      },
      successTips() {
        this.$message({
          showClose: true,
          message: '报名成功',
          type: 'success'
        });
        
      },
      failedTips() {
        this.$message({
          showClose: true,
          message: `报名失败${this.message}`,
          type: 'warning'
        });
      },
  },
  created() {},
  mounted() {

    //首先获取用户默认信息进行填写
    let userId = sessionStorage.getItem("loginId");
    this.$http
      .get(`/api/userInfo/${userId}`)
      .then((res) => {
        console.log("-------- The data from res --------");
        console.log(res.data.data);
        this.userInfo = res.data.data;
        console.log("-------- The data from personal.vue(userInfo) --------");
        console.log(this.userInfo);
        //判断等级,性别
        this.Judge();
      })
      .catch((err) => {
        console.log(err);
      });

    //根据课程id获取课程界面元素信息
    let courseId = sessionStorage.getItem('courseId');
    this.$http
      .get("获取课程报名需要的页面元素的api，包含图片等")
      .then((res) => {
        this.courseCont = this.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style lang="less">
@import "./fill-info.less";
</style>