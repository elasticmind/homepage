<template>
  <nav>
    <ul
      class="list-none h-full m-auto flex flex-row items-center"
      :class="navigationItemListClass"
    >
      <li class="h-full" :class="navigationItemClass">
        <a class="h-full w-full flex items-center px-2" href="#values">
          Values
        </a>
      </li>
      <li class="h-full" :class="navigationItemClass">
        <a class="h-full w-full flex items-center px-2" href="#network">
          Network
        </a>
      </li>
      <li class="h-full" :class="navigationItemClass">
        <a class="h-full w-full flex items-center px-2" href="#people">
          People
        </a>
      </li>
      <li class="h-full" :class="navigationItemClass">
        <a class="h-full w-full flex items-center px-2" href="#hobbies">
          Hobbies
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navigationItemListClass: {
      type: String,
      default: ''
    },
    navigationItemClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
