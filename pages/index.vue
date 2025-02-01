<script setup lang="ts"></script>

<template>
	<main>
		<section class="hero-section">
			<div class="container">
				<div class="content">
					<h1>Master the Kitchen with Ease: Unleash Your Inner Chef Today!</h1>
					<p>Discover recipes helping you to find the easiest way to cook.</p>
					<!-- <UButton to="#recipes" label="Browse Recipes" /> -->
				</div>
				<div class="image-wrapper">
					<NuxtImg sizes="xs:100vw sm:667px" src="/nuxt-course-hero.png" format="webp" densities="x1" alt="" />
				</div>
			</div>
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
	padding: 3.6rem;
}

.content {
	flex: 1;
	order: 2;
	text-align: center;
}

h1 {
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

@media (min-width: 1024px) {
	.container {
		flex-direction: row;
	}

	.content {
		text-align: left;
		order: 1;
	}

	.h1 {
		font-size: 6rem;
	}

	.image-wrapper {
		order: 2;
	}
}
</style>
