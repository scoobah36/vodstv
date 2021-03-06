import g from 'genesis-object'
import api from '../api'

import c from '../config'

export default g(function(){
    var self = {
        _urls:{},

        getUrl: function(type){
            var url = "/"
            var urls = {
                save: self._urls.save ? self._urls.save : '/' + self.model,
                delete: self._urls.delete ? self._urls.delete : '/' + self.model 
            }
            if(urls[type]){
                url = urls[type];
            }
            return url;
        },

        get: function(id){
            if(id == null){
                id = self.id
            }
            return api.get(self.getUrl("get") + "/" + id);
        },

        save: function(model){
            var toSave = model;

            if(model._isVModel){
                toSave = model.toJS();
            }
            
            return api.post(self.getUrl("save"), toSave);
        },
        delete: function(id){
            
            if(id == null){
                id = self.id
            }

            return api.delete(self.getUrl("delete") + '/' + id);
        }
    }
    return self
})