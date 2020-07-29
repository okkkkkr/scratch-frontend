<template>
  <div class="header-wrapper">
    <div class="navWrapper">
      <div class="container">
        <div class="row">
          <div class="logo-wrap col-sm-1">
            <a class="navbar-brand" href="/">
              <img class="stu-logo" src="../../assets/images/user/logo.png" alt />
            </a>
          </div>
          <div class="col-sm-8">
            <nav class="nav-cont navbar navbar-expand-sm">
              <ul class="navbar-nav nav-ul">
                <li class="nav-item">
                  <router-link to="/stuPage/mainPage">
                    <a class="nav-link" href="#">首页</a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/stuPage/discover">
                    <a class="nav-link" href="#">发现</a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">工作室</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">论坛</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">素材</a>
                </li>
                <li class="nav-item">
                  <router-link to="/stuPage/course">
                    <a class="nav-link" href="#">课程</a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Activity">活动</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">更多</a>
                </li>
              </ul>
              <!-- <button @click="test">测试</button> -->
            </nav>
          </div>
          <div class="nav-left col-sm-3" style="verticle-align: middle;">
            <!-- 需要修改跳转方式，因为要获取个人信息 -->
            <router-link to="/stuPage/personal">
              <!-- 若登录显示头像 -->
              <el-avatar
                v-if="loginOrNot"
                :size="35"
                fit="fill"
                :src="iconURL"
                class="header-avatar"
              ></el-avatar>

              <!-- 否则显示icon -->
              <img v-else src="../../assets/images/homepage/personal.png" alt />
            </router-link>

            <!-- 登录/注册 -->

            <!-- 若登录显示userName -->
            <span class="loginName" v-if="loginOrNot">{{ userName }}</span>

            <!-- 否则显示登录/注册 -->
            <span class="tips" v-else>
              <!-- 登录提示框 -->
              <el-button class="login-out" type="text" @click="dialog1Visible = true">登录</el-button>

              <el-dialog class="log-dialog" title="登录" :visible.sync="dialog1Visible" width="25%">
                <div class="formStyle">
                  <!-- 登录表 -->
                  <el-form
                    label-width="80px"
                    :model="LoginForm"
                    @keydown.enter="log_submit('LoginForm')"
                  >
                    <el-form-item label="账户">
                      <el-input v-model="LoginForm.userAc" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                      <el-input v-model="LoginForm.Password" type="password"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <button
                      type="button"
                      class="btn btn-info log-btn"
                      @click="dialog1Visible = false"
                    >立即登录</button>
                  </div>
                  <div>
                    <ul class="regTips">
                      <li>
                        <span class="text-muted">
                          尚未拥有账户？
                          <a class="change-dialog text-muted" @click="chageFlag">立即注册</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </el-dialog>/
              <!-- 注册提示框 -->
              <el-button class="login-out" type="text" @click="dialog2Visible = true">注册</el-button>

              <el-dialog class="reg-dialog" title="注册" :visible.sync="dialog2Visible" width="25%">
                <div class="formStyle">
                  <!-- 登录表 -->
                  <el-form label-width="80px" :model="RegForm" @keydown.enter="reg_submit">
                    <el-form-item label="账户">
                      <el-input v-model="RegForm.userAc" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                      <el-input v-model="RegForm.Password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item class="code-form" label="验证码">
                      <div class="row">
                        <div class="col-sm-6">
                          <el-input v-model="RegForm.Code" type="text"></el-input>
                        </div>
                        <div class="col-sm-6">
                          <button
                            type="button"
                            class="btn btn-info code-btn"
                            @click="get_code"
                          >{{ Tips }}</button>
                        </div>
                        <p class="text-muted emailTips" v-if="show">验证码信息已发送至邮箱，请注意查收！</p>
                      </div>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <button
                      type="button"
                      class="btn btn-info log-btn"
                      @click="dialog1Visible = false"
                    >提交验证</button>
                  </div>
                  <div>
                    <ul class="regTips">
                      <li>
                        <span class="text-muted">
                          已拥有账户？
                          <a class="change-dialog text-muted" @click="chageFlag">立即登录</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </el-dialog>
            </span>

            <span class="create">
              <a href="#" class="create-title dropdown-troggle" data-toggle="dropdown">创作</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/CodeEditor">源码编辑器</a>
                <a class="dropdown-item" href="#">海龟编辑器</a>
                <a class="dropdown-item" href="#">代码岛</a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StuHeader",
  data() {
    return {
      Tips: "立即验证",
      show: false,
      clickable: true,
      time: "2",
      loginOrNot: "false",
      dialog1Visible: false,
      dialog2Visible: false,
      iconURL: "",
      userName: "",
      url: "",
      LoginForm: {
        userAc: "",
        Password: "",
      },
      RegForm: {
        userAc: "",
        Password: "",
        Code: "",
      },
    };
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    // loginOrNot() {
    //   let login_judge = sessionStorage.getItem("loginId");
    //   console.log("Into login_judge page ========>" + login_judge);
    //   if (login_judge) {
    //     // this.url = "../../assets/images/personal/头像.jpg";
    //     // console.log(this.url);
    //     let loginId = Number(sessionStorage.getItem("loginId"));
    //     this.$http
    //       .get(`/api/userInfo/${loginId}`)
    //       .then(res => {
    //         console.log("getUserName");
    //         console.log(res);
    //         this.userName = res.data.name;
    //         this.iconURL = res.data.icon;
    //         console.log(res.data.name);
    //         console.log(this.userName);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });

    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
    log_submit(name) {
      console.log(this.LoginForm);
      //提交登录信息
      this.$http
        .post("/api/login", this.LoginForm)
        .then((res) => {
          //调用方法,session保存id
          this.SaveId(res.data.loginId);

          this.$message({
            message: "登陆成功",
            type: "success",
          });
          let jump = setInterval(() => {
            if (this.time > 0) {
              this.time--;
            } else {
              this.time = 2;
              clearInterval(jump);
              this.$router.push({ path: "/stuPage/mainPage" });
            }
          }, 1000);
        })
        .catch((err) => {
          console.log(this.LoginForm);
          this.$message.error("登陆失败，请检查账户或密码是否正确！");
        });
    },
    reg_submit() {
      //提交注册信息
      if (this.RegForm.Code != null) {
        this.$http
          .post("", this.RegForm)
          .then((res) => {
            //调用方法,session保存id
            this.SaveId(res.data.loginId);
            this.$message({
              message: "注册成功！",
              type: "success",
            });
            this.$router.push({ path: "/stuPage/mainPage" });
          })
          .catch((err) => {
            this.$message.error("系统繁忙，请稍后重试！");
          });
      } else {
        this.$message({
          message: "请填写验证码！",
          type: "warning",
        });
      }
    },

    // updateData(){
    //   this.$router.go(0);
    // },
    get_code() {
      if (!this.clickable) {
        return;
      }

      //获取验证码
      this.$http
        .post("/", this.RegForm.userAc)
        .then(() => {
          this.show = true;
        })
        .catch((err) => {
          this.$notify.error({
            title: "错误",
            message: "系统繁忙，请稍后重试！",
          });
        });

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
    },
    chageFlag() {
      (this.dialog1Visible = !this.dialog1Visible),
        (this.dialog2Visible = !this.dialog2Visible);
    },

    SaveId(userId) {
      //session存储登陆的userAc
      sessionStorage.setItem("loginId", userId);
      console.log("This is loginId from Header ========>" + userId);
    },
  },

  created() {},
  mounted() {
    //页面挂载前初始化用户信息，存储再客户端session
    this.$http
      .get("/api/loginUser")
      .then((res) => {
        //存储登录ID
        console.log(res);
        this.SaveId(res.data.data.id);
        this.loginOrNot = true;
        // sessionStorage.setItem("userInfo", this.userInfo)
      })
      .catch((err) => {
        console.log(err);
      });

    let loginId = sessionStorage.getItem("loginId");
    this.$http.get(`/api/userInfo/${loginId}`).then((res) => {
      console.log("UserInfo");
      console.log(res);
      this.iconURL = `http://39.108.222.204:8089/common/static/${res.data.data.icon}`;
      this.userName = res.data.data.name;
    });
  },
};
</script>
<style lang="less">
@import "./header.less";
</style>