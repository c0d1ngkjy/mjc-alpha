<template>
  <q-page
    class="q-pa-lg bg-black mainFont text-bold text-white column justify-start text-uppercase non-selectable"
  >
    <div class="q-gutter-sm">
      <q-icon name="local_fire_department" size="135px"></q-icon>
      <div class="text-h2 text-bold">this page is about</div>
      <div class="text-primary text-h2 text-bold">; intro</div>
      <div class="text-lowercase text-bold">$db = dbconnection();</div>
    </div>

    <div class="q-mt-md row justify-between">
      <div class="col column justify-between">
        <pre class="gt-sm">
ALPHA는 2019년 명지전문대학 인터넷보안공학과에서 시작된 동아리입니다.
ALPHA는 처음, 최고, 리더십으로 우리 보안동아리는 최고의 역할을 수행할 것이고,
리더십을 가지고 커뮤니티를 형성한다는 의미를 가지고 있습니다.
시스템과 웹으로 분야을 나누어 프로그래밍과 알고리즘, 해킹 공격에 대해 학습하고,
다양한 경험을 위해 CTF, 세미나, 컨퍼런스 등 참여 활동을 하고 있습니다
        </pre>
        <pre class="lt-md">
ALPHA는 2019년 명지전문대학
인터넷보안공학과에서 시작된 동아리입니다.
ALPHA는 처음, 최고, 리더십으로
우리 보안동아리는 최고의 역할을 수행할 것이고,
리더십을 가지고 커뮤니티를 형성한다는
의미를 가지고 있습니다.
시스템과 웹으로 분야을 나누어
프로그래밍과 알고리즘, 해킹 공격에 대해 학습하고,
다양한 경험을 위해 CTR, 세미나, 컨퍼런스 등
참여 활동을 하고 있습니다
        </pre>
      </div>

      <!-- <div class="col relative-position gt-md">
        <q-card
          square
          class="bg-grey-5"
          style="
            border: 3px white solid;
            min-width: 350px;
            width: 80%;
            z-index: 1;
          "
        >
          <q-card-section
            class="q-pa-sm bg-primary row justify-between items-center text-white"
          >
            <div class="text-bold text-subtitle1">Alpha</div>
            <q-btn square dense color="grey-5 shadow-3 vinBtn" :ripple="false">
              <q-icon name="close" color="grey-8"></q-icon>
            </q-btn>
          </q-card-section>
          <q-card-section style="height: 200px"></q-card-section>
        </q-card>

        <q-card
          square
          class="bg-grey-5 absolute"
          style="
            border: 3px white solid;
            min-width: 350px;
            width: 80%;
            transform: translateY(-300px) translateX(100px);
            filter: blur(4px);
          "
        >
          <q-card-section
            class="q-pa-sm bg-primary row justify-between items-center text-white"
          >
            <div class="text-bold text-subtitle1">Alpha</div>
            <q-btn square dense color="grey-5 shadow-3 vinBtn" :ripple="false">
              <q-icon name="close" color="grey-8"></q-icon>
            </q-btn>
          </q-card-section>
          <q-card-section style="height: 200px"></q-card-section>
        </q-card>
      </div> -->
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "IntroPage",
  setup() {
    const input = ref("");
    const $router = useRouter();

    return {};
  },
});
</script>
