<template>
  <div class="Login">
    <el-form ref="form" model="loginInfo" label-width="80px">
<!--   The input box of username   -->
      <el-form-item prop="userName">
        <el-input
          size="medium"
          style="margin: 0 0"
          prefix-icon="el-icon-user"
          v-model="loginInfo.userName"
        ></el-input>
      </el-form-item>
<!--   The input box of password   -->
      <el-form-item prop="password">
        <el-input
          size="medium"
          style="margin: 0 0"
          prefix-icon="el-icon-lock"
          show-password
          v-model="loginInfo.password"
        ></el-input>
      </el-form-item>
    </el-form>
<!--  The button of 'Login'  -->
    <el-form-item style="width:100%;">
      <el-button type="primary"  autocomplete="off" style="width:100%; margin-top: 5vh" @click="handleLogin">Login</el-button>
    </el-form-item>
  </div>
</template>

<script>

import { loginrequest } from '@/api/Login'

export default {
  name: 'Login',
  data () {
    return {
      loginInfo: {
        userName: '',
        password: ''
      },
      userName: '',
      userId: ''
    }
  },
  methods: {
    handleLogin () {
      loginrequest(this.loginInfo).then(res => {
        // console.log(res)
        // 释放路由守卫
        localStorage.setItem('isLogin', '1')
        localStorage.setItem('user', JSON.stringify(res))
        this.userId = res.id
        this.userName = res.userName
        console.log(this.userId + 'from login')
        this.$store.commit('setUserId', this.userId)
        this.$store.commit('setUserName', this.userName)
        this.$router.push('/homepage')
        this.$notify({ type: 'success', message: 'Welcome！' })
      }).catch(() => {
        this.$message.error('error inputs')
      })
    }
  }
}

</script>
