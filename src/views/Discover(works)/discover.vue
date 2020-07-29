<template>
  <div class="discover-wrapper">
    <!-- 活动类型 -->
    <div class="container activeType">
      <el-row type="flex" justify="space-between">
        <el-col span="4" v-for="item in activeType" :key="item.id">
          <img :src="item.url" alt />
          <h5>{{ item.instruction }}</h5>
        </el-col>
      </el-row>
    </div>

    <!-- 作品 -->
    <div class="container works-nav">
      <el-row class="nav-head" type="flex" justify="space-between">
        <el-col span="10">
          <div class="title">
            <img class="icon" />
            <h4>作品</h4>

            <div class="worksType">
              <span>潜力新作</span>
              <span>经典作品</span>
            </div>
          </div>
        </el-col>
        <el-col span="10">
          <el-input
            :value="searchCont"
            class="search"
            placeholder="搜索作品"
            suffix-icon="el-icon-search"
          ></el-input>
        </el-col>
      </el-row>
      <div class="navBar">
        <el-breadcrumb separator="/">
        <el-breadcrumb-item>全部</el-breadcrumb-item>
          <el-breadcrumb-item
            class="worksType-nav"
            v-for="item in worksType"
            :key="item.id"
          >{{ item.typeName }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <!-- 作品内容 -->
    <div class="container worksCont">
      <div class="row">
        <div class="col-sm-five" v-for="item in worksCont" :key="item.id">
          <div class="worksWrapper">
            <el-avatar shape="square" :size="208" :fit="fill" :src="item.url"></el-avatar>
            <div class="Instruc">
              <h5>{{ item.instruction }}</h5>
            </div>
            <div class="visit">
              <span class="scan">
                <i class="el-icon-view"></i>
                {{ item.views }}
              </span>
              &nbsp;
              <span class="like">
                <i class="el-icon-star-off"></i>
                {{ item.likes }}
              </span>
            </div>
            <div class="authorName">
              <el-avatar shape="circle" :size="30" :fit="fill" :src="item.head"></el-avatar>
              <span style="margin-left:5px;">{{ item.authorName }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="15"
        layout="total, prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      TypeId: "",
      currentPage: 1,
      searchCont: "XiaoMing",
      activeType: [
        {
          id: "1",
          url:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3172621348,2984865820&fm=26&gp=0.jpg",
          instruction: "123"
        },
        {
          id: "2",
          url:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3172621348,2984865820&fm=26&gp=0.jpg",
          instruction: "456"
        },
        {
          id: "3",
          url:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3172621348,2984865820&fm=26&gp=0.jpg",
          instruction: "789"
        },
        {
          id: "4",
          url:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3172621348,2984865820&fm=26&gp=0.jpg",
          instruction: "234"
        },
        {
          id: "5",
          url:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3172621348,2984865820&fm=26&gp=0.jpg",
          instruction: "567"
        }
      ],
      worksCont: [
        {
          id: "1",
          url:
            "http://img4.imgtn.bdimg.com/it/u=1760663791,4009679677&fm=26&gp=0.jpg",
          instruction: "123456",
          scan: "111.1k",
          like: "222.2k",
          head:
            "http://img1.imgtn.bdimg.com/it/u=3090608441,3495105024&fm=26&gp=0.jpg",
          authorName: "XiaoMing"
        },
        {
          id: "2",
          url:
            "http://img4.imgtn.bdimg.com/it/u=1760663791,4009679677&fm=26&gp=0.jpg",
          instruction: "456789",
          scan: "222.2k",
          like: "333.3k",
          head:
            "http://img1.imgtn.bdimg.com/it/u=3090608441,3495105024&fm=26&gp=0.jpg",
          authorName: "XiaoMing"
        },
        {
          id: "3",
          url:
            "http://img4.imgtn.bdimg.com/it/u=1760663791,4009679677&fm=26&gp=0.jpg",
          instruction: "789101",
          scan: "333.3k",
          like: "444.4k",
          head:
            "http://img1.imgtn.bdimg.com/it/u=3090608441,3495105024&fm=26&gp=0.jpg",
          authorName: "XiaoMing"
        },
        {
          id: "4",
          url:
            "http://img4.imgtn.bdimg.com/it/u=1760663791,4009679677&fm=26&gp=0.jpg",
          instruction: "234567",
          scan: "444.4k",
          like: "555.5k",
          head:
            "http://img1.imgtn.bdimg.com/it/u=3090608441,3495105024&fm=26&gp=0.jpg",
          authorName: "XiaoMing"
        },
        {
          id: "5",
          url:
            "http://img4.imgtn.bdimg.com/it/u=1760663791,4009679677&fm=26&gp=0.jpg",
          instruction: "567890",
          scan: "555.5k",
          like: "666.6k",
          head:
            "http://img1.imgtn.bdimg.com/it/u=3090608441,3495105024&fm=26&gp=0.jpg",
          authorName: "XiaoMing"
        },
        {
          id: "6",
          url:
            "http://img4.imgtn.bdimg.com/it/u=1760663791,4009679677&fm=26&gp=0.jpg",
          instruction: "567890",
          scan: "555.5k",
          like: "666.6k",
          head:
            "http://img1.imgtn.bdimg.com/it/u=3090608441,3495105024&fm=26&gp=0.jpg",
          authorName: "XiaoMing"
        },
        {
          id: "7",
          url:
            "http://img4.imgtn.bdimg.com/it/u=1760663791,4009679677&fm=26&gp=0.jpg",
          instruction: "567890",
          scan: "555.5k",
          like: "666.6k",
          head:
            "http://img1.imgtn.bdimg.com/it/u=3090608441,3495105024&fm=26&gp=0.jpg",
          authorName: "XiaoMing"
        },
        {
          id: "8",
          url:
            "http://img4.imgtn.bdimg.com/it/u=1760663791,4009679677&fm=26&gp=0.jpg",
          instruction: "567890",
          scan: "555.5k",
          like: "666.6k",
          head:
            "http://img1.imgtn.bdimg.com/it/u=3090608441,3495105024&fm=26&gp=0.jpg",
          authorName: "XiaoMing"
        },
        {
          id: "9",
          url:
            "http://img4.imgtn.bdimg.com/it/u=1760663791,4009679677&fm=26&gp=0.jpg",
          instruction: "567890",
          scan: "555.5k",
          like: "666.6k",
          head:
            "http://img1.imgtn.bdimg.com/it/u=3090608441,3495105024&fm=26&gp=0.jpg",
          authorName: "XiaoMing"
        },
        {
          id: "10",
          url:
            "http://img4.imgtn.bdimg.com/it/u=1760663791,4009679677&fm=26&gp=0.jpg",
          instruction: "567890",
          scan: "555.5k",
          like: "666.6k",
          head:
            "http://img1.imgtn.bdimg.com/it/u=3090608441,3495105024&fm=26&gp=0.jpg",
          authorName: "XiaoMing"
        }
      ],
      worksType:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
   
   judge(that){
     console.log(that);
   }
  },
  created() {},
  mounted() {
    let loginId = sessionStorage.getItem("loginId");

    //作品类型数据
    this.$http
      .get("/api/portfolio/type/list")
      .then(res => {
        this.worksType = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
  
};
</script>
<style lang="less">
@import "./discover.less";
</style>