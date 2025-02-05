<script setup lang="ts">
import { type Recipe } from '@/types/types';

defineProps<{
	recipe: Recipe;
}>();
</script>

<template>
	<div class="recipe-card">
		<NuxtImg :src="recipe.image" sizes="xs:100vw sm:50vw lg:400px" format="webp" densities="x1" alt="" class="recipe-image" />
		<div class="recipe-content">
			<p class="recipe-title">{{ recipe.name }}</p>
			<div class="recipe-info">
				<div class="info-item">
					<UIcon name="i-mdi-clock-time-eight-outline" class="icon" />
					<span>{{ recipe.cookTimeMinutes }}</span>
				</div>
				<div class="info-item">
					<UIcon name="i-mdi-fire" class="icon" />
					<span>{{ recipe.caloriesPerServing }}</span>
				</div>
				<div class="info-item">
					<UIcon name="i-mdi-star" class="icon" />
					<span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
				</div>
			</div>
			<UButton :ui="{ base: 'self-start' }" :to="`/recipes/${recipe.id}`" label="View" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.recipe-card {
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
	overflow: hidden;
}

.recipe-image {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	width: 100%;
}

.recipe-content {
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 2.4rem 1.6rem;
}

.recipe-title {
	margin-bottom: 0.8rem;
	font-size: 2rem;
	font-weight: 600;
}

.recipe-info {
	display: flex;
	gap: 1.6rem;
	margin-top: auto;
	margin-bottom: 1.6rem;
	font-size: 1.8rem;
}

.info-item {
	display: flex;
	align-items: center;
	gap: 0.4rem;
}

.icon {
	color: #d4af37;
}
</style>
