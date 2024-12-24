<template>
	<div class="usuarios mx-5">
	  <v-card flat>
		<v-card-title class="d-flex align-center pe-2">
		<v-icon icon="mdi-account-group"></v-icon> &nbsp;
		Usuários
		<v-spacer></v-spacer>

		<v-text-field
			v-model="search"
			density="compact"
			label="Filtrar"
			prepend-inner-icon="mdi-magnify"
			variant="solo-filled"
			flat
			hide-details
			single-line
		></v-text-field>
		</v-card-title>

		<v-divider></v-divider>

		<v-data-table
		no-data-text="Nenhum usuário encontrado"
		v-model:search="search"
		item-key="matricula"
		:filter-keys="['nome', 'matricula', 'idade', 'cargo', 'tipo']"
		:items="allUsuarios"
		:headers="columns"
		class="scrollable-table"
		>
		<template v-slot:item.tipo="{ item }">
			<div>
				<v-chip :color="item.tipo === 1 ? 'success': 'warning'">
					{{ item.tipo === 1 ? 'Administrador' : 'Comum' }}
				</v-chip>
			</div>
		</template>
		<template v-if="userLogged?.tipo === 1" v-slot:item.actions="{ item }">
			<v-row class="pa-2">
				<v-col >
					<EditUsuario :user="item"/>
				</v-col>
				<v-col >
					<DeleteUsuario :user="item" />
				</v-col>
			</v-row>
		</template>
		</v-data-table>
	</v-card>
	</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { useUsuarioStore } from '@/stores/usuarioStore';
  import { useAuthStore } from '@/stores/authStore'; 
  import EditUsuario from '@/components/popups/EditUsuario.vue';
  import DeleteUsuario from '@/components/popups/DeleteUsuario.vue';

  export default defineComponent({
	name: "Dashboard",
	components: {
		EditUsuario,
		DeleteUsuario
	},
	setup() {
     const userStore = useUsuarioStore();
	 userStore.getUsuarios();

	 const authStore = useAuthStore();
	 const userLogged = authStore.loginData;

	 const columns = ref([
		{ title: 'Nome', key: 'nome' },
		{ title: 'Matrícula', key: 'matricula' },
		{ title: 'Idade', key: 'idade' },
		{ title: 'Cargo', key: 'cargo' },
		{ title: 'Tipo', key: 'tipo' },
		{ title: 'Ações', key: 'actions' }]);

	 const search = ref('')  

	 const getError = ref({
		valid: false,
		message: 'erro',
	  });
  
	const allUsuarios = computed(()=>userStore.usuariosList)
	
	return {
		allUsuarios,
		getError,
		columns,
		search,
		userLogged
	  };
	},
  });
  </script>
