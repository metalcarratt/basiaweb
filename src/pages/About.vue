<template>
    <main>
        <HorizNav />

        <h1>About Me</h1>
        <p>
            My name is Basia Garratt and you pronounce my first name like ‘Russia’ but with a
            ‘B’ not an ‘R’. Both of my parents were born in Poland but I was born in Wellington,
            New Zealand. My husband and I have travelled and lived in Warsaw, Poland for four
            years and London for three years, but now reside in Hamilton, New Zealand. Transcription
            of radio messages, proofreading, typesetting, and travelling for book distribution
            were just some of my tasks while living in Poland. Whereas in London we assisted in
            setting up and running a cafe and bookshop near Kings Cross Station.
        </p>
        <p>
            In 2009 I received a Diploma in Proofreading, Editing and Publishing from the New
            Zealand Institute of Business Studies and in 2012 a Certificate in English Language
            Teaching (TESOL) in London. On returning to New Zealand in 2013 I began
            proofreading for students with English as a second language from the University of
            Auckland, with many coming from Indonesia, Cambodia, Vietnam, the Philippines
            and Pacific Islands.
        </p>
        <p>
            Apart from taking on work from students I am also interested in proofing children’s
            short stories, cookbooks, reports and journal articles, etc. I am an avid cook and
            baker/ sampler of delicious café wares. 
        </p>

        <br/>
        <p class="quote inline">“Your fast and efficient work made the hard time of the thesis submission period a lot easier.” <label>Paula Sanchez</label></p>
        <router-link to="testimonials.html">See my testimonials</router-link>
    </main>
</template>

<script>
import HorizNav from "@/components/HorizNav.vue";

export default {
    components: { HorizNav }    
}
</script>