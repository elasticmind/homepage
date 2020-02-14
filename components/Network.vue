<template>
  <base-section v-bind="$attrs">
    <template slot="header">
      My favorite people
    </template>
    <template slot="content">
      <article>
        <header>
          <h2>
            Dadache Abdel Hakim
          </h2>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, eveniet?
          Adipisci rem repellendus nulla ad. Doloribus iusto repellendus, alias
          animi autem quod nam, optio officia beatae molestiae minus, quas vel?
        </p>
        <header>
          <h2>
            Balázs Tápai (Tapesz)
          </h2>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, eveniet?
          Adipisci rem repellendus nulla ad. Doloribus iusto repellendus, alias
          animi autem quod nam, optio officia beatae molestiae minus, quas vel?
        </p>
      </article>
    </template>
  </base-section>
</template>

<script>
import BaseSection from '~/components/BaseSection'

export default {
  components: {
    BaseSection
  }
}
</script>

<style></style>
