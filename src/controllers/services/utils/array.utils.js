export const removeDuplicates = (array) => array.filter(
    (value, index)=> array.indexOf(value) === index
)