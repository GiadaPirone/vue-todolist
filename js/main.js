const {createApp} = Vue

createApp({
    
    data(){
        return{
           
            toDo: [
                {
                    text: "Andare a fare la spesa",
                    done: false,
                },
                {
                    text: "Comprare le sigarette",
                    done: false,
                },
                {
                    text: "Uscire a fare aperitivo",
                    done: false,
                },
            ]

        }
    }
    
}).mount (`#app`)

