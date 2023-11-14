<script setup>
import StoryItem from "./StoryItem.vue";

import { ref, onMounted } from "vue";

const stories = ref([
  {
    title: "New technology is not good or evil in and of itself",
    tags: ["Design", "Idea", "Review"],
    users:[
    {
               name: "Liza Harber",
               src: "girl3.jpg"
            },
    ],
    description: 'Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta, ullamcorper massa eu, ullamcorper sapien. Donec pretium tortor augue. Integer egestas ut tellus sed pretium. Nullam tristique augue ut mattis vulputate. Duis et lorem in odio ultricies porttitor',
    src: 'https://basho.fueko.net/content/images/size/w1200/2022/03/photo-1559650656-5d1d361ad10e.jpeg'
  },
  {
    title: "It’s a new era in design, there are no rules",
    tags: ["Creative", "Product"],
    users: [
    {
               name: "Daryl Wehner",
               src: "boy2.jpg"
            },
    {
               name: "Breana Flatley",
               src: "girl1.jpg"
            },
    ],
    description: 'Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod interest, non sit magnum. Ita fit ut, quanta differentia est in principiis naturalibus, tanta sit in finibus bonorum malorumque dissimilitudo.',
    src: 'https://basho.fueko.net/content/images/size/w1200/2022/03/photo-1603808033176-9d134e6f2c74.jpeg'
  },
  {
    title: "Perfection has to do with the end product",
    tags: ["Design", "Creative", "Idea"],
    users:[
    {
               name: "Nichole Becker",
               src: "girl2.jpg"
            },
    ],
    description: 'Aenean eget urna aliquet, viverra orci quis, aliquam erat. Ut rutrum quam quam, eu eleifend est blandit et. Vivamus suscipit ultrices venenatis. Aliquam massa ipsum, porta quis hendrerit at, varius sed leo. Curabitur convallis urna sit amet mi tempus posuere.',
    src: 'https://basho.fueko.net/content/images/size/w1200/2022/03/photo-1638675039591-c7b3d1bbbd74.jpeg'
  },
  {
    title: "Everyone has a different life story",
    tags: ["People", "Story"],
    users:[
    {
               name: "Breana Flatley",
               src: "girl1.jpg"
            },
    ],
    description: 'Non est igitur summum malum dolor. Tu autem inter haec tantam multitudinem hominum interiectam non vides nec laetantium nec dolentium. Nunc vero a primo quidem mirabiliter occulta natura est nec perspici nec cognosci potest.',
    src: 'https://basho.fueko.net/content/images/size/w1200/2022/03/photo-1581368129682-e2d66324045b.jpeg'
  },
  {
    title: "The difference is quality",
    tags: ["Design", "LifeStyle", "Idea"],
    users: [
    {
               name: "Breana Flatley",
               src: "girl1.jpg"
            },
    {
               name: "Brenda Reichel",
               src: "girl4.jpg"
            },
    ],
    description: 'Vide, ne etiam menses! nisi forte eum dicis, qui, simul atque arripuit, interficit. Atque his de rebus et splendida est eorum et illustris oratio.',
    src: 'https://basho.fueko.net/content/images/size/w1200/2022/03/photo-1603015268928-a9f7b3edaf27.jpeg'
  },
  {
    title: "Problems are not stop signs, they are guidelines",
    tags: ["Idea", "Creative"],
    users:[
    {
               name: "Breana Flatley",
               src: "girl1.jpg"
            },
    ],
    description: 'Quid ad utilitatem tantae pecuniae. Duo enim genera quae erant, fecit tria. Et quod est munus, quod opus sapientiae.',
    src: 'https://basho.fueko.net/content/images/size/w1200/2022/03/photo-1597214844654-01d9d941e0fa.jpeg'
  },
]);

const currentIndex = ref(0);

const nextStory = () => {
  currentIndex.value = (currentIndex.value + 1) % stories.value.length;
};

const prevStory = () => {
  currentIndex.value =
    (currentIndex.value - 1 + stories.value.length) % stories.value.length;
};



</script>

<template>
  <div class="flex flex-col gap-2 border-t-[1px] border-solid border-[#4b4f52] pt-[2vh] mb-[4.5vh]">
    <div class="flex justify-between">
      <span class="sm:text-xl text-base">Get started with our <span class="font-bold">best stories</span></span>

      <!-- buttons -->
      <div class="sm:flex hidden items-center gap-5">
        <!-- Prev Button -->
        <button @click="scrollStories('left')">
          <svg stroke-width=".1" :stroke="leftButtonColor" :fill="leftButtonColor" width="19" role="img"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.775 3.225 0 12l8.775 8.775 1.498-1.407-6.421-6.267H24v-2.202H3.852l6.421-6.267-1.498-1.407Z">
            </path>
          </svg>
        </button>

        <!-- Next Button -->
        <button @click="scrollStories('right')">
          <svg stroke-width=".1" :stroke="rightButtonColor" :fill="rightButtonColor" width="19" role="img"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.225 20.775 24 12l-8.775-8.775-1.498 1.407 6.421 6.267H0v2.202h20.148l-6.421 6.267 1.498 1.407Z">
            </path>
          </svg>
        </button>
      </div>
    </div>
    <div ref="container" class="w-full flex gap-3 snap-x overflow-x-scroll hiddenScroll" @scroll="checkScroll">
      <StoryItem v-for="(story, index) in stories" :key="index" :story="story" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftButtonColor: "black",
      rightButtonColor: "white",
    };
  },
  methods: {
    scrollStories(direction) {
      const container = this.$refs.container;
      const containerWidth = container.offsetWidth;
      const scrollAmount = containerWidth * 0.5;

      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    },
    checkScroll() {
      const container = this.$refs.container;
      const containerWidth = container.offsetWidth;

      // Check if at the beginning
      this.leftButtonColor = container.scrollLeft <= 0 ? "gray" : "black";

      // Check if at the end
      this.rightButtonColor =
        container.scrollLeft + containerWidth >= container.scrollWidth
          ? "gray"
          : "black";
    },
  }
}
</script>
