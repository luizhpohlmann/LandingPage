<template>
    <div class="row justify-content-center align-items-center">
      <CardPage
        v-for="(card, index) in cards"
        :key="index"
        :image="card.image"
        :title="card.title"
        :text="card.text"
        :backgroundColor="card.backgroundColor"
      />
    </div>
  </template>
  
  <script>
  import CardPage from './CardPage.vue';
  
  export default {
    name: 'ListCards',
    components: {
      CardPage
    },
    data() {
      return {
        cards: [
          { image: '@/assets/img/comparar.png', title: 'Comparação de preços', text: 'Compare preços entre diferentes mercados e economize tempo e dinheiro.', backgroundColor: '#D9E8CF' },
          { image: '@/assets/img/coin.png', title: 'Ofertas', text: 'Aproveite ofertas exclusivas e promoções especiais diretamente no app.', backgroundColor: '#EEF5E9' },
          { image: '@/assets/img/basket.png', title: 'Variedade de produtos', text: 'Tenha acesso a uma vasta gama de produtos de diversos mercados.', backgroundColor: '#D9E8CF' },
        
        ] 
      };
    }
  };
  </script>
  
  <style scoped>
  .cards-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  </style>
  