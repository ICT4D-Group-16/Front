<template>
    <el-aside style="width: 150px;">
        <el-aside style="width: 150px;">
            <guide-bar></guide-bar>
        </el-aside>
    </el-aside>
    <el-main style="width: 900px">
        <div>
            <p class="orderGuide"> You can find all the orders related to our community here!</p>
        </div>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="Date" width="140" />
                <el-table-column prop="name" label="Name" width="140" />
                <el-table-column prop="phone" label="Phone Number" width="180" />
                <el-table-column prop="address" label="Address" />
                <el-table-column label="Operations" width="100px">
                    <template v-slot="{row}">
                        <el-button size="small" type="danger" @click="handleDelete(row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
    </el-main>
</template>

<script>
import GuideBar from "@/components/guideBar.vue";
import { ElMessage, ElMessageBox } from 'element-plus'

export default {
    name: "myOrder",
    components: {GuideBar},

    methods:{
        handleDelete: (row) => {
            ElMessageBox.confirm(
                'This task will be deleted, Continue?',
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
    data() {
        return {
             tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    phone: '123456789',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    phone: '123456789',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    phone: '123456789',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    phone: '123456789',
                    address: 'No. 189, Grove St, Los Angeles',
                },
            ]
        };
    }
}
</script>

<style scoped>
.orderGuide{
    margin-top: 40px;
    margin-bottom: 40px;
    color: #181818;
    font-size: 20px;
    font-weight: bold;
}
</style>