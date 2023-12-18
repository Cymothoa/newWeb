<template>
  <div>
    <!-- <p>This is B</p> -->
    <!-- <header>
      //具名插槽  简单说就是插槽带有名字 好找到
      <slot name="header"></slot>
    </header>
    <main>
      //默认插槽  如果找不到其他插槽或者没有定义名字 就存在默认插槽中
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer> -->


    <!-- 插槽的prop  -->
    <!-- 数据在组件的自身 -->
    <!-- 为了让 obj在父级的插槽内容中可用，
    我们可以将 obj作为 <slot> 元素的一个 attribute 绑定上去 -->
    <!-- <slot :obj="obj">{{obj.firstName}}</slot> -->

    <!-- 如果与具命插槽同用，则要写插槽的名字，
    如果没有写名字，默认从没有名字的插槽获取数据 -->
    <h1>{{title}}</h1>
    <slot :test="test">我是默认的一些内容</slot>
    <slot :games='games' name="footer"> footer</slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      /* obj:{
        firstName: 'zhang',
        lastName:'san'
      } */
      test: 'default',
      games:['羽毛球','篮球','排球','游泳']
    }
  }
}
</script>

<style>

</style>