<template>
  <div class="w-50">
    <span>搜尋：</span>
    <input type="text" placeholder="輸入名稱" v-model="serachTodo" />
    <br />
    <br />
    <button @click="handleSearchTodos">查詢</button>
    <button @click="handleSearchTodosReset">重置</button>
  </div>
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
export default {
  name: "SearchTodo",
  // components: { COMPONENT_NAME },
  // props: {},
  data() {
    return {
      serachTodo: ""
    };
  },
  // computed: {},
  // watch: {},
  // created() {},
  // mounted() {},
  // beforeDestroy() {},
  methods: {
    handleSearchTodos() {
      this.$emit("handleSearchTodos", this.serachTodo);
      this.serachTodo = "";
    },

    handleSearchTodosReset() {
      this.$emit("handleSearchTodosReset");
      this.serachTodo = "";
    }
  }
};
</script>
<style lang="sass" scoped>
.w-50
    width: 50%
</style>