<template>
  <div class="wrapper">
    <!-- header -->
    <div class="container header">
      <h1>Upower</h1>
      <h2>让孩子接受更好的编程教育</h2>
      <a href="/stuPage/mainPage">
        <button type="button" class="btn start">免费开始</button>
      </a>
    </div>

    <!-- content -->
    <div class="container content">
      <div class="row">
        <div class="col-sm-4">
          <div class="card bg-light text-dark">
            <div class="card-body">
              <div class="logo">
                <img class="card-logo" src="../../assets/images/user/logo.png" alt />
              </div>
              <router-view></router-view>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="robot">
            <img src="../../assets/images/login/robot.png" alt />
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="footer">
      <ul class="nav justify-content-center foot-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">演示</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">课程</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">价格</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/education/user">关于我们</a>
        </li>
      </ul>
      <p class="text-muted">©2019 15Five. All rights reserved.</p>
      <div class="container social">
        <img src="../../assets/images/login/google plus.png" alt />

        <img src="../../assets/images/login/facebook.png" alt />

        <img src="../../assets/images/login/twitter.png" alt />

        <img src="../../assets/images/login/github.png" alt />
      </div>
    </div>
    <div class="status">
      <img class="student" src="../../assets/images/login/Student.png" alt />
      <a href="/Teacher">
        <img class="teacher" src="../../assets/images/login/Teacher.png" alt />
      </a>
      <a href="/admin">
        <img class="manager" src="../../assets/images/login/Manager.png" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less">
@import "./login.less";
</style>