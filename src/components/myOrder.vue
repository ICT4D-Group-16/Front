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
                <el-table-column prop="createTime" label="Date" width="120" />
                <el-table-column prop="modifiedTime" label="Name" width="120" />
                <el-table-column prop="orderId" label="Phone Number" width="140" />
                <el-table-column prop="productName" label="ProductName" width="120"/>
                <el-table-column prop="productBelongName" label="Product Offer" width="140"/>
                <el-table-column prop="communityNumber" label="Community" width="120"/>
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
import {productCateList, productList} from "@/service/user";

export default {
    name: "myOrder",
    components: {GuideBar},
    created() {
        this.fetchProductCateList()
    },
    methods:{
        async fetchProductCateList(){
            await productCateList().then((res) => {
               let array = res.data
                console.log(array[0])
                this.tableData = array
            })
        },
        handleDelete: async (row) => {
            await productList().then((res) => {
                console.log(res.data())
            })
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
                    createTime: '',
                    modifiedTime: '',
                    orderId: '',
                    productName: '',
                    productBelongName: '',
                    communityNumber: ''
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