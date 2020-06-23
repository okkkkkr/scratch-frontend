<template>
  <div class="person-wrapper">
    <div class="container">
      <el-row>
        <el-col :span="6">
          <div class="operation">
            <el-card>
              <div slot="header">
                <i class="el-icon-s-operation"></i>
                <span>设置</span>
              </div>

              <div class="block oper" v-for="oper in opers" :key="oper.id">
                <router-link :to="oper.url">
                  <span class="title">{{ oper.item }}</span>
                </router-link>
              </div>
            </el-card>
          </div>
        </el-col>

        <el-col :span="18">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      opers: [
        { id: "1", item: "个人资料", url: "/stuPage/perInfo/basicSet" },
        { id: "2", item: "修改密码", url: "/stuPage/perInfo/SetPwd" }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    //导航栏点击时间
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  created() {},
  mounted() {}
};
</script>

<!--<script type="text/javascript">
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

<style lang="less">
@import "./comment.less";
</style>