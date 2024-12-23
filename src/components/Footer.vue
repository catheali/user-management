<template>
  <v-footer app class="text-center d-flex flex-column">
    <div>
      <v-btn
        icon="mdi-linkedin"
        class="mx-1"
        variant="text"
		href="https://www.linkedin.com/in/alicia-alencar"
      ></v-btn>
      <v-btn
        icon="mdi-github"
        class="mx-1"
        variant="text"
		href="https://www.github.com/catheali"
      ></v-btn>
    </div>
    <div class="pt-0">
	</div>
    <v-divider></v-divider>
    <div>
      {{ new Date().getFullYear() }} — <strong>Alicia Alencar</strong>
    </div>
  </v-footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
	  name: 'Footer',
	  components: {  },
  });
</script>