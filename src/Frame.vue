<template>
  <div id="app">
    <list></list>
    <router-view></router-view>
  </div>
</template>

<script>
import List from '@/components/List'

export default {
  name: 'Frame',
  components: {
    List
  }
}
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    height: 100%;
  }

  #app::after{
    content: "020";
    height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }
  .left_frame {
    float: left;
    width: 200px;
    border-right: 2px solid black;
    height: 100%;
  }

  .right_frame {
    float: left;
    height: 100%;
    margin-left: 60px;
  }
</style>
