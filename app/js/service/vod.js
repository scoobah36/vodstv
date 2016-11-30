Object.defineProperty(v.service, 'vod', {
    value:{
        list: function(query){
            return v.Ajax.doPost({
                url: v.api + '/vods'
            });
        },
        save: function(vod){
            var toSave = vod;

            if(vod._isVModel){
                toSave = vod.toJS();
                delete toSave.createdAt;
                delete toSave.updatedAt;
                delete toSave.deletedAt;
            }

            return v.Ajax.doPost({
                url: v.api + '/vod',
                data: toSave
            });
        },
        delete: function(vod){
            var id = vod;

            if(vod.id){
                id = ko.unwrap(vod.id);
            }

            return v.Ajax.doDelete({
                url: v.api + '/vod/' + id 
            });
        }
    }
})