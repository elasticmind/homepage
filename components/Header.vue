<template>
  <header class="w-screen bg-gray-600 fixed z-50 flex flex-row">
    <h1 class="text-left text-4xl">
      <a href="/">
        elasticmind.design
      </a>
    </h1>
    <app-nav />
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
