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
import { defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import { TipoNotificacao } from '@/interfaces/INotificacao';
import useNotificador from '@/hooks/notificador';
import { ALTERAR_PROJETO_API, CADASTRAR_PROJETO } from '@/store/tipo-acoes';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Formulario',
  props: {
    id: {
      type: String,
    }
  },
  // mounted() {
  //   if (this.id) {
  //     const projeto = this.store.state.projeto.projetos.find(proj => proj.id == this.id);
  //     this.nomeDoProjeto = projeto?.nome || '';
  //   }
  // },
  // data() {
  //   return {
  //     nomeDoProjeto: ""
  //   }
  // },
  methods: {
    // salvar() {
    //   // const projeto: IProjeto = {
    //   //   nome: this.nomeDoProjeto,
    //   //   id: new Date().toISOString()
    //   // }
    //   // this.projetos.push(projeto);
    //   if (this.id) {
    //     //this.store.commit(ALTERA_PROJETO, { id: this.id, nome: this.nomeDoProjeto });
    //     this.store.dispatch(ALTERAR_PROJETO_API, { id: this.id, nome: this.nomeDoProjeto }).then(() => this.lidarComSucesso());
    //   } else {
    //     //this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
    //     this.store.dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto).then(() => this.lidarComSucesso());
    //   }
    // },
    // lidarComSucesso() {
    //   this.nomeDoProjeto = "";
    //   this.$router.push('/projetos');
    //   this.notificar(TipoNotificacao.SUCESSO, "Foi salvo com sucesso", "Seu projeto foi salvo com sucesso")
    // }
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const { notificar } = useNotificador();
    const nomeDoProjeto = ref('');

    if (props.id) {
      const projeto = store.state.projeto.projetos.find(proj => proj.id == props.id);
      nomeDoProjeto.value = projeto?.nome || '';
    }

    const lidarComSucesso = () => {
      nomeDoProjeto.value = "";
      router.push('/projetos');
      notificar(TipoNotificacao.SUCESSO, "Foi salvo com sucesso", "Seu projeto foi salvo com sucesso")
    }

    const salvar = () => {

      if (props.id) {
        store.dispatch(ALTERAR_PROJETO_API, { id: props.id, nome: nomeDoProjeto.value }).then(() => lidarComSucesso());
      } else {
        store.dispatch(CADASTRAR_PROJETO, nomeDoProjeto.value).then(() => lidarComSucesso());
      }
    }

    return {
      nomeDoProjeto,
      salvar
    }
  }
});
</script>
