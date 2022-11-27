<template>
  <div class="Homepage bg-dark">
  <el-container>
      <el-container>
        <el-header>Header</el-header>
        <el-aside width="200px">
          <input ref="uploadFile" type="file" name="file" id="file"  @change="changeImage($event)" />
        </el-aside>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <nav class="navbar navbar-expand-lg fixed-top bg-light">
      <div class="container-fluid">
        <a class="navbar-brand mb-0 h1" href="#" @click="backtoLogin()">Smart Drive</a>
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
          <a class="nav-link active" aria-current="page" href="#" @click="backtoLogin">
            Logout
          </a>
        </div>
      </div>
    </nav>
    <div id="mycloud">
      <p class="h3 d-flex text-light">My Cloud</p>
    </div>
    <div id="sortby">
      <p class="h6 d-flex text-light" id="sortbytext">Sort By</p> <a class="dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a><ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Time</a></li><li><a class="dropdown-item" href="#">A-Z</a></li><li><a class="dropdown-item" href="#">Size</a></li></ul>
    </div>
    <div class="row" id="cards">
      <div class="col-lg-3 col-md-4 d-flex justify-content-center" id="card1">
        <div class="card bg-light" id="card" style="width: 14rem; height: 14rem;">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <img src="..\..\favicon_io\yellow_folder.png" alt="foldericon" width="80" height="80">
              </div>
              <div class="col" style=" text-align:right;">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Star</a></li>
                  <li><a class="dropdown-item" href="#">Download</a></li>
                  <li><a class="dropdown-item" href="#">Delete</a></li>
                </ul>
              </div>
            </div>
            <h5 class="card-title" id="ctitle">Victoria</h5>
            <hr style="width:50%;height:2px;border-width:0;color:black;background-color:black">
            <h6 class="card-subtitle mb-2 text-secondary">21 Mb</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFileLists } from '@/api/File'
import axios from 'axios'
export default {
  name: 'HomePage',
  data () {
    return {
      fileBag: {
        file: '',
        location: '',
        userId: ''
      },
      formData: '',
      fileinfo: {
        userId: '',
        location: 'Victoria',
        fileName: 'picture1'
      },
      fileLists: [],
      locationInfo: ''
    }
  },
  created () {
    this.load()
    this.getCity()
    this.locationInfo = JSON.parse(localStorage.getItem('user')).id
    console.log(this.locationInfo)
  },
  methods: {
    async getCity () {
      const request = await fetch('https://ipinfo.io/json?token=63ac89015f93a6')
      const jsonResponse = await request.json()
      this.locationInfo = jsonResponse.city
      console.log(this.locationInfo)
    },
    load () {
      this.fileinfo.userId = JSON.parse(localStorage.getItem('user')).id
      getFileLists(this.fileinfo.userId).then(res => {
        this.fileLists = res
        console.log(this.fileLists)
      })
    },
    backtoLogin () {
      this.$router.push('/login')},
    changeImage (e) {
      this.fileBag.file = e.target.files[0]
      this.formData = new FormData()
      this.formData.append('file', this.$refs.uploadFile.files[0])
      this.formData.append('location', this.locationInfo)
      this.formData.append('userId', JSON.parse(localStorage.getItem('user')).id)
      console.log(this.fileBag.file)
      console.log(this.formData)

      axios({
        method: 'post',
        url: 'http://localhost:9090/smartdrive/files/upload/',
        data: this.formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then(res => {
        console.log(res)
      })
    }
  }

}
</script>
