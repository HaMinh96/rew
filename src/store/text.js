import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTextStore = defineStore('text', () => {
    const loading = ref(false)

    const content = ref()

    const getContent = () => {
        loading.value = true
        fetch(`https://raw.githubusercontent.com/HaMinh96/rew/main/docs/textContent.json`)
            .then(res => res.json())
            .then(res => {
                content.value = res
                loading.value = false
            })
    }

    return {
        loading,
        content,
        getContent
    }
})