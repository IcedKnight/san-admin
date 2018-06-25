<template>
<div>
  <el-popover
      ref="popover"
      placement="bottom"
      title="上传"
      width="600"
      trigger="click">
        <el-upload
          drag
          ref="upload"
          action="https://upload.qiniup.com"
          :data= "uploadToken"
          name="file"
          :auto-upload="true">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
        </el-upload>        
    </el-popover>

    <div class="app-container">

      
      <el-button v-popover:popover  style="margin-left: 10px;" size="small">文件上传</el-button>
    </div>      
</div>

</template>

<script>
// import Http from '@/utils/http'
export default {
  data () {
    return {
      uploadToken: {
        token: ''
      }
    }
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit()
    }
  },
  created () {

  }
}
</script>

<style>

</style>
