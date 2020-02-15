<template>
  <section
    class="w-screen pt-12 section"
    :class="[
      primary ? 'bg-gray-100 text-gray-900 decor' : 'bg-teal-900 text-gray-100'
    ]"
  >
    <header class="relative z-10">
      <h1 class="text-left text-4xl bg-blue-600 w-1/4">
        <slot name="header" />
      </h1>
    </header>
    <article class="text-left px-64 py-48 relative z-10 content">
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

.section {
  position: relative;
}

.decor::before,
.decor::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.decor::before {
  opacity: 0.1;
  background-color: theme('colors.blue.400');
  transform: rotateZ(2deg) scaleX(1.1);
}

.decor::after {
  opacity: 0.1;
  background-color: theme('colors.green.400');
  transform: rotateZ(6deg) scaleX(1.1);
}
</style>
