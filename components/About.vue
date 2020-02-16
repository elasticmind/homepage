<template>
  <section class="h-screen w-screen relateive bg-green-900">
    <img
      src="@/assets/images/tibor-zombory-elasticmind-profile-picture.jpg"
      alt="tibor-zombory-elasticmind-profile-picture"
      class="w-1/6 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    />
    <ul class="list-none">
      <li
        v-for="contact in $_contacts"
        :key="contact.url"
        class="contact-list__item w-12 h-12 rounded-full bg-gray-100"
      >
        <a :href="contact.url">
          <div class="w-full h-full rounded-full">
            <i
              class="fa m-auto text-2xl align-middle"
              :class="contact.iconClass"
              aria-hidden="true"
            >
            </i>
          </div>
        </a>
      </li>
    </ul>
    <button
      class="border-2 rounded-lg border-yellow-500 px-6 py-2 m-12 absolute bottom-0 right-0 text-2xl text-yellow-500 hover:text-yellow-300 hover:border-yellow-300 transition-colors duration-150 ease-in"
    >
      <a href="cv-tibor-zombory.pdf">
        CV
      </a>
      <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i>
    </button>
  </section>
</template>

<script>
export default {
  created() {
    this.$_contacts = [
      {
        url:
          'https://www.google.com/maps/place/Szeged/data=!4m2!3m1!1s0x474487e22bcce54b:0x400c4290c1e1190?sa=X&ved=2ahUKEwiN9diP4cvnAhVFlYsKHSqWDWkQ8gEwFXoECBIQBA',
        iconClass: 'fa-map-marker'
      },
      {
        url: 'tel:+36309935393',
        iconClass: 'fa-mobile'
      },
      {
        url: 'https://elasticmind.design',
        iconClass: 'fa-globe'
      },
      {
        url: 'https://github.com/elasticmind',
        iconClass: 'fa-github'
      },
      {
        url: 'https://linkedin.com/in/elasticmind',
        iconClass: 'fa-linkedin-square'
      },
      {
        url: 'mailto:contact@elasticmind.design',
        iconClass: 'fa-envelope'
      }
    ]
  }
}
</script>

<style lang="less" scoped>
@contact-ring-radius: 300px;
@contact-count: 6;

.contact-list__item {
  position: absolute;
  left: 50%;
  top: 50%;

  each(range(@contact-count), {
    &:nth-child(@{value}) {
      transform: translate(-50% + @contact-ring-radius * cos(2 * pi() * (@value - 1) / @contact-count), -50% + @contact-ring-radius * sin(2 * pi() * (@value - 1) / @contact-count));
    }
  });

  &:hover {
    box-shadow: 0 0 10px black;
  }
}
</style>
