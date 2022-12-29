import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
    name: "quotes",
    initialState:{
        indexC: 0,
        color:[{
            color: "#59ef9e"
        },{
            color: "#00b19e"
        },{
            color: "#008497"
        },{
            color: "#006890"
        },{
            color: "#175b8e"
        },{
            color: "#a46087"
        },{
            color: "#1aabb7"
        },{
            color: "#ffd558"
        },{
            color: "#ff9d66"
        },{
            color: "#ff6fa1"
        }],
        phrases:[{
            phrase:"I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me" ,
            author: "-Isaac Newton"
        },{
            phrase:"It is strange that only extraordinary man-made the discoveries twitch later appear so easy and simple." ,
            author: "-George C. Lichtenberg",
        },{
            phrase:"Life cannot have a random beginning… the trouble is that there are about 2000 enzymes, and the chance of obtaining them all in a random trial is only one part in 10^40,000 an outrageously small probability that could not be faced even if the whole universe consisted of organic soup." ,
            author: "-Fred Hoyle"
        },{
            phrase:"The important thing is not to stop questioning. Curiosity has its own reason for existence. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery each day." ,
            author: "-Albert Einstein"
        },{
            phrase:"Scientists have become the bearers of the torch of discovery in our quest for knowledge." ,
            author: "–Stephen Hawking"
        },{
            phrase:"Science is a way of life. It is a perspective. Science is the process that takes us from confusion to understanding in a manner that’s precise, predictive, and reliable – a transformation, for those lucky enough to experience it, that is empowering and emotional." ,
            author: "–Brian Greene"
        },{
            phrase:"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less." ,
            author: "–Marie Curie"
        },{
            phrase:"There are many babblers, wholly ignorant of mathematics, who dare to condemn my hypothesis, upon the authority of some part of the Bible twisted to suit their purpose. I value them not and scorn their unfounded judgment." ,
            author: "–Nicholas Copernicus"
        },{
            phrase:"We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology." ,
            author: "–Carl Sagan"
        },{
            phrase:"If we knew what it was we were doing, it would not be called research, would it?" ,
            author: "–Albert Einstein"
        }]
    },
    reducers:{
        setIndexC: (state,action)=>{
            state.indexC = action.payload
        }
    }
})

export const {setIndexC} = quoteSlice.actions
export default quoteSlice.reducer;