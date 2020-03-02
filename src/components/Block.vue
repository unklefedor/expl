<template>
    <v-container>
        <h1>
            <v-flex>Block {{ block.height }}</v-flex>
        </h1>

        <v-flex>{{ block.hash }}</v-flex>
        <v-flex>
            <a :href="'/block/' + block.previousBlockHash + '/'">-prev</a>
            <a :href="'/block/' + block.nextBlockHash + '/'">next-</a>
        </v-flex>

        <v-list>
            <v-list-item-group v-model="block" color="primary">
                <v-list-item
                        v-for="(param, i) in params"
                        :key="i"
                >
                    <v-list-item-content>
                        <v-list-item-title v-html="param"></v-list-item-title>
                        <v-list-item-subtitle v-html="block[param]"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

        <v-list>
            <v-list-item-group v-model="block" color="primary">
                <v-list-item
                        v-for="(tx, i) in block.txs"
                        :key="i"
                >
                    <v-list-item-content>
                        <a :href="'/tx/' + tx.txid + '/'">{{ tx.txid }}</a>
                        <v-list>
                            <v-list-item-group v-model="block" color="primary">
                                <v-list-item
                                        v-for="(inaddr, i) in tx.vin"
                                        :key="i"
                                >
                                    <v-list-item-title v-html="vIns"></v-list-item-title>
                                    <v-list-item-subtitle v-html="inaddr.addresses"></v-list-item-subtitle>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                        <v-list>
                            <v-list-item-group v-model="block" color="primary">
                                <v-list-item
                                        v-for="(outaddr, i) in tx.vout"
                                        :key="i"
                                >
                                    <v-list-item-title v-html="vOut"></v-list-item-title>
                                    <v-list-item-subtitle v-html="outaddr.addresses"></v-list-item-subtitle>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                block: [],
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