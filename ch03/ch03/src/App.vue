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

    };
  },
}
</script>

<template>
  <!-- <div v-html="message"></div> -->
  <!-- <div v-text="message2"></div> -->
  <!-- <div v-pre>{{ message3 }}</div> -->
   <h1 v-bind:class="className">Hello, Vue JS !!!</h1>
   <h2 :class="className2">Hello, Vue</h2> <!--축약형-->
   <h3 :class>Hello, Vue 3.4 upper JS</h3>
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
