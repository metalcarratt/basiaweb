<template>
    <div class="matte">
        <Heading/>
        <router-view />
    </div>
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
