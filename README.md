# Atividade 1

* Baixe ou crie um fork do projeto serratec-atividade (https://github.com/YagoAzevedo/serratec-atividade). Nesse projeto crie  funcionalidades parecidas com aquelas desenvolvidas para os alunos, porém para a entidade de “matérias”.
* Será necessário criar uma página seguindo o estilo do Material UI para listar as matérias, para cadastrar uma matéria e a opção para remover a matéria na tela de listagem (NÃO é necessário implementar edição).
* Os endpoints a serem utilizados são os seguintes:
* 1) GET: https://secret-headland-69654.herokuapp.com/materias
  2) POST: https://secret-headland-69654.herokuapp.com/materias
     1) Body:
        {
        "titulo": "Banco de dados",
        "professor_nome": "João"
        }
  3) DELETE: https://secret-headland-69654.herokuapp.com/materias
     1) Body:
        {
        "id": 3,
        "titulo": "Banco de dados",
        "professor_nome": "João"
        }

* A atividade deve ser executada em grupo.
* Caso a api esteja inacessível por algum motivo siga o passo a passo na página seguinte para executar localmente:
* 1) Baixar ou clonar o projeto no link https://github.com/YagoAzevedo/serratec-api
  2) Na pasta desse projeto baixado, execute o comando **npm i**
  3) Na pasta do projeto crie o arquivo **.env**
  4) Nesse arquivo informe o seguinte código:
     DB_USER=dhugyfcuiqsfan
     DB_PASS=e9e09c474b229e59468d5bacf9359b65f54a5bb16bb0e6b81aad58dd69bbddc4
     DB_HOST=ec2-44-199-83-229.compute-1.amazonaws.com
     DB_PORT=5432
     DB_DATABASE=d9o9tgklqjnr7b
     PORT=3002
  5) Após isso execute o comando **npm start**
  6) Será possível consultar localhost como no seguinte exemplo:
     http://localhost:3002/materias



# Atividade Final

* Baixe ou crie um fork do projeto serratec-atividade (https://github.com/YagoAzevedo/serratec-atividade). Nesse projeto crie a implementação dos seguintes requisitos:
* 1) Ao acessar a página principal com listagem dos alunos e carregar os dados via axios.get, adicione os dados dos alunos no **estado global** da aplicação (via context-api).
  2) Ao acessar a tela de editar um aluno, antes de fazer a requisição para a api, verifique se a lista de alunos já se encontra no estado global da aplicação. Se o array estiver preenchido, pegue o aluno a ser editado do estado global e não da requisição via axios.get.
  3) **Requisito EXTRA**: Na tela de edição de alunos, caso não existam alunos carregados no estado global, implemente um “carregando” (loading) baseado em animação do Lottie da mesma forma que a tela de listagem dos alunos. Para testar
     esse comportamento basta recarregar a página (f5), já estando na tela de edição do aluno.
* A atividade deve ser executada em grupo.
* O Requisito extra só será avaliado, caso o trabalho não alcance a pontuação máxima nos requisitos 1 e 2. Nesse caso, o requisito extra será visto como uma alternativa para aumentar a nota, nunca será utilizado para reduzir a nota.
* Caso a api esteja inacessível por algum motivo siga o passo a passo na página seguinte para executar localmente:
* 1) Baixar ou clonar o projeto no link https://github.com/YagoAzevedo/serratec-api
  2) Na pasta desse projeto baixado, execute o comando **npm i**
  3) Na pasta do projeto crie o arquivo **.env**
  4) Nesse arquivo informe o seguinte código:
     DB_USER=dhugyfcuiqsfan
     DB_PASS=e9e09c474b229e59468d5bacf9359b65f54a5bb16bb0e6b81aad58dd69bbddc4
     DB_HOST=ec2-44-199-83-229.compute-1.amazonaws.com
     DB_PORT=5432
     DB_DATABASE=d9o9tgklqjnr7b
     PORT=3002
  5) Após isso execute o comando **npm start**
  6) Com isso altere a constante **API_URL** no arquivo **src/constants** para o endereço local http://localhost:3002/alunos

