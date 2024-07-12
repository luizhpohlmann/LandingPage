<template>
   <div class="container mb-5">
    <div class="row justify-content-center align-items-center">
        <div class="overlapBanner">
          <div class="row">
            <div class="col-12 col-md-6 mt-2 mt-md-5 ps-3 ps-md-5">
              <h1 class="text-white insight pt-3 ps-3"> <PhShoppingCart :size="24"/> PRATICIDADE </h1>
              <h2 class="text-banner text-white pt-3 ps-3 mb-5"> A Maneira mais <br/>fácil e econômica<br/>de fazer compras</h2>
              <span class="text-white ps-3">Disponível em</span>
              <div class="row justify-content-start mt-2 ps-3">
                <div class="col-xs-12 col-md-auto mb-2 mb-md-0"> 
                  <button class="btn btn-light"> <PhGooglePlayLogo :size="24" /> Google Play</button>
                </div>
                <div class="col-xs-12 col-md-auto">
                  <button href="" class="btn btn-light"> <PhAppleLogo :size="24" /> App Store</button>
                </div>
              </div>
              
            </div>
            <div class="col-12 col-md-6">
              <img src="@/assets/img/handWithSmartphone.png" alt="Ecocart" class="img-fluid handsUp">
            </div>
          </div>
        </div>
    </div>
   </div>
</template>
  
  <script>
  
  
  export default {
  name: 'BannerPrincipal',
  };
  </script>
  
  <style scoped>
    .overlapBanner{
      background-color: #008658;
      border-radius: 64px;
      height: 490px;
      position: relative;
      top:45px;
      padding:0px;
    }
    .handsUp{
      position: relative;
      top: -52px;
      left:-50px;
    }
    .insight{
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: 300;
    }
    .text-banner{
      font-size:48px;
      font-weight: 800;
    }
    /* Media query para dispositivos móveis */
    @media (max-width: 768px) {
      .overlapBanner{
        border-radius: 0;
        height: 490px;
        top:0px;
      }

      .text-banner {
        font-size: 24px; /* Ajuste o tamanho da fonte conforme necessário */
      }

      .handsUp{
        position: relative;
        top: -167px;
        left:15px;
      }
    }

  </style>
  