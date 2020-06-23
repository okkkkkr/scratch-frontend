var userName = /^[a-zA-Z0-9_-]{4,16}$/  //用户名正则，4到16位（字母，数字，下划线，减号）
var userPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/ //6到12位,包含大小写字母和数字的组合
var Email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ //Email正则表达式
var Phone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/ //手机号正则表达式
var IDCard = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/ //身份证正则表达式

var FormValidate = (function() {
    function FormValidate() { }

    FormValidate.Login = function () {
        return {
            // 学生用户名
            userName: function (rule, value, callback) {
                if (!value) {
                    return callback(new Error('账号不能为空！'))
                }
                if (!userName.test(value)) {
                    if(!userPwd.test(value)){
                        return callback(new Error('请输入正确的邮箱或手机号！'))
                    }
                } else {
                    callback()
                }
            },

            //密码验证
            Password: function(rule, value, callback) {
                if (!value) {
                    return callback(new Error('密码不能为空！'))
                }
                if(!userPwd.test(value)){
                    return callback(new Error('请输入6到12位,包含大小写字母和数字的组合'))
                }else{
                    callback()
                }
            },

            // //手机号码验证
            // Tel: function(rule, value, callback) {
            //     if (!value) {
            //         return callback(new Error('账号不能为空！'))
            //     }
            //     if(!Phone.test(value)){
            //         return callback(new Error('请输入11位手机号码'))
            //     }else{
            //         callback()
            //     }
            // },
        }
    }

    return FormValidate
})

exports.FormValidate = FormValidate