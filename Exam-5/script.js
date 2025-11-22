async function func() {
    try {
        const api = await fetch('https://fakestoreapi.com/products');
        const data = await api.json()
        console.log(data)
    }catch(err){
        console.error(err);
    }
}
func()

console.log()
console.log()
console.log()

setTimeout(() => {
    console.log("dfdf")
}, 1000)

console.log("some")