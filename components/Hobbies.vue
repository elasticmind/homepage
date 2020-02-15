<template>
  <base-section v-bind="$attrs">
    <template slot="header">
      Hobbies
    </template>
    <template slot="content">
      <hobby class="hobby">
        <template slot="header">
          Coffee
        </template>
        <template slot="content">
          <article>
            <p>
              I'm a coffee lover, and a proud owner of a Gaggia Classic Pro
              machine. I regularly have friends over for coffee and
              technical/personal exchange of views. Were you ever in the area
              and would like to drop by, just give me a
              <a href="mailto:contact@elasticmind.design">heads up</a>! :)
            </p>
          </article>
          <aside class="image cat" />
        </template>
      </hobby>
      <hobby class="hobby">
        <template slot="header">
          Cats
        </template>
        <template slot="content">
          <article>
            <p>
              Although I do not own a cat currently, I adore them. I don't
              externalize it much in the form of dressing or accessories, but I
              easily melt whenever I meet one. It's also my spirit animal, and
              this quote from Ernest Hemingway perfectly explains why:
            </p>
            <blockquote>
              A cat has absolute emotional honesty: human beings, for one reason
              or another, may hide their feelings, but a cat does not.
            </blockquote>
          </article>
          <aside class="image cat" />
        </template>
      </hobby>
      <hobby class="hobby">
        <template slot="header">
          Nature
        </template>
        <template slot="content">
          <article>
            <p>
              I firmly believe that we as a species have lost our way. I love
              technology and I do not think that we should go back to the caves,
              but our thinking has diverged greatly from ways that are
              sustainable, simple and honest. I try to live a minimalistic and
              green lifestyle and encourage my environment to do the same.
            </p>
          </article>
          <aside class="image cat" />
        </template>
      </hobby>
      <hobby class="hobby">
        <template slot="header">
          Music
        </template>
        <template slot="content">
          <article>
            <p>
              I once heard a quote in a video, but I do not its author:
            </p>
            <blockquote>
              All art is a question mark that only you know the answer to.
            </blockquote>
            <p>
              The biggest question mark in the topic of art for me has always
              been music. In the past I played the piano, the guitar and the
              drums for varying amounts of time. I listen to many different
              genres, most notably classical, modern symphonic, indie, IDM and
              ambient. For me, music has been a focusing tool for many years: if
              not for work, then for reflections.
            </p>
          </article>
          <aside class="image cat" />
        </template>
      </hobby>
    </template>
  </base-section>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import Hobby from '~/components/Hobby'

export default {
  components: {
    BaseSection,
    Hobby
  }
}
</script>

<style lang="less">
.image {
  @apply w-48 bg-cover;
  flex: 0 0 400px;
  height: 400px;
  clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
}

.cat {
  background-image: url('~assets/images/maine-coon-1.jpg');
  background-position: 80% 0;
}

.hobby:not(:last-child) {
  @apply mb-8;
}
</style>
