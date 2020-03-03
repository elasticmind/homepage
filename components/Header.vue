<template>
  <header class="w-full bg-dark fixed z-50 flex flex-row shadow">
    <h1 class="pl-4 text-left text-primary-dark text-4xl font-roboto-slab">
      <a href="/">
        elasticmind.design
      </a>
    </h1>
    <app-nav
      class="flex-auto text-light"
      navigation-item-class="font-roboto-slab tracking-widest font-semibold hover:text-primary hover:bg-dark-dark"
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

<style lang="less" scoped></style>
