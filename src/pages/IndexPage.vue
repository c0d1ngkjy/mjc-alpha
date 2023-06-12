<template>
  <q-page class="mainFont bg-dark flex flex-center non-selectable">
    <div class="fixed-bottom text-center text-grey q-mb-md text-caption">
      all rights reserved codingkjy28@gmail.com
    </div>
    <q-card
      square
      class="bg-grey-5"
      style="border: 3px white solid; min-width: 350px; width: 25%"
    >
      <q-card-section
        class="q-pa-sm bg-blue-10 row justify-between items-center text-white"
      >
        <div class="text-subtitle1">System message</div>
        <q-btn square dense color="grey-5 shadow-3 vinBtn" :ripple="false">
          <q-icon name="close" color="grey-8"></q-icon>
        </q-btn>
      </q-card-section>
      <q-card-section class="column items-center">
        <div class="text-grey-9 q-my-sm">echo "Hello world!";</div>
        <div class="row items-center justify-center full-width q-my-sm">
          <q-icon
            size="xl"
            color="white"
            class="bg-red shadow-3 q-mx-md"
            style="border-radius: 50%"
            name="close"
          ></q-icon>
          <q-input
            borderless
            v-model="input"
            color=""
            class="bg-white q-mx-md"
            input-class="text-grey-8 q-px-md"
            dense
            @keydown.enter="checkInput()"
            style="
              width: 60%;
              border-left: #2d2d2d solid 2px;
              border-top: #2d2d2d solid 2px;
              border-right: grey solid 1px;
              border-bottom: grey solid 1px;
            "
          ></q-input>
        </div>
        <q-btn
          flat
          :ripple="false"
          padding="5px 40px"
          class="text-grey-8 text-capitalize q-my-sm shadow-1 vinBtn"
          square
          @click="checkInput()"
          >Ok</q-btn
        >
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const input = ref("");
    const $router = useRouter();
    function checkInput() {
      if (input.value.toLowerCase() === "hello world!") {
        $router.push("/home");
      } else {
        console.log("invalid pw");
        input.value = "";
      }
    }

    onMounted(() => {
      console.log(
        "%c   _____  .____   __________  ___ ___    _____   \r\n  \/  _  \\ |    |  \\______   \\\/   |   \\  \/  _  \\  \r\n \/  \/_\\  \\|    |   |     ___\/    ~    \\\/  \/_\\  \\ \r\n\/    |    \\    |___|    |   \\    Y    \/    |    \\\r\n\\____|__  \/_______ \\____|    \\___|_  \/\\____|__  \/\r\n        \\\/        \\\/               \\\/         \\\/ ",
        "color: purple"
      );
    });
    return {
      input,
      checkInput,
    };
  },
});
</script>
