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
            Ever since I've worked closely with Hakim, to me he's been the
            definition of quality assurance. With his ruthless attention to
            detail and a very industrious attitude, he can bring out the best in
            the people he works with. He is also highly sensitive to the
            cultural aspects of his surroundings and is quick to give honest
            feedback.
          </p>
          <p>
            Hakim is motivated to "put a brick into the Universe", ambitious
            towards space exploration and many other aspects of collective
            progression. He has a wide range of experiences in Automotive
            software and hardware, he is an acting Security consultant and the
            head of a QA department at a company I've worked previously.
          </p>
          <person-contacts
            :contacts="[
              {
                url:
                  'https://www.linkedin.com/in/hakim-abdel-dadache-a219a7110/',
                type: 'linkedin'
              },
              { url: 'tel:+36306578256', type: 'phone' }
            ]"
          />
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Balázs Tápai (Tapesz)
        </template>
        <template #description>
          <p>
            I have worked with Balázs, on multiple projects in the past. He is a
            developer who believes in quality software development and life long
            learning. He is a highly skilled Angular developer and a technical
            lead who constantly aims to improve the development experience of
            his team. He loves automation, has strong code review culture and we
            always have extremely good technical discussions on different
            topics. These serve as a basis for us to learn a lot from each other
            and I am sure we are going to continue growing. He writes
            competitive articles in his
            <a href="http://tapaibalazs.netlify.com">blog</a> about web
            development, automation, and developer collaboration.
          </p>
          <person-contacts
            :contacts="[
              {
                url: 'https://www.linkedin.com/in/tapaibalazs/',
                type: 'linkedin'
              },
              { url: 'https://twitter.com/TapaiBalazs', type: 'twitter' }
            ]"
          />
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

<style lang="less" scoped>
a {
  @apply underline font-bold;
}
</style>
