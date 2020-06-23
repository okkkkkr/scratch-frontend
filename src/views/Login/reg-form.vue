<template>
  <div>
    <form ref="RegForm" :model="RegForm" @keydown.enter="reg_submit">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          v-model="RegForm.email"
          placeholder="请输入账号（手机号或邮箱）"
        />
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="RegForm.password" placeholder="请输入密码" />
      </div>
      <div class="input-group mb-3">
        <div class="row">
          <div class="col-sm-7">
            <input type="password" class="form-control" v-model="RegForm.verifyCode" placeholder="请输入验证码" />
          </div>
          <div class="col-sm-5">
            <button type="button" class="btn btn-info code-btn" @click="get_code">{{ Tips }}</button>
          </div>
        </div>
      </div>
    </form>
    <p class="text-muted emailTips" v-if="show">验证信息已发送至邮箱，请注意查收！</p>
    <button type="button" class="btn btn-info submit-btn" @click="reg_submit">提交验证</button>
    <div>
      <ul class="regTips">
        <li>
          <span class="text-muted">已拥有账户？</span>
          <a href="/login/log-form">立即登录</a>
        </li>
      </ul>
    </div>
    <div class="empower">
      <span class="wechat">
        <img src="../../assets/images/login/wechat.png" alt />
      </span>
      <span class="tecent">
        <img src="../../assets/images/login/icon_QQ.png" alt />
      </span>
      <span class="sina">
        <img src="../../assets/images/login/weibo.png" alt />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  name: "regfrom",
  data() {
    return {
      Tips: "获取验证信息",
      show: false,
      clickable: true,
      time: "5",
      RegForm: {
        useraName:"",
        email: "",
        password: "",
        verifyCode: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    reg_submit() {
      //提交注册信息
      if (this.RegForm.Code != null) {
        this.$http
          .post("", this.RegForm)
          .then(() => {
            this.$message({
              message: "注册成功！",
              type: "success"
            });

            //session存储登陆的email
            this.saveId();
            this.$router.push({ path: "/stuPage/mainPage" });
          })
          .catch(err => {
            this.$message.error("系统繁忙，请稍后重试！");
          });
      } else {
        this.$message({
          message: "请填写验证码！",
          type: "warning"
        });
      }
    },

    get_code() {
      if (!this.clickable) {
        return;
      }

      //获取验证码
      this.$http
        .get("/api/getVerifyCode", this.RegForm.email)
        .then(() => {
          console.log(this.RegForm.email);
          this.show = true;
        })
        .catch(err => {
          this.$notify.error({
            title: "错误",
            message: "系统繁忙，请稍后重试！"
          });
        });

      this.click = false;
      this.Tips = this.time + "s后重发";
      $(".code-btn").addClass("btn-secondary");
      $(".code-btn").removeClass("btn-info");
      let clock = window.setInterval(() => {
        this.time--;
        this.Tips = this.time + "s后重发";
        if (this.time < 0) {
          this.clickable = true;
          this.Tips = "重新发送消息";
          this.time = 5;
          $(".code-btn").removeClass("btn-secondary");
          $(".code-btn").addClass("btn-info");
          window.clearInterval(clock);
        }
      }, 1000);
    },

    saveId(userId) {
      sessionStorage.setItem("loginId", userId);
      console.log("This is loginId from loginPage ========>" + userId);

    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less">
@import "./login.less";
</style>