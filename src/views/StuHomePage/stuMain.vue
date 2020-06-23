<template>
  <div class="stuMain-wrapper">
    <!-- 轮播框 -->
    <div class="container">
      <div class="frame">
        <div class="frame-content">
          <div class="container">
            <div class="row">
              <div class="begin-frame col-sm-6">
                <h4 class="beginning">开始学习编程吧</h4>
              </div>
              <div class="frame-nav col-sm-6">
                <a href="#">入门教程</a>
                <a href="#">进阶教程</a>
              </div>
            </div>
          </div>

          <div class="beginMedia container">
            <div class="block">
              <el-carousel :interval="4000" type="card" height="230px">
                <el-carousel-item v-for="item in tutorialList" :key="item.title">
                  <div class="media">
                    <img
                      style="width:100%;height:100%;"
                      :src="`http://120.24.230.119:8089/${item.banner}`"
                    />
                  </div>
                  <div class="introduct">
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.introduction }}</p>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- 热门活动 -->
      <div class="cont-title container">
        <div class="row">
          <div class="cont col-sm-6">
            <img class="title-logo" src="../../assets/images/homepage/active.png" alt />
            <font class="title" id="hot">热门活动</font>
          </div>
          <div class="more col-sm-6">
            <a href class="more-cont">更多</a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-3" v-for="item in activeList" :key="item.title">
            <div class="cont1">
              <img style="width:100%;height:100%;" :src="`http://120.24.230.119:8089/${item.banner}`" alt="">
              <div class="worksInfo">
                <h5>{{ item.title }}</h5>
                <p>{{ item.introduction }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 新作精选 -->
      <div class="cont-title container">
        <div class="row">
          <div class="cont col-sm-6">
            <img class="title-logo" src="../../assets/images/homepage/newWorks.png" alt />
            <font class="title" id="selected">新作精选</font>
          </div>
          <div class="more col-sm-6"></div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-five">
            <div class="cont1"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont2"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont3"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont4"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont5"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont6"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont7"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont8"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont9"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont10"></div>
          </div>
        </div>
      </div>

      <div class="introdution">
        <img src="../../assets/images/homepage/introdution.png" alt />
      </div>

      <!-- 各类游戏 -->
      <div class="cont-title container">
        <div class="row">
          <div class="cont col-sm-6">
            <img class="title-logo" src="../../assets/images/homepage/active.png" alt />
            <font class="title" id="move">动作游戏</font>
          </div>
          <div class="more col-sm-6">
            <a href class="more-cont">下一页></a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-five">
            <div class="cont1"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont2"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont3"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont4"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont5"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont6"></div>
          </div>

          <div class="col-sm-five">
            <div class="cont7"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont8"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont9"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont10"></div>
          </div>
        </div>
      </div>

      <div class="cont-title container">
        <div class="row">
          <div class="cont col-sm-6">
            <img class="title-logo" src="../../assets/images/homepage/active.png" alt />
            <font class="title" id="shot">射击游戏</font>
          </div>
          <div class="more col-sm-6">
            <a href class="more-cont">下一页></a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-five">
            <div class="cont1"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont2"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont3"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont4"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont5"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont6"></div>
          </div>

          <div class="col-sm-five">
            <div class="cont7"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont8"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont9"></div>
          </div>
          <div class="col-sm-five">
            <div class="cont10"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧导航：使用循环表示 -->
    <div id="right-nav" class="right-nav list-group">
      <a href="#hot" class="list-group-item">活动</a>
      <a href="#selected" class="list-group-item">最新</a>
      <a href="#move" class="list-group-item">动作类</a>
      <a href="#shot" class="list-group-item">射击类</a>
      <a href class="list-group-item">休闲类</a>
      <a href class="list-group-item">艺术类</a>
      <a href class="list-group-item">冒险类</a>
      <a href class="list-group-item">学术类</a>
      <a href class="list-group-item">故事类</a>
      <a href class="list-group-item">精选</a>
      <a href class="list-group-item">TV</a>
      <a href class="list-group-item">红人榜</a>
    </div>

    <!-- 回到顶部隐藏 -->
    <div id="back" class="back">
      <div class="cord-wrapper">
        <div class="cord"></div>
      </div>
      <div class="backTop">
        <div>
          <a href="javascript:scroll(0,0)">
            <img src="../../assets/images/homepage/BackTop.png" alt />
          </a>
        </div>
      </div>

      <div class="phoneCall">
        <div>
          <img src="../../assets/images/homepage/phone.png" alt />
        </div>
      </div>

      <div class="QQchat">
        <div>
          <img src="../../assets/images/homepage/QQ.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StuMain",
  data() {
    return {
      tutorialList: [],
      activeList: [],
      course: []
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    console.log("Into mounted ====>");
    this.$http
      .get("/api/home/content")
      .then(res => {
        console.log("There are data from content ========>");
        this.tutorialList = res.data.data.tutorialList;
        this.activeList = res.data.data.activeList;
        console.log(res);
        console.log(this.tutorialList);
        console.log(this.activeList);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<!-- 需要进行外部引用 -->
<!-- <script type="text/javascript">
$(document).scroll(() => {
  var oNav = document.getElementById("right-nav");
  var oBack = document.getElementById("back");
  if ($(document).scrollTop() >= 1000) {
    oNav.style.bottom = "125px";
    oBack.style.opacity = "1";
  }
  if ($(document).scrollTop() < 1000) {
    oNav.style.bottom = "-65px";
    oBack.style.opacity = "0";
  }
});
</script> -->

<style lang="less">
@import "./stuMain.less";
</style>