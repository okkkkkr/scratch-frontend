<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="foot-cont row">
        <!-- 左侧内容 -->
        <div class="col-sm-9">
          <div class="container">
            <div class="row">
              <div class="col-sm-2">
                <ul>
                  <li class="foot-title">关于我们</li>
                  <li class="regulations">公司简介</li>
                  <li class="regulations">教师版</li>
                  <li class="regulations">新闻资讯</li>
                  <li class="regulations">招标公告</li>
                  <li class="regulations">加入我们</li>
                </ul>
              </div>
              <div class="col-sm-2">
                <ul>
                  <li class="foot-title">联系我们</li>
                  <li class="regulations">联系我们</li>
                  <li class="regulations">课程咨询</li>
                  <li class="regulations">合作方式</li>
                  <li class="regulations">媒体合作</li>
                </ul>
              </div>
              <div class="col-sm-2">
                <ul>
                  <li class="foot-title">其他服务</li>
                  <li class="regulations">更多工具</li>
                  <li class="regulations">设备检测</li>
                </ul>
              </div>
              <div class="col-sm-2">
                <ul>
                  <li class="foot-title">服务协议</li>
                  <li class="regulations">用户协议</li>
                  <li class="regulations">隐私协议</li>
                  <li class="regulations">免责声明</li>
                </ul>
              </div>
              <div class="col-sm-2">
                <ul>
                  <li class="foot-title">友情链接</li>
                  <li class="regulations">代码岛</li>
                  <li class="regulations">网易手游</li>
                </ul>
              </div>
              <div class="col-sm-2">
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧图标  -->
        <div class="col-sm-3 logo-cont">
          <span class="foot-logo">
            <img src="../../assets/images/login/wechat.png" alt />
          </span>
          <span class="foot-logo">
            <img src="../../assets/images/login/icon_QQ.png" alt />
          </span>
          <span class="foot-logo">
            <img src="../../assets/images/login/weibo.png" alt />
          </span>
        </div>
      </div>

      <div class="goverment">
        <div class="container">
          <div class="goverment">
            <a href="http://wljg.gdgs.gov.cn/" target="_blank">
              <img class="permit1" src="../../assets/images/homepage/govIcon.gif" alt />
            </a>
            <a href="http://www.beian.gov.cn/portal/index.do" target="_blank">
              <img src="../../assets/images/homepage/beian.png" alt />
            </a>
          </div>
          <div class="passInfo">
            <p class="foot-tips">欢迎使用可信网站验证</p>
            <p class="number">粤ICP备 15030912号</p>
            <p class="AnBei">粤公网安备 44030602003657号</p>
          </div>
          <p
            class="company"
          >珠海夸克科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2019 Zhuhai Quark Technology Limited. All right reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StuFooter",
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
  }
};
</script>
<style lang="less">
@import "./footer.less";
</style>