<template>
<v-app>
    <toolbar></toolbar>
    <mt></mt>
    <section>
        <v-card :color="cardcolor" class="myavantaa ">
            <event class="hidden-sm-and-down"></event>
            <eventmobile class="hidden-md-and-up"></eventmobile>
        </v-card>
    </section>

    <section class="hidden-sm-and-down">
        <v-card :color="color1" class="section" :dark="dark">
            <v-layout row wrap>
                <v-flex xs12 md12>
                    <v-layout row wrap>
                        <v-flex xs12 md6 text-xs-center>
                            <p>
                                <span class="welcome">Event 2020 </span> <br />
                                <span class="youall"> Welcome you All</span>
                            </p>
                            <div>

                            </div>
                            <p class="date">Date: 27 feburary 2560</p>
                            <p class="date">Venue: Some Place</p>
                        </v-flex>
                        <v-flex xs12 md6 text-xs-center>
                            <img :src="eve" alt="" width="50%" />
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-card>
    </section>
    <!-- mobile -->
    <section class="hidden-md-and-up">
        <v-card :color="color1" style="padding-top:25px;padding-bottom:25px" :dark="dark" class="px-3">
            <v-layout row wrap>
                <v-flex xs12 md12>
                    <v-layout row wrap>
                        <v-flex xs12 md6 text-xs-center>
                            <p>
                                <span class="welcome">Event 2020 </span> <br />
                                <span class="youall"> Welcome you All</span>
                            </p>

                            <p class="date">Date: 27 feburary 2450</p>
                            <p class="date">Venue: Some Event</p>
                        </v-flex>
                        <v-flex xs12 md6 text-xs-center>
                            <img :src="eve" alt="" width="70%" />
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-card>
    </section>

    <section class="hidden-sm-and-down">
        <v-card :color="color2" class="section3" :dark="dark">
            <center>
                <p class="avantaa ">Events</p>
            </center>
            <v-layout row wrap mt-5>
                <v-flex md4 xs12 pa-3>
                    <img :src="eve" alt="" width="100%" style="border: 1.5px solid #d5d5d5;" />

                    <v-menu open-on-hover bottom offset-y offset-overflow>
                        <template v-slot:activator="{ on }">
                            <v-btn class="white black--text" v-on="on">
                                Event one
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-tile class="drop" @click="$router.push('/eventdetails')">
                                <v-list-tile-title>event 1</v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile class="drop" @click="$router.push('/eventdetails')">
                                <v-list-tile-title>event 2</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p class="sub">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, totam. Nam vitae qui animi quod, praesentium nihil hic adipisci, dolor placeat illo minus quam mollitia consectetur! Corporis esse quibusdam fuga.
                        </p>
                    </div>
                </v-flex>
                <v-flex md4 xs12 pa-3>
                    <img :src="eve" alt="" width="100%" style="border: 1.5px solid #d5d5d5;" />
                    <v-btn class="white black--text">
                        Event Two
                    </v-btn>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p class="sub">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia pariatur quia ipsam laudantium consectetur, maxime voluptatem libero iste dolore error perferendis, nihil, repellat ipsum animi nobis. Eveniet, ratione sunt.
                        </p>
                    </div>
                </v-flex>
                <v-flex md4 xs12 pa-3>
                    <img :src="eve" alt="" width="100%" style="border: 1.5px solid #d5d5d5;" />
                    <v-btn class="white black--text">
                        Event Three
                    </v-btn>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p class="sub">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium temporibus error officia et in totam, placeat repellendus est? Incidunt aliquam nesciunt, impedit beatae facere a laboriosam dicta ab quia qui.
                        </p>
                    </div>
                </v-flex>
            </v-layout>
        </v-card>
    </section>

    <!-- mobile -->
    <section class="hidden-md-and-up">
        <v-card :color="color2" style="padding-top:25px;padding-bottom:25px" :dark="dark">
            <center>
                <p class="avantaa ">Events</p>
            </center>
            <v-layout row wrap mt-5>
                <v-flex md4 xs12 pa-3>
                    <img :src="eve" alt="" width="100%" style="border: 1.5px solid #d5d5d5;" />

                    <v-menu open-on-hover bottom offset-y offset-overflow>
                        <template v-slot:activator="{ on }">
                            <v-btn class="white black--text" v-on="on">
                                Event one
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-tile class="drop">
                                <v-list-tile-title>event 1</v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile class="drop">
                                <v-list-tile-title>event 2</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                    <p class="sub">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A obcaecati optio distinctio! Doloremque obcaecati debitis omnis nemo sint dolorum neque, facilis, dolores iusto atque at et blanditiis eligendi, assumenda consequatur.
                    </p>
                </v-flex>
                <v-flex md4 xs12 pa-3>
                    <img :src="eve" alt="" width="100%" style="border: 1.5px solid #d5d5d5;" />
                    <v-btn class="white black--text">
                        Event Two
                    </v-btn>
                    <p class="sub">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quis. Sunt ratione omnis, ipsum inventore similique corrupti minima assumenda repudiandae sequi enim ea dolor fugit laudantium, laborum consectetur mollitia doloremque?
                    </p>
                </v-flex>
                <v-flex md4 xs12 pa-3>
                    <img :src="eve" alt="" width="100%" style="border: 1.5px solid #d5d5d5;" />
                    <v-btn class="white black--text">
                        Event Three
                    </v-btn>
                    <p class="sub">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sunt rem aspernatur commodi, saepe, explicabo ab dicta consequatur eius iure suscipit aut impedit, magni perspiciatis beatae! Exercitationem inventore ab delectus!
                    </p>
                </v-flex>
            </v-layout>
        </v-card>
    </section>

    <section class="hidden-sm-and-down">
        <v-card :color="color1" class="section4" :dark="dark">
            <center>
                <p class="avantaa ">Co-ordinators</p>
            </center>
            <v-layout align-center justify-center fill-height wrap row>

                <v-card class="text-xs-center coo" flat color="transparent">
                    <img :src="person" alt="" width="200px" height="300" class="photos" />
                    <p class="name">name</p>
                    <p class="sub-name">sub name</p>
                    <p class="sub-name">number</p>
                </v-card>

                <v-card class="text-xs-center coo" flat color="transparent">
                    <img :src="person" alt="" width="200px" height="300" class="photos" />
                    <p class="name">name</p>
                    <p class="sub-name">sub name</p>
                    <p class="sub-name">number</p>
                </v-card>

                <v-card class="text-xs-center coo" flat color="transparent">
                    <img :src="person" alt="" width="200px" height="300" class="photos" />
                    <p class="name">name</p>
                    <p class="sub-name">sub name</p>
                    <p class="sub-name">number</p>
                </v-card>

            </v-layout>
        </v-card>
    </section>

    <!-- mobile -->
    <section class="hidden-md-and-up">
        <v-card :color="color1" class="hidden-md-and-up" style="padding-top:25px;padding-bottom:25px" :dark="dark">
            <center>
                <p class="avantaa ">Co-ordinators</p>
            </center>
            <v-layout align-center justify-center fill-height wrap row>

                <v-card class="text-xs-center coo" flat color="transparent">
                    <img :src="person" alt="" width="200px" height="300" class="photos" />
                    <p class="name">name</p>
                    <p class="sub-name">sub name</p>
                    <p class="sub-name">number</p>
                </v-card>

                <v-card class="text-xs-center coo" flat color="transparent">
                    <img :src="person" alt="" width="200px" height="300" class="photos" />
                    <p class="name">name</p>
                    <p class="sub-name">sub name</p>
                    <p class="sub-name">number</p>
                </v-card>

                <v-card class="text-xs-center coo" flat color="transparent">
                    <img :src="person" alt="" width="200px" height="300" class="photos" />
                    <p class="name">name</p>
                    <p class="sub-name">sub name</p>
                    <p class="sub-name">number</p>
                </v-card>

                <v-card class="text-xs-center coo" flat color="transparent">
                    <img :src="person" alt="" width="200px" height="300" class="photos" />
                    <p class="name">name</p>
                    <p class="sub-name">sub name</p>
                    <p class="sub-name">number</p>
                </v-card>
            </v-layout>
        </v-card>
    </section>

    <section>
        <v-card :color="color2" class="section1" :dark="dark">
            <v-layout fill-height align-center justify-center row wrap>
                <v-flex md4 xs12 text-xs-left pl-5>
                    Event 2020
                </v-flex>
                <v-flex md4 xs12 text-xs-center>
                    All Right reserved - 2020
                </v-flex>
                <v-flex md4 xs12 text-xs-right pr-5>
                    @WebTeam
                </v-flex>
            </v-layout>
        </v-card>
    </section>
</v-app>
</template>

<script>
import toolbar from "./toolbar";
import mt from "./mobiletoolbar";
import event from "./event";
import eventmobile from "./eventmobile";
import eve from "../assets/eve.png";
import person from "../assets/person.jpg";

export default {
    components: {
        toolbar,
        event,
        mt,
        eventmobile
    },
    data() {
        return {
            color1: "#200F21",
            cardcolor: "#140505",
            dark: true,
            eve: eve,
            person: person
        };
    }
};
</script>

<style scoped>
.section {
    width: 100%;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 40px;
    padding-bottom: 40px;
}

.section3 {
    width: 100%;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 40px;
    padding-bottom: 40px;
}

.section4 {
    width: 100%;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 40px;
    padding-bottom: 40px;
}

.section1 {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
}

.myavantaa {
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    perspective: 800px;
}

.date {
    color: #c5cae9;
    font-size: 20px;
    font-weight: 550;
    font-family: "Sigmar One", cursive;
}

.date:hover {
    background: -webkit-linear-gradient(#ff8a00, #e52e71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.avantaa {
    font-family: "Pacifico", cursive;
    font-weight: 600 !important;
    letter-spacing: inherit !important;
    color: white;
    text-transform: uppercase;
    font-size: 30px;
}

.avantaa :hover {
    background: -webkit-linear-gradient(#ff8a00, #e52e71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.welcome {
    font-family: "Sigmar One", cursive;
    font-weight: 500 !important;
    letter-spacing: inherit !important;
    color: #fff;
    text-transform: uppercase;
    font-size: 24px;
}

.youall {
    font-family: "Caveat", cursive;
    font-weight: 700 !important;
    letter-spacing: inherit !important;
    color: #e52e71;
    text-transform: uppercase;
    font-size: 18px;
}

.sub {
    text-align: justify;
    font-size: 15px;
}

.photos {
    border: 2px solid #d5d5d5;
}

.photos:hover {
    border: 3px solid #e53935;
}

.name {
    font-family: "Courgette", cursive;
    font-size: 18px;
    background: -webkit-linear-gradient(#ff8a00, #e52e71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.sub-name {
    opacity: 0.8;
    color: #fff;
    font-family: "Courgette", cursive;
    margin-top: -15px;
}

.coo {
    padding: 3px 15px;
    color: #d5d5d5;
}

.coo:hover {
    color: white;
}

.drop:hover {
    color: red;
}
</style>
