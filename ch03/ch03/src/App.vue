<script>
export default {
  data() {

  },
  methods: {
    clickHandler( ) {  // ES6의 단축 메서드명으로 표기
      alert('click 함');
      console.log("클릭함");
    },
    clickHandler2( ) {  // ES6의 단축 메서드명으로 표기
      alert('dbclick 함');
      console.log("db클릭함");
    },
  },
};
</script>

<template>
  <div>
    <button type="button" v-on:click="clickHandler">클릭</button>
    <button type="button" v-on:dblclick="clickHandler2">클릭2</button>
  </div>
</template>

<style>
</style>
