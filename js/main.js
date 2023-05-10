const {createApp} = Vue

createApp({
    
    data(){
        return{
           impegno: "",
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
    },
    methods:{
        
        aggiungiImpegni(){
            console.log(this.impegno);
            
            const oggetto = {text: this.impegno, dome: false };
            this.toDo.push(oggetto);

            this.impegno = "";
        },
        
        cambioDone(commissione){

            commissione.done = true;
            console.log(this.done);
        },

        aggiungiClasse(commissione){

            let classe = "impegnoFatto";            
            if(commissione.done == true){
                return classe;
            }
        }
       
    }
    
}).mount (`#app`)



