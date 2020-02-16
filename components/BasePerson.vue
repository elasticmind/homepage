<template>
  <section>
    <header>
      <h2 class="text-xl mb-2">
        <slot name="header" />
      </h2>
    </header>
    <article>
      <slot name="description" />
    </article>
    <person-contacts :contacts="contacts" />
  </section>
</template>

<script>
import PersonContacts from '@/components/PersonContacts'

export default {
  components: {
    PersonContacts
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
