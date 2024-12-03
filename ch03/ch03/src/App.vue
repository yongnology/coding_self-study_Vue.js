<script>
export default {
  data() {
    return {
      message:'<h1>hello, Vue JS! ch03</h1>',
      message2:'<h1>hello, Vue JS! ch03</h1>',
      message3:'<h1>hello, Vue JS! ch03</h1>',
      className: 'red-color',
      className2: 'blue-color',
      class: 'title',

      visible: true,
      unvisible: false,

      condition: 'A',
      condition2: 'C',

      condition3: true,
    };
  },
}
</script>

<template>
  <!-- <div v-html="message"></div> -->
  <!-- <div v-text="message2"></div> -->
  <!-- <div v-pre>{{ message3 }}</div> -->
   <!-- <h1 v-bind:class="className">Hello, Vue JS !!!</h1> -->
   <!-- <h2 :class="className2">Hello, Vue</h2> 축약형 -->
   <!-- <h3 :class>Hello, Vue 3.4 upper JS</h3> -->
<!-- 
    <p v-if="visible">이 요소는 렌더링됩니다.</p>
    <p v-if="unvisible">이 요소는 렌더링 되지 않습니다.</p>
     -->

<!--      
     <div> -->
      <!-- Vue 3에서는 여러 개의 루트 요소를 지원하지 않기 때문에, 항상 하나의 루트 요소로 감싸는 것이 중요 -->
      <!--
        <p v-if="condition === 'A' ">condition 데이터 값은 A입니다.</p>
        <p v-else-if="condition === 'B' ">condition2 데이터 값은 B입니다.</p>
        <p v-else-if="condition === 'C' ">condition2 데이터 값은 C입니다.</p>
        <p v-else-if="condition === 'D' ">condition2 데이터 값은 D입니다.</p>
        <p v-else>어떤 조건에도 해당하지 않습니다</p>
        
        <p v-if="condition2 === 'A' ">condition2 데이터 값은 A입니다.</p>
        <p v-else-if="condition2 === 'B' ">condition2 데이터 값은 B입니다.</p>
        <p v-else-if="condition2 === 'C' ">condition2 데이터 값은 C입니다.</p>
        <p v-else-if="condition2 === 'D' ">condition2 데이터 값은 D입니다.</p>
        <p v-else>어떤 조건에도 해당하지 않습니다</p>
      </div> 
      -->

      <div>
        <p v-show="condition3">v-show 디렉티브는 조건이 참입니다.</p>
        <p v-show="!condition3">v-show 디렉티브는 조건이 거짓입니다.</p>
      </div>

</template>

<style>
  .red-color {
    color: red;
  }
  .blue-color {
    color: blue;
  }
  .title {
    color: brown;
  }
</style>
