<template>
	<div class="tags-list">
		<div
			class="tag-item"
			v-for="(item, index) in items"
			:key="index"
			@click="onItemClick(item.title, index)"
			:class="{ isPreview: isPreview, isActive: item.isActive }"
		>
			<span v-if='item.title'>{{ item.title }}</span>
			<span v-else>{{ item }}</span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		items: {
			type: Array,
			required: true,
		},

		isPreview: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		onItemClick(tag, idx) {
			this.$emit('onItemClick', { tag, idx });
		},
	},
};
</script>
<style lang="scss">
.tags-list {
	padding: 10px 0;
	display: flex;
	justify-content: center;
}
.tag-item {
	padding: 8px 22px;
	margin-right: 10px;
	background-color: #fff;
	border-radius: 22px;
	user-select: none;
	cursor: pointer;
	&.isActive {
		background-color: #444ce0;
		color: #fff;
	}
	&.isPreview {
		padding: 0;
		color: #444ce0;
		cursor: default;
		&:before {
			content: '#';
		}
	}
	&:last-child {
		margin-right: 0;
	}
}
</style>
