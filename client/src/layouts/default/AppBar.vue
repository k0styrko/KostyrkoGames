<template>
  <v-app-bar elevation="2" class="bg-black">
    <a href="/" class="pa-3">

      <v-app-bar-title>
        <v-img src="../../assets/icon.svg" height="60" width="200" ></v-img>
      </v-app-bar-title>
    </a>
    <v-spacer></v-spacer>
    <v-hover v-slot="{ isHovering, props }" open-delay="100"> 
    
      <v-col cols="12" sm="2" md="1" class="w-auto h-auto">
          <v-btn  block size="x-large" href="/" variant="text" :color="isHovering ? '#e53935' : undefined" v-bind="props">Игры</v-btn>
      </v-col>
    </v-hover>
    <!-- <v-hover v-slot="{ isHovering, props }" open-delay="100"> 
      <v-col cols="12" sm="2" md="1" class="w-auto h-auto">
          <v-btn block size="x-large" href="/article" variant="text" :color="isHovering ? '#e53935' : undefined" v-bind="props">Статьи</v-btn>
      </v-col>
    </v-hover> -->
  </v-app-bar>
</template>

<script lang="ts" setup>

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  @font-face {
    font-family: 'Bebas Neue';
    src: url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  }
  .btn-head {
    font-size: 22px;
    color: #e53935;
  }
</style>
