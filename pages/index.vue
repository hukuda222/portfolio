<template>
  <div>
    <Top></Top>
  <div class="container">
  <h1 class="mt-5">TOP</h1>
    <div v-html="topmd"></div>
  </div>
  </div>
</template>

<script>
import Top from '../components/Top.vue'
import topmd from '../static_article/top.md'
import axios from 'axios';


export default {
  computed: {
      topmd() {
        return topmd 
      }
  },
  components:{
    Top
  }
}
</script>


