<script setup>
  import MyBar from '../components/MyBar.vue';
  import Mycrad from '../components/Mycrad.vue';
  import items from '../attractions.json';
  import 'primeicons/primeicons.css'

</script>

<template>
  <header>
  <MyBar />
  </header>
  <main>
    <h1 style="padding: 10px; text-align: center; border: 2px solid #341111; border-radius: 10px; background-color: #000000; color: #f9ebea; font-size: 20px; width: 80%; max-width: 600px; margin: auto;">NewMovies</h1>
                                                          <br>                                                          
         <div className="grid-container">
         <!-- <Mycrad v-for="items in items" v-bind="items"/>  คใช้ในการ loop การ์ด -->
          <Mycrad v-bind="items[13]"/>
          <Mycrad v-bind="items[12]"/>  
          <Mycrad v-bind="items[4]"/>
          <Mycrad v-bind="items[15]"/>
          <Mycrad v-bind="items[14]"/>
          <Mycrad v-bind="items[16]"/>
          <Mycrad v-bind="items[17]"/>
          <Mycrad v-bind="items[18]"/>
          <Mycrad v-bind="items[19]"/>
          <Mycrad v-bind="items[20]"/>
          <Mycrad v-bind="items[21]"/>
          <Mycrad v-bind="items[22]"/>
          <Mycrad v-bind="items[23]"/>
          <Mycrad v-bind="items[24]"/>
          <Mycrad v-bind="items[25]"/>
          <Mycrad v-bind="items[26]"/>
          <Mycrad v-bind="items[27]"/>
          <Mycrad v-bind="items[28]"/>
          <Mycrad v-bind="items[29]"/>
          <Mycrad v-bind="items[30]"/>
          <Mycrad v-bind="items[31]"/> 
          <Mycrad v-bind="items[32]"/> 
          <Mycrad v-bind="items[33]"/>
           <Mycrad v-bind="items[34]"/> 
         
        
        </div>
  </main>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  margin-left: 1rem; 
}
@media (min-width: 576px) {
  .grid-container { grid-template-columns: repeat(1, 1fr); }
}
@media (min-width: 992px) {
  .grid-container { grid-template-columns: repeat(3, 1fr); }
}
</style>
