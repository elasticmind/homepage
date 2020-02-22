<template>
  <header class="w-screen bg-gray-900 fixed z-50 flex flex-row">
    <h1 class="pl-4 text-left text-teal-100 text-4xl">
      <a href="/">
        elasticmind.design
      </a>
    </h1>
    <app-nav class="flex-auto text-gray-100" />
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

<style></style>
