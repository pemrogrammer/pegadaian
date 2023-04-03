<template>
  <b-row class="space-base">
    <b-col col md="2" class="sidebar-menu">
      <SideBar />
    </b-col>
    <b-col col md="10" class="space-content">
      <router-view></router-view>
    </b-col>
  </b-row>
</template>

<script>
import SideBar from "./SideBar.vue";
export default {
  name: "Default",
  data() {
    return {
      //
    };
  },
  components: { SideBar },
  mounted() {
    //
  },
  methods: {
    //
  },
};
</script>

<style lang="scss">
.cursor-pointer {
  cursor: pointer;
}
.space-base {
  height: 100% !important;
}
.space-content {
  padding-left: 12px !important;
  padding-right: 10px !important;
}
.sidebar-menu {
  padding-top: 20px;
  -webkit-text-size-adjust: 100%;
  fill: currentcolor;
  line-height: 1.5;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
    "Segoe UI Symbol";
  -webkit-font-smoothing: auto;
  cursor: default;
  pointer-events: none;
  outline: 0;
  box-sizing: border-box;
  color: rgba(25, 23, 17, 0.6);
  font-weight: 500;
  padding-right: 0px !important;
  background-color: #fbfbfa;
  width: 240px;
}
</style>
