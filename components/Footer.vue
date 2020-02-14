<template>
  <footer class="w-screen h-48 bg-gray-900 p-12">
    <app-nav class=" text-gray-400" />
    <p class="text-center  text-gray-600 mt-8">
      All right reserved &copy; {{ new Date().getFullYear() }}
    </p>
  </footer>
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
