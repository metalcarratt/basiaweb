<template>
    <main>
        <HorizNav />

        <h1>Contact</h1>

        <form class="sidebyside">
            <fieldset>
                <label>First Name</label>
                <input type="text"/>
            </fieldset>

            <fieldset>
                <label>Last Name</label>
                <input type="text"/>
            </fieldset>

            <fieldset>
                <label>Subject</label>
                <input type="text"/>
            </fieldset>

            <fieldset>
                <label>Message</label>
                <textarea></textarea>
            </fieldset>

            <button>Send</button>
        </form>

        <p class="sidebyside">
            Basia Garratt<br/>
            Hamilton, New Zealand<br/>
            Email: <a href="mailto=basgarratt@gmail.com">basgarratt@gmail.com</a><br/>
            Phone: +64 22 415 2822 / 022 415 2822
        </p>
    </main>
</template>

<script>
import HorizNav from "@/components/HorizNav.vue";

export default {
    components: { HorizNav }    
}
</script>