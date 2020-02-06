const pizzaapi = require('dominos')

//finding nearby stores
pizzaapi.Util.findNearbyStores(
    '13414 Tall Forest Dr, Cypress, TX, 77429',
    'Delivery',
    function(storeData) {
       // console.log(JSON.stringify(storeData))
    }
)

//getting store info
let myStore = new pizzaapi.Store({ID: 6651})
myStore.ID = 6651

myStore.getInfo(
    function(storeData) {
        console.log("***********************************************************************")
        console.log(storeData)
        
    }
)