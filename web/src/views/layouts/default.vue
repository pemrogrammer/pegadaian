<template>
  <div>
    <div class="wrapper">
      <nav id="sidebar" class="sidebar js-sidebar">
        <div class="sidebar-content js-simplebar">
          <a class="sidebar-brand" :to="{ name: 'dashboard'}" @click="onClickLogo('dashboard')">
            <span class="align-middle">PawnShop</span>
          </a>

          <ul class="sidebar-nav">
            <li class="sidebar-header">Main</li>

            <li class="sidebar-item" :class="setActive('dashboard')">
              <b-link
                class="sidebar-link"
                :to="{ name: 'dashboard'}"
                @click="onClickMenu('dashboard')"
              >
                <i class="align-middle" data-feather="sliders"></i>
                <span class="align-middle">Dashboard</span>
              </b-link>
            </li>
            <li class="sidebar-item" :class="setActive('contractForm')">
              <b-link
                class="sidebar-link"
                @click="onClickMenu('contractForm')"
                :to="{ name: 'contractForm'}"
              >
                <i class="align-middle" data-feather="clipboard"></i>
                <span class="align-middle">Make a Contract</span>
              </b-link>
            </li>
            <li class="sidebar-item" :class="setActive('contractData')">
              <b-link
                class="sidebar-link"
                @click="onClickMenu('contractData')"
                :to="{ name: 'contractData'}"
              >
                <i class="align-middle" data-feather="database"></i>
                <span class="align-middle">Data Contract</span>
              </b-link>
            </li>
            <li class="sidebar-header">Master</li>
            <li class="sidebar-item" :class="setActive('customerData')">
              <b-link
                class="sidebar-link"
                @click="onClickMenu('customerData')"
                :to="{ name: 'customerData'}"
              >
                <i class="align-middle" data-feather="persons"></i>
                <span class="align-middle">Data Customer</span>
              </b-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="main">
        <nav class="navbar navbar-expand navbar-light navbar-bg">
          <a class="sidebar-toggle js-sidebar-toggle">
            <i class="hamburger align-self-center"></i>
          </a>

          <div class="navbar-collapse collapse">
            <ul class="navbar-nav navbar-align">
              <li class="nav-item dropdown">
                <a
                  class="nav-icon dropdown-toggle d-inline-block d-sm-none"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i class="align-middle" data-feather="settings"></i>
                </a>

                <a
                  class="nav-link dropdown-toggle d-none d-sm-inline-block"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <!-- <img
                    src="img/avatars/avatar.jpg"
                    class="avatar img-fluid rounded me-1"
                    alt="Charles Hall"
                  />-->
                  <span class="text-dark">{{nameUser}}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="pages-profile.html">
                    <i class="align-middle me-1" data-feather="user"></i> Profile
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Log out</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <main class="content">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";

require("@/assets/css/app-theme.css");

document.addEventListener("DOMContentLoaded", () => {
  feather.replace();
});

window.feather = feather;

export default {
  data() {
    return {
      title: "dashboard",
      nameUser: "charly",
      nameMenu: "dashboard",
    };
  },
  mounted() {
    const script = document.createElement("script");
    script.src = "/js/app-theme.js";
    document.head.appendChild(script);

    const sidebarElement = document.getElementsByClassName("js-sidebar")[0];
    const sidebarToggleElement =
      document.getElementsByClassName("js-sidebar-toggle")[0];

    if (sidebarElement && sidebarToggleElement) {
      sidebarToggleElement.addEventListener("click", () => {
        sidebarElement.classList.toggle("collapsed");

        sidebarElement.addEventListener("transitionend", () => {
          window.dispatchEvent(new Event("resize"));
        });
      });
    }
  },
  methods: {
    onClickMenu(nameMenu) {
      this.nameMenu = nameMenu;
    },
    onClickLogo(nameMenu) {
      this.nameMenu = nameMenu;

      this.$router.push({ name: "dashboard" });
    },
    setActive(nameMenu) {
      return this.nameMenu == nameMenu ? "active" : "";
    },
  },
};
</script>

<style lang="scss" >
</style>