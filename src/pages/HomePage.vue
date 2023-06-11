<template>
  <q-page
    class="bg-black column justify-center content-center text-uppercase text-bold"
  >
    <img
      src="~assets/HomePageBG.png"
      alt="bg img"
      class="fixed-bottom"
      style="width: 100vw"
    />
    <div class="text-center text-bold text-caption text-grey fixed-top q-mt-lg">
      @ alpha_webpage
    </div>

    <div
      class="text-white column justify-between content-center items-center"
      style="height: 45vh; z-index: 999"
    >
      <div class="column items-center">
        <div class="text-h6 text-bold">myongji college</div>
        <div class="text-h2 text-bold">alpha</div>
      </div>

      <div class="text-primary">????????????????????????????????</div>

      <div class="row q-gutter-xl">
        <div
          class="column items-center cursor-pointer"
          @click="$router.push('/home/intro')"
        >
          <div class="q-my-sm">intro</div>
          <img src="~assets/2_icon_1.png" alt="icon" width="25" />
        </div>
        <div
          class="column items-center cursor-pointer"
          @click="$router.push('/home/curriculum')"
        >
          <div class="q-my-sm">curriculum</div>
          <img src="~assets/2_icon_2.png" alt="icon" width="25" />
        </div>
        <div
          class="column items-center cursor-pointer"
          @click="$router.push('/home/project')"
        >
          <div class="q-my-sm">project</div>
          <img src="~assets/2_icon_3.png" alt="icon" width="25" />
        </div>
      </div>

      <div class="text-primary">????????????????????????????????</div>
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
