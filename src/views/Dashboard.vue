<template>
	<div class="usuarios">
	  <h1 class="subheading grey--text text-center">Usuários</h1>
	  <v-container v-if="allUsuarios.length > 0" class="my-5">
		<v-card v-for="usuario in allUsuarios" :key="usuario.id" flat>
		  <v-row wrap >
			<v-col cols="12" md="6">
			  <div class="caption grey--text">User Name</div>
			  <div>{{ usuario.name }}</div>
			</v-col>
			<v-col cols="6" sm="4" md="2">
			  <div class="caption grey--text">Email</div>
			  <div>{{ usuario.email }}</div>
			</v-col>
		  </v-row>
  
		  <v-divider></v-divider>
		</v-card>
	  </v-container>
  
	  <v-container v-else>
		<v-alert colored-border type="error" elevation="2">
		  <span>Não há usuários cadastrados...</span>
		</v-alert>
	  </v-container>
  
	  <v-alert v-show="getError.valid" colored-border type="error" elevation="2">
		{{ getError.message }}
	  </v-alert>
	</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
	name: "Dashboard",
	setup() {

	 const getError = ref({
		valid: false,
		message: 'erro',
	  });
  
	  const allUsuarios = ref([
		{ id: 1, name: 'admin', email: 'admin@example.com', status: true , tipo: 1 },
		{ id: 2, name: 'user', email: 'user@example.com', status: false, tipo: 2},
	  ]);
    
	  return {
		allUsuarios,
		getError,
	  };
	},
  });
  </script>
