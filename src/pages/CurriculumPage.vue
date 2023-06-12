<template>
  <q-page
    class="q-pa-lg bg-black mainFont text-bold text-white column justify-start text-uppercase non-selectable"
  >
    <div class="q-gutter-sm">
      <q-icon name="assignment" size="135px"></q-icon>
      <div class="text-h2 text-bold">this page is about</div>
      <div class="text-primary text-h2 text-bold">; curriculum</div>
      <div class="text-lowercase text-bold">$db = dbconnection();</div>
    </div>

    <div class="q-my-lg q-mt-xl">
      <div class="row items-end q-mb-lg">
        <img src="~assets/pinIcon.png" alt="icon" width="30" />
        <div class="text-primary q-ml-sm">system hacking</div>
      </div>
      <q-list>
        <q-item v-for="cur in system" :key="cur" class="q-py-md">
          <q-item-section>
            <q-item-label class="text-subtitle1 text-white text-bold"
              ><span class="text-h3">{{ cur.index }}</span
              >주차</q-item-label
            >
            <q-item-label class="q-ml-lg">{{ cur.stage }}</q-item-label>
            <q-item-label class="q-ml-lg">
              {{ cur.content }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <div class="row items-end q-mt-xl q-mb-lg">
        <img src="~assets/pinIcon.png" alt="icon" width="30" />
        <div class="text-primary q-ml-sm">web hacking</div>
      </div>
      <q-list>
        <q-item v-for="cur in web" :key="cur" class="q-py-md">
          <q-item-section>
            <q-item-label class="text-subtitle1 text-white text-bold"
              ><span class="text-h3">{{ cur.index }}</span
              >주차</q-item-label
            >
            <q-item-label class="q-ml-lg">
              {{ cur.content }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "CurriculumPage",
  setup() {
    const input = ref("");
    const $router = useRouter();
    const system = [
      {
        index: 1,
        stage: "STAGE 1~2 (드림핵)",
        content:
          "리눅스 환경 구축 및 linux memory layout, 컴퓨터 구조, 어셈블리어에 대해 알아보기",
      },
      {
        index: 2,
        stage: "STAGE 3~4 (드림핵)",
        content:
          "GDB 및 PWNTOOLS 설치 및 SHELLCODE에 대해 학습하며 문제 풀어보기",
      },
      {
        index: 3,
        stage: "STAGE 5 (드림핵)",
        content: "STACK BUFFER OVERFLOW에 대해 학습하고 심화 문제 풀어보기",
      },
      {
        index: 4,
        stage: "PWNABLE.KR",
        content: "FD, COLLISION 문제를 풀어보고 라이트업 작성",
      },
      {
        index: 5,
        stage: "PWNABLE.KR",
        content: "BOF 문제를 풀어보고 라이트업 작성",
      },
      {
        index: 6,
        stage: "STAGE 6 (드림핵)",
        content: "STACK CANARY에 대해 학습하고 실습해보기",
      },
      {
        index: 7,
        stage: "STAGE 7 (드림핵)",
        content: "BYPASS NX & ASLR에 대해 학습 후 문제 풀어보기",
      },
    ];
    const web = [
      {
        index: 1,
        content:
          "인프런의 반드시 알고 넘어가야 할 웹 기술 기초 편의 쿠키와 세션 파트까지 듣고 정리하기",
      },
      {
        index: 2,
        content:
          "드림핵 web hacking lacture의 stage 2 background - web 까지 학습하고 정리하기",
      },
      { index: 3, content: "STAGE 3 COOKIE & SESSION 학습하고 문제 풀어보기" },
      {
        index: 4,
        content:
          "인프런 반드시 알고 넘어가야 할 웹 기술 기초 편의 웹 아키텍쳐 분석부터 끝까지 학습 후 정리하기",
      },
      {
        index: 5,
        content:
          "WEBHACKING.KR의 OLD-1 풀어보고 라이트업 작성하기 세미나를 듣고 SQL INJECTION에 대해 개념 학습 후 LOS 문제 풀어보기",
      },
      {
        index: 6,
        content:
          "BLIND SQL INJECTION의 개념에 대해 학습하고 LOS ORC풀어보기 (LOS.RUBIYA)",
      },
      { index: 7, content: "STAGE 4~5 학습하고 정리하기 (드림핵)" },
    ];

    return {
      system,
      web,
    };
  },
});
</script>
