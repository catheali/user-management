<template>
	<div>
		<v-app>
			<NavBar v-if="showTemplate" />
				<v-main class="mx-4 mb-4">
					<div>
						<RouterView/>
					</div>
				</v-main>
			<Footer v-if="showTemplate" />
		</v-app>
	</div>
</template>

<script  lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    NavBar,
    Footer
  },
  setup() {
    const route = useRoute();
    const showTemplate = computed(() => {
      return route.meta.isTemplateVisible;
    });

    return {
      showTemplate
    };
  }
});

</script>