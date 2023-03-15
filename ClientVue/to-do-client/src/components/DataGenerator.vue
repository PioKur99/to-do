<template>
    <div class="flex">
    <button @click="generateClicked()" class="btn btn-primary">
        <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span v-if="!loading">Wygeneruj dane</span>
    </button>
    <div>
        <label for="populateCount">Ilość rzeczy do zrobienia</label>
        <input
        type="text"
        name="populateCount"
        v-model="populateCount"
        id="populateCount"
        class="form-control"
        />
    </div>
</div>
</template>
<script>
export default {
  name: 'DataGenerator',
  data() {
    return {
       populateCount: 0
    }
  },
  props: {
    loading: Boolean
  },
  methods: {
    generateClicked() {
        console.log(this.populateCount);
        this.$emit('populate-clicked', this.populateCount)
    }
  },
  emits: ['populate-clicked']
}
</script>

<style>
    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>