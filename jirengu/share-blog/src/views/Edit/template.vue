<template>
  <div class="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" v-model="description"  :autosize="{ minRows: 2, maxRows: 6}"></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" v-model="content" :autosize="{ minRows: 4, maxRows: 30}"></el-input>
    <p class="msg">限30个字</p>
    <p>
        <label>是否展示到首页</label>
        <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onEdit">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.scss" scoped lang="scss"></style>