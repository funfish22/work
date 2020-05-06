<template lang="pug">
  div.container
    .select
      Select(
        :items="itemsArray"
        :defaultSelected="1"
        @onFocus="onFocus"
        @onBlur="onBlur"
        @onSearch="onSearch"
        @onSelect
        v-model="name"
      )
      p(v-if="name.length !== 0") {{name}}
    .select
      Select(
        :items="iiiiiiii"
        :placeholder="placeholder"
        :defaultSelected="0"
        @onFocus="onFocus"
        @onBlur="onBlur"
        @onSearch="onSearch"
        @onSelect
        v-model="name2"
      )
      p(v-if="name2.length !== 0") {{name2}}
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
import Select from "@/components/Select.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "SelectPage",
  components: { Select },
  // props: {},
  data() {
    return {
      placeholder: "拜託拜託，請選擇",
      name: [],
      name2: [],
      iiiiiiii: []
    };
  },
  computed: mapState({
    itemsArray: state => state.select.allName
  }),
  // watch: {},
  created() {
    // this.iiiiiiii = [{ id: 1, name: "fff", select: true, active: true }];
    // console.log("itemsArray", this.itemsArray);

    setTimeout(() => {
      this.iiiiiiii = [
        { id: 1, name: "fff" },
        { id: 2, name: "fffasd" },
        { id: 3, name: "f213ff" }
      ];
    }, 1000);
    setTimeout(() => {
      this.iiiiiiii = [{ id: 1, name: "fff" }];
    }, 5000);
  },
  mounted() {},
  // beforeDestroy() {},
  methods: {
    onFocus(dom) {
      dom.focus();
    },
    onBlur(dom) {
      dom.blur();
    },
    onSearch(dom) {
      dom.removeAttribute("disabled");
      dom.focus();
    }
  }
};

//
//v-model []
//:items  []  選項 V
//:placeholder V
//:default-selected  [] 預設選中 V
//@onFocus V
//@onBlur V
//@onInput V
//@onSelect V

//缺↑↓鍵盤事件 V
//缺esc 搜尋時第一次為清除搜尋文字，第二次才是取消 focus，如果沒 focus 的話那直接就 blur
//缺清除搜尋文字的XX
//
</script>
<style lang="sass" scoped>
// @import '@/style/'
.container
  display: flex
  max-width: 960px
  width: calc(100% - 30px)
  margin: 0 auto

.select
  flex: 1
</style>