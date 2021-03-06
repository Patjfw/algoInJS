import Vue from 'vue'
import Router from 'vue-router'
import Instruction from '@/components/Instruction'

import Sort from '@/components/algorithms/Sort'

import PeakFinding from '@/components/problemSet/PeakFinding'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Instruction',
      component: Instruction
    },
    {
      path: '/peak_finding',
      name: 'Peak Finding',
      component: PeakFinding
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    }
  ]
})
