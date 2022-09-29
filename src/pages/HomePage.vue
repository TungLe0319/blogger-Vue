<template>
  <div class="container">
    <div class="row">
     
      <div class="col-md-6 mt-5 " v-for="">

      </div>
     
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import {blogsService} from '../services/BlogsService.js'

  
export default {
  setup(){
    async function getBlogs(){
      try {
          await blogsService
        } catch (error) {
          console.error('[]',error)
          Pop.error(error)
        }
    }
    onMounted(()=> getBlogs())
    return{
blogs: computed(()=>{AppState.blogs})

    }
  }
};
</script>

<style scoped lang="scss">


.forcedImg{
  height: 260px;
  width: 260px;
  object-fit: cover;
   //top/right/bottom/left  for margin;
  margin:2px 2px 2px 2px;
  border-radius: 4px;
}


</style>


<!-- user.isAuthenticated returns a bool as to whether or not the user is logged in
user.userInfo if logged in this will provide you with the information that is made public from their login, this includes things like email, name and avatar

User Stories

"As a user, I can see all the blogs on the home page, so that I do not have to log in to see all the blogs"
"As a user, I can click on a blog to be taken to the blog page, so that I can read the contents of the blog and its comments"
"As a user, I can login to see my account page, so that I can see all of my blogs"
"As a user, I can create, edit and delete blogs, so that I can easily create content to share with others"
"As a user, I can create, edit and delete comments on the blog page, so that I can provide feedback to other writers on their blog"
These user stories can be implemented as a stretch goals

"As a user, I can save a blog as a draft, so that I can save it without having it published right away"
"As a user, I need to be able to search all blogs by a certain author, so that I can filter down the blogs to only what they have created"
"As a user, my profile can also show a list of all my comments, with a link to the blog that I had commented on"
"As a user, I can tag blogs, so that I can search for them via query parameters and filter down blogs" -->
