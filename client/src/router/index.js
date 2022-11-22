import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from './../views/Home'
import AddPost from './../views/AddPost'
import PostDetail from './../views/PostDetail'
import EditPost from './../views/EditPost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost,
  },
  {
    path: '/edit-post',
    name: 'edit-post',
    component: EditPost,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
