const db = require('./db.json');
const fs = require('fs');
const path = require('path');

class Cube {
    constructor({ imageUrl, name, difficultyLevel, description }) {
        this.img = imageUrl;
        this.name = name;
        this.diffLevel = difficultyLevel;
        this.description = description
    }

    save(id) {
        const obj = {
            id: id,
            img: this.img,
            name: this.name,
            diffLevel: this.diffLevel,
            description: this.description
        }

        db.push(obj);
        fs.writeFileSync(path.resolve(`${__dirname}/db.json`), JSON.stringify(db));
    }
}

module.exports = Cube;

// function makeACube({ imageUrl, name, difficultyLevel, description }, id) {
//     const obj = {
//         id,
//         img: imageUrl,
//         name,
//         diffLevel: difficultyLevel,
//         description
//     }

//     db.push(obj);
//     fs.writeFileSync(path.resolve(`${__dirname}/db.json`), JSON.stringify(db));
// }

// module.exports = makeACube;