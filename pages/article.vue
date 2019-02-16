<template>
  <div>
    <v-img :src="placeholder"></v-img>
    <h1>Some title that not so long but not so short</h1>
    <small>Written by: Samuel L. Jackson - 12 Jan 2019</small>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <h2>Comments</h2>
    <v-list two-line>
      <v-list-tile avatar ripple>
        <v-list-tile-avatar>
          <img :src="placeholder">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>User 1</v-list-tile-title>
          <v-list-tile-sub-title>This is bullshit</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-list-tile-action-text>1 month ago</v-list-tile-action-text>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile avatar ripple>
        <v-list-tile-avatar>
          <img :src="placeholder">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Harry</v-list-tile-title>
          <v-list-tile-sub-title>Ridikulus</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-list-tile-action-text>1 month ago</v-list-tile-action-text>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

    <v-card>
      <v-textarea
        name="input-7-1"
        box
        hide-details
        label="Comment"
        auto-grow
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      ></v-textarea>
      <v-card-actions>
        <v-switch class="mt-0" color="red" value="red" hide-details></v-switch>
        <v-spacer></v-spacer>
        <v-btn flat color="orange">Share</v-btn>
      </v-card-actions>
    </v-card>
    <!-- Related Articles -->
    <v-card>
      <v-container fluid grid-list-lg>
        <h2>Related Articles</h2>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">Article Title</div>
                  <span>Article excerpt. Sed congue cursus libero a scelerisque. Donec id vestibulum nunc. Nam sed ipsum pharetra nisl dapibus ornare. Etiam a porta elit. Donec placerat quam ante, ultrices ultrices est placerat ac. Donec a ipsum auctor orci malesuada placerat.</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  created: function() {
    console.log('hola! load from api')
  },
  data: function() {
    return {
      placeholder: 'https://placehold.it/500x250'
    }
  }
}
</script>

<style>
.v-input--switch__track.theme--dark {
  color: #1976d2;
}

.v-input--switch__thumb.theme--dark {
  color: #2196f3;
}
</style>

