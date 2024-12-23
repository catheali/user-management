<template>
	<nav>
	  <v-app-bar flat app>
		<div v-show="getLoggedUser">
		  <v-app-bar-nav-icon @click="showDrawer">
		</v-app-bar-nav-icon>
		</div>
		<v-toolbar-title class="text-uppercase grey--text">
		  <span class="font-weight-light">Gerenciamento </span>
		  <span>de Usuarios</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
	  </v-app-bar>
  
	  <div v-show="getLoggedUser">
		<v-navigation-drawer app v-model="drawer">
		  <v-container>
			<v-col>
			  <v-layout  v-if="getLoggedUser" class="d-block">
				<v-avatar size="200">
				  <v-icon size="150">mdi-account-circle</v-icon>
				</v-avatar>
				<div v-if="getLoggedUser" class="text-center">
				  <div class="text-subtitle-1">{{ getLoggedUser.usuario }}</div>
				  <div class="grey--text">{{ getLoggedUser.tipo == 1 ? 'Administrador' : 'Comum' }}</div>
				</div>
			  </v-layout>
			</v-col>
		  </v-container>
		  
		</v-navigation-drawer>
	  </div>
	</nav>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { useAuthStore } from '@/stores/authStore'; 
  
  export default defineComponent({
	name: "NavBar",
	setup() {
	  const authStore = useAuthStore();  

	  const drawer = ref(false); 
	  const isActive = ref(true);
  
	  const getLoggedUser = computed(() => authStore.loginData);
  
	  const showDrawer = () => {
		drawer.value = !drawer.value;
		setTimeout(() => {
		  drawer.value = !drawer.value;
		}, 6000);
	  };
  
	  return {
		drawer,
		getLoggedUser,
		showDrawer,
		isActive
	  };
	},
  });
  </script>