
const arrayRankTransform = (arr) => {
    const sortedUnique = [...new Set(arr)].sort((a, b) => a - b)

    const rankMap = new Map()
    sortedUnique.forEach((value, index) => {
        rankMap.set(value, index + 1)
    })

    return arr.map(value => rankMap.get(value))
};

const arr = [40, 10, 20, 30]

const result = arrayRankTransform(arr)
console.log(result);