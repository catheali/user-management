import { apiUsers, apiLogin } from './api';
import { Usuario } from '@/types/models/Usuario';
import { ErrorState, LoginData } from "@/types/types"; 

export class Service {

  public static async getUsuarios(): Promise<Usuario[]> {
    try {
      const response = await apiUsers.get('/');
      return response.data;
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

  public static async updateUsuario(matricula: string, dados: { nome: string; matricula: string; idade: number; cargo: string; tipo: number }): Promise<Usuario> {
    try {
	  const usuarioId = await Service.getUsuarioIdByMatricula(matricula)
      const response = await apiUsers.put(`/${usuarioId}`, {
        nome: dados.nome,
		matricula: dados.matricula,
        idade: dados.idade,
        cargo: dados.cargo,
        tipo: dados.tipo,
      });
      
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw new Error('Erro ao atualizar usuário');
    }
  }

 public static async deleteUsuario(matricula: string): Promise<void> {
    try {
	  const usuarioId = await Service.getUsuarioIdByMatricula(matricula)
      await apiUsers.delete(`/${usuarioId}`);
      console.log(`Usuário com ID ${usuarioId} excluído com sucesso.`);
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      throw new Error('Erro ao excluir usuário');
    }
  }

 public static async login(usuario: string, senha: string): Promise<LoginData | ErrorState > {
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
  
  public static async getUsuarioIdByMatricula(matricula: string): Promise<string | null> {
    try {
      const response = await  await apiUsers.get(`/?matricula=${matricula}`);
      if (response.data.length > 0) {
        return response.data[0].id;
      }
      return null;
    } catch (error) {
      console.error('Erro ao buscar usuário pela matrícula:', error);
      throw new Error('Erro ao buscar usuário pela matrícula');
    }
  }

}
