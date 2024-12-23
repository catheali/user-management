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

export interface ResponseApiLogin {
	id: number, 
	usuario: string,
	senha: string, 
	tipo: 1 |2 
}