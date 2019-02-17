<template>
  <v-layout row wrap>
    <v-flex xs11>
      <h2>Welcome to WaitWat</h2>
      <p>Pick at least one topic that interest you!</p>
    </v-flex>
    <v-flex xs1>
      <v-btn flat icon color="info" @click="submit">
        <v-icon>keyboard_arrow_right</v-icon>
      </v-btn>
    </v-flex>
    <v-flex class="ma-1" v-for="topic in topics" :key="topic.id">
      <topic-chip :topic="topic" @getSelected="onSelected"></topic-chip>
    </v-flex>
  </v-layout>
</template>
<script>
import TopicChip from '@/components/TopicChip'

export default {
  components: {
    TopicChip
  },
  data: function() {
    return {
      selected: [],
      topics: [
        {
          id: 1,
          name: 'News',
          status: false
        },
        {
          id: 2,
          name: 'Global News',
          status: false
        },
        {
          id: 3,
          name: 'Games',
          status: false
        },
        {
          id: 4,
          name: 'Technology',
          status: false
        },
        {
          id: 5,
          name: 'Politic',
          status: false
        },
        {
          id: 6,
          name: 'Travel',
          status: false
        },
        {
          id: 7,
          name: 'DIY',
          status: false
        },
        {
          id: 8,
          name: 'Social',
          status: false
        },
        {
          id: 9,
          name: 'Memes',
          status: false
        },
        {
          id: 10,
          name: 'Fashion',
          status: false
        },
        {
          id: 11,
          name: 'Freedom',
          status: false
        },
        {
          id: 12,
          name: 'America',
          status: false
        },
        {
          id: 13,
          name: 'Economy',
          status: false
        },
        {
          id: 14,
          name: 'Android',
          status: false
        },
        {
          id: 15,
          name: 'Donal Trump',
          status: false
        },
        {
          id: 16,
          name: 'Nature',
          status: false
        },
        {
          id: 17,
          name: 'Gold',
          status: false
        },
        {
          id: 18,
          name: 'Transportation',
          status: false
        },
        {
          id: 19,
          name: 'Blockchain',
          status: false
        },
        {
          id: 20,
          name: 'Forest',
          status: false
        },
        {
          id: 21,
          name: 'Intel',
          status: false
        },
        {
          id: 22,
          name: 'Pollution',
          status: false
        },
        {
          id: 23,
          name: 'Sport',
          status: false
        },
        {
          id: 24,
          name: 'DIY',
          status: false
        }
      ]
    }
  },
  methods: {
    onSelected(prop) {
      const selected = this.topics.find(element => {
        return element.id === prop.id
      })

      if (prop.status) {
        const newSelectedArr = this.selected.slice()
        newSelectedArr.push(selected)
        this.selected = newSelectedArr
      } else {
        const newSelectedArr = this.selected.slice()
        const index = newSelectedArr.indexOf(selected)
        newSelectedArr.splice(index, 1)
        this.selected = newSelectedArr
      }
    },
    async submit() {
      const names = this.selected.map(element => {
        return element.name
      })

      await this.$firestore
        .collection('users')
        .doc(this.$store.state.user.uid)
        .update({
          topics: names
        })

      this.$router.push({ path: `/` })
    }
  }
}
</script>
