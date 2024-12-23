<template>
	<v-container>
	  <v-row>
		<v-col justify="center" md="4" offset-md="4">
		  <v-card elevation="4" outlined class="pa-5">
			<v-toolbar-title class="text-uppercase grey--text text-center">
			  <span>Login</span>
			</v-toolbar-title>
			<v-form ref="form" :bind="valid" lazy-validation>
			  <v-row>
				<v-col cols="12">
				  <v-alert v-show="getError.valid" border="end" colored-border type="error" elevation="2">
					{{ getError.message }}
				  </v-alert>
				</v-col>
			  </v-row>
			  <v-text-field v-model="formLogin.usuario" :rules="usuarioRules" label="Usuario" required></v-text-field>
			  <v-text-field v-model="formLogin.senha" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
							:rules="[rules.required, rules.min]" :type="show ? 'text' : 'password'" name="input-10-1"
							label="Senha" hint="O campo precisa de pelo menos 4 caracteres" @click:append="show = !show"></v-text-field>
			  <div class="mt-3 text-center">
				<v-btn :disabled="validado" color="success" class="mr-4" @click="validate">
				  <span v-if="loading">
					<v-progress-circular indeterminate color="green"></v-progress-circular>
				  </span>
				  <span v-else>Entrar</span>
				</v-btn>
			  </div>
			</v-form>
		  </v-card>
		</v-col>
	  </v-row>
	</v-container>
  </template>
  
  <script lang="ts">
  import { ref, computed, defineComponent } from 'vue';
  import { useAuthStore } from '@/stores/authStore';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
	name: "Login",
	setup() {
	  const authStore = useAuthStore();
	  const router = useRouter();
	  const getError = computed(() => authStore.error);
	  const loading = computed(() => authStore.loading )
	  let valid = ref(true);
	  const show = ref(false);
	  const formLogin = ref({
		usuario: '',
		senha: '',
	  });
  
	  const usuarioRules = [
		(v: string) => !!v || 'O usuário é obrigatório',
	  ];
	  
	  const rules = {
		required: (v: string) => !!v || 'Campo obrigatório.',
		min: (v: string) => v.length >= 4 || 'Min 4 caracteres',
	  };

	  const validado = ref(false);
  
	  const validate = async () => {
       authStore.loading = true;

		if (formLogin.value.usuario.length === 0 || formLogin.value.senha.length === 0) {
			valid.value = false;
			authStore.loading = false;
			authStore.error = {
				valid: true,
				message: "Os campos são obrigatórios"};
			authStore.cleanError();
			return;
		}

		try {
			await authStore.loginAuth(formLogin.value);
			if (authStore.loginData) {
				const redirectTo = router.currentRoute.value.query.redirect || '/';
				router.push(redirectTo);
				authStore.cleanError();
			}
		} catch (error) {
			authStore.error = {
			valid: true,
			message: 'Erro ao tentar autenticar'};
		} finally {
			authStore.loading = false;
		}
	};

	  return {
		valid,
		show,
		formLogin,
		usuarioRules,
		rules,
		validado,
		getError,
		loading,
		validate,
	  };
	},
  });
  </script>  