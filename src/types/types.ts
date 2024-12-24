export interface ErrorState  {
	valid: boolean;
	message: string;
}
  
export interface LoginData {
	id: number;
	usuario: string;
	senha: string;
	tipo: number;
}