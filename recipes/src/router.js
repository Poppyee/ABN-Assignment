import HomePage from './components/HomePage'
import ChosenMeal from './components/ChosenMeal'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/meal/:id',
    component: ChosenMeal,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router