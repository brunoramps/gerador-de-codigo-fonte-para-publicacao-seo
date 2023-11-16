const cc = `<section class="personalizado">
<div class="personalizado-banner">
  <div class="row align-center">
    <div class="columns perso-large-10">
      <div class="personalizado-banner-background">
        <h2 class="personalizado-titulo-text">${tituloGeral}</h2> 
        <div class="personalizado-titulo-border"></div>
        <p class="personalizado-text banner-bibliografia-text">
         ${textoTitulo}
        </p>         
      </div>
    </div>
  </div>
</div>

<div class="personalizado-informacao">
  <div class="row align-center">
    <div class="columns large-10">
      <div class="personalizado-main-informacao item-1">
        <div class="personalizado-informacao-texts item-1">
          <h2 class="personalizado-informacao-texts-titulo">${tituloPrimeiroBloco}</h2>
          <p class="personalizado-text informacao-text">
            ${textoPrimeiroBloco}
          </p>            
        </div>
        <div class="personalizado-informacao-img">
          <img 
            src="${imagemPrimeiroBloco}" 
            alt="${altImagemPrimeiroBloco}" 
          >
        </div>
      </div>

      <div class="personalizado-main-informacao item-2">
        <div class="personalizado-informacao-texts item-2">
          <h2 class="personalizado-informacao-texts-titulo">${tituloSegundoBloco}</h2>
          <p class="personalizado-text informacao-text">
            ${textoSegundoBloco}
          </p>           
        </div>
        <div class="personalizado-informacao-img">
          <img 
            src="${imagemSegundoBloco}" 
            alt="${altImagemSegundoBloco}" 
          >
        </div>
      </div>
    </div>
  </div>
</div>

<div class="personalizado-banner-2">
  <div class="row align-center">
    <div class="columns perso-large-10">
      <div class="personalizado-banner-background bk-banner-2 flex-banner">
        <div class="personalizado-banner-texts txt-banner-2">
          <h2 class="personalizado-titulo-text">${tituloTerceiroBloco}</h2> 
          <div class="personalizado-titulo-border border-banner-2"></div>
          <p class="personalizado-text banner-bibliografia-text">
          ${textoTerceiroBloco}
          </p>            
        </div>
        <img
          class="img-banner" 
          src="${imagemTerceiroBloco}" 
          alt="${altImagemTerceiroBloco}" 
        >
      </div>
    </div>
  </div>
</div>

<div class="personalizado-informacao">
  <div class="row align-center">
    <div class="columns large-10">
      <div class="personalizado-main-informacao item-1">
        <div class="personalizado-informacao-2-texts">
          <h2 class="personalizado-informacao-texts-titulo">${tituloEsquero}</h2>
          <p class="personalizado-text informacao-text">
           ${textoBlocoEsquerdo}
          </p>
        </div>

        <div class="personalizado-informacao-2-texts">
          <h3 class="personalizado-informacao-texts-titulo">${tituloDireito}</h3>
          <p class="personalizado-text informacao-text">
            ${textoBlocoDireito}
          </p>
        </div>
      </div>

      
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="personalizado-banner">
  <div class="row align-center">
    <div class="columns perso-large-10">
      <div class="personalizado-banner-background flex-banner">
        <div class="personalizado-banner-texts txt-banner-3">
          <h2 class="personalizado-titulo-text">${tituloQuintoBloco}</h2> 
          <div class="personalizado-titulo-border"></div>
          <p class="personalizado-text banner-bibliografia-text">
            ${textoQuintoBloco}
          </p>            
        </div>
        <img
          class="img-banner" 
          src="${imagemQuintoBloco}" 
          alt="${altImagemQuintoBloco}" 
        >
      </div>
    </div>
  </div>
</div>

</section>`;

export default codigoFonte;