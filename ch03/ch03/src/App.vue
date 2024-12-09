<script>
export default {
  methods: {
    clickHandler(event) {
      console.log(event);
    },
    clickHandler2(event) {
      console.log(event);
    },
    clickHandler3( event, message ) {
      console.log(event, message);
    },
  },
};
</script>

<template>
  <div>
    <button type="button" @click="clickHandler($event)">클릭</button>
    <button type="button" @click="($event) => clickHandler2($event)">클릭2</button>
    <button type="button" @click="clickHandler3($event, 'hello_handler')">클릭</button>
  </div>
</template>

<style>
</style>
