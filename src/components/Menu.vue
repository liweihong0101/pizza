<template>
<div>
    <div class="row">
        <div class="col-sm-12 col-md-8">
          <table class="table">
            <thead class="thead-default">
              <tr>
                <th>尺寸</th>
                <th>价格</th>
                <th>加入</th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in getMenuItems" :key="index">
              <tr>
                <td><strong>{{item.name}}</strong></td>
              </tr>
              <tr v-for="(option, index) in item.options" :key="index">
                <td>{{option.size}}</td>
                <td>{{option.price}}</td>
                <td>
                  <button @click="addTobasket(item, option)" class="btn btn-sm btn-outline-success">+</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-sm-12 col-md-4">
            <div v-if="baskets.length > 0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>数量</th>
                            <th>品种</th>
                            <th>价格</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item, index) in baskets" :key="index">
                        <tr>
                            <td>
                                <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
                                <span>{{item.quantity}}</span>
                                <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
                            </td>
                            <td>{{item.name}}{{item.size}}</td>
                            <td>{{item.price*item.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>总价: {{total + 'RMB'}}</p>
                <button class="btn btn-success btn-block">提交</button>
            </div>
            <div v-else>
                <p>{{basketText}}</p>
            </div>
        </div>
    </div>

</div>
</template>

<script>
// import axios from 'axios';
export default {

  name: 'Menu',

  data() {
    return {
      baskets: [],
      basketText: '购物车里没有任何商品',
      // getMenuItems: {}
    }
  },
  computed: {
      total(){
          let totalCost = 0;
          for(let index in this.baskets){
              let individualItem = this.baskets[index];
              totalCost += individualItem.quantity * individualItem.price
          }
          return totalCost;
      },
      getMenuItems(){
          //在vuex中获取数据
          // return this.$store.state.menuItems;
          return this.$store.getters.getMenuItems
      }

  },
  methods: {
    addTobasket(item, option) {
        let basket = {
            name: item.name,
            size: option.size,
            price: option.price,
            quantity: 1
        };
        if(this.baskets.length > 0){
            //过滤
            let result = this.baskets.filter((basket) => {
                return (basket.name == item.name && basket.price == option.price)
            })
            if(result.length > 0 && result != null){
                result[0].quantity ++ ;
            }else{
                this.baskets.push(basket)
            }
        }else{
            this.baskets.push(basket);
        }


    },
    removeFromBaskets(item){
        this.baskets.splice(this.baskets.indexOf(item), 1);
    },
    decreaseQuantity(item){
        if(item.quantity > 1){
            item.quantity --;
        }else{
            this.removeFromBaskets(item);
        }
    },
    increaseQuantity(item){
        item.quantity ++;
    }

},
    created(){
        // fetch('https://wd4561535768olqhyf.wilddogio.com/menu.json', {
        //     methods: 'GET',
        //   })
        //   .then(res => {
        //     return res.json()
        //   })
        //   .then(data => {
        //     this.getMenuItems = data;
        //   })
        // axios.get('menu.json')
        //      .then(res => this.getMenuItems = res.data)

        //将请求来的数据存储到vuex中
        this.http.get('menu.json')
            .then(res => this.$store.commit('setMenuItems', res.data))
    }
}
</script>

<style lang="css" scoped>
</style>
