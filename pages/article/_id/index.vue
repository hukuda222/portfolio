<template>
  <div>
  <Top></Top> 
  <div class="container">
    <div v-html="$md.render(article_data)"></div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import Top from '../../../components/Top.vue'

export default {
  validate({params}) {
    return /^[0-9a-z]+$/.test(params.id)
  },
  async asyncData({ params }) {    
    console.log(`https://raw.githubusercontent.com/hukuda222/portfolio/master/article/${params.id}.md`);
    const { data: res } = await axios.get(`https://raw.githubusercontent.com/hukuda222/portfolio/master/article/${params.id}.md`);
    return {article_data:res};
  },
  data:()=>{
    return {
      article_data:""
    }
  },
  components:{
    Top
  }
}
</script>



