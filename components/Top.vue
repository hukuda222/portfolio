<template>
    <div>
	<header>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <nuxt-link class="navbar-brand" to="/">hukuda222の諸々</nuxt-link>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <nuxt-link v-bind:class="[(now === 'top')?'nav-link active' :'nav-link']" to="/">Top</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link v-bind:class="[(now === 'about')?'nav-link active' :'nav-link']" to="/about">About</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link v-bind:class="[(now === 'article_list')?'nav-link active' :'nav-link']"  to="/article_list">Blog</nuxt-link>
    </li>
  </ul>
</nav>
</header>
  </div>
</template>

<script>
  export default {
	props:{
		'now':String
	}
  };
</script>


