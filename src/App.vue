<template>
    <div class="matte">
        <Heading />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: 'App',
    components: { Heading, Footer }
}
</script>

<style lang="scss">
@import "./styles/styles.scss"
</style>
