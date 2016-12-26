Object.defineProperty(v.service, 'tag', v._propDefinition(function() {
    var self = v.service.domain.extend({
        model:"tag",

        getSuggested: function(tagIds){
            var request = {
                url: v.api + '/tagsByTag'
            };

            request.data = {
                tagIds: []    
            };

            if(tagIds){
                request.data = {
                    tagIds: tagIds    
                };
            }
            
            return v.Ajax.doPost(request);
        },
    });
    return self;
}));