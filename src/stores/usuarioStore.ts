import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Usuario } from '@/types/models/Usuario';
import {Service as UserService} from '@/api/Service.ts';
import { ErrorState } from "@/types/types"; 

export const useUsuarioStore = defineStore('usuario', () => {
  
	const usuariosList = ref<Usuario[]>([]);
	const loading = ref(false);
	const error = ref<ErrorState>({ valid: false, message: '' });

	const getUsuarios = async () => {
		loading.value = true;
		try {
			const usuarios = await UserService.getUsuarios();
			usuariosList.value = usuarios
		} catch (err) {
			console.error('Erro ao obter usuários:', err);
			error.value = { valid: true, message: 'Erro ao obter usuários' }
		}
	}

	return {
		usuariosList,
		loading,
		error,
		getUsuarios
	}
});