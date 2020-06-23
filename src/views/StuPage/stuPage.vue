<template>
  <div class="stuWrapper">
    <StuHeader></StuHeader>
    <router-view></router-view>
    <StuFooter></StuFooter>
  </div>
</template>

<script>
import StuHeader from "../../../src/components/homepage/Header.vue";
import StuFooter from "../../../src/components/homepage/Footer.vue";
export default {
  components: {
    StuHeader,
    StuFooter
  },
  props: {},
  data() {
    return {
      userInfo: {},
      tutorialList: [],
      activeList: []
    };
  },
  mounted() {
    
  },

  watch: {
    //监听路由,路由为perInfo时,调用init初始化方法
    // "$route.path": function(newVal, oldVal) {
    //   if (newVal === "/stuPage/personal") {
    //     console.log("1");
    //     // this.$refs.personal.init();
    //     this.initPersonal();
    //   }
    // }
    // $route: {
    //   handler(route) {
    //     if (route.path === "/stuPage/personal") {
    //       sessionStorage.setItem("test","123")
    //     }
    //   },
    //   deep: true
    // }
  },
  computed: {},
  methods: {},
  created() {}
};
</script>
<style lang="less">
.stuWrapper {
  background-color: #f8f8f9;
}
</style>