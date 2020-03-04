<template>
  <header class="w-full bg-dark fixed z-50 block md:flex flex-row shadow">
    <h1
      class="pl-4 md:text-left text-primary-dark text-4xl font-roboto-slab text-center"
    >
      <a href="/">
        elasticmind.design
      </a>
    </h1>
    <app-nav
      class="flex-auto text-light"
      navigation-item-class="font-roboto-slab tracking-widest font-semibold py-2 md:py-0 hover:text-primary hover:bg-dark-dark"
      navigation-item-list-class="justify-around md:justify-end"
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
