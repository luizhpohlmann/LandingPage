<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <h3 class="title-section">Vantagens e benefícios <br/> que vão muito além de <br/> um clique</h3>
      </div>
    </div>
  </div>
  <div class="container-fluid py-5">
    <div class="row content-justify-center">
      
      <div class="col-12 col-md-6">
        <img src="@/assets/img/manSmile.png" alt="Economia" class="img-fluid">
      </div>
      <div class="col-12 col-md-6 pt-md-5">
        <ListCards />
      </div>
    </div>
  </div>
</template>
  
  <script>
  import ListCards from './ListCards.vue';

  export default {
    name: 'VantagemBeneficio',
    components: {
      ListCards
    }
  };
  </script>
  
  <style scoped>
    .title-section{
      font-size:40px;
      font-weight: 800;
      margin-top: 48px;
      margin-bottom: 48px;
    }
    /* Media query para dispositivos móveis */
    @media (max-width: 768px) {
      .title-section{
        font-size:20px;
        font-weight: 800;
        margin-top: 24px;
        margin-bottom: 24px;
      }
    }
  </style>
  