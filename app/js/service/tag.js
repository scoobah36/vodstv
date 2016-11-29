Object.defineProperty(v.service, 'tag', {
    value:{
        list: function(query){
            return v.Ajax.doPost({
                url: v.api + '/tags'
            });
        },
        save: function(tag){
            var toSave = tag;

            if(tag._isVModel){
                toSave = tag.toJS();
                delete toSave.createdAt;
                delete toSave.updatedAt;
                delete toSave.deletedAt;
            }

            return v.Ajax.doPost({
                url: v.api + '/tag',
                data: toSave
            });
        },
        delete: function(tag){
            var id = tag;

            if(tag.id){
                id = ko.unwrap(tag.id);
            }

            return v.Ajax.doDelete({
                url: v.api + '/tag/' + id 
            });
        }
    }
})