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
        <ul>
          <li v-for="item in dataStructure">
            <a :href='item.url'>{{item.name}}</a>
          </li>
        </ul>
      <p>------------- 问题集 -----------</p>
        <ul>
          <li v-for="item in problemSet">
            <a :href='item.url'>{{item.name}}</a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      algo: [

      ],
      dataStructure: [

      ],
      problemSet: [
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
