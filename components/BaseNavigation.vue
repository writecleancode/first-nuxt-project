<script setup lang="ts"></script>

<template>
	<header class="header">
		<nav class="nav">
			<NuxtLink to="/" class="logo">
				<NuxtImg width="56px" src="/icon-green.png" format="webp" alt="" />
				<span class="logo-span">Nuxtcipes</span>
			</NuxtLink>
			<ul class="nav-links-list">
				<li>
					<NuxtLink to="/" class="nav-links-list-link">Home</NuxtLink>
				</li>
				<!-- <li>
					<NuxtLink to="/about" class="nav-links-list-link">About</NuxtLink>
				</li> -->
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
.header {
	padding: 1.6rem 0;
	border-bottom: 1px solid #e5e7eb;
}

.nav {
	display: flex;
	align-items: center;
	max-width: 1200px;
	margin: 0 auto;
}

.logo {
	display: flex;
	gap: 0.4rem;
	align-items: center;
	text-decoration: none;
}

.logo-span {
	font-size: 2.4rem;
	font-weight: bold;
}

.nav-links-list {
	display: flex;
	gap: 2.4rem;
	margin-left: auto;
	padding: 0;
	font-size: 2rem;
	font-weight: bold;
	text-transform: capitalize;
	list-style: none;
}

.nav-links-list-link {
	color: inherit;
	text-decoration: none;
}
</style>
