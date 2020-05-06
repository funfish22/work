<template>
  <div class="home">
    <NowTime />
    <div class="d-flex">
      <AddTodo :name="this.name" @handleAddTodo="addTodoList" />
      <SearchTodo
        @handleSearchTodos="handleSearchTodos"
        @handleSearchTodosReset="handleSearchTodosReset"
      />
    </div>
    <TodoListRoot
      :todos="this.handleSortTodos"
      @handleTodoEdit="handleEdit"
      @handleCheckAll="handleCheckAll"
      @handleDelete="handleDelete"
      :sortTodos="this.sortTodos"
    />
    <LightBox
      v-if="switchEdit"
      :edit="this.edit"
      @handleCancel="handleCancel"
      @handleEditEnter="handleEditEnter"
    />
    <!-- 
      v-model []
      :items  []  選項
      :placeholder
      :default-selected  [] 預設選中
      @onFocus
      @onBlur
      @onInput
      @onSelect


      缺↑↓鍵盤事件
      缺esc 搜尋時第一次為清除搜尋文字，第二次才是取消 focus，如果沒 focus 的話那直接就 blur
      缺清除搜尋文字的XX
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import VmodelInput from "@/components/VmodelInput";
import AddTodo from "@/components/AddTodo";
import SearchTodo from "@/components/SearchTodo";
import TodoListRoot from "@/components/TodoListRoot";
import NowTime from "@/components/NowTime";
import LightBox from "@/components/LightBox";

export default {
  name: "Home",
  components: {
    HelloWorld,
    VmodelInput,
    AddTodo,
    SearchTodo,
    TodoListRoot,
    NowTime,
    LightBox
  },
  data() {
    return {
      name: "123",

      todos: [],

      catchTodos: [],

      switchEdit: false,
      edit: [],

      sortTodos: 0,

      allCheckoutBox: false
    };
  },
  computed: {
    handleSortTodos() {
      if (this.sortTodos === 1) {
        return this.todos.sort(
          (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
        );
      } else if (this.sortTodos === 2) {
        return this.todos.sort(
          (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
        );
      } else {
        return this.todos.sort((a, b) => a.id - b.id);
      }
    }
  },
  methods: {
    addTodoList(todo) {
      if (todo.todoTitle.trim() === "") {
        alert("請輸入列表名稱");
        return;
      }
      if (todo.todoInfo.trim() === "") {
        alert("請輸入列表內容");
        return;
      }
      const time = new Date();
      this.todos.push({
        id: time.getTime(),
        time: todo.todoTime,
        title: todo.todoTitle,
        info: todo.todoInfo,
        checkbox: false
      });

      this.sortTodos = 0;

      this.handleSearchTodosReset();
    },
    handleEdit(todo) {
      this.edit = todo;
      this.switchEdit = true;
    },
    handleCancel() {
      this.edit = [];
      this.switchEdit = false;
    },
    handleEditEnter() {
      const edit = this.todos.find(row => {
        return row.id === this.edit.id;
      });

      if (this.edit.title.trim() === "") {
        alert("請輸入列表名稱");
        return;
      }
      if (this.edit.info.trim() === "") {
        alert("請輸入列表內容");
        return;
      }

      edit.title = this.edit.title;
      edit.info = this.edit.info;
      edit.time = this.edit.time;

      this.edit = [];
      this.switchEdit = false;
    },
    handleCheckAll() {
      if (this.allCheckoutBox === false) {
        this.allCheckoutBox = true;
        this.todos.forEach(row => {
          row.checkbox = true;
        });
      } else {
        this.allCheckoutBox = false;
        this.todos.forEach(row => {
          row.checkbox = !row.checkbox;
        });
      }
    },
    handleDelete() {
      this.todos = this.todos.filter(row => row.checkbox !== true);
      this.catchTodos = this.catchTodos.filter(row => row.checkbox !== true);
    },
    handleSearchTodos(searchTitle) {
      if (searchTitle.trim() === "") {
        alert("請輸入搜尋名稱");
        return;
      }

      this.catchTodos = this.todos;
      this.todos = this.todos.filter(
        row => row.title.indexOf(searchTitle) !== -1
      );
    },
    handleSearchTodosReset() {
      if (this.catchTodos.length === 0) return;
      this.todos = this.catchTodos;
      this.catchTodos = [];
    }
  },
  created() {
    console.log(this.$route);
  }
};
</script>
<style lang="sass" scoped>
.d-flex
  display: flex
</style>