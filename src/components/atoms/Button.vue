<template>
    <button :class="classes" @click="handleClickLink">
        <slot>預設</slot>
    </button>
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
const preBtn = 'btn';

export default {
    name: 'Button',
    props: {
        type: {
            validator(value) {
                return value === 'default' || value === 'primary' || value === 'error';
            },
            default: 'default',
        },
        size: {
            validator(value) {
                return value === 'default' || value === 'small' || value === 'large';
            },
            default: 'default',
        },
    },
    // components: { COMPONENT_NAME },
    // props: {},
    // data() {return {}},
    computed: {
        classes() {
            return [
                `${preBtn}`,
                `${preBtn}-${this.type}`,
                {
                    [`${preBtn}-${this.size}`]: this.size !== 'default',
                },
            ];
        },
    },
    // watch: {},
    created() {},
    // mounted() {},
    // beforeDestroy() {},
    methods: {
        handleClickLink(event) {
            this.$emit('click', event);
        },
    },
};
</script>
<style lang="sass" scoped>
button
  margin: 0
  padding: 0
  border: none
  font: inherit
  color: inherit
  background: none
  outline: none
  cursor: pointer
.btn
  padding: 0.375rem 0.75rem
  font-size: 1rem
  font-weight: bold
  border-radius: 0.25rem
  transition: .5s
  &-small
    padding: 0.25rem 0.5rem
    font-size: 0.875rem
    line-height: 1.5
  &-large
    padding: 0.5rem 1rem
    font-size: 1.25rem
    line-height: 1.5
  &-default
    color: #33b5e5
    &:hover
      color: #14799e
  &-primary
    background-color: #33b5e5
    color: #fff
    &:hover
      background-color: #14799e
  &-error
    background-color: #ff3547
    color: #fff
    &:hover
      background-color: #c82333
// @import '@/style/'
</style>
