
<script>
    export default {
        name: 'Card',
        props: {
            title: String,
            titleOv: String,
            lingua: String,
            voto: String
        }
    }
</script>

<template>
    <li>
        <div>Titolo: {{ title }}</div>
        <div>Titolo Originale: {{ titleOv }}</div>
        <div>Lingua: {{ lingua }}</div>
        <div>Voto: {{ voto }}</div>
    </li>
</template>

<style lang="scss" scoped>

</style>