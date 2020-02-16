<template>
  <base-section v-bind="$attrs">
    <template slot="header">
      People I follow
    </template>
    <template slot="content">
      <section>
        <header>
          <h1 class="header">
            Technical
          </h1>
        </header>
        <ul class="text-base">
          <li class="person">
            <base-person
              :contacts="[
                { url: 'https://getify.com/', iconClass: 'fa-globe' },
                { url: 'https://github.com/getify', iconClass: 'fa-github' },
                { url: 'mail:getify@gmail.com', iconClass: 'fa-envelope' }
              ]"
            >
              <template slot="header">
                Kyle Simpson (Getify)
              </template>
              <template slot="description">
                <p>
                  Kyle Simpson is an evangelist of the open web, passionate
                  about all things JavaScript. He writes books, teaches
                  JavaScript, speaks, and contributes to the world of OSS.
                </p>
              </template>
            </base-person>
          </li>
          <li class="person">
            <base-person
              :contacts="[
                {
                  url: 'https://github.com/chrisvfritz',
                  iconClass: 'fa-github'
                },
                { url: 'mail:chrisvfritz@gmail.com', iconClass: 'fa-envelope' }
              ]"
            >
              <template slot="header">
                Chris Fritz
              </template>
              <template slot="description">
                <p>
                  Chris Fritz lives in Lansing, Michigan, working on open source
                  and helping companies around the world build incredible web
                  front-ends. He’s most well known for his work as a member of
                  the Vue core team, writing and curating Vue’s documentation,
                  along with other resources to make life simpler for web
                  developers. As a remote consultant nowhere near any coasts, he
                  enjoys traveling the world and answering the inevitable
                  question, "So… why Michigan? Are you hiding from the law or
                  something?" When at home and his lap isn’t occupied by a
                  computer, it usually has a cat on it &ndash; or that may be
                  the other way around.
                </p>
              </template>
            </base-person>
          </li>
          <li class="person">
            <base-person
              :contacts="[
                {
                  url: 'https://markus.oberlehner.net/',
                  iconClass: 'fa-globe'
                },
                {
                  url: 'https://github.com/maoberlehner',
                  iconClass: 'fa-github'
                }
              ]"
            >
              <template slot="header">
                Markus Oberlehner
              </template>
              <template slot="description">
                <p>
                  Markus Oberlehner is a Web Developer, specializing in Vue.
                  He's a passionate about Open Source and he's the creator of
                  the vuex-map-fields, vue-lazy-hydration, and
                  node-sass-magic-importer packages.
                </p>
              </template>
            </base-person>
          </li>
          <li class="person">
            <base-person
              :contacts="[
                {
                  url: 'https://christianheilmann.com/',
                  iconClass: 'fa-globe'
                },
                { url: 'http://github.com/codepo8', iconClass: 'fa-github' },
                {
                  url: 'mail:chris@christianheilmann.com',
                  iconClass: 'fa-envelope'
                }
              ]"
            >
              <template slot="header">
                Christian Heilmann
              </template>
              <template slot="description">
                <p>
                  Chris is a technical and open web evangelist. "Maker of web
                  things. Ponderer of new technology. Lover of simplicity."
                  &ndash; as he puts it. He's a veteran web developer,
                  publisher, speaker and conference organiser.
                </p>
              </template>
            </base-person>
          </li>
        </ul>
      </section>
      <section class="mt-8">
        <header>
          <h1 class="header">
            Non-Technical
          </h1>
        </header>
        <ul class="text-base">
          <li class="person">
            <base-person
              :contacts="[
                { url: 'http://puzser.hu/', iconClass: 'fa-globe' },
                {
                  url:
                    'https://www.youtube.com/channel/UC7ivXUYaRoZb5WDLKksETUA',
                  iconClass: 'fa-youtube'
                },
                {
                  url: 'https://www.facebook.com/Robert.Puzser',
                  iconClass: 'fa-facebook'
                }
              ]"
            >
              <template slot="header">
                Róbert Puzsér
              </template>
              <template slot="description">
                <p>
                  Róbert Puzsér is a Hungarian publicist, anchorman, editor, and
                  social critic. He is one of the most divisive intellectual in
                  the Hungarian cultural space. He has also ran for the position
                  of Lord Mayor of Budapest in 2019, with a modern and green
                  political program to steer Budapest towards a more
                  sustainable, more human-friendly direction.
                </p>
              </template>
            </base-person>
          </li>
          <li class="person">
            <base-person
              :contacts="[
                {
                  url: 'https://www.jordanbpeterson.com/',
                  iconClass: 'fa-globe'
                },
                {
                  url: 'https://www.youtube.com/user/JordanPetersonVideos',
                  iconClass: 'fa-youtube'
                }
              ]"
            >
              <template slot="header">
                Jordan Peterson
              </template>
              <template slot="description">
                <p>
                  Jordan Peterson is a Canadian clinical psychologist and a
                  professor of psychology at the University of Toronto. He's the
                  author of Maps of Meaning: The Architecture of Belief, and 12
                  Rules for Life: An Antidote to Chaos. He actively criticizes
                  certain political extremities and is always willing to
                  describe and analyze cultural problems in their full spectrum
                  and depth. He maintains an active presence on YouTube, with
                  hundreds of hours of lectures.
                </p>
              </template>
            </base-person>
          </li>
        </ul>
      </section>
    </template>
  </base-section>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import BasePerson from '~/components/BasePerson'

export default {
  components: {
    BaseSection,
    BasePerson
  }
}
</script>

<style lang="less">
.header {
  @apply text-2xl shadow p-2 pl-4 relative;
  background-color: theme('colors.teal.800');

  &::before,
  &::after {
    display: block;
    content: '';
    position: absolute;
    background-color: theme('colors.gray.100');
    @apply shadow-inner;
  }

  &::before {
    width: 40px;
    height: 40px;
    right: -140px;
    top: -20px;
    transform: rotateZ(-30deg);
  }

  &::after {
    width: 20px;
    height: 20px;
    right: -200px;
    top: -100px;
    transform: rotateZ(-60deg);
  }
}

.person {
  position: relative;
  @apply pl-4 pr-16 mt-4;
}

.person::before,
.person::after {
  display: block;
  content: '';
  position: absolute;
  width: 20px;
  height: 100%;
  top: 0;
  right: 0;
  background-color: theme('colors.teal.800');
  background-color: theme('colors.gray.100');
  @apply shadow-inner;
}
</style>
