<template>
    <HeaderComponent />
</template>

<script>
import HeaderComponent from '../components/Header.vue'
export default {
    name: 'ToDosComponent',
    components: { HeaderComponent }
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