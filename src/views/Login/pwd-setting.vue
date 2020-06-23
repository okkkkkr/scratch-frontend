<template>
  <div>
    <form ref="PwdForm" :model="PwdForm" @keydown.enter="pwd_submit">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          v-model="PwdForm.Account"
          placeholder="请输入账号（手机号或邮箱）"
        />
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="PwdForm.newPwd" placeholder="请输入新密码" />
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="PwdForm.confirmPwd" placeholder="请再次输入密码" />
      </div>
      <div class="input-group mb-3">
        <div class="row">
          <div class="col-sm-7">
            <input type="password" class="form-control" v-model="PwdForm.Code" placeholder="请输入验证码" />
          </div>
          <div class="col-sm-5">
            <button type="button" class="btn btn-info code-btn" @click="get_code">{{ Tips }}</button>
          </div>
        </div>
      </div>
    </form>
    <p class="text-muted emailTips" v-if="show">验证信息已发送至邮箱，请注意查收！</p>
    <button type="button" class="btn btn-info submit-btn" @click="pwd_submit">提交验证</button>
    <div>
      <ul class="regTips">
        <li>
          <span class="text-muted">已拥有账户？</span>
          <a href="/login/log-form">立即登录</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      Tips: "获取验证信息",
      show: false,
      clickable: true,
      time: "2",
      PwdForm: {
        Account: "",
        newPwd: "",
        confirmPwd: "",
        Code: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    //提交修改密码信息
    pwd_submit() {
      if (this.PwdForm.Code != null) {
        this.$http.post("", this.PwdForm).then(() => {
          this.$message({
            message: "修改成功，请重新登录！",
            type: "success"
          });
          this.$router.push({ path: "/login/log-form" });
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
      this.click = false;
      this.Tips = this.time + "s后重新发送";
      $(".code-btn").addClass("btn-secondary");
      $(".code-btn").removeClass("btn-info");
      let clock = window.setInterval(() => {
        this.time--;
        this.Tips = this.time + "s后重新发送";
        if (this.time < 0) {
          this.clickable = true;
          this.Tips = "重新发送消息";
          this.time = 2;
          $(".code-btn").removeClass("btn-secondary");
          $(".code-btn").addClass("btn-info");
          window.clearInterval(clock);
        }
      }, 1000);

      //获取验证码
      this.$http
        .post("", this.PwdForm.Account)
        .then(() => {
          this.show = true;
        })
        .catch(err => {
          this.$message.error("系统繁忙，请稍后重试！");
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less">
@import "./login.less";
</style>