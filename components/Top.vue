<template>
    <div>
	<header>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand" href="/">hukuda222の諸々</a>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <nuxt-link class="nav-link" v-bind:to="root">TOP</nuxt-link>
    </li>
    <li class="nav-item">
      <a class="nav-link" v-bind:href="root+'about'">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" v-bind:href="root+'article_list'">Blog</a>
    </li>
  </ul>
</nav>
</header>
  </div>
</template>

<script>
export default {
  data:()=> {
	const root = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolio/' :'/';
    return {root:root};
  }}
</script>


