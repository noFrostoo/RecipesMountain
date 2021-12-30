
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/UserViews/Login.vue'
import Register from '@/views/UserViews/Register.vue'
import SearchRecipe from "@/views/RecipeViews/SearchRecipes.vue"
import MyAccount from "@/views/UserViews/MyAccount.vue"

import Recipe from "@/views/RecipeViews/Recipe.vue"
import AddRecipe from "@/views/RecipeViews/AddRecipe.vue"

import store from '@/store'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchRecipe
  },
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/addRecipe',
    name: 'AddRecipe',
    component: AddRecipe
  },
  {
    path: '/user/',
    name: 'MyAccount',
    component: MyAccount,
    beforeEnter: (to, from, next) => {
      if(!store.getters["isLoggedIn"]){
        next({ name: "Home"  })
      } else next()
    },
    children: [
      {
        path: '/addRecipe',
        name: 'AddRecipe',
        component: AddRecipe
      },
      
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
