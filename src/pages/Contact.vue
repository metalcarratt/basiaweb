<template>
    <main>
        <HorizNav />

        <h1>Contact</h1>

        <div class="sidebyside">
            <h2>Send me a message</h2>
            <form>  
                <fieldset>
                    <label>First Name</label>
                    <input type="text" v-model="firstName" />
                </fieldset>

                <fieldset>
                    <label>Last Name</label>
                    <input type="text" v-model="lastName" />
                </fieldset>

                <fieldset>
                    <label>Subject</label>
                    <input type="text" v-model="subject" />
                </fieldset>

                <fieldset>
                    <label>Message</label>
                    <textarea v-model="message"></textarea>
                </fieldset>

                <button @click="sendEmail" v-if="!sent">Send</button>
                <div class="sending" v-else-if="sending === true">Sending...</div>
                <div class="sent" v-else>Message sent!</div>
            </form>
        </div>

        <div class="sidebyside">
        <h2>Contact me directly</h2>
            <p>
                Basia Garratt<br/>
                Hamilton, New Zealand<br/>
                Email: <a href="mailto:basgarratt@gmail.com">basgarratt@gmail.com</a><br/>
                Phone: +64 22 415 2822 / 022 415 2822
            </p>
        </div>
    </main>
</template>

<script>
import HorizNav from "@/components/HorizNav.vue";
import emailjs from "emailjs-com";

const EMAILJS_USERID = "user_YNEDOy8h8taR8LpvwfehX";
const EMAILJS_SERVICEID = "service_b8nn3jm";
const EMAILJS_TEMPLATEID = "template_1gnjo7d";
const EMAIL_REPLYTO = "metal.carratt@gmail.com";

export default {
    components: { HorizNav },
    data() {
        return {
            firstName: "",
            lastName: "",
            subject: "",
            message: "",
            sent: false,
            sending: false
        }
    },
    methods: {
        sendEmail() {
            this.sending = true;
            const payload = {
                first_name: this.firstName,
                last_name: this.lastName,
                subject: this.subject,
                message: this.message,
                reply_to: EMAIL_REPLYTO
            };
            window.console.log("sending email");
            window.console.log(payload);
            emailjs.init(EMAILJS_USERID);
            emailjs
                .send(EMAILJS_SERVICEID, EMAILJS_TEMPLATEID, payload)
                .then(() => {
                    this.sent = true;
                    this.sending = false;
                    this.firstName = "";
                    this.lastName = "";
                    this.subject = "";
                    this.message = "";
                });
            window.console.log("sent");
        }
    }
}
</script>