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
		  :title="`Deseja excluir o usuário  ${user.nome} ?`"
		>
		<v-card-text>
			<div>
				<v-alert v-if="alertMessageDelete" :type="alertTypeDelete" :color="alertColor" dismissible>
					{{ alertMessageDelete }}
				</v-alert>
			</div>
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
				text="Excluir Usuário"
				variant="tonal"
				@click="deleteUsuario(user.matricula)"
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
	  const { user } = props;
	  const dialogDelete = ref(false);
	  const alertMessageDelete = ref('');
	  const alertTypeDelete = ref<'success' | 'error' | 'warning' | 'info' | undefined>('success');
	  const alertColorDelete = ref('green');
      
	  const userStore = useUsuarioStore();
  
	  const deleteUsuario = async (matricula:string) => {
		try {
			//await userStore.deleteUsuario(matricula);
			alertMessageDelete.value = 'Usuário deletado com sucesso!';
			alertTypeDelete.value = 'success';
			alertColorDelete.value = 'green';	
			setTimeout(() => {
				userStore.getUsuarios();
				dialogDelete.value = false;  
				resetForm();
			}, 2000);
		} catch (error) {
			console.error(error);
			alertMessageDelete.value = 'Erro ao deletar o usuário!';
			alertTypeDelete.value = 'error';
			alertColorDelete.value = 'red';
		}

		const resetForm = () => {
			alertMessageDelete.value = '';
			alertTypeDelete.value = 'success';
			alertColorDelete.value = '';
		};
		
	  };
  
	  return {
		dialogDelete,
		deleteUsuario,
		alertMessageDelete,
		alertTypeDelete,
		alertColorDelete,
		user
	  };
	}
  });
  </script>
  
  