<template>
  <div>
  <Top now="article_list"></Top> 
  <div class="container">
      <h1 class="mt-5"></h1>
    <div v-html="$md.render(article_data)"></div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import Top from '../../../components/Top.vue'
import all_article_data from '../../../article/data.json'

export default {
  validate({params}) {
    return /^[0-9a-z]+$/.test(params.id)
  },
  async asyncData({ params }) {    
    //const { data: res } = await axios.get(`https://raw.githubusercontent.com/hukuda222/portfolio/master/article/${params.id}.md`);
    return {article_data:all_article_data[`${params.id}.md`]};
  },
  data:()=>{
    return {
      article_data:""
    }
  },
  components:{
    Top
  },
  methods:{
    renderMathJax () {
      if(window.MathJax) {
        window.MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [ ['$','$'], ["\(","\)"] ],
            displayMath: [ ['$$','$$'], ["\[","\]"] ],
            processEscapes: true,
            processEnvironments: true
          },
          // Center justify equations in code and markdown cells. Elsewhere
          // we use CSS to left justify single line equations in code cells.
          displayAlign: 'center',
          "HTML-CSS": {
            styles: {'.MathJax_Display': {"margin": 0}},
            linebreaks: { automatic: true }
          }
        });
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub,this.$refs.mathJaxEl]);
      }
    }
  }, 
	mounted (){
     this.renderMathJax()
   }
}
</script>



