<template>
  <div class="container">
    <div>
      <h1 class="title">
        hukuda222
      </h1>
      <h2 class="subtitle">
        My good Nuxt.js project
      </h2>
    </div>
    <div v-html="$md.render(article_data)"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  validate({params}) {
    return /^[0-9a-z]+$/.test(params.id)
  },
  async asyncData({ params }) {    
    
    console.log("https://raw.githubusercontent.com/hukuda222/portfolio/master/article/${params.id}.md");
    const { data: res } = await axios.get(`https://raw.githubusercontent.com/hukuda222/portfolio/master/article/${params.id}.md`);
    self.article_data=res;

  },
  data:()=>{
    return {
      article_data:""
    }
  }
}
</script>



