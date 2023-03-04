<script setup>
import upgradeBannerDark from '@/assets/images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@/assets/images/pro/upgrade-banner-light.png'
import logo from '@/assets/logo.svg?raw'
import { VerticalNavLink, VerticalNavSectionTitle } from '@layouts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
</script>

<template>
  <div>
    <!-- 👉 Nav header -->
    <div class="nav-header">
      <RouterLink to="/" class="app-logo d-flex align-center gap-x-3 app-title-wrapper">
        <!-- ℹ️ You can also use img tag or VImg here -->
        <div v-html="logo" />

        <Transition name="vertical-nav-app-title">
          <h1 class="font-weight-semibold leading-normal text-xl text-uppercase">Materio</h1>
        </Transition>
      </RouterLink>
    </div>

    <!-- 👉 Nav items -->
    <ul>
      <VerticalNavLink
        :item="{
        title: 'Dashboard',
        to: 'index',
        icon: { icon: 'mdi-home-outline' }
      }"
      />
      <VerticalNavLink
        :item="{
        title: 'Buat Akad',
        to: 'createForm',
        icon: { icon: 'mdi-notebook-edit' }
      }"
      />
      <VerticalNavLink
        :item="{
        title: 'Data Akad',
        to: 'akad',
        icon: { icon: 'mdi-table-large' }
      }"
      />
    </ul>
  </div>
</template>

<style lang="scss">
// .v-navigation-drawer {
//   height: 100%;

//   .v-navigation-drawer__content {
//     display: flex;
//     flex-direction: column;

//     > ul {
//       flex-grow: 1;
//     }
//   }
// }

.upgrade-banner {
  margin-top: auto;
  // position: absolute;
  // bottom: 13px;
  // left: 50%;
  // transform: translateX(-50%);
}
</style>
