<template>
    <HeaderComponent @itemAdded="fetchData()" @addClicked="handleAddToDoClicked(value)" />
    <div v-if="fetchLoading" class="d-flex justify-content-center">
        <div class="spinner-border" style="width: 3rem; height: 3rem; margin-top: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-if="!fetchLoading" class="data" :class="{'large': !this.isAddViewVisible, 'medium': this.isAddViewVisible}">
        <div v-if="!data.length" class="alert alert-warning" role="alert">
            Brak danych!
        </div>
        <ToDoItem v-for="(item, index) in data" :key="item.id" :toDo="item" :index="index + 1" @item-modified="onItemModified"/>
    </div>
    <DataGenerator @populate-clicked="populateData" :loading="populateLoading" />
</template>

<script>
import HeaderComponent from '../components/Header.vue'
import ToDoItem from '../components/ToDoItem.vue'
import DataGenerator from '../components/DataGenerator.vue';
import TodoService from '@/services/todo-service'
import AlertService from '@/services/alert-service';
const toDoService = new TodoService();
const alertService = new AlertService();
export default {
    name: 'ToDosComponent',
    components: { HeaderComponent, ToDoItem, DataGenerator },
    data() {
        return {
            data: [],
            fetchLoading: true,
            populateLoading: false,
            isAddViewVisible: false
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        handleAddToDoClicked() {
            this.isAddViewVisible = !this.isAddViewVisible;
        },
        onItemModified(success) {
            if(success) {
                alertService.open('success', 'Dane zostały zapisane.');
                this.fetchData();
            } else {
                alertService.open('danger', 'Wystąpił błąd!');
            }
        },
        fetchData() {
            this.fetchLoading = true;
            toDoService.loadToDos().then(response => {
                this.data = response.data;
                this.fetchLoading = false;
            })
        },
        populateData(count) {
            this.populateLoading = true;
            toDoService.populateData(count).then(response => {
                this.data = response.data;
                this.populateLoading = false;
            })
        },
    }
}
</script>

<style>
.data {
    overflow-y: auto;
    overflow-x: hidden;
}

.large {
    min-height: 62vh;
    max-height: 63vh;
}

.medium {
    min-height: 38vh;
    max-height: 39vh;
}
</style>