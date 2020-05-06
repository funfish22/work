<template>
  <div>
    <table class="table">
      <colgroup>
        <col v-for="row in columns" :key="row.title" :width="row.width ? row.width : 100" />
      </colgroup>
      <thead>
        <tr>
          <th v-for="row in columns" :key="row.title">{{ row.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <template v-for="(row2, index2) in columns">
            <td :key="index2" :class="{ 'btn-center': columns[index2].align === 'center' }">
              <span v-if="Object.keys(columns[index2])[1] === 'slot'">
                <slot
                  :name="columns[index2].slot"
                  :data="row[columns[index2][Object.keys(columns[index2])[1]]]"
                  :keyValue="row[Object.keys(row)[0]]"
                  :index="index"
                />
              </span>
              <span v-else-if="Object.keys(columns[index2])[1] === 'key'">{{ row[columns[index2].key] }}</span>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
import Button from '@/components/atoms/Button.vue';
export default {
  name: 'Table',
  components: { Button },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    titleBold: {
      validator(value) {
        return value === 'default' || value === 'font-bold';
      },
      default: 'default',
    },
  },
  data() {
    return {
      columnNum: '',
    };
  },
  computed: {},
  // watch: {},
  created() {
    this.columnNum = 100 / this.columns.length + '%';
  },
  // mounted() {},
  // beforeDestroy() {},
  // methods: {},
};
</script>
<style lang="sass" scoped>
.table
  max-width: calc(100% - 30px)
  width: 100%
  margin: 0 auto
  border: 1px solid gray
  th
    background-color: #f8f8f9
  td, th
    padding: 10px
    border-right: 1px solid #e8eaec
    border-bottom: 1px solid #e8eaec
.btn-center
  text-align: center
.font-bold
  font-weight: bold
.btn
  margin: 2px 5px
</style>
