<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          prepend-icon="mdi-account-plus"
          text="Novo Usuário"
          variant="tonal"
          v-bind="activatorProps"
        ></v-btn>		
      </template>
	  <v-card
	  prepend-icon="mdi-account"
	  title="Novo Usuário"
	  >
	  <v-form :bind="valid" @submit.prevent="adicionarUsuario">
		<v-card-text>
			<v-alert v-if="alertMessage" :type="alertType" :color="alertColor" dismissible>
				{{ alertMessage }}
			</v-alert>
				<v-row dense>
					<v-col cols="12" md="4" sm="6">
						<v-text-field
						label="Nome*"
						required
					v-model="formUsuario.nome"
					:rules="[rules.required, rules.min]" 
						></v-text-field>
					</v-col>
			
					<v-col cols="12" md="4" sm="6">
						<v-text-field
						label="Matrícula*"
						required
						v-model="formUsuario.matricula"
						></v-text-field>
					</v-col>
					
					<v-col cols="12" md="4" sm="6">
						<v-text-field
						label="Idade*"
						required
						type="number"
						min="18"
						max="60"
						hint="Digite uma idade entre 18 e 60"
						v-model="formUsuario.idade"
						></v-text-field>
					</v-col>
					
					<v-col cols="12" md="4" sm="6">
						<v-select
						:items="['Desenvolvedor', 'Gerente', 'Designer', 'Administrador', 'Analista']"
						label="Cargo*"
						required
						hint="Escolha um cargo"
						v-model="formUsuario.cargo"
						></v-select>
					</v-col>
					
					<v-col cols="12" md="4" sm="6">
						<v-select
						:items="tipoOptions"
						label="Tipo de usuário*"
						item-title="label"
						item-value="value"
						required
						hint="Administador ou Comum"
						v-model="formUsuario.tipo"
						></v-select>
					</v-col>
			</v-row>
			
			<small class="text-caption text-medium-emphasis">*indicates required field</small>
		</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text="Cancelar"
			color="error"
            variant="plain"
            @click="dialog = false"
          ></v-btn>

          <v-btn
            color="success"
			type="submit"
            text="Adicionar Usuário"
            variant="tonal"
          ></v-btn>
        </v-card-actions>
	 </v-form>
    </v-card>
    </v-dialog>
  </div>
  
</template>

<script  lang="ts">
  import { defineComponent, shallowRef, ref, computed } from 'vue';
  import { useUsuarioStore } from '@/stores/usuarioStore';

  export default defineComponent({
	name: "NewUsuario",
	setup() {
	   const dialog = shallowRef(false)
	   const tipo = ref(2);
	   const tipoOptions = [{ label: 'Administrador', value: 1 }, { label: 'Comum', value: 2 }]
	   const formUsuario = ref({
		nome: '',
		matricula: '',
		idade: 18,
		cargo: '',
		tipo: 2
	  });

	  let valid = ref(true);
	  const alertMessage = ref('');
	  const alertType = ref<'success' | 'error' | 'warning' | 'info' | undefined>('success');
	  const alertColor = ref('green');
	  
	  const rules = {
		  required: (v: string) => !!v || 'Campo obrigatório.',
		  min: (v: string) => v.length >= 4 || 'Min 4 caracteres',
		};
		
		const userStore = useUsuarioStore();
		const errorUsuarioCreate = computed(()=> userStore.error)

	   const adicionarUsuario = async () => {
		if (formUsuario.value.nome.length === 0 || formUsuario.value.matricula.length === 0 || formUsuario.value.cargo.length === 0 ){
			valid.value = false;
			alertMessage.value = 'Campos Obrigatórios';
			alertType.value = 'error';
			alertColor.value = 'red';
			setTimeout(() => {	
				resetForm();
			}, 2000);
			return;
		}
		try {
			await userStore.createUsuario(formUsuario.value);
			alertMessage.value = 'Usuário criado com sucesso!';
			alertType.value = 'success';
			alertColor.value = 'green';
			setTimeout(() => {
				dialog.value = false
				resetForm();
			}, 2000);
		} catch (error) {
			alertMessage.value = 'Ocorreu um erro ao salvar o usuário';
			alertType.value = 'error';
			alertColor.value = 'red';
			setTimeout(() => {	
				resetForm();
			}, 2000);
		}
    };

    const resetForm = () => {
      formUsuario.value = {
        nome: '',
        matricula: '',
        idade: 18,
        cargo: '',
        tipo: 2,
      };
	    alertMessage.value = '';
        alertType.value = 'success';
        alertColor.value = '';
    };

	  return {
		dialog,
		tipo,
		tipoOptions,
		formUsuario,
		rules,
		errorUsuarioCreate,
		alertType,
		alertMessage,
		alertColor,
		adicionarUsuario,
		valid
	  };
	},
  });

</script>