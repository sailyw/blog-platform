<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar" />
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <div class="date">
          <span class="day">{{splitDate(blog.createdAt).date}}</span>
          <span class="month">{{splitDate(blog.createdAt).month}}月</span>
          <span class="year">{{splitDate(blog.createdAt).year}}</span>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
      </router-link>
    </section>
    <section>
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="onPageChange"
        :current-page="page"
      ></el-pagination>
    </section>
  </div>
</template>
<script src='./index.js'></script>

<style src="../My/index.less" lang="less"></style>
