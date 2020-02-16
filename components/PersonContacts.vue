<template>
  <ul class="flex">
    <li v-for="contact in contacts" :key="contact.url" class="m-2">
      <a :href="contact.url">
        <div class="w-full h-full rounded-full">
          <i
            class="fa m-auto text-2xl align-middle"
            :class="contact.iconClass"
            aria-hidden="true"
          >
          </i>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
