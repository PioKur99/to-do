<template>
    <HeaderComponent @itemAdded="fetchData()" @addClicked="handleAddToDoClicked(value)" />
    <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" style="width: 3rem; height: 3rem; margin-top: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-if="!loading" class="data" :class="{'large': !this.isAddViewVisible, 'medium': this.isAddViewVisible}">
        <div v-if="!data.length" class="alert alert-warning" role="alert">
            Brak danych!
        </div>
        <ToDoItem v-for="item in data" :key="item.id" :toDo="item" @item-modified="onItemModified"/>
    </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue'
import ToDoItem from '../components/ToDoItem.vue'
import TodoService from '@/services/todo-service'
import AlertService from '@/services/alert-service';
const toDoService = new TodoService();
const alertService = new AlertService();
export default {
    name: 'ToDosComponent',
    components: { HeaderComponent, ToDoItem },
    data() {
        return {
            data: [],
            loading: true,
            isAddViewVisible: false,
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
            this.loading = true;
            toDoService.loadToDos().then(response => {
                this.data = response.data;
                this.loading = false;
            })
        }
    }
}
</script>

<style>
.data {
    overflow-y: auto;
}

.data {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
  }

.data::-webkit-scrollbar { 
    display: none; 
}

.large {
    max-height: 65vh;
}

.medium {
    max-height: 45vh;
}

</style>