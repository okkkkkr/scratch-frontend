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
              <img src="../../assets/images/personal/头像.jpg" alt />
            </div>
          </div>
        </div>
        <div class="setPass">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="新密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm()">提交</el-button>
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
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
    }
     var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          if (this.ruleForm.checkPass !== "") {
            this.$refs.ruleForm.validateField("checkPass");
          }
          callback();
        }
      };
    var validatePass2 = (rule, value, callback) => {
          if (value === "") {
            callback(new Error("请再次输入密码"));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error("两次输入密码不一致!"));
          } else {
            callback();
          }
        };
    return {
        activeIndex: "1",
        radio: "",
        sex: "",
        oldPwd:"",
        level: "",
        ruleForm: {
          pass: "",
          checkPass: "",
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
  
  watch: {},
  computed: {},
  methods: {
      submitForm() {
        let loginId = sessionStorage.getItem("loginId");
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
  mounted() {}
};
</script>

<style lang="less">
@import "./comment.less";
</style>