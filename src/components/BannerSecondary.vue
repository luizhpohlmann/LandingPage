<template>
    <section class="bg-primary wrapper-banner">
      <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-12 col-md-6 ps-5">
              <h1 class="text-white font-weight-bold pt-3"> Baixe o app gratuitamente</h1>
              <p class="text-white pt-3 pb-5"> Economize nas suas compras do mercado</p>
              <div class="row justify-content-start pt-2 d-none d-md-flex">
                <div class="col-xs-6 col-md-6"> 
                  <button class="btn btn-light"> <PhGooglePlayLogo :size="24" /> Google Play</button>
                </div>
                <div class="col-xs-6 col-md-6">
                  <button href="" class="btn btn-light"> <PhAppleLogo :size="24" /> App Store</button>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-6">
              <img src="@/assets/img/download.png" alt="Download Ecocart" class="img-fluid smartphoneUp">
            </div>
            
        </div>
        <div class="row justify-content-center pt-2 d-md-none d-flex">
                <div class="col-auto col-md-6"> 
                  <button class="btn btn-light"> <PhGooglePlayLogo :size="24" /> Google Play</button>
                </div>
                <div class="col-auto col-md-6">
                  <button href="" class="btn btn-light"> <PhAppleLogo :size="24" /> App Store</button>
                </div>
              </div>
      </div>
    </section>
</template>
   
   <script>
   
   
   export default {
   name: 'BannerSecondary',
   };
   </script>
   
   <style scoped>
    .wrapper-banner{
      width:100%;
      height:630px;
    }
    .bg-primary{
      background:#008658!important;
    }  
    .smartphoneUp{
      position: relative;
      top: -62px;
      left:-50px;
    }
     /* Media query para dispositivos móveis */
     @media (max-width: 768px) {
      .wrapper-banner{
      width:100%;
      height:730px;
      }

      .smartphoneUp{
        position: relative;
        top: -62px;
        left:0px;
      }
     }
   </style>
   