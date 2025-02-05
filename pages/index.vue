<script setup lang="ts">
import type { RecipeResponse } from '~/types/types';

const { data, error } = await useFetch<RecipeResponse>('https://dummyjson.com/recipes?limit=12');

useSeoMeta({
	title: 'Nuxtcipes',
	description: 'Recipes for you to cook!',
	ogTitle: 'Nuxtcipes',
	ogDescription: 'Recipes for you to cook!',
	ogImage: '/nuxt-course-hero.png',
	ogUrl: `http:localhost:3000`,
	twitterTitle: 'Nuxtcipes',
	twitterDescription: 'Recipes for you to cook!',
	twitterImage: '/nuxt-course-hero.png',
	twitterCard: 'summary',
});
</script>

<template>
	<main>
		<section class="hero-section">
			<div class="container">
				<div class="content">
					<h1 class="h1">Master the Kitchen with Ease: Unleash Your Inner Chef Today!</h1>
					<p>Discover recipes helping you to find the easiest way to cook.</p>
					<UButton to="#recipes" label="Browse Recipes" />
				</div>
				<div class="image-wrapper">
					<NuxtImg sizes="xs:100vw sm:667px" src="/nuxt-course-hero.png" format="webp" densities="x1" alt="" />
				</div>
			</div>
		</section>
		<section id="recipes" class="recipes-section">
			<h2 class="h2">Discover, Create, Share</h2>
			<p class="recipes-description">Check out our most popular recipes!</p>
			<div v-if="!error" class="recipes-grid">
				<RecipeCard v-for="recipe in data?.recipes" :recipe="recipe" />
			</div>
			<p v-else class="error-message">Oops, something went wrong. Please try again later</p>
		</section>
		<section class="signup-section">
			<SignupForm />
		</section>
	</main>
</template>

<style lang="scss" scoped>
.hero-section {
	padding: 8rem 0;
	background-color: #f1f1f1;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;
	margin-inline: auto;
	padding: 3.6rem;
}

.content {
	flex: 1;
	order: 2;
	text-align: center;
}

.h1 {
	margin-bottom: 2.4rem;
	font-size: 4rem;
	font-weight: 800;

	@media (min-width: 1024px) {
		font-size: 3.75rem;
	}
}

p {
	font-size: 2rem;
	margin-bottom: 3.2rem;
}

.image-wrapper {
	flex: 1;
	order: 1;
}

.recipes-section {
	margin: 0 auto;
	padding: 8rem 2rem;
	max-width: 1200px;
	text-align: center;
}

.h2 {
	margin-bottom: 0.8rem;
	font-size: 3rem;
}

.recipes-description {
	margin-bottom: 3.2rem;
	font-size: 1.8rem;
}

.recipes-grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.6rem;
}

.error-message {
	color: red;
	font-size: 2rem;
}

.signup-section {
	padding: 8rem 2rem;
	background-color: #f1f1f1;
}

@media (min-width: 640px) {
	.container {
		max-width: 640px;
	}
}

@media (min-width: 768px) {
	.container {
		max-width: 768px;
	}

	.recipes-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 1024px) {
	.container {
		flex-direction: row;
		max-width: 1024px;
	}

	.content {
		text-align: left;
		order: 1;
	}

	/* .h1 {
		font-size: 6rem;
	} */

	.image-wrapper {
		order: 2;
	}

	.h2 {
		font-size: 4.8rem;
	}

	.recipes-description {
		font-size: 2rem;
	}

	.recipes-grid {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media (min-width: 1280px) {
	.container {
		max-width: 1280px;
	}
}
</style>
