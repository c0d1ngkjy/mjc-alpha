<template>
  <div
    class="non-selectable mainFont fullscreen bg-black text-primary text-center q-pa-md flex flex-center"
  >
    <div>
      <div class="text">404</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>

<style scoped>
.text {
  animation: float 1s ease-in-out infinite alternate;
  font-size: 40vw;
  perspective: 100px;
  text-shadow: 1px 1px 0 #d001c4, 2px 2px 0 #b83aa6, 3px 3px 0 #9e5290,
    4px 4px 0 #8a6d7b, 5px 5px 0 #79906a, 6px 6px 0 #69aa5a, 7px 7px 0 #56c149,
    8px 8px 0 #41d533, 9px 9px 0 #2cde1b, 10px 10px 0 #21ba45;
}

@keyframes float {
  from {
    transform: translateY(0) rotateX(20deg) rotateY(30deg);
  }
  to {
    transform: translateY(10px) rotateX(20deg) rotateY(30deg);
  }
}
</style>
