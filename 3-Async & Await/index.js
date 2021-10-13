let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]

};

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        }
        else {
            reject(console.log("Shop is closed"))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected.`)

        await time(0000)
        console.log("Started the production.")

        await time(2000)
        console.log("Cut the fruit.")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)

        await time(1000)
        console.log("Machine started")

        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} selected`)

        await time(2000)
        console.log("Served the ice cream")
    }

    catch (error) {
        console.log("Customer left", error)
    }

    finally {
        console.log("Day ended, shop is closed.")
    }
}

kitchen()
