import { defineStore } from "pinia";
import type {DepensArgent} from '@/types/type.ts'

import {v4 as uuid} from 'uuid'
import { ref } from "vue";


export const useDepenses = defineStore('argentdepense', () => {
    
        const depenseArgent = ref<DepensArgent[]>([])

        
        function retire(argentdepense: Omit<DepensArgent, 'id'>): void
        { 
            depenseArgent.value.push({...argentdepense, id: uuid()}  )
            
    }
    return {depenseArgent, retire}
})


