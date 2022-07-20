# Hiring coders 3 - Desafio fase 3 

- Repositório blocos customizados de pontos:
  
<br />

<p align='center'>
  <a href="https://github.com/bitsizedg4/bloco-pontos-g4" target="_blank">
    <img align="left" src="https://img.shields.io/badge/Github-423f6d?style=for-the-badge&logo=github&logoColor=753ed2" />        
  </a>

<br />
<br />
<br />

Aqui, apresentamos os trabalhos desenvolvidos pela equipe 4 da casa Bitsized. Descrevemos também critérios organizacionais da equipe para serem avaliados no primeiro item dos Critérios de Avaliação da Fase 3, "Organização de Tarefas". 

A seguir, apresentamos um fluxograma contendo as atividades desenvolvidas pela equipe, tais atividades podem ser vistas com detalhes logo mais abaixo.

```mermaid
graph 
A(Apresentação do desafio) --> B(Identificação dos pontos fortes dos membros da equipe);
B --> D(Estudo de ferrametas a serem utilizadas);
D --> E(Criação e distribuição de tarefas);
E --> F(Desenvolvimento);
F --> G{Testes};
G --erro encontrado--> F;
G --Testes concluidos com sucesso--> H((Entrega do Projeto))
```

## Índice
- [Cenário](#Cenário)

- [Identificação de Pontos Fortes da Equipe](#Identificação-de-Pontos-Fortes-da-Equipe)
- [Estudo de ferramentas a serem utilizadas](#Estudo-de-ferramentas-a-serem-utilizadas)
- [Criação e distribuição de tarefas](#Criação-e-distribuição-de-tarefas)
- [Dificuldades no desenvolvimento](#Dificuldades-no-desenvolvimento)
- [Apresentação da loja](#Apresentação-da-loja)
- [Considerações finais](#Considerações-finais)
- [Membros da equipe](#Membros-da-equipe)

## Cenário
Na quarta-feira,13 de julho de 2022, os estudantes da Fase 3 do Hiring Coders 3 foram incumbidos de utilizarem os conhecimentos construídos nas fases anterios do programa para elaboração de um projeto a ser entregue em uma semana, 20 de julho de 2022. A seguir, expomos o desafio que nos foi proposto pelos organizadores do evento.

>Maria tem uma loja e quer implementar um modelo de recompensa. A cada R$1,00 gasto deve gerar 1 ponto de recompensa. Todo consumidor precisa saber quantos pontos tem em sua carteira virtual, logo um contador deve estar visível para validação do saldo.</br>
Maria não está preocupada com o uso dos pontos após a geração, pois ela já possui um sistema no qual o usuário final pode utilizar os pontos gerados, mas esse sistema demanda uma API para consultar o saldo e outra para debitar um valor.

## Identificação de Pontos Fortes da Equipe
No dia seguinte a liberação do desafio, 14 de julho de 2022, a equipe 4 da casa Bitsized se reuniu para discusão dos pontos fortes de seus membros e divisão de subequipes. A Divisão se deu dessa forma:

- **Front-end:**
Jean e Filipe

- **Back-end:**
Danilo, Ericky e Christiany

## Estudo de ferramentas a serem utilizadas

Após a organização dos times de Front-end e back-end, a equipe 4 fez um estudo minucioso do cenário/problema apresentado para levantamento das tecnologias a serem utilizadas. A seguir, listamos as tecnologias utilizadas no desenvolvimento deste trabalho:

- [VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/welcome)
- [NodeJS](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [API de Pedidos](https://developers.vtex.com/vtex-rest-api/reference/getorder)
- [API do Masterdata](https://developers.vtex.com/vtex-rest-api/reference/master-data-api-v2-overview)
 

## Criação e distribuição de tarefas
Tendo em mente os times (back-end e front-end) e as tecnologias a serem utilizadas, o próximo passo, naturalmente, foi a distribuição de tarefas. A seguir, exibimos as tarefas de cada time:

- **Back-end**:
> O backend desta aplicação consiste em uma API construída utilizando-se da plataforma VTEX.

A API possui as seguintes rotas:

_v/get-points Recebe nos headers da requisição o token de sessão do usuário que faz compra, e retorna a quantidade de pontos acumulados.

_v/debit-points Recebe nos headers da requisição o token de sessão do usuário que faz que deseja fazer o débito dos pontos. Recebe no corpo da requisição a quantidade de pontos que deseja debitar, e havendo saldo suficiente, faz o débito e retorna o saldo remanescente.

Há também um serviço que ouve os eventos de alteração de status das compras, e sempre que o novo status é "pagamento aprovado" ou "cancelado", a pontuação referente à compra é creditada ou removida do saldo do usuário.

-**Front-end**  
> O frontend desta aplicação consiste uma uma loja virtual, construída utilizando-se da plataforma VTEX.

Além das funcionalidades típicas de uma loja VTEX, foi implementado um sistema de pontos de fidelidade, em que o usuário ganhar 1 ponto a cada real gasto.

O usuário consegue visualizar os pontos ganhos da área "Minha Conta".

## Dificuldades no desenvolvimento
Dificuldades podem surgir no desenvolvimento de qualquer projeto, esse não foi diferente. A equipe 4 da casa Bitsized avalia que transpor obstáculos é, sobretudo, uma forma de aprimorar os conhecimentos construídos e descobrir novas soluções. Tendo em vista a importância dos obstáculos no processo de construção do saber, optamos por evidenciar algumas das dificuldades enfrentadas pela equipe e quais soluções foram encontradas, uma vez que este material pode vir a servir de objeto de estudos para  futuros desenvolvedores.


## Apresentação da loja
![image](https://user-images.githubusercontent.com/109427932/179981228-10a45bb5-2947-46e4-a023-18289be23449.png)
![image](https://user-images.githubusercontent.com/23384348/180076667-776c27bf-35d9-4e40-ac5b-8133eab33dd1.png)
![image](https://user-images.githubusercontent.com/109427932/179981697-04498c73-cc18-4759-be8e-ce78124b323a.png)
![image](https://user-images.githubusercontent.com/109427932/179981801-a21f3463-aec7-46dc-b6ed-858bab41e5c4.png)


## Considerações finais

## Membros da equipe

A seguir, listamos os membros de nossa equipe, por favor, fique a vontade para visitar as nossas redes sociais e entrar em contato.

<h2>Membros:</h2>

- Christiany Belini Goulart Delfin

<p align='center'>
  <a href="https://github.com/tianygoulart" target="_blank">
    <img align="left" src="https://img.shields.io/badge/Github-423f6d?style=for-the-badge&logo=github&logoColor=753ed2" />        
  </a>&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/christiany-belini-goulart/" target="_blank">
    <img align="left" src="https://img.shields.io/badge/LinkedIN-423f6d?style=for-the-badge&logo=linkedin&logoColor=753ed2" />
  </a>&nbsp;&nbsp;
</p>

  
- Danilo Antunes
  
<p align='center'>
  <a href="https://github.com/antunesdanilo" target="_blank">
    <img align="left" src="https://img.shields.io/badge/Github-423f6d?style=for-the-badge&logo=github&logoColor=753ed2" />        
  </a>&nbsp;&nbsp;
  <a  href="https://www.linkedin.com/in/danilo-lima-antunes/" target="_blank">
    <img align="left" src="https://img.shields.io/badge/LinkedIN-423f6d?style=for-the-badge&logo=linkedin&logoColor=753ed2" />
  </a>&nbsp;&nbsp;
</p>

  
- Erick Carlos Lopes Santana Braga 
  
<p align='center'>
  <a href="https://github.com/erickystn" target="_blank">
    <img align="left" src="https://img.shields.io/badge/Github-423f6d?style=for-the-badge&logo=github&logoColor=753ed2" />        
  </a>&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/erickystn" target="_blank">
    <img align="left" src="https://img.shields.io/badge/LinkedIN-423f6d?style=for-the-badge&logo=linkedin&logoColor=753ed2" />
  </a>&nbsp;&nbsp;
</p>

  
- Filipe Carneiro de Almeida
  
<p align='center'>
  <a href="https://github.com/filipecalm" target="_blank">
    <img align="left" src="https://img.shields.io/badge/Github-423f6d?style=for-the-badge&logo=github&logoColor=753ed2" />        
  </a>&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/filipecalm/" target="_blank">
    <img align="left" src="https://img.shields.io/badge/LinkedIN-423f6d?style=for-the-badge&logo=linkedin&logoColor=753ed2" />
  </a>&nbsp;&nbsp;
</p>

  
- Jean Silva
  
<p align='center'>
  <a href="https://github.com/jeansilvatech" target="_blank">
    <img align="left" src="https://img.shields.io/badge/Github-423f6d?style=for-the-badge&logo=github&logoColor=753ed2" />        
  </a>&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/jeanpesil/" target="_blank">
    <img align="left" src="https://img.shields.io/badge/LinkedIN-423f6d?style=for-the-badge&logo=linkedin&logoColor=753ed2" />
  </a>&nbsp;&nbsp;
</p>
