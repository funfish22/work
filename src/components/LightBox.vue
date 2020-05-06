<template>
  <div class="lightBox">
    <div class="lightBox-close"></div>
    <div class="lightBox-container">
      <span>名稱：</span>
      <input type="text" v-model="edit.title" />
      <br />
      <br />
      <span>內容：</span>
      <input type="text" v-model="edit.info" />
      <br />
      <br />
      <span>選擇時間：</span>
      <input type="date" v-model="edit.time" />
      <br />
      <br />
      <button @click="handleCancel">取消</button>
      <button @click="handleEditEnter">確定</button>
    </div>
  </div>
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
export default {
  name: "LightBox",
  // components: { COMPONENT_NAME },
  props: {
    // todo: {
    //   type: Array
    // },
    edit: {
      type: Object
    }
  },
  // data() {return {}},
  // computed: {},
  // watch: {},
  // created() {},
  // mounted() {},
  // beforeDestroy() {},
  methods: {
    handleCancel() {
      this.$emit("handleCancel");
    },
    handleEditEnter() {
      this.$emit("handleEditEnter");
    }
  }
};
</script>
<style lang="sass" scoped>
.lightBox
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  &-close
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0,0,0,.5)
  &-container
    position: absolute
    background-color: #fff
    padding: 30px
// @import '@/style/'
</style>