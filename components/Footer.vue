<template>
  <footer
    class="w-full bg-dark text-primary-dark py-12 relative z-20 shadow-inner"
  >
    <app-nav
      navigation-item-list-class="w-1/2 justify-around"
      navigation-item-class="hover:text-light"
    />
    <hr class="w-1/2 m-auto mt-4 border-primary" />
    <p class="text-center mt-8 opacity-50">
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
