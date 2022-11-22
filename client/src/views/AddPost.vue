<template>
    <v-container>
      
      <v-row no-gutters>
          <v-col sm="10" class="mx-auto">
              <v-card class="pa-5">
                  <v-card-title>
                      <h1>Add New Post</h1>
                  </v-card-title>
  
                  <v-divider inset></v-divider>
  
                  <v-form ref="form" class="pa-5" enctype="multipart/form-data" @submit.prevent="submitForm">
                      <v-text-field :rules="rules" v-model="post.title" label="Title" prepend-icon="mdi-note"></v-text-field>
  
                      <v-text-field :rules="rules" v-model="post.category" label="Category" prepend-icon="mdi-format-list-bulleted-type"></v-text-field>
  
                      <v-textarea :rules="rules" v-model="post.content" label="Content" prepend-icon="mdi-comment-text"></v-textarea>
  
                      <v-file-input @change="selectFile" counter show-size :rules="rules" label="Select Image"></v-file-input>
                      <v-btn type="submit" class="mt-3" color="primary">Add Post</v-btn>
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
              post: {
                  title: "",
                  category: "",
                  content: "",
                  image: "",
              }
          }
      },
      methods: {
          selectFile(file){
              this.post.image = file;
              
          },
  
          async submitForm(){
              const formData = new FormData();
              formData.append('image', this.post.image);
              formData.append('title', this.post.title);
              formData.append('category', this.post.category);
              formData.append('content', this.post.content);
              if(this.$refs.form.validate()) {
                  const res = await API.addPost(formData);
                  this.$router.push({name: 'home', params: {message: res.message} })
              }
          }
      }
  }
  </script>
  
  <style>
  
  </style>