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
                      <p class="descriptionLabel">Audios:</p>
                      <el-button style="width: 100%" size="big" type="primary" @click="showAudios(props.row.productId)">Show audios</el-button>
                      <el-dialog v-model="dialogTableVisible" title="All the audios of this product">
                        <el-form>

                          <el-form-item v-for="audio in props.row.audios" :key="audio.id">
                            <p class="descriptionLabel">Language: {{ audio.language }}</p>
                            <audio controls style="width: 100%">
                              <source :src="audio.url" type="audio/mpeg">
                            </audio>

                            <br>
                          </el-form-item>

                        </el-form>
                      </el-dialog>

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
            tableData: '',
          dialogTableVisible: false,
        }
    },
    methods: {
        async fetchProductList(){
            await pmsProductList().then((res) => {
                let array = res.data
                console.log(array[0])
                this.tableData = array
            })
        },
      showAudios(productId) {
        this.dialogTableVisible = true;
        // For test
        console.log(productId)

      },
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