<template>
  <section class="h-screen w-screen relateive bg-green-900">
    <img
      src="@/assets/images/tibor-zombory-elasticmind-profile-picture.jpg"
      alt="tibor-zombory-elasticmind-profile-picture"
      class="profile-image"
    />
    <ul class="list-none">
      <li
        v-for="contact in $_contacts"
        :key="contact.url"
        class="contact-list__item w-12 h-12 rounded-full bg-gray-100"
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
    <button
      class="border-2 rounded-lg border-yellow-500 px-6 py-2 m-12 absolute flex items-center bottom-0 right-0 text-2xl text-yellow-500 hover:text-yellow-300 hover:border-yellow-300 transition-colors duration-150 ease-in"
    >
      <a href="cv-tibor-zombory.pdf">
        CV
      </a>
      <icon type="chevronRight" />
    </button>
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
.profile-image {
  @apply w-1/6 rounded-full absolute left-1/2 top-1/2 z-10;
  transform: translate(-50%, -50%);
}

@contact-ring-radius: 450px;
@contact-count: 6;

.contact-list__item {
  position: absolute;
  left: 50%;
  top: 50%;
  animation-duration: 0.5s;
  animation-play-state: running;
  animation-delay: 0;
  animation-direction: normal;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  each(range(@contact-count), {
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
        transform: translate(-50% + @contact-ring-radius * cos(2 * pi() * (@value - 1) / @contact-count), -50% + @contact-ring-radius * sin(2 * pi() * (@value - 1) / @contact-count));
      }
    }
  });
}
</style>
