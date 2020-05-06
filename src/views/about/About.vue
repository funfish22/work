<template>
  <div>
    <h1>about</h1>
    <input type="text" v-model="user" />
    {{user}}
  </div>
</template>
<script>
// import COMPONENT_NAME from '@/components/COMPONENT_NAME'
// 取出 vuex 值
import { mapSate, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "about",
  // components: { COMPONENT_NAME },
  // props: {},
  // data() {return {}},
  computed: {
    ...mapGetters("a", ["fullName"]),
    // user() {
    //   return this.$store.state.a.user;
    // }
    user: {
      get() {
        return this.$store.state.a.user;
      },
      set(val) {
        this.$store.state.a.user = val;
      }
    }
  },
  // watch: {},
  async created() {
    // this.$store.state.a.user = "aga";
    console.log(this.$store.state.root);
    console.log(this.$store.state.a.user);
    console.log(this.$store.getters.hello);
    console.log(this.fullName);
    this.$store.commit("say");
    this.$store.commit("a/say");
    this.$store.dispatch("a/delaySay2");
    await this.$store.dispatch("delaySay2");
    console.log("我說話3");
  }
  // mounted() {},
  // beforeDestroy() {},
  // methods: {},
};
</script>
<style lang="sass" scoped>
// @import '@/style/'
</style>