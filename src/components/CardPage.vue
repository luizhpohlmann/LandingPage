<!-- CardComponent.vue -->
<template>
    <div class="col-md-6 col-auto">
      <div class="card" :style="{ backgroundColor: backgroundColor }">
        <div class="card-body">
          <div class="card-image">
            <img :src="image" alt="Card image" class="img-fluid">
          </div>
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ text }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    props: {
      image: {
      type: String,
      required: true
      },
      title: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      backgroundColor: {
        type: String,
        required: false,
        default: '#fff'
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    border: thin;
    border-radius: 32px;
    padding: 16px;
    margin:16px 0;
  }
  .card-image img {
    max-width: 100px; /* Limita o tamanho da imagem */
    margin-bottom: 24px;
  }
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 16px;
  }
  .card-text {
    font-size: 0.75rem;
  }
  </style>