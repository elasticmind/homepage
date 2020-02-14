<template>
  <base-section v-bind="$attrs">
    <template slot="header">
      People I follow
    </template>
    <template slot="content">
      <section>
        <header>
          <h1>
            Technical
          </h1>
        </header>
        <article>
          <header>
            <h2>
              Getify
            </h2>
          </header>
          <ul>
            <li>
              <p>
                Contact #1_1
              </p>
            </li>
          </ul>
          <header>
            <h2>
              Chris Fritz
            </h2>
          </header>
          <ul>
            <li>
              <p>
                Contact #1_1
              </p>
            </li>
          </ul>
          <header>
            <h2>
              Mark Oberman
            </h2>
          </header>
          <ul>
            <li>
              <p>
                Contact #1_1
              </p>
            </li>
          </ul>
          <header>
            <h2>
              chris heimlich
            </h2>
          </header>
          <ul>
            <li>
              <p>
                Contact #1_1
              </p>
            </li>
          </ul>
        </article>
      </section>
      <section>
        <header>
          <h1>
            Non-Technical
          </h1>
        </header>
        <article>
          <header>
            <h2>
              Róbert Puzsér
            </h2>
          </header>
          <ul>
            <li>
              <p>
                Contact #1_1
              </p>
            </li>
          </ul>
          <header>
            <h2>
              Jordan Peterson
            </h2>
          </header>
          <ul>
            <li>
              <p>
                Contact #1_1
              </p>
            </li>
          </ul>
        </article>
      </section>
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
