<template>
    <v-container>
        <div class="search_block">
            <div class="img_explorer"></div>
            <div class="img_explorer2"></div>
            <div class="header">Ethereum Blockchain Explorer</div>
            <v-text-field class="search_string" :placeholder="'Search for block, transaction, address'"></v-text-field>
        </div>

        <header class="header">
            Blocks
        </header>
        <v-data-table
                :headers="headers"
                :items="blocks"
                :disable-sort="true"
        >
            <template v-slot:item.Height="{ item }">
                <a :href="'/block/' + item.Height + '/'">
                    {{ item.Height }}
                </a>
            </template>
            <template v-slot:item.Time="{ item }">
                <div>{{ item.Time | moment('DD MMM YYYY') }}</div>
                <div class="time_sub">{{ item.Time | moment('h:mm:ss')}} GMT{{ item.Time.getTimezoneOffset() / 60 > 0
                    ? item.Time.getTimezoneOffset() / 60
                    : "+" + -item.Time.getTimezoneOffset() / 60}}</div>
            </template>
        </v-data-table>
    </v-container>
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
          { text: 'Size', align: 'right', value: 'Size' },
      ],

      blocks: [
          {
              Height: 9527203,
              Hash: '0x4ecc34ffaca4206881e26796490cbedfbc8a4d9bec13bfa22ffa245d26a3a170',
              Time: (new Date()),
              Txs: 32555,
              Size: 147
          },{
              Height: 9527203,
              Hash: '0x4ecc34ffaca4206881e26796490cbedfbc8a4d9bec13bfa22ffa245d26a3a170',
              Time: (new Date()),
              Txs: 32555,
              Size: 147
          },{
              Height: 9527203,
              Hash: '0x4ecc34ffaca4206881e26796490cbedfbc8a4d9bec13bfa22ffa245d26a3a170',
              Time: (new Date()),
              Txs: 32555,
              Size: 147
          },{
              Height: 9527203,
              Hash: '0x4ecc34ffaca4206881e26796490cbedfbc8a4d9bec13bfa22ffa245d26a3a170',
              Time: (new Date()),
              Txs: 32555,
              Size: 147
          },{
              Height: 9527203,
              Hash: '0x4ecc34ffaca4206881e26796490cbedfbc8a4d9bec13bfa22ffa245d26a3a170',
              Time: (new Date()),
              Txs: 32555,
              Size: 147
          },
      ]
    }
  },

  created () {
    this.update()
  },

  methods: {
    async update () {
      //this.blocks = (await this.$http.getLastBlocks()).blocks
    }
  },
}
</script>

<style scoped>
    .search_block {
        background: linear-gradient(90deg, rgba(0, 210, 255, 0.1) 0%, rgba(58, 123, 213, 0.1) 100%);
        height: 480px;
        border-radius: 24px;
        margin-top: 180px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .search_block .search_string {
        width: 60%;
    }

    .search_block .header {
        font-size: 48px;
        display: block;
    }

    .search_block .img_explorer {
        background: url('../assets/explorer.svg');
        width: 244px;
        height: 393px;
        position: absolute;
        left: -30px;
        top: -115px;
        background-size: contain;
    }

    .search_block .img_explorer2 {
        background: url('../assets/explorer.svg');
        width: 179px;
        height: 288px;
        position: absolute;
        right: -40px;
        bottom: -105px;
        background-size: contain;
    }

    table tbody td:first-child {
        color: #029EE4;
    }

    table tbody td:first-child a {
        text-decoration: none;
    }
</style>
