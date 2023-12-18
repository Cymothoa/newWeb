<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getInfo">获取信息</button>
    <img v-lazy="psdimg" src="" alt="">
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    getInfo() {},
    showInfo() {
      axios.get("http://jr.edu.koobietech.com/showAddresses").then(
        (response) => {
          console.log("请求成功", response.data);
        },
        (error) => {
          console.log("请求失败", error.data);
        }
      );
    },
  },
  created() {
    this.showInfo()
  },
};
</script>