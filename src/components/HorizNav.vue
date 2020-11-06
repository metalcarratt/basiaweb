<template>
    <span class="horiz-nav">
        <b v-if="atHome">Home</b>
        <router-link to="/home.html" v-else >Home</router-link>
         | 
        <b v-if="atAbout">About Me</b>
        <router-link to="/about.html" v-else>About Me</router-link>
         | 
        <b v-if="atServices">Services</b>
        <router-link to="/services.html" v-else>Services</router-link>
         | 
        <b v-if="atTestimonials">Testimonials</b>
        <router-link to="/testimonials.html" v-else>Testimonials</router-link>
         | 
        <b v-if="atContact">Contact</b>
        <router-link to="/contact.html" v-else>Contact</router-link>
    </span>
</template>

<script>
export default {
    computed: {
        atHome() {
            return this.$router.currentRoute.value.path === "/home.html";
        },
        atAbout() {
            return this.$router.currentRoute.value.path === "/about.html";
        },
        atTestimonials() {
            return this.$router.currentRoute.value.path === "/testimonials.html";
        },
        atServices() {
            return this.$router.currentRoute.value.path === "/services.html";
        },
        atContact() {
            return this.$router.currentRoute.value.path === "/contact.html";
        }
    }
}
</script>