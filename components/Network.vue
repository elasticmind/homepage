<template>
  <base-section v-bind="$attrs">
    <template #header>
      My favorite people
    </template>
    <template #content>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Dadache Abdel Hakim
        </template>
        <template #description>
          <p>
            Kyle Simpson is an evangelist of the open web, passionate about all
            things JavaScript. He writes books, teaches JavaScript, speaks, and
            contributes to the world of OSS.
          </p>
          <person-contacts
            :contacts="[
              { url: 'https://getify.com/', type: 'globe' },
              { url: 'https://github.com/getify', type: 'github' },
              { url: 'mail:getify@gmail.com', type: 'mail' }
            ]"
          />
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <person-contacts
          :contacts="[
            { url: 'https://getify.com/', type: 'globe' },
            { url: 'https://github.com/getify', type: 'github' },
            { url: 'mail:getify@gmail.com', type: 'mail' }
          ]"
        />
        <template #header>
          Balázs Tápai (Tapesz)
        </template>
        <template #description>
          <p>
            Kyle Simpson is an evangelist of the open web, passionate about all
            things JavaScript. He writes books, teaches JavaScript, speaks, and
            contributes to the world of OSS.
          </p>
        </template>
      </headered-section>
    </template>
  </base-section>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import HeaderedSection from '~/components/HeaderedSection'
import PersonContacts from '~/components/PersonContacts'

export default {
  components: {
    BaseSection,
    HeaderedSection,
    PersonContacts
  }
}
</script>

<style></style>
