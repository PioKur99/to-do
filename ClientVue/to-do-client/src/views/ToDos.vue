<template>
    <HeaderComponent />
    <div v-if="showAlert" :class="alertType" role="alert">
        {{alertMessage}}
    </div>
    <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" style="width: 3rem; height: 3rem; margin-top: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-if="!loading" class="data">
        <pre>{{todosData}}</pre>
    </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue'
export default {
    name: 'ToDosComponent',
    components: { HeaderComponent },
    data() {
        return {
            todosData: [],
            loading: false,
            isAddAlertVisible: false,
            isAddViewVisible: false,
            alertMessage: '',
            alertType: '',
            showAlert: false
        }
    },
    mounted() {
        this.getToDos();
    },
    methods: {
        handleAddToDoClicked(value) {
            this.isAddViewVisible = value;
        },
        displayAlert(message, type) {
            this.alertMessage = message;
            this.alertType = type;
            this.showAlert = true;
            setTimeout(() => {
            this.showAlert = false
            }, 2000);
        },
        async getToDos() {
            this.loading = true;
            await fetch("http://localhost:8080/todo")
            .catch(() => {
                this.displayAlert('Wystąpił błąd!', 'alert alert-danger');
                this.loading = false;
            })
            .then((response) => response.json())
            .then((data) => {
                if(data.error) {
                    this.displayAlert('Wystąpił błąd!', 'alert alert-danger');
                } else {
                    this.todosData = data;
                }
            })
            this.loading = false;
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

.big {
    max-height: 60vh;
}

.medium {
    max-height: 45vh;
}

.small {
    max-height: 37vh;
}
</style>