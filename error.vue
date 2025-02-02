<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps({
	error: Object as () => NuxtError,
});
</script>

<template>
	<section class="error-container">
		<h1 class="h1">{{ error?.statusCode }}</h1>
		<p class="error-message">{{ error?.statusMessage }}</p>
		<NuxtLink to="/" class="home-link"> Go home </NuxtLink>
	</section>
</template>

<style lang="scss" scoped>
.error-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}

.h1 {
	margin-bottom: 0.8rem;
	font-size: 9rem;
	font-weight: bold;
}

.error-message {
	margin-bottom: 4rem;
	font-size: 1.5rem;
}

.home-link {
	padding: 0.8rem 1.6rem;
	border-radius: 6px;
	background-color: #d4af37;
	color: white;
	font-size: 1.8rem;
	text-decoration: none;
	cursor: pointer;
}

@media (min-width: 640px) {
	.error-message {
		font-size: 4rem;
	}
}
</style>
