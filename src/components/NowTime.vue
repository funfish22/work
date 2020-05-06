<template>
  <p class="time">現在時間：{{nowTime}}</p>
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
export default {
  name: "NowTime",
  // components: { COMPONENT_NAME },
  // props: {},
  data() {
    return {
      nowTime: ""
    };
  },
  // computed: {},
  // watch: {},
  created() {
    let time = new Date();
    let day = ("0" + time.getDate()).slice(-2);
    let month = ("0" + (time.getMonth() + 1)).slice(-2);
    let today = time.getFullYear() + "-" + month + "-" + day;

    this.nowTime = time.toLocaleString();
  },
  mounted() {
    setInterval(() => {
      this.nowTime = new Date().toLocaleString();
    }, 1000);
  }
  // beforeDestroy() {},
  // methods: {},
};
</script>
<style lang="sass" scoped>
.time
    margin-bottom: 20px
// @import '@/style/'
</style>