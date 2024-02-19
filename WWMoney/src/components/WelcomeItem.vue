<template>
    <div class="ajout">
      <label for="adddesc">Details :</label>
      <input type="text" id="addesc" v-model="aargent.description"><br/>
    <label for="add">ADD Money :</label>
    <input type="number" id="add" v-model="aargent.montant">
    <button @click="callAjout">+</button>
    </div>
      <div class="retire">
    <label for="ddesc">Details :</label>
    <input type="text" id="ddesc" v-model="dargent.description"><br/>
    <label for="withdraw">WITHDRAW Money :</label>
    <input type="number" id="withdraw" v-model="dargent.montant">
    <button @click="callDepense">-</button>
  </div>
  <div class="main">
<div class="red" v-for="d in depenseArgent" :key="d.id">
  <div class="card">
  <span>-{{ d.montant }}</span>
  <span>{{d.description}}</span> 
</div>
</div>

<div class="blue" v-for="m in ajoutArgent" :key="m.id">
  <div class="card">
  <span>{{ m.montant }}</span>
  <span>{{m.description}}</span> 
</div>
</div>
</div>
</template>

<style scoped>
.ajout{
  position: sticky;
  right:100px;
  width:230px;
}
.retire{
  position: sticky;
  top:200px;
  right:100px;
  width:230px;
}
.main{
  width:115px;
  

}
.main > div {
  width:115px;
  
}
.card{
  width:auto;
  text-align: center;
  height:2rem;
  background-color: antiquewhite;
}
.blue{
  color:green;
}
.red{
  color:brown
}

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
    dargent.montant = 0
  dargent.description = ''
    
}
const aargent: AjouterArgent = {
  description:'',
  montant: 0,
}

function callAjout(){
  mtore.ajout(aargent)
  aargent.montant = 0
  aargent.description = ''
}

</script>