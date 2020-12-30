<template>
  <div>
    <v-layout>
      <v-card class="chatbot" v-show="dialog" width="400" height="400">
        <v-card-title class="headline grey darken-3 white--text head">
          Chat with your friend...!
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="dialog = !dialog" class="border white--text">
            <v-icon>clear</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text
          style="width:400;height:250px;overflow:hidden;overflow-y:scroll"
        >
          {{ message }}
        </v-card-text>
        <v-card-actions class="headline grey lighten-2 head">
          <v-text-field class="pt-2" v-model="message" color="red" ></v-text-field>
          
          <v-btn color="indigo" small icon fab>
            <v-icon class="white--text" small>send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-btn color="red" fab x-large dark @click.stop="dialog = !dialog">
        <v-icon>chat_bubble </v-icon>
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      usermessage: [],
      message:"",
    };
  },
  methods: {
    usermsg: function() {

    }
  }
};
</script>

<style scoped>
.dialog {
  padding-left: 50%;
}
.chatbot {
  margin-bottom: 100px;
}
</style>
