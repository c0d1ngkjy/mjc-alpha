<template>
  <q-page
    class="non-selectable mainFont bg-black column justify-center content-center text-uppercase text-bold"
  >
    <img
      src="~assets/HomePageBG.png"
      alt="bg img"
      class="fixed-bottom"
      style="width: 100vw"
    />

    <q-banner class="fixed-top bg-primary text-white text-center"
      >최하호 수석 존버</q-banner
    >
    <div
      class="text-white column justify-center content-center items-center"
      style="height: 45vh; z-index: 999"
    >
      <div class="column items-center">
        <div class="text-h6 text-bold">myongji college</div>
        <div class="text-h1 text-bold">alpha</div>
      </div>

      <div class="row q-gutter-xl text-h5">
        <div
          class="column items-center cursor-pointer"
          @click="$router.push('/home/intro')"
        >
          <div class="q-my-sm">intro</div>
          <img src="~assets/introIcon.png" alt="icon" width="25" />
        </div>
        <div
          class="column items-center cursor-pointer"
          @click="$router.push('/home/curriculum')"
        >
          <div class="q-my-sm">curriculum</div>
          <img src="~assets/curriIcon.png" alt="icon" width="25" />
        </div>
        <div
          class="column items-center cursor-pointer"
          @click="$router.push('/home/project')"
        >
          <div class="q-my-sm">project</div>
          <img src="~assets/proIcon.png" alt="icon" width="25" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HomePage",
  setup() {
    const input = ref("");
    const $router = useRouter();

    return {
      input,
    };
  },
});
</script>
