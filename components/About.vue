<template>
  <section class="about z-20">
    <div class="absolute w-full h-full"></div>
    <img
      src="@/assets/images/tibor-zombory-elasticmind-profile-picture.jpg"
      alt="tibor-zombory-elasticmind-profile-picture"
      class="profile-image"
    />
    <ul class="list-none">
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
    <article class="absolute w-full bottom-0 p-12 mb-8 text-center text-light">
      <div
        class="bg-primary-dark h-full w-full absolute top-0 left-0 opacity-25"
      ></div>
      <h1 class="relative z-10 text-6xl font-sans font-hairline">
        Tibor Zombory
      </h1>
      <h2
        class="relative z-10 text-2xl text-primary-light font-roboto-slab font-semibold"
      >
        Javascript developer
      </h2>
      <a
        href="cv-tibor-zombory.pdf"
        class="rounded-lg border-2 flex items-center border-secondary-light px-6 fixed right-0 bottom-0 mb-12 mr-4 text-xl text-secondary-light"
      >
        CV
        <icon class="inline-block" type="chevronRight" />
      </a>
    </article>
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

<style lang="less" scoped>
.about {
  @apply relative h-screen w-full bg-dark;
}

.profile-image {
  @apply w-1/6 rounded-full absolute z-10 border-2 p-1;
  top: 24rem;
  left: 50%;
  transform: translate(-50%, -50%);
}

@contact-ring-radius: 450px;
@contact-count: 6;

.contact-list__item {
  @apply absolute left-1/2 w-12 h-12 rounded-full text-light;
  top: 24rem;
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
        transform: translate(-50% + @contact-ring-radius * cos(2 * pi() * (@value - 2) / @contact-count), -50% + @contact-ring-radius * sin(2 * pi() * (@value - 2) / @contact-count));
      }
    }
  });
}
</style>
