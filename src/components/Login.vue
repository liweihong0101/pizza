<template>
  <div id="">
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../assets/logo.png" alt="" />
                    <form @submit.prevent="onSubmit">
                         <div class="form-group">
                            <label for="email">邮箱</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    v-model="email"
                                />
                        </div>

                        <div class="form-group">
                            <label for="password">密码</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    v-model="password"
                                >
                        </div>
                        <button class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
      email: '',
      password: ''
  }),
  methods: {
    onSubmit() {
        axios.get('/users.json')
             .then(res=>{
                 const data = res.data;
                 const users = [];
                 for(let key in data){
                     const user = data[key];
                     users.push(user);
                 }

                 //实现过滤
                 let result = users.filter((user) => {
                     return user.email == this.email && user.password == this.password;
                 });
                 if(result.length > 0){
                     alert('登陆成功');
                     this.$router.push('/');
                 }else{
                     alert('登录失败，请检查邮箱和密码是否正确!')
                 }
             })
    }
  }
}
</script>
<style scoped>
</style>
