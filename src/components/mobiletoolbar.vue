<template>
<div class="hidden-md-and-up">
    <v-toolbar :dark="dark" :color="color" fixed flat height="100px" data-app>
        <v-btn icon @click.stop="drawer = !drawer" large class="ml-2">
            <v-icon large>sort</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon large class="mr-2" @click="$router.push('/')">
            <v-icon large>home</v-icon>
        </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary right width="300" class="black" dark style="position:fixed;">
        <v-layout align-end justify-space-between>
            <p class="myhead ml-3 mt-3">
                Event 2020
            </p>
            <v-spacer></v-spacer>
            <v-btn icon class="mb-2" @click.stop="drawer = !drawer">
                <v-icon>close</v-icon>
            </v-btn>
        </v-layout>
        <v-divider></v-divider>
        <v-list>
            <v-list-tile @click="$router.push('/')">
                <v-list-tile-action>
                    <v-icon class="red--text">spa</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>Home</v-list-tile-content>
            </v-list-tile>

            <v-list-group v-for="item in items" :key="item.title" v-model="item.active" no-action>
                <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon class="red--text">spa</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
                <div v-for="subItem in item.items" :key="subItem.title">
                    <v-list-tile @click="$router.push(subItem.name)">
                        <v-list-tile-content>
                            <v-list-tile-title v-text="subItem.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </div>
            </v-list-group>

            <v-list-group no-action>
                <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon class="red--text">spa</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title> Contact Us</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>

                <v-list-tile @click.stop="dialog0 = !dialog0">
                    <v-list-tile-content>
                        <v-list-tile-title>Contact</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-group>
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
            drawer: false,
            items: [{
                    action: "dynamic_feed",
                    title: "Events",
                    items: [{
                        title: "Event",
                        name: "/eventdetails"
                    }]
                },
                {
                    action: "build",
                    title: "Co-Ordinators",
                    items: [{
                        title: "co ordinator",
                        name: "/person"
                    }]
                }
            ],
            right: null,
            dialog0: false,
        };
    }
};
</script>

<style scoped>
.myhead {
    font-family: "Oleo Script", cursive;
    color: red;
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
    color: red;
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
    color: #e64a19;
    cursor: pointer;
}

.v-list__group__header__prepend-icon .v-icon {
    color: red;
}
</style>
