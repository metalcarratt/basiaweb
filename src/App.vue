<template>
    <Heading/>
    <router-view />
</template>

<script>
import Heading from "@/components/Heading.vue";

export default {
    name: 'App',
    components: { Heading }
}
</script>

<style lang="scss">
@import "./styles/styles.scss"
</style>
