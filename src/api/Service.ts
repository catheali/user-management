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

  public static async createUsuario(usuario: { nome: string; matricula: string; idade: number; cargo: string; tipo: number }): Promise<Usuario> {
    try {
	  if (!usuario.nome || !usuario.matricula || !usuario.idade || !usuario.cargo || !usuario.tipo) {
			throw new Error('Todos os campos são obrigatórios!');
	  }

	  if (usuario.idade < 18 || usuario.idade > 60) {
		throw new Error('Idade deve estar entre 18 e 60 anos');
	  }

      const response = await apiUsers.post('/', {
        nome: usuario.nome,
        matricula: usuario.matricula,
        idade: usuario.idade,
        cargo: usuario.cargo,
        tipo: usuario.tipo,
      });
      return new Usuario(
        response.data.nome,
        response.data.matricula,
        response.data.idade,
        response.data.cargo,
        response.data.tipo
      );
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error('Erro ao criar usuário');
    }
  }

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
