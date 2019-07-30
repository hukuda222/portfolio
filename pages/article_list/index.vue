<template>
  <div class="container">
    <nuxt-link to="/"></nuxt-link>
    <div>
      <h1 class="title">
        hukuda222
      </h1>
      <h2 class="subtitle">
        My good Nuxt.js project
      </h2>
    </div>
  <div v-html="top"></div>
  <!--div v-html="$md.render(model)"></div-->
  <ul>
    <li v-for="data in datas" :key=data.path >{{ data.path }}</li>
  </ul>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import article_data from '../article/data.json'
import axios from 'axios';


export default {
  computed: {
      top() {
        return top 
      }
  }/*,
  async mounted() {
    const { data: model } = await axios.get("https://raw.githubusercontent.com/hukuda222/ex3-emulator/master/README.md",{transformResponse: d => d})
    this.model = model
  },
  data:()=>{
    return {
      datas:article_data,
      model:""
    }
  }*/
}
</script>


