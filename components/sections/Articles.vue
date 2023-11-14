<template>
   <div class="w-full relative mb-[7vh]">
      <div class="w-full flex justify-between items-center border-t-[1px] border-solid border-[#4b4f52] pt-[2vh] mb-[4.5vh]">
         <h1 class="text-6xl font-heading leading-[1.25] font-[300]">
            See what we’ve
            <br> 
            <span class="font-[600]">written lately</span>
         </h1>
         <div>
            <div class="flex items-center avatars">
               <span v-for="(item, index) in users" :key="index" class="relative avatar w-[100px] first:w-[90px] hover:translate-y-[-2px] border-[#1a1b1e] last:border-[5px] last:border-solid ml-[-30px] last:ml-0">
                     <img :src="require(`../../assets/images/${item.src}`)" :alt="item.name">
                  </span>
            </div>
            <h3 class="text-right text-[#f7f7f5] opacity-50 text-[15px] mt-[1.5vh]">Meet our top authors</h3>
         </div>
      </div>
      <div class="grid grid-cols-3 gap-x-5 gap-y-14">
  <div v-for="(article, index) in articles" :key="index" class="">
    <div class="w-full aspect-[4/3] relative rounded-3xl overflow-hidden hover:translate-y-[-3px] transition-all ease-in-out duration-300 mb-[2vh]">
      <img class="absolute top-0 left-0 bottom-0 right-0 object-cover w-full h-full" :src="require(`../../assets/images/${article.src}`)">
      <div class="flex items-center avatars absolute bottom-[10px] left-[10px]">
        <span v-for="(user, userIndex) in article.users" :key="userIndex" class="z-50 avatar w-[40px] hover:border-[#fff] hover:scale-90 border-[#ffffff33] border-[5px] border-solid ml-[-18px] last:ml-0">
          <img :src="require(`../../assets/images/${user.src}`)" :alt="user.name">
        </span>
      </div>
    </div>
    <div class="w-full flex space-x-2">
      <button v-for="(tag, tagIndex) in article.tags" :key="userIndex" class="px-[10px] py-[5px] text-[15px] rounded-full darkButton mb-[2vh]">
      {{ tag }}
</button>
    </div>
    <h1 class="text-[1.8rem] font-[600] font-heading">
   {{ article.title }}
  </h1>
  <p class="text-[#f7f7f5] opacity-50 mt-[1.5vh] overflow-y-hidden max-w-[540px] pr-[.4vw] line-clamp-[4] " style="display: -webkit-box; -webkit-box-orient: vertical;">
   {{ article.description }}
  </p>
  </div>
</div>






   </div>
</template>



<script>

export default {
   data() {
      return {
         users: [   
            {
               name: "Liza Harber",
               src: "girl3.jpg"
            },
            {
               name: "Nichole Becker",
               src: "girl2.jpg"
            },
            {
               name: "Daryl Wehner",
               src: "boy2.jpg"
            },
            {
               name: "Damian Erdman",
               src: "boy1.jpg"
            },
            {
               name: "Breana Flatley",
               src: "girl1.jpg"
            },
            
         ],
         articles: [
            {
               title: "Creating is a privilege but it’s also a gift",
               users: [
               {
               name: "Daryl Wehner",
               src: "boy2.jpg"
            },
               {
               name: "Nichole Becker",
               src: "girl2.jpg"
            },
               ],
               tags: ['Lifestyle', 'People', 'Review'],
               description: 'Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales a, sollicitudin nec risus.',
               src: 'article1.jpeg'
            },
            {
               title: "Being unique is better than being perfect",
               users: [
               {
               name: "Damian Erdman",
               src: "boy1.jpg"
            }
               ],
               tags: ['Design', 'Product', 'Idea'],
               description: 'Nam in pretium dui. Phasellus dapibus, mi at molestie cursus, neque eros aliquet nisi, non efficitur nisi est nec mi. Nullam semper, ligula a luctus ornare, leo turpis fermentum lectus, quis volutpat urna orci a lectus. Duis et odio lobortis, auctor justo ut, egestas magna.',
               src: 'article2.jpeg'
            },
            {
               title: "Now we’re getting somewhere",
               users: [
               {
               name: "Daryl Wehner",
               src: "boy2.jpg"
            }
               ],
               tags: ['Idea', 'Product', 'Review'],
               description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec volutpat rhoncus quam, a feugiat elit gravida eget. Curabitur id pharetra ligula. Integer porttitor suscipit ante ac faucibus. Sed a enim non enim viverra pulvinar vel diam ut lorem congue feugiat.',
               src: 'article3.jpeg'
            },
            {
               title: "The trick to getting more done is to have the freedom to roam around",
               users: [
               {
               name: "Breana Flatley",
               src: "girl1.jpg"
            },
               ],
               tags: ['Lifestyle', 'Design'],
               description: 'Integer nec mi cursus, blandit est et, auctor mauris. Aenean ex metus, faucibus in mattis at, tincidunt eu dolor. Cras hendrerit massa nec augue placerat rutrum. Sed facilisis massa enim, ac tempus diam elementum sit amet.',
               src: 'article4.jpeg'
            },
            {
               title: "Every day, in every city and town across the country",
               users: [
               {
               name: "Breana Flatley",
               src: "girl1.jpg"
            },
               {
               name: "Damian Erdman",
               src: "boy1.jpg"
            },
            
               ],
               tags: ['People', 'Story', 'Lifestyle'],
               description: 'Morbi a facilisis lectus. Ut eu dapibus risus, a interdum justo. Vestibulum volutpat velit ac tellus mollis, sit amet sodales metus elementum. Aliquam eu mi massa. Proin suscipit enim a pulvinar viverra.',
               src: 'article6.jpeg'
            },
            {
               title: "Your voice, your mind, your story, your vision",
               users: [
               {
               name: "Damian Erdman",
               src: "boy1.jpg"
            }
               ],
               tags: ['People', 'Review', 'Story'],
               description: 'Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus scelerisque, sagittis tortor et, maximus metus.',
               src: 'article6.jpeg'
            },
         ]
      }
   }
}
</script>