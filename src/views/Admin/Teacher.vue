<template>
  <el-container>
    <el-header class="Header">
      <Header></Header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Header from "../../components/backstage/Header";
export default {
  components: {
    Header
  },
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
html,
body {
  margin: 0;
  padding: 0;
}
.Header {
  height: 80px !important;
  border-bottom: 15px #eeeeee solid;
  box-shadow: 0 0 0 0 #eeeeee inset;
}
</style>