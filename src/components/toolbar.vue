<template>
<div class="hidden-sm-and-down">
    <v-toolbar :dark="dark" :color="color" fixed flat height="100px" data-app>
        <v-btn icon @click.stop="drawer = !drawer" large class="ml-5">
            <v-icon large>sort</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon large class="mr-5" @click="$router.push('/')">
            <v-icon large>home</v-icon>
        </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" style="position:fixed" absolute :dark="dark" class="black" width="700" temporary>
        <v-list>
            <v-layout align-end justify-space-between>
                <p class="myhead ml-5">Event 2020</p>
                <v-btn icon @click.stop="drawer = !drawer" large class="mr-5 mt-4 border">
                    <v-icon large class>clear</v-icon>
                </v-btn>
            </v-layout>
            <v-layout row wrap align-ceter justify-center pa-5>
                <v-flex md12 xs12>
                    <v-layout>
                        <v-flex md6>
                            <div class="pl-5 ml-4">
                                <p class="head">Go to</p>
                                <ul>
                                    <li @click="$router.push('/')">Home</li>
                                </ul>
                            </div>
                        </v-flex>
                        <v-flex md6>
                            <div class="pl-5 ml-4">
                                <p class="head">Event</p>
                                <ul>
                                    <li @click="$router.push('/eventdetails')">event</li>
                                </ul>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex md12 xs12 mt-4>
                    <v-layout>
                        <v-flex md6>
                            <div class="pl-5 ml-4">
                                <p class="head">co-ordinators</p>
                                <ul>
                                    <li @click="$router.push('/person')">Co Ordinator</li>
                                </ul>
                            </div>
                        </v-flex>
                        <v-flex md6>
                            <div class="pl-5 ml-4">
                                <p class="head">Contact Us</p>
                                <ul>
                                    <li @click.stop="dialog0 = !dialog0">Contact</li>
                                </ul>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-list>
    </v-navigation-drawer>

    <!-- Dialog Box -->
    <v-dialog v-model="dialog0" max-width="600">
        <v-card :color="color1">
            <v-card-title class="white">
                <p class="head1 pt-3">Contact - Event 2020</p>
                <v-spacer></v-spacer>
                <v-btn icon @click.stop="dialog0 = !dialog0" class="border">
                    <v-icon>clear</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="white--text">
                <v-layout row wrap align-start justify-start>
                    <v-flex text-xs-left mx-2>
                        <p>name</p>
                        <p>sub name</p>
                        <p>9876543210</p>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-dialog>

</div>
</template>

<script>
export default {
    data() {
        return {
            color1: "grey darken-3",
            color: "transparent",
            dark: true,
            drawer: null,
            items: [{
                    title: "Home",
                    icon: "dashboard"
                },
                {
                    title: "About",
                    icon: "question_answer"
                }
            ],
            right: null,
            dialog0: false,
            dialog1: false,
            dialog2: false,
            dialog3: false
        };
    }
};
</script>

<style scoped>
.myhead {
    font-family: "Oleo Script", cursive;
    background: -webkit-linear-gradient(#ff8a00, #e52e71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    font-weight: 600;
}

.border:hover {
    color: red;
}

ul {
    list-style-type: none;
    list-style-position: outside;
}

.head {
    background: -webkit-linear-gradient(#ff8a00, #e52e71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 19px;
    font-family: "Bebas Neue", cursive;
    padding-left: 10px;
}

.head1 {
    background: linear-gradient(#ff8a00, #e52e71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 19px;
    font-family: "Bebas Neue", cursive;
    padding-left: 10px;
}

li {
    color: #c5cae9;
    padding: 3px;
    font-weight: 550;
    cursor: pointer;
    font-size: 15px;
}

li:hover {
    background: -webkit-linear-gradient(#ff8a00, #e52e71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
}
</style>
