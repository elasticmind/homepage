<template>
  <ul class="flex">
    <li v-for="contact in contacts" :key="contact.url" class="m-2">
      <a :href="contact.url">
        <div class="w-full h-full rounded-full">
          <icon :type="contact.type" />
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  },
  props: {
    contacts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
