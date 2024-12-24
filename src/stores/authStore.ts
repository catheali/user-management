import { defineStore } from 'pinia';
import { ref } from 'vue';
import {Service as AuthService} from '@/api/Service.ts';
import { ErrorState, LoginData } from "@/types/types"; 

export const useAuthStore = defineStore('auth', () => {
  const error = ref<ErrorState>({ valid: false, message: '' });
  const loginData = ref<LoginData | null>(null); 
  const loading = ref<boolean>(false);

  const loginAuth = async (formLogin: { usuario: string; senha: string }) => {
	loading.value = true;
	try {
	  const usuarioAutenticado = await AuthService.login(formLogin.usuario, formLogin.senha);
  
	  if ('usuario' in usuarioAutenticado) {
		loginData.value = usuarioAutenticado;
		error.value = { valid: false, message: '' };
	  } else {
		loginData.value = null;
		error.value = usuarioAutenticado;
		cleanError()
	  }
	} catch (err) {
	  console.error('Erro ao tentar autenticar', err);
	  loginData.value = null;
	  error.value = { valid: true, message: 'Erro ao tentar autenticar. Tente novamente mais tarde.' };
	} finally {
	  loading.value = false;
	}
  };

  const cleanError = () => {
    setTimeout(() => {
      error.value = { valid: false, message: '' };
    }, 5000);
  };

  const logoutUser = () => {
	loginData.value = null;
	loading.value = false;
	error.value = { valid: false, message: '' }
  }

  cleanError();

  return {
    error,
    loginData,
    loading,
    loginAuth,
    cleanError,
	logoutUser
  }},
  { persist: true}
 );