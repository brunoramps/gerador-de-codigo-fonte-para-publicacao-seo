function gerarCodigoFonte(){
    const form = document.querySelector('.form');
    let botao = form.querySelector('#btn-reset');

    
    function recebeEventoForm(evento){
        
        //Alterando o texto do botão de Copiar
        botao.innerHTML = `Copiar código-fonte`;
        
        //Selecionando os componentes do html

        //pegando valores do primeiro bloco
        const imagemPrimeiroBloco = form.querySelector('#imagemPrimeiroBloco').value;
        const tituloPrimeiroBloco = form.querySelector('#tituloPrimeiroBloco').value;
        const textoPrimeiroBloco = form.querySelector('#textoPrimeiroBloco').value;
        const altDaPrimeiraImagem = form.querySelector('#altImagemPrimeiroBloco').value;
        
        //pegando valores do segundo bloco
        const tituloSegundoBloco = form.querySelector('#tituloSegundoBloco').value;
        const textoSegundoBloco = form.querySelector('#textoSegundoBloco').value;        
        
        //pegando valores do terceiro bloco
        const imagemTerceiroBloco = form.querySelector('#imagemTerceiroBloco').value;
        const tituloTerceiroBloco = form.querySelector('#tituloTerceiroBloco').value;
        const textoTerceiroBloco = form.querySelector('#textoTerceiroBloco').value;
        const altDaTerceiraImagem = form.querySelector('#altImagemTerceiroBloco').value;
        
        //pegando valores do quarto bloco
        const tituloQuartoBloco = form.querySelector('#tituloQuartoBloco').value;
        const textoQuartoBloco = form.querySelector('#textoQuartoBloco').value;
        const ImagemQuartoBloco = form.querySelector('#ImagemQuartoBloco').value;
        const altDaQuartaImagem = form.querySelector('#altImagemQuartoBloco').value;

        //pegando valores do quinto bloco
        const ImagemQuintoBloco = form.querySelector('#ImagemQuintoBloco').value;
        const tituloQuintoBloco = form.querySelector('#tituloQuintoBloco').value;
        const textoQuintoBloco = form.querySelector('#textoQuintoBloco').value;
        const altDaQuintaImagem = form.querySelector('#altImagemQuintoBloco').value;
        
        //pegando valores do quinto bloco
        const ImagemSextoBloco = form.querySelector('#ImagemSextoBloco').value;
        const tituloSextoBloco = form.querySelector('#tituloSextoBloco').value;
        const textoSextoBloco = form.querySelector('#textoSextoBloco').value;
        const altDaSextaImagem = form.querySelector('#altImagemSextoBloco').value;
        
        //Inserindo o código-fonte na variável codigoFonte e já adionando os valores das variáveis
        let codigoFonte = `<div class="flex-container">
        <div class="container-texto">
          <h3 class="descricao-titulo">${tituloPrimeiroBloco}</h3>
          <div class="descricao-texto">
            <p>${textoPrimeiroBloco}</p>
          </div>
        </div>
        <img src="${imagemPrimeiroBloco}" alt="${altDaPrimeiraImagem}"
          width="598" height="395" />
      </div>
      <div class="flex-container">
      <div class="container-texto" style="margin: 20px 0;">
        <h3 class="descricao-titulo">${tituloSegundoBloco}</h3>
        <div class="descricao-texto">
          <p>${textoSegundoBloco}</p>
        </div>
      </div>
    </div>   
    <div class="section-background"
    style="background-color: #e4e9ed; background-image: url(\'${imagemTerceiroBloco}\'); height: 478px;">
    <div class="row">
      <div class="mobileOnly columns small-12 medium-5">
        <img src="${imagemTerceiroBloco}" alt="${altDaTerceiraImagem}" />
      </div>
      <div class="columns small-12 medium-7">
        <h3 class="descricao-titulo">${tituloTerceiroBloco}</h3>
        <div class="descricao-texto">
          <p>${textoTerceiroBloco}</p>
        </div>

      </div>
    </div>
  </div> 
  <div class="section-background"
      style="background-color: #0d1018; background-image: url(\'${ImagemQuartoBloco}\'); height: 310px;">
      <div class="row">
        <div class="container-texto order-mobile-2 columns small-12 large-7" style="color: #ffffff;">
          <h3 class="descricao-titulo" style="color: #ffffff;">${tituloQuartoBloco}</h3>
          <div class="descricao-texto">
            <p>${textoQuartoBloco}</p>
          </div>
        </div>
        <div class="mobileOnly order-mobile-1 columns small-12 large-5">
          <img src="${ImagemQuartoBloco}"
            alt="${altDaQuartaImagem}" />
        </div>
      </div>
    </div>
    <div class="flex-container">
    <img src="${ImagemQuintoBloco}" alt="${altDaQuintaImagem}" />
    <div>
      <div class="container-texto" style="margin-bottom: 48px;">
        <h3 class="descricao-titulo">${tituloQuintoBloco}</h3>
        <div class="descricao-texto">
          <p>${textoQuintoBloco}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="section-background" style="background-color: #f5f5f5; height: 429px;">
  <div class="flex-container" style="color: #060b10;">
    <div class="order-mobile-2">
      <div class="container-texto">
        <h3 class="descricao-titulo">${tituloSextoBloco}</h3>
        <div class="descricao-texto">
          <p>${textoSextoBloco}</p>
        </div>
      </div>
    </div>
    <img class="order-mobile-1"
      src="${ImagemSextoBloco}" alt="${altDaSextaImagem}" />
  </div>
</div>
    `;

        //Definindo o valor da variável codigoFonte no elemento html textarea (adicionando o valor da variável na página)
        caixaDeTexto.innerHTML = codigoFonte;

        //Prevenir que a página recarregue quando o formulário for enviado
        evento.preventDefault();
    }

    //Escutando o evento de enviar o formumlário
    form.addEventListener('submit', recebeEventoForm);

    //Escutando o evento de resetar o formulário
    form.addEventListener('reset',copiarTexto);
    function copiarTexto(evento) {
       
        //Impedindo o formulário de recarregar
        evento.preventDefault();
        // pegando o elemento
        let copyText = document.getElementById("cod");
      
        // Selecionando todo o texto dentro do textarea
        copyText.select();
        copyText.setSelectionRange(0, 99999); //Se for mobile, isso vai ajudar
      
        //Copiando o conteúdo selecionado
        document.execCommand("copy");

        //Avisando que foi copiado
        //alert('Copiado!');

        //Limpando a caixa após copiar
        caixaDeTexto.innerHTML= "";
        
        //Alterando o texto do botão de Copiar
        botao.innerHTML = `Copiado!`;

      }
}
gerarCodigoFonte();

//vinculando um elemento html de id cod a uma variável chamada caixaDeTexto
let caixaDeTexto = document.getElementById('cod');