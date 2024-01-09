<div> 
  <h1 align="center">Spotify Clone - React👨‍💻</h1> 
</div>

<div>
  <h3 align="center">Clone de uma página do spotify, feita com React.</h3>
</div>

<div align='center'>
	<img src= "https://github.com/WillianOL/spotify-clone/assets/112639055/e5c6b75a-f274-47cc-b851-a7e89e55c4b9" width='850px'>
</div>


## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias:</p>
  <div>
    <img src= "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width='100px'>
    <img src= "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" width='147px'>
    <img src= "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" width='88px'>
  </div>
</div>



<div>
	<h2>Sobre o projeto📃</h2>
	<p>Essa é a primeira aplciação feita com React e SASS que eu fiz inteiramente sozinho. Trata-se de uma página do spotify com adapitação para mobile.</p>
	<p>No momento estou no começo dos estudos em React, então para treinar os conhecimentos que tenho até o momento em Hooks, componentes, events e props elaborei essa aplicação. No começo, minha maior dificuldade foi a estrutura de pastas do projeto, depois de tanto pensar acabei optando por separar cada componente em uma pasta com o componente e seu estilo (SASS).</p>
</div>

<div>
 <p></p>
</div>
 
### Deploy(vercel)✈

◻<a href="https://spotify-clone-zeta-kohl.vercel.app/">Spotify clone feito com React.</a>

&nbsp;
&nbsp;

## Explicação sobre o projeto

<div>
	<h3>Estrutura de pastas</h3>
	<p>Na organização da estrutura de pastas do projeto, optei por separar os componentes e suas devidas imagens(em alguns casos) em pastas, detro da pasta src. Por exemplo, o componente BarraLateral tem sua pasta com outros componentes que fazem parte dela, e cada componente da BarraLateral tem suas pastas com seus devidos estilos SASS. E assim segui esse padrão por todo o projeto.</p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/ea0211f7-f479-47bf-8bb6-c8c8108b87ed" width="250px">
  	</div>
</div>
&nbsp;
<div>
	<h3>Componentes</h3>
	<p>Cada componente tem sua finalizada e funcionalidade especifica, juntamente de seus estilos, isso foi o que achei mais incrivel no React, o fato de poder separar a aplicação em pequenas partes de código e juntar isso com o JSX/"HTML".</p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/e199ba2d-1da3-4a77-896b-9dc7a34b2829" width="250px">
  	</div>
</div>
&nbsp;
<div>
	<h3>Sidebar - barra lateral de navegação</h3>
	<p>A sidebar foi dividida em 3 componentes, que são: ListaNavegacao, Logo e Sobre. Dessa forma, cada componente tem sua finalidade especifica.</p>
	<div align="center">
		<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/c4bc98f3-3494-4d80-8100-bdfae62f61a7" width="650px">
  	</div>
	<div>
		<h4>Logo</h2>
		<p>O componente Logo é responsável por exibir a logo do spotify na barra lateral(sidebar), importando o svg da logo e passando ele como o src da tag img.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/4ff41800-9f18-4fea-a4d8-434eb0fcf000" width="650px">
			<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/6ef4f88b-d783-438d-9e82-a534a717af82" width="250px">
  		</div>
	</div>
	<div>
		<h4>ListaNavegacao</h2>
		<p>Nos botões de navegação da sidebar, optei por separar em dois componentes. Um é o componente pai ListaNav que retorna uma ul com os itens de navegação e o outro é o componente itemLista que retorna uma li com o botão montado. Dessa forma, ao invés de ficar escrevendo as li's, o componente itemLista recebe o icone e texto, ficando bem mais interessante. Os icones foram importados do react-icons.</p>
		<p>Ao clicar em um dos itens da sidebar, é executada a função selecionar que adicionar a classe ativo no item para ele ficar ativo e retira a classe dos demais que tiverem a classe, assim deixando um item por vez ativado.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/4f15dfb1-7515-428b-a97e-3dd02d2e38ac" width="650px">
			<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/5ab9cced-e67a-4e5a-b42e-88fbed033ee8" width="650px">
  		</div>
	</div>
</div>
























