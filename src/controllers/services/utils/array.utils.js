export const removeDuplicates = (array) => array.filter(
    (value, index)=> array.indexOf(value) === index
)

export const updateObject = (oldObject, newObject)=>{
    Object.keys(newObject).forEach(
        (key) => {
            if (oldObject[key]){
                oldObject[key] = newObject[key]
            } 
        }
    )
    return oldObject
}