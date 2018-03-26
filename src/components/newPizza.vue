<template>
<div id="">
  <form>
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label class="col-sm-2">
                  品种：
              </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model='newPizza.name' name="" value="">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2">
                  描述：
              </label>
      <div class="col-sm-10">
        <textarea class="form-control" v-model='newPizza.description' rows="5"></textarea>
      </div>
    </div>
    <p>
      <strong>选项1：</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-2">
                  尺寸：
              </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model='newPizza.size1' name="" value="">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2">
                  价格：
              </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model='newPizza.price1' name="" value="">
      </div>
    </div>
    <p>
      <strong>选项2：</strong>
    </p>
    <div class="form-group row">
      <label class="col-sm-2">
                  尺寸：
              </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model='newPizza.size2' name="" value="">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2">
                  价格：
              </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model='newPizza.price2' name="" value="">
      </div>
    </div>
    <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
  </form>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    newPizza: {

    }
  }),
  methods: {
    addMenuItem() {
      let data = {
        description: this.newPizza.description,
        name: this.newPizza.name,
        options: [{
            size: this.newPizza.size1,
            price: this.newPizza.price1,
        },{
            size: this.newPizza.size2,
            price: this.newPizza.price2
        }]
      }
      // fetch('https://wd4561535768olqhyf.wilddogio.com/menu.json',{
      //     method: 'POST',
      //     headers: {
      //         'Content-type': 'application/json'
      //     },
      //     body: JSON.stringify(data)
      // })
      // .then(res => res.json())
      // .then(data => this.$router.push({name: 'menuLink'}))
      // .catch(err => console.log(err))
      // this.http.post('menu.json', data)
      //     .then(res => this.$router.push({name: 'menuLink'}))
      this.http.post('menu.json', data)
          .then(res => this.$store.commit('addToMenuItems', data))
    }
  }
}
</script>
<style scoped>
</style>
