<template>
  <div>
    <Top now="top"></Top>
  <div class="container">
  <h1 class="mt-5">Top</h1>
    <div v-html="top"></div>
  </div>
  </div>
</template>

<script>
import Top from '../components/Top.vue'
import topmd from '../static_article/top.md'


export default {
  data:()=> {	
    return {
      top:topmd
    }
  },
  components:{
    Top
  },
  methods:
	{renderMathJax () {
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


