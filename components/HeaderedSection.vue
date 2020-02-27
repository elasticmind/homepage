<template>
  <section
    class="section"
    :class="primary ? 'decor--primary' : 'decor--secondary'"
  >
    <header class="section--header">
      <h2 class="text-xl mb-2">
        <slot name="header" />
      </h2>
    </header>
    <slot name="description" />
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
.section {
  position: relative;
  @apply pr-16;

  &:not(:first-child) {
    @apply mt-8;
  }
}

.decor--primary::before,
.decor--primary::after,
.decor--secondary::before,
.decor--secondary::after {
  content: '';
  width: 20px;
  top: 0;
  right: 0;
  @apply block shadow-inner h-full absolute;
}

.decor--primary::before,
.decor--primary::after {
  @apply bg-red-700;
}

.decor--secondary::before,
.decor--secondary::after {
  @apply bg-teal-800;
}

.section--header {
  @apply font-roboto-slab font-semibold tracking-widest;
}
</style>
