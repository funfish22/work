<template>
  <div>
    <input type="text" :value="value" @input="update($event)" />
  </div>
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
export default {
  name: "VmodelInput",
  // components: { COMPONENT_NAME },
  props: {
    value: {
      required: false,
      type: String
    }
  },
  model: {
    prop: "value",
    event: "update"
  },
  // data() {return {}},
  // computed: {},
  // watch: {},
  // created() {},
  // mounted() {},
  // beforeDestroy() {},
  methods: {
    update(ev) {
      console.log(ev);
      this.$emit("update", ev.target.value);
    }
  }
};
</script>
<style lang="sass" scoped>
// @import '@/style/'
</style>