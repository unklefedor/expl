<template>
    <v-container>
    <v-flex>{{ tx }}</v-flex>
    <a :href="'/address/' + tx.vin[0].addresses[0] + '/'">{{ tx.vin[0].addresses[0] }}</a>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                tx: []
            }
        },

        created () {
            this.update()
        },

        methods: {
            async update () {
                this.tx = await this.$http.getTx(this.$route.params.hash)
            }
        },
    }
</script>