<template>
  <section
    class="w-screen pt-12 section"
    :class="[
      primary ? 'bg-teal-800 text-gray-900 decor' : 'bg-teal-900 text-gray-100'
    ]"
  >
    <header class="relative z-20">
      <h1
        class="text-right text-4xl w-1/4 p-4 pr-8 shadow-inner"
        :class="[
          primary ? 'bg-teal-900 text-gray-100' : 'bg-gray-100 text-gray-900'
        ]"
      >
        <slot name="header" />
      </h1>
    </header>
    <article class="text-left px-64 py-48 relative z-20 content">
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
}

.section {
  position: relative;
}

.decor::before,
.decor::after {
  @apply z-10;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.decor::before {
  opacity: 1;
  background-color: theme('colors.green.300');
  transform: skewY(2deg);
}

.decor::after {
  opacity: 1;
  background-color: theme('colors.gray.100');
  transform: skewY(6deg);
}
</style>
