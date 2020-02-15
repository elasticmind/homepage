<template>
  <section class="pl-4 hobby">
    <header class="mb-4">
      <h2 class="text-2xl">
        <slot name="header" />
      </h2>
    </header>
    <section class="flex flex-row items-stretch text-xl">
      <slot name="content" />
    </section>
  </section>
</template>

<script>
export default {}
</script>

<style>
.hobby {
  border-left: 5px solid theme('colors.teal.900');
}
</style>
