<template lang="">
  <div class="card">
    <img :src="coverimage" alt="name" style="width: 100%" />
    <div class="container">
      <h3>
        <b>{{ name }}</b>
      </h3>
      <h4>{{ detail }}</h4>
      <font-awesome-icon :icon="['fas', 'star']" style="color: yellow" />
    </div>
    <router-link to="/content" class="buttons-container">
      <button class="button-arounder">อ่านต่อ</button>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["id", "name", "detail", "coverimage"],
};
</script>
<style scoped>
card {
  box-shadow: 10px 4px 15px 10px rgba(7, 7, 7, 0.2);
  transition: 0.3s;
  border-radius: 10px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.container {
  padding: 2px 16px;
  border-radius: 10px;
}
body {
  background: hsl(220deg, 10%, 97%);
  margin: 0;
  padding: 0;
}

.buttons-container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration-line: none;
}

button {
  background: white;
  border: solid 2px black;
  padding: 0.375em 1.125em;
  font-size: 24px;
}

.button-arounder {
  font-size: 24px;
  background: hsl(190deg, 30%, 15%);
  color: hsl(190deg, 10%, 95%);

  box-shadow: 0 0px 0px hsla(190deg, 15%, 5%, 0.2);
  transfrom: translateY(0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  --dur: 0.15s;
  --delay: 0.15s;
  --radius: 16px;

  transition: border-top-left-radius var(--dur) var(--delay) ease-out,
    border-top-right-radius var(--dur) calc(var(--delay) * 2) ease-out,
    border-bottom-right-radius var(--dur) calc(var(--delay) * 3) ease-out,
    border-bottom-left-radius var(--dur) calc(var(--delay) * 4) ease-out,
    box-shadow calc(var(--dur) * 4) ease-out,
    transform calc(var(--dur) * 4) ease-out,
    background calc(var(--dur) * 4) steps(4, jump-end);
}

.button-arounder:hover,
.button-arounder:focus {
  box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, 0.2);
  transform: translateY(-4px);
  background: hsl(230deg, 50%, 45%);
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
</style>
