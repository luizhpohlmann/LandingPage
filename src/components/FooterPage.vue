<template>
    <footer class="footer mt-md-5 mt-2 pb-4">
      <div class="container">
        <!-- Linha -->
        <div class="row align-items-center mb-3">
          <div class="col-xs-12 col-md-6 text-md-start text-center mb-4 mb-md-2">
            <img src="@/assets/img/logo.png" alt="Ecocart" class="footer-logo">
          </div>
          <div class="col-xs-12 col-md-6 text-md-end text-center">
            <a  class="me-3"><PhInstagramLogo :size="24" /></a>
            <a  class="me-3"><PhFacebookLogo :size="24" /></a>
            <a  class="me-3"><PhTiktokLogo :size="24" /></a>
            <a  class="me-3"><PhYoutubeLogo :size="24" /></a>
            <a  class=""><PhLinkedinLogo :size="24" /></a>
          </div>
        </div>
        <!-- Linha -->
        <div class="row align-items-center">
          <div class="col-md-6 text-md-start mt-2 mb-md-0">
            <p class="mb-0">&copy; 2024 Ecocart. Todos os direitos reservados.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <a  class="me-4">Política de Privacidade</a>
            <a  class="">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterPage',
  };
  </script>
  
  <style lang="scss" scoped>
  .footer {
    .footer-logo {
      width: 100px;
    }
    a {
      color: #133D35;
      &:hover {
        text-decoration: none;
      }
    }
  }
  </style>