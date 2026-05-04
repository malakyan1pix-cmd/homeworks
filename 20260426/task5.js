function filterSpam(text, badWordsArray){
    const set = new Set(badWordsArray);
    const words = text.split(" ");

    const res = words.map(word => {
        return set.has(word) ? "***" : word;
    });
    return res.join(" ");
}

// Input
const text = "buy our new cheap product";
const badWords = ["cheap", "buy"];

// Expected Output
console.log(filterSpam(text, badWords));
// "*** our new *** product"