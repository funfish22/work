<template>
  <div class="container">
    <div v-if="isSelect" class="closeSelect" @click.stop="handleSelectUp"></div>
    <h1 class="bigTitle">Select</h1>
    <!-- <p v-show="deleteClose">Show</p> -->
    <div class="w-50">
      <p class="title">選擇人員：</p>

      <div class="selectRoot">
        <div
          class="labelRoot"
          v-if="!isSelect"
          @click="openSelect"
          @mouseover="showDelete"
          @mouseout="hideDelete"
        >
          <span
            class="finalSelect"
            :style="newSelectAllName !== '' && 'font-weight: bold'"
          >{{newSelectAllName === '' ? '請選擇人員' : newSelectAllName}}</span>
          <div class="totalSelect" v-if="selectAllName.length !==0">
            共{{selectAllName.length}}位
            <span class="toolTip">{{newSelectAllName}}</span>
          </div>
          <i v-show="!deleteClose || newSelectAllName === ''">▼</i>
          <i v-show="deleteClose" v-if="newSelectAllName !== ''" @click.stop="handleDeleteAll">X</i>
        </div>
        <div class="inputRoot" v-if="isSelect">
          <input
            ref="inputdom"
            type="text"
            :placeholder="selectAllName.length === 0? '請選擇人員' : newSelectAllName"
            v-model="searchName"
          />
          <div class="totalSelect" v-if="selectAllName.length !==0">
            共{{selectAllName.length}}位
            <span class="toolTip">{{newSelectAllName}}</span>
          </div>
          <i>▲</i>
          <ul class="select">
            <li
              class="select-item"
              v-for="item in searchAllName"
              :key="item.id"
              @click.stop="handleTarget(item.name, item.id)"
            >
              <i class="tick" v-if="item.select">∨</i>
              {{item.name}}
            </li>
            <li class="select-item" v-if="searchAllName.length === 0">找不到搜尋結果</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
import { mapState, mapGetters } from "vuex";
export default {
  name: "Select",
  // components: { COMPONENT_NAME },
  // props: {},
  data() {
    return {
      searchName: "",
      deleteClose: false
    };
  },
  computed: {
    ...mapState({
      isSelect: state => state.select.isSelect,
      allName: state => state.select.allName,
      selectName: state => state.select.selectName,
      selectAllName: state => state.select.selectAllName,
      newSelectAllName: state => state.select.newSelectAllName
    }),
    ...mapGetters("select", ["searchAllName"])
  },
  watch: {
    searchName() {
      this.$store.commit("select/handleSelect", {
        searchName: this.searchName
      });
    }
  },
  created() {},
  mounted() {},
  // beforeDestroy() {},
  methods: {
    openSelect(e) {
      e.stopPropagation();
      this.$store.commit("select/openSelect", { isSelect: true });
      setTimeout(() => {
        this.$refs.inputdom.focus();
      }, 0);
    },
    handleTarget(name, id) {
      this.$store.commit("select/handleTarget", { name, id });
    },
    handleSelectUp() {
      this.$store.commit("select/openSelect", { isSelect: false });
      this.deleteClose = false;
    },
    showDelete() {
      this.deleteClose = true;
    },
    hideDelete() {
      this.deleteClose = false;
    },
    handleDeleteAll() {
      this.$store.commit("select/handleDeleteAll");
    }
  }
};
</script>
<style lang="sass" scoped>
.w-50
  width: 50%
  font-family: Arial, Microsoft JhengHei, sans-serif

.container
  max-width: 960px
  width: calc(100% - 30px)
  margin: 0 auto

.title
  font-size: 24px
  padding: 0 5px

.bigTitle
  font-size: 30px
  margin: 0
  padding-top: 16px

.selectRoot
  max-width: 350px
  border: 1px solid #ccc
  border-radius: 8px

.finalSelect
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis

.labelRoot
  cursor: pointer
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px 12px
  height: 45px
  box-sizing: border-box
  i
    width: 16px

.inputRoot
  padding: 10px 12px
  position: relative
  display: flex
  justify-content: space-between
  align-items: center
  input
    height: 25px
    border: none
    outline: none
    width: 100%
    font-size: 16px
    padding: 0

.select
  border: 1px solid #ccc
  border-radius: 8px
  position: absolute
  padding: 0
  margin: 0
  list-style: none
  top: 100%
  left: 0
  right: 0
  max-height: 225px
  overflow-y: auto
  -webkit-overflow-scrolling: touch
  &::-webkit-scrollbar
    width: 6px
  &::-webkit-scrollbar-track
    background-color: #ccc
    border-radius: 20px
  &::-webkit-scrollbar-thumb
    background-color: #55bdce
    border-radius: 20px
  &-item
    font-size: 18px
    padding: 12px
    &:hover
      background-color: #333
      color: #fff
      cursor: pointer
.tick
  margin-right: 10px

.totalSelect
  white-space: nowrap
  font-size: 14px
  padding: 3px 5px
  margin-left: auto
  margin-right: 5px
  background-color: #55bdce
  color: #fff
  border-radius: 4px
  position: relative
  cursor: pointer
  &:hover
    .toolTip
      opacity: 1
      visibility: visible

.toolTip
  position: absolute
  bottom: calc(100% + 15px)
  left: 50%
  transform: translateX(-50%)
  background-color: #55bdce
  color: #fff
  padding: 5px 8px
  border-radius: 4px
  width: 200px
  box-sizing: border-box
  white-space: initial
  text-align: center
  opacity: 0
  visibility: hidden
  transition: .3s
  &:after
    content: ''
    position: absolute
    bottom: -8px
    left: 50%
    transform: translateX(-50%)
    width: 0
    height: 0
    border-style: solid
    border-width: 8px 8px 0 8px
    border-color: #55bece transparent transparent transparent
    
.closeSelect
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
// @import '@/style/'
</style>