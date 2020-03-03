<template>
  <div class="w-full">
    <app-header />
    <about id="about" />
    <values id="values" :primary="true" />
    <network id="network" />
    <people id="people" :primary="true" />
    <hobbies id="hobbies" />
    <app-footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import About from '~/components/About.vue'
import Values from '~/components/Values.vue'
import Network from '~/components/Network.vue'
import People from '~/components/People.vue'
import Hobbies from '~/components/Hobbies.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    AppHeader: Header,
    About,
    Values,
    Network,
    People,
    Hobbies,
    AppFooter: Footer
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
