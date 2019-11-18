import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      redirect: '/education/login'
    },
    //登录注册
    {
      path: '/education/login',
      name: 'login',
      component: () => import('@/views/User/user.vue')
    },
    {
      path: '/education/register',
      name: 'register',
      component: () => import('@/views/Login/register.vue')
    },

    //管理员
    {
      path: '/education/admin',
      name: 'admin',
      component: () => import('@/views/Admin/admin.vue'),

      children:[
        //教师管理
        {
          path: 'TchDynamic',
          name: 'TchDynamic',
          component: () => import('@/views/TeacherCharge/tch-dynamic.vue')
        },
        {
          path: 'ClassState', 
          name: 'ClassState',
          component: () => import('@/views/TeacherCharge/class-state.vue')
        },
        
        //班级管理
        {
          path: 'ClassAssignment',
          name: 'ClassAssignment',
          component: () => import('@/views/ClassCharge/class-assignment.vue')
        },
        {
          path: 'BatchRegister',
          name: 'BatchRegister',
          component: () => import('@/views/ClassCharge/batch-register.vue')
        },

        //学生管理
        {
          path: 'StudentInfo',
          name: 'StudentInfo',
          component: () => import('@/views/StudentCharge/student-info.vue')
        },
        {
          path: 'StudentActive',
          name: 'StudentActive',
          component: () => import('@/views/StudentCharge/student-active.vue')
        },
        {
          path: 'StudentPerform',
          name: 'StudentPerform',
          component: () => import('@/views/StudentCharge/student-perform.vue')
        },

        //课程管理
        {
          path: 'ObjectCharge',
          name: 'ObjectCharge',
          component: () => import('@/views/ObjectCharge/object-charge.vue')
        },

        //访问数据
        {
          path: 'VisitData',
          name: 'VisitData',
          component: () => import('@/views/VisitData/visit-data.vue')
        }
      ]
    }
  ]
})
