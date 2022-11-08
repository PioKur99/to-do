<template>
    <div class="add-form">
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
    <button @click="onSubmit()" class="btn btn-dark block">
      <span v-if="createLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span v-if="!createLoading">Zapisz</span>
    </button>
    <div v-if="showAlert" :class="alertType" role="alert">
        {{alertMessage}}
    </div>
</div>
</template>

<script>
export default {
  name: 'AddToDoComponent',
  data() {
    return {
        text: '',
        dueDate: '',
        alertMessage: '',
        alertType: '',
        showAlert: false,
        createLoading: false
    }
  },
  methods: {
    onSubmit() {
    if (!this.text || !this.dueDate) {
      this._showAlert('Proszę uzupełnić wszystkie pola!', 'alert alert-danger', {});
    } else {
      const newToDo = {
        text: this.text,
        dueDate: this.dueDate
      };
      this.createToDo(newToDo);
    }
  },
  async createToDo(toDo) {
    this.createLoading = true;
     await fetch('http://localhost:8080/todo', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(toDo)
    })
    .catch(() => {
        this._showAlert('Wystąpił błąd!', 'alert alert-danger', {});
    })
    .then((response) => {
        if(!response.ok) {
            this._showAlert('Wystąpił błąd!', 'alert alert-danger', {});
        } else {
            this._showAlert('Dane zostały zapisane.', 'alert alert-success', toDo);
        }
    })
    this.createLoading = false;
  },
    _showAlert(message, type, toDo) {
        this.alertMessage = message;
        this.alertType = type;
        this.showAlert = true;
        setTimeout(() => {
        this.showAlert = false
        if(Object.keys(toDo).length !== 0) {
            this.$emit('onAddToDo', toDo)
            this.text = '';
            this.dueDate = '';
        }
        }, 2000);
    }
  }
}
</script>

<style>
    .add-form {
        margin-bottom: 20px;
    }

    .block {
        width: 100%;
    }

    .alert {
        margin-top: 20px;
    }
</style>