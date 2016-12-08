Object.defineProperty(v.service, 'domain', v._propDefinition(function() {
    var self = v.Object.extend({
        model:"domain",
        list: function(query){
            return v.Ajax.doPost({
                url: v.api + '/' + self.model + 's'
            });
        },
        save: function(model){
            var toSave = model;

            if(model._isVModel){
                toSave = model.toJS();
            }

            return v.Ajax.doPost({
                url: v.api + '/' + self.model,
                data: toSave
            });
        },
        delete: function(model){
            var id = model;

            if(model.id){
                id = ko.unwrap(model.id);
            }

            return v.Ajax.doDelete({
                url: v.api + '/' + self.model + '/' + id 
            });
        }
    });
    return self;
}));