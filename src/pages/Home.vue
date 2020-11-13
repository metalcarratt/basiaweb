<template>
    <main>
        <HorizNav />

        
            <br/>
            <p>
                If you have checked your work and just need a fresh pair of eyes to scan it again
                for anything you may have missed, then my proofreading service is available. Let
                me know if your deadline is approaching for my Express service, or perhaps you are
                a student and/or English is your second language.
            </p>

            <img class="profile" src="img/profile.jpg"/>

            <ul class="menu">
                <li><router-link to="/about.html">About Me</router-link></li>
                <li><router-link to="/services.html">Services</router-link></li>
                <li><router-link to="/testimonials.html">Testimonials</router-link></li>
                <li><router-link to="/contact.html">Contact</router-link></li>
            </ul>

            <p>I have proofread a variety of subjects from general assignments to Master’s degrees and PhD theses:</p>
            <ul>
                <li>Biology – Chemical Engineering – Geothermal Energy – Geology</li>
                <li>Applied Practices – Development Studies – Economics</li>
                <li>Environmental Science – Food Science</li>
                <li>Evolutionary Psychology – Public Health – Pharmacology</li>
                <li>Foreign Policy – Public Policy, etc.</li>
            </ul>

        
<!--
            <h2>Types of Work I do</h2>
            <table>
                <tr>
                    <th>Students / Students with English as a Second Language</th>
                    <td>Assignments, essays, dissertations, PhDs, research papers, reports, journal articles, cover letters, theses</td>
                </tr>
                <tr>
                    <th>Academic</th>
                    <td>PhDs, research proposals/papers, theses, journal articles</td>
                </tr>
                <tr>
                    <th>Business</th>
                    <td>Journal articles, reports, presentations, magazines, newsletters, press releases</td>
                </tr>
                <tr>
                    <th>Authors</th>
                    <td>Short stories, articles, children’s books, cookbooks</td>
                </tr>
            </table>
            -->
           
    </main>
</template>

<script>
import HorizNav from "@/components/HorizNav.vue";

export default {
    components: { HorizNav }
}
</script>