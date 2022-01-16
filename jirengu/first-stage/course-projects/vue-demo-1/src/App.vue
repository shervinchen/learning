<template>
  <div id="app">
    <!-- <input v-model="message" placeholder="editme" /> -->
    <textarea v-model="message" placeholder="editme" />
    <p>message is: {{ message }}</p>
    <p>
      <button @click="message = 'csdoker'">set message to csdoker</button>
    </p>
    <hr />
    <label>
      <input type="checkbox" v-model="checked" />
      <span>checked: {{ checked }}</span>
    </label>
    <hr />
    爱好: {{ hobby }}
    <label>
      <input type="checkbox" v-model="hobby" :value="1" />
      <span>抽烟</span>
    </label>
    <label>
      <input type="checkbox" v-model="hobby" :value="2" />
      <span>喝酒</span>
    </label>
    <label>
      <input type="checkbox" v-model="hobby" :value="3" />
      <span>烫头</span>
    </label>
    <hr />
    你想要：{{ interest }}
    <label>
      <input name="interest" type="radio" v-model="interest" :value="1" />
      <span>抽烟</span>
    </label>
    <label>
      <input name="interest" type="radio" v-model="interest" :value="2" />
      <span>喝酒</span>
    </label>
    <label>
      <input name="interest" type="radio" v-model="interest" :value="3" />
      <span>烫头</span>
    </label>
    <hr />
    你想要：{{ interest2 }}
    <select v-model="interest2">
      <option value="">-</option>
      <option v-for="item in interests" :value="item.value" :key="item.value">{{
        item.text
      }}</option>
    </select>
    <hr>
    {{user}}
    <hr>
    登录：
    <form @submit.prevent="onSubmit">
      <label>
        <span>用户名</span>
        <!-- <input type="text" v-model.lazy="user.username">
        <input type="text" :value="user.username" @input="user.username = $event.target.value"> -->
        <Input :value="user.username" @input="user.username = $event" />
      </label>
      <label>
        <span>密码</span>
        <input type="password" v-model="user.password">
      </label>
      <button type="submit">登录</button>
    </form>
    <hr>
    <a-input placeholder="Basic usage" />
  </div>
</template>

<script>
import Input from './Input';

export default {
  name: "App",
  components: {
    Input
  },
  data() {
    return {
      message: "hi",
      checked: true,
      hobby: [],
      interest: "",
      interest2: "",
      interests: [
        {
          text: "抽烟",
          value: 1,
        },
        {
          text: "喝酒",
          value: 2,
        },
        {
          text: "烫头",
          value: 3,
        },
      ],
      user: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit () {
      console.log(this.user)
    }
  },
};
</script>
