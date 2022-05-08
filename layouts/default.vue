<template>
	<ColorScheme tag='div'>
		<div class='bg-white text-white dark:bg-black dark:text-black p-12 pt-0 transition duration-100 ease-in'>
			<DarkModeToggle />
			<main class='bg-green-200 dark:bg-green-100 rounded-sm drop-shadow-2xl'>
				<div class='container'>
					<h1>Color mode: {{ $colorMode.value }}</h1>
					<Nuxt />
				</div>
			</main>
		</div>
	</ColorScheme>
</template>

<script>
	export default {
		name: 'DefaultLayout'
	}
</script>

<style scoped>
main {
	min-height: calc(theme('minHeight.screen') - theme('margin.12') * 2);
}
</style>