import { apiUsers, apiLogin } from './api';
import { Usuario } from '@/types/models/Usuario';
import { ErrorState, LoginData } from "@/types/types"; 

export class Service {

  static async getUsuarios(): Promise<Usuario[]> {
    try {
      const response = await apiUsers.get('/');
      return response.data.map((usuarioData: any) => new Usuario(
        usuarioData.nome,
        usuarioData.matricula,
        usuarioData.idade,
        usuarioData.cargo,
        usuarioData.tipo
      ));
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
      throw new Error('Erro ao obter usuários');
    }
  }

  static async createUsuario(usuario: any) {
  }

  static async updateUsuario(id: string, dados: any) {
  }

  static async login(usuario: string, senha: string): Promise<{ error: ErrorState, usuario: LoginData | null }> {
    try {
      const response = await apiLogin.get('/');
      const usuarios: LoginData[] = response.data;
      const usuarioAutenticado = usuarios.find(
        (u) => u.usuario === usuario && u.senha === senha
      );
      if (usuarioAutenticado) {
        return usuarioAutenticado; 
	  }
      return  { valid: true, message: 'Usuário ou senha inválidos' };
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      return { valid: true, message: 'Erro ao autenticar. Tente novamente mais tarde.' };
    }
  }

}
