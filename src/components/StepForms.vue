<template>
    <div>
      <div v-if="step === 1">
        <span>Informe seu e-mail</span>
        <input type="email" class="form-control" v-model="email" placeholder="email@email.com" />
        <button @click="nextStep" class="btn btn-lg btn-primary">Próximo</button>
      </div>
      <div v-if="step === 2">
        <span>Agora informe sua nova senha</span>
        <input type="password" class="form-control" v-model="newPassword" placeholder="******" />
        <input type="password" class="form-control" v-model="confirmPassword" placeholder="******" />
        <button @click="nextStep" class="btn btn-lg btn-primary">Próximo</button>
      </div>
      <div v-if="step === 3">
        <h2 class="">Uhull!!</h2>
        <p>Sua senha foi alterada com sucesso!!</p>
        <button @click="resetForm" class="btn btn-lg btn-primary">Concluir</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        step: 1,
        email: '',
        newPassword: '',
        confirmPassword: ''
      };
    },
    methods: {
      nextStep() {
        if (this.step === 1 && this.email !== '') {
          this.step++;
        } else if (this.step === 2 && this.newPassword !== '' && this.newPassword === this.confirmPassword) {
          this.step++;
        }
      },
      previousStep() {
        if (this.step > 1) {
          this.step--;
        }
      },
      resetForm() {
        this.step = 1;
        this.email = '';
        this.newPassword = '';
        this.confirmPassword = '';
      }
    }
  };
  </script>
  
  <style scoped>
    .btn-primary{
        background-color: #008658!important;
        border-color:#008658!important;
    }
    .form-control{
        margin-top:8px!important;
        margin-bottom:24px!important;
    }
  </style>
  