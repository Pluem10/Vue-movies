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
    <h1 style="padding: 10px; text-align: center; border: 2px solid #341111; border-radius: 10px; background-color: #000000; color: #f9ebea; font-size: 20px; width: 80%; max-width: 600px; margin: auto;">MyList</h1>
                                                          <br>                                                          
         <div className="grid-container">
         <!-- <Mycrad v-for="items in items" v-bind="items"/>  คใช้ในการ loop การ์ด -->
          <Mycrad v-bind="items[3]"/>
          <Mycrad v-bind="items[8]"/>
          <Mycrad v-bind="items[9]"/>
          <Mycrad v-bind="items[10]"/>
          <Mycrad v-bind="items[15]"/>
          <Mycrad v-bind="items[18]"/>
          <Mycrad v-bind="items[31]"/>
          <Mycrad v-bind="items[40]"/>
          <Mycrad v-bind="items[43]"/>
          <Mycrad v-bind="items[44]"/>
          

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
