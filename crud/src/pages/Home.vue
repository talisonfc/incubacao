<template>
  <div>
    <v-toolbar dark color="primary" app>
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">SIGNuplam</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <div class="pa-2">
      <v-layout row wrap>
        <v-flex xs6>
          <v-btn flat color="primary" @click="dialog = true">
            <v-icon>add</v-icon>Adicionar
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <v-text-field
            solo
            hide-details
            prepend-inner-icon="search"
            placeholder="Buscar"
            background-color="white"
            clearable
          ></v-text-field>
        </v-flex>
      </v-layout>
    </div>

    <div>
      <v-list one-line>
        <v-divider></v-divider>
        <template v-for="(item, index) in dados">
          <v-list-tile :key="index" subheader>
            <v-list-tile-avatar>
              <v-icon>person</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>{{item.nome}}</v-list-tile-content>

            <v-list-tile-action>
              <div>
                <v-btn icon>
                  <v-icon color="grey">edit</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="grey">delete</v-icon>
                </v-btn>
              </div>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider :key="index"></v-divider>
        </template>
      </v-list>
    </div>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar card dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
          <v-menu bottom right offset-y>
            <template v-slot:activator="{ on }">
              <v-btn dark icon v-on="on">
                <v-icon>more_vert</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-tile v-for="(item, i) in items" :key="i">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-card-text>
          <v-btn color="primary" dark @click="dialog2 = !dialog2">Open Dialog 2</v-btn>
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on">Tool Tip Activator</v-btn>
            </template>
            Tool Tip
          </v-tooltip>
          <v-list three-line subheader>
            <v-subheader>User Controls</v-subheader>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Content filtering</v-list-tile-title>
                <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Password</v-list-tile-title>
                <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-subheader>General</v-subheader>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox v-model="notifications"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Notifications</v-list-tile-title>
                <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox v-model="sound"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Sound</v-list-tile-title>
                <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox v-model="widgets"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Auto-add widgets</v-list-tile-title>
                <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card-text>

        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      dialog: false
    };
  },
  computed: mapState(["dados"])
};
</script>

<style>
</style>
