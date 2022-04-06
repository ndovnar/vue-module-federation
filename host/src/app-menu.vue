<template>
	<div class="menu">
		<router-link to="/">Home</router-link>
		<router-link to="/container">Container</router-link>
	</div>
</template>
<style>
	.menu {
		display: flex;
		gap: 10px;
		margin-bottom: 20px;
	}

	.menu a {
		text-decoration: none;
		color: #009ec9;
	}

	.menu a:hover {
		text-decoration: underline;
	}
</style>
