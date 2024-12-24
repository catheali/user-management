export class Usuario {
	private static matriculasUsadas: Set<string> = new Set();
	private _nome: string;
	private _matricula: string;
	private _idade: number;
	private _cargo: string;
	private _tipo: number; 
  
	constructor(
	  nome: string,
	  matricula: string,
	  idade: number,
	  cargo: string,
	  tipo: number
	) {
	   
	  this._nome = nome;
	  this._idade = idade;
	  this._cargo = cargo;
	  this._tipo = tipo;

	  if (Usuario.matriculasUsadas.has(matricula)) {
		throw new Error(`Matrícula "${matricula}" já foi cadastrada.`);
	  }

	  this._matricula = matricula;
	  Usuario.matriculasUsadas.add(matricula);
	}
  
	public get nome(): string {
	  return this._nome;
	}
  
	public set nome(nome: string) {
	  this._nome = nome;
	}

	public get matricula(): string {
	   return this._matricula;
	}
	
	public set matricula(matricula: string) {
	  this._matricula = matricula;
	}

	public get idade(): number {
		return this._idade;
	}
	
	public set idade(idade: number) {
		if (idade < 18 || idade > 60) {
			throw new Error('A idade deve estar entre 18 e 60 anos.');
		  }
		  this._idade = idade;
	}

	public get cargo(): string {
		return this._cargo;
	}
	
	public set cargo(cargo: string) {
	  this._cargo = cargo;
	}
  
	public get tipo(): number {
	  return this._tipo;
	}
  
	public set tipo(tipo: number) {
		if (tipo !== 1 && tipo !== 2) {
			throw new Error('O tipo deve ser 1 ou 2');
		  }
	  this._tipo = tipo;
	}

} 