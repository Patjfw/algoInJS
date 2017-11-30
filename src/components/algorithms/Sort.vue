<template lang="html">
  <div class="right_frame">
    <button @click="insertionSort()">Insertion Sort</button><label>Counts:{{insertionCounts}}</label>
    <div>
      <span v-for="item in insertionResultArr">{{item}}</span>
    </div>
    <button @click="bubbleSort()">Bubble Sort</button><label>Counts:{{bubbleCounts}}</label>
    <div>
      <span v-for="item in bubbleResultArr">{{item}}</span>
    </div>
  </div>
</template>

<script>
const LEN = 100
const SCOPE = 1000

export default {
  name: 'Sort',
  data () {
    return {
      arr: [],
      insertionResultArr: [],
      bubbleResultArr: [],
      insertionCounts: 0,
      bubbleCounts: 0
    }
  },
  mounted () {
    this.arr = this.randNumGen()
  },
  methods: {
    randNumGen: function (len = LEN, scope = SCOPE) {
      let arr = []
      for (let i = 0; i < len; i++) {
        arr.push(Math.round(Math.random() * scope))
      }

      return arr
    },
    insertionSort () {
      let counts = 0
      let arr = this.arr.slice()

      for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i
        while (j > 0 && arr[j - 1] > temp) {
          counts++
          arr[j] = arr[j - 1]
          j--
        }
        arr[j] = temp
      }

      this.insertionCounts = counts
      this.insertionResultArr = arr
    },
    bubbleSort () {
      let counts = 0
      let arr = this.arr.slice()

      let len = arr.length
      while (len > 0) {
        let newLen = 0
        for (let i = 1; i < len; i++) {
          if (arr[i - 1] > arr[i]) {
            counts++
            [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
            newLen = i
          }
        }
        len = newLen
      }

      this.bubbleCounts = counts
      this.bubbleResultArr = arr
    }
  }
}
</script>

<style lang="scss">
  .right_frame {
    width: 600px
  }
  span {
    display: inline-block;
    width: 25px;
    padding: 0 3px;
  }
</style>
