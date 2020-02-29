<template>
  <nav>
    <ul
      class="list-none w-1/2 h-full m-auto flex flex-row items-center justify-between"
    >
      <li :class="navigationItemClass">
        <a class="h-full w-full" href="#about">About</a>
      </li>
      <li :class="navigationItemClass"><a href="#values">Values</a></li>
      <li :class="navigationItemClass">
        <a href="#network">People I love working with</a>
      </li>
      <li :class="navigationItemClass">
        <a href="#people">People worth following</a>
      </li>
      <li :class="navigationItemClass"><a href="#hobbies">Hobbies</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navigationItemClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
