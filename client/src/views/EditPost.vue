<template>
    <v-container>
      
      <v-row no-gutters>
          <v-col sm="10" class="mx-auto">
              <v-card class="pa-5">
                  <v-card-title>
                      <h1>Edit This Post</h1>
                  </v-card-title>
  
                  <v-divider inset></v-divider>
  
                  <v-form ref="form" class="pa-5" enctype="multipart/form-data" @submit.prevent="updateForm">
                      <v-text-field  v-model="post.title" label="Title" prepend-icon="mdi-note"></v-text-field>
  
                      <v-text-field  v-model="post.category" label="Category" prepend-icon="mdi-format-list-bulleted-type"></v-text-field>
  
                      <v-textarea  v-model="post.content" label="Content" prepend-icon="mdi-comment-text"></v-textarea>
  
                      <v-file-input @change="selectFile" counter show-size  label="Select Image"></v-file-input>
                      <v-img :src="`/${post.image}`" width="150" height="100"></v-img>
                      <v-btn type="submit" class="mt-3" color="success">Update Post</v-btn>
                  </v-form>
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
              rules: [(value) => !!value || "This is required!!!!"],
              post: {title: "", category: "", content: "", image: ""},
              image: "",
          };
      },
      async created(){
        const res = await API.getPostById(this.$route.params.id);
        this.post = res;
      },

      methods: {
          selectFile(file){
              this.post.image = file[0];
          },
  
          async updateForm(){
              const formData = new FormData();
              formData.append('image', this.image);
              formData.append('title', this.post.title);
              formData.append('category', this.post.category);
              formData.append('content', this.post.content);
              formData.append('old_image', this.post.image);
              if(this.$refs.form.validate()) {
                  const res = await API.updatePostById(this.$route.params.id , formData);
                  this.$router.push({name: 'home', params: {message: res.message} })
              }
          }
      }
  }
  </script>
  
  <style>
  
  </style>