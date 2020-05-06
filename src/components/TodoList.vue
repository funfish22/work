<template>
  <li>
    <span>
      <input type="checkbox" v-model="item.checkbox" />
    </span>
    <span>{{item.title}}</span>
    <span>{{item.time}}</span>
    <span>{{item.info}}</span>
    <span>
      <button @click="handleTodoEdit">編輯</button>
    </span>
  </li>
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
export default {
  name: "TodoList",
  // components: { COMPONENT_NAME },
  props: {
    // todo: {
    //   type: Array
    // },
    item: {
      type: Object
    }
  },
  data() {
    return {};
  },
  // computed: {},
  // watch: {},
  //   created() {
  //     console.log(this.props);
  //   }
  // mounted() {},
  // beforeDestroy() {},
  methods: {
    handleTodoEdit() {
      this.$emit("handleTodoEdit");
    }
  }
};
</script>
<style lang="sass" scoped>
li
  display: flex
  width: 100%
  span
    flex: 1
    border: 1px solid #000
// @import '@/style/'
</style>