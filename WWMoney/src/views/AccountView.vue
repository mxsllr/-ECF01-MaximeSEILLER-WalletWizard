<script setup lang="ts">

import { useDepenses } from '@/stores/argent';
import {useAjou} from '@/stores/counter'

const store = useDepenses()
const mtore = useAjou()
const {depenseArgent} = store
const {ajoutArgent} = mtore
const Argentenplus= ajoutArgent.map(x => x.montant).reduce(function(x, y){
return x+y
})
const Argenntenmooins = depenseArgent.map(x => x.montant).reduce(function(x,y){
return x+y
})
const ArgentGlobal= Argentenplus -Argenntenmooins
</script>

<template>

<div class="account">
    <h1>This is Your Balance : {{ ArgentGlobal }}</h1>
</div>
</template>

<style scoped>


</style>