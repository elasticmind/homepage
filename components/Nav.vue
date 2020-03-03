<template>
  <nav>
    <ul
      class="list-none h-full m-auto flex flex-row items-center justify-end"
      :class="navigationItemListClass"
    >
      <li class="h-full" :class="navigationItemClass">
        <a class="h-full w-full flex items-center px-6" href="#values">
          Values
        </a>
      </li>
      <li class="h-full ml-2" :class="navigationItemClass">
        <a class="h-full w-full flex items-center px-6" href="#network">
          Network
        </a>
      </li>
      <li class="h-full ml-2" :class="navigationItemClass">
        <a class="h-full w-full flex items-center px-6" href="#people">
          People
        </a>
      </li>
      <li class="h-full ml-2" :class="navigationItemClass">
        <a class="h-full w-full flex items-center px-6" href="#hobbies">
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
