
const pathExistenceQueries = (n, nums, maxDiff, queries) => {
    let components = []
    components[0] = 0
    let currentCamp = 0
let result = []
    for (let i = 0; i < n - 1; i++) {
        if (nums[i + 1] - nums[i] <= maxDiff) {
            components[i+1]=currentCamp
        }else{
            currentCamp++
            components[i+1]= currentCamp
        }
    }
    for(q of queries){
        let [u, v]=q;
        if(components[u]===components[v]){
            result.push(true)
        }else{
            result.push(false)

        }
    }
    return result
};

const n = 2
const nums = [1, 3]
const maxDiff = 1
const queries = [[0, 0], [0, 1]]

const result = pathExistenceQueries(n, nums, maxDiff, queries)
console.log(result);