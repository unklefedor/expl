<template>
    <v-container>
        <div class="breadcrumbs">
            <a :href="'/'">BLOCKCHAIN EXPLORER / BLOCK</a>
        </div>

        <h1>
            <v-flex>Block {{ block.height }}
                <a v-if="block.previousBlockHash" :href="'/block/' + block.previousBlockHash + '/'">&#x25C0;</a>
                <a v-if="block.nextBlockHash" :href="'/block/' + block.nextBlockHash + '/'">&#x25B6;</a>
            </v-flex>
        </h1>

        <v-flex class="hash_block">{{ block.hash }}</v-flex>

        <v-flex class="block_info">
            <h2>Summary</h2>
            <table class="info_columns">
                <tr>
                    <td>Transaction</td>
                    <td class="value">{{ block.txs }}</td>
                    <td>Version</td>
                    <td class="value">{{ block.version }}</td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td class="value">{{ block.height }}</td>
                    <td>Merkle Root</td>
                    <td class="value">{{ block.merkle }}</td>
                </tr>
                <tr>
                    <td>Confirmations</td>
                    <td class="value">{{ block.confirmations }}</td>
                    <td>Nonce</td>
                    <td class="value">{{ block.nonce }}</td>
                </tr>
                <tr>
                    <td>Timestamp</td>
                    <td class="value">{{ block.time }}</td>
                    <td>Bits</td>
                    <td class="value">{{ block.bits }}</td>
                </tr>
                <tr>
                    <td>Size (bytes)</td>
                    <td class="value">{{ block.size }}</td>
                    <td>Difficulty</td>
                    <td class="value">{{ block.difficulty }}</td>
                </tr>
            </table>
        </v-flex>

    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                block: {
                    height: 993913,
                    hash: '0x9812e6dc6a405c5c35fe41462f21259b352972c43701128ea1727b2cff6e2847',
                    previousBlockHash: '0x9812e6dc6a405c5c35fe41462f21259b352972c43701128ea1727b2cff6e2847',
                    nextBlockHash: '0x9812e6dc6a405c5c35fe41462f21259b352972c43701128ea1727b2cff6e2847',
                    txs: 243,
                    confirmations: 4,
                    time: (new Date()).getTime()/1000,
                    size: 176,
                    version: 1,
                    //merkle: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
                    merkle: '4a5e1e4baab89f3a32518a8',
                    nonce: '2009-01-03 18:15:05',
                    bits: '0000000000000000000000000000012',
                    difficulty: "14134134143"
                },
                params: [
                    'confirmations',
                    'size',
                    'time',
                    'nonce',
                    'difficulty',
                    'txCount'
                ],
            }
        },

        created () {
            this.update()
        },

        methods: {
            async update () {
                this.block = await this.$http.getBlock(this.$route.params.height)
            }
        },
    }
</script>

<style scoped>
    .hash_block {
        margin-top: 32px;
        background-color: #F2FAFE;
        border-radius: 16px;
        font-size: 16px;
        padding-left: 16px;
        height: 48px;
        line-height: 48px;
    }

    .block_info {
        font-size: 16px;
        margin-top: 64px;
        padding: 48px;
        box-shadow: 0px 8px 24px rgba(30, 54, 94, 0.1), 0px 4px 12px rgba(30, 54, 94, 0.1), 0px 2px 4px rgba(3, 30, 76, 0.25);
        border-radius: 16px;
        display: flex;
        flex-direction: column;
    }

    .info_columns{
        padding-left: 0px;
    }

    .info_columns td {
        width: 25%;
        line-height: 32px;
    }

    .info_columns .value {
        font-weight: bold;
    }

    .block_info h2 {
        font-size: 32px;
    }
</style>