<template>
	<div class="note-form__wrapper">
		<form class="note-form" @submit.prevent="onSubmit">
			<textarea required v-model="value" placeholder="Type ur note" />
			<TagsList
				:activeTags="activeTags"
				@onItemClick="handelTagClick"
				:items="tags"
			/>
			<button class="btn btnPrimary" type="submit">Add new note</button>
		</form>
	</div>
</template>
<script>
import TagsList from '@/components/UI/TagsList.vue';
export default {
	components: { TagsList },
	data() {
		return {
			value: '',
			tags: ['home', 'work', 'travel'],
			activeTags: [],
		};
	},
	methods: {
		onSubmit() {
			this.$emit('on-submit', this.value, this.activeTags);
			this.value = '';
			this.activeTags = [];
		},
		handelTagClick({ tag, index }) {
			this.activeTags.includes(tag)
				? this.activeTags.splice(index, 1)
				: (this.activeTags[index] = tag);
		},
	},
};
</script>
<style lang="scss">
.note-form__wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.note-form {
	display: flex;
	flex-direction: column;
	max-width: 600px;
}
</style>
