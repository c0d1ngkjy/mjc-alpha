<template>
  <q-page
    class="non-selectable mainFont bg-black column justify-center content-center text-uppercase text-bold"
  >
    <img
      src="~assets/HomePageBG.png"
      alt="bg img"
      class="absolute-bottom"
      style="width: 100%"
    />

    <q-banner class="absolute-top bg-primary text-white text-center">
      <div>최하호 수석 존버 :)</div>
    </q-banner>

    <div
      class="text-white column justify-center content-center items-center"
      style="height: 45vh; z-index: 999"
    >
      <div class="column items-center">
        <div class="text-h6 text-bold">myongji college</div>
        <div class="text-bold text">alpha</div>
      </div>

      <div class="row q-gutter-xl" style="font-size: 3vw">
        <div
          class="column items-center cursor-pointer"
          @click="$router.push('/home/intro')"
        >
          <div class="q-my-sm">intro</div>
          <q-icon name="local_fire_department" size="lg"></q-icon>
        </div>
        <div
          class="column items-center cursor-pointer"
          @click="$router.push('/home/curriculum')"
        >
          <div class="q-my-sm">curriculum</div>
          <q-icon name="assignment" size="lg"></q-icon>
        </div>
        <div
          class="column items-center cursor-pointer"
          @click="$router.push('/home/project')"
        >
          <div class="q-my-sm">project</div>
          <q-icon name="attach_file" size="lg"></q-icon>
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

<style scoped>
.text {
  animation: float 1s ease-in-out infinite alternate;
  perspective: 100px;
  font-size: 15vh;
  text-shadow: 1px 1px 0 #d001c4, 2px 2px 0 #b83aa6, 3px 3px 0 #9e5290,
    4px 4px 0 #8a6d7b, 5px 5px 0 #79906a, 6px 6px 0 #69aa5a, 7px 7px 0 #56c149,
    8px 8px 0 #41d533, 9px 9px 0 #2cde1b, 10px 10px 0 #21ba45;
}

@keyframes float {
  from {
    transform: translateY(0) rotateX(20deg) rotateY(-30deg);
  }
  to {
    transform: translateY(10px) rotateX(20deg) rotateY(-30deg);
  }
}
</style>
