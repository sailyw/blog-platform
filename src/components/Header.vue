<template>
  <header :class="{login:isLogin,'no-login':!isLogin}">
    <template>
      <h1>Start share</h1>
      <p>精品博客汇聚</p>
      <div class="btns" v-if="$routh.path!=='/login' && $route.path!=='/register'">
        <router-link to="/login"><el-button>立即登录</el-button></router-link>>
         <router-link to="/register"><el-button>注册账号</el-button></router-link>>
      </div>
    </template>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
