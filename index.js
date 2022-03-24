
const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hello")
});

app.get('/books', (req, res) => {
    res.send([
        {
            name: "The Code of the Extraordinary Mind",
            release: "August 2020",
            desc: "Everything we know about the world today follows an invisible set of rules—how we work, love, parent, spend our money, and define success. But what if we could remove these outdated ideas and start anew? What would our lives look like if we could redefine the meaning of happiness, purpose, and success?",
            img: "https://images-na.ssl-images-amazon.com/images/I/41g7s2jeUeL._SX327_BO1,204,203,200_.jpg"
        },
        {
            name: "The Code Breaker",
            release: "9 March 2021",
            desc: "In 2012, Nobel Prize winning scientist Jennifer Doudna hit upon an invention that will transform the future of the human race: an easy-to-use tool that can edit DNA.",
            img: "https://images-na.ssl-images-amazon.com/images/I/41qeKoe6+WL._SX388_BO1,204,203,200_.jpg",
        },
        {
            name: "A Thousand Brains",
            release: "19 March 2021",
            desc: "For all we hear of neuroscience's great advances, the field has generated more questions than answers. We know that the brain combines sensory input from all over your body into a single perception, but not how. We think brains compute in some sense, but we can't say what those computations are. We believe that the brain is organized as a hierarchy, with different pieces all working collaboratively to make a single model of the world. But we can explain neither how those pieces are differentiated, nor how they collaborate.",
            img: "https://images-na.ssl-images-amazon.com/images/I/41OZTG+1b3L._SX321_BO1,204,203,200_.jpg",
        },
        {
            name: "On Intelligence",
            release: "9 March 2021",
            desc: "Jeff Hawkins, the man who created the PalmPilot, Treo smart phone, and other handheld devices, has reshaped our relationship to computers. Now he stands ready to revolutionize both neuroscience and computing in one stroke, with a new understanding of intelligence itself.",
            img: "https://images-na.ssl-images-amazon.com/images/I/41PbdH-FFEL._SX330_BO1,204,203,200_.jpg",
        },
    ]

    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});