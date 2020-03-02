<template><v-flex>{{ address }}</v-flex></template>

<script>
    export default {
        data () {
            return {
                address: []
            }
        },

        created () {
            this.update()
        },

        methods: {
            async update () {
                this.address = await this.$http.getAddress(this.$route.params.address)
            }
        },
    }
</script>