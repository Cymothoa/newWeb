<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <p>我是home页面</p> -->
    <!-- <B>
      //这种写法是正常找到具名插槽的写法
      <template v-slot:header>
        <p>我是header部分</p>
      </template> -->
      <!-- <p>我是main 默认部分</p> -->
      <!-- 旧版写法 -->
      <!-- <template slot="footer">
        <p>我是footer部分</p>
      </template> -->
      <!-- <p>覆盖</p>
      <h1>杂物</h1>
    </B> -->



    <!-- <B> -->
      <!-- 在这里我们可以使用带值的 slot-scope 
      来定义我们提供的插槽 prop 的名字 -->
      <!-- <template slot-scope="data">
        <h1>{{data.obj.lastName}}</h1>
      </template> -->
      <!-- v-slot:default="data" 下面是简写方法 -->
      <!-- <template v-slot="data">
        <h1>{{data.obj.lastName}}</h1>
      </template>
    </B> -->
    
    <!-- 现在我们默认从default插槽中获取数据  但是默认插槽没有
    绑定games值  只有title  所以找不到内容
    -->
    <!-- <B title="游戏">
      <template v-slot:default="data">
        <ul>
          <li v-for="(g,index) in data.games" :key='index'></li>
        </ul>
      </template>
    </B> -->
    <B>
      <template v-slot:default="{test}">
        {{test}}
      </template>
      <template v-slot:footer="{games}">
        <h3 v-for="(g,index) in games" :key="index">{{g}}</h3>
      </template>
    </B>
  </div>
</template>

<script>

import B from '../components/B.vue'
export default {
  name: 'HomeView',
  components: {
    B
  }
}
</script>
