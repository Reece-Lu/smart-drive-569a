<template>
  <div class='HomePage'>
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
