<template>
  
    <div class="ajout">
      <label for="adddesc">Details :</label>
      <input type="text" id="addesc" v-model="aargent.description">
    <label for="add">ADD Money :</label>
    <input type="number" id="add" v-model="aargent.montant">
    <button @click="callAjout">+</button>
    </div>
      <div class="retire">
    <label for="ddesc">Details :</label>
    <input type="text" id="ddesc" v-model="dargent.description">
    <label for="withdraw">WITHDRAW Money :</label>
    <input type="number" id="withdraw" v-model="dargent.montant">
    <button @click="callDepense">-</button>
  </div>
  
<div v-for="d in depenseArgent" :key="d.id">
  
  <span>{{d.description}}</span> 
  <span>{{ d.montant }}</span> 
</div>
<div v-for="m in ajoutArgent" :key="m.id">
  
  <span>{{m.description}}</span> 
  <span>{{ m.montant }}</span> 
</div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import type {DepensArgent} from '@/types/type.ts' 
import type {AjouterArgent}  from '@/types/type.ts'
import { useDepenses } from '@/stores/argent';
import {useAjou} from '@/stores/counter'

const store = useDepenses()
const mtore = useAjou()
const {depenseArgent} = store
const {ajoutArgent} = mtore


const dargent: DepensArgent = {
  description:'',
  montant: 0,
}

function callDepense(){
    store.retire(dargent)

    
}
const aargent: AjouterArgent = {
  description:'',
  montant: 0,
}

function callAjout(){
  mtore.ajout(aargent)
}

</script>