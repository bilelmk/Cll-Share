const Member = {
    birthDate(parent) {
        return parent.birthDate.toDateString()
    }
}
export default Member