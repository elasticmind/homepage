<template>
  <section class="about">
    <img
      src="@/assets/images/tibor-zombory-elasticmind-profile-picture.jpg"
      alt="tibor-zombory-elasticmind-profile-picture"
      class="profile-image"
    />
    <ul class="contact-list">
      <li
        v-for="contact in $_contacts"
        :key="contact.url"
        class="contact-list__item"
      >
        <a :href="contact.url">
          <div
            class="w-full h-full rounded-full flex justify-center items-center"
          >
            <icon :type="contact.type" />
          </div>
        </a>
      </li>
    </ul>
    <article
      class="w-full bottom-0 p-4 md:p-12 mb-8 mt-32 text-center bg-primary text-light"
    >
      <h1
        class="relative z-10 text-5xl md:text-6xl font-sans font-hairline tracking-wide"
      >
        Tibor Zombory
      </h1>
      <h2
        class="relative z-10 text-2xl text-light font-roboto-slab font-semibold tracking-widest"
      >
        Javascript developer
      </h2>
    </article>
    <div class="flex">
      <a
        href="cv-tibor-zombory.pdf"
        class="rounded-lg border-2 flex items-center border-primary-light pl-8 pr-6  mb-2 mr-2 md:mr-4 ml-auto text-2xl text-primary-light z-30 hover:bg-primary-light hover:text-light"
      >
        CV
        <icon class="inline-block" type="chevronRight" />
      </a>
    </div>
  </section>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  },
  created() {
    this.$_contacts = [
      {
        url:
          'https://www.google.com/maps/place/Szeged/data=!4m2!3m1!1s0x474487e22bcce54b:0x400c4290c1e1190?sa=X&ved=2ahUKEwiN9diP4cvnAhVFlYsKHSqWDWkQ8gEwFXoECBIQBA',
        type: 'location'
      },
      {
        url: 'tel:+36309935393',
        type: 'phone'
      },
      {
        url: 'https://elasticmind.design',
        type: 'globe'
      },
      {
        url: 'https://github.com/elasticmind',
        type: 'github'
      },
      {
        url: 'https://linkedin.com/in/elasticmind',
        type: 'linkedin'
      },
      {
        url: 'mailto:contact@elasticmind.design',
        type: 'mail'
      }
    ]
  }
}
</script>

<style lang="less">
.about {
  @apply relative min-h-screen w-full bg-dark-dark z-20 pt-48;
}

:root {
  --contact-ring-radius: 10rem;
  --contact-ring-vertical-gap: 6rem;
}

.profile-image {
  @apply rounded-full relative z-10 border-2 p-1 mx-auto w-48;
}

@screen md {
  :root {
    --contact-ring-radius: 12rem;
    --contact-ring-vertical-gap: 8rem;
  }

.profile-image {
    @apply w-64;
  }
}

@contact-count: 6;

.contact-list {
  @apply w-0 list-none mx-auto;
  margin-top: calc(-1 * var(--contact-ring-vertical-gap));
  margin-bottom: calc(2 * var(--contact-ring-vertical-gap));
}

.contact-list__item {
  @apply absolute w-12 h-12 rounded-full text-light z-0;
  animation-duration: 0.5s;
  animation-play-state: running;
  animation-delay: 0;
  animation-direction: normal;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  each(range(0, @contact-count), {
    &:nth-child(@{value}) {
      transform: translate(-50%, -50%);
      animation-name: ~"animation-@{value}";
      animation-delay: 1s + (0.1s * @value);
    }

    @keyframes ~"animation-@{value}" {
      0% {
        transform: translate(-50%, -50%);
      }

      100% {
        transform: translate(
          calc(-50% + var(--contact-ring-radius) * cos(2 * pi() * (@value - 5) / @contact-count)),
          calc(-50% + var(--contact-ring-radius) * sin(2 * pi() * (@value - 5) / @contact-count))
        );
      }
    }
  });
}
</style>
