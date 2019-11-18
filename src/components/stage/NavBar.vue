<template>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg header-area">
      <a class="navbar-brand" href="/">Upower</a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-collapse"
        aria-controls="navbar-collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >&#9776;</button>

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
            <a class="nav-link" href>登录</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href>注册</a>
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
.navbar {
  background-color: #32a7b8;
  padding: 20px 25px;
}
.navbar-brand,
.nav-item a {
  color: white;
}
.navbar a:hover {
  color: white;
}
.navbar-fixed-top {
  position: fixed;
  width: 100%;
  height: 80px;
  
  z-index: 1000;
   animation: NavColorIn 1s ease-in-out 0s 1 alternate forwards;
}
.btn-purple {
  background-color: purple;
  animation: NavBtnColorIn 1s ease-in-out 0s 1 alternate forwards;;
}
@keyframes NavColorIn {
  0%{
    background-color:#32a7b8;
    height: 80px;
  }
  100%{
    background-color: #313131;
    height: 60px;
  }
}
@keyframes NavBtnColorIn {
  0%{
    background-color:#32a7b8;
  }
  100%{
    background-color: purple;
  }
}
</style>

<script type="text/javascript">
$(document).scroll(function() {
  if ($(document).scrollTop() >= 1) {
    $(".header-area").addClass("navbar-fixed-top");
    $(".header-area .demo").addClass("btn btn-purple");
    $(".header-area .demo").removeClass("nav-link");
  } else {
    $(".header-area").removeClass("navbar-fixed-top");
    $(".header-area .demo").removeClass("btn btn-purple");
    $(".header-area .demo").addClass("nav-link");
  }
});
</script>