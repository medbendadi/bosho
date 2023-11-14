<template>
   <div class="container" @mousedown="handleMouseDown" @mouseenter="handleMouseEnter" @mouseup="handleMouseUp" @mousemove="handleMouseMove">
     <div ref="container" class="inner-container" :style="{ left: innerContainerLeft }">
       <div></div>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       pressed: false,
       startX: 0,
       x: 0,
       innerContainerLeft: "0px",
       itemWidth: 200, // Adjust this based on your item width
       itemCount: 9,
     };
   },
   methods: {
     handleMouseDown(e) {
       this.pressed = true;
       this.startX = e.offsetX - this.$refs.container.offsetLeft;
       this.$refs.container.style.cursor = "grabbing";
     },
     handleMouseEnter() {
       if (this.$refs.container) {
         this.$refs.container.style.cursor = "grab";
       }
     },
     handleMouseUp() {
       if (this.$refs.container) {
         this.$refs.container.style.cursor = "grab";
       }
       this.pressed = false;
       this.boundItems(); // Ensure boundItems is called on mouse up to handle any remaining out-of-bounds positions
     },
     handleMouseMove(e) {
       if (!this.pressed) return;
       e.preventDefault();
 
       if (this.$refs.container) {
         this.x = e.offsetX;
         this.innerContainerLeft = `${this.x - this.startX}px`;
         this.boundItems();
       }
     },
     boundItems() {
       if (this.$refs.container && this.$refs.innerContainer) {
         const outer = this.$refs.container.getBoundingClientRect();
         const inner = this.$refs.innerContainer.getBoundingClientRect();
 
         if (parseInt(this.innerContainerLeft) > 0) {
           this.innerContainerLeft = "0px";
         }
 
         if (inner.right < outer.right) {
           // If reached the end, loop back to the beginning
           this.innerContainerLeft = `-${(this.itemWidth * this.itemCount) - outer.width}px`;
         } else if (inner.left > outer.left) {
           // If reached the beginning, loop back to the end
           this.innerContainerLeft = `0px`;
         }
       }
     }
   }
 };
 </script>
 
 <style scoped>
 .container {
   width: 100%;
   height: 200px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   overflow: hidden;
 }
 
 .inner-container {
   display: flex;
   gap: 10px;
   pointer-events: none;
   position: absolute;
   top: 0;
   left: 0;
   transition: left 0.3s ease; 
 }
 
 .item {
   height: 200px;
   width: 400px;
   border-radius: 5px;
   background-color: lightgrey;
 }
 </style>
 