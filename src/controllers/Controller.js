import g from 'genesis-object'
import api from '../api'

import c from '../config'

export default g(function(){
    var self = {
        urls:{},
        model:"domain",

        getUrl: function(type){
            var url = "/"
            var urls = {
                get: self.urls.list ? self.urls.list : '/' + self.model,
                list: self.urls.list ? self.urls.list : '/' + self.model + 's',
                save: self.urls.save ? self.urls.save : '/' + self.model,
                delete: self.urls.delete ? self.urls.delete : '/' + self.model 
            }
            if(urls[type]){
                url = urls[type];
            }
            return url;
        },

        get: function(id){
            return api.get(self.getUrl("get") + "/" + id);
        },

        list: function(query){
            if(query == null){
                query = {};
            }
            return api.post(self.getUrl("list"), query);
        },

        save: function(model){
            var toSave = model;

            if(model._isVModel){
                toSave = model.toJS();
            }
            
            return api.post(self.getUrl("save"), toSave);
        },
        delete: function(model){
            var id = model;

            if(model.id){
                id = ko.unwrap(model.id);
            }

            return api.delete(self.getUrl("delete") + '/' + id);
        }
    }
    return self
})