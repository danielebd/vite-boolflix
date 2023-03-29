
<script>
import { store } from '../store';
export default {
    name: 'Header',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div>
        <form action="" method="get" @submit.prevent="$emit('search')">
            <input v-model="store.searchKey" type="text" placeholder="search movie">
            <input  class="btn btn-primary" type="submit" value="Submit">
        </form>
    </div>
</template>

<style scoped></style>