<template>
  <div id="app">
    <HeaderPage />
    <BannerPrincipal />
    <VantagemBeneficio />
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-auto text-center">
          <h5 class="badge text-bg-success">ECONOMIA</h5>
          <h3 class="title-section"> Entenda como <br/>funciona a EcoCart</h3>
        </div>
      </div>
    </div>
    <MySwiperPage />
    <BannerSecondary />
    <FooterPage />
  </div>
</template>

<script>
import BannerPrincipal from './components/BannerPrincipal.vue';
import VantagemBeneficio from './components/VantagemBeneficio.vue';
import HeaderPage from './components/HeaderPage.vue';
import MySwiperPage from './components/MySwiperPage.vue';
import BannerSecondary from './components/BannerSecondary.vue';
import FooterPage from './components/FooterPage.vue';
export default {
  name: 'App',
  components: {
    HeaderPage,
    BannerPrincipal,
    VantagemBeneficio,
    MySwiperPage,
    BannerSecondary,
    FooterPage
  },
};
</script>

<style lang="scss">
@import './scss/main.scss';

.title-section{
      font-size:40px;
      font-weight: 800;
      margin-top: 48px;
      margin-bottom: 48px;
    }
</style>
