import HomeComponent from './components/home.vue';

export default function(VueRouter) {
  return new VueRouter({
    routes: [
      { path: '/', name: 'home', component: HomeComponent }
    ]
  })
}
