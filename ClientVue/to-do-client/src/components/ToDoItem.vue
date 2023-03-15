<template>
    <div class="todo" :class="{'done': toDo.done, 'not-done': !toDo.done}">
        <div class="content">
            <span>{{index + '. ' + toDo.text}}</span>
            <svg v-if="!deleteLoading" @click="handleDelete(toDo.id)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill delete-icon" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
            <div v-if="deleteLoading" class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div class="content">
            <div class="content wide">
                <span>Data utworzenia: {{toDo.creationDate}}</span>
                <span>Termin: {{toDo.dueDate}}</span>
            </div>
            <div v-if="!updateLoading" class="form-check">
                <input class="form-check-input" type="checkbox" v-model="checkboxValue" @click="handleCheckBoxClick(toDo.id)">
            </div>
            <div v-if="updateLoading" class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import TodoService from '@/services/todo-service'
const toDoService = new TodoService();
export default {
    name: 'ToDoItem',
    props: {
        toDo: {
            text: String,
            dueDate: String,
            id: String,
            done: Boolean,
            creationDate: String
        },
        index: Number
    },
    methods: {
        handleCheckBoxClick(id) {
            this.updateLoading = true;
            toDoService.updateToDo(id, !this.checkboxValue)
            .then(() => {
                this.$emit('item-modified', true);
                this.updateLoading = false;
            })
            .catch(() => {
                this.$emit('item-modified', false);
                this.updateLoading = false;
            })
        },
        handleDelete(id) {
            this.deleteLoading = true;
            toDoService.deleteToDo(id)
            .then(() => {
                this.$emit('item-modified', true);
                this.deleteLoading = false;
            })
            .catch(() => {
                this.$emit('item-modified', false);
                this.deleteLoading = false;
            })
        }
    },
    emits: ['item-modified'],
    data() {
        return {
            deleteLoading: false,
            updateLoading: false,
            checkboxValue: false
        }
    },
    created() {
        this.checkboxValue = this.toDo.done
    }
}
</script>

<style>
.todo {
    border: 1px solid #DEE2E6;
    border-radius: 5px;
    margin-bottom: 10px;
    height: 100px;
    background: #f4f4f4;
    margin-bottom: 20px;
    padding: 10px 20px;
    transition: .2s;
}

.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.todo:hover {
    background-color: #f0f5ff;
}

.done {
    border-left: 5px solid #198754;
}

.not-done {
    border-left: 5px solid #dc3545;
}

.delete-icon {
    color: #dc3545;
}

.delete-icon:hover {
    cursor: pointer;
}

.wide {
    min-width: 400px;
}

.form-check {
    margin-bottom: 20px;;
    margin-left: 80px;
}

.form-check-input:hover {
    cursor: pointer;
}
</style>