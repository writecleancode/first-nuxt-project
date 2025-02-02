<script setup lang="ts">
import type { Recipe } from '~/types/types';

const { id } = useRoute().params;

const { data, error } = useFetch<Recipe>(`https://dummyjson.com/recipes/${id}`);
</script>

<template>
	<template>
		<div class="recipe-container">
			<div class="header">
				<h2 class="h2">{{ data?.name }}</h2>
				<div class="info">
					<!-- <div class="info-item" v-for="(item, index) in infoItems" :key="index">
						<UIcon :name="item.icon" class="icon" />
						<span>{{ item.value }}</span>
					</div> -->
				</div>
				<hr class="hr" />
			</div>

			<NuxtImg :src="data?.image" class="image" alt="" />

			<div class="ingredients">
				<h2 class="h2 ingredients-h2">Ingredients</h2>
				<ul class="ingredients-list">
					<li v-for="ingredient in data?.ingredients" :key="ingredient" class="ingredients-list-item">
						<label>
							<!-- <input type="checkbox" v-model="checkedIngredients[ingredient]" /> -->
							<div class="checkbox"></div>
							<span>{{ ingredient }}</span>
						</label>
					</li>
				</ul>
			</div>

			<div class="instructions">
				<h2 class="h2 instructions-h2">Instructions</h2>
				<ul class="instructions-list">
					<li v-for="(instruction, index) in data?.instructions" :key="index" class="instructions-list-item">
						<span class="step-number">{{ index + 1 }}</span>
						<span class="step-text">{{ instruction }}</span>
					</li>
				</ul>
			</div>
		</div>
	</template>
</template>

<style lang="scss" scoped>
.recipe-container {
	display: flex;
	flex-direction: column;
	margin-inline: auto;
	padding: 8rem 1.6rem;
	max-width: 1024px;

	/* padding: 3.6rem; */
}

.header {
	display: flex;
	flex-direction: column;
	margin-bottom: 2.4rem;
}

.h2 {
	margin-bottom: 1.6rem;
	font-size: 4.8rem;
	font-weight: 600;
}

.info {
	display: flex;
	gap: 1.6rem;
	margin-bottom: 2.4rem;
	font-size: 2rem;
}

.info-item {
	display: flex;
	align-items: center;
	gap: 0.4rem;
}

.icon {
	color: #d4af37;
}

.hr {
	border: none;
	border-top: 1px solid #ddd;
}

.image {
	margin-bottom: 4.8rem;
	border-radius: 6px;
	width: 100%;
	max-height: 500px;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	object-fit: cover;
}

.ingredients {
	margin-bottom: 3.2rem;
}

.ingredients-h2 {
	font-size: 32px;
}

.ingredients-list {
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.8rem;
	font-size: 1.8rem;
	list-style: none;
}

.ingredients-list-item {
	label {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		cursor: pointer;
	}

	input {
		display: none;
	}

	.checkbox {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		border: 2px solid #d4af37;
		border-radius: 50%;
	}

	input:checked + .checkbox::after {
		content: '';
		position: absolute;
		width: 16px;
		height: 16px;
		background-color: #d4af37;
		border-radius: 50%;
	}

	input:checked ~ span {
		text-decoration: line-through;
	}
}

.instructions-h2 {
	font-size: 3.2rem;
	font-weight: 500;
}

.instructions-list {
	display: flex;
	flex-direction: column;
	font-size: 18px;
	gap: 16px;
}

.instructions-list-item {
	display: flex;
	gap: 0.8rem;
}

.step-number {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	width: 28px;
	height: 28px;
	background-color: #d4af37;
	color: white;
	font-size: 1.4rem;
}

.step-text {
	flex: 1;
}

/* @media (min-width: 640px) {
	.recipe-container {
		max-width: 640px;
	}
} */

@media (min-width: 768px) {
	/* .recipe-container {
		max-width: 768px;
	} */

	.ingredients-list {
		grid-template-columns: repeat(2, 1fr);
	}
}

/* @media (min-width: 1024px) {
	.recipe-container {
		max-width: 1024px;
	}
} */

/* @media (min-width: 1280px) {
	.recipe-container {
		max-width: 1280px;
	}
} */
</style>
