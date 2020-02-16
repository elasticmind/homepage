<template>
  <footer class="w-screen bg-gray-900 pt-32 pb-12 relative z-20">
    <app-nav class="text-gray-400" />
    <hr class="w-3/4 m-auto mt-4 border-gray-700" />
    <p class="text-center text-gray-600 mt-8">
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
