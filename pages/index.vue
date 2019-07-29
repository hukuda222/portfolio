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
  <div v-html="hello"></div>
  <ul>
    <li v-for="data in datas" :key=data.path >{{ data.path }}</li>
  </ul>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import hello from '../hello.md'
import article_data from '../article/data.json'


export default {
  computed: {
      hello() {
        return hello
      }
  },
  data:()=>{
    return {
      datas:article_data
    }
  }
}
</script>


