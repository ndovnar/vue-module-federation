<template>
	<h3>Home Page</h3>
	<info></info>
</template>
<script>
	import { defineAsyncComponent } from 'vue';

	export default {
		components: {
			info: defineAsyncComponent(() => import('container/info.vue')),
		},
	};
</script>
