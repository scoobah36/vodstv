Object.defineProperty(v.service, 'domain', v._propDefinition(function() {
    var self = v.Object.extend({
        model:"domain",

        getUrl: function(type){
            var url = "/"
            var urls = {
                list: self.urls.list ? self.urls.list :  v.api + '/' + self.model + 's',
                save: self.urls.save ? self.urls.save :  v.api + '/' + self.model,
                delete: self.urls.delete ? self.urls.delete :  v.api + '/' + self.model 
            }
            if(urls[type]){
                url = urls[type];
            }
            return url;
        },

        list: function(query){
            var request = {
                url: self.getUrl("list")
            };

            if(query){
                request.data = query;
            }
            
            return v.Ajax.doPost(request);
        },
        save: function(model){
            var toSave = model;

            if(model._isVModel){
                toSave = model.toJS();
            }

            return v.Ajax.doPost({
                url: self.getUrl("save"),
                data: toSave
            });
        },
        delete: function(model){
            var id = model;

            if(model.id){
                id = ko.unwrap(model.id);
            }

            return v.Ajax.doDelete({
                url: self.getUrl("delete") + '/' + id 
            });
        }
    });
    return self;
}));