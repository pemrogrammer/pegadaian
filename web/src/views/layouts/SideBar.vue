<template>
  <el-row>
    <el-col>
      <h3 class="title-menu">Menu</h3>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo vertical-menu"
        @open="handleOpen"
        @close="handleClose"
      >
        <b-link :to="{ name: 'dashboard' }" @click="onClickMenu('dashboard')">
          <el-menu-item index="1">
            <svg
              viewBox="0 0 16 16"
              class="page style-icon"
              style="width: 18px; height: 18px; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0; backface-visibility: hidden;"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path
                d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
              />
            </svg>
            <span style="color: inherit;">Dashboard</span>
          </el-menu-item>
        </b-link>
        <b-link :to="{ name: 'contractForm' }" @click="onClickMenu('contractForm')">
          <el-menu-item index="2">
            <svg
              viewBox="0 0 16 16"
              class="page style-icon"
              style="width: 18px; height: 18px; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0; backface-visibility: hidden;"
            >
              <path
                d="M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM10.4336 9.00098H5.42969C5.16992 9.00098 4.98535 9.19238 4.98535 9.43164C4.98535 9.67773 5.16992 9.86914 5.42969 9.86914H10.4336C10.6797 9.86914 10.8643 9.67773 10.8643 9.43164C10.8643 9.19238 10.6797 9.00098 10.4336 9.00098ZM10.4336 11.2979H5.42969C5.16992 11.2979 4.98535 11.4893 4.98535 11.7354C4.98535 11.9746 5.16992 12.1592 5.42969 12.1592H10.4336C10.6797 12.1592 10.8643 11.9746 10.8643 11.7354C10.8643 11.4893 10.6797 11.2979 10.4336 11.2979Z"
              />
            </svg>
            <span>Contract</span>
          </el-menu-item>
        </b-link>
        <!-- <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Navigator One</span>
              </template>
              <el-menu-item index="3-1">item one</el-menu-item>
        </el-submenu>-->
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    onClickMenu(nameMenu) {
      // console.info("click");
      this.nameMenu = nameMenu;
    },
    onClickLogo(nameMenu) {
      this.nameMenu = nameMenu;

      this.$router.push({ name: "dashboard" });
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    setActive(nameMenu) {
      return this.nameMenu == nameMenu ? "active" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.space-content {
  padding-right: 235px;
  padding-top: 15px;
}

.title-menu {
  -webkit-text-size-adjust: 100%;
  fill: currentcolor;
  line-height: 1.5;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
    "Segoe UI Symbol";
  -webkit-font-smoothing: auto;
  pointer-events: auto;
  user-select: none;
  cursor: pointer;
  font-size: 20px;
  outline: 0;
  box-sizing: border-box;
  color: rgb(55, 53, 47);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 20px;
}

.vertical-menu {
  -webkit-text-size-adjust: 100%;
  fill: currentcolor;
  line-height: 1.5;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
    "Segoe UI Symbol";
  -webkit-font-smoothing: auto;
  color: rgba(25, 23, 17, 0.6);
  font-weight: 500;
  pointer-events: auto;
  user-select: none;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  font-size: 14px;
  min-height: 27px;
  //padding: 2px 10px 0px 0px;
  margin-top: 1px;
  margin-bottom: 1px;
}

.style-icon {
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
    "Segoe UI Symbol";
  -webkit-font-smoothing: auto;
  font-weight: 500;
  pointer-events: auto;
  color: inherit;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  fill: rgba(55, 53, 47, 0.45);
  flex-shrink: 0;
  backface-visibility: hidden;
  margin: 2px 10px 10px 2px;
}

a {
  color: inherit !important;
  text-decoration: none !important;
}

.el-menu {
  border-right: solid 0px !important;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #fbfbfa;

  .is-active {
    color: rgb(55, 53, 47) !important;
  }
}

.el-menu-item,
.el-submenu__title {
  -webkit-text-size-adjust: 100%;
  fill: currentcolor;
  line-height: 1.5;
  height: 10px !important;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
    "Segoe UI Symbol";
  -webkit-font-smoothing: auto;
  font-weight: 500;
  pointer-events: auto;
  color: inherit;
  user-select: none;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  min-height: 27px;
  padding: 2px 10px 2px 19px;
  margin-top: 1px;
  margin-bottom: 1px;
  border-radius: 3px;
  line-height: 0px !important;
  background-color: #fbfbfa;

  &:hover {
    color: rgb(55, 53, 47);
    background: rgba(0, 0, 0, 0.04) !important;
  }
}
</style>