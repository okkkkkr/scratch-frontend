<template>
  <div class="info-wrapper card">
    <div class="bg-img card-header">
      <img src="../../assets/images/personal/large.jpg" alt />
    </div>
    <div class="card-body">
      <div class="info-cont container">
        <div class="row">
          <div class="col-sm-1">
            <div class="head-img">
              <img :src="`http://39.108.222.204:8089/common/static/${userInfo.icon}`" alt />
            </div>
          </div>
          <div class="col-sm-11 personal-pro disabledWrapper">
            <span class="disableCont">用户ID: {{ userID }}</span>
            <div class="EngineerLevel">
              <img src="../../assets/images/personal/engineer.png" alt />
              <span class="level">{{ level }}</span>
            </div>
          </div>
        </div>
        <div class="setForm">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >

          <el-form-item>
            <el-radio-group style="float:left;"  v-model="radio">
              <el-radio :label="0">女</el-radio>
              <el-radio :label="1">男</el-radio>
            </el-radio-group>
            </el-form-item>
            <el-row :gutter="22">
              <!-- 表格左侧 -->
              <el-col :span="11">
                <el-form-item label="用户名称" prop="name">
                  <el-input :placeholder="userInfo.name" v-model="ruleForm.name"></el-input>
                </el-form-item>

                <el-form-item label="手机号码" prop="phone">
                  <el-input :placeholder="userInfo.phone" v-model="ruleForm.phone"></el-input>
                </el-form-item>

                <el-form-item label="出生日期" prop="birthday">
                  <el-date-picker
                    v-if="userInfo.birthday"
                    type="date"
                    :placeholder="userInfo.birthday"
                    v-model="ruleForm.birthday"
                    style="width: 100%;"
                  ></el-date-picker>

                  <el-date-picker
                    v-else
                    type="date"
                    placeholder="请选择出生日期（将通过年龄推荐合适该年龄段的课程，请如实填写）"
                    @change="caculate(2)"
                    v-model="ruleForm.birthday"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>

                <el-form-item label="就读院校" prop="academy">
                  <el-input
                    v-if="userInfo.guardian"
                    :placeholder="userInfo.guardian"
                    v-model="ruleForm.guardian"
                  ></el-input>
                  <el-input v-else placeholder="请填写当前学校名称" v-model="ruleForm.guardian"></el-input>
                </el-form-item>

                <el-form-item label="监护人" prop="guardian">
                  <el-input
                    v-if="userInfo.guardianPhone"
                    :placeholder="userInfo.guardianPhone"
                    v-model="ruleForm.guardianPhone"
                  ></el-input>
                  <el-input v-else placeholder="请填写监护人姓名" v-model="ruleForm.guardianPhone"></el-input>
                </el-form-item>

                <el-form-item label="父母工作" prop="workAreas">
                  <el-input
                    v-if="userInfo.workAreas"
                    :placeholder="userInfo.workAreas"
                    v-model="ruleForm.workAreas"
                  ></el-input>
                  <el-input v-else placeholder="填写工作领域即可" v-model="ruleForm.workAreas"></el-input>
                </el-form-item>
              </el-col>
              <!-- 表格右侧 -->
              <el-col :span="11">
                <el-form-item label="所在地" prop="address">
                  <el-input
                    v-if="userInfo.address"
                    :placeholder="userInfo.address"
                    v-model="ruleForm.address"
                  ></el-input>
                  <el-input v-else placeholder="请填写居住地市级即可，如XX省XX市" v-model="ruleForm.address"></el-input>
                </el-form-item>

                <el-form-item label="Email" prop="email">
                  <el-input
                    v-if="userInfo.email"
                    :placeholder="userInfo.email"
                    v-model="ruleForm.email"
                  ></el-input>
                  <el-input v-else placeholder="请输入邮箱账号" v-model="ruleForm.email"></el-input>
                </el-form-item>

                <el-form-item label="年龄" prop="age">
                  <el-input v-if="caculate(1)" disabled v-model="ruleForm.age"></el-input>
                  <el-input v-else disabled v-model="ruleForm.age"></el-input>
                </el-form-item>

                <el-form-item label="当前学历" prop="education">
                  <el-input
                    v-if="userInfo.education"
                    :placeholder="userInfo.education"
                    v-model="ruleForm.education"
                  ></el-input>
                  <el-input v-else placeholder="请选择当前学历" v-model="ruleForm.education"></el-input>
                </el-form-item>

                <el-form-item label="联系电话" prop="income">
                  <el-input
                    v-if="userInfo.guardianPhone"
                    :placeholder="userInfo.guardianPhone"
                    v-model="ruleForm.guardianPhone"
                  ></el-input>
                  <el-input v-else placeholder="请填写监护人联系电话" v-model="ruleForm.guardianPhone"></el-input>
                </el-form-item>

                <el-form-item label="家庭收入" prop="income">
                  <el-input
                    v-if="userInfo.income"
                    :placeholder="userInfo.income"
                    v-model="ruleForm.income"
                  ></el-input>
                  <el-input
                    v-else
                    placeholder="年收入总额（将通过经济条件推荐性价高的课程，请如实填写）"
                    v-model="ruleForm.income"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="学习目标" prop="aims">
              <el-input v-if="userInfo.aims" :placeholder="userInfo.aims" v-model="ruleForm.aims"></el-input>
              <el-input v-else placeholder="输入内容请保持在50字以内" v-model="ruleForm.aims"></el-input>
            </el-form-item>
            <el-form-item label="个人标签" prop="profile">
              <el-input
                v-if="userInfo.profile"
                :placeholder="userInfo.profile"
                type="textarea"
                v-model="ruleForm.profile"
              ></el-input>
              <el-input
                v-else
                placeholder="输入内容请保持在100字以内"
                type="textarea"
                v-model="ruleForm.profile"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm()">立即修改</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      activeIndex: "1",
      radio: "",
      userID:"",
      sex: "",
      level: "",
      userInfo: {},
      ruleForm: {
        name: "",
        phone: "",
        academy: "",
        sex: "",
        age: "",
        level: "",
        workAreas: "",
        profile: "",
        aims: "",
        background: "",
        address: "",
        guardian: "",
        guardianPhone: "",
        income: ""
      },
      rules: {
        name: [
          { required: false, message: "请输入用户名称", trigger: "blur" },
          {
            min: 4,
            max: 12,
            message: "长度在 4 到 12 个字符之间",
            trigger: "change"
          }
        ],
        profile: [
          {
            min: 0,
            max: 100,
            message: "输入内容请保持在100字以内",
            trigger: "change"
          }
        ],
        aims: [
          {
            min: 0,
            max: 50,
            message: "输入内容请保持在50字以内",
            trigger: "change"
          }
        ],
        phone: [
          {
            type: "array",
            required: false,
            message: "请填写您的联系电话",
            trigger: "change"
          },
          {
            min: 11,
            max: 11,
            message: "请输入正确的11位电话号码",
            trigger: "change"
          }
        ],
        guardianPhone: [
          {
            required: false,
            message: "请填写监护人的联系电话",
            trigger: "change"
          },
          {
            min: 11,
            max: 11,
            message: "请输入正确的11位电话号码",
            trigger: "change"
          }
        ],
        email: [
          { required: false, message: "请填写邮箱账号", trigger: "change" }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    caculate(flag) {
      if (flag === 1) {
        if (this.userInfo.age) {
          this.ruleForm.age = this.userInfo.age;
          return true;
        } else {
          return false;
        }
      }
      if (flag === 2) {
        let date = new Date();
        let Year = date.getFullYear();
        let birth = this.ruleForm.birthday.getFullYear();
        this.ruleForm.age = Year - birth;
        console.log("age===>" + this.ruleForm.age);
      }
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
    },

    submitForm() {
      let loginId = sessionStorage.getItem("loginId");
      console.log(object);
      this.$http
        .post(`/api/userInfo/update/${loginId}`, this.ruleForm)
        .then(res => {
          this.$message({
            message: "修改成功",
            type: "success"
          });
        })
        .catch(err => {
          console.log(err);
          this.$message.error("修改失败");
        });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },

  created() {},
  mounted() {
    let userId = sessionStorage.getItem("loginId");
    this.userID = userId;
    this.$http
      .get(`/api/userInfo/${userId}`)
      .then(res => {
        this.userInfo = res.data.data;
        this.ruleForm = this.userInfo;
        this.radio = this.userInfo.sex
        console.log(this.radio);
        console.log("--------ruleForm------------");
        console.log(res);
        console.log(this.ruleForm);
        //判断等级,性别
        this.Judge();
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less">
@import "./comment.less";
</style>