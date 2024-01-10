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
	<div>
		<h4>Sobre</h4>
		<p>O sobre retorna uma section com dois componentes, a lista de itens do sobre <strong>ListaPrivacy</strong> e o botão de troca de idioma <strong>BotaoIdioma</strong>. O botão recebe a prop idioma.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/1061f4a9-55dd-4444-ac8e-e19ff6185963" width="650px">
  		</div>
		&nbsp;
		<p>O botão é simples, apenas recebendo a propriedade idioma e retornando um button com o idioma nele. E junto colocando um icone do react-icons.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/589539ce-1608-4721-8fac-56f790668a1e" width="650px">
  		</div>
		&nbsp;
		<p>Para a construção da lista, defini um array que contem dois arrays dos itens que vão ser exibidos. E no return do componente defini uma ul e dentro dela realizei map da lista. Dentro do map, retornei uma li e dentro dela realizei outro map com o argumento da interação anterior(que no caso é a lista de itens). A partir disso, no map da li retornei um p para cada item da array. Finalizando a construção da lista.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/54aadfcc-2c72-42a6-94b4-fe8d2be0d15a" width="650px">
  		</div>
	</div>
	&nbsp;
	<div>
		<h3>Vitrine de playlists - Grid das músicas</h2>
		<p>O conponente da grid das músicas <strong>musicasConteiner</strong> retorna uma main e foi dividido em dois componentes. Um é o Header e o outro é a SectionMusic onde ficam as listas das playlists.</p>
		<div align="center">
			<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/0250a340-a62d-4bd8-9423-a88fe4ff3c40" width="650px">
			<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/24464723-0a6a-4ff5-81f7-dc3372e8c866" width="250px">
  		</div>
		<div>
			<h4>Header</h4>
			<p>O Header possui três componentes em sua composição.</p>
			<ul>
				<li>ButtonMobile - Botão para abrir a sidebar em aparelhos mobile;</li>
				<li>BotoesLogin - Botões de login e registro no header;</li>
				<li>MenoMobile - sidebar para mobile(menu mobile);</li>
			</ul>
			<p>Para a funcionalidade do menu mobile, utilizei o hook useState para definir um estado que começa como false [ativo, setAtivo]. Depois, passei o <strong>ativo</strong> e <strong>setAtivo</strong> como prop no componente ButtonMobile e passei a variável ativo no menuMobile.</p>
			<div align="center">
				<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/f5cdd543-cc6f-40b0-b634-c907a708066a" width="650px">
				<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/4d51f70c-2beb-46de-a0c9-ffcd16101396" width="250px">
  			</div>
			&nbsp;
			<p>No componente ButtonMobile, retorna um botão que tem um evento de click adicionado a ele. Quando o botão é clicado a função abrirMenu é executada e nele a função modificadora de estado(setAtivo) muda o estado do ativo para o contrario dele, dessa forma se for true muda pra false e assim por diante. Resolvi passar a variável de estado junto pois com ela irei mudar o icone do botão do menu para um X ou os três traços.</p>
			<div align="center">
				<img align="center" src="https://github.com/WillianOL/spotify-clone/assets/112639055/47b0ccd9-494f-46c8-9fd2-93b929bf2ffc" width="650px">
  			</div>
		</div>
	</div>
</div>
































