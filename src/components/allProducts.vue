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
                <el-form :model="form" label-width="120px">
                    <el-form-item label="Product name">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="Product price">
                        <el-input v-model="form.price" />
                    </el-form-item>
                    <el-form-item label="Product name">
                        <el-input v-model="form.amount" />
                    </el-form-item>
                    <el-form-item label="Activity zone">
                        <el-select v-model="form.region" placeholder="please select your zone">
                            <el-option label="Zone one" value="Amsterdam" />
                            <el-option label="Zone two" value="London" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Activity time">
                        <el-col :span="11">
                            <el-date-picker
                                v-model="form.date1"
                                type="date"
                                placeholder="Pick a date"
                                style="width: 100%"
                            />
                        </el-col>
                        <el-col :span="2" class="text-center">
                            <span class="text-gray-500">-</span>
                        </el-col>
                        <el-col :span="11">
                            <el-time-picker
                                v-model="form.date2"
                                placeholder="Pick a time"
                                style="width: 100%"
                            />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Instant delivery">
                        <el-switch v-model="form.delivery" />
                    </el-form-item>
                    <el-form-item label="Product type">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="Fruit" name="type" />
                            <el-checkbox label="Oil" name="type" />
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="Resources">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="Sponsor" />
                            <el-radio label="Venue" />
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Activity form">
                        <el-input v-model="form.desc" type="textarea" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="margin-right: 10px;"> Play the message 💬</el-button>
                        <el-button type="success" @click="onSubmit">Create</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>

            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="Date" width="120" />
                <el-table-column prop="name" label="Name" width="120" />
                <el-table-column prop="phone" label="Phone Number" width="160" />
                <el-table-column prop="community" label="Community" />
                <el-table-column label="Operations" width="180px">
                    <template v-slot="{row}">
                        <el-button size="small" type="primary" @click="handleCheck(this)">Check</el-button>
                        <el-button size="small" type="success" @click="handleFinish(row)">Finish</el-button>
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
export default {
    name: "allProducts",
    components: {GuideBar},

    data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    phone: '123456789',
                    community: '010',
                },
            ],
            dialogTableVisible: false,
            form: reactive({
                name: '',
                price: '',
                amount: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            }),
        };
    },

    methods:{
        onSubmit(){
            console.log('submit!')
        },
        handleCheck(row) {
            this.dialogTableVisible = true;
            console.log('Clicked row:', row)
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
</style>