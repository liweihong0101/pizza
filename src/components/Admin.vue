<template>
<div class="row">
  <div class="col-sm-12 col-md-8">
    <app-new-pizza></app-new-pizza>
  </div>
  <div class="col-sm-12 col-md-4">
    <h3 class="text-muted my-5">菜单</h3>
    <table class="table">
      <thead class="table table-default">
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
      </thead>
      <tbody v-for="(item,index) in getMenuItems" :key="index">
        <tr>
          <td>{{item.name}}</td>
          <td>
            <button @click="deleteItem(item)" class="btn btn-outline-danger btn-sm">&times</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
import newPizza from './newPizza.vue';
export default {
  components: {
    'app-new-pizza': newPizza,
  },
  created() {
    fetch('https://wd4561535768olqhyf.wilddogio.com/menu.json', {
        methods: 'GET',
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        let menuArray = [];
        for (let key in data) {
          data[key].id = key;
          menuArray.push(data[key])
        }
        // this.getMenuItems = menuArray;
        // 数据同步
        this.$store.commit('setMenuItems', menuArray)
      })
  },
  data() {
    return {
      // getMenuItems: []
    }
  },
  computed: {
      getMenuItems: {
          //在vuex中获取数据
          get(){
              // return this.$store.state.menuItems;
              return this.$store.getters.getMenuItems
          },
          set(){

          }

      }
  },
  methods:{
      deleteItem(item){
          fetch('https://wd4561535768olqhyf.wilddogio.com/menu/'+ item.id + '/.json',{
              method: 'DELETE',
              headers: {
                  'Content-type': 'application/json'
              }
          })
          .then(res => res.json())
          // .then(data => console.log(data))
          // .then(data => this.$router.push({name: 'menuLink'}))
          .then(data => this.$store.commit('removeMenuItems', item))
          .catch(err => console.log(err))
      }
  }
  // beforeRouteEnter: (to, from, next) => {
  //   // next(vm => {
  //   //         alert('Hello' + vm.name);
  //   // });
  // },
  // beforeRouteLeave: (to, from, next) => {
  //       if(confirm('确定离开吗？') == true){
  //           next();
  //       }else{
  //           next(false);
  //       }
  // }
}
</script>
<style scoped>
</style>
