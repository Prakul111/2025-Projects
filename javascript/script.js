// const items = [
//     {
//         id: 1,
//         name: 'test',
//         description: 'desc'
//     },
//     {
//         id: 2,
//         name: 'test 2',
//         description: 'desc'
//     },
//     {
//         id: 3,
//         name: 'test 3',
//         description: 'desc'
//     },
// ]






const item = new Map([
    [1, {
        id: 1,
        name: 'test',
        description: 'desc'
    }],
    [2, {
        id: 1,
        name: 'test',
        description: 'desc'
    }],
    [3, {
        id: 1,
        name: 'test',
        description: 'desc'
    }]
])


function getItems(id) {
    return item.has(id)
}

console.log(getItems(1));

