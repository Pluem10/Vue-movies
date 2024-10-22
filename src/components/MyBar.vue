<template lang="">
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/News">News</router-link></li>
      <li><router-link to="/tvshow">Tv-Show</router-link></li>
      <li><router-link to="/mylist">MyList</router-link></li>
      <div>
        <form
          class="example"
          style="margin: auto; max-width: 300px"
          @submit.prevent="handleSubmit"
        >
          <input
            v-model="searchText"
            type="text"
            placeholder="Search.."
            name="search2"
          />
          <!-- <i class="pi pi-search" style="font-size: 1rem"></i> -->
          <i
            class="pi pi-spin pi-cog"
            style="font-size: 2rem; position: fixed; right: 20px; top: 30px"
          ></i>
          <i
            class="pi pi-user"
            style="font-size: 2rem; position: fixed; right: 70px; top: 30px"
          ></i>
          <i
            class="pi pi-search"
            style="font-size: 2rem; position: fixed; right: 600px; top: 30px"
          ></i>
        </form>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    handleSubmit() {
      // Handle the search logic here, e.g., make an API call or navigate
      console.log("Search:", this.searchText);
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 20px; /* เพิ่ม padding เพื่อเพิ่มพื้นที่ภายในกรอบ */
  overflow: hidden;
  background-color: #000000;
  border: 5px solid #000000; /* เพิ่มกรอบขนาดใหญ่ */
  border-radius: 1px; /* ทำมุมกรอบโค้งมน */
}
li {
  float: left;
}

li a {
  display: block;
  color: rgb(255, 250, 250);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #410404;
  border-radius: 10px;
}
/* หน้าค้นหาครับผม */
body {
  font-family: Arial;
}

* {
  box-sizing: border-box;
}

form.example input[type="text"] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid rgb(255, 255, 255);
  float: left;
  width: 80%;
  background: #e2dfdf;
  border-radius: 5px;
}

/* form.example button {
    float: left;
    width: 10%;
    padding: 10px;
    background: #1b0101;
    color: rgb(247, 245, 245);
    font-size: 17px;
    border: 1px solid rgb(255, 255, 255);
    border-left: none;
    cursor: pointer;
    border-radius: 2.5px;
    text-align: right ;

  }
   */

/* form.example::after {
    content: "";
    clear: both;
    display: table;
  } */
</style>
