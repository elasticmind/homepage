<template>
  <header class="w-full bg-dark fixed z-50 block md:flex flex-row shadow">
    <h1
      class="md:pl-4 md:text-left text-light text-4xl font-roboto-slab text-center"
    >
      <a href="/">
        elasticmind<span class="text-primary-light">.</span>design
      </a>
    </h1>
    <app-nav
      class="nav"
      navigation-item-class="font-roboto-slab tracking-widest font-semibold py-2 md:py-0 hover:bg-light hover:text-dark"
      navigation-item-list-class="justify-between"
    />
  </header>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  components: {
    AppNav: Nav
  }
}
</script>

<style lang="less" scoped>
.nav {
  @apply text-light px-4 w-full ml-0;
}

@screen sm {
  .nav {
    @apply px-16 ml-auto;
  }
}

@screen md {
  .nav {
    @apply px-0;
    width: 400px;
  }
}
</style>
