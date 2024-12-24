  <template>
	<div class="pa-0 m-0 text-center">
	  <v-dialog
		v-model="dialogDelete"
		max-width="600"
	  >
		<template v-slot:activator="{ props: activatorProps }">
			<v-btn
			class="text-none font-weight-regular pa-0"
			prepend-icon="mdi-account-minus"
			variant="tonal"
			color="error"
			v-bind="activatorProps"
		  ></v-btn>			
		</template>
		
		<v-card
		  prepend-icon="mdi-account-minus"
		  title="Deseja excluir o usuário ?"
		>
		<v-card-text>

		</v-card-text>
		<v-card-actions>
			  <v-spacer></v-spacer>
			  <v-btn
				text="Cancelar"
				color="warning"
				variant="plain"
				@click="dialogDelete = false"
			  ></v-btn>
  
			  <v-btn
				color="error"
				type="submit"
				text="Excluir Usuário"
				variant="tonal"
			  ></v-btn>
			</v-card-actions>
		</v-card>
	  </v-dialog>
	</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import { useUsuarioStore } from '@/stores/usuarioStore';
  
  export default defineComponent({
	name: "DeleteUsuario",
	props: {
	  user: {
		type: Object,
		required: true
	  }
	},
	setup(props) {
	  
	  const dialogDelete = ref(false);
	  const alertMessageDelete = ref('');
	  const alertTypeDelete = ref<'success' | 'error' | 'warning' | 'info' | undefined>('success');
	  const alertColorDelete = ref('green');
  
  
	  const userStore = useUsuarioStore();
  
	  const deleteUsuario = async () => {
		userStore.getUsuarios()
		console.log(props)
		console.log('aqui')
		
	  };
  
	  
  
	  return {
		dialogDelete,
		deleteUsuario,
		alertMessageDelete,
		alertTypeDelete,
		alertColorDelete
	  };
	}
  });
  </script>
  
  