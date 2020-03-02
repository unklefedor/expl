<template>
    <v-data-table
            :headers="headers"
            :items="blocks"
            class="elevation-1"
    >
        <template v-slot:item.Height="{ item }">
            <a :href="'/block/' + item.Height + '/'">
                {{ item.Height }}
            </a>
        </template>
    </v-data-table>
</template>

<script>
export default {
  data () {
    return {
      headers: [
          { text: 'Height', align: 'left', value: 'Height' },
          { text: 'Hash', align: 'left', value: 'Hash' },
          { text: 'Timestamp', align: 'left', value: 'Time' },
          { text: 'Transactions', align: 'left', value: 'Txs' },
          { text: 'Size', align: 'left', value: 'Size' },
      ],

      blocks: []
    }
  },

  created () {
    this.update()
  },

  methods: {
    async update () {
      this.blocks = (await this.$http.getLastBlocks()).blocks
    }
  },
}
</script>
