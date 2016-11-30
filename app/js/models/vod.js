
Object.defineProperty(v.model, "vod", v._propDefinition(function() {
    var self = v.model.Base.extend({
        _type:"vod",
        id: ko.observable(),
        createdAt: ko.observable(),
        updatedAt: ko.observable(),
        deletedAt: ko.observable(),
        title: ko.observable(),
        content: ko.observable(),
        videoKey: ko.observable(),
        videoURL: ko.observable(),
        videoSrc: ko.observable(),
        videoDate: ko.observable(),
        thumbURL: ko.observable(),

        save: function(){
            v.service.vod.save(self).then(function(res){
                self.vod(res)
            });
        },
        del: function(){
            v.service.vod.delete(self).then(function(res){
                self.load(res)
            });
        }
        
    });
    return self;
}));
