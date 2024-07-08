<template>
	<div class="note-form__wrapper">
		<form class="note-form" @submit.prevent="onSubmit">
			<textarea required v-model="value" placeholder="Type ur note" />
			<TagsList @onItemClick="handelTagClick" :items="tags" />
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
			noteTag: new Set(),
			tags: [
				{
					title: 'home',
					isActive: false,
				},
				{
					title: 'work',
					isActive: false,
				},
				{
					title: 'travel',
					isActive: false,
				},
			],
		};
	},
	methods: {
		onSubmit() {
			this.$emit('on-submit', this.value, this.noteTag);
			this.value = '';
			this.tags = this.tags.map((tag) => (tag.isActive = false));
		},
		handelTagClick({ tag, idx }) {
			if (this.tags[idx]) {
				this.tags[idx].isActive = !this.tags[idx].isActive;
			}
			if (!this.noteTag.delete(tag)) {
				this.noteTag.add(tag);
			}
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
