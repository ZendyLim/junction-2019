<template>
  <v-chip :color="this.isSelected ? 'error' : ''" text-color="white" @click="onSelect">
    <v-avatar>
      <v-icon>{{this.isSelected ? 'remove' : 'add'}}</v-icon>
    </v-avatar>
    {{topic.name}}
  </v-chip>
</template>
<script>
export default {
  props: ['topic'],
  data: function() {
    return {
      isSelected: this.topic.status
    }
  },
  methods: {
    onSelect() {
      this.isSelected = !this.isSelected

      this.$emit('getSelected', {
        id: this.topic.id,
        status: this.isSelected
      })
    }
  }
}
</script>
