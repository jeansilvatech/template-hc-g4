# Hiring coders 3 - Desafio fase 3 

Aqui, apresentamos os trabalhos desenvolvidos pela equipe 4 da casa Bitsized. Descrevemos também critérios organizacionais da equipe para serem avaliados no primeiro item dos Critérios de Avaliação da Fase 3, "Organização de Tarefas". 

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

O frontend desta aplicação consiste uma uma loja virtual, construída utilizando-se da plataforma VTEX.

Além das funcionalidades típicas de uma loja VTEX, foi implementado um sistema de pontos de fidelidade, em que o usuário ganhar 1 ponto a cada real gasto.

O usuário consegue visualizar os pontos ganhos da área "Minha Conta".


- **Back-end:** 

O backend desta aplicação consiste em uma API construída utilizando-se da plataforma VTEX.

A API possui as seguintes rotas:

_v/get-points
Recebe nos headers da requisição o token de sessão do usuário que faz compra, e retorna a quantidade de pontos acumulados.

_v/debit-points
Recebe nos headers da requisição o token de sessão do usuário que faz que deseja fazer o débito dos pontos. Recebe no corpo da requisição a quantidade de pontos que deseja debitar, e havendo saldo suficiente, faz o débito e retorna o saldo remanescente.

Há também um serviço que ouve os eventos de alteração de status das compras, e sempre que o novo status é "pagamento aprovado" ou "cancelado", a pontuação referente à compra é creditada ou removida do saldo do usuário.


## Estudo de ferramentas a serem utilizadas

## Criação e distribuição de tarefas

## Dificuldades no desenvolvimento

## Apresentação da loja

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

  
- Eryck Carlos Santana Braga 
  
<p align='center'>
  <a href="#" target="_blank">
    <img align="left" src="https://img.shields.io/badge/Github-423f6d?style=for-the-badge&logo=github&logoColor=753ed2" />        
  </a>&nbsp;&nbsp;
  <a href="#" target="_blank">
    <img align="left" src="https://img.shields.io/badge/LinkedIN-423f6d?style=for-the-badge&logo=linkedin&logoColor=753ed2" />
  </a>&nbsp;&nbsp;
</p>

  
- Filipe Carneiro de Almeida
  
<p align='center'>
  <a href="#" target="_blank">
    <img align="left" src="https://img.shields.io/badge/Github-423f6d?style=for-the-badge&logo=github&logoColor=753ed2" />        
  </a>&nbsp;&nbsp;
  <a href="#" target="_blank">
    <img align="left" src="https://img.shields.io/badge/LinkedIN-423f6d?style=for-the-badge&logo=linkedin&logoColor=753ed2" />
  </a>&nbsp;&nbsp;
</p>

- Pedro Quintino
  
<p align='center'>
  <a href="#" target="_blank">
    <img align="left" src="https://img.shields.io/badge/Github-423f6d?style=for-the-badge&logo=github&logoColor=753ed2" />        
  </a>&nbsp;&nbsp;
  <a href="#" target="_blank">
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
