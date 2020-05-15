<template>
  <div id="index">
    <section class="blog-psts">
      <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username" />
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
        <h3>
          {{blog.title}}
          <span>{{blog.createdAt}}</span>
        </h3>
        <p>{{blog.description}}</p>
      </router-link>
    </section>
    <section class="pagination">
      <!-- 当页数改变的时候 -->
      <el-pagination layout="prev, pager, next" :total="total" @current-change="onPageChange"></el-pagination>
    </section>
  </div>
</template>

<script src='./index.js'></script>
<style scoped lang="less" src='./index.less'></style>
