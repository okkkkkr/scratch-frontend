<template>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg header-area">
      <a class="navbar-brand" href="/">Upower</a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="navbar-collapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link demo" rel="nofollow" data-method="post" href>演示</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href>价格</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href>课程</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/login/log-form">登录</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login/reg-form">注册</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
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
@import "./NavBar.less";
</style>

<script type="text/javascript">
$(document).scroll( () => {
  if ($(document).scrollTop() >= 1) {
    $(".header-area").addClass("fixed-top navbar-fixed-color");
    $(".header-area .demo").addClass("btn btn-purple");
    $(".header-area .demo").removeClass("nav-link");
  } else {
    $(".header-area").removeClass("fixed-top navbar-fixed-color");
    $(".header-area .demo").removeClass("btn btn-purple");
    $(".header-area .demo").addClass("nav-link");
  }
});
</script>