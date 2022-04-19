<template>
  <div>欢迎使用</div>
  <div>
    <el-input v-model="name" style="width: 50%"></el-input>
  </div>
  <div>
    <el-input v-model="pass" style="width: 50%"></el-input>
  </div>

  <el-button @click="Login">登陆</el-button>
  <Code></Code>
</template>
<script>
import Code from "../share/code.vue";
export default {
  data() {
    return {
      name: "",
      pass: "",
    };
  },
  components: { Code },
  methods: {
    Login() {
      console.log(this.name, this.pass);
      fetch("/api/list")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
        });
    },
  },
};
</script>
