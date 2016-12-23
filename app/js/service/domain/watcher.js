Object.defineProperty(v.service, 'watcher', v._propDefinition(function() {
    var self = v.service.domain.extend({
        model:"watcher",
        
        addFeed: function(feed){
            var request = {
                url: v.api + '/' + self.model + '/addFeed'
            };

            if(feed){
                request.data = feed;
            }
            
            return v.Ajax.doPost(request);
        },
    });
    return self;
}));