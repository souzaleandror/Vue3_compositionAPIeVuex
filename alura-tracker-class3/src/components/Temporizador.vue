<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <button class="button" @click="iniciar" :disabled="cronometroRodando">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!cronometroRodando">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';

export default defineComponent({
  name: 'Temporizador',
  emits: ['aoTemporixadorFinalizado'],
  components: { Cronometro },
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false,
    }
  },

  methods: {
    iniciar() {
      //comecar a contagem
      // 1 seg = 1000ms
      this.cronometro = setInterval(() => {
        console.log('Incrementando...');
        this.tempoEmSegundos++;
        console.log(this.tempoEmSegundos);

      }, 1000);
      this.cronometroRodando = true;
    },
    finalizar() {
      console.log('finalizando');
      clearInterval(this.cronometro);
      this.cronometroRodando = false;
      this.$emit('aoTemporixadorFinalizado', this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    }
  }
});
</script>

<style></style>