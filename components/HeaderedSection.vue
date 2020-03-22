<template>
  <section class="section decor">
    <header class="section--header">
      <h2 class="text-xl mb-2">
        <slot name="header" />
      </h2>
    </header>
    <slot name="description" />
  </section>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.section {
  position: relative;
  @apply pr-8;

  &:not(:first-child) {
    @apply mt-12;
  }
}

@screen md {
  .section {
    @apply pr-16;

    &:not(:first-child) {
      @apply mt-24;
    }
  }
}

.decor::before,
.decor::after {
  content: '';
  width: 10px;
  top: 0;
  right: 0;
  @apply block shadow-inner h-full absolute bg-primary;
}

.section--header {
  @apply font-roboto-slab font-semibold tracking-widest;
}

blockquote {
  @apply relative pt-12 pb-8 px-16 italic text-center;
}

blockquote::before {
  content: '\201C';
  @apply text-6xl text-primary absolute left-0 top-0 ml-2 font-sans opacity-100;
}
</style>
