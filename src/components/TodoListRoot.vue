<template>
  <div>
    <div class="gutter"></div>
    <button @click="handleCheckAll">全選</button>
    <button @click="handleDelete">刪除</button>
    <div class="todo mt-2">
      <span></span>
      <span>名稱</span>
      <span class="time">
        時間
        <i @click="handleSort(1)" :class="{active : sortTodos == 1}">▲</i>
        <i @click="handleSort(2)" :class="{active : sortTodos == 2}">▼</i>
      </span>
      <span>敘述</span>
      <span>編輯</span>
    </div>
    <ul class="todo">
      <template v-for="item in todos">
        <TodoList
          :item="item"
          :key="item.id"
          @handleTodoEdit="handleTodoEdit({id: item.id, title: item.title, info: item.info, time: item.time})"
        />
      </template>
    </ul>
  </div>
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
import TodoList from "@/components/TodoList";

export default {
  name: "TodoListRoot",
  components: {
    TodoList
  },
  props: {
    todos: {
      type: Array
    },
    sortTodos: {
      type: Number
    }
  },
  data() {
    return {};
  },
  // computed: {},
  // watch: {},
  // created() {},
  // mounted() {},
  // beforeDestroy() {},
  methods: {
    handleTodoEdit(todo) {
      this.$emit("handleTodoEdit", todo);
    },
    handleCheckAll() {
      this.$emit("handleCheckAll");
    },
    handleDelete() {
      this.$emit("handleDelete");
    },
    handleSort(num) {
      if (num === 1) {
        this.$parent.sortTodos = 1;
      } else if (num === 2) {
        this.$parent.sortTodos = 2;
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.gutter
  width: 100%
  height: 1px
  background-color: #000
  margin-top: 20px
  margin-bottom: 20px
.todo
  display: flex
  flex-wrap: wrap
  margin: 0
  padding: 0
  li
    display: flex
    width: 100%
  span
    flex: 1
    border: 1px solid #000
.time
  display: flex
  i
    cursor: pointer
    &:not(:last-of-type)
      margin-left: auto
    &:hover, &.active
      color: #ccc
.mt-2
  margin-top: 20px
</style>