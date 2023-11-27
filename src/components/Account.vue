<template>
<v-container>
    <h2 class="mb-3">
      Conta
    </h2>
    <v-card color="grey-darken-4">
      <v-card-title>
        <div class="d-flex justify-start align-center">
          <v-avatar
            size="large"
            class="mr-5"
            color="light-green-accent-3"
          >
            <span class="text-uppercase">{{ getUserInitials() }}</span>
          </v-avatar>
          <span style="white-space: normal;">{{ getUserName() }}</span>
        </div>
      </v-card-title>

      <v-card-text>
        <div class="d-flex justify-start align-center mt-2">
          <strong class="mr-1">Email: </strong>
          <span style="white-space: normal;">{{ getUserEmail() }}</span>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { getUserEmail, getUserInitials, getUserName } from '@/stores/user';
</script>