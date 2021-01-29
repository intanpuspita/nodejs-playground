// nodeJS API
setTimeout(() => {
    console.log('Two second are up')
}, 2000)

// javascript
const names = ['Intan', 'Puspita', 'Sari']
const shortNames = names.filter((name) => {
    return names.length <= 4
})

// callback geocode
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})

// callback add function
const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})