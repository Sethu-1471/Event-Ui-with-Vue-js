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
        </div>
        <v-layout>
          <v-flex md4 xs12 pa-4>
            <img :src="p1" alt width="100%" class="photos" />
          </v-flex>
          <v-flex md6 xs12 pa-4>
            <p class="eventname">Event Name</p>
            <p class="eventdate">Date:27 Feb 2060</p>
            <p class="eventvenue">Venue</p>
            <p class="eventdestitle">Description</p>
            <p class="eventdes">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officiis voluptate quis quas dolore mollitia, doloribus hic autem velit, reiciendis dolorem, quidem consequatur. Sapiente repellat, cumque quibusdam iste aliquam beatae?
            </p>
            <a
              href="#"
              target="_blank"
              style="text-decoration:none"
            >
              <v-btn class="red darken-3 white--text" style="border-radius:5px">Registration</v-btn>
            </a>

            <v-btn
              class="red darken-3 white--text"
              style="border-radius:5px"
              @click="$router.push('/person')"
            >co-ordinators</v-btn>
          </v-flex>
        </v-layout>
        <v-divider class="white"></v-divider>
       
      </v-card>
    </section>

    <!-- mobile -->
    <section class="hidden-md-and-up">
      <v-card :color="color1" style="padding-top:40px;padding-bottom:25px" class="px-3">
        <div class="text">
          <span>E</span>
          <span>V</span>
          <span>E</span>
          <span>N</span>
          <span>T</span>
        </div>
        <v-layout row wrap>
          <v-flex md4 xs12 pa-4>
            <img :src="p1" alt width="100%" class="photos" />
          </v-flex>
          <v-flex md6 xs12 pa-4>
            <p class="eventname">Event Name</p>
            <p class="eventdate">Date:27 Feb 2060</p>
            <p class="eventvenue">Venue</p>
            <p class="eventdestitle">Description</p>
            <p class="eventdes">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officiis voluptate quis quas dolore mollitia, doloribus hic autem velit, reiciendis dolorem, quidem consequatur. Sapiente repellat, cumque quibusdam iste aliquam beatae?
            </p>
            <a
              href="#"
              target="_blank"
              style="text-decoration:none"
            >
              <v-btn class="red darken-3 white--text" style="border-radius:5px">Registration</v-btn>
            </a>

            <v-btn
              class="red darken-3 white--text"
              style="border-radius:5px"
              @click="$router.push('/person')"
            >co-ordinators</v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </section>

    <section>
      <v-card :color="color2" class="section1 white--text">
        <v-layout fill-height align-center justify-center row wrap>
          <v-flex md4 xs12 text-xs-left pl-5>Event 2020</v-flex>
          <v-flex md4 xs12 text-xs-center>All Right reserved 2020</v-flex>
          <v-flex md4 xs12 text-xs-right pr-5>@WebTeam</v-flex>
        </v-layout>
      </v-card>
    </section>
  </v-app>
</template>

<script>
import toolbar from "../toolbar";
import mt from "../mobiletoolbar";
import p1 from "@/assets/events/events.gif";
export default {
  components: {
    toolbar,
    mt
  },
  data() {
    return {
      color1: "#100E17",
      p1: p1,
    };
  }
};
</script>

<style scoped>
.eventname {
  font-family: "Bangers", cursive;
  font-size: 28px;
  color: white;
}
.eventname:hover {
  background: -webkit-linear-gradient(#ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.eventdate {
  opacity: 0.6;
  color: white;
}
.eventvenue {
  opacity: 0.7;
  color: white;
}
.eventdestitle {
  background: -webkit-linear-gradient(#ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
}
.eventdes {
  font-size: 16px;
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: justify;
}
li {
  font-size: 16px;
  color: white;
  font-family: "Roboto", sans-serif;
}
.bid {
  font-size: 16px;
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: justify;
}
.section {
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
.text {
  display: flex;
  justify-content: center;
  margin-top: 10vh;
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
.text > span {
  display: block;
  background-color: #fff;
  width: 60px;
  height: 60px;
  line-height: 60px;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  box-shadow: 0 40px 50px rgba(0, 0, 0, 0.1);
}
.text > span:first-child {
  border-radius: 5px 0 0 5px;
}
.photos {
  border: 2px solid #d5d5d5;
}
.photos:hover {
  border: 2px solid #e53935;
}
</style>
