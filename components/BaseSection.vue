<template>
  <section
    class="w-screen pt-12"
    :class="[primary ? 'bg-yellow-300' : 'bg-blue-300']"
  >
    <header>
      <h1 class="text-left text-4xl bg-blue-600 w-1/4">
        <slot name="header" />
      </h1>
    </header>
    <article class="text-left px-64 py-48 content">
      <slot name="content" />
    </article>
  </section>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  header {
    @apply text-2xl;

    &:not(:first-of-type) {
      @apply mt-8;
    }
  }

  p {
  }
}
</style>
