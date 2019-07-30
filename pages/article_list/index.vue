<template>
  <div>
  <Top></Top>
  <div class="container">
  <h1 class="mt-5">Blog</h1>
    <ul>
    <li v-for="article in article_list" :key=article.path >
      <nuxt-link v-bind:to="root+'article/'+article.path">
            {{ article.title }}
      </nuxt-link>
    </li>
  </ul>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import Top from '../../components/Top.vue'
import article_list from '../../article/data.json'


export default {
  /*async mounted() {
     const { data: res } = await axios.get("https://raw.githubusercontent.com/hukuda222/portfolio/master/article/data.json");
     this.article_list = res;
    
  },*/
  data:()=> {	
    const root = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolio/' :'/';
    return {
      article_list:article_list,
      root:root
    };
  },
  components:{
    Top
  }
}
</script>


