<template>
  <header class="w-screen bg-gray-900 fixed z-50 flex flex-row">
    <h1 class="pl-4 text-left text-teal-100 text-4xl font-roboto-slab">
      <a href="/">
        elasticmind.design
      </a>
    </h1>
    <app-nav class="flex-auto text-gray-100" />
    <button
      class="rounded-lg border-2 border-yellow-500 px-6 m-2 mr-6 flex items-center text-xl text-yellow-500"
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
