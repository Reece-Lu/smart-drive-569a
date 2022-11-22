<template>
  <div class="Login">
    <el-form ref="loginInfo" :model="loginInfo" label-width="80px">
<!--   The input box of username   -->
      <el-form-item>
        <el-input
          size="medium"
          style="margin: 0 0"
          prefix-icon="el-icon-user"
          v-model="loginInfo.username"
        ></el-input>
      </el-form-item>
<!--   The input box of password   -->
      <el-form-item>
        <el-input
          size="medium"
          style="margin: 0 0"
          prefix-icon="el-icon-lock"
          show-password
          v-model="loginInfo.password"
        ></el-input>
      </el-form-item>
      <!--  The button of 'Login'  -->
      <el-form-item style="width:100%;">
        <el-button type="primary"  autocomplete="off" style="width:100%;" @click="handleLogin">Login</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>

import { loginrequest } from '@/api/Login'

export default {
  name: 'Login',
  data () {
    return {
      loginInfo: {
        username: '',
        password: ''
      },
      userName: '',
      userId: ''
    }
  },
  created () {
    navigator.geolocation.getCurrentPosition(res => {
      console.log(res)
    }, err => {
      console.log(err)
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  },
  methods: {
    handleLogin () {
      console.log(this.loginInfo)
      loginrequest(this.loginInfo).then(res => {
        // console.log(res)
        // 释放路由守卫
        localStorage.setItem('isLogin', '1')
        localStorage.setItem('user', JSON.stringify(res))
        res = JSON.stringify(res)
        this.userId = res.id
        this.userName = res.username
        console.log(this.userId + 'from login')
        this.$store.commit('setUserId', this.userId)
        this.$store.commit('setUserName', this.userName)
        this.$router.push('/homepage')
      }).catch(() => {
        this.$message.error('error inputs')
      })
    }
  }
}

</script>
