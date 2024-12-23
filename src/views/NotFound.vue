<template>
	<v-container class="text-center">
		<v-card class="pa-5"  outlined elevation="4">
			<v-row>
				<v-col cols="6">
					<v-img
					:src="Error404"
					alt="Erro 404"
					height="100%"
					width="100%">
					</v-img>
				</v-col>
				<v-col cols="6">
					<div>
						<v-card-title class="text-h3 text-md-h3 text-lg-h1">Opa!</v-card-title>
						<v-card-text class="text-h6 text-md-h5 txt-lg-h5">
							Essa página não foi encontrada
						</v-card-text>
					</div>
					<v-divider></v-divider>
					<v-btn to="/" class="mt-5 text-h6 text-button " color="black">Voltar para o inicio</v-btn>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Error404 from '@/assets/svgs/Error404.svg';

  export default defineComponent({
	name: 'NotFound',
	setup() {
		return {
		  Error404
		}
	}
  });
  </script>