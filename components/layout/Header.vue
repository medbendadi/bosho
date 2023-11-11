<template>
<header class="py-[1.8rem] flex items-center justify-between">
    <img class="w-[150px]" src="../../assets/images/basho_light.svg" alt="">
    <ul class="flex items-center text-lg">
        <li class="mr-6 font-[500]"><a href="">Demos</a></li>
        <li class="mr-6 font-[500]"><a href="">Style Guide</a></li>
        <li class="mr-6 font-[500]"><a href="">Membership</a></li>
        <li class="mr-6 font-[500] relative">
            <button @click="toggle"><span class="i-lucide-chevron-down"></span></button>
            <div class="absolute w-[150px] px-[12px] text-[18px] rounded-lg bg-white text-[#000] text-right left-[-140px]" v-if="activeDropdown">
                <a class="mt-[12px] block " href="">Features</a>
                <a class="mt-[10px] block " href="">Tags</a>
                <a class="mt-[10px] block " href="">Author</a>
                <a class="mt-[10px] block " href="">Subscribe</a>
                <a class="mt-[10px] block " href="">Contact</a>
                <a class="mb-[12px] mt-[10px] block" href="">Get Theme</a>
            </div>
        </li>
        <li><Button class="darkButton py-[7px] px-6 rounded-full flex items-center font-[500] mr-[8px]"><span class="i-lucide-search mr-1"></span>Search</Button></li>
        <li><Button class="lightButton py-[7px] px-6 rounded-full flex items-center font-[500]">Join</Button></li>
    </ul>
</header>

</template>



<script>
  export default {
    data () {
      return {
        activeDropdown: false
      }
    },
    methods: {
      toggle () {
        this.activeDropdown = !this.activeDropdown
      }
    }
  }
</script>