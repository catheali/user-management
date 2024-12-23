export class Usuario {
	private static idCounter = 1; 
	private static matriculasUsadas: Set<string> = new Set();
	private id: number;
	private nome: string;
	private matricula: string;
	private idade: number;
	private cargo: string;
	private tipo: 1 | 2; 
  
	constructor(
	  nome: string,
	  matricula: string,
	  idade: number,
	  cargo: string,
	  tipo: 1 | 2
	) {
	  this.id = Usuario.idCounter++;  
	  this.nome = nome;
	  this.idade = idade;
	  this.cargo = cargo;
	  this.tipo = tipo;

	  if (Usuario.matriculasUsadas.has(matricula)) {
		throw new Error(`Matrícula "${matricula}" já foi cadastrada.`);
	  }

	  this.matricula = matricula;
	  Usuario.matriculasUsadas.add(matricula);
	}
  
	getId(): number {
	  return this.id;
	}
  
	getNome(): string {
	  return this.nome;
	}
  
	setNome(nome: string): void {
	  this.nome = nome;
	}

	getMatricula(): string {
		return this.matricula;
	}
	
	setMatricula(matricula: string): void {
	  this.matricula = matricula;
	}

	getIdade(): number {
		return this.idade;
	}
	
	setIdade(idade: number): void {
	  this.idade = idade;
	}

	getCargo(): string {
		return this.cargo;
	}
	
	setCargo(cargo: string): void {
	  this.cargo = cargo;
	}
  
	getTipo(): number {
	  return this.tipo;
	}
  
	setTipo(tipo: 1 | 2): void {
	  this.tipo = tipo;
	}
  
	isAdmin(): boolean {
	  return this.tipo === 1;
	}
} 