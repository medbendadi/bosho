<template>
  <div class="snap-center lg:min-w-[400px] md:min-w-[300px] min-w-[200px] w-[400px] flex flex-col gap-3">
    <div
      class="w-full aspect-[1/1] relative rounded-3xl overflow-hidden hover:translate-y-[-3px] transition-all ease-in-out duration-300 mb-[2vh]">
      <img class="absolute top-0 left-0 bottom-0 right-0 object-cover w-full h-full"
        :src="story.src" />
        <div class="flex items-center avatars absolute bottom-[10px] left-[10px]">
        <span v-for="(user, userIndex) in story.users" :key="userIndex" class="z-50 avatar w-[40px] hover:border-[#fff] hover:scale-90 border-[#ffffff33] border-[5px] border-solid ml-[-18px] last:ml-0">
          <img :src="require(`../../assets/images/${user.src}`)" :alt="user.name">
        </span>
      </div>
    </div>
    <div class="w-full flex space-x-2">
      <button v-for="(tag, tagIndex) in story.tags" :key="tagIndex"
        class="px-[10px] py-[5px] text-[15px] rounded-full darkButton mb-[2vh]">
        {{ tag }}
      </button>
    </div>
    <a href="" class="text-[1.8rem] font-[600] font-heading hover:underline decoration-2">
      {{ story.title }}
    </a>
    <p class="text-[#f7f7f5] opacity-50 mt-[1.5vh] overflow-y-hidden max-w-[540px] pr-[.4vw] line-clamp-[4]"
      style="display: -webkit-box; -webkit-box-orient: vertical;">
      {{ story.description }}
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps(["story"]);

const truncatedDescription = computed(() => {
  const maxLength = 150;
  if (props.story.description.length > maxLength) {
    return props.story.description.substring(0, maxLength) + "...";
  }
  return props.story.description;
});
</script>



