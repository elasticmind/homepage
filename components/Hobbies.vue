<template>
  <base-section v-bind="$attrs">
    <template #header>
      Hobbies
    </template>
    <template #content>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Coffee
        </template>
        <template #description>
          <div class="description-wrapper">
            <article class="description">
              <p>
                I'm a coffee lover and a proud owner of a Gaggia Classic Pro and
                a Eureka Mignon Specialitá. It's all about that speciality
                coffee shop quality and experience. I regularly have friends
                over for coffee and technical/personal exchange of views. Were
                you ever in the area and would like to drop by, just give me a
                <a href="mailto:contact@elasticmind.design">heads up</a>! :)
              </p>
            </article>
            <aside class="image coffee" />
          </div>
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Cats
        </template>
        <template #description>
          <div class="description-wrapper">
            <article class="description">
              <p>
                Although I do not own a cat currently, I adore them. I don't
                externalize it much in the form of dressing or accessories, but
                I easily melt whenever I meet one. It's also my spirit animal,
                and this quote from Ernest Hemingway perfectly explains why:
              </p>
              <blockquote>
                A cat has absolute emotional honesty: human beings, for one
                reason or another, may hide their feelings, but a cat does not.
              </blockquote>
            </article>
            <aside class="image cat" />
          </div>
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Nature
        </template>
        <template #description>
          <div class="description-wrapper">
            <article class="description">
              <p>
                I firmly believe that we as a species have lost our way. I love
                technology and I do not think that we should go back to the
                caves, but our thinking has diverged greatly from ways that are
                sustainable, simple and honest. I try to live a minimalistic and
                green lifestyle and encourage my environment to do the same.
              </p>
            </article>
            <aside class="image nature" />
          </div>
        </template>
      </headered-section>
      <headered-section :primary="!$attrs.primary">
        <template #header>
          Music
        </template>
        <template #description>
          <div class="description-wrapper">
            <article class="description">
              <p>
                I once heard a quote in a video, but I do not its author:
              </p>
              <blockquote>
                All art is a question mark that only you know the answer to.
              </blockquote>
              <p>
                The biggest question mark in the topic of art for me has always
                been music. In the past, I played the piano, the guitar and the
                drums for varying amounts of time. I listen to many different
                genres, most notably classical, modern symphonic, indie, IDM and
                ambient. For me, music has been a focusing tool for many years:
                if not for work, then for reflections.
              </p>
            </article>
            <aside class="image music" />
          </div>
        </template>
      </headered-section>
    </template>
  </base-section>
</template>

<script>
import BaseSection from '~/components/BaseSection'
import HeaderedSection from '~/components/HeaderedSection'

export default {
  components: {
    BaseSection,
    HeaderedSection
  }
}
</script>

<style lang="less">
.description-wrapper {
  @apply flex flex-col;
}

.description {
  @apply w-full;
}

@screen lg {
  .description-wrapper {
    @apply flex-row;
  }

  .description {
    @apply w-3/5;
  }

  .image {
    @apply ml-auto;
    clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
  }
}

.image {
  @apply w-48 bg-cover self-center mt-8;
  flex: 0 0 300px;
  height: 400px;
  clip-path: unset;
}

@screen lg {
  .image {
    @apply mt-0;
  }
}

.cat {
  background-image: url('~assets/images/cat.jpg');
  background-position: 80% 0;
  height: 300px;
}

.coffee {
  background-image: url('~assets/images/coffee.jpg');
  background-position: 55% 0;
  height: 200px;
}

.music {
  background-image: url('~assets/images/music.jpg');
  background-size: 110%;
  background-position: 0 69%;
  height: 300px;
}

.nature {
  background-image: url('~assets/images/nature.jpg');
  background-position: 0 60%;
  height: 200px;
}
</style>
