import { defineStore } from "pinia"
import {v4 as uuid} from 'uuid'
import { ref } from "vue";
import type {AjouterArgent} from "@/types/type.ts";

export const useAjou = defineStore('argentajouter', () => {
    
  const ajoutArgent = ref<AjouterArgent[]>([])

  
  function ajout(argentajouter: Omit<AjouterArgent, 'id'>): void
  { 
      ajoutArgent.value.push({...argentajouter, id: uuid()}  )
      
}
  
return {ajoutArgent, ajout}
})

