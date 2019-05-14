<template>
  <v-responsive>
    <v-layout>
      <v-flex xs4></v-flex>
      <v-flex xs4>
        <v-layout row wrap>
          <v-flex xs12 text-md-center>
            <img class="pa-5 img" src="../assets/logo.png" alt=""/>
          </v-flex>
          <v-flex xs12>
            <v-text-field outline label="Login"></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field outline label="Senha"></v-text-field>
          </v-flex>

          <v-btn flat block>Entrar</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-responsive>
</template>

<script>
export default {};
</script>

<style>
  .img{
    width: 100%;
  }
</style>
