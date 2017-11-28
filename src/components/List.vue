<template>
  <div id="list" class="left_frame">
    <div>
      <p>------------- 算法 --------------</p>
      <ul>
        <li v-for="item in algo">
          <a :href='item.url'>{{item.name}}</a>
        </li>
      </ul>
      <p>------------- 数据结构 ---------</p>
      <p>------------- 问题集 -----------</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      algo: [
        {name: 'Peak Finding',
         url: '/#/peak_finding'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
