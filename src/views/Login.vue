<template>
  <div class="Login bg-light">
    <nav class="navbar navbar-expand-lg fixed-top bg-light">
      <div class="container-fluid">
        <a class="navbar-brand mb-0 h1" href="#">Smart Drive</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Our Team</a></li>
                <li><a class="dropdown-item" href="#">Our Story</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <a class="nav-link active" aria-current="page" href="#">
            <img src="..\..\favicon_io\user.png" alt="icon" width="30" height="30">
          </a>
        </div>
      </div>
    </nav>
    <div class="row  bg-dark ">
      <div class="col-lg-6" id="ad">
        <div class="d-flex justify-content-center">
          <h1 class="display-1 font-weight-bold text-light text-center">Location Based Smart Drive</h1>
        </div>
        <div class="container" id="learnmore">
          <div class="row">
            <div class="col text-center">
              <button type="button" class="btn btn-light btn-lg" @click="viewCards()">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6" >
        <div id="signin">
          <p class="h2 d-flex justify-content-center text-light">Sign In</p>
        </div>
        <div style="display: flex; justify-content: center">
          <form class="col-lg-6">
            <div class="mb-3  ">
              <label for="exampleInputEmail1" class="form-label text-light">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label text-light">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <div class="row">
                <div class="col" style="display: flex; justify-content: flex-start">
                  <label class="form-check-label text-light" for="exampleCheck1">Remember Me</label>
                </div>
                <div class="col" style="display: flex; justify-content: flex-end">
                  <div id="emailHelp" class="form-text text-muted">Forget Password?</div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-light" id="loginbtn" @click="handleLogin">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="row bg-light" id="logincards">
      <div class="col-lg-4 d-flex justify-content-center" id="card1">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Show some technologies we used. asdfghjklsdfghjklkjhgfdsdfghjk</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 d-flex justify-content-center" id="card2">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">And here</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 d-flex justify-content-center" id="card3">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">And here</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
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
      localStorage.setItem('isLogin', '1')
      this.$router.push('/homepage')
      // loginrequest(this.loginInfo).then(res => {
      // //console.log(res)
      // //释放路由守卫
      // localStorage.setItem('isLogin', '1')
      // localStorage.setItem('user', JSON.stringify(res))
      // this.userId = res.id
      // this.userName = res.userName
      // console.log(this.userId + 'from login')
      // this.$store.commit('setUserId', this.userId)
      // this.$store.commit('setUserName', this.userName)
      // this.$router.push('/homepage')
      // this.$notify({ type: 'success', message: 'Welcome！' })
      // }).catch(() => {
      // this.$message.error('error inputs')
      // })
    },
    viewCards () {
      window.scrollTo(0, document.body.scrollHeight)
    }
  }
}

</script>
