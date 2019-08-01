<template>
  <div>
  <Top now="article_list"></Top>
  <div class="container">
  <h1 class="mt-5">Blog</h1>
  <br>
  <div class="row">
    <div v-for="article in article_list" :key=article.base class="col-lg-4">
      <div class="card" style="width: 20rem;height:15rem">
         <div class="card-body">
           <h4 class="card-title">{{ article.title }}</h4>
           <p class="card-text">{{ article.preview }}</p>
           <nuxt-link v-bind:to="'/article?'+article.base" class="btn btn-primary">
            読む
           </nuxt-link>
         </div>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import Top from '../../components/Top.vue'
import article_data from '../../article/sum.json'


export default {
  /*async mounted() {
     const { data: res } = await axios.get("https://raw.githubusercontent.com/hukuda222/portfolio/master/article/data.json");
     this.article_list = res;
    
  },*/
  data:()=> {	
    Object.keys(article_data.fileMap).forEach(key=>{
      article_data.fileMap[key].base=article_data.fileMap[key].base.replace(".json","");
    });
    return {
      article_list:article_data.fileMap
    };
  },
  components:{
    Top
  }
}
</script>


