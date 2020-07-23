# TCC 10
Repositório do projeto TCC 10

### Estrutura do projeto

.
├── App.js // Arquivo de inicialização da execuçao, não programaremos nele, apenas para configurações necessária a nível de raiz.
...
├── assets // Arquivo de imagens ou recursos estáticos
│   ├── favicon.png
│   ├── icon.png
│   ├── img
│   │   ├── background2.jpg
│   │   └── background.jpg
│   └── splash.png
...
└── src //Pasta que colocaremos nossos cógidos
    ├── components // Componentes utilizados nas páginas que podem ser reaproveitados
    │   ├── CollapsingToolBar.js
    │   ├── CustomGridMenu.js
    │   ├── CustomHeader.js
    │   └── CustomNavigation.js
    ├── Main.js // Arquivo de inicialização da execução para configurações de navegação
    ├── pages // Paginas de exbição no App
    │   ├── AbstractPage.js
    │   ├── DisciplinaPage.js
    │   ├── HomePage.js
    │   └── NormasPage.js
    └── style // Estilos comuns ao projeto.
        └── Colors.js
        
  
### Padronizações

#### Page
Arquivos de paginas deve possuir o sufixo "Page". Exemplo: HomePage.js, DisciplinaPage.js.Neste arquivos serão colocado as páginas exibidas na aplicação. 
Uma pagina deve ser escrita na forma de Class Component e deve seguir a seguinte estrutura:

```javascript

import  React, {Component} from 'react'
import { Container, Body, Content } from 'native-base'
import { Text } from 'react-native'
import CustomHeader from '../components/CustomHeader'
import * as Navigation from '../components/CustomNavigation'


export default class NomePage extends Component{
    static PAGE_NAME = "/Nome";
    
    
    static active(param=undefined){
        console.log(`${this.PAGE_NAME} actived with param ${param}`)
        Navigation.navigate({name:this.PAGE_NAME,param:param})
    }

    render(){
        return(
            <Container>
                <CustomHeader title="Nome da Pagina" subtitle="Subtitulo do nome"/>
                <Content>
                    <Text>"Está é a página nome"</Text>
                </Content>
            </Container>
        )
    }
}

```
Onde "nome" é o nome da página.

#### Componets
Os componetes adicionais (que não forem páginas) devem, **SE POSSÍVEL**, serem criados como Function Component.
É muito importante que todos os componentes tenha a documentação do seu modo de uso. *(Estou colocando a documentação dos meus ainda)*

### Navegação
A navegação é algum bem aberto ainda. Estou optando pela [navegação sem *props*] (https://reactnavigation.org/docs/navigating-without-navigation-prop) pode ser que mude no decorre do projeto, pois é uma novidade para mim. Assim a navegação é feita atraves do componente CustomNavigation, que possui vários métodos
semelhantes ao *props.navigation* a diferença é que podemos acessar ele em qualquer local. 

Dessa forma nossa navegação é criada na propria Page, que possui os seguinte elementos staticos:

PAGE_NAME : é a constante com o nome da página, utilizada para configurar nossa navegação. Por pradão essa constante tem o valor da "/NomeDaPaginaSemOPage"
ACTIVE({params}): é o método que faz a navegação ir para a página em questão. O método é padrão identico e semelhante em todas as pages.

> No futuro vou criar um classe abstrata que já contenha esses elementos. Sendo necessário apenas herdar.

Assim uma página é colocada como navegável(screen) da seguinte forma 
```javascript
<Stack.Screen name={NomePage.PAGE_NAME} component={NomePage}/>
```
E ele pode ser acionada em qualquer lugar do código da seguinte forma:
```javascript
NomePage.active()
```

### TODO
- Pagina de Login
- Pagina de Cadastro
- Pagina de Normas 


#### Pagina de login

- Apresenta a tela para o usuário digitar o seu usuário e a senha, como também a opção para ir para a página de cadastro. Caso, não seja cadastrado
- Deve possuir, posteriormente uma rotina para quem esquecer a senha e entra pelo google ou facebook

#### Pagina de Cadastro

- Deve apresentar as telas para o usuário digita os seus dado (usuário,senha,nome,email,telefone)
- Deve verificar se não existe um usuário com o mesmo id cadastrado.
- Deve cadastrar o usuário no banco.

#### Página de Normas

- Deve criar um lista de normas da ABNT que ao ser acionado algum elemento da lista ele leve o usuário para a página do elemento.
- Fazer uma lista com algumas normas comuns e, ao clicar no elemento da lista, é exibida uma explicação da norma. Escolha pelo menos 10 normas de ABNT que deseja explicar



















