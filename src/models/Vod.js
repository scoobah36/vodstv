import g from 'genesis-object'
import gDate from './Date'

export default g(function(){
    var self = {
        id:"",
        description:"",
        tags:"",
        thumbURL:"",
        title:"",
        date: gDate,
        videoDate:"",
        videoKey:"",
        videoSrc:"",
        videoURL:""
    }
    return self
})