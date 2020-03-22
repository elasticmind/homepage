<template>
  <section
    class="w-full pt-12 relative"
    :class="[
      primary
        ? 'bg-dark text-dark section-decor--primary'
        : 'bg-light text-light section-decor--secondary'
    ]"
  >
    <header class="relative z-40">
      <h1
        class="inline-block md:text-right text-4xl w-full md:w-112 p-4 pr-8 shadow-inner font-sans font-normal"
        :class="[primary ? 'bg-dark text-light' : 'bg-light text-dark']"
      >
        <slot name="header" />
      </h1>
    </header>
    <article
      class="text-left px-4 sm:px-16 md:px-32 xl:px-64 pb-48 pt-24 relative z-20 content max-w-8xl mx-auto"
    >
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

.section-decor--primary::before,
.section-decor--primary::after {
  @apply z-10;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.section-decor--primary::before {
  transform: skewY(4deg);
  @apply bg-primary-light;
}

.section-decor--primary::after {
  width: 200%;
  transform: translateX(-50%) skewY(-2deg);
  @apply bg-light;
  background-image: linear-gradient(
      174deg,
      theme('colors.light') 60%,
      transparent
    ),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230e2a34' fill-opacity='0.075'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.section-decor--secondary {
  background-color: theme('colors.dark');
}
</style>
