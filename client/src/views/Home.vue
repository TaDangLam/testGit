<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="4" class="pa-2" v-for="item in posts" :key="item._id">
        <v-card class="pa-1 mt-3 fix-card" :to="{name: 'post', params: {id: item._id} }"  outline shaped>
          <v-img height="300" :src="`/${item.image}`"></v-img>
          <v-btn class="mt-3 ml-4 fix-text" small outline color="teal">
            {{ item.category }}
          </v-btn>

          <v-card-title class="headline">
            {{ item.title }}
          </v-card-title>

          <v-card-text class="py-0">
            <p>{{item.content.substring(0, 100) + "...."}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import API from './../api';

  export default {
    name: 'Home',
    data() {
      return{
        posts: [],
      };
    },

    // Call API
    async created(){
      this.posts = await API.getAllPost();
    }
    
  }
</script>

<style scoped>
.fix-text{
  color: white;
}
.fix-card{
  height: 595px;
}
</style>