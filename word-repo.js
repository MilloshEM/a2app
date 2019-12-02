const fs = require("fs");

class WordRepository
{
    constructor(filePath){
        this.filePath = filePath;
    }
    findWord(word){
        return new Promise((resolve, reject)=>{

            fs.readFile(this.filePath, (err, content) => {
               let wordList = JSON.parse(content);
             
               resolve(wordList.words1.find(w => w.word1 === word || w.word2 === word));
              });

        });
    }
}

module.exports = WordRepository