<template>
  <div class='HomePage'>
    Hello
<!--    <el-upload-->
<!--      class="avatar-uploader"-->
<!--      drag-->
<!--      action=""-->
<!--      :http-request="uploadfile"-->
<!--      :before-upload="beforeAvatarUpload"-->
<!--      name="fileData"-->
<!--      :show-file-list="false"-->
<!--      multiple>-->
<!--      <i class="el-icon-upload"></i>-->
<!--      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
<!--      <div class="el-upload__tip" slot="tip">不超过2MB</div>-->
<!--    </el-upload>-->
    <el-button @click="sumbitfileinfo">默认按钮</el-button>
  </div>
</template>

<script>

import { getFileLists, submitfileinfo } from '@/api/File'
export default {
  name: 'HomePage',
  data () {
    return {
      fileinfo: {
        userId: '',
        location: 'Victoria',
        fileName: 'picture1'
      },
      fileLists: []
    }
  },
  created () {
    this.load()
  },
  methods: {
    load () {
      this.fileinfo.userId = JSON.parse(localStorage.getItem('user')).id
      getFileLists(this.fileinfo.userId).then(res => {
        this.fileLists = res
        console.log(this.fileLists)
      })
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    sumbitfileinfo () {
      console.log(this.fileinfo)
      submitfileinfo(this.fileinfo).then(res => {
        console.log(res)
      })
      this.load()
    }
    // uploadfile (item) {
    //   const formData = new FormData()
    //   const file = item.file
    //   formData.append('file', file)
    //   console.log(formData)
    //   console.log(typeof (formData.file))
    //   uploadfile(formData).then(res => {
    //     console.log(res)
    //   })
    // },
    // beforeAvatarUpload (file) {
    //   const isLt2M = file.size / 1024 / 1024 < 2
    //   if (!isLt2M) {
    //     this.$message.error('上传图片大小不能超过 2MB!')
    //   }
    //   return isLt2M
    // },

  }

}

</script>
