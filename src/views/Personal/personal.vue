<template>
  <div class="person-wrapper">
    <div class="container">
      <!-- 背景图 -->
      <div class="info-wrapper card">
        <div class="bg-img card-header">
          <img src="../../assets/images/personal/large.jpg" alt />
        </div>
        <div class="card-body">
          <div class="info-cont container">
            <div class="row">
              <div class="col-sm-1">
                <div class="head-img">
                  <img :src="`http://39.108.222.204:8089/common/static/${this.userInfo.icon}`" alt />
                </div>
              </div>
              <div class="col-sm-9 personal-pro">
                <ul>
                  <li>
                    <span class="userName">{{ userInfo.name }}</span>
                    <div class="EngineerLevel">
                      <img src="../../assets/images/personal/engineer.png" alt />
                      <span class="level">{{ level }}</span>
                    </div>
                  </li>
                  <li>
                    <i class="el-icon-s-cooperation"></i>
                    <div class="phone">{{ userInfo.email }}</div>
                    <i class="el-icon-s-flag"></i>
                    <div class="location">{{ userInfo.address }}</div>
                    <i class="sex"></i>
                  </li>
                  <li>
                    <span class="production">{{ userInfo.aims }}</span>
                  </li>
                </ul>
              </div>
              <div class="col-sm-2">
                <a href="/stuPage/perInfo/basicSet">
                  <el-button class="setInfo" size="small">修改个人资料</el-button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 个人信息内容 -->
      <div class="perInfo-wrapper">
        <div class="container">
          <div class="row">
            <!-- 左侧导航 -->
            <div class="perInfo-nav col-md-9">
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
              >
                <el-menu-item index="1">已购课程</el-menu-item>
                <el-menu-item index="2">
                  <router-link to="/stuPage/personal/myWorks">我的作品</router-link>
                </el-menu-item>

                <el-menu-item index="3">我的论坛</el-menu-item>
                <el-menu-item index="4">已报名比赛</el-menu-item>
                <el-menu-item index="5">待定</el-menu-item>
              </el-menu>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="container">
          <div class="row">
            <!-- 左侧导航显示内容 -->
            <div class="left-cont col-md-9 showInfo">
              <!-- <button @click="test">测试</button> -->
              <router-view></router-view>
            </div>

            <!-- 右侧浏览记录卡片 -->
            <div class="col-md-3" style="padding:0 0 0 20px;">
              <el-card class="box-card box-card-pos">
                <div slot="header" class="clearfix">
                  <img src="../../assets/images/personal/足迹.png" alt />
                  <div class="footmark">我的足迹</div>
                </div>
                <div v-for="o in 4" :key="o" class="text item">{{'这里是浏览记录 ' + o }}</div>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 需要进行外部引用 -->
<!--侧栏固定
<script type="text/javascript">
$(document).scroll(() => {
  if ($(document).scrollTop() >= 500) {
    $(".box-card").removeClass("box-card-pos");
    $(".box-card").addClass("box-card-fixed ");
  } else {
    $(".box-card").addClass("box-card-pos");
    $(".box-card").removeClass("box-card-fixed ");
  }
});
</script>
-->

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      email: "",
      sex: "",
      level: "",
      // 个人信息需要的对象
      userInfo: {}
      // myClass:{}，
      // myWorks:{},
      // myForum:{},
      // signUp:{},
    };
  },
  mounted() {
    //   var that = this;
    //   Utils.$on("init", function(param) {
    //     console.log("3");
    //     console.log(param);
    //     that.initData();
    //   });
    let userId = sessionStorage.getItem("loginId");
    console.log("--------------------");
    console.log(typeof userId);
    console.log(userId);
    this.$http
      .get(`/api/userInfo/${userId}`)
      .then(res => {
        console.log("-------- The data from res --------");
        console.log(res.data.data);
        this.userInfo = res.data.data;
        console.log("-------- The data from personal.vue(userInfo) --------");
        console.log(this.userInfo);
        //判断等级,性别
        this.Judge();
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    //导航栏点击事件
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    Judge() {
      let lev = this.userInfo.level;
      let sex = this.userInfo.sex;
      if (lev == 1) {
        this.level = "初级";
      }
      if (lev == 2) {
        this.level = "中级";
      }
      if (lev == 3) {
        this.level = "高级";
      }
      console.log(this.level);

      if (sex == 0) {
        $(".sex").addClass("el-icon-female");
      }

      if (sex == 1) {
        $(".sex").addClass("el-icon-male");
      }
    }
  },
  watch: {
    //监听路由,路由为perInfo时,调用init初始化方法
    // $route: {
    //   handler(route) {
    //     console.log("123");
    //     if (route.path === "/stuPage/personal") {
    //       this.init();
    //     }
    //   },
    //   deep: true
    // }
  },
  computed: {},
  created() {}
};
</script>

<style lang="less">
@import "./comment.less";
</style>