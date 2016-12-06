
Object.defineProperty(v.model, "feed", v._propDefinition(function() {
    var self = v.model.Base.extend({
        _type:"feed",
        id: ko.observable(),
        createdAt: ko.observable(),
        updatedAt: ko.observable(),
        deletedAt: ko.observable(),
        name: ko.observable(),

        tags: ko.observableArray([]),

        save: function(){
            v.service.feed.save(self).then(function(res){
                self.load(res)
            });
        },
        del: function(){
            v.service.feed.delete(self).then(function(res){
                self.load(res)
            });
        }
        
    });
    return self;
}));
