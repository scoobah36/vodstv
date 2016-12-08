
Object.defineProperty(v.model, "tag", v._propDefinition(function() {
    var self = v.model.domain.extend({
        _type:"tag",
        id: ko.observable(),
        createdAt: ko.observable(),
        updatedAt: ko.observable(),
        deletedAt: ko.observable(),
        name: ko.observable(),
        type: ko.observable(),
        regex: ko.observable()
        
    });
    return self;
}));
