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
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import hello from '../hello.md'


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



