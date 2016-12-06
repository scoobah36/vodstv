Object.defineProperty(v.service, 'feed', {
    value:{
        list: function(query){
            return v.Ajax.doPost({
                url: v.api + '/feeds'
            });
        },
        save: function(tag){
            var toSave = tag;

            if(tag._isVModel){
                toSave = tag.toJS();
            }

            return v.Ajax.doPost({
                url: v.api + '/feed',
                data: toSave
            });
        },
        delete: function(tag){
            var id = tag;

            if(tag.id){
                id = ko.unwrap(tag.id);
            }

            return v.Ajax.doDelete({
                url: v.api + '/feed/' + id 
            });
        }
    }
})