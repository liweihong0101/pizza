<template>
<div class="row">
    <div id="home" class="col-sm-12 text-center">
        <div class="background">
            <h1>欢迎大家品尝披萨</h1>
            <h1>这里有你非常喜欢的披萨</h1>
             <button @click="gotoMenu" type="button" class="btn btn-success" name="button">Let's order</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
  methods: {
    gotoMenu(){
        //跳转到上一次浏览的页面
        // this.$router.go(-1);  //跳转到上一次浏览的页面
        // this.$router.replace('/menu'); //指定跳转到某一页面
        // this.$router.replace({'name': 'menuLink'});
        //通过push进行跳转
        // this.$router.push('/menu');
        this.$router.push({'name': 'aboutLink'});

    }
  }
}
</script>
<style>
    #home {
        background: url('../assets/pizza.jpg')left top no-repeat;
        height: 85vh;
        padding: 10%;
    }
    #home h1,h2 {
        margin: 6%;
    }
    #home .background {
        background: #eee;
        opacity: .8;
        max-width: 70vw;
        margin: 0 auto;
        padding: 20px 0;
    }
</style>
