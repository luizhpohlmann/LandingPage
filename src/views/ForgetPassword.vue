<!-- src/views/ForgetPassword.vue -->
<template>
    <section class="forgetpass">
        <div class="container-fluid">
            <div class="row g-0 content-justify-center align-items-center">
                
                <div class="col-xs-12 col-md-4 offset-md-3 mt-4 mt-md-0 pe-1">
                    <div class="text-center text-md-start">
                        <img src="@/assets/img/logo.png" alt="Ecocart" class="logo">
                    </div>
                    
                    <h1 class="mt-5 pt-5 title-section">Esqueceu sua senha?</h1>
                    <p class="mb-4">Vamos ajudar você!</p>
                    <StepForms />
                </div>
                <div class="col-xs-12 col-md-5 pe-0 text-md-end d-none d-md-block">
                    <div class="imgPeople"></div>
                </div>
            </div>
        </div>
    </section>
  </template>
  
  <script>
  import StepForms from '../components/StepForms.vue';
  export default {
    name: 'ForgetPassword',
    components:{
        StepForms
    }
  };
  </script>

<style scoped>
    .forgetpass{
        width:100%;
        height:100vh;
    }
    .imgPeople{
        background-image: url('../assets/img/supermarketManSmile.png');
        width: 100%;
        height:100vh;
        background-position: center;
        background-repeat:none;
        background-size:cover;
    }
    /* Media query para dispositivos móveis */
    @media (max-width: 768px) {
        .title-section {
            font-size: 24px; /* Ajuste o tamanho da fonte conforme necessário */
        }

    }
</style>
  