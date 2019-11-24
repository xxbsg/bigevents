var category={
    getcategory:function(callback){
        $.get(APIURL.getcategory,function(res){
            callback(res)
        })
    },

}