<template>
  <base-section v-bind="$attrs">
    <template #header>
      People I follow
    </template>
    <template #content>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Kyle Simpson (Getify)
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
        <template #header>
          Chris Fritz
        </template>
        <template #description>
          <p>
            Chris Fritz lives in Lansing, Michigan, working on open source and
            helping companies around the world build incredible web front-ends.
            He’s most well known for his work as a member of the Vue core team,
            writing and curating Vue’s documentation, along with other resources
            to make life simpler for web developers. As a remote consultant
            nowhere near any coasts, he enjoys traveling the world and answering
            the inevitable question, "So… why Michigan? Are you hiding from the
            law or something?" When at home and his lap isn’t occupied by a
            computer, it usually has a cat on it &ndash; or that may be the
            other way around.
          </p>
          <person-contacts
            :contacts="[
              {
                url: 'https://github.com/chrisvfritz',
                type: 'github'
              },
              { url: 'mail:chrisvfritz@gmail.com', type: 'mail' }
            ]"
          />
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Markus Oberlehner
        </template>
        <template #description>
          <p>
            Markus Oberlehner is a Web Developer, specializing in Vue. He's a
            passionate about Open Source and he's the creator of the
            vuex-map-fields, vue-lazy-hydration, and node-sass-magic-importer
            packages.
          </p>
          <person-contacts
            :contacts="[
              {
                url: 'https://markus.oberlehner.net/',
                type: 'globe'
              },
              {
                url: 'https://github.com/maoberlehner',
                type: 'github'
              }
            ]"
          />
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Christian Heilmann
        </template>
        <template #description>
          <p>
            Chris is a technical and open web evangelist. "Maker of web things.
            Ponderer of new technology. Lover of simplicity." &ndash; as he puts
            it. He's a veteran web developer, publisher, speaker and conference
            organiser.
          </p>
          <person-contacts
            :contacts="[
              {
                url: 'https://christianheilmann.com/',
                type: 'globe'
              },
              { url: 'http://github.com/codepo8', type: 'github' },
              {
                url: 'mail:chris@christianheilmann.com',
                type: 'mail'
              }
            ]"
          />
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Róbert Puzsér
        </template>
        <template #description>
          <p>
            Róbert Puzsér is a Hungarian publicist, anchorman, editor, and
            social critic. He is one of the most divisive intellectual in the
            Hungarian cultural space. He has also ran for the position of Lord
            Mayor of Budapest in 2019, with a modern and green political program
            to steer Budapest towards a more sustainable, more human-friendly
            direction.
          </p>
          <person-contacts
            :contacts="[
              { url: 'http://puzser.hu/', type: 'globe' },
              {
                url: 'https://www.youtube.com/channel/UC7ivXUYaRoZb5WDLKksETUA',
                type: 'youtube'
              },
              {
                url: 'https://www.facebook.com/Robert.Puzser',
                type: 'facebook'
              }
            ]"
          />
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Jordan Peterson
        </template>
        <template #description>
          <p>
            Jordan Peterson is a Canadian clinical psychologist and a professor
            of psychology at the University of Toronto. He's the author of Maps
            of Meaning: The Architecture of Belief, and 12 Rules for Life: An
            Antidote to Chaos. He actively criticizes certain political
            extremities and is always willing to describe and analyze cultural
            problems in their full spectrum and depth. He maintains an active
            presence on YouTube, with hundreds of hours of lectures.
          </p>
          <person-contacts
            :contacts="[
              {
                url: 'https://www.jordanbpeterson.com/',
                type: 'globe'
              },
              {
                url: 'https://www.youtube.com/user/JordanPetersonVideos',
                type: 'youtube'
              }
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

<style lang="less"></style>
