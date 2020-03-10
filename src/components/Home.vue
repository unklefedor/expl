<template>
    <v-container>
        <div class="search_block">
            <div class="img_explorer"></div>
            <div class="img_explorer2"></div>
            <div class="header">Ethereum Blockchain Explorer</div>
            <v-text-field class="search_string" v-on:keypress="submitSearch" :placeholder="'Search for block, transaction, address'"></v-text-field>
            <div class="powered">powered by <span>CRYPTOPAY</span></div>
        </div>

        <header class="header">
            Blocks
        </header>
        <v-data-table
                :headers="headers"
                :items="blocks"
                :disable-sort="true"
                v-on:click:row="tableRowClick"
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
    tableRowClick(e, v) {
        this.$router.push('/block/'+v.item.Height+'/')
    },

    async update () {
      this.blocks = (await this.$http.getLastBlocks()).blocks
    },

    submitSearch(e) {
        if (e.key === 'Enter') {
            let search = e.target.value

            this.$router.push('/search?s='+search)
        }
    }
  },
}
</script>

<style>
    .search_block .search_string .v-input__slot {
        margin-top: 10px;
        margin-left: 12px;
    }

    .search_block .search_string .v-input__control {
        background-color: #fff;
        border-radius: 8px;
        color: #ccc;
        font-size: 24px;
        height: 56px;
        margin-top: 8px;
    }

    .search_block .v-text-field__details {
        display: none;
    }

    .search_block .v-text-field > .v-input__control > .v-input__slot::after,
    .search_block .v-text-field > .v-input__control > .v-input__slot::before {
        border: none;
    }

    .search_block .primary--text .v-input__control {
        border: 1px solid #029EE4;
    }

    .v-data-table tbody tr:hover td .time_sub {
        color: #0176AB;
    }

    .v-data-table tbody tr:hover td {
        background-color: #F2FAFE;
        cursor: pointer;
        color: #0176AB;
    }
</style>

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

    .search_block .header {
        margin-top: 0px;
    }

    .search_block .v-input {
        flex: none;
    }

    .search_block .powered {
        font-size: 12px;
        color: #029EE4;
        margin-top: 27px;
    }

    .search_block .powered span {
        font-size: 16px;
        font-weight: bold;
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
