<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formualrio para cricao de uma nova tarefas">
        <input type="text" class="input" placeholder="Qual tarefa voce desejar iniciar" v-model="descricao">
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @ao-temporixador-finalizado="savarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import Temporizador from './Temporizador.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
  name: 'Formulario',
  emits: ['aoSalvarTarefa'],
  components: { Temporizador },
  // data() {
  //   return {
  //     descricao: "",
  //     idProjeto: '',
  //   }
  // },
  methods: {
    // savarTarefa(tempoDecorrido: number): void {
    //   console.log('savarTarefa');
    //   console.log(tempoDecorrido);
    //   console.log(this.descricao);
    //   console.log(this.idProjeto);
    //   this.$emit('aoSalvarTarefa', {
    //     duracaoEmSegundos: tempoDecorrido,
    //     descricao: this.descricao,
    //     projeto: this.projetos.find(proj => proj.id == this.idProjeto),
    //   })
    //   this.descricao = "";

    // }
  },
  setup(props, { emit }) {
    const store = useStore(key);

    const descricao = ref('');
    const idProjeto = ref('');

    const projetos = computed(() => store.state.projeto.projetos);

    const savarTarefa = (tempoDecorrido: number): void => {
      emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: descricao.value,
        projeto: projetos.value.find(proj => proj.id == idProjeto.value),
      })
      descricao.value = "";

    }

    return {
      projetos: computed(() => store.state.projeto.projetos),
      descricao,
      idProjeto,
      savarTarefa
    }
  }
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>