<template lang="pug">
  div
    .closeSelect(v-if="switchSelect" @click.stop="handleSelectUp")
    h1.bigTitle Select
    //- ul(v-if="items")
    //-   li(v-for="row in items" :key="row.id") {{row.name}}
    .w-50
      p.title 選擇人員：
      .selectRoot
        .labelRoot(
          v-if="!switchSelect"
          @click="openSelect"
          @mouseover="showDelete"
          @mouseout="hideDelete")
          span.finalSelect(
            :style="newSelectAllName !== '' && 'font-weight: bold'") 
            | {{newSelectAllName === '' ? placeholder : newSelectAllName}}
          .totalSelect(v-if="selectAllName.length !==0") 共{{selectAllName.length}}位
            span.toolTip {{newSelectAllName}}
          i(v-show="!deleteClose || newSelectAllName === ''") ▼
          i( v-show="deleteClose" v-if="newSelectAllName !== ''" @click.stop="handleDeleteAll") X
        .inputRoot(v-if="switchSelect")
          input(
            ref="inputdom"
            type="text"
            disabled
            :placeholder="selectAllName.length === 0? placeholder : newSelectAllName"
            v-model="searchTitle"
            @keydown.delete="handleBack"
            @keydown.esc="handleInputEsc"
            @keydown.up="handleKeyUp"
            @keydown.down="handleKeyDown"
            @keydown.enter="handleKeyEnter"
            @keyup="handleSearch")
          .totalSelect( v-if="selectAllName.length !==0" ) 共{{selectAllName.length}}位
            span.toolTip {{newSelectAllName}}
          i(v-if="searchTitle !== ''" @click="handleDeleteSearch") X
          ul.select(ref="selectDom")
            li.select-item(
              v-for="item in searchAllName"
              :key="item.id"
              @click.stop="handleTarget(item.name, item.id)"
              :class="{'active' : item.active}")
              i.tick(v-if="item.select") ∨
              | {{item.name}}
            li.select-item(v-if="searchAllName.length === 0") 找不到搜尋結果
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
import { mapState, mapGetters } from "vuex";
export default {
  name: "Select",
  // components: { COMPONENT_NAME },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    // todo: {
    //   type: Array
    // },
    items: {
      type: Array
    },
    placeholder: {
      type: String,
      default: "請選擇"
    },
    defaultSelected: Number || 0,
    value: {
      type: Array,
      required: false,
      default: []
    }
  },
  data() {
    return {
      searchName: this.value,
      searchTitle: "",
      deleteClose: false,
      searchClose: false,
      itemActive: 0,
      itemTotal: 0,
      scrollNum: 0,
      totalScrollNum: 0,
      catchItemActive: 0,
      switchSelect: false,
      selectAllName: [],
      newSelectAllName: "",
      myItems: []
    };
  },
  computed: {
    searchAllName() {
      if (this.searchTitle === "") {
        return this.myItems;
      } else {
        return this.myItems.filter(
          row => row.name.indexOf(this.searchTitle) !== -1
        );
      }
    }
  },
  watch: {
    searchName() {
      this.searchAllName;
    },
    items() {
      this.readItem();
    }
  },
  created() {
    this.itemActive = this.defaultSelected || 0;

    this.readItem();

    this.$emit("change", this.selectAllName);
  },
  mounted() {
    this.itemTotal = this.searchAllName.length;
  },
  // beforeDestroy() {},
  methods: {
    readItem() {
      this.myItems = JSON.stringify(this.items);
      this.myItems = JSON.parse(this.myItems);

      for (let item in this.myItems) {
        this.myItems[item].select = false;
        this.myItems[item].active = false;
      }

      this.myItems.forEach(row => {
        if (row.select === true) {
          this.selectAllName.push(row.name);
        }
      });

      this.newSelectAllName = "";
      this.selectAllName.forEach(row => {
        this.newSelectAllName += row + ",";
      });
      this.newSelectAllName = this.newSelectAllName.slice(
        0,
        this.newSelectAllName.length - 1
      );
    },
    openSelect(e) {
      e.stopPropagation();
      this.switchSelect = true;

      this.itemTotal = this.searchAllName.length;

      this.$nextTick(() => {
        this.$emit("onFocus", this.$refs.inputdom);
        this.$emit("onSearch", this.$refs.inputdom);

        this.searchAllName.forEach((row, index) => {
          row.active = false;
          if (this.itemActive === index) row.active = true;
        });

        this.totalScrollNum = this.$refs.selectDom.clientHeight;
        if (this.itemActive === this.defaultSelected) {
          this.scrollNum = this.defaultSelected * 45;
        }
        if (this.scrollNum >= this.totalScrollNum) {
          this.scrollNum = this.totalScrollNum;
        }
        this.$refs.selectDom.scrollTo(0, this.scrollNum);
      });
    },
    handleTarget(name, id) {
      if (id) {
        this.myItems.forEach(row => {
          if (row.id === id) {
            row.select = !row.select;
          }
        });
      }

      this.selectAllName = [];
      this.myItems.forEach(row => {
        if (row.select === true) {
          this.selectAllName.push(row.name);
        }
      });

      this.newSelectAllName = "";
      this.selectAllName.forEach(row => {
        this.newSelectAllName += row + ",";
      });

      this.newSelectAllName = this.newSelectAllName.slice(
        0,
        this.newSelectAllName.length - 1
      );

      this.$emit("onFocus", this.$refs.inputdom);
    },
    handleSearch() {
      this.itemTotal = this.searchAllName.length;

      this.searchAllName.forEach((row, index) => {
        row.active = false;
      });
      if (this.searchTitle !== "" && this.searchAllName.length !== 0) {
        this.searchAllName[this.catchItemActive].active = true;
      } else {
        this.catchItemActive = 0;
        this.searchAllName.forEach((row, index) => {
          row.active = false;
          if (this.itemActive === index) {
            row.active = true;
          }
        });
      }

      this.handleSearchName();
    },
    handleSelectUp() {
      this.switchSelect = false;
      this.deleteClose = false;
      this.searchTitle = "";

      this.$emit("change", this.selectAllName);
    },
    showDelete() {
      this.deleteClose = true;
    },
    hideDelete() {
      this.deleteClose = false;
    },
    handleDeleteAll() {
      this.newSelectAllName = "";
      this.selectAllName = [];
      this.searchAllName.forEach(row => {
        row.select = false;
      });
      this.$emit("change", this.selectAllName);
    },
    handleBack() {
      setTimeout(() => {
        this.$refs.selectDom.scrollTo(0, this.scrollNum);
      }, 0);
    },
    handleInputEsc() {
      if (this.searchTitle !== "") {
        this.searchTitle = "";

        this.$emit("change", this.selectAllName);

        this.$nextTick(() => {
          this.$refs.selectDom.scrollTo(0, this.scrollNum);
        });
      } else {
        this.$emit("onBlur", this.$refs.inputdom);
        this.switchSelect = false;
      }
    },
    handleDeleteSearch() {
      this.searchTitle = "";

      this.$emit("change", this.selectAllName);

      this.$refs.inputdom.focus();
    },
    handleKeyUp() {
      if (this.$listeners.onSelect) {
        this.totalScrollNum = this.$refs.selectDom.clientHeight;

        if (this.searchTitle !== "") {
          if (this.catchItemActive === 0) return;
          this.catchItemActive -= 1;
          this.searchAllName.forEach((row, index) => {
            row.active = false;
            if (index === this.catchItemActive) {
              row.active = true;
            }
          });
        } else {
          if (this.itemActive === 0) return;
          this.itemActive -= 1;
          this.searchAllName.forEach((row, index) => {
            row.active = false;
            if (index === this.itemActive) {
              row.active = true;
            }
          });
          if (this.scrollNum <= 0) return;
          this.scrollNum -= 45;
        }
        this.$refs.selectDom.scrollTo(0, this.scrollNum);
      }
    },
    handleKeyDown() {
      if (this.$listeners.onSelect) {
        this.totalScrollNum = this.$refs.selectDom.clientHeight;

        if (this.searchTitle !== "") {
          if (this.catchItemActive === this.itemTotal - 1) return;
          this.catchItemActive += 1;
          this.searchAllName.forEach((row, index) => {
            row.active = false;
            if (index === this.catchItemActive) {
              row.active = true;
            }
          });
        } else {
          if (this.itemActive === this.itemTotal - 1) return;
          this.itemActive += 1;
          this.searchAllName.forEach((row, index) => {
            row.active = false;
            if (index === this.itemActive) {
              row.active = true;
            }
          });
          if (this.scrollNum >= this.totalScrollNum) return;
          this.scrollNum += 45;
        }
        this.$refs.selectDom.scrollTo(0, this.scrollNum);
      }
    },
    handleKeyEnter() {
      this.searchAllName.forEach((row, index) => {
        if (index === this.itemActive && this.searchTitle === "") {
          row.select = !row.select;
        } else if (index === this.catchItemActive && this.searchTitle !== "") {
          row.select = !row.select;
        }
      });
      this.handleTarget();
    },
    handleSearchName() {
      this.$emit("change", this.selectAllName);
    }
  }
};
</script>
<style lang="sass" scoped>
.w-50
  width: 50%
  font-family: Arial, Microsoft JhengHei, sans-serif

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
  &:disabled
    background-color: transparent

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
  background-color: #fff
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
    cursor: pointer
    box-sizing: border-box
    max-height: 45px
    &:hover,&.active
      background-color: #333
      color: #fff
      
.tick
  margin-right: 10px
  font-size: 14px

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

i
  cursor: pointer
    
.closeSelect
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
// @import '@/style/'
</style>