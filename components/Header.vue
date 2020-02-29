<template>
  <header class="w-screen bg-dark fixed z-50 flex flex-row shadow">
    <h1 class="pl-4 text-left text-primary-dark text-4xl font-roboto-slab">
      <a href="/">
        elasticmind.design
      </a>
    </h1>
    <app-nav
      class="flex-auto text-light"
      navigation-item-class="font-semibold"
    />
    <button
      class="rounded-lg border-2 border-secondary-light px-6 m-2 mr-6 flex items-center text-xl text-secondary-light"
    >
      <a href="cv-tibor-zombory.pdf">
        CV
      </a>
      <icon type="chevronRight" />
    </button>
  </header>
</template>

<script>
import Nav from '@/components/Nav'
import Icon from '@/components/Icon'

export default {
  components: {
    AppNav: Nav,
    Icon
  }
}
</script>

<style lang="less" scoped></style>
