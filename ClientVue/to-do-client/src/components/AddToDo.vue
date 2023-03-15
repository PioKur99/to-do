<template>
    <form @submit.prevent="onSubmit" class="add-form">
      <label for="text">Treść</label>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Treść zadania"
        class="form-control"
        v-model="text"
      />
      <label for="dueDate">Termin wykonania</label>
      <input
        type="text"
        name="dueDate"
        id="dueDate"
        placeholder="Obsługiwany format: yyyy-mm-dd"
        class="form-control"
        v-model="dueDate"
      />
    <button class="btn btn-dark block">
      <span v-if="createLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span v-if="!createLoading">Zapisz</span>
    </button>
  
  </form>
</template>

<script>
import AlertService from '../services/alert-service'
import TodoService from '@/services/todo-service';
const alertService = new AlertService();
const toDoService = new TodoService();
export default {
  name: 'AddToDoComponent',
  data() {
    return {
        text: '',
        dueDate: '',
        createLoading: false
    }
  },
  methods: {
    onSubmit() {
    if (!this.text || !this.dueDate) {
      alertService.open('danger', 'Proszę uzupełnić wszystkie pola!');
    } else {
      const newToDo = {
        text: this.text,
        dueDate: this.dueDate,
        done: false
      };
      this.createToDo(newToDo);
    }
  },
  createToDo(toDo) {
    this.createLoading = true;
    toDoService.createToDo(toDo).then(() => {
      alertService.open('success', 'Dane zostały zapisane.')
      this.createLoading = false;
      this.$emit('itemAdded')
    })
    .catch(() => {
      alertService.open('danger', 'Wystąpił błąd!')
      this.createLoading = false;
    })
  }
  },
  emits: ['itemAdded']
}
</script>

<style>
    .add-form {
        margin-bottom: 20px;
    }

    .block {
        width: 100%;
    }
</style>