<template>
  <div>
    <form ref="LoginForm" :model="LoginForm" @keydown.enter="log_submit('LoginForm')">
      <div class="input-group mb-3" prop="email">
        <input
          type="text"
          class="form-control"
          v-model="LoginForm.email"
          placeholder="请输入学生账号（手机号或邮箱）"
        />
      </div>

      <div class="input-group mb-3" prop="password">
        <input
          type="password"
          class="form-control"
          v-model="LoginForm.password"
          placeholder="请输入密码"
        />
      </div>
    </form>

    <div class="container select">
      <div class="row">
        <div class="col-sm-6 rem-id">
          <div class="checkbox">
            <label>
              <input type="checkbox" />
              <span class="text-muted">记住密码</span>
            </label>
          </div>
        </div>
        <div class="col-sm-6 rem-pwd">
          <a class="text-muted set-pwd" href="/login/setpwd">忘记密码？</a>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-info submit-btn" @click="log_submit('LoginForm')">立即登录</button>

    <div>
      <ul class="regTips">
        <li>
          <span class="text-muted">尚未拥有账户？</span>
        </li>
        <li>
          <a href="/login/reg-form">立即注册</a>
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
// import Format from "../../../static/Format.js"
export default {
  components: {},
  props: {},
  name: "loginform",
  data() {
    return {
      time: 2,
      LoginForm: {
        email: "",
        password: ""
      }
      // rule_LoginForm: {
      //   email: [
      //     {
      //       require: true,
      //       validator: Format.FormValidate.Login().email,
      //       trriger: "blur"
      //     }
      //   ],
      //   password: [
      //     {
      //       require: true,
      //       validator: Format.FormValidate.Login().password,
      //       trriger: "blur"
      //     }
      //   ]
      // }
    };
  },
  watch: {},
  computed: {},
  methods: {
    log_submit(name) {
      
      //提交登录信息
      this.$http
        .post("/api/login", this.LoginForm)
        .then(res => {
          //session存储登陆的email
          // console.log(res.data);
          // this.saveId(res.data.loginId);

          this.$message({
            message: "登陆成功",
            type: "success"
          });
          
          //跳转页面的计时器
          let jump = setInterval(() => {
            if (this.time > 0) {
              this.time--;
            } else {
              this.time = 1;
              clearInterval(jump);
              this.$router.push({ path: "/stuPage/mainPage" });
            }
          }, 1000);
        })
        .catch(err => {
          console.log(err);
          console.log(this.LoginForm);
          this.$message.error("登陆失败，请检查账户或密码是否正确！");
        });
    },

    // saveId(userId) {
    //   sessionStorage.setItem("loginId", userId);
    //   console.log("This is loginId from loginPage ========>" + userId);

    // }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less">
@import "./login.less";
</style>