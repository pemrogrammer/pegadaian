<template>
  <div class="height-max">
    <b-navbar class="navbar">
      <b-navbar-toggle target="sidebar"></b-navbar-toggle>
      <b-button variant="info" class="mr-4" @click="sidebarOpen = !sidebarOpen">show</b-button>
      <b-navbar-brand href="#" style="color: white">Pegadaian</b-navbar-brand>
    </b-navbar>
    <div class="row height-max" style="margin: 0px">
      <div class="place-side-bar" :class="classSideBar" v-if="sidebarOpen">
        <nav class="navbar navbar-expand-md navbar-light bg-light sideBar">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="sidebarMenu">
            <ul class="navbar-nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">Link 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link 2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link 3</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div :class="classContent">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, label: "Dashboard", route: "/" },
        { id: 2, label: "Profile", route: "/profile" },
        { id: 3, label: "Settings", route: "/settings" },
      ],
      sidebarOpen: true,
      classContent: "col-md-10",
      classSideBar: "col-md-2",
    };
  },
  watch: {
    sidebarOpen(newValue, oldValue) {
      if (newValue) {
        this.classContent = "col-md-10";
        this.classSideBar = "col-md-2";
      } else {
        this.classContent = "col-md-12";
        this.classSideBar = "";
      }
    },
  },
  methods: {
    getWidth() {},
  },
};
</script>

<style lang="scss" scoped>
.height-max {
  height: 100%;
}

.navbar {
  background-color: #2064d7;
  color: white;
}
.place-side-bar {
  border: 1px solid gray;

  .sideBar {
    height: 10rem;
  }
}
.content {
  // padding: 5rem;
}
</style>