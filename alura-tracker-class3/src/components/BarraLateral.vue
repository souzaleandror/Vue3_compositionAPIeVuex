<template>
  <header>
    <h1 class="is-flex is-align-items-center is-justify-content-space-around">
      <img src="../assets/logo_alura.png" alt="" />
    </h1>
    <button class="button" @click="alterarTema">
      {{ textoDoBotao }}
    </button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks">
              Tarefas
            </i>
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram">
              Projetos
            </i>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BarraLateral',
  emits: ['aoTemaAlterado'],
  data() {
    return {
      modoEscuroAtivo: false,
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo);
    }
  },
  computed: {
    textoDoBotao() {
      if (this.modoEscuroAtivo) {
        return 'Desativar modo Escuro';
      }
      return 'Ative o modo escuro';
    }
  }
});
</script>

<style scoped>
/* Todo o estilo do componente */
header {
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

.panel li {
  margin: 8px 0;
}

.link {
  color: #fff;
}

.link:hover {
  color: #FAF0CA;
}

.link.router-link-active {
  color: #FAF0CA;
}
</style>