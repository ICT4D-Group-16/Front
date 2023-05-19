<template>
    <el-aside style="width: 150px;">
        <el-aside style="width: 150px;">
            <guide-bar></guide-bar>
        </el-aside>
    </el-aside>
    <el-main style="width: 900px">
        <div >
            <p class="recordingGuide"> You can find all our community phone recordings here! </p>


            <el-dialog v-model="dialogTableVisible" title="Record and Input Product">
                <el-form :model="form" label-width="150px">
                    <el-form-item label="Description">
                        <el-input v-model="form.description" />
                    </el-form-item>
                    <el-form-item label="Product price">
                        <el-input v-model="form.price" />
                    </el-form-item>
                    <el-form-item label="Quantity">
                        <el-input v-model="form.quantity" />
                    </el-form-item>
                  <el-form-item label="Modified Time">
                    <el-input v-model="form.modifiedTime" />
                  </el-form-item>
                  <el-form-item label="Production Date">
                    <el-input v-model="form.productionDate" />
                  </el-form-item>
                  <el-form-item label="Product Name">
                    <el-input v-model="form.productName" />
                  </el-form-item>
                  <el-form-item label="Published Status">
                    <el-input v-model="form.publishStatus" />
                  </el-form-item>

<!--                  <el-form-item label="Translates Language">-->
<!--                    <el-input v-model="form.translates[0].language" />-->
<!--                  </el-form-item>-->
<!--                  <el-form-item label="Translates Text">-->
<!--                    <el-input v-model="form.translates[0].text" />-->
<!--                  </el-form-item>-->

                  <div class="drag-drop" style="width: 100%">
                    <div class="drag-drop-area" @dragover="handleDragOver" @drop="handleDrop">
                      <span>将播报语音拖拽到此处</span>
                    </div>
                    <input type="file" ref="fileInput" style="display: none" @change="handleFileSelect" accept="audio/mpeg">
                  </div>
                  <br>
                    <el-form-item>
                      <audio controls style="width: 70%">
                        <source :src="this.record_url" type="audio/mpeg">
<!--                        <source src="https://bucketeer-1a682029-f982-4755-8e3c-663c7658c9b8.s3.amazonaws.com/public/e501a298-86b5-4b17-b700-cabcef93de36-file_example_WAV_1MG.wav" type="audio/mpeg">-->
                      </audio>
<!--                      <p>{{ this.record_url}}</p>-->
                      <br><br>
                        <el-button type="success" @click="onSubmit">Create</el-button>
                        <el-button @click="onCancel" >Cancel</el-button>
                    </el-form-item>
                </el-form>
              <div>
                <el-button type="button" @click="startRecordAudio">开始录音</el-button>
                <h3>录音时长：{{ recorder.duration.toFixed(4) }}</h3>
                <br />
                <el-button type="button" @click="stopRecordAudio">停止录音</el-button>
                <el-button type="button" @click="playRecordAudio">播放录音</el-button>
<!--                <el-button type="button" @click="getPCBRecordAudioData"-->
<!--                >获取PCB录音数据</el-button-->
<!--                >-->
<!--                <el-button type="button" @click="downloadPCBRecordAudioData"-->
<!--                >下载PCB录音文件</el-button-->
<!--                >-->
<!--                <el-button type="button" @click="getWAVRecordAudioData"-->
<!--                >获取WAV录音数据</el-button-->
<!--                >-->
                <el-button type="button" @click="downloadWAVRecordAudioData"
                >下载WAV录音文件</el-button
                >
                <el-button type="button" @click="uploadWavDataName">upload audio name file</el-button>
                <el-button type="button" @click="uploadWAVDataDescription">upload audio description file</el-button>
                <br />
              </div>
            </el-dialog>

            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="recordingId" label="recordingId" width="120" />
                <el-table-column prop="phone" label="phone" width="180" />
                <el-table-column prop="createTime" label="createTime" width="260" />
<!--              <el-table-column prop="status" label="status" width="90" />-->
                <el-table-column label="Operations">
                    <template v-slot="{row}">
                        <el-button size="small" type="primary" @click="handleCheck(row.recordingId)">Check</el-button>
<!--                        <el-button size="small" type="success" @click="handleFinish(row.recordingId)">Finish</el-button>-->
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </el-main>
</template>

<script>
import GuideBar from "@/components/guideBar.vue";
import { ElMessage, ElMessageBox } from 'element-plus';
import { reactive } from 'vue';
import {getProductByRecordID, getRecord, recordingList, uploadWAVDataDescription, uploadWavDataName} from "../service/user";
import Recorder from "js-audio-recorder";

export default {

    name: "allProducts",
    components: {GuideBar},
    created() {
      this.fetchProductCateList()
    },
    data() {
        return {

          recorder: new Recorder({
            sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
            sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
            numChannels: 1, // 声道，支持 1 或 2， 默认是1
            // compiling: false,(0.x版本中生效,1.x增加中)  // 是否边录边转换，默认是false
          }),

            tableData: [
                {
                  recordingId: '2016-05-03',
                  phone: 'Tom',
                  url: '123456789',
                  createTime: '',
                  status: ''
                },
            ],
            dialogTableVisible: false,
            recordingId_to_sub: 0,
          productId_to_sub: 0,
            language_to_sub: 0,
            record_url: 'https://bucketeer-1a682029-f982-4755-8e3c-663c7658c9b8.s3.amazonaws.com/public/e501a298-86b5-4b17-b700-cabcef93de36-file_example_WAV_1MG.wav',
            form: reactive({
              "audios": '',
              "auditStatus": 1,
              "description": "my",
              "indate": "2023-05-16T20:09:56.360Z",
              "modifiedTime": "2023-05-16T20:09:56.360Z",
              "price": 1,
              "productId": 1,
              "productName": "string",
              "productionDate": "2023-05-16T20:09:56.360Z",
              "publishStatus": 1,
              "quantity": 1,
              "recordingId": 1,
              "supplierUserId": 1,
              "translates": [
                {
                  "createTime": "2023-05-16T20:09:56.360Z",
                  "language": "string",
                  "productId": 0,
                  "text": "string",
                  "translateId": 0
                }
              ]
            }),
        };
    },

    methods:{

        async fetchProductCateList(){
          await recordingList().then((res) => {
            let array = res.data
            console.log(array[0])
            this.tableData = array
          })
        },
        onSubmit(){
            console.log('submit!')
        },
        onCancel(){
            this.dialogTableVisible = false;
        },
        handleCheck(recordingId) {
            this.dialogTableVisible = true;
            this.recordingId_to_sub = recordingId

          // For test
          // console.log(recordingId)

          // getRecord(recordingId)
          //     .then(response => {
          //       console.log(response.data)
          //       console.log(1)
          //       // reduce internet cost
          //       this.record_url = this.tableData.find(item => item.recordingId===13).url
          //       this.form = response.data;
          //     })
          //     .catch(error => {
          //       console.error('Error:', error);
          //     });
          console.log('Clicked row:', recordingId)

          getProductByRecordID(recordingId)
              .then(response => {
                // console.log(response.data)
                // reduce internet cost
                this.record_url = this.tableData.find(item => item.recordingId===13).url
                this.productId_to_sub = response.data.productId
                this.form = response.data;
              })
              .catch(error => {
                console.error('Error:', error);
              });
          console.log('Clicked row:', recordingId)
        },
        handleFinish: (row) => {
            ElMessageBox.confirm(
                'This task will be omitted, Continue?',
                'Warning',
                {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning',
                }
            )
                .then(() => {
                    ElMessage({
                        type: 'success',
                        message: 'Delete completed',
                    })
                })
                .catch(() => {
                    ElMessage({
                        type: 'info',
                        message: 'Delete canceled',
                    })
                })
            console.log('Clicked row:', row)
        },

      methods: {

        handleDragOver(event) {
          event.preventDefault();
        },
        handleDrop(event) {
          event.preventDefault();
          const file = event.dataTransfer.files[0];
          this.uploadFile(file);
        },
        handleFileSelect() {
          const file = this.$refs.fileInput.files[0];
          this.uploadFile(file);
        },
        uploadFile(file) {
          // 执行上传文件的操作
          console.log('上传文件:', file);
        }
      },

      //开始录音
      startRecordAudio() {
        Recorder.getPermission().then(
            () => {
              console.log("开始录音");
              this.recorder.start(); // 开始录音
            },
            (error) => {
              this.$message({
                message: "请先允许该网页使用麦克风",
                type: "info",
              });
              console.log(`${error.name} : ${error.message}`);
            }
        );
      },
      //停止录音
      stopRecordAudio() {
        console.log("停止录音");
        this.recorder.stop();
      },
      //播放录音
      playRecordAudio() {
        console.log("播放录音");
        this.recorder.play();
      },
      //获取PCB录音数据
      getPCBRecordAudioData() {
        var pcmBlob = this.recorder.getPCMBlob();
        console.log(pcmBlob);
      },
      //获取WAV录音数据
      getWAVRecordAudioData() {
        var wavBlob = this.recorder.getWAVBlob();
        console.log(wavBlob);
      },
      //下载PCB录音文件
      downloadPCBRecordAudioData() {
        this.recorder.downloadPCM("badao");
      },
      //下载WAV录音文件
      downloadWAVRecordAudioData() {
        this.recorder.downloadWAV(new Date().getTime() + '');
      },
      //上传wav录音数据
      uploadWavDataName() {
        var wavBlob = this.recorder.getWAVBlob();
        // 创建一个formData对象
        var formData = new FormData()
        // 此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为file塞入formData
        const newbolb = new Blob([wavBlob], {type: 'audio/wav'})
        //获取当时时间戳作为文件名
        const fileOfBlob = new File([newbolb], new Date().getTime() + '.wav')
        formData.append('productId', this.productId_to_sub)
        formData.append('language', 'english')
        // formData.append('file', fileOfBlob)
        formData.append("file", fileOfBlob, new Date().getTime() + '.wav');

        console.log(formData)
        uploadWavDataName(formData).then((response) => {
          console.log(response);
        });
      },

      uploadWAVDataDescription() {
        var wavBlob = this.recorder.getWAVBlob();
        // 创建一个formData对象
        var formData = new FormData()
        // 此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为file塞入formData
        const newbolb = new Blob([wavBlob], {type: 'audio/wav'})
        //获取当时时间戳作为文件名
        const fileOfBlob = new File([newbolb], new Date().getTime() + '.wav')
        formData.append('productId', this.recordingId_to_sub)
        formData.append('language', this.language_to_sub)
        // formData.append('file', fileOfBlob)
        formData.append("file", fileOfBlob, new Date().getTime() + '.wav');

        console.log(formData)
        uploadWAVDataDescription(formData).then((response) => {
          console.log(response);
        });
      },
    },
}
</script>

<style scoped>
.recordingGuide{
    margin-top: 40px;
    margin-bottom: 40px;
    color: #181818;
    font-size: 20px;
    font-weight: bold;
}

 .drag-drop {
   width: 300px;
   height: 200px;
   border: 2px dashed #ccc;
   border-radius: 4px;
   display: flex;
   justify-content: center;
   align-items: center;
 }

.drag-drop-area {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
