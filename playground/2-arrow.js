// const square = function(x) {
//     return x*x
// }

// ES6
// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Andre', 'Mickey'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' attending ' + this.name)
        })
    }
}

event.printGuestList()