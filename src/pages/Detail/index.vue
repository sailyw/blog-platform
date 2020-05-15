<template>
  <div id="detail">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.name" :title="user.username" class="avatar" />
      <h3>{{title}}</h3>
      <p>
        <router-link :to="`/user/${user.id}`">{{user.username}}</router-link>
        发布于{{createdAt}}
      </p>
    </section>
    <section class="acticle" v-html="markdown"></section>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.less" lang="less"></style>
