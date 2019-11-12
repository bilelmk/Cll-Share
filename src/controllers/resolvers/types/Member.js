import {extractDataFromRequest} from '../../services/authentication.service'
const Member = {
    password(){
        return 'YOU_CANNOT_ACCESS_THIS'
    },
    async mail(parent,{},{request},info){
        try {
            const {id} = await extractDataFromRequest(request)
            if(parent.id == id) return parent.mail
            else throw new Error() 
        } catch (error) {
            return 'YOU_CANNOT_ACCESS_THIS'
        }
        
    }
}
export default Member