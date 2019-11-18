<template>
  <div class="wrapper">
    <div class="contact-us">
      <a href>
        <img src="../../assets/mail.png" />
      </a>
    </div>
    <div class="items">
      <div class="cont-area">
        <div class="container banner-area">
          <br />
          <br />
          <br />
          <br />
          <br />
          <ul class="slides clearfix">
            <li style="list-style:none;">
              <h1>Upower</h1>
              <br />
              <h5>一个基于scratch的少儿编程平台</h5>
              <br />
              <br />
              <br />
              <div class="large-button">
                <button type="button" class="btn btn-default large-button">
                  <a href>
                    <font style="font-size:24px;">免费开始</font>
                  </a>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="banner-btm-img">
        <img src="../../assets/jackets.png" alt />
      </div>
    </div>

    <div class="slogan-area text-center">
      <div class="section-spacing about-top-area">
        <div class="container">
          <div style="margin-top: 7rem">
            <h2>图形化的在线编程</h2>
            <br />
            <h5>
              运用
              <a
                href="https://baike.baidu.com/item/%E5%A4%A7%E4%BA%94%E4%BA%BA%E6%A0%BC%E7%90%86%E8%AE%BA/7065662?fr=aladdin"
                target="_blank"
                style="color:#32a7b8;"
              >大五人格</a>
              理论进行相应的课程设计，分析您孩子发展状况
            </h5>
            <h5>关注孩子的健康成长</h5>
          </div>
          <div class="divider_line"></div>
        </div>
      </div>
    </div>

    <div class="driver_line"></div>

    <div class="introduct-area text-center">
      <div class="section-spacing">
        <div class="container">
          <h2 class="text-center mb-5">介绍</h2>
        </div>

        <div class="container online-edit">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <h3>线上编译</h3>
              <br />
              <h5 class="text-center">搭载基于scratch的线上编辑工具，方便孩子进行在线学习，课后复习等。</h5>
            </div>

            <div class="col-lg-7">
              <img class="img-fluid" src="../../assets/OnlineEdit.png" alt />
            </div>
          </div>
        </div>

        <div class="driver_line"></div>

        <div class="container teacher-resoure">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <h3>师资力量</h3>
              <br />
              <h5 class="text-center">Upower幼儿编程教育的教师，都来自不通国家的名师，并且对大五人格理论有较为深入的了解，致力于孩子的健康发展。</h5>
            </div>

            <div class="col-lg-7">
              <img class="img-fluid" src="../../assets/TeacherResoure.png" alt />
            </div>
          </div>
        </div>

        <div class="driver_line"></div>

        <div class="container funny-game">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <h3>趣味竞赛</h3>
              <br />
              <h5 class="text-center">Upower幼儿编程教育平台将会联合各大平台、院校，定期举行幼儿编程竞赛，胜出的孩子将会获得丰厚的礼品以及平台热</h5>
            </div>

            <div class="col-lg-7">
              <img class="img-fluid" src="../../assets/FunnyGame.png" alt />
            </div>
          </div>
        </div>

        <div class="driver_line"></div>

        <div class="container study-plan">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <h3>学习计划</h3>
              <br />
              <h5 class="text-center">每位孩子都会将会获得一份为其量身订造的学习计划，针对性的纠正成长过程中的问题。</h5>
            </div>

            <div class="col-lg-7">
              <img class="img-fluid" src="../../assets/StudyPlan.png" alt />
            </div>
          </div>
        </div>
      </div>

      <div class="driver_line"></div>

      <div class="container report">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <h3>详细报告</h3>
            <br />
            <h5 class="text-center">每次课程结束后，家长将会收到一份详细的学习报告。并且在每期课程结束后，家长将会得到专属于您的孩子的成长分析报告。</h5>
          </div>

          <div class="col-lg-7">
            <img class="img-fluid" src="../../assets/Report.png" alt />
          </div>
        </div>
      </div>

      <div class="driver_line"></div>

      <div class="text-center">
          <div class="section-spacing">
              <div class="container">
                  <div class="row align-items-center">
                      <div class="col-lg-12">
                          <img src="../../assets/suibian.png" alt="">
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="driver_line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
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
.contact-us {
  position: fixed;
  top: 830px;
  left: 1750px;
  animation: Wave 3s ease-in-out infinite;
}
.driver_line {
  width: 200px;
  border-bottom: 2px solid #32a7b8;
  margin: 4rem auto;
}
.items {
  background-color: #32a7b8;
}
.slides,
.slides h1,
.slides h5,
.slides a {
  color: white;
  margin: 0;
  padding: 0;
}
.slides h1:hover,
.slides h5:hover {
  cursor: default;
}
h1 {
  font-size: 72px;
}
h2 {
  font-size: 60px;
}
h5 {
  font-size: 24px;
}
.large-button {
  background-color: #f1723b;
  width: 200px;
  height: 60px;
  border-radius: 5px;
  margin: 0 auto;
}
.large-button:hover {
  animation: BtnColorChange 3s linear infinite;
}
@keyframes Wave {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-30deg);
  }

  75% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes BtnColorChange {
  0% {
    background-color: #f1723b;
  }
  50% {
    background-color: #fa9536;
  }
  100% {
    background-color: #f1723b;
  }
}
.slogan-area a:hover {
  animation: colorChange 3s linear infinite;
}
@keyframes colorChange {
  0% {
    color: #32a7b8;
  }
  50% {
    color: #268185;
  }
  100% {
    color: #32a7b8;
  }
}
</style>