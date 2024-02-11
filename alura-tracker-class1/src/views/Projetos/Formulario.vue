<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">
          Nome do Projeto
        </label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
      </div>
      <div class="field">
        <button class="button" type="submit">
          Salvar
        </button>
      </div>
    </form>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { ALTERA_PROJETO, ADICIONA_PROJETO, NOTIFICAR } from '@/store/tipo-mutacoes';
import { TipoNotificacao } from '@/interfaces/INotificacao';
import useNotificador from '@/hooks/notificador';
import { ALTERAR_PROJETO_API, CADASTRAR_PROJETO } from '@/store/tipo-acoes';
export default defineComponent({
  name: 'Formulario',
  props: {
    id: {
      type: String,
    }
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id);
      this.nomeDoProjeto = projeto?.nome || '';
    }
  },
  data() {
    return {
      nomeDoProjeto: ""
    }
  },
  methods: {
    salvar() {
      // const projeto: IProjeto = {
      //   nome: this.nomeDoProjeto,
      //   id: new Date().toISOString()
      // }
      // this.projetos.push(projeto);
      if (this.id) {
        //this.store.commit(ALTERA_PROJETO, { id: this.id, nome: this.nomeDoProjeto });
        this.store.dispatch(ALTERAR_PROJETO_API, { id: this.id, nome: this.nomeDoProjeto }).then(() => this.lidarComSucesso());
      } else {
        //this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
        this.store.dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto).then(() => this.lidarComSucesso());
      }
    },
    lidarComSucesso() {
      this.nomeDoProjeto = "";
      this.$router.push('/projetos');
      this.notificar(TipoNotificacao.SUCESSO, "Foi salvo com sucesso", "Seu projeto foi salvo com sucesso")
    }
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador()
    return {
      store,
      notificar
    }
  }
});
</script>
