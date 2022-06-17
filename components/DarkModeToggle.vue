<template>
	<div class='flex justify-end items-center h-12'>
		<div class='relative rounded-full bg-black dark:bg-white w-10 h-6 align-middle select-none transition duration-200 ease-in'>
			<input
				type='checkbox'
				name='dark-mode'
				id='dark-mode'
				class='toggle absolute w-6 h-6 rounded-full bg-white dark:bg-black appearance-none border-4 border-black dark:border-white cursor-pointer'
				value='dark'
				v-model='darkMode'
			>
			<label for='dark-mode' class='block overflow-hidden h-6 cursor-pointer'></label>
		</div>
		<label for='dark-mode' class='text-black dark:text-white cursor-pointer ml-2'>Dark Mode</label>
	</div>
</template>

<script>
	export default {
		name: 'DarkMode',
		data() {
			return {
				darkMode: false
			};
		},
		watch: {
			darkMode(newVal) {
				this.$colorMode.value = newVal === true ? 'dark' : 'light';
				this.$colorMode.preference = newVal === true ? 'dark' : 'light';
			}
		},
		mounted() {
			if (this.$colorMode.value === 'dark' || document.documentElement.classList.contains('dark')) {
				this.darkMode = true;
			}
		}
	}
</script>

<style scoped>
.toggle {
	right: calc(100% - 1.5rem);
	transition: right;
}
.toggle:checked {
	right: 0;
}
</style>