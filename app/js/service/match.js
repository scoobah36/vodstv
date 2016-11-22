Object.defineProperty(v.service, 'match', {
    value:{
        get: function(id){
            return {title:"match", tags:["cool", "stuff", "fordinner"]}
        },
        search: function(query){
            return [{title:"match", tags:["cool", "stuff", "fordinner"]},{title:"match", tags:["cool", "stuff", "fordinner"]},{title:"match", tags:["cool", "stuff", "fordinner"]},{title:"match", tags:["cool", "stuff", "fordinner"]},{title:"match", tags:["cool", "stuff", "fordinner"]},{title:"match", tags:["cool", "stuff", "fordinner"]},{title:"match", tags:["cool", "stuff", "fordinner"]},{title:"match", tags:["cool", "stuff", "fordinner"]},{title:"match", tags:["cool", "stuff", "fordinner"]},{title:"match", tags:["cool", "stuff", "fordinner"]},{title:"match", tags:["cool", "stuff", "fordinner"]},{title:"match", tags:["cool", "stuff", "fordinner"]}]
        }
    }
})