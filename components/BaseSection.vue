<template>
  <section
    class="w-screen pt-12 section"
    :class="[
      primary
        ? 'bg-teal-800 text-gray-900 section-decor--primary'
        : 'bg-teal-900 text-gray-100 section-decor--secondary'
    ]"
  >
    <header class="relative z-20">
      <h1
        class="inline-block text-right text-4xl p-4 pl-96 pr-8 shadow-inner"
        :class="[
          primary ? 'bg-teal-900 text-gray-100' : 'bg-gray-100 text-gray-900'
        ]"
      >
        <slot name="header" />
      </h1>
    </header>
    <article class="text-left px-96 pb-48 pt-24 relative z-20 content">
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
  opacity: 1;
  background-color: theme('colors.green.300');
  transform: skewY(2deg);
}

.section-decor--primary::after {
  opacity: 1;
  background-color: theme('colors.gray.100');
  background-image: linear-gradient(
      170deg,
      theme('colors.gray.100') 60%,
      transparent
    ),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23E2E8F0' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.section-decor--secondary {
  background-image: linear-gradient(
      0deg,
      transparent 80%,
      theme('colors.teal.800')
    ),
    linear-gradient(6deg, theme('colors.teal.900') 80%, transparent),
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='56' height='95' patternUnits='userSpaceOnUse' viewBox='56 -254 112 190' fill='none' stroke='%23285E61' stroke-width='20'><g><path d='M168-127.1c0.5,0,1,0.1,1.3,0.3l53.4,30.5c0.7,0.4,1.3,1.4,1.3,2.2v61c0,0.8-0.6,1.8-1.3,2.2L169.3-0.3 c-0.7,0.4-1.9,0.4-2.6,0l-53.4-30.5c-0.7-0.4-1.3-1.4-1.3-2.2v-61c0-0.8,0.6-1.8,1.3-2.2l53.4-30.5C167-127,167.5-127.1,168-127.1 L168-127.1z'/><path d='M112-222.5c0.5,0,1,0.1,1.3,0.3l53.4,30.5c0.7,0.4,1.3,1.4,1.3,2.2v61c0,0.8-0.6,1.8-1.3,2.2l-53.4,30.5 c-0.7,0.4-1.9,0.4-2.6,0l-53.4-30.5c-0.7-0.4-1.3-1.4-1.3-2.2v-61c0-0.8,0.6-1.8,1.3-2.2l53.4-30.5 C111-222.4,111.5-222.5,112-222.5L112-222.5z'/><path d='M168-317.8c0.5,0,1,0.1,1.3,0.3l53.4,30.5c0.7,0.4,1.3,1.4,1.3,2.2v61c0,0.8-0.6,1.8-1.3,2.2L169.3-191 c-0.7,0.4-1.9,0.4-2.6,0l-53.4-30.5c-0.7-0.4-1.3-1.4-1.3-2.2v-61c0-0.8,0.6-1.8,1.3-2.2l53.4-30.5 C167-317.7,167.5-317.8,168-317.8L168-317.8z'/></g></svg>"); // style-lint-disable-line
}
</style>
