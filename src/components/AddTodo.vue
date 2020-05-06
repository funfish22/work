<template>
  <div class="w-50">
    <span>名稱：</span>
    <input type="text" v-model="todoTitle" placeholder="輸入名稱" @keydown.Enter="handleAddTodo" />
    <br />
    <br />
    <span>內容：</span>
    <input type="text" v-model="todoInfo" placeholder="輸入內容" @keydown.Enter="handleAddTodo" />
    <br />
    <br />
    <span>選擇時間：</span>
    <input type="date" v-model="todoTime" />
    <br />
    <br />
    <button @click="handleAddTodo">新增</button>
  </div>
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
export default {
  name: "AddTodo",
  data() {
    return {
      todoTitle: "",
      todoInfo: "",
      todoTime: "",

      serachTodo: ""
    };
  },
  methods: {
    handleAddTodo() {
      this.$emit("handleAddTodo", {
        todoTitle: this.todoTitle,
        todoInfo: this.todoInfo,
        todoTime: this.todoTime
      });

      this.todoTitle = "";
      this.todoInfo = "";
    }
  },
  // components: { COMPONENT_NAME },
  props: {
    name: {
      type: String | Number
    }
  },
  // data() {return {}},
  // computed: {},
  // watch: {},
  created() {
    let time = new Date();
    let day = ("0" + time.getDate()).slice(-2);
    let month = ("0" + (time.getMonth() + 1)).slice(-2);
    let today = time.getFullYear() + "-" + month + "-" + day;

    this.nowTime = time.toLocaleString();
    this.todoTime = today;
  }
  // mounted() {},
  // beforeDestroy() {},
  // methods: {},
};
</script>
<style lang="sass" scoped>
// @import '@/style/'
.d-flex
  display: flex
.w-50
  width: 50%
</style>