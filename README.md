
# Gerenciamento de Usuários

Este projeto é uma aplicação de gerenciamento de usuários construída com **Vue 3**, **TypeScript**, **Vue Router**, **Pinia**, **Axios**, e **Vuetify**. Ele possui uma API simulada usando **JSON Server**, que é automaticamente ativada junto com o comando `npm run dev`. A aplicação permite que usuários façam login, visualizem e manipulem dados de usuários, com funcionalidades diferenciadas para administradores e usuários comuns.



## Funcionalidades

###  **Tela de Login**
   - **Rota de login** onde o usuário pode se autenticar utilizando:
     - **Usuário e Senha**: A validação é feita com base no arquivo `db.json` da API fake.
     - **Tipo de Usuário**:
       - **Admin (Tipo 1)**: Permite cadastrar, editar e excluir usuários.
       - **Comum (Tipo 2)**: Permite apenas visualizar a tabela de usuários.
   - Após o login, os dados do usuário autenticado são armazenados utilizando a **store do Pinia**.

###  **Tela de Criação de Usuários** (Apenas para Admins)
   - **Formulário de cadastro de usuário** com os seguintes campos:
     - **Nome** (obrigatório).
     - **Matrícula** (obrigatória e única).
     - **Idade** (entre 18 e 60 anos).
     - **Cargo** (campo dropdown com opções como "Analista", "Gerente", "Desenvolvedor", etc.).
     - **Tipo de Usuário**: Se é Admin (Tipo 1) ou Comum (Tipo 2).
   - Após o cadastro:
     - Instancia um usuário utilizando a classe `Usuario`.
     - Utiliza os **getters e setters** para manipulação dos dados.
     - Chama o método `Service.createUsuario()` para fazer um **POST** na API fake e salvar o usuário.

### **Tela de Listagem de Usuários**
   - Exibe uma tabela de usuários utilizando **Vuetify**, com as seguintes colunas:
     - Nome
     - Matrícula
     - Idade
     - Cargo
     - Tipo de Usuário (Admin ou Comum)
   - **Filtros**: Permite filtrar a lista de usuários por qualquer uma das colunas.
   - **Paginação**: Implementação de paginação na tabela.
   - Usuários do tipo **Comum** podem visualizar apenas a tabela, sem permissões para edição ou exclusão.

### **Modal de Edição e Exclusão de Usuários** (Apenas para Admins)

- Um modal é aberto com um formulário preenchido para editar os dados do usuário.
- Um modal de confirmação é mostrado antes de excluir um usuário.

### **API Fake com JSON Server**
   - A API fake é configurada utilizando o **JSON Server**, que serve os seguintes endpoints:
     - `/usuarios`: Para armazenar e manipular dados dos usuários.
     - `/login`: Para validação fake de login.
   - A configuração do **JSON Server** é feita para rodar automaticamente junto com o servidor de desenvolvimento (`npm run dev`).

### **Integração com Pinia**
   - A store do **Pinia** armazena os dados do usuário logado e outros estados necessários para a aplicação, como a lista de usuários.

### 5. **Estilização**
   - A interface é construída com **Vuetify**, garantindo uma experiência responsiva e moderna.


## Tecnologias Utilizadas

- **Vue 3**: Framework JavaScript para construir a interface.
- **TypeScript**: Para tipagem estática e maior segurança no desenvolvimento.
- **Vue Router**: Para navegação entre páginas.
- **Pinia**: Para gerenciamento de estado da aplicação.
- **Axios**: Para consumo da API fake (JSON Server).
- **Vuetify**: Para construção da interface com componentes prontos e responsivos.
- **JSON Server**: Para simulação de uma API RESTful fake.
- **Concurrently**: Para rodar o frontend e a API fake (JSON Server) simultaneamente.

---

## Instruções de Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/catheali/user-management.git
   cd user-management
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie a aplicação**:
   - O comando abaixo irá iniciar tanto o servidor de desenvolvimento da aplicação Vue quanto o JSON Server simultaneamente:
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**:
   - A aplicação estará disponível em `http://localhost:5173` no seu navegador.
   - A api estará disponível em `http://localhost:5000` no seu navegador.

---

## Considerações Finais

Este projeto é uma excelente base para a criação de sistemas de gerenciamento de usuários, com funcionalidades essenciais de autenticação, CRUD de usuários, e um design simples e funcional.