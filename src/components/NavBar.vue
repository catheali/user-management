<template>
	<nav>
	  <v-app-bar flat app>
		<v-toolbar-title class="text-uppercase grey--text">
		  <span class="font-weight-light">Gerenciamento </span>
		  <span>de Usuarios</span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
	  </v-app-bar>
  
	</nav>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  
  export default defineComponent({
	name: "NavBar",
	setup() {
	},
  });
  </script>