import { apiUsers, apiLogin } from './api';
import { ErrorState, LoginData } from "@/types/types"; 

export class Service {
  static async getUsuarios() {
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
        return { error: { valid: false, message: '' }, usuario: usuarioAutenticado }; 
      }

      return { error: { valid: true, message: 'Usuário ou senha inválidos' }, usuario: null };
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      return { error: { valid: true, message: 'Erro ao autenticar. Tente novamente mais tarde.' }, usuario: null };
    }
  }

}
