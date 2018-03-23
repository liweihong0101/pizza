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
              <input type="email" class="form-control" v-model="email">
            </div>

            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
              <label for="confirmPassword">确认密码</label>
              <input type="password" class="form-control" v-model="confirmPassword">
            </div>
            <button class="btn btn-block btn-success">注册</button>
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
    password: '',
    confirmPassword: ''
  }),
  methods: {
    onSubmit() {
      if (this.email && this.password && this.confirmPassword) {
        if (this.password != this.confirmPassword) {
          alert('两次输入的密码不一致')
        } else {
          axios.get('/users.json')
            .then(res => {
              const data = res.data;
              const users = [];
              for (let key in data) {
                const user = data[key];
                users.push(user);
              }

              //实现过滤
              let result = users.filter((user) => {
                return user.email == this.email;
              });
              if (result.length > 0) {
                alert('邮箱已存在');
              } else {
                const formData = {
                  email: this.email,
                  password: this.password,
                  confirmPassword: this.confirmPassword
                };
                axios.post('/users.json', formData)
                  .then(res => {
                    if (res.status == '200') {
                      alert('注册成功！');
                      this.$router.push('/login');
                    } else {
                      alert('注册失败！');
                    }

                  })
              }
            })
        }
      } else {
        alert('邮箱和密码不能为空')
      }
    }
  }
}
</script>
<style scoped>
</style>
