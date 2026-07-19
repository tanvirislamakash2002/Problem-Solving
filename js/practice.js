const smallestSubsequence = (s) =>{
    const arr_s = s.split('')
    const store = []
    for(a of arr_s){
        if(!store.includes(a)){
            store.push(a)
        }
    }
    return store
};
const s = "cbacdcbc"
const result = smallestSubsequence(s)

console.log(result);