<template>
  <div>
    <VRow>
      <VCol cols="12" sm="6">
        <VCard>
          <VCardText class="d-flex align-center">
            <!-- <VAvatar v-if="props.icon" size="40" :color="newProject.color" class="elevation-2">
              <VIcon :icon="newProject.icon" size="24" />
            </VAvatar>-->

            <VSpacer />

            <VBtn size="x-small" variant="text" color="default" class="me-n3 mt-n1" icon>
              <!-- <VIcon size="24" icon="mdi-dots-vertical" /> -->
            </VBtn>
          </VCardText>

          <VCardText>
            <h6 class="text-sm font-weight-semibold mb-2">{{ newProject.title }}</h6>
            <div v-if="newProject.change" class="d-flex align-center mb-2">
              <span class="font-weight-semibold text-h6 me-2">{{ newProject.stats }}</span>
              <span
                :class="isPositive ? 'text-success' : 'text-error'"
                class="text-caption"
              >{{ isPositive ? `+${newProject.change}` : newProject.change }}%</span>
            </div>
            <span class="text-caption">{{ newProject.subtitle }}</span>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<script lang="js">
import CardStatisticsVertical from '@core/components/CardStatisticsVertical.vue'
  
  export default {
    data() {
      return {
        title: "Dashboard",
        newProject: {
          title: 'New Project',
          color: 'primary',
          icon: 'mdi-briefcase-variant-outline',
          stats: '862',
          change: -18,
          subtitle: 'Yearly Project',
        },
      }
    },
  };
</script>

