<template>
  <div class="container">
    <div>
      <h1 class="title">
        hukuda222
      </h1>
    </div>
  <ul>
    <li v-for="article in article_list" :key=article.path >
      <a v-bind:href="'/article/'+article.path">
            {{ article.title }}
      </a>
    </li>
  </ul>

  </div>
</template>

<script>
import axios from 'axios';


export default {
  async mounted() {
     const { data: res } = await axios.get("https://raw.githubusercontent.com/hukuda222/portfolio/master/article/data.json");
     this.article_list = res;
    
  },data:()=> {
    return {article_list:[]};
  }
}
</script>


