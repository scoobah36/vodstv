import g from 'genesis-object'
import gDate from './Date'

export default g(function(){
    var self = {
        id:"",
        createdAt: gDate,
        updatedAt: gDate,
        deletedAt: gDate,
        name:"",
        type:"",
        regex:""
    }
    return self
})