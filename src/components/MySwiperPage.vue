<template>
  <swiper :pagination="pagination" :modules="modules" class="mySwiper py-5">
    <swiper-slide>
      <div class="row">
        <div class="col-12 col-md-6">
          <img src="@/assets/img/smartphone.png" alt="Ecocart" class="img-fluid">
        </div>
        <div class="col-12 col-md-6 pt-5 text-center text-md-start">
          <div class="mt-2 ms-5 pt-md-5 mt-md-5">
            <img src="@/assets/img/icon.png" style="width:54px!important" alt="Beneficios da Ecocart">
          </div>
          <h4 class="mt-5"> Economia e Sustentabilidade</h4>
          <p class="pt-2"> Mercados cadastram produtos que estão<br/> próximos a data de validade, por um<br/> preço mais em conta.   </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';


  // import required modules
  import { Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        pagination: {
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        modules: [Pagination],
      };
    },
  };
</script>

<style scoped>
.title-item{
  font-size:24%;
  font-weight: 500;

}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}

</style>
