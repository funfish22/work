<template>
  <div>
    <Table :columns="columns" :data="data" titleBold="font-bold" :style="{ 'margin-bottom': '20px' }">
      <template #name="slotProps">
        <strong>{{ slotProps.data }}</strong>
      </template>
      <template #age="slotProps">
        <strong>{{ slotProps.data }}</strong>
      </template>
      <template #actions="slotProps">
        <Button type="error" size="small" @click="removeList(slotProps.index, slotProps.keyValue, { data })">刪除</Button>
      </template>
    </Table>

    <Table :columns="columns2" :data="data2">
      <template #skill="slotProps">
        <strong>{{ slotProps.data }}</strong>
      </template>
      <template #info="slotProps">
        <strong>{{ slotProps.data }}</strong>
      </template>
      <template #button="slotProps">
        <Button type="error" size="large" @click="removeList(slotProps.index, slotProps.keyValue, { data2 })">刪除</Button>
      </template>
    </Table>

    <br />
    <br />
    <Button type="primary">Yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Button>
    <br />
    <br />
    <Button type="primary" size="small" />
    <br />
    <br />
    <Button type="error" size="large" />
  </div>
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
import Button from '@/components/atoms/Button.vue';
import Table from '@/components/molecules/Table.vue';

export default {
  name: 'TablePage',
  components: { Button, Table },
  // props: {},
  data() {
    return {
      columns: [
        {
          title: '姓名',
          slot: 'name',
        },
        {
          title: '年齡',
          slot: 'age',
          align: 'center',
        },
        {
          title: '居住地',
          key: 'address',
          align: 'center',
        },
        {
          title: '操作',
          slot: 'actions',
          width: 80,
          align: 'center',
        },
      ],
      data: [
        {
          name: 'Aga',
          age: 18,
          address: '外太空',
        },
        {
          name: 'Matol',
          age: 100,
          address: '太陽',
        },
      ],

      columns2: [
        {
          title: '技能名稱',
          slot: 'skill',
        },
        {
          title: 'CD',
          key: 'cd',
        },
        {
          title: '購買金額',
          key: 'money',
        },
        {
          title: '說明',
          slot: 'info',
        },
        {
          title: '操作',
          slot: 'button',
          align: 'center',
          width: 50,
        },
      ],
      data2: [
        {
          skill: '製仗',
          cd: 30,
          money: 500,
          info: '耍白癡',
        },
        {
          skill: '販劍',
          cd: 10,
          money: 200,
          info: '婊子',
        },
        {
          skill: '持盾',
          cd: 30,
          money: 999,
          info: '少根筋',
        },
        {
          skill: '聖盔',
          cd: 10,
          money: 99999,
          info: '沒救',
        },
      ],
    };
  },
  // computed: {},
  // watch: {},
  // created() {},
  // mounted() {},
  // beforeDestroy() {},
  methods: {
    removeList(num, name, data) {
      console.log('name', name);
      console.log('num', num);
      const vm = Object.keys(data)[0];
      this[vm] = this[vm].filter((row, index) => {
        return index !== num;
      });
    },
  },
};
</script>
<style lang="sass" scoped>
// @import '@/style/'
</style>
