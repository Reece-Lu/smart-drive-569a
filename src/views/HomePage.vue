<template>
  <div>
  <el-container>
      <el-container>
        <el-header>
          <div id = 'headerBox'>
            <p id = 'textInHeader'>Welcome to Smart Drive</p>
          </div>
        </el-header>
        <el-main id = 'mainBox'>
          <input ref="uploadFile" type="file" name="file" id="file"  @change="changeImage($event)" />
          <div class="container-fluid">
            <a class="navbar-brand mb-0 h1" href="#" @click="backtoLogin()">Smart Drive</a>
          </div>
        </el-main>
      </el-container>
    </el-container>
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
      locationInfo: '',
      cityList: []
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
      var j = 0
      var i = 0
      for (i = 0; i < this.fileLists.length; i++) {
        for (j = 0; j < this.cityList.length; j++) {
          if (this.fileLists[i] === this.cityList[j]) {
            break
          }
          if (j === this.cityList.length - 1) {
            this.cityList.push(this.fileLists[i])
          }
        }
      }
      console.log('100' + this.cityList)
    },
    backtoLogin () {
      this.$router.push('/login')
    },
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

<style>
 #headerBox {
   //background-color: white;
   height: 60px;
   border-style: solid;
   border-color: green;
}
 #textInHeader{
   margin-left: 20px;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 20px;
   margin-top: 10px;
 }
 #mainBox{
   height:600px;
   width: 1200px;
   border-style: solid;
   border-color: black;
 }
 .demo-table-expand {
   font-size: 0;
 }
 .demo-table-expand label {
   width: 90px;
   color: #99a9bf;
 }
 .demo-table-expand .el-form-item {
   margin-right: 0;
   margin-bottom: 0;
   width: 50%;
 }
</style>
