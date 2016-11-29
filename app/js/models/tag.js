
Object.defineProperty(v.model, "tag", v._propDefinition(function() {
    var self = v.model.Base.extend({
        _type:"tag",
        id: ko.observable(),
        createdAt: ko.observable(),
        updatedAt: ko.observable(),
        deletedAt: ko.observable(),
        name: ko.observable(),
        type: ko.observable(),
        regex: ko.observable(),

        save: function(){
            v.service.tag.save(self).then(function(res){
                self.load(res)
            });
        },
        del: function(){
            v.service.tag.delete(self).then(function(res){
                self.load(res)
            });
        }
        
    });
    return self;
}));
