<script setup lang="ts"></script>

<template>
	<main>
		<section class="about-wrapper">
			<h1 class="heading">About Nuxtcipes:</h1>
			<p class="description">
				Nuxtcipes is a recipe application based on the dummyJSON API, created by John Komarnicki for the
				<span class="highlight">Build Modern Apps with Nuxt</span> course.
			</p>
		</section>
	</main>
</template>

<style lang="scss" scoped>
.about-wrapper {
	padding: 8rem 0;
	max-width: 1024px;
	margin: 0 auto;
	text-align: center;
}

.heading {
	margin-bottom: 2.4rem;
	font-size: 4.8rem;
	font-weight: 800;
}

.description {
	margin-bottom: 2.4rem;
	font-size: 2rem;
	font-weight: 800;
}

.highlight {
	font-weight: bold;
}
</style>
