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
                  <br>
                    <div style="margin-left: 5%;width: 90%">
                      <el-form-item class="descriptionLabel" label="Name: ">
                        <el-input v-model="props.row.productName" />
                      </el-form-item>
                      <el-form-item class="descriptionLabel" label="Price: ">
                        <el-input v-model="props.row.price" />
                      </el-form-item>
                      <el-form-item class="descriptionLabel" label="Quantity: ">
                        <el-input v-model="props.row.quantity" />
                      </el-form-item>
                      <el-form-item class="descriptionLabel" label="Description: ">
                        <el-input v-model="props.row.description" />
                      </el-form-item>
                      <p class="descriptionLabel">Audios:</p>
                      <div style="display: flex;">
                        <el-button style="width: 100%" size="big" type="primary" @click="updateProduct(props.row)">Update the product</el-button>
                        <el-button style="width: 100%" size="big" type="primary" @click="showNameAudios(props.row.productId)">Play Name Audios</el-button>
                        <el-button style="width: 100%" size="big" type="primary" @click="showDescriptionAudios(props.row.productId)">Play Description Audios</el-button>

                      </div>
                      <el-dialog v-model="dialogTableVisibleNameAudio" title="All the audios of this product">
                        <el-form>

                          <el-form-item v-for="audio in props.row.nameAudios" :key="audio.id">
                            <p class="descriptionLabel">Language: {{ audio.language }}</p>
                            <audio controls style="width: 100%">
                              <source :src="audio.url" type="audio/mpeg">
                            </audio>
                            <br>
                          </el-form-item>

                        </el-form>
                      </el-dialog>

                      <el-dialog v-model="dialogTableVisibleDescriptionAudio" title="All the audios of this product">
                        <el-form>

                          <el-form-item v-for="audio in props.row.DescriptionAudios" :key="audio.id">
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
import {updateProduct} from "../service/user";

const productName = ref("");
const price = ref(0);
const quantity = ref(0);
const description = ref("");

export default {
    name: "myAccount",
    components: {GuideBar},
    created() {
        this.fetchProductList()
    },
    data(){
        return{
          updated_product: [],
          updated_name: '',
          updated_description: '',
          updated_price: 0,
          updated_quantity: 0,
            tableData: '',
          dialogTableVisibleNameAudio: false,
          dialogTableVisibleDescriptionAudio: false,

        }
    },
    methods: {
        async fetchProductList(){
            await pmsProductList().then((res) => {
                let array = res.data
                // console.log(array[0])
                this.tableData = array
            })
        },
      updateProduct(product) {

        // product.name = this.updated_name
        // product.description = this.updated_description
        // product.price = this.updated_price
        // product.quantity = this.updated_quantity

        updateProduct(product).then((res) => {
          // let array = res.data
          console.log(res)

        })

      },
      showNameAudios(productId) {
        this.dialogTableVisibleNameAudio = true;
        // For test
        console.log(productId)

      },
      showDescriptionAudios(productId) {
        this.dialogTableVisibleDescriptionAudio = true;
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