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
                        <p>State: {{ props.row.state }}</p>
                        <p>City: {{ props.row.city }}</p>
                        <p>Address: {{ props.row.address }}</p>
                        <p>Zip: {{ props.row.zip }}</p>
                        <h3 style="font-weight: bold">Product Supplier</h3>
                        <el-table :data="props.row.family" :border="true">
                            <el-table-column label="Name" prop="name" />
                            <el-table-column label="State" prop="state" />
                            <el-table-column label="City" prop="city" />
                            <el-table-column label="Address" prop="address" />
                            <el-table-column label="Zip" prop="zip" />
                        </el-table>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="ProductNo" prop="ProductNo" />
            <el-table-column label="ProductName" prop="ProductName" />
        </el-table>
    </el-main>
</template>

<script>
import GuideBar from "@/components/guideBar.vue";

export default {
    name: "myAccount",
    components: {GuideBar},
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