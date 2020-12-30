<template>
<v-app>
    <toolbar></toolbar>
    <mt></mt>
    <section class="hidden-sm-and-down">
        <v-card :color="color1" class="section">
            <div class="text">
                <span>E</span>
                <span>V</span>
                <span>E</span>
                <span>N</span>
                <span>T</span>
                <span></span>
                <span>H</span>
                <span>E</span>
                <span>L</span>
                <span>P</span>
                <span>E</span>
                <span>R</span>
                <span>S</span>
            </div>

            <v-layout align-center justify-center fill-height wrap row>

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
        <v-card :color="color1" style="padding-top:95px;padding-bottom:25px" class="px-3">
            <div class="text">
                <span>E</span>
                <span>V</span>
                <span>E</span>
                <span>N</span>
                <span>T</span>
                <span></span>
                <span>H</span>
                <span>E</span>
                <span>L</span>
                <span>P</span>
                <span>E</span>
                <span>R</span>
                <span>S</span>
            </div>
            <v-layout align-center justify-center fill-height wrap row>
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
        <v-card :color="color2" class="section1 white--text">
            <v-layout fill-height align-center justify-center row wrap>
                <v-flex md4 xs12 text-xs-left pl-5>
                    Event 2020
                </v-flex>
                <v-flex md4 xs12 text-xs-center>
                    All Right reserved 2020
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
import toolbar from "../toolbar";
import mt from "../mobiletoolbar";
import person from "../../assets/person.jpg";

export default {
    components: {
        toolbar,
        mt
    },
    data() {
        return {
            color1: "grey darken-4",
            person: person
        };
    },

};
</script>

<style scoped>
.section {
    width: 100%;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 80px;
    padding-bottom: 40px;
}

.section1 {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
}

.text {
    display: flex;
    justify-content: center;
    margin-top: 2vh;
    transform: translateY(-50%);
    color: #e53935;
    font-weight: 600;
    text-align: center;
    font-size: 20px;
    transition: transform 0.3s ease-in-out;
}

.text:hover {
    transform: rotateX(35deg), translateY(-50%);
    color: #039be5;
}

.text:hover span {
    color: #ccc;
}

.text:hover span:nth-child(odd) {
    transform: skewY(15deg);
}

.text:hover span:nth-child(even) {
    transform: skewY(-15deg);
    background-color: #f9f9f9;
    color: #a6a6a6;
}

.text>span {
    display: block;
    background-color: #fff;
    width: 60px;
    height: 60px;
    line-height: 60px;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out,
        background-color 0.3s ease-in-out;
    box-shadow: 0 40px 50px rgba(0, 0, 0, 0.1);
}

.text>span:first-child {
    border-radius: 5px 0 0 5px;
}

.photos {
    border: 2px solid #d5d5d5;
}

.photos:hover {
    border: 2px solid #e53935;
}

.name {
    font-family: "Courgette", cursive;
    font-size: 18px;
    color: white;
}

.sub-name {
    opacity: 0.5;
    font-family: "Courgette", cursive;
    margin-top: -15px;
    color: white;
}

.coo {
    padding: 3px 15px;
    color: white;
}

.coo:hover {
    color: white;
}
</style>
