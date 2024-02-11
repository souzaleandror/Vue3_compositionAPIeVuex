#### 11/02/2024

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