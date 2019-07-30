<template>
  <div>
  <Top></Top>
  <div class="container">
    <h1 class="mt-5">About</h1>
    <div v-html="aboutmd"></div>
  </div>
  </div>
</template>

<script>
import aboutmd from '../../static_article/about.md'
import Top from '../../components/Top.vue'
import axios from 'axios';


export default {
  computed: {
      aboutmd() {
        return aboutmd 
      }
  },
  components:{
    Top
  }
}
</script>


