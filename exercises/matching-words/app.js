const showRepeatedWords = arr => {
    const words = arr.replace(/\.,/, "").split(" ");
    const dictionary = [];
    words.forEach (word => {
        if (words.indexOf(word) !== words.lastIndexOf(word) && !dictionary.includes(word)) {
            dictionary.push(word);
        }
    });
    return dictionary;
}

const text = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&amp;B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
console.log(showRepeatedWords(text));
