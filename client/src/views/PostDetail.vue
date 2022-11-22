<template>
    <v-container>
        <v-row>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2" outline shaped>
                    <v-img :src="`/${posts.image}`" class="fix-image"></v-img>
                    <v-card-action class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <!-- Cột thứ 2 trong hàng thứ 1 của cột thứ 10 -->
                            <v-col sm="2">
                                <v-btn small outline color="teal" class="fix-text-color-btn">{{posts.category}}</v-btn>
                            </v-col>

                            <!-- Cột thứ 10 trong hàng thứ 1 của cột thứ 10 -->
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn :to="{name: 'edit-post', params: {id: posts._id}}" color="success" class="mr-2" rounded elevation="7" outlined>Edit</v-btn>
                                <v-btn @click="removePost(posts._id)" color="error" rounded elevation="7" outlined>Delete</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-action>

                    <v-card-subtitle class="headline">
                        <h3>{{ posts.title }}</h3>
                    </v-card-subtitle>

                    <v-card-text class="grey--text">
                        {{ posts.content }}
                        {{ posts.create }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from './../api'
export default {
    data() {
        return {
            // lấy theo mỗi id nên chỉ cần đối tượng  ( khi nào lấy nhiều cần mảng)
            posts: {}
        };
    },

    async created() {
        const res = await API.getPostById(this.$route.params.id);
        this.posts = res;
    },

    methods:{
        async removePost(id){
            const res = await API.Delete(id);
            this.$router.push({name: 'home', params: {message: res.message}});
        }
    }
}
</script>

<style scoped>
    .fix-image{
        height: 500px;
    }
    .fix-text-color-btn{
        color: white;
    }
</style>