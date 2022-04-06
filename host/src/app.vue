<template>
  <div class="host-app">
	  <h1>Host App</h1>
	  <app-menu></app-menu>

	  <router-view></router-view>
  </div>
</template>
<style>
	body {
		font-family: Roboto, 'Noto Sans', 'Helvetica Neue', Arial, sans-serif;
	}

	.host-app {
		width: 900px;
		margin: auto;
	}
</style>
