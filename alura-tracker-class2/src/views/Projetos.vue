<template>
  <section class="projetos">
    <h1 class="title"> Projetos </h1>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
export default defineComponent({
  name: 'Projetos',
  setup() {
    const store = useStore();

    return {
      projetos: computed(() => store.state.projeto.projetos)
    }
  }
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>