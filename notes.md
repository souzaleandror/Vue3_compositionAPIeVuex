#### 11/02/2024

```
npx json-server db.json
npm run serve
npm i axios
```

Curso de Vue3: composition API e Vuex

@01-Hora da API 

@@01
Apresentação

[00:00] Olá, meu nome é Vinicius Neves e eu vou seguir com você nesse curso sobre Vue3. E vamos aprender a fazer várias coisas muito interessantes que esse framework nessa versão nova está disponibilizando para nós.
[00:13] Eu separei algumas coisas para te dar um monte de spoiler. Vem comigo analisar um pouco desse código.

[00:19] A primeira coisa: não vamos trabalhar com um projeto que já existe, vamos ter um pouco desse feeling, essa experiência de mercado porque na nossa rotina, na maioria das vezes, trabalhamos em coisas já existem, é difícil levantarmos alguma coisa de raiz, alguma coisa do zero.

[00:37] Em cima de um projeto que já existe vamos aprimorar esse projeto, ele estava com um estado somente local e agora vamos migrar para fazer comunicação com a API, vamos usar um pouco do Axios.

[00:52] Vamos melhorar ainda mais também a parte de controle de estado, antes tínhamos um estado só e vamos aprender a trabalhar com módulos de Vuex, ao invés de termos um único estado global gigantesco, vamos separar isso.

[01:08] Vamos ter o estado raiz, o root, mas também termos o módulo de tarefas e o módulo de projetos. Tem muita coisa que podemos fazer por aí.

[01:18] Além disso, também vamos aprender a trabalhar com os slots, slots nomeados para ficar bem organizados todos os nossos componentes, a nossa Modal, que é um componente mega simples e muito visual. Só vamos precisar de poucas linhas para conseguir usar ele de fato.

[01:37] E ainda veremos também alguma coisa sobre reatividade, veremos como o Vue utiliza isso por debaixo dos panos.

[01:45] Daremos uma olhada, daremos um mergulho mais fundo para entendermos que quando usamos uma variável reativa, o que acontece ali por debaixo dos panos, vamos revelar essa mágica também.

[01:56] Vem comigo, te espero no próximo vídeo para começarmos a evoluir ainda mais com a Alura Tracker.

@@02
Preparando o ambiente

Para seguir com o nosso curso, vamos precisar do NodeJS. Se você ainda não possui, veja aqui como fazer a instalação.
Além disso, vamos utilizar o projeto do curso anterior. Mas fique tranquilo, se quiser começar daqui você pode baixar o projeto completo aqui no github.

Veremos em detalhes como preparar o Alura Tracker no vídeo “preparando o projeto”.

https://www.alura.com.br/artigos/instalando-nodejs-no-windows-e-linux?_gl=1*1pom60u*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwNzY4NzA5Mi4xOTQuMS4xNzA3Njg5MTk5LjAuMC4w*_fplc*RGpwVDRWa3hKTjlsNHhUZ1p1eSUyRnE0QzZ1MjUycmt0WHBhR3E4M2dJVnJIOWx3Z2lZaCUyQmZWZWZrZDNla2NCTnAlMkZ2WjJKJTJGUkMlMkIycUo4VFl2aVZkQ3V3Z1ppQmpRN08xb3hrSnp3aVolMkJkWkVXUXJ4Z1FFSzdSSHhYaVBlVjJ3JTNEJTNE

https://github.com/alura-cursos/tracker-2/tree/aula-5

@@03
Preparando o projeto

[00:00] É muito comum no dia a dia das pessoas desenvolvedoras trabalhar ou ser realocado em um outro projeto, ou em uma nova empresa e trabalhar já em um projeto existente. E é mais ou menos isso o que faremos aqui junto nesse curso.
[00:14] Trabalharemos em cima do Alura Tracker. Ela é uma aplicação que consegue controlar o tempo gasto em cada tarefa, vincular uma tarefa a um projeto. Ele já tem uma série de funcionalidades prontas, que interagiremos, evoluiremos ou modificaremos algumas delas.

[00:31] Vou deixar o link para você na atividade Preparando o Ambiente, você vai conseguir baixar. Eu já fiz o download. Se você baixar o zip, eu deszipei o arquivo, vou entrar na pasta. Vamos colocar primeiro esse projeto para rodar.

[00:47] Vou abrir com o meu VS Code. Essa é a estrutura do projeto, ele já tem alguns componentes, tem alguns hooks, tem algumas interfaces. Vou abrir o terminal, "Control +". Vou pedir para que o npm instale para mim as dependências desse projeto, npm i.

[01:06] Esse processo pode demorar um pouco, não tem problema, só faremos ele nesse tempo, que vai levar esse tempo maior, na primeira vez. Daqui a pouco eu te chamo de volta.

[01:19] Perfeito. Já terminou de instalar aqui. Instalou tudo que precisava. E agora para eu colocar esse projeto para rodar eu vou pedir ao npm para rodar o comando que se chama npm run serve.

[01:31] Ele vai subir essa aplicação, vai demorar um pouco, ele está compilando, está entendendo quais são os componentes que temos, toda a nossa estrutura. Vou pegar o link “http://localhost:8080/", vou no meu navegador, colar o link. Perfeito. Aqui temos o nosso Alura Tracker já rodando como é hoje.

[01:55] Ele tem uma feature de modo escuro. Eu posso cadastrar um projeto, por exemplo, posso cadastrar ele mesmo, podemos trabalhar no próprio Alura Tracker, vou salvar, Alura Tracker "Salvar".

[02:06] Repare que ele já cadastrou o projeto, subiu ali uma caixa de notificação de notificação. E eu posso iniciar uma tarefa que vai ser, por exemplo, “Refatorando o projeto”.

[02:19] Eu posso dizer que ele está vinculado ao Tracker, inicio a minha tarefa, vou levar o tempo que eu tiver que levar, "stop". E quando eu finalizo, ele insere para mim e guarda essa informação.

[02:31] Só que se analisarmos aqui o projeto como é hoje, se recarregarmos a aplicação, eu fiz aqui um F5, deu uma atualizada, "F5". Eu perco tanto os meus projetos quanto as minhas tarefas. Porque isso tudo só existe em tempo de execução da aplicação, se eu fechar meu navegador e abrir de novo ou recarregar a página, eu perdi tudo.

[02:52] E essa é a primeira coisa que vamos começar a mexer aqui, vamos conectar com um backend simulado.

[03:00] Esse backend, como não é o propósito do nosso curso, é um backend de mentira, ele vai ficar se comportando como se fosse uma API Rest para consumirmos e interagirmos com os dados. E conseguiremos evoluir o nosso projeto.

[03:15] E como faremos para colocar essa API de mentira, essa API falsa rodando aqui localmente?

[03:23] Usaremos um camarada chamado Json Server, também vou deixar o link para você, toda a documentação dele está disponível do Github e precisamos inicialmente prestar atenção em dois comandos.

[03:37] O primeiro, precisamos instalar ele globalmente. Vou copiar o comando npm install -g json-server. Vou adicionar um PowerShell no terminal e vou colar o comando aqui, "Enter".

[03:47] Nesse meio tempo o npm vai instalar esse pacote globalmente, já terminou. Isso me permite vir no terminal direto e chame o json-server. E eu posso pegar agora o restante o comando, basicamente temos que pedir para ele observar um arquivo chamo “db.json”, --watch db.json.

[04:15] Vou colocar no terminal. Perfeito. Repara, ele subiu, cumprimentou, falou “Olá”. Ele disse: "Olha só, eu não conheço esse arquivo db.json, vou criar um para você".

[04:36] Ele criou e liberou alguns recursos, posts, comentários e profiles que é o perfil. Só que não é isso que queremos. Queremos trabalhar com projetos. Eu vou abrir esse “db.json” que ele criou, repara, eu estou com os dois terminais rodando, um está rodando a aplicação. E o outro está rodando o Json Server.

[04:58] E o que eu vou fazer? Eu não quero nada do código das linhas 8 a 18, nem das linhas 7 a 3. Nós queremos começar a receber projetos, vou dizer que eu quero um recurso chamado projetos, ”projetos”: [].

[05:12] Se eu salvar, repara que ele já recarregou e identificou: "Você tem um recurso disponível chamado projetos". E agora já podemos começar a interagir com essa API, para fazermos isso utilizaremos o Axios.

[05:28] Já vou abrir o meu terceiro PowerShell, e vou pedir para o npm instalar no Alura Tracker o Axios para mim, npm i axios. Ele vai adicionar essa dependência, vai adicionar lá no meu package Json.

[05:43] E agora já conseguimos importar, configurar e começar a trabalhar com o Axios no nosso projeto. E é isso que faremos na próxima aula.

@@04
Para saber mais: JSON server

Em alguns cenários, precisamos desenvolver o front-end em paralelo com o back-end, daí se faz necessário “dublar” as interfaces que serão disponibilizadas. E essa é exatamente a premissa do json-server, ele consegue emular, e muito bem, o funcionamento de APIs REST.
Se você quiser conhecer um pouco mais esse pacote, confira esse artigo muito bacana.

https://www.alura.com.br/artigos/mockando-apis-rest-com-json-server?_gl=1*k4wjc7*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwNzY4NzA5Mi4xOTQuMS4xNzA3Njg5NDE4LjAuMC4w*_fplc*RGpwVDRWa3hKTjlsNHhUZ1p1eSUyRnE0QzZ1MjUycmt0WHBhR3E4M2dJVnJIOWx3Z2lZaCUyQmZWZWZrZDNla2NCTnAlMkZ2WjJKJTJGUkMlMkIycUo4VFl2aVZkQ3V3Z1ppQmpRN08xb3hrSnp3aVolMkJkWkVXUXJ4Z1FFSzdSSHhYaVBlVjJ3JTNEJTNE

@@05
Consumindo a API de Projetos

[00:00] Agora está na hora de plugarmos a nossa tela, fazer a conexão da nossa listagem de projetos com a API. Vamos devagar entender como isso vai funcionar.
[00:10] Eu vou agora no VS Code, vou abrir o “db.json” e esse cara que tem a nossa lista de projetos, que está vazia, eu vou criar aqui um novo objeto que vai ter o ID, eu vou dizer que o ID desse projeto inicial é 1 e vai ter também um nome, eu vou fizer que o nome desse projeto é Alura Tracker, { > "id": 1, "nome": "Alura Tracker. Pronto, perfeito.

[00:36] Como eu sei que esse projeto tem o ID e o nome? Pela interface de projetos. Lá na nossa interface que já existia, ele está nos dizendo que o projeto tem o ID e o nome, "|Projeto.ts". É isso que eu fiz aqui.

[00:52] Como eu testo para saber se essa API falsa está rodando? Claro, vou abrir meu terminal e ele está me dizendo que se eu acessar a URL ele vai me trazer a lista de projetos, vamos testar. Vou abrir uma nova aba no meu navegador, “localhost:3000/projetos".

[01:14] Perfeito. Repara que ele retornou um Json com ID e o nome do projeto que colocamos. Perfeito, isso aqui já está funcionando. O Firefox deixa bonito para mim, mas isso nada mais é do que um Json.

[01:27] E o que eu quero fazer agora. Deixa eu botar em "Dados brutos". Isso aqui é um array, é uma lista de projetos. Agora eu quero plugar o meu componente nessa API. Vamos para o terminal, primeira coisa que precisamos fazer é criar uma instância do Axios, esse cara que vai ficar responsável por fazer essas requisições.

[01:53] Em “src”, vou clicar com o botão direito, “Novo arquivo”, vou dizer que vai ficar dentro de uma pasta chamada “http” e eu vou criar um “index.ts”. Perfeito.

[02:06] Esse “index.ts” vai exportar o nosso cliente http e é justamente isso que queremos. Inicialmente, queremos um const clienteHttp = ... Que vai receber alguma coisa. E depois vamos fazer o export default clienteHttp.

[02:27] E como fazemos para criar um clienteHttp? Como vamos fazer isso utilizando o Axios? É muito simples. Primeira coisa que eu vou fazer é import axios from "axios". E eu vou dizer para o Axios que eu quero criar uma instância, const clienteHttp = axios.create().

[02:52] Esse método vai me dar uma instância do Axios, se colocarmos o mouse sobre ele, o VS Code já vai nos dizer que esse cara recebe uma configuração e devolve uma instância do Axios. Podemos até tipar ele, ele vai ser um { AxiosInstance }. Vou dar um Enter. Repara que o VS Code, o meu melhor amigo, já fez o import.

[03:17] E agora o que eu quero fazer é passar o meu objeto de configuração para dentro. E o que eu quero dizer para ele é que todas as URLs dos nossos recursos vão começar com “http://localhost:3000/”, a única coisa que vai mudar é o recurso final.

[03:36] Vou dizer aqui que a minha URL base vai ser justamente baseURL: "http://localhost/3000/”. E o recurso vai variar, a pessoa que estiver fazendo a requisição vai definir na hora de fazer a chamada, por enquanto é só isso que precisamos configurar. E vou testar agora isso dentro do nosso Store.

[04:05] Vamos no nosso Store. Repara o seguinte, vou até fechar o terminal para termos mais espaço.

[04:11] Tudo que fizemos, tudo que já está aqui pronto em relação ao estado são mutations, são mutações, isso quer dizer que aqui não tem uma mudança de estado que depende de uma requisição assíncrona, por exemplo.

[04:30] É justamente isso que queremos fazer, queremos fazer uma requisição http, quando essa requisição retornar, quando ela for resolvida, eu quero de fato ir lá e alterar o meu estado.

[04:40] E não podemos fazer alterações assíncronas nas mutations, quando estamos utilizando Vuex existe um tipo específico de ação para trabalhar com requisições assíncronas. Justamente o nome é esse, são ações, são actions.

[04:56] E é isso que queremos fazer aqui, além de termos as mutações agora, vamos ter as ações, as actions. E o que eu quero fazer aqui? Já temos um arquivo que nos diz os tipos das mutações existentes. Eu vou criar um novo tipo, eu vou dizer que é “tipo-acoes.ts”.

[05:18] E o que eu quero fazer aqui? Eu quero exportar uma export const OBTER_PROJETOS = "OBTER _PROJETOS". Usamos essas constantes para evitar de ter que evitar de ficar trabalhando com string e se erramos, de repente, o nome da ação ou da mutação no nosso componente, pode dar alguma problema e teremos um erro inesperado: "Olha, você está chamando algo que não existe". E fica mais organizado também.

[05:49] Pronto, temos aqui o tipo da nossa ação, que é obter projetos. Agora vamos implementar, vou voltar no Store. E vou dizer que eu vou ter uma ação obter projetos, [OBTER_PROJETOS]. Vou pedir para ele importar para mim. Ele já fez o import no topo da página.

[06:07] Ele é uma método, ele vai receber como argumento todo o contexto da Store, mas eu não quero só isso, mas eu não quero só isso, eu só quero o método commit. Eu vou dizer que eu quero o ({ commit }) (.

[06:29] Inclusive vamos testar se está auto completando. Repara, tudo isso da lista estaria disponível na rootState, rootGetters, dispatch. Eu não quero nada disso, quero só o commit, porque quando eu resolver a minha requisição eu quero alterar o estado.

[06:43] E agora o que eu quero? Eu quero ter acesso ao Axios para fazer essa requisição, eu já vou ao topo da página e vou fazer o import http from “@/http”. Vou usar um arroba que é um atalho para src. Agora eu já posso fazer essa chamada, essa requisição.

[07:11] Volto abaixo na página, vou fazer um http.get, eu quero obter o quê? Qual é a minha chamada? Lembra, temos URL base, precisamos dizer qual é o recurso. Eu quero projetos, http.get( 'projetos' ). É isso que eu quero, fazer essa requisição.

[07:29] Quando ela for resolvida, isso é uma promessa, o Axios dizendo assim: "Eu não consigo te garantir que isso vai dar certo, mas eu te prometo que eu vou tentar".

[07:37] E eu quero dizer ok, se tudo der certo quando essa requisição for feito eu vou ter a minha resposta .then(resposta => resposta.dados).

[07:57] E o que eu quero fazer aqui? Inicialmente eu quero só fazer um console.log. Vamos ver se isso vai funcionar. Repara que eu implementei, mas quem chama? Como eu vou saber qual é o momento certo de fazer isso?

[08:16] Repara que o VS Code já está reclamando que eu digitei errado. Não existe dados na resposta do Axios porque não é em Português, é em Inglês, é data.

[08:28] Agora voltando, quem chama esse OBTER_PROJETOS? Se eu voltar agora no Alura Tracker e fazer um "F5". Eu abri o Developer Tools, onde você inspeciona os elementos, tem várias coisas aqui, estou olhando para a rede e estou olhando as requisições que foram feitas. Onde está aquela requisição para projetos?

[08:49] Ninguém fez porque eu não pedi em nenhum momento para que essa ação seja disparada. Vamos fazer isso, eu quero vir na minha lista de projetos, "Lista.vue". E eu quero dizer aqui que quando no setup do meu componente eu quero já disparar essa ação.

[09:06] Vou fazer um store.dispatch. Repara, usamos o commit quando é uma mutação e o dispatch quando é uma action. Eu quero fazer o dispatch de OBTER_PROJETOS.

[09:18] Mais uma vez, o VS Code é meu melhor amigo, já fez o import para mim. E agora eu vou salvar e vou atualizar minha página, vou ficar de olho na console.

[09:31] Repara, ele já fez o console.log aqui, tem um objeto, ID e nome, que é o Alura Tracker que definimos no nosso “db.json”, nossa API já está retornando. Agora o que precisamos fazer é pegar esse retorno e definir o estado.

[09:47] Voltando na nossa Store, ainda não temos nada que faça isso, não temos uma mutação que defina todos os projetos de uma única vez. Vamos fazer isso. Vou criar um novo tipo de mutação, "tipo-mutacoes.ts".

[10:03] Vou copiar para digitar mais rápido e o que eu quero fazer aqui é criar uma mutação do tipo definir projetos, export const DEFINIR_PROJETOS = ‘DEFINIR_PROJETOS’. Quero definir todos os projetos de uma vez só.

[10:21] Criei aqui o tipo, agora eu vou para a Store e vou implementar isso. Vou copiar as linhas 33 a 35 e vou colar abaixo para facilitar. Agora vai ser uma mutação do tipo DEFINIR_PROJETOS, o VS Code já vai fazer o import para mim, eu ainda não tinha feito, DEFINIR_PROJETOS. Só que não é nada desse código que eu copiei que ele vai fazer.

[10:47] Além do estado, eu vou receber por parâmetro uma lista de projetos e o tipo é um array de projetos, projetos: IProjeto[]).

[10:59] O que eu quero fazer agora é vir no meustate.projetos = projetos, ele vai receber exatamente esses projetos que eu estou recebendo por parâmetro. Recebi por parâmetro, defini o projeto.

[11:10] A mutation é a única forma de realmente metermos a mão no estado e alterar. Eu não posso alterar de outra forma.

[11:18] Agora, por último, o que faremos é o commit dessa ação. Só que eu preciso dizer qual é o tipo da mutation que eu estou chamando, essa mutation que eu estou chamando é justamente o commit(DEFINIR_PROJETOS,.

[11:37] Fiz a requisição, quando ela voltou eu pego os dados da resposta e defino no meu estado. Vou salvar e vamos ver se isso vai funcionar. Voltei para o Alura Tracker. Perfeito, repara que quando eu salvei ele já recarregou o projeto para mim. Mas eu vou recarregar de novo para ter certeza, "F5".

[11:54] Ele está vindo do Alura Tracker. Se eu for no meu “db.json” e eu posso dizer que é o ”nome”: “Alura Tracker 3.0”. Volto para o meu navegador, recarreguei. De fato, isso já está vindo da API, ele já está fazendo a requisição. Se olharmos na Rede, ele já tem uma requisição para projetos, podemos ver a resposta abaixo.

[12:22] Podemos pedir até para ver o dado bruto, "bruto". E o nosso array, a nossa lista de projetos. Já estamos conectados à API, estamos prontos agora para concluir as outras três operações. Precisamos adicionar projetos, editar e excluir projetos. É isso que faremos agora.

@@06
POST, PUT e DELETE de Projetos 

[00:00] Bem começado, metade feito. Já temos o nosso projeto rodando, conectando na API e listando esses projetos já direto do que está vindo em vez de trabalhar com estados locais.
[00:14] O que precisamos fazer agora é expandir isso para as outras ações. Temos que cadastrar, editar e remover esses projetos sempre conversando com a API, isso quer dizer que vão ser todas ações assíncronas, mutações não podem ser assíncronas, mas ações podem.

[00:30] Vamos implementar isso. Vamos para o nosso código. Vou fechar tudo que está aberto aqui e vamos analisar o que temos, estamos trabalhando com um software que já está em produção, ele já está rodando. Temos que tomar um cuidado antes de sair lá, pondo a mão e criando coisas.

[00:47] O formulário que está responsável por fazer esse cadastro está na lista da esquerda, “src > views > projetos > formulário”.

[00:58] Como podemos fazer para ver isso? Lembra que o Vue trabalhar com o Vue Router, que é o roteador, no nosso roteador conseguimos ver que dado uma rota, qual é o componente que está relacionado a ela. Para Novo projeto e para Editar projeto o componente é o Formulário.

[01:17] Se analisarmos, ele tem formulário que chama o método Salvar quando é submetido. E vamos dar uma olhada na implementação do método Salvar.

[01:29] Ele tem um if, se ele tem id ele faz update, se não tem id quer dizer que é um novo, ele cadastra. E no final, ele limpa o estado local, notifica que foi cadastrado com sucesso e redireciona o usuário para a página de projetos.

[01:46] O que temos que fazer aqui? Ao invés de chamar a mutação ADICIONA_PROJETO, temos que criar uma ação e fazer a requisição para API, e não salvar localmente no nosso estado.

[01:59] Vou abrir o "tipo-acoes.ts" vou criar uma ação nova, qual vai ser o tipo de ação? Vai ser export const CADASTRAR_PROJETO = 'CADASTRAR_PROJETO'. Essa é a ação que vamos implementar.

[02:12] Com esse tipo já pronto podemos ir na nossa store, "index.ts" e criar a ação em si, que vai ser [CADASTRAR_PROJETO] (). Sabemos que recebemos por contexto o nosso primeiro parâmetro.

[02:29] E o segundo parâmetro é o que o componente, o código que despachou a ação vai me passar, se olharmos no formulário ele passa o nome do projeto, é esse que vamos continuar recebendo, esse cara vai ser uma string, (contexto, nomeDoProjeto: string).

[02:47] E o que eu quero fazer? Eu quero criar um projeto, para criar um projeto novo eu faço um post para esse mesmo recurso, que é projetos.

[03:01] Isso é uma especificação da API Rest, vai ter uma atividade complementar para você entender um pouco mais o que esses caras significam.

[03:09] Mas o que importa aqui é que para cadastrar um projeto novo faremos um post para o recurso de projetos passando um projeto como parâmetro, http.post('/projetos', {. O projeto tem um nome, esse nome é o que acabamos de receber, nome: nomeDoProjeto.

[03:26] Perfeito. Estamos fazendo esse post, passando um projeto e enviando para a API. Agora lá no nosso formulário ao invés de comitar a mutation, vamos despachar a ação, this.store.dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto). Alteramos tudo, ele ficou amarelo, provavelmente tem um import que não é usado mais. Perfeito, agora está certo.

[03:52] E vamos testar para ver se isso funciona. Vou clicar em “Novo projeto”, vou pedir o “ByteBank”, vou cadastrar esse projeto, mandei salvar. Repara, foi muito rápido, ele deu a mensagem e o sucesso está aqui, o post do projeto que cadastrado.

[04:12] Repara comigo o seguinte: será que isso está mesmo funcionando? Vou fazer o seguinte agora, vou parar o json-server e vou tentar cadastrar um novo projeto, PS C:\Users\Vinny\Downloads\tracker-2-aula-5>.

[04:24] Isso não deveria funcionar porque quem tem que responder é a API, se a API não está rodando ela não está respondendo. Minimizei o VS Code, vou pedir um novo projeto e vou cadastrar esse projeto aqui que não deveria funcionar. Eu vou fazer esse post e ele não deveria me responder.

[04:41] Vou deixar tudo, vou limpar o console, não tem nenhuma requisição, vou mandar salvar, "Salvar". Repara, ele deu uma mensagem dizendo que foi cadastrado, voltou para a lista com o estado antigo e a requisição só falhou agora.

[04:57] Temos um problema de implementação porque agora é assíncrona, pode dar certo e pode dar errado. Repara, o que temos que fazer aqui no nosso método que faz o dispatch é tratar, só podemos executar o código em caso de sucesso.

[05:16] E como fazemos isso? A primeira coisa que faremos é no nosso CADASTRAR_PROJETO é retornar a nossa promessa de execução.

[05:26] O Axios quando fazemos uma requisição retorna uma promessa e vamos pegar essa promessa do Axios e devolver para quem fez o dispatch da ação. Com isso, o que podemos fazer? Eu posso dizer: "Faz o dispatch dessa ação e se der tudo certo, executa esse código para mim", ou seja, quando tudo der certo, executa esse código para mim, .then(( ) => {.

[05:53] Perfeito. Agora eu só vou limpar o estado local, notificar e redirecionar em caso de sucesso. Vamos ver se isso vai funcionar agora, vou limpar o console e vou pedir o não deveria funcionar, minha API não está rodando, vou mandar salvar. Repara, ele está pensando. Nada, nada, nada. Falhou.

[06:19] Agora, ele só vai executar o código O projeto foi cadastrado com sucesso quando de fato tiver um sucesso, quando a minha operação for concluída com sucesso.

[06:30] E agora podemos fazer a alteração, a diferença é que no CADASTRAR recebemos só o nome e no ALTERAR recebemos o projeto inteiro. Vamos no "index.ts". E vamos implementar essa ação, primeira vamos criar o tipo dela, que vai ser o export const ALTERAR_PROJETO = 'ALTERAR_PROJETO'.

[06:55] E agora vamos partir para a implementação, o código acima é muito parecido, vamos fazer um "Ctrl + C > Ctrl + V" [ALTERAR_PROJETO].

[07:06] A diferença é a seguinte: para cadastrarmos um projeto é um post, para atualizarmos não é um post, usamos o verbo put e, além disso, aqui dentro, na URL, temos que também passar o id do projeto.

[07:21] Temos que passar o return http.put(‘/projetos/${}’, vou usar uma interpolação de string aqui e o projeto em si. Só que aqui a assinatura é diferente, vamos receber um projeto e esse cara não é uma string, ele é um projeto. E já posso fazer o projeto.id na linha do return .

[07:44] E por último, eu vou passar ele por parâmetro, projeto, [ALTERAR_PRODUTO] (contexto, projeto: IProjeto) {' e 'return http.put('\projetos\${projeto.id}', projeto).

[07:48] Agora sim, estamos fazendo o update, não tem nada no contexto que nos interessa e eu posso de fato chamar agora essa ação, "Formulario.vue".

[08:01] Não vou fazer mais commit, eu vou fazer dispatch da ação, não é ALTERA_PROJETO, é ALTERAR_PROJETO, o restante permanece. Repara, aqui temos a mesma coisa, o bloco de código nomeDoProjeto vai se repetir, podemos extrair isso para uma função e chamar quando for executado.

[08:24] Vou dar um Ctrl + X aqui, vou criar outro método para lidar com o sucesso, vou chamar de lidarComSucesso() {. E esse método vou pedir para ele formatar. Esse cara vai fazer isso porque eu vou fazer isso nos dois cenários, then () => this.lidarComSucesso());.

[08:47] E no ALTERAR_PROJETO a mesma coisa, posso até copiar e colar, se o meu ALTERAR_PROJETO der certo, eu vou lá e subo a mensagem, fica tudo certo. Vamos mandar salvar. Ele ficou amarelo provavelmente por causa do import.

[09:00] Vou remover o import. Salvei. Venho em projetos, não está rodando o nosso json-server, "projetos". Vou botar para rodar, json-server --watch db.json. Agora sim, voltei no Alura Track, "F5". Agora está funcionando.

[09:20] Vamos tentar fazer uma alteração, vou alterar o Alura Tracker para o 3.0. Ele deu uma mensagem. Agora sim, ele está funcionando como deveria. Agora só falta o último, que é a exclusão do projeto.

[09:35] Quem está fazendo a exclusão ainda é a mutação, não podemos fazer isso pela mutation, é assíncrono agora export const REMOVER_PROJETO = “REMOVER_PROJETP”.

[09:47] É bem parecido o código, vou fazer um Ctrl + C, Ctrl + V, só vou alterar para [REMOVER_PROJETO] (contexto, projeto: IProjeto). Vamos ver qual é a assinatura, vou na "Lista.vue", repara, é a minha lista que tem a ação de excluir e ele passa só o ID do projeto,

[10:06] Vamos ver o ID do projeto, é uma string, ele vai receber um ID do projeto que é uma string, id: string. Na linha abaixo, não tem mais projeto. Agora sim.

[10:27] Para remover um projeto não fazemos um input, fazemos um delete no recurso de projetos passando um ID. A ação já está pronta. Vamos agora testar isso, vamos na nossa "Lista.vue". Não vai ser mais o commit, vai ser o this.store.dispatch(REMOVER_PROJETO, id).

[10:48] Podemos remover também o import que não é mais utilizável. Vamos ver se isso funciona. Vou voltar no Alura Tracker, vou na minha API, vou limpar as requisições, vou limpar o console.

[10:59] Vou criar um novo projeto e vou chamar ele de “teste”, eu quero habilitar o teste. O teste está na lista, vou mandar deletar. Repara, ele fez o delete com sucesso, mas ele ainda está aqui. Se eu mandar atualizar a página, agora sim, "F5".

[11:15] Faltou o quê? Fizemos a deleção, mas não atualizamos nosso estado local. Temos duas possibilidades, podemos, quando o projeto for deletado e a resposta for um sucesso, ou seja, .then, quando der tudo certo podemos ou pegar a lista toda nova, ou podemos só remover em memória o que temos ali.

[11:41] Porque já temos uma mutação que remove o projeto, em vez de ir lá na API e fazer de novo, olha só o que faremos: no .then, quando der tudo certo eu já vou até mudar, eu não quero mais o contexto inteiro.

[11:59] Faremos o commit de uma mutation, vamos fazer o commit. No .then faremos um commit .then(() => commit(EXCLUIR_PROJETO, id)).

[12:28] Olha só o que estamos fazendo: pedimos para a API remover, quando ele é removido, ou seja, a API já removeu um estado de sucesso, "Deletei com sucesso, está garantido", vamos e removemos do estado local.

[12:44] Vamos testar isso agora para ver se funciona. Vou de novo cadastrar o teste, "Novo projeto > teste > Salvar". Está lá o teste cadastrado, vou fazer o delete. Agora sim, ele vai e tudo funciona como deveria.

[12:55] Conforme eu faço a deleção, ele já remove para mim do meu estado local. E agora está sincronizado. Repara que optamos por fazer manual, ou seja, o que eu deletei, fui lá e removi. Mas também poderíamos, por exemplo, recarregar a lista toda para garantir que pegaríamos todos os dados da API.

[13:17] Pronto, agora sim toda a nossa estrutura de projetos não está mais relacionada ao estado local, estamos relacionados a API, estamos plugados na API e fazemos o sincronismo do meu estado local com o que vem da API.

[13:31] É tudo isso, mas ainda tem bastante coisa para fazermos. Fica comigo que eu te vejo na próxima aula.

[13:36] Vamos agora melhorar a experiência do desenvolvedor em relação a esse monte de ações que escrevemos até agora.

@@07
Entrevista técnica

Apareceu a oportunidade de uma entrevista para uma vaga front-end - vue. Dessa vez, é um bate papo um pouco mais informal, mas extremamente técnico. O Tech Lead que está entrevistando pergunta: Por que existem actions e mutations?
Não seria mais simples se só utilizássemos as mutations? Qual é a diferença entre os dois?

Actions não alteram o estado diretamente, elas fazem commit das mutations. Além disso actions podem conter operações assíncronas, e as mutations não.
 
Alternativa correta! Exatamente! Podemos encontrar essa orientação aqui na documentação. Mutations alteram o estado e actions fazem processamento async e chamam as mutations quando necessário.
Alternativa correta
Podemos utilizar somente mutations e processar todas as rotinas assíncronas dentro dos componentes.
 
Alternativa correta
Não existe diferença entre as duas. São formas diferentes de executar a mesma ação.

@@08
Para saber mais: Protocolo HTTP

Nós, enquanto frontenders, precisamos entender como as requisições funcionam. Para compreender como é a web por baixo dos panos, acesse aqui e veja em detalhes como funciona o HTTP.

@@09
Faça como eu fiz: Refatorando o projeto

Já dizia o Linus Torvalds, criador do linux: Falar é fácil, me mostre o código.
Hora de refatorar a camada de dados relacionada aos projetos, passando a consumir a API ao invés de salvar localmente.

Praticar e pesquisar é essencial. Além de desenvolver junto comigo as funcionalidades do Alura Tracker, faça todos os exercícios e mergulhe mais fundo nos conceitos nas atividades “para saber mais”.

@@10
O que aprendemos?

Nessa aula, você aprendeu como:
Configurar um mock de API Rest;
Utilizando o json server, conseguimos levantar uma API utilizando o arquivo db.json.
Instalar e configurar o axios;
Adicionamos a dependência e configuramos uma única instância para toda a aplicação.
Implementar ações, responsáveis pelo processamento assíncrono;
Diferente das mutations, as actions podem ser assíncronas, e não devem modificar o estado diretamente. Por isso, quando o processamento termina, nós fazemos o commit para atualizar o estado.
Despachar ações a partir dos componentes;
Podemos despachar as actions a partir de qualquer componente com acesso à store.

#### 12/02/2024

@02-Organizando a store

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

https://github.com/alura-cursos/tracker-3/tree/aula-1

@@02
Migrando as tarefas para a store

[00:00] Muito bacana, já estamos conectados, já estamos trazendo nossos projetos. E agora precisamos seguir, dar sequência e trazer essa mesma lógica, essa mesma conexão com a API para as nossas tarefas.
[00:13] As tarefas precisam ser enviadas, alteradas e removidas da API. Vamos botar a mão no código, vamos colocar isso para funcionar. Vem comigo.

[00:24] Vamos fechar todas as abas que ficaram abertas no VS Code. E eu vou entrar dentro do “src > store > index.ts". Perfeito. Vamos fechar o console.

[00:35] Lembrando mais uma vez, sempre dois consoles rodando, um com o nosso npm run server, que sobe o frontend em si, e um outro rodando o nosso Json-server, aquela API de mentira que configuramos no nosso arquivo “db.json” no começo do curso.

[00:53] O que precisamos agora é dar atenção às tarefas. Já temos todo o fluxo de projetos, ações e mutações, está na hora de fazer das tarefas.

[01:07] Nada se cria, tudo se copia, o que precisamos fazer é: nos "tipo-acoes.ts” teremos um export const OBTER_TAREFAS = ‘OBTER_TAREFAS’.

[01:21] Também precisaremos de uma mutação, já vamos criar esse tipo separado, em "tipo-mutacoes.ts” export const DEFINIR_TAREFAS = ‘DEFINIR_TAREFAS’. Agora sim. Já criamos os dois tipos e agora podemos implementar.

[01:42] Já podemos pegar o exemplo do OBTER_PROJETOS e ajustar o que for necessário. Fiz um “Ctrl + C”, “Ctrl + V”. Eu não quero mais obter projetos, eu quero [OBTER_TAREFAS] ({ commit }), ele completou para mim.

[01:56] O get que eu vou fazer não é no recurso de projetos, é no recurso de tarefas, então http.get(’tarefas’). E eu não quero também definir os projetos no meu estado, eu quero definir as tarefas, .then(response => commit(DEFINIR_TAREFAS, response.data)).

[02:11] Quando alguém vai lá e despacha a ação de obter tarefas, faremos requisição, pegar essa resposta e definir no nosso estado.

[02:28] Vamos dar uma olhada se está faltando alguma coisa, definimos. Olha só, repara comigo, estamos definindo as tarefas, OBTER_TAREFAS, só que esse DEFINIR_TAREFAS ainda não fizemos. Vamos agora fazer.

[02:42] Mais uma vez, nada se cria, tudo se copia, vou fazer um “Ctrl + C”, “Ctrl + V” [DEFINIR_TAREFAS] (state, projetos: ITarefas[]). E agora não receberemos mais um array de projetos, receberemos um array de tarefas, state.tarefas = tarefas.

[03:02] Repara o seguinte: já está falando para mim: "Você está tentando definir uma lista de tarefas, mas isso não existe no nosso estado, eu não sei o que você está querendo fazer aqui". Vamos no nosso estado padrão, temos uma interface que representa ele e vamos agora também incluir as tarefas.

[03:20] E vamos agora também incluir as tarefas, tarefas ITarefa. Perfeito. Agora, por último, só precisamos definir um estado inicial, pode ser o nosso array vazio de tarefas, tarefas: [].

[03:36] Agora sim, está tudo compilando, vamos atualizar a página para ver se não quebramos nada, vou abrir o developer tool, vou recarregar. Nenhum erro no console ainda não temos tarefas, porém precisamos plugar isso, precisamos fazer o dispatch dessa ação.

[03:57] Vamos procurar dentro de “views”, temos a nossa “Tarefas.vue". Repara que nessa versão temos um array em um estado interno, que é o nosso ID tarefas, não vamos usar mais esse cara, eu vou apagá-lo. Repara que ele vai dar alguns erros, inclusive no de salvarTarefas, vamos comentar esse cara.

[04:24] Podemos deixar o último código, de fato teremos um array de tarefas, só que vai ser um pouco diferente. Sempre procurando uma referência, não precisamos decorar as coisas, temos que lembrar os conceitos por detrás e ter uma referência ou duas de como você fez.

[04:40] Vamos dar uma olhada na lista de projetos e ver como fizemos, "Lista.vue". Acompanha comigo, dentro do componente que está em "src > views > projetos > Lista.vue". Temos o setup que monta a store e já quando ele monta ele faz o dispatch dos projetos.

[04:58] Vamos fazer isso. Vamos dar um “Ctrl + C” em “Lista.vue” e um “Ctrl + V” em “Tarefas.vue”, nada se cria, tudo se copia. Ele já vai reclamar que não temos esses imports, vamos ver se ele importa. Acho que ele importou, importou o useStore.

[05:22] Queremos fazer o dispatch de OBTER_TAREFAS, é isso. Vamos fazer esse cara. E por fim, faltou fazer um import no computed do Vue. E não temos mais projetos, aqui nós temos tarefas, tarefas: computed(() => store.state.tarefas).

[05:40] Repara que até o computed diz que se o array de tarefas é vazio, antes ele estava reclamando uma compilação, agora ele está ok, de fato temos agora o nosso array de tarefas vindo da API.

[05:53] Vamos dar uma olhada, precisamos de uma duração em segundos, uma descrição e um projeto. Vamos mocar isso lá na nossa API. Já temos os nossos recursos de projetos, agora teremos os nossos recursos de tarefas, esse cara é um array, "tarefas": [ { > "id": 1,.

[06:22] O que mais temos? Vamos voltar em ITarefas para ver, duracaoEmSegundos, descricao e um projeto, “Ctrl + C". Vamos ajustar, temos uma ”duracaoEmSegundos”, uma ”descrição” e um ”projeto”.

[06:42] Podemos dizer que a ”duracaoEmSegundos”: 120 segundos, a ”descricao”: “Configuração do ambiente". E o projeto aqui é outro objeto que vai ter o ”id” do projeto, por exemplo, vai ser o nosso ”id”: “Alura Tracker 3.0”, que é do Alura Tracker. Perfeito, mocamos aqui uma tarefa.

[07:17] O que tem que acontecer agora nesse momento? Vamos só tirar esse amarelo, ele está reclamando, está dando um warning aqui, estamos fazendo um import que não usamos, vamos tirar o import já que não estamos usando.

[07:31] Qual é o nosso conceito aqui? Entramos na lista de tarefas, temos que fazer o dispatch dessa ação, já estamos fazendo e, dado que essa ação foi processada, ele vai definir o nosso estado e automaticamente o Vue vai renderizar isso na nossa lista.

[07:46] Vamos ver se isso está funcionando. Voltei aqui, estamos em projetos, vamos em "tarefas". Perfeito. Repara, ele já listou para nós, a duração ele fez direito, trouxe o projeto, trouxe a descrição da tarefa. Agora, assim como fazemos com projetos, nós estamos plugados com o recurso de tarefas.

[08:07] Precisamos dar sequência, pegar esse cadastro de tarefa e também migrar e trazer isso para dentro do nosso estado.

[08:16] Antes tínhamos só um estado local, agora teremos uma conexão com a API. É isso que precisamos fazer, vamos juntos na próxima aula. Espero você já.

@@03
Cadastrando tarefas

[00:00] Já estamos trazendo a lista de tarefas agora da API, vamos agora cadastrar essa tarefa na API.
[00:07] Aqui não temos muita novidade, já sabemos como faz, vamos abrir o nosso projeto dentro de “src > store > index”. Precisamos agora de uma action que vai de fato cadastrar essa tarefa.

[00:22] Vamos fazer isso. Vamos abrir os nossos tipos, sabemos que vamos precisar, vou abrir o tipo de ações e o tipo de mutações, "tipo-acoes.ts” e “tipo-mutacoes.ts".

[00:29] O que queremos? Vamos, além de definir as tarefas, ter outra mutação, que vai ser a de adicionar tarefa export const ADICIONA_TAREFAS = ‘ADICIONA_TAREFAS’. Perfeito. Pegaremos uma tarefa e adicionaremos o estado local.

[00:47] E o tipo de ações também, teremos um CADASTRAR_TAREFAS, em "tipo-acoes.ts", vamos criar essa constante, export const CADASTRAR_TAREFAS = ‘CADASTRAR_TAREFAS’.

[00:56] Já criamos os dois tipos, o tipo de ação e o tipo de mutação, um para fazer a chamada na API e o outro para aplicar no estado. E agora vamos implementar esses caras. De novo, nada se cria, tudo se copia. Repara comigo o que vamos fazer aqui no "index.ts"

[01:15] Vai ser um pouco diferente, você vai ver aqui junto comigo, não queremos mais cadastrar um projeto, queremos cadastrar uma tarefa, [CADASTRAR_TAREFAS] (contexto, tarefa: ITarefa). Recebemos os mesmo parâmetros, vamos dar uma olhada nas nossas “views > Tarefas.vue”. O método que salva já monta a tarefa e manda ela pronta, vamos receber essa tarefa por parâmetro, tarefa: ITarefa.

[01:43] E agora o que queremos fazer? Vamos fazer um post para tarefas, é o nosso recurso, passando a tarefa como parâmetro return http.post(‘/tarefas’, tarefas). Só que aqui tem um pequeno detalhe, quando cadastrarmos essa tarefa o backend devolve um objeto justamente que representa a tarefa que acabamos de cadastrar.

[02:05] O que vamos fazer para não precisar ficar recarregando toda vez o estado? Vamos pegar essa tarefa que foi recém adicionada e adicionar no nosso estado.

[02:15] Vamos fazer o nosso encadeamento, .then(resposta => ), ou seja, deu tudo certo, já teremos o sucesso dessa resposta, vamos pegar essa resposta e o que vamos fazer?

[02:31] Vamos fazer um commit de uma ação passando a tarefa como parâmetro, vamos só alterar, não queremos o contexto inteiro, vamos pegar só o que precisamos que é o commit. Na resposta, faremos o .then(resposta => commit(ADICIONA_TAREFA, resposta.data)). É o corpo da resposta que o Axios disponibiliza.

[03:03] Agora vamos de fato adicionar essa mutação, temos um ADICIONA_PROJETO, nada se cria, tudo se copia. Não quero adicionar o projeto, quero adicionar uma tarefa, [ADICIONA_TAREFA](state, tarefa: ITarefa).

[03:22] Não precisamos de nada do resto do código, vamos tirar. Queremos fazer um push não em projetos, em tarefas state.tarefas.push(tarefa). E não é um projeto que recebemos, é a tarefa em si.

[03:33] Vamos recapitular. Nossa ação faz requisição com a tarefa, espera a resposta, quando a resposta volta com sucesso a API retorna um objeto com essas configurações, vai ter o ID, o nome, tudo da tarefa. E podemos pegar essa tarefa que acabou de voltar e adicionar no nosso estado local.

[03:54] Outra alternativa, por exemplo, poderia fazer e pegar tudo de novo, ou seja, acabei de cadastrar, vou lá e pego a lista toda nova. Mas isso vai acarretar o quê? Que façamos um monte de requisições na API.

[04:05] Aqui é sempre uma linha bem tênue entre configurarmos um sincronismo entre o nosso estado local e a API ao invés de sempre ficar lá toda hora pedindo: "Me dá a lista de tarefas, me dá a lista de tarefas". Não, fazemos um controle do nosso lado.

[04:23] Nossa tarefa já está pronta para ser cadastrada, o que precisamos agora é configurar isso. Lá no componente de tarefas, "src > views > Tarefas.vue".

[04:36] Já temos o método salvarTarefa que, inclusive, se você reparou junto comigo que ele está dando um warning no console, está falando: "Olha, você está chamando aqui no salvarTarefa, mas você não definiu esse cara, toma cuidado com isso".

[04:50] Não é um erro, é só um warning, é um aviso. Agora, vamos descomentar ele para implementarmos, vamos precisar importar de novo a tarefa, tínhamos removido da outra vez.

[05:00] Só que não vamos fazer um this.tarefas.push, faremos um this.store e o que fazemos quando queremos chamar uma ação, dispatch. E o que queremos fazer aqui? Um this.store.dispatch(CADASTRAR_TAREFA, tarefa.

[05:27] Vamos corrigir porque não estamos cadastrando várias tarefas, estamos cadastrando uma só, vamos apagar o “S” de “TAREFAS".

[05:31] Vou salvar e vamos lá em “tipo-acoes.ts” para corrigir esse nome, TAREFA. Perfeito, CADASTRAR_TAREFA, estamos cadastrando uma tarefa só. E por último, faltou corrigir no "index.ts” CADASTRAR_TAREFA. Perfeito, agora sim, o nome está certo.

[05:48] Voltando para a nossa "Lista.vue” quando alguém chamar o método salvarTarefa faremos esse dispatch e o estado deveria cuidar disso, o Vuex. Vamos ver se isso agora funciona. Vou minimizar o VS Code.

[06:02] Repara que ele já carregou, não tem mais warning, vou criar outra tarefa, vou colocar aqui uma “Refatoração do vuex”, por exemplo. Repara, já temos um pequeno problema aqui.

[06:18] Onde está a minha lista de projetos? Se eu entrar em "projetos". Eu tenho a minha lista de projetos, eu volto para "tarefas". Está aqui, repara, estamos fazendo dispatch na lista de projetos só quando entramos na nossa lista mesmo, nosso componente de lista.

[06:36] Por enquanto, vamos pegar o dispatch e trazer para a nossa lista de tarefas, é isso que vamos fazer.

[06:42] Quando fizemos o setup das nossas tarefas, também vamos pedir a lista de projetos, por enquanto é isso que vamos fazer para resolver store.dispatch(OBTER_PROJETOS).

[06:52] Vamos voltar no Alura Tracker, agora sim, está aparecendo, vou recarregar a página para garantir. Recarreguei, perfeito, "Alura Tracker 3.0". Vamos criar o “Refatoração do Vuex”, vou dar um “Play”. Vou contar 1, 2, 3, vou dar o "Stop".

[07:10] Repara, tudo funcionou exatamente como estávamos esperando, ele fez um post, recebeu um 201, ou seja, foi criado com sucesso. Se olharmos essa resposta, "Resposta".

[07:24] Ele retornar exatamente um objeto da tarefa, tem um projeto ali dentro, tem a descrição, duração em segundos e o ID, que é importante, o ID identifica essa tarefa de forma única no lado do backend. E pegamos esse cara e já adicionamos no estado.

[07:41] Repara bem nesse sincronismo, não estamos toda hora pegando lista inteira, estamos em um mix, uma hora pegamos a lista toda, outra hora só adicionamos o recurso que acabamos de criar.

[07:52] Mas não para por aqui, o que vamos desenvolver agora é dar para o usuário uma possibilidade de ele editar e trocar o nome da tarefa. Ele pode ter digitado errado ou, por exemplo, ele pode cadastrar uma tarefa, ele vai colocar aqui, por exemplo, "Estudando padrões de projeto".

[08:16] E na hora de digitar projetos, ele digitou e inverteu, trocou o O pelo T, "projeot". Ele colocou que está no ByteBank, fez o play, fez o stop. E está ali, tem um erro de digitação, ele quer só corrigir esse nome. É isso que vamos fazer, mas vamos fazer um pouco diferente dessa vez.

[08:37] Ao invés de criar uma nova rota, um novo componente e trocar usuário de tela, vamos abrir um modal para ele interagir e alterar essa tarefa. Olha só, como temos acesso ao Bulma do projeto. Só recapitulando, se dermos uma olhada na pasta "index.html". Nós temos um import do cdn do Bulma.

[09:02] Temos acesso a tudo que esse framework de CSS nos oferece. E uma das coisas que ele nos oferece é a modal, acessei “bulma.io”, tem a documentação, tem os componentes, “Modal". E aqui tem um exemplo que eu estou procurando. Perfeito, é esse “Modal card”.

[09:22] Eu quero um modal com um card lá dentro. Se repararmos aqui, tem um card bem bacana, ele tem um título, tem um botão de fechar, tem um save changes e um cancelar. Ou seja, é isso que queremos, vamos abrir e vai exibir um formulário.

[09:37] Vamos pegar esse exemplo de código, vou fazer um “Ctrl + C” e um “Ctrl + V” lá no nosso “Tarefas.vue", vou fechar todo o resto que está aberto.

[09:53] E vou criar em “Tarefas.vue” esse código, vou fazer um “Ctrl + V”, vou pedir para ele formatar o documento, “Format Document". Ele trouxe o modal aqui, vou salvar. Vou olhar no Alura Tracker, não tivemos erro nenhum.

[10:15] Por quê? O que acontece? Para ele exibir essa modal, se eu não me engano, ele precisa de uma classe chamada show. Vamos ver se eu estou correto, "F5". "bulma.io". Não, não é essa classe, vamos ver o que ele está falando no site, modal, modal.

[10:38] Para ativar o modal, apenas adicione o is-active. Não é show, é o <div class=”modal is-active”>. Vamos corrigir no código. Ou seja, está ativa.

[10:52] Só que não conseguimos cancelar. O que vamos ter que fazer? Quando o usuário selecionar uma tarefa vamos abrir a modal, adicioná-la ao input e fazer requisição para fazer o update.

[11:06] E teremos essa opção de cancelar e fechar. Não sai daí, estou te esperando na nossa próxima aula para adicionarmos vida à essa modal e fazermos o update de uma tarefa.

@@04
Criando uma modal de edição

[00:00] Terminamos a última aula coma modal aberta, vamos dar uma olhada nesse componente, estamos no componente de tarefas dentro da pasta views. E definimos lá a modal, e o que faz a modal abrir ou fechar é essa classe is-active.
[00:14] Temos que ter uma condição, dado alguma coisa essa classe vai ou não fazer parte desse elemento. Vamos fazer isso, acompanha comigo e vamos criar um estado local.

[00:27] Logo abaixo da minha lista de componentes, eu vou implementar o elemento do data (), esse cara é responsável pelo meu estado local, ele retorna um objeto return {, esse objeto de fato é o meu estado local e vou ter uma tarefa, tarefa:.

[00:42] Inicialmente esse cara é nulo, mas a minha tarefa, e vamos até melhorar o nome dela, vamos dizer que eu tenho uma tarefaSelecionada: null.

[00:52] A minha tarefa pode ser nula, ou seja, não tem nenhuma tarefa selecionada, ou ela pode ser uma tarefa em si, precisamos dizer para o typescript que isso é possível.

[01:04] Vamos dizer que esse cara é uma as ITarefa | null, ou seja, ele pode ser uma tarefa, mas ele pode ser nulo, agora, já está compilando, essa propriedade do meu estado local pode ser nulo ou pode ser uma ITarefa.

[01:26] Agora, dada essa condição, já podemos ajustar o código modal e fazer um bind, fazer um link com a propriedade de classe.

[01:36] O que queremos fazer aqui? Esse cara vai receber um objeto, e o que indicamos na nossa classe? O primeiro, o nome da propriedade é a classe que queremos que seja aplicada e o segundo é a condição, <div class=”modal” :class="{ 'is-active': tarefaSelecionada }". Para que essa classe seja ativa eu quero que exista uma tarefa selecionada, vou passar como valor para essa propriedade.

[01:59] O nome da propriedade é a classe que vai ser aplicada e o valor é a condição para ela ser aplicada. Se eu voltar na “Alura Tracker” agora, repara, a minha modal está escondida. O que eu quero fazer agora? Quando o usuário clicar em uma tarefa, vamos selecionar ela, vamos implementar esse clique.

[02:18] Lá dentro de “components > Tarefa.vue". Vamos ter aqui que quando o usuário clicar aqui na nossa <div class=”columns” @click=”tarefaClicada”, ou seja, ele clicou em qualquer parte do elemento, vamos dizer que foi a tarefa clicada.

[02:39] E agora vamos implementar esse método tarefaClicada. Logo após de props, eu vou dizer que são os methods: {>, o método que eu quero dizer é o tarefaClicada () : void { ele não vai retornar nada, ele é void. E o que eu quero fazer aqui? Eu quero emitir um evento porque eu, enquanto esse componente, que só sei exibir uma tarefa, também vou agora saber dizer que uma tarefa foi clicada.

[03:04] Vou criar nossa opção de emits: ['aoTarefaClicada'], ela recebe um array com todos os eventos que podemos emitir e esse é o nome do evento que eu vou emitir.

[03:21] E agora sim, no meu método, this.$emit('aoTarefaClicada', this.tarefa) o primeiro argumento, repara que ele já até auto completou para mim, é o nome do evento que eu quero emitir, e o segundo é o que eu vou passar como um parâmetro, que vai ser a minha tarefa.

[03:42] Agora, do outro lado basta ouvirmos, vamos na nossa "Tarefas.vue", vamos colocar aqui um @aoTarefaClicada="selecionaTarefa". Vou pedir para ele formatar o documento para mim, agora está mais legível.

[04:04] Vou agora criar esse método, methods, selecionarTarefa (tarefa: ITarefa) { > this.tarefaSelecionada = tarefa, vamos receber uma tarefa por parâmetro e o que vamos fazer com essa tarefa? Vamos vincular com o nosso estado local, vamos atribuir a tarefa que recebemos como parâmetro.

[04:27] Quando o usuário clicar vamos definir ela como a tarefa selecionada, isso deve fazer com que a modal apareça. Vamos testar. Vou voltar, vou atualizar a página, cliquei em “Refatoração do vuex”, apareceu, vou recarregar, cliquei, apareceu.

[04:45] A nossa lógica de mostrar já está funcionando, vamos seguir e vamos adicionar agora a lógica de esconder. Essa modal já tem algum html que pegamos lá no Bulma. E podemos colocar na modal p class=”modal-card-title”>Editando uma tarefa<. Vai ser o título dessa modal, modal card title.

[05:09] Vamos traduzir o botão de ação para Salvar alterações. E o botão de cancelar, Cancelar. Perfeito. O que queremos fazer? Se o usuário clicar em “Cancelar”, ou se ele clicar no “x” que fica no topo da modal, do lado direito, vamos esconder essa modal.

[05:31] Ele vai ouvir pelo clique e vai chamar o método fechar modal, button @click="fecharModal". Tanto no Cancelar quanto no x que fica no canto superior direito.

[05:43] Falta implementar esse método, vamos implementar agora, methods aqui e para fecharmos a modal fecharModal () { vamos dizer que tarefaSelecionada, > this.tarefaSelecionada = null, ou seja, atribuímos um valor null, ou seja, ela deixou de existir, não temos tarefa selecionada. Isso deve fazer a modal abrir e fechar conforme necessário.

[06:08] Vamos dar uma testada. Cliquei, abriu, cliquei no botão “x” e fechou. Cliquei e abriu, cliquei no “Cancelar”, fechou. O último ajuste, vamos mudar o cursor quando o usuário colocar o mouse em cima do componente.

[06:24] Vamos no nosso "Tarefa.vue". Aqui temos um columns, deixa eu ver se temos algum CSS, não tem. Vamos colocar. Vamos chamar de clicável, <div class=”columns clicavel” @click="tarefaClicada".

[06:41] E vamos adicionar um estilo <style scoped> > .clicavel { > cursor: pointer; quando eu tiver essa classe clicável eu quero que o cursor seja pointer, ou seja, ele fica com aquela mão indicando que essa tarefa é clicável.

[06:54] O cursor vira a mão, quando clicamos abre a modal, quando clicamos em “Cancelar”, a modal fecha. Metade já está pronto, agora temos que adicionar o comportamento de editar essa tarefa.

[07:06] E agora via ser bem tranquilo, vamos voltar para dentro da modal. Aqui onde tem o card-body, tem um Content comentado aqui. Exatamente dentro do card-body queremos colocar um input para o usuário poder digitar e alterar a modal.

[07:26] Vamos pegar o input já pronto, vamos dar uma olhada no "Formulário.vue", o formulário tem um input, a tag div, com a classe Field, tem uma label e um input. É essa mesma estrutura que queremos, vamos pegar “Ctrl + C”, vou colar aqui dentro de “Tarefas.vue”, vou pedir para o VS Code formatar o código para mim.

[07:50] Perfeito. Agora vamos ajustar, não vai ser mais nomeDoProjeto, vai ser <label for=”descricaoDaTarefa” class=”label”> Descricao </label>.

[08:09] O que mais? O model vai ser a v-model=”tarefaSelecionada?.descricao”, se existir uma tarefaSelecionada via ser a descrição. Repara que ele vai reclamar que não podemos fazer esse opcional dentro do v-model.

[08:29] Como queremos fazer esse model com a propriedade de descrição, vamos remover essa condicional ? e vamos movê-la lá para cima. O que eu quero aqui? Eu quero que esse componente só exista caso a tarefaSelecionada for verdadeira, tenha valor. Vou fazer um <div class=”modal” :class=”{ ‘is-active’: tarefaSelecioanda }” v-if="tarefaSelecionada".

[08:59] Esse elemento, todo esse template só vai ser renderizado se uma tarefa foi selecionada.

[09:05] Agora podemos sem medo fazer um bind do v-model=”tarefaSelecionada.descricao”, do contrário, se não fizéssemos tudo isso quando tentássemos renderizar modal, ele já ia reclamar dizendo: "Você está tentando acessar a descrição de undefined, eu não tenho tarefa selecionada". Agora sim, já está pronto para funcionar.

[09:27] Vamos testar, vamos só ajustar o ID, o ID não é nomeDoProjeto, é id=”descricaoDaTarefa”. Salvei. Vamos ver se isso funciona.

[09:37] Não tem erro no console, vou recarregar a página, "F5". Cliquei, ele já mostrou para mim o título “Estudando padrões de projeot”, o projeto está digitado errado.

[09:47] Agora para finalizar e botar a cereja em cima do bolo já sabemos o que temos que fazer, é criar uma action e uma mutation.

@@05
Fechando um modal de edição

[00:00] O que queremos fazer aqui? Vamos fechar todas as abas e o terminal. Eu vou na nossa “index.ts”, precisamos criar um método ALTERAR_TAREFA e o método que altera dois casos, a ação que vai fazer a requisição para API e mutação que vai alterar meu estado local.
[00:24] Vamos começar pelos tipos, dentro da pasta “tipos-acoes.ts” vamos criar o novo tipo que chama export const ALTERAR_TAREFA = ‘ALTERAR_TAREFA’,

[00:43] E também vamos mencionar o tipo da mutação “tipo-mutacoes.ts”, que é ALTERA, vamos seguir a mesma convenção de nome, teremos um export const ALTERA_TAREFA = ‘ALTERA_TAREFA’. Repara, o ALTERAR_TAREFAé uma ação, o ALTERA_TAREFA é uma mutação.

[00:59] Agora vamos implementar. Já temos alguma coisa pronta aqui do projeto, temos o ALTERAR_PROJETO, nada se cria, tudo se copia. Só que eu não quero alterar um projeto, eu quero alterar uma tarefa, [ALTERA_TAREFA] ({commit }, tarefa: ITarefa). Ele já auto completa, faz um import para mim. Mais uma vez, não vamos precisar do contexto, mas vamos precisar do commit,

[01:25] Vamos pegar só o que vamos precisar. Não vamos receber um projeto, vamos receber uma tarefa, vamos ajustar.

[01:36] Ele está reclamando que uma tarefa, não tem ID provavelmente porque não colocamos isso no tipo, vamos colocar agora, em "ITarefa.vue" vai ser id: number. Agora sim, agora mapeamos o ID da tarefa.

[01:54] E já vamos fazer um bem parecido, caso a nossa promise, ou seja, nossa tarefa for executada com sucesso, for alterada com sucesso, vamos fazer o commit da mutação .then(resposta => commit(ADICIONA_TAREFA, tarefa)) passando a tarefa que acabamos de alterar como parâmetro.

[02:23] Vamos recapitular, criamos a nossa ação ALTERAR_TAREFA que vai fazer o commit da mutação, ou seja, vai alterar e sincronizar o estado local quando for um sucesso. E além disso, ele está fazendo put, não está fazendo post, queremos alterar.

[02:41] Por fim, temos que adicionar agora a mutação. Vamos pegar o código, nada se cria, tudo se copia [ALTERA_TAREFA](state, tarefa: ITarefa).

[03:04] Vamos ajustar, const index = state.tarefas.findIndex(t => t.id == tarefa.id). Recapitulando a nossa mutação, encontramos a tarefa no nosso estado local, altera ela e pronto, sincronizamos. Agora, o que tem no nosso estado local representa o que tem na nossa API.

[03:22] Vamos salvar isso e agora a única coisa que temos que fazer para finalizar é lá na nossa modal "Tarefas.vue", quando o usuário clicar em “Salvar”, vamos poder colocar aqui um @click="alterarTarefa", vamos chamar esse método.

[03:48] Vamos implementar. Não vamos receber por parâmetro porque a tarefaSelecionada () { está no nosso estado local, e o que vamos fazer aqui? Vamos fazer um this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada).

[04:12] Escrevemos muito código, vamos testar, vou voltar para a minha área de trabalho. Ele está reclamando, está dizendo: "Olha, essa tarefa não tem um id".

[04:22] Isso porque o nosso compilador, o nosso servidor não fez o reload dessa interface que alteramos. Vou parar e vou subir um npm run serve novo para ele compilar e pegar essa interface atualizada.

[04:39] Está subindo, terminou de subir. Vamos voltar, atualizei, perfeito, "F5". Funcionou. O que eu quero aqui? Quero editar a tarefa, vou confirmar, não é “Estudando padrões de projeot” é “Estudando padrões de projeto”, vou salvar as alterações.

[04:55] Perfeito, ele já me deu um put, é exatamente o que acabamos de alterar. Faltou fechar a modal. Quando queremos fechar a modal? Quando for um sucesso.

[05:07] Voltando para a nossa store, quando chamamos a nossa ALTERAR_TAREFA estamos trabalhando aqui com uma promise, essa promessa podemos encadear e dizer que quando essa promessa se cumprir eu quero chamar o meu método .then((0 => this.fecharModal).

[05:29] Vou executar esse método. Quando o meu dispatch, a minha ação for executada eu vou fechar minha modal. Vou voltar para o Alura Tracker, vamos carregar o alterar “Estudando padrões de projeto”. Perfeito, agora tudo funciona exatamente como queríamos.

[05:51] Se eu recarregar a página, está lá a nossa tarefa alterada porque agora estamos fazendo um sincronismo com a API. Conseguimos cumprir a missão, migramos os nossos recursos para o nosso Vuex que já está plugado na API.

[06:08] Mas repara comigo, tem uma coisa que está me incomodando, não sei se está incomodando você também. Vamos dar uma olhada na nossa store “index.ts". Repara, ela está crescendo e ela está crescendo muito, temos várias ações, várias mutações e isso está ficando um pouco caótico. Repara nesse monte de import, gigantesco. Parece que isso vai ficar problemático de manter porque está ficando muito grande.

[06:36] E estamos misturando as ações de uma tarefa com as ações de um projeto, está meio misturado, precisamos dar um cuidado aqui, polir isso aqui e organizar para ficar bem bacana e melhorar a manutenção do nosso código.

[06:52] E o Vuex já tem uma receita de bolo perfeita para fazermos isso. É isso que faremos na próxima aula. Te vejo lá.

@@06
E se… eu não quisesse utilizar promise?

Nós utilizamos promessas para lidar com as chamadas HTTP. Mas temos outras opções para fazer essas requisições, você sabe quais são elas?

Async / Await.
 
Alternativa correta! Exatamente! Essa é uma alternativa a sintaxe das promises. Se você quiser mergulhar mais fundo nesse conceito, confere aqui um artigo completinho sobre esse tópico.
Alternativa correta
HTTPS.
 
Alternativa correta
Callbacks.

@@07
Organizando o estado - projetos

[00:00] Muito bacana o que desenvolvemos até aqui, já temos o nosso Vuex plugado na API, conforme as requisições vão e vem vamos atualizando nosso estado. Seja quando criamos, quando atualizamos ou quando listamos, está tudo bem sincronizado, está redondo, funcionando como deveria.
[00:16] Porém, já falamos na última aula, o estado está ficando grande demais, ele está crescendo fora de controle. Estamos misturando tarefas com projetos, está tudo misturado, as ações estão misturadas.

[00:31] Olha aqui, o tamanho desse import, está gigantesco. Precisamos dar uma organizada nisso e precisamos começar a tratar com um pouco mais de carinho a nossa store.

[00:43] O que poderíamos fazer, pensando em JavaScript? Podemos separar as mutações em um arquivo para elas, separar as ações em um arquivo para elas também, quebrar isso, cada propriedade em uma constante, exportando um objeto.

[00:59] Isso resolveria, porém como utilizamos o Vuex e ele já pensou que isso poderia acontecer, podemos trabalhar com módulos. E um módulo nada mais é do que um pequeno agrupamento de estado, ações, mutações e por aí vai.

[01:15] Começamos a separar por contexto, podemos, claro, ter o estado global, mas cada recurso vai ter o seu módulo bem pequeno, um pouco mais enxuto e mais fácil de manter.

[01:27] E não tem mistério, é bem parecido com o que temos feito até agora, basicamente consiste em definir uma interface que vai representar o estado do módulo, as ações e mutações, por aí vai.

[01:41] É bem parecido com o que temos feito, vamos botar a mão na massa. Eu e você vamos juntos começar a criar o módulo para os projetos.

[01:50] Dentro da nossa pasta store vamos criar outra pasta, vamos chamar de “modulos”. Essa pasta de “módulos”, vamos criar outra pasta lá dentro que vamos chamar de “projeto”. Projeto é o nome do nosso módulo e, por fim, vamos criar um arquivo “index.ts”. Aqui vamos criar o nosso módulo.

[02:08] Como eu já falei com você, vamos criar uma interface que representa um estado desse módulo, interface EstadoProjeto {, porque é do módulo projeto. Essa interface vai ter um array e uma lista de projetos projetos: IProjeto[], vamos definir. Já fez o import.

[02:37] Vamos precisar exportar esse cara, confia em mim, você vai entender daqui a pouco porque precisamos exportá-lo, export interface EstadoProjeto {.

[02:43] Agora que já temos o estado desse módulo, vamos criar o módulo em si, constante projeto, que é o nome do módulo, const projeto.

[02:54] Esse projeto tem um tipo, que tipo é esse? const projeto: Module =. Esse cara é um módulo do Vuex, repara que ele já até auto completou para mim.

[03:06] E quando eu digo que ele é um módulo eu preciso dizer duas coisas para ele, eu preciso dizer qual é o estado desse módulo e qual é o meu estado global, const projeto: Module<EstadoProjeto>.

[03:16] O estado desse módulo é muito fácil, acabamos de fazer, o estado global é o estado da minha store global, é esse estado interface Estado. Repara, também não estamos exportando essa interface, vamos exportar agora, export interface Estado. E agora vamos dizer que o Estado é o meu estado global, const projeto: Module<EstadoProjeto, Estado>.

[03:35] Eu tenho meu estado e o estado do projeto. Já podemos começar a definir esse módulo, já podemos também fazer o export desse projeto, export const projeto: Module<EstadoProjeto, Estado>.

[03:48] Agora zero novidades, vamos definir as nossas mutações, mutations:'{. E também vamos definir as nossas ações, actions: {. E que ações e mutações são essas? As de projetos, vamos fazer um “Ctrl + X”, “Ctrl + V” em "index.ts/store".

[04:04] Vou pegar todas as mutações de projetos de “index.ts/store” e jogar para “index.ts/projeto”. Por enquanto só vamos fazer esse copy paste aqui, vou pegar também todas as ações dos projetos em "index.ts/store” e colocar em “index.ts/projeto”.

[04:22] Agora vou pedir para o VS Code formatar o código para mim e vou pedir para ele fazer esses imports,adiciona todos os imports que estão faltando.

[04:31] Já está compilando esse arquivo, já tenho minha interface que representa meu estado desse módulo, já tenho meu módulo que tem suas ações e suas mutações. Vou salvar esse cara.

[04:46] O que eu preciso fazer agora? Inicialmente, vamos lá no nosso “index.ts/store” que representa nosso estado global. Eu vou remover todos os imports que não são mais necessários. Repara que ele já está bem menor.

[05:01] Porém agora eu não tenho mais uma lista de projetos no meu estado, essa lista de projetos não é mais global. Posso tirar também o import da interface createStore.

[05:14] Eu não tenho mais uma lista de projetos no meu estado global, eu tenho um módulo que tem esse estado dentro dele. No meu estado global eu vou ter uma propriedade que tem o nome do meu módulo, projeto:.

[05:29] E qual é o tipo desse estado, dessa propriedade? É o meu estado de projetos projeto: EstadoProjeto, por isso eu falei para você confiar em mim e já exportar aquela interface,

[05:40] Agora eu já posso iniciar o meu estado com o meu estado filho que é o projeto, que vai ser um array de projetos, projeto: { projetos: [].

[05:51] Agora eu já tenho configurado o nome do meu módulo com o estado local dentro dele, que já está inicializado. Eu iniciei de forma global o meu estado de projetos.

[06:04] Não estamos tendo nenhum erro de compilação, parece que está tudo bem. Vamos para aplicação ver se está tudo funcionando. Minimizei o VS Code, ele reclamou aqui, falha ao compilar, “src/components/Formulario”.

[06:20] Você está usando esse parâmetro projeto, ele está implicitamente como any, ele quer dizer que ele não sabe o que esse é cara, o typescript não vai deixar passar, ele não vai compilar.

[06:30] Vamos corrigir, em “src/components/Formulario.vue”. Ele já está reclamando aqui. Por que ele está reclamando? Eu não tenho mais projetos no meu estado global, eu tenho projetos: computed(() => store.state.projeto.projetos.

[06:50] Parou o erro de compilação, vamos voltar na aplicação, "Alura Tracker". Ele continua dando erro, mas mudou, um erro novo, um erro melhor. Agora ele está reclamando de “Formulario.vure” que está dentro de “projetos” que está dentro de “views” que está dentro de “src”.

[07:04] Ele está falando: "Olha, projetos não existe nesse estado aqui, eu não sei o que você está falando. Será que você não quis dizer ‘projeto’?"

[07:12] Vamos lá, "VS Code". O typescript é bem bacana. "views > projetos > Formularios.vue". Ele está reclamando dessa constante. Porque não tem mais projetos direto, eu tenho const projeto = this.store.state.projeto.projetos.find. O estado do meu módulo e o estado dele em si, o nome do meu módulo e o estado dele.

[07:33] Vou salvar, vou voltar no Alura Tracker Passou, mudou o componente, um erro novo, um erro melhor. “src > views > projetos > Lista.vue”, a mesma coisa, dentro de estado eu não tenho mais projetos.

[07:46] Vamos corrigir, ele esta agora em Lista.vue, aqui é projetos: computed(() => store.state.projeto.projetos). Agora sim, salvei. Vou voltar no Alura Tracker.

[07:55] Está tudo funcionando, vou recarregar, "F5". Tudo funcionando. Ele está reclamando de uma action aqui. OBTER_PROJETOS, alguma coisa está mal. O que está faltando para ele enxergar essa ação?

[08:09] Eu vou te dizer, esquecemos de indicar para o Vuex que ele tem um módulo agora, não configuramos, criamos esse módulo todo, definimos o estado inicial, mas não complementamos na hora de criar a store que ela tem um módulo.

[08:26] Em “index.ts/módulos/projeto”, embaixo das minhas ações eu vou dizer que eu tenho um modules: { > projeto. Deixa eu ver se ele vai importar para mim. Ele já fez o import para mim, import projeto from ./modulos/projeto.

[08:45] Vou salvar esse cara. Vamos voltar no Alura Tracker agora, recarreguei, "F5". Ele agora está funcionando, carregou, tem a minha lista de projetos. "projetos". Está tudo aqui.

[08:58] Vamos criar um projeto novo, vou criar outro projeto aqui, vou chamar de Estudos pessoais, "Novo projeto > Estudos pessoais > Salvar".

[09:07] Salvou, está aqui, “Estudos pessoais”. Vou editar, "Ícone do lápis do lado de Estudos pessoais". Vou colocar no título "parte 1 > Salvar".

[09:15] Salvou, vou deletar, deletou. Nosso estado agora já está funcionando como módulo. Vamos conseguir diminuir bastante a responsabilidade do global.

[09:30] Cada recurso agora pode ter o seu módulo específico e fazemos coisas menores que são mais simples e mais fáceis de escopar, o escopo fica menor, fica mais fácil de dar manutenção.

[09:42] Mais uma coisa que fizemos melhorando a experiência do desenvolvedor e agora, ainda assim, continuamos plugados na API. Tudo continua funcionando e agora de uma forma que é mais fácil de manter.

[09:54] É isso, mais ainda tem muita coisa legal para desenvolvermos dentro do Alura Tracker. Te vejo na próxima aula.

@@08
Para saber mais: Vuex Modular

Se você quiser entender melhor esse conceito, a documentação é uma das melhores fontes.

https://next.vuex.vuejs.org/guide/modules.html

@@09
Faça como eu fiz: Extraindo actions e mutations das tarefas

Já refatoramos e extraímos o código da store relacionado aos projetos. Agora, chegou a vez das tarefas. Sua missão, se decidir aceitá-la, é refatorar e extrair as actions e mutations relacionadas às tarefas.

Legibilidade conta, e um código bem escrito faz a pessoa que desenvolve mais feliz.
Se precisar de ajuda nessa atividade, confira logo abaixo o gabarito:

src\store\modulos\tarefas\index.tsCOPIAR CÓDIGO
import http from "@/http";
import ITarefa from "@/interfaces/ITarefa";
import { Estado } from "@/store";
import { OBTER_TAREFAS, CADASTRAR_TAREFA, ALTERAR_TAREFA } from "@/store/tipo-acoes";
import { DEFINIR_TAREFAS, ADICIONA_TAREFA, ALTERA_TAREFA } from "@/store/tipo-mutacoes";
import { Module } from "vuex";

export interface EstadoTarefa {
  tarefas: ITarefa[]
}

export const tarefa: Module<EstadoTarefa, Estado> = {
  state: {
    tarefas: [],
  },
  mutations: {
    [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
      state.tarefas = tarefas
    },
    [ADICIONA_TAREFA](state, tarefa: ITarefa) {
      state.tarefas.push(tarefa)
    },
    [ALTERA_TAREFA](state, tarefa: ITarefa) {
      const index = state.tarefas.findIndex(t => t.id == tarefa.id)
      state.tarefas[index] = tarefa
    },
  },
  actions: {
    [OBTER_TAREFAS]({ commit }) {
      http.get('tarefas')
        .then(response => commit(DEFINIR_TAREFAS, response.data))
    },
    [CADASTRAR_TAREFA]({ commit }, tarefa: ITarefa) {
      return http.post('/tarefas', tarefa)
        .then(resposta => commit(ADICIONA_TAREFA, resposta.data))
    },
    [ALTERAR_TAREFA]({ commit }, tarefa: ITarefa) {
      return http.put(`/tarefas/${tarefa.id}`, tarefa)
        .then(() => commit(ALTERA_TAREFA, tarefa))

    },
  }
}COPIAR CÓDIGO
Repare que inicializamos o estado com a lista de tarefas vazias. No Alura Tracker isso é necessário pois precisamos saber quando essa lista está sem elementos.

src\store\index.tsCOPIAR CÓDIGO
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue'
import { NOTIFICAR } from "./tipo-mutacoes";
import { INotificacao } from "@/interfaces/INotificacao";

import { EstadoProjeto, projeto } from "./modulos/projeto";
import { EstadoTarefa, tarefa } from "./modulos/tarefas";

export interface Estado {
    notificacoes: INotificacao[],
    projeto: EstadoProjeto,
    tarefa: EstadoTarefa
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        notificacoes: [],
        projeto: {
            projetos: []
        },
        tarefa: {
            tarefas: []
        }
    },
    mutations: {
        [NOTIFICAR] (state, novaNotificacao: INotificacao) {

            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            }, 3000)
        }
    },
    modules: {
        projeto,
        tarefa
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}COPIAR CÓDIGO
src\views\Tarefas.vueCOPIAR CÓDIGO
  // codigo anterior omitido
  setup() {
    const store = useStore();
    store.dispatch(OBTER_TAREFAS);
    store.dispatch(OBTER_PROJETOS);
    return {
      tarefas: computed(() => store.state.tarefa.tarefas),
      store,
    };
  },

  @@10
O que aprendemos?

Nessa aula, você aprendeu como:
A importância de manter a saúde do projeto;
Sempre que identificamos um problema conhecido, como a store com código demais, precisamos ter uma arquitetura alternativa para que o projeto possa ser mantido muito muito mais tempo antes de virar um legado difícil de trabalhar.
Promises e async/await;
Vimos na atividade de alternativas que temos outra forma de lidar com métodos assíncronos.

#### 13/02/2024

@03-Composition API

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

https://github.com/alura-cursos/tracker-3/tree/aula-2

@@02
Lifecycle Hooks

[00:00] Legal o que construímos até aqui, já migramos o nosso estado local para combinar uma API nova com o Tracker em si, todas as tarefas e projetos já vem direto da API. Mandamos e obtemos dados da API conforme o usuário interage com a nossa interface.
[00:19] E agora vamos cuidar um pouco mais dos nossos componentes e da experiência do desenvolvedor. O usuário, eu acredito que ele já vai estar bastante satisfeito com essa versão nova, ele já não perde mais tudo que ele inseriu, isso vai ficar persistido dentro da API.

[00:34] E agora precisamos cuidar do nosso projeto para as próximas pessoas que vão trabalhar aqui desenvolvendo e alterando essas funcionalidades.

[00:41] Vamos para o VS Code e vamos dar uma olhada no componente Formulario de projeto. Esse componente está em "src > views > projetos > Formulario.vue". Vamos juntos analisar como construímos esse componente e como usamos as coisas ali dentro.

[00:59] Vamos começar pelo estado local, temos um método data que retorna um objeto, e esse objeto tem uma propriedade chamada nomeDoProjeto que se inicia com uma string vazia. Isso é o nosso estado local.

[01:15] Esse nomeDoProjeto é utilizado quando o componente é montado, dentro de um ciclo de vida do Vue. Onde mais usamos esse nomeDoProjeto? Quando salvamos o projeto, ou seja, quando cadastramos ou alteramos um projeto existente.

[01:30] O que mais? No método lidarComSucesso que desenvolvemos, ele notifica e altera a rota, o usuário redireciona ele para a rota de projetos. E por enquanto é só.

[01:42] Estamos fazendo isso utilizando a options API do Vue. O que é essa options API? É justamente conseguirmos construir um componente através dessa função que importamos do Vue, a defineComponent, ou seja, definir um componente.

[01:57] E passamos um objeto cheio de propriedades que até o typescript já conhece, ou seja, o defineComponent vai ter nome, proxy, um mounted que é do ciclo de vida, data que é o estado local, métodos que vão estar disponíveis.

[02:12] E o setup em si que já é da composition API que falamos algumas vezes no decorrer do desenvolvimento do Tracker.

[02:21] O que vamos fazer agora? Se analisarmos bem a fundo o nomeDoProjeto, que simplesmente nenhum estado local repara, é só uma variável, uma string, nem é um objeto complexo, mas ele já se espalha. Repara, ele aparece no return, aparece no mounted, aparece no lidarComSucesso. Ele está em todo lugar, ou seja, ele é muito importante.

[02:44] E conforme esse componente cresce e vão entrando novos métodos, e outras coisas aqui, ele tende a se separar, código que está relacionado vai acabar ficando distante um do outro.

[02:56] Conseguimos mitigar e controlar isso utilizando a composition API. Repara comigo aqui que definimos a store e já importa um hook chamado notificar, e retornamos isso no final do setup.

[03:12] Conforme retornamos isso no final do setup, dentro do nosso componente podemos fazer, por exemplo, this.notificar ou this.store.dispatch e uma ação.

[03:25] O setup permite que configuremos o componente como alternativa a essa options API. Vamos começar a utilizar mais a composition API e menos a de opções.

[03:38] Vamos começar pelo ciclo de vida. Repara que o que queremos fazer é que quando esse componente for montado vamos lá utilizar o Vue Router, dá uma olhada no ID para ver se existe um ID, se o ID existe vamos tentar obter o projeto. É isso que vamos migrar para a nossa composition API. Vamos lá.

[03:58] Vou comentar tudo que desenvolvemos no mounted, comentei, não vai ter mais. Se eu salvar isso, voltar para o nosso projeto, ir na listagem de projetos e tentar acessar um projeto existente, ele já não está mais tentando obter esse projeto de lugar nenhum, eu tenho um ID na URL, mas ele não traz nada para mim.

[04:20] Vamos agora tratar de fazer isso dentro do nosso método setup. A primeira coisa que precisamos fazer é ter acesso as props e é justamente isso que recebemos por parâmetro, são as props (props).

[04:33] E já conseguimos ter acesso ao ID fazendo props.id. Repara que o typescript já completa, ele entende que existe essa propriedade props que definimos logo no começo do componente.

[04:47] O que queremos fazer é justamente um if esse cara. Vamos definir aqui um if (props.id) {. Se essa propriedade existe queremos fazer alguma coisa. Vamos dar uma olhada no que fazemos, vamos fazer um “Ctrl + C” e um “Ctrl + V” dentro do if. Vou descomentar tudo isso. E vou pedir para ele fazer um Format Document para ficar tudo formatado.

[05:14] Repara comigo que já conseguimos acessar a props. Muito importante isso, dentro do setup não existe this, não existe o componente ainda, não conseguimos fazer this. nada.

[05:30] Vamos migrar os imports const store = useStore() e const { notificar } = useNotificar() mais para cima. E com isso já conseguimos resolver o problema da store, não precisa mais fazer this.store para acessar o estado. E o ID não é mais this.id, é props.id.

[05:51] Já conseguimos encontrar esse projeto e verificar se ele existe, só que não temos this dentro do setup, não conseguimos fazer o nomeDoProjeto dessa forma.

[06:05] Qual é a alternativa que temos? Vamos também comentar o nosso método data, vamos deixar ele comentado por enquanto. E de alguma forma vamos precisa definir ele dentro do setup. Como trabalhamos com esse método diferente de escrever componentes e com variáveis reativas.

[06:27] No caso do Vue, quando queremos criar uma variável que vai se modificar, ou seja, ela precisa ser observada de alguma forma, fazemos um import de um método chamado ref.

[06:40] Vamos onde estamos fazendo os imports do Vue e vamos importar aqui também o ref, por import { defineComponent, ref } from “vue”;. Esse método é uma função que vai nos trazer uma variável reativa, ou seja, conforme ela se modificar, o Dom vai se renderizar novamente e assim sucessivamente.

[06:57] E o que queremos fazer é no nosso setup dizer que uma constante chamada const nomeDoProjeto = ref(“ “) é uma referência para string. E agora vamos poder fazer o nomeDoProjeto receber esse nome que veio da API, vamos conseguir atribuir esse nome.

[07:23] E aqui tem um pequeno pulo do gato, como é uma variável reativa, para termos acesso ao valor temos uma propriedade ali dentro chamada value, nomeDoProjeto.value = projeto?.nome || “”;. Repara, o nomeDoProjeto é uma variável reativa, mas o valor dela está aqui dentro de value.

[07:47] Repara que o nomeDoProjeto, já temos até um typescript aqui. É uma referência para uma string e para ter acesso ao valor eu faço .value. E agora podemos vir no return e retornar o nomeDoProjeto.

[08:08] Repara que não temos mais nenhum erro de compilação aqui, o this.nomeDoProjeto em outros locais funciona porque dentro de métodos, por exemplo, temos acesso a this, dentro do setup não. Tudo voltou a funcionar.

[08:24] E outra coisa que também você vai reparar comigo é que no nosso input estamos fazendo um bind direto para nomeDoProjeto, ou seja, não estamos fazendo nomeDoProjeto.value no input.

[08:35] Isso porque o template já sabe fazer isso, ele olha e entende que o nomeDoProjeto é uma variável reativa e ele automaticamente já vai olhar para o value.

[08:46] Com essa pequena refatoração já nos livramos das options, mounted e data e trouxemos para dentro da composition API.

[08:56] Vamos salvar e vamos ver se isso tudo continua funcionando. Repara que ele já recarregou e ele já trouxe para mim, mas não vou confiar, vou dar uma recarregada aqui. Vamos em projetos, entramos direto no projeto com id, não deu certo, deu problema, “projetos”.

[09:13] Vamos para a nossa lista de projetos, “localhost:8080/projetos”. E aqui sim, temos a nossa lista de projetos. Acessando o Alura Tracker 3.0 temos a edição. Voltando, acessando o ByteBank temos acesso a edição também.

[09:29] Vamos testar, vamos alterar o ByteBank para ByteBank na versão 2.0. E tudo continua funcionando exatamente como era antes, só que agora estamos evoluindo no uso da composition API.

[09:44] Aos poucos vamos parar de usar a forma antiga de escrever componentes que resolve e atende em muitos casos, não é errado utilizar a composition API junto com a options API, depende do tamanho do seu componente.

[10:00] Por enquanto essas duas formas coexistem dentro do Vue, você pode usar tanto uma como outra dependendo do seu cenário, o que fizer mais sentido para aquele componente.

[10:08] Mas aqui, no caso do “Formulario.vue” vamos focar e migrar tudo que conseguirmos para dentro do setup.

[10:17] E o primeiro passo dessa missão já foi concluído, já migramos o clico de vida, mounted e o data, que é o nosso estado local para dentro do *setup. E não para por aqui, tem mais umas coisas legais para fazermos. Te vejo no próximo vídeo.

@@03
Setup dos métodos

[00:00] Hora de seguir na composition API, já começamos a refatorar o nosso componente de formulário, vamos continuar, tem pouca coisa para concluirmos.
[00:09] Vamos dar uma olhada agora nesses métodos, temos duas coisas que precisamos cuidar antes de passar para a próxima refatoração que faremos. Vamos cuidar agora justamente dos métodos. Vamos dar uma olhada no setup.

[00:24] Analisando o setup de novo definimos qualquer coisa que precisemos, seja importando um código, os uses da vida que são os hooks, useStore para ter acesso ao store, o useNotificador para notificar aquela mensagem de sucesso, ou de falha.

[00:43] E o que precisamos definir, ou seja, o que precisamos utilizar no componente retornamos lá no final do setup.

[00:50] Para trabalharmos com métodos não é muito diferente, vamos pegar um método salvar, podemos selecionar o método, dar um “Ctrl + X” sem medo. E vou trazer ele logo acima do return, vou trazer desse jeito, "Ctrl + V".

[01:08] Repara que eu vou transformar ele em uma constante, uma const salvar = () => {. Vai receber, vou atribuir ele a essa constante, umaarrow function e no final, no nosso return, vamos retornar lá o salvar. Com isso, já temos acesso ao método salvar a partir do nosso template ou da nossa options API.

[01:37] Vamos agora corrigir esses erros. Eu não tenho this.id, mas eu tenho if (props.id). Eu também tenho embaixo de dispatch id: props.id.

[01:49] Store eu tenho acesso a ela direto, não preciso mais de this, store é um constante que está disponível dentro do meu setup. Eu não tenho mais a necessidade de definir esse this.

[02:02] E também o nome do projeto eu tenho acesso aqui, mas lembra, isso é uma variável reativa, eu tenho que fazer nome: nomeDoProjeto.value,.

[02:12] No CADASTRAR_PROJETO, a mesma coisa, não tenho this, mas eu uso o .dispatch(CADASTRAR_PROJETO, nomeDoProjeto.value. Quero o valor dessa variável reativa, nomeDoProjeto é uma referência para uma variável reativa.

[02:26] E agora temos esse lidarComSucesso que é mais um método que vamos trazer para baixo, “Ctrl + X". Vou apagar agora a opção de métodos que eu não preciso mais e vou definir o lidarComSucesso com o mesmo princípio, "Ctrl + V na linha 49".

[02:42] Vou transformar ele em uma constante, const lidarComSucesso = () =>. Perfeito. this.nomeDoProjeto não existe, já aprendemos, nomeDoProjeto.value.

[02:55] O notificar não tem this mais, podemos simplesmente chamar o notificar, fizemos o import no começo do setup. Não temos this.$router, esse vai ser o primeiro desafio que teremos. Para ter acesso ao router, temos de utilizar Vue Hook.

[03:20] Vamos logo depois de iniciar o nosso setup, vamos pegar uma const router =.

[03:25] De onde vem isso? Tanto o Vuex quanto o Vue Router na versão 4 já conseguem trabalhar muito bem com a composition API, temos um hook para ter acesso ao router, useRt.

[03:40] Repara que tem dois, toma cuidado no momento de escolher, o useRoute é para ter acesso a rota atual, por exemplo, para pegar os parâmetros, se eu quisesse pegar o ID direto pela rota eu usaria o useRoute.

[03:56] O useRouter, com R no final, vai me dar acesso ao roteador do Vue. Repara que ele já fez um import para mim. Um import { useRouter } from "vue-router";.

[04:10] Com esse Router conseguimos fazer exatamente o que precisamos, que é um router.push("/projetos");. E agora, por último, vamos tirar a vírgula daqui, e não precisamos mais usar this, vamos lidar o .then (() => lidarComSucesso diretamente).

[04:28] Trouxemos tudo isso para cá, ele está reclamando de alguma coisa no final, é a vírgula no final do const salvar. Agora sim, sumiu o erro de compilação.

[04:37] E outra coisa que podemos fazer é que agora, nesse momento, nem a store, nem notificar serão utilizados fora do setup, nem dentro das nossas options API, utilizávamos isso dentro dos métodos, e nem em cima, no nosso template. Precisamos ter acesso ao métodos salvar e à variável nomeDoProjeto.

[05:01] Vamos exportar no final, vamos fazer o retorno só disso, vamos tirar a store e tirar notificar. Agora repara nosso componente está direito, a princípio nenhum erro de compilação. Vamos salvar e testar para garantir que a refatoração não quebrou nada no meio do caminho.

[05:20] Voltamos para o Firefox, vou atualizar a página, "F5". Nenhum problema, vou tentar criar um "Novo projeto". Vou colocar o nome de "Estudando padrões de arquitetura".

[05:42] Tudo funcionando direito. Vamos editar para ver se o Formulário continua funcionando do jeito que era antes. Agora vou tirar “arquitetura” e vou botar “Estudando padrões de projeto”. E perfeito, o update e o insert continuam funcionando.

[05:58] Agora, olhando com um carinho maior e entendendo o problema que a composition API resolve, conseguimos bater o olho, vou tentar deixar tudo dentro do scroll, acho que eu não vou conseguir, está um pouco grande. Mas o principal aqui é darmos uma olhada em como nós preparamos o nosso componente.

[06:21] As coisas não estão mais espalhadas pelas opções daquele objeto grande, métodos, props, data para estado local, computed. Enfim, não usamos mais as opções, agora usamos o setup.

[06:35] E conseguimos definir tudo, o que precisa ser utilizado, nesse caso, no template, vamos lá e retornamos no final do setup. E tudo continuar funcionando lindamente. Mas não para por aqui, ainda tem alguns truques que precisamos aprender, tem algumas coisas que temos que fazer, já vou dar um spoiler aqui.

[06:56] Se abrirmos o nosso arquivo de “Formulario.vue” de tarefas, "src > components > Formulario.vue". Ainda estamos usando a options API, temos data, methods e repara, dentro desse método salvarTarefa fazemos um this.$emit.

[07:15] Mas já vimos que dentro da composition API não conseguimos fazer this. alguma coisa porque this ainda não existe. Como fazemos para emitir um evento dentro da composition API? Vamos descobrir?

@@04
Composition API pra que te quero?

Você e Myles, um jovem aprendiz que trabalha com Vue faz muito pouco tempo, estavam conversando sobre as principais diferenças entre as versões 2 e 3 do framework e uma das coisas que ele te perguntou foi:
Por que utilizar a composition API?

Para decompor os componentes grandes em componentes melhores, facilitando assim a manutenção do código.
 
Alternativa correta
Para fazer requisições HTTP, podemos utilizar a Composition API ao invés do axios.
 
Alternativa correta
Para escrever componentes agrupando o código de acordo com as preocupações lógicas, facilitando a leitura das dependências do componente, e como ele funciona.
 
Alternativa correta! Exatamente! Conforme os componentes e a aplicação vão crescendo, organizar nosso código apenas pelas options (data, computed, methods, watch) se torna uma tarefa complexa. A motivação da composition API é justamente essa! . Confira aqui a documentação na íntegra.

https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api

@@05
Emitindo eventos

[00:00] Já deixei um spoiler na última aula que íamos dar uma olhada agora em como fazer emissão de evento utilizando a composition API.
[00:07] Vamos lá, vamos colocar a mão no nosso “Formulario.vue” e fazer isso funcionar. De cara já temos duas propriedades que precisamos tratar, que estão dentro do nosso estado local, ou seja, dentro do método data. Já aprendemos da outra refatoração como fazemos para criar variáveis reativas, vamos fazer isso const descricao = ref(“ “), ref que é aquela função do Vue. Ele já viu aqui, ele vai importar. Vamos ver se está certo, ref from vue. Fez o import direito.

[00:47] E eu quero que ele faça uma ref de string, repara que ele já faz a inferência do tipo. Eu não preciso fazer nada, o typescript já entende que ele é uma ref de string.

[00:59] E vamos fazer o “Ctrl + C”, “Ctrl + V” aqui de const descricao = ref(" "). Também precisamos do id do projeto idProjeto. Vamos deletar, vamos remover o data da linha 46. E agora precisamos retornar essas propriedades, return {, descricao, e idProjeto.

[01:23] Lembrando aqui, vale a pena reforçar, quando fazemos um return desse tipo, isso é coisa do actionscript mais novo, mas é a mesma coisa se eu fizesse descricao: descricao,. Ou seja, quando eu quero retornar um objeto literal que vai ter uma propriedade com o mesmo nome da variável eu posso omitir o : descricao, ele faz.

[01:47] Já definimos o estado local aqui utilizando o ref, para cima na página tudo vai continuar funcionando. E agora, precisamos extrair o método salvarTarefa, “Ctrl + X". E vamos limpar os métodos que agora ficaram vazios. Vamos definir o método salvarTarefa seguindo aquele mesmo padrão.

[02:12] Vamos definir uma constante, const salvarTarefa = (tempoEmSegundos: number) : void => {. Essa constante vai receber uma arrow function. Está tudo certo por enquanto. O emit vamos ver de onde vamos tirar.

[02:30] Repara, aqui precisamos ter acesso a projetos, vamos fazer assim: vamos definir os projetos acima, const projetos projetos: computed(() => store.state.projeto.projetos). Vai receber esse computed. E agora no return podemos remover o que o projetos recebe. A constante projetos é a que extraímos e agora podemos acessar o projetos diretamente.

[02:55] Vamos ver, repara, a const projetos a mesma coisa, projetos é um computed ref para o array, temos que fazer projetos.value. Perfeito. Na descricao não preciso mais do this, porém é um descricao.value. O id do projeto a mesma coisa, porém fazemos o .value. A descrição queremos limpar, descricao.value. Perfeito até agora.

[03:28] E o emit? Antes de qualquer coisa já vamos retornar essa salvarTarefa, salvarTarefa. E agora o emit, como vamos fazer? Não temos acesso a this dentro do setup.

[03:44] Já vimos no outro "Formulario.vue \Projetos" vamos voltar lá, que recebemos como primeiro parâmetro no setup as props: setup (props).

[03:59] A segunda variável que recebemos no setup é o setup (props, contexto). E o que conseguimos fazer aqui é: tendo o contexto, fazemos o emit, contexto.emit (‘aoSalvarTarefa’. O contexto vai definir várias coisas, teremos acesso a várias coisas disponíveis ali no setup da composition API e o emit é uma delas.

[04:22] Para evitarmos esse tipo de coisa, podemos fazer o nosso destructor, queremos só o emit, vamos extrair só o que precisamos, emit(‘aoSalvarTarefa’,e setup (props, { emit }) {.

[04:35] Agora sim estamos extraindo o emit do contexto do Vue e fica tudo pronto, tudo bacana para fazermos a emissão do evento. Só que só acredito vendo. Vou salvar e vamos testar, vamos criar uma tarefa e ver se tudo continua funcionando como deveria.

[04:56] Vamos voltar para o nosso Firefox e garantir que tudo continua funcionando conforme esperado. Lá no Firefox, agora em "tarefas", ou seja, esse formulário tem que continuar funcionando como antes. Vou criar uma tarefa de teste, vou dar ”Play”

[05:15] Vou deixar ele rodar por alguns segundos, vou selecionar o projeto, vou colocar em "Estudando padrões de projetos". Vou fazer o "Stop". E sim, continua funcionando, ele está limpando o input do usuário, fez o stop, zerou o cronometro e definiu embaixo a nova tarefa que eu acabei de cadastrar.

[05:36] Perfeito, ele continua funcionando, tudo exatamente como devia estar e agora melhoramos o quê? A experiência do desenvolvedor.

[05:45] Voltando ao VS Code, na composition API, extraímos e não mais espalhamos tudo que precisamos pelas options ali, data, métodos, computed e por aí vai. Fazemos o setup do componente inteiro.

[06:01] Com isso, conseguimos reaproveitar métodos, reaproveitar objetos inteiros enfim, reaproveitar código. Fica muito mais fácil, o código em si fica muito mais organizado.

[06:11] E se não foi você que desenvolveu, quando você vai ver o componente de alguém você consegue rapidamente entender o que é necessário para aquele componente funcionar e como as coisas se relacionam.

[06:22] Vemos aqui que o tempo em segundos está vindo do método salvarTarefa, a descrição de onde vem, o ID do projeto, de onde vem os projetos que ele está utilizando para encontrar, de onde vem. Fica tudo muito claro, a legibilidade conta muito.

[06:36] É isso que tínhamos para fazer aqui nesse Formulário, cada vez mais utilizando todo o poder da composition API que temos na nossa mão aqui.

[06:47] Vamos melhorar a parte de arquitetura e escrita de código dos nossos componentes Vue. Te vejo no próximo vídeo.

@@06
Faça como eu fiz: Uma nova forma de escrever componentes

Chegou a sua vez de refatorar e mudar a forma que escrevemos componentes.
Que tal refatorar o Tarefa.vue? Lembre-se que já vimos em outros lugares como utilizar o computed e o emit dentro do setup!

Aprendemos umas funcionalidades legais, né?
Uma das formas de reescrever o componente que representa uma tarefa é:

<template>
  <Box>
    <div class="columns">
      <div class="column is-4">
        {{ tarefa.descricao || 'Tarefa sem descrição' }}
      </div>
      <div class="column is-3">
        {{ tarefa.projeto?.nome || 'N/D' }}
      </div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Cronometro from "./Cronometro.vue";
import Box from "./Box.vue";
import ITarefa from "../interfaces/ITarefa";

export default defineComponent({
  name: 'Tarefa',
  components: {
    Cronometro,
    Box
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  },
  computed: {
    tempoGasto () : string {
      return new Date(this.tarefa.duracaoEmSegundos * 1000)
        .toISOString()
        .substr(11, 8)
    }
  }
});
</script>

@@07
O que aprendemos?

Nessa aula, você aprendeu como:
Configurar o componente;
Utilizando o método setup, conseguimos escrever tudo o que um componente precisa. Seja o seu estado, reagir ao ciclo de vida ou mesmo propriedades computadas.
Parâmetros do método setup;
Conseguimos acessar as props e o contexto do componente, mesmo utilizando a Composition API.

#### 14/02/2024

@04-Reatividade

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

https://github.com/alura-cursos/tracker-3/tree/aula-3

@@02
Filtrando tarefas

[00:00] Legal o que fizemos até aqui, o nosso Tracker já evoluiu muito, tanto na experiência do usuário quanto na experiência do desenvolvedor. E agora está na hora de adicionarmos mais funcionalidades para os usuários.
[00:12] E o que vamos fazer dessa vez é colocar um input para o usuário digitar alguma coisa ali e filtrarmos então as tarefas que tem aquele texto na descrição.

[00:23] Lembrando que utilizamos o Bulma nesse projeto, na documentação do Bulma conseguimos vir em "Library > Form > Input" e pegar um exemplo, um HTML que tem um ícone antes e depois. Vamos pegar essa marcação, essa tags html e vamos levar para o nosso projeto, na nossa lista de tarefas dessa vez, está lá em "src > views > Tarefas.vue".

[00:49] Logo após o Box que indica que não existem tarefas realizadas, vamos colar o código e pedir para o VS Code formatar o documento, vamos salvar e vamos ver como isso se comporta. Voltando no nosso Tracker. Perfeito. Repara que ele já colocou um indicador de e-mail aqui com um check no final.

[01:09] Não é isso que queremos, o que queremos, já combinando que também temos disponível no Tracker uma biblioteca de coisas chamada Font Awesome. Olhando lá no "Font Awesome” conseguimos pesquisar pelo ícone de busca.

[01:24] Para indicar ele lá no nosso HTML a classe tem que ser fas da-search. Vamos só ajustar esses ícones para ficar do jeito que precisamos. A primeira coisa aqui, no nosso input o tipo dele não vai ser e-mail, vamos já mudar para texto, type=”text”.

[01:40] O placeholder vamos colocar "Digite para filtrar". Na direita não vamos colocar nada, podemos tirar essa classe de possui ícone na direita, queremos só na esquerda.

[02:01] E justamente a da esquerda queremos mudar para o ícone daquela lupa que vimos no Font Awesome, <i class="fas fa-search"></i>. Vamos salvar isso. E vamos dar uma olhada se tudo funciona conforma imaginamos.

[02:12] Voltando no nosso Firefox, perfeito. Digita para filtrar e colocou um ícone de lupa. Agora o que queremos? Precisamos de alguma forma fazer um bind do código ”Digite para filtrar”, vincular isso com uma variável, um filtro, v-model="filtro"/>.

[02:27] E como fazemos isso já utilizando o composition API? Já vimos como faz isso. Vamos descer para o nosso método de setup e o que vamos dizer? Vamos criar uma variável chamada filtro que vai ser uma referência, const filtro = ref. Repara que o VS Code, meu melhor amigo, já vai importar para mim. Ele tem que importar ref de vue. Vamos confirmar, import { computed, defineComponent, ref } from "vue";.

[02:52] Esse filtro é uma referência para uma string, const filtro = ref (' '). E agora vamos retornar ele para ele ficar disponível no html, no nosso template, filtro.

[03:03] O segundo passo agora é de fato filtrar essas tarefas, repara comigo que temos aqui um computed, ou seja, ele computa alguma coisa e retorna a lista de tarefas que está dentro do estado.

[03:18] Vamos extrair essa lógica daqui, vamos remover esse computed por enquanto desse return. Vamos criar uma constante chamada tarefas const tarefas = computed(() => store.state.tarefa.tarefas) e vamos atribuir a mesma coisa que tínhamos antes. Porém agora tem uma diferença, o que queremos fazer?

[03:38] Se existir algum filtro queremos aplicar esse filtro na descrição das tarefas. Vamos utilizar o método filter, .filter(t =>)). Esse é um método de array, todo array tem esse método, queremos filtrar todas as tarefas.

[03:52] E aqui tem a grande jogada que faremos das nossas duas possibilidades, quando retornarmos true para esse filter ele vai incluir aquela tarefa.

[04:01] Vamos dizer que, por exemplo, se o !filtro.value)) é uma referência, se eu não tenho filtro.value é true, retorna, mas se eu tenho o !filtro.value e aminha tarefa tem uma descrição que inclui esse texto, || t.descricao.includes)), vou só pedir aqui para formatar de novo, agora está mais legível. Se não temos filtro ou se a descrição dessa tarefa inclui o valor desse filtro, (filtro.value).

[04:39] Se eu não tenho nada, retorna, ou se eu tenho, retorna se a minha descrição incluir esse valor. Vou salvar e vamos testar para ver se isso funciona, minimizei o VS Code. Voltei aqui, vou dar um F5, vou limpar o console, vou limpar tudo.

[04:56] E vamos digitar alguma coisa para ver se vai filtrar, vamos experimentar filtrar esse padrões, "Estudando padrões de projetos > X". Vamos digitar e perfeito, já achou.

[05:06] Repara, ele já aplicou o filtro, conforme apagamos ele remove. Se eu digitar aqui "configuração", ele já removeu. Se eu digitar aqui "Refatoração", ele filtra para mim.

[05:18] Repara que já conseguimos entregar a funcionalidade que precisávamos, de filtrar as tarefas de acordo com a descrição. Só que se analisarmos aqui, vamos dar uma olhada no nosso “Rede” no nosso developer tools.

[05:35] Você pode clicar com o botão direito, se você não estiver com o seu aberto, e pedir para inspecionar, no Chrome, no Edge, no Firefox e no Safari também, é bem parecido, você clica com o botão direito, pede para inspecionar, ele já vai abrir.

[05:51] No “Rede” vou limpar e repara comigo, não tem nada, ele não tem nenhuma requisição. Vou dar um "F5". Ele fez alguma coisa aqui. Ele pegou, quero "XHR". São requisições HTTP, ele fez em projetos. O que mais ele fez? Projetos e tarefas, é isso que eu queria mostrar para vocês.

[06:17] Conforme recarregamos ele pegou a lista de tarefas e a lista de projetos. Vou limpar. Conforme digitamos na barra de busca ele não está indo na API buscar isso, ele está filtrando o que está em memória.

[06:33] O que é ok, já é a funcionalidade que precisamos, mas precisamos ajustar isso. Além de digitar e aplicar esse filtro, não vamos fazer isso em memória, vamos delegar essa opção de filtrar para a API.

[06:49] Vamos pegar esse filtro que o usuário digitou e enviar para a API para pegar a resposta. É isso que vamos fazer, vem comigo no próximo vídeo.

@@03
Reagindo a mudanças

[00:00] Bem legal o que conseguimos fazer, já aplicamos em tempo de execução um filtro, conforme o usuário interage com o input nós limitamos a exibição das tarefas que estão relacionadas.
[00:11] Só que precisamos fazer diferente, precisamos delegar essa funcionalidade, essa responsabilidade de aplicar o filtro para a API. Olha só como fazemos isso.

[00:22] Primeiro, vamos dar uma olhada no Json Server, ele representa nossa API e a API tem que ter essa documentação de como fazemos para filtrar, GitHub. Olhando na documentação do “github.com/typcode/json-server”, ele tem uma parte de filtro.

[00:39] E o que ele está falando aqui é: se você quiser filtrar, você passa o nome da propriedade e o nome do valor que você quer. Se tiver vários, você pode fazer. Enfim, tudo mais, fica a vontade, desde que seja nesse formato nome da propriedade igual a valor.

[00:56] O que temos que fazer? Temos que observar esse input e conforme ele mudar, temos que fazer o hit, passar isso para uma action para a action filtrar na API. E como vamos fazer isso?

[01:11] No Vue já temos uma receita de bolo para observar variáveis reativas. Vou na minha lista de tarefas, "Tarefas.vue". Já temos aqui o filtro que é o reativo, o que queremos fazer, o que queremos observar, e se eu quero reagir a essa alteração eu posso chamar um hook chamado watchEffect.

[01:33] Repara, o VS Code já até auto completou para mim, ele também fez o import, import watchEffect from vue. E esse cara é um hook, ele é uma ação que recebe uma função, watchEffect(() => {. O que eu quero fazer aqui de imediato para percebermos se isso funciona?

[01:51] Eu quero fazer o console.log(filtro.value). E agora na nossa lista de tarefas não vamos mais usar dessa forma, eu vou comentar, vou deixar ela de referência. E vamos voltar para o que era antes, tarefas é um tarefas: computed(() => store.state.tarefa.tarefas.

[02:15] A lista de tarefas agora volta a ser o que era antes e aqui o que queremos fazer é observar o usuário digitando alguma cosia nesse filtro. Vou salvar e vamos ver se isso funciona. Voltando para o Firefox, vou limpar o console do developer tools. Vou colocar na barra de pesquisa "teste". Perfeito.

[02:37] Conforme eu fui digitando, ele foi fazendo o log no console. Isso daqui funciona, o watchEffect realmente observa a minha dependência e executa esse código quando a dependência muda.

[02:51] O que queremos fazer no caso de esse filtro mudar? Queremos chamar store.dispatch(OBTER_TAREFAS, filtro.value). E agora o que temos que fazer é obter isso lá do outro lado, e adicionar isso lá na URL caso o filtro possua algum valor, "store > modulos > tarefas > index.ts". Repara, como aqui ele já está mais coeso e menor não está uma store para todo o projeto, já sabemos onde temos que mexer.

[03:29] É mais fácil de entender onde as coisas se encontram. O que vamos fazer aqui, no OBTER_TAREFAS? A primeira coisa que eu vou fazer é criar uma variável antes que vai representar essa URL, let url='tarefas'.

[03:44] Eu tenho uma URL aqui. E o que vamos fazer agora é: receber um filtro por parâmetro, que é uma string, [OBTER_TAREFAS] ({ commit }, filtro: string.

[03:54] Me acompanha, se eu tenho esse filtro eu quero vir na minha URL e adicionar uma interrogação, o nome da propriedade que eu quero filtrar igual e vou concatenar o filtro que veio, if (filtro) { > url += '?descricao=' + filtro. Aqui na minha action se eu recebi um filtro eu vou concatenar na URL esse cara.

[04:19] Vou voltar na Alura Tracker, vou limpar o console. E vou digitar "Teste" na barra de pesquisa. Repara, funcionou, ele só me trouxe o Teste. Repara aqui outra coisa, o comportamento dessa blur, ele só vai trazer se o campo for exatamente idêntico ao que o usuário digitou.

[04:38] Se eu fizer alguma coisa parcial ele não vai encontrar, "Tes". Se eu fizer o nome certo da tarefa, ele vai trazer para mim. É a API que está funcionando desse jeito, nós, enquanto frontends aqui, não temos poder de pedir para a API funcionar diferente.

[04:54] É isso que vamos fazer, mas é isso que queríamos, delegamos agora a responsabilidade do filtro para a API. Se eu não tenho filtro ele vai lá e pega tudo, se eu tenho filtro ele vai trazer todas as tarefas cuja descrição é exatamente igual ao que o usuário filtrou.

[05:14] Repara, já conseguimos observar dados. Vamos analisar o código que escrevemos. Lá na lista de tarefas estamos observando o Vue por debaixo dos panos, sabe que ele precisa executar esse código quando esse filtro mudar.

[05:30] E pegamos esse mesmo filtro, o valor dessa variável reativa e passa para action. Lá na nossa action montamos o filtro do jeito que quisermos. Aqui, por bem, a gente decidiu fazer manualmente, fomos lá na URL e adicionamos o nome da descrição que estamos buscando.

[05:49] Bacana que isso funciona, estamos vendo um pouco de mágica aqui por baixo dos panos. Mas está na hora, talvez, de fazermos um mergulho um pouco mais fundo e entender essa reatividade, como o Vue faz para saber que esse valor mudou, como ele observa isso, como ele é inteligente desse jeito.

[06:08] Está na hora de vermos como o mágico tira o coelho da cartola. Vem comigo no próximo vídeo.

@@04
Para saber mais: Watch vs WatchEffect

Às vezes queremos observar um valor em específico, inclusive comparar o valor antigo com o novo. Quando isso é necessário, utilizamos o watch, e assim podemos observar melhor o que está acontecendo com o valor a que estamos reagindo:
    watch(filtro, (valorAtual, valorAntigo) => {
      if (valorAtual != valorAntigo) {
        store.dispatch(TipoAcoes.LISTAR_TAREFAS, valorAtual);
      }
    })COPIAR CÓDIGO
Curtiu? Aqui tem mais detalhes sobre essa funcionalidade.

https://v3.vuejs.org/api/computed-watch-api.html#watch

@@05
Um Proxy para a todos monitorar

[00:00] Muito legal o que conseguimos fazer reagindo, com essa reatividade com o Vue. E olha só, está na hora agora de darmos um mergulho mais fundo e entendermos por debaixo dos panos o que o Vue faz para entregar isso pronto, nós só vamos lá e damos um watchEffect e a coisa acontece por debaixo dos panos.
[00:21] Vem comigo para o VS Code e vamos brincar um pouco de JavaScript para entendermos o que está acontecendo. Na raiz do projeto eu vou criar um novo arquivo chamado “reatividade.js”. Nesse cara eu vou criar um projeto const projeto = { > id: 1, > descricao: 'Alura Tracker 3.0'.

[00:54] E olha só, quando queremos observar e entender, ou executar, ou reagir, quando alguém pede ou define uma propriedade usamos a classe proxy, ela é nativa do JavaScript. É isso que o Vue utiliza por debaixo dos panos. Vamos criar esse proxy.

[01:14] Eu vou criar uma constante chamada proxy, const proxy. E o que esse cara vai receber? Um novo objeto, vamos dar um new nessa classe de proxy, const proxy = new Proxy. Repara que o VS Code já está me ajudando, a primeira coisa é o que ele chama de target, é o alvo, o objeto original.

[01:34] E o segundo aqui é o handler, o manipulador, (projeto, {. O que vamos dizer? Vamos ter duas funções, a primeira função é o get, get((). Esse get vai representar a função, alguém fez proxy.descricao, ele vai passar por aqui.

[01:52] O que temos aqui de parâmetro? A primeira coisa, teremos o objeto original, ou seja, o projeto da constante, objetoOriginal. E o segundo parâmetro é a chave, chave. Qual propriedade? É o ID, a descricao?

[02:10] O que vamos fazer é fazer um return objetoOriginal[chave]. Se alguém pedir o ID vamos retornar, se alguém pedir descrição vamos retornar. E além disso, vamos fazer um console.log, console.log. Vem comigo, vou interpolar aqui, console.log(Alguém pediu a chave ${chave} do projeto).

[02:46] E agora o segundo método é o que define o novo valor, vamos ter um set, set((). O set é a mesma coisa, ele tem um objeto original, ele tem a chave que o usuário quer definir, só que dessa vez ele tem um a mais, que é o valor, set(objetoOriginal, chave, valor).

[03:07] E vamos fazer a mesma coisa, vamos dizer objetoOriginal[chave] = valor. E também vamos fazer um console.log(Alguém alterou a chave ${chave} do projeto para o valor ${valor}). Teremos um código aqui reagindo a essas alterações.

[03:44] Eu tenho o proxy e eu tenho o objeto. Primeiro, vamos fazer o seguinte: eu venho no console e peço para ele fazer console.log(projeto.descricao). Repara, é o projeto, não é o proxy. Se pedirmos para o Node executar esse código. Vamos lá, node .\reatividade.js.

[04:06] Repara, eu estou na mesma pasta aqui, na pasta raiz. O que ele tem que fazer é fazer o console.log da descrição. Ele fez. E se eu mudar isso e pedir o proxy? console.log(proxy.descricao). Vou limpar o console.

[04:22] E vou executar novamente, node .\reatividade.js. Repara, Alguém pediu a chave da descrição, ele foi lá e fez o console.log inicial. E se antes de fazer isso, vamos alterar, eu vou dizer que proxy.descricao = 'Reatividade é mega bacana'.

[04:55] E vou executar de novo, node .\reatividade.js. Repara, a primeira coisa, “Alguém alterou a chave descrição do projeto para o valor reatividade é mega bacana”, “Alguém pediu a chave da descrição do projeto”. E por fim o valor em si que é Reatividade é mega bacana.

[05:14] Na hora em que puxamos aquela função ref que reagimos, o Vue sabe que ele precisa reagir, lá por baixo dos panos ele está utilizando esse proxy. É isso que ele está fazendo, ele define várias proxys, quando fazemos o ref passando o objetoOriginal ele faz isso por debaixo dos panos.

[05:45] E assim ele consegue reagir, ele mesmo já sabe o que ele tem que fazer, quando ele tem que fazer Lá na documentação, se você olhar lá no código fonte, você vai ver alguma coisa muito parecida com isso.

[05:58] Tem uma pequena diferença que quando no core, no repositório original, ele vai fazer alguma coisa do tipo ao invés de retornar direto o objetoOriginal ele vai retornar return Reflect.get(objetoOriginal. chave, receptor ). E tem um terceiro parâmetro que é o receiver, o receptor. E encaminhamos ele para o reflect.

[06:40] No set é bem parecido, isso aqui vai resolver alguns problemas de contexto do tipo this. alguma coisa. Vai ter alguma coisa ali no Saiba mais para você que quer dar um mergulho ainda maior, mas se você for curioso como eu e olhar lá na documentação do Vue, você vai ver alguma coisa muito parecido com isso daqui. É assim que o Vue faz a reatividade, ele tem proxys.

[07:08] Vamos analisar agora o código, "views > Tarefas.vue". Quando passamos, tudo bem que aqui é só uma string, nem é um objeto complexo, mas quando criamos uma referência, o que o Vue devolve é um proxy daquele objeto e não o objeto em si.

[07:28] Cada vez que definimos o valor dele, ele sabe que ele precisa executar alguma coisa, ele vai nas dependências e executa.

[07:36] Agora revelamos o truque de como esse coelho sai da cartola. É um mergulho mais fundo para irmos ao âmago do core do Vue e como essa reatividade funciona. Agora aprendemos que a reatividade nada mais é do que um proxy que é implementado no core do Vue.

[08:00] Muito bacana, espero que você mergulhe cada vez mais fundo nesse profissional em T, vamos saber bastante coisa e se especializa no front. Aqui estamos mergulhando no Vue e entendendo como funciona a reatividade.

@@06
Para saber mais: Proxy e Reflect

Primeiramente, que incrível ter você por aqui, isso é um sinal que você já não confia muito em mágicas e quer saber o que tem acontecido por detrás dos bastidores.
Aqui você confere a especificação do proxy, e todo o poder que ele tem. Já em relação ao Reflect, dá uma conferida aqui.

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Reflect

@@07
Code review

Durante suas atividades, chegaram alguns comentários sobre um trecho de código que você escreveu:
    const tarefas = computed(() =>
      store.state.tarefas.filter(
        (t) => !filtro.value || t.descricao.includes(filtro.value)
      )
    );COPIAR CÓDIGO
O comentário é o seguinte:

O método filter modifica o array inicial? Porque se isso acontecer, a cada filtro você pode perder alguns itens da lista. Talvez a documentação seja uma boa fonte de consulta.

Esse método sempre retorna um novo array com os elementos filtrados, não teremos essa problema, uma vez que o array original estará sempre disponível.
 
Alternativa correta! Exatamente! Parece repetitivo, mas a documentação SEMPRE ajuda. Às vezes pela pressa ficamos nas tentativas e erros até entender o que funciona ao invés de recorrer aos documentos disponíveis.
Alternativa correta
Na verdade, o correto seria utilizar o método find, para encontrar as tarefas, ao invés do método filter.
 
Alternativa correta
Ele modifica o array inicial, mas como as tarefas estão nas store ele não sofrerá com isso.

@@08
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@09
O que aprendemos?

Nessa aula, você aprendeu como:
Computed como filtro;
Utilizando o hook computed, conseguimos filtrar em memória as tarefas que continham o texto digitado pelo usuário.
Watch e WatchEffect;
Agora sim, reagindo a alterações no campo de busca, buscamos diretamente da API as tarefas que possuem determinada descrição.
Reatividade;
Procurando mergulhos cada vez mais fundo, descobrimos uma das formas de observarmos alterações em variáveis específicas e como reagir a elas.