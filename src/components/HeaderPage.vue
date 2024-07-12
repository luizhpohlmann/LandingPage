<template>
  <header class="header-container">
    <div class="container">
      <div class="row justify-content-center align-items-start">
        <div class="col">
          <img src="@/assets/img/logo.png" alt="Ecocart" class="logo">
        </div>
      </div>
    </div>
  </header>
</template>
  
  <script>
  export default {
    name: 'HeaderPage',
  };
  </script>
  
  <style scoped>
    .header-container {
      padding: 24px 0;
    }
    .logo {
      max-width: 120px; /* Adjust the size of the logo as needed */
      height: auto;
    }
  </style>
  