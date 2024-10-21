<template lang="">
    <div class="card">
 <img :src="coverimage" alt="name" style="width:100%">
    <div class="container">
        <h3><b>{{name}}</b></h3>
        <h4>{{detail}}</h4>
        <font-awesome-icon :icon="['fas', 'star']" style="color: yellow;" />


    </div>
  </div>
</template>
<script>
export default {
    
  props: ['id', 'name', 'detail','coverimage' ] 
 
}
</script>
<style scoped>
    card{
        box-shadow: 10px 4px 15px 10px rgba(7, 7, 7, 0.2);
        transition: 0.3s;
        border-radius: 10px;
    }
    .card:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);   
        border-radius: 10px; 
    }
    .container{
        padding: 2px 16px; 
        border-radius: 10px;
    }
   
</style>