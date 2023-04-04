console.log('BD');
const mapMethod = (array: Array<any>) => {
    const result = array.filter(arr => {
        if (arr) {
            return true
        }
        else {
            return false
        }
    })
    return result
}

const array = [0, 3, null, '', [], {}, undefined]
const result = mapMethod(array)
console.log(result);