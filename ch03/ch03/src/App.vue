<script>
export default {
  data() {
    return {
     fruits: ['apple', 'banana', 'orange'],
     
     user: {
      name: 'John',
      age: 20,
      gender: 'male',
     }
    };
  },
}
</script>

<template>
  <div>
    <h1>fruits 데이터의 반복 결과</h1>
    <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      인덱스 : {{ index }}, 값: {{ fruit }}
    </li>
  </ul>
  <hr>

  <li v-for="(value, key, index) in user" :key="index">
    {{ index }}: {{ key }} : {{ value }}
  </li>
  </div>
</template>

<style>
</style>
