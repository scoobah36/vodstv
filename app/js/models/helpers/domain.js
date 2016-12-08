
Object.defineProperty(v.model, "domain", v._propDefinition(function() {
    var self = v.model.Base.extend({
        _type:"domain",
        id: ko.observable(),
        createdAt: ko.observable(),
        updatedAt: ko.observable(),
        deletedAt: ko.observable(),

        save: function(){
            v.service[self._type].save(self).then(function(res){
                self.load(res)
            });
        },
        del: function(){
            v.service[self._type].delete(self).then(function(res){
                self.load(res)
            });
        }
        
    });
    return self;
}));
