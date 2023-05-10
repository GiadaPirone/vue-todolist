const {createApp} = Vue

createApp({
    
    data(){
        return{
           
            ToDo: [
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

