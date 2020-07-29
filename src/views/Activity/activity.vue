<template>
  <div class="container activeWrapper">
    <div class="rotation">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in rotation" :key="item.id">
          <img :src="item.src" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="activityItem">
      <div class="activity">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3604031770,3041889666&fm=26&gp=0.jpg" alt="">
      </div>
    </div>
  </div>
</template>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      rotation: [
        {
          id: "1",
          src:
            "http://img3.imgtn.bdimg.com/it/u=2458363282,1849618185&fm=26&gp=0.jpg"
        },
        {
          id: "2",
          src:
            "http://img5.imgtn.bdimg.com/it/u=3622459317,896963826&fm=26&gp=0.jpg"
        },
        {
          id: "3",
          src:
            "http://img3.imgtn.bdimg.com/it/u=1798342645,122109254&fm=26&gp=0.jpg"
        },
        {
          id: "4",
          src:
            "http://img1.imgtn.bdimg.com/it/u=1468455437,1096924820&fm=26&gp=0.jpg"
        },
        {
          id: "5",
          src:
            "http://img4.imgtn.bdimg.com/it/u=4099866098,2098747128&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less">
@import "./activity.less";
</style>