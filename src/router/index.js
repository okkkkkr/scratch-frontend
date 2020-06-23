import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      redirect: '/user'
    },
    //官方主页
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/User/user.vue'),
      meta: {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    },
    //登录注册
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/login.vue'),
      // component: () => import('@/views/User/user.vue'),
      // component: () => import('@/views/Admin/admin.vue'),
      meta: {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      children: [
        {
          path: 'log-form',
          name: 'log-form',
          component: () => import('@/views/Login/login-form.vue'),
          meta: {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
        },
        {
          path: 'reg-form',
          name: 'reg-form',
          component: () => import('@/views/Login/reg-form.vue'),
          meta: {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
        },
        {
          path:'setpwd',
          name:'setpwd',
          component: () => import('@/views/Login/pwd-setting.vue'),
          meta: {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
        },
      ],
    },
    //学生主页
    {
      path: '/stuPage',
      name: 'stuPage',
      component: () => import('@/views/StuPage/stuPage.vue'),
      meta: {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      children:[
        {
          path: 'mainPage',
          name: 'mainPage',
          component: () => import('@/views/StuHomePage/stuMain.vue'),
          meta: {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import('@/views/Personal/personal.vue'),
          meta: {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
        },
        {
          path: 'perInfo',
          name: 'perInfo',
          component: () => import('@/views/Personal/infoSetting.vue'),
          meta: {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
          children:[
            {
              path: 'basicSet',
              name: 'basicSet',
              component: () => import('@/views/Personal/basic.vue'),
              meta: {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
              },
            },
            {
              path: 'SetPwd',
              name: 'SetPwd',
              component: () => import('@/views/Personal/setPwd.vue'),
              meta: {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
              },
            },
          ]
        }
      ]
    },
    //教师主页
    {
      path:"/teacher",
      name:"teacher",
      component: () =>  import('@/views/Admin/Teacher.vue'),
      meta: {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
    },
    //管理员
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/Admin/admin.vue'),

      children: [
        //教师管理
        {
          path: 'TeaInfo',
          name: 'TeaInfo',
          component: () => import('@/views/Admin/UserCharge/TeaCharge.vue'),
          meta: {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
        },
        // {
        //   path: 'ClassState',
        //   name: 'ClassState',
        //   component: () => import('@/views/TeacherCharge/class-state.vue')
        // },

        //班级管理
        // {
        //   path: 'Assignment',
        //   name: 'Assignment',
        //   component: () => import('@/views/ClassCharge/class-assignment.vue')
        // },
        // {
        //   path: 'BatchReg',
        //   name: 'BatchReg',
        //   component: () => import('@/views/ClassCharge/batch-register.vue')
        // },

        //学生管理
        {
          path: 'StuInfo',
          name: 'StuInfo',
          component: () => import('@/views/Admin/UserCharge/stuCharge.vue'),
          meta: {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
        },
        // {
        //   path: 'StuActive',
        //   name: 'StuActive',
        //   component: () => import('@/views/StudentCharge/student-active.vue')
        // },
        // {
        //   path: 'StuPerform',
        //   name: 'StuPerform',
        //   component: () => import('@/views/StudentCharge/student-perform.vue')
        // },

        //管理员管理
        {
          path: 'AdminInfo',
          name: 'AdminInfo',
          component: () => import('@/views/Admin/UserCharge/AdminCharge.vue'),
          meta: {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
        },
 
        //课程管理
        // {
        //   path: 'ObjCharge',
        //   name: 'ObjCharge',
        //   component: () => import('@/views/ObjectCharge/object-charge.vue')
        // },

        //访问数据
        // {
        //   path: 'VisitData',
        //   name: 'VisitData',
        //   component: () => import('@/views/VisitData/visit-data.vue')
        // }
      ]
    }
  ]
})
