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
		<div v-if="getLoggedUser?.tipo === 1">
			<NewUsuario/>
		</div>
	    <div v-if="getLoggedUser">
		  <v-btn text="" color="grey" @click="userLogout">
			<span>Sair</span>
			<v-icon right>mdi-logout</v-icon>
		  </v-btn>
		</div>
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
			<v-list-item v-for="link in getNavBar" :key="link.text" :to="link.route" router>
			  <v-list-item-action>
				<v-icon>{{ link.icon }}</v-icon>
			  </v-list-item-action>
				<v-list-item-title>{{ link.text }}</v-list-item-title>
			</v-list-item>
		</v-navigation-drawer>
	  </div>
	</nav>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { useAuthStore } from '@/stores/authStore'; 
  import { useRouter } from 'vue-router';
  import NewUsuario from './popups/NewUsuario.vue';
  
  export default defineComponent({
	name: "NavBar",
	components: {
		NewUsuario
	},
	setup() {
	  const authStore = useAuthStore();  
	  const router = useRouter()
	  const drawer = ref(false); 
	  const isActive = ref(true);
  
	  const getLoggedUser = computed(() => authStore.loginData);
	  const getNavBar = [
			{ text: 'Home', icon: 'mdi-home', route: '/' },
			{ text: 'Profile', icon: 'mdi-account', route: '/profile' }
    	]
  
	  const showDrawer = () => {
		drawer.value = !drawer.value;
	  };
  
	  const userLogout = async () => {
		try {
		  await authStore.logoutUser();
		  router.push({ path: '/login' })
		} catch (error) {
		  console.log(error)
		}
	  };
  
	  return {
		drawer,
		getLoggedUser,
		getNavBar,
		showDrawer,
		userLogout,
		isActive
	  };
	},
  });
  </script>