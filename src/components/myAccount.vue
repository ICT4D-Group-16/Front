<script setup>
import { ref } from "vue";
</script>
<template>
    <el-aside style="width: 150px;">
        <el-aside style="width: 150px;">
            <guide-bar></guide-bar>
        </el-aside>
    </el-aside>
    <el-main style="width: 900px">
        <div>
            <p class="orderGuide"> You can find all the products here!</p>
        </div>
        <el-table :data="tableData" :border="true" style="width: 100%">
            <el-table-column type="expand">
                <template #default="props">
                    <div>
                        <p class="descriptionLabel">Price: {{ props.row.price }}</p>
                        <p class="descriptionLabel">Quantity: {{ props.row.quantity }}</p>
                        <p class="descriptionLabel">Address: {{ props.row.address }}</p>
                        <p class="descriptionLabel">Description: {{ props.row.description }}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="productName" label="Product Name" />
            <el-table-column prop="price" label="Product Price" />
        </el-table>
    </el-main>
</template>

<script>
import GuideBar from "@/components/guideBar.vue";
import {pmsProductList} from "@/service/user";

export default {
    name: "myAccount",
    components: {GuideBar},
    created() {
        this.fetchProductList()
    },
    data(){
        return{
            tableData: [{
                ProductNo:'1001',
                date: '2016-05-02',
                ProductName: 'TOY',
                state: 'New York',
                city: 'New York City',
                address: 'No. 189, Grove St, Los Angeles',
                zip: '10001',
                family: [{
                    date: '2016-05-02',
                    name: 'Tom',
                    state: 'New York',
                    city: 'New York City',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: '10001'
                }, {
                    date: '2016-05-04',
                    name: 'Tom',
                    state: 'New York',
                    city: 'New York City',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: '10001'
                }]
            }]
        }
    },
    methods: {
        async fetchProductList(){
            await pmsProductList().then((res) => {
                let array = res.data
                console.log(array[0])
                this.tableData = array
            })
        }
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
.descriptionLabel{
    font-size: 15px;
    font-weight: bold;
    margin-left: 20px;
}
</style>