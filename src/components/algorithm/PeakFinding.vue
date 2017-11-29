<template lang="html">
  <div class="right_frame">
    <h1>PeakFinding</h1>
    <p>问题描述：</p>
    <a href="https://goo.gl/bohWQn">MIT课程PDF</a>
    <a href="https://goo.gl/MgPNv6">MIT的课程视频</a>
    <p>思路：</p>
    <p>Divide & Conquer</p>
    <p>Answer highlighted with red color</p>
    <button @click="pf1d()">1D version</button><label>index:{{this.index1d}}</label>
    <div>
      <span v-for="(item,index) in array1d" :class="{flag: index === index1d}">{{item}}</span>
    </div>
    <button @click="pf2d()">2D version</button><label>index:{{this.index2d}}</label>
    <div v-for = "(item1, index1) in array2d">
      <span v-for="(item2, index2) in item1" :class="{flag: index2d.y === index1 && index2d.x == index2}">{{item2}}</span>
    </div>
  </div>
</template>

<script>
const ARR_LEN = 40

export default {
  name: 'PeakFinding',
  data () {
    return {
      array1d: [],
      index1d: null,
      array2d: [],
      index2d: null
    }
  },
  methods: {
    genRandArr (len) {
      let arr = []
      for (let i = 0; i < len; i++) {
        arr.push(Math.round(Math.random() * len))
      }
      return arr
    },
    pf1d () {
      this.array1d.splice(0)
      this.array1d = this.genRandArr(ARR_LEN)

      let solve = function (arr, start, end, len = ARR_LEN) {
        let mid = Math.floor((start + end) / 2)

        // Compare middle element with its neighbours (if neighbours exist)
        if ((mid === 0 || arr[mid - 1] <= arr[mid]) &&
        (mid === len - 1 || arr[mid + 1] <= arr[mid])) {
          return mid
        } else if (mid > 0 && arr[mid - 1] > arr[mid]) {
          return solve(arr, start, mid - 1)
        } else {
          return solve(arr, mid + 1, end)
        }
      }

      this.index1d = solve(this.array1d, 0, ARR_LEN - 1)
    },
    pf2d () {
      const UP = 1
      const DOWN = 2
      const LEFT = 3
      const RIGHT = 4
      const DONE = 5

      this.array2d.splice(0)
      // In this case, we build a n*n matrix
      for (let i = 0; i < ARR_LEN; i++) {
        this.array2d.push(this.genRandArr(ARR_LEN))
      }

      let findMax = function (arr, index, start, end) {
        let max = -Infinity
        let pos = {}

        for (let i = start; i <= end; i++) {
          if (arr[index][i] > max) {
            max = arr[index][i]
            pos.x = i
            pos.y = index
          }

          if (arr[i][index] > max) {
            max = arr[i][index]
            pos.x = index
            pos.y = i
          }
        }

        return pos
      }

      let correctPeak = function (arr, row, col, len = ARR_LEN) {
        if (row - 1 >= 0 && arr[row - 1][col] > arr[row][col]) {
          return UP
        }

        if (row + 1 < len && arr[row + 1][col] > arr[row][col]) {
          return DOWN
        }

        if (col - 1 >= 0 && arr[row][col - 1] > arr[row][col]) {
          return LEFT
        }

        if (col + 1 < len && arr[row][col + 1] > arr[row][col]) {
          return RIGHT
        }

        return DONE
      }

      let solve = function (arr, startRow, endRow, startCol, endCol) {
        let mid = Math.floor((startRow + endRow) / 2)

        let maxPos = findMax(arr, mid, startRow, endRow)
        let x = maxPos.x
        let y = maxPos.y

        switch (correctPeak(arr, y, x)) {
          case DONE:
            return {y, x}
          case UP:
            if (x < mid) {
              return solve(arr, startRow, mid - 1, startCol, mid - 1)
            } else {
              return solve(arr, startRow, mid - 1, mid + 1, endCol)
            }
          case DOWN:
            if (x < mid) {
              return solve(arr, startRow, mid - 1, mid + 1, endCol)
            } else {
              return solve(arr, mid + 1, endRow, mid + 1, endCol)
            }
          case LEFT:
            if (y < mid) {
              return solve(arr, startRow, mid - 1, startCol, mid - 1)
            } else {
              return solve(arr, startRow, mid - 1, mid + 1, endCol)
            }
          case RIGHT:
            if (y < mid) {
              return solve(arr, startRow, mid - 1, mid + 1, endCol)
            } else {
              return solve(arr, mid + 1, endRow, mid + 1, endCol)
            }
        }
      }
      this.index2d = solve(this.array2d, 0, ARR_LEN - 1, 0, ARR_LEN - 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  span {
    display: inline-block;
    width: 15px;
    padding: 0 3px;
  }

  .flag {
    color: red;
  }
</style>
