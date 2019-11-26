const category={
    getcategory:function(callback){
        $.get(APIURL.getcategory,function(res){
            callback(res)
        })
    },
    addcategory:function(name,slug,callback){
        $.post(APIURL.addcategory,{'name':name,'slug':slug},function(res){
            callback(res)
        })
    },
    delcategory:function(id,callback){
        $.post(APIURL.delcategory,{'id':id},function(res){
            callback(res)
        })
    },
    editcategory:function(id,name,slug,callback){
        $.post(APIURL.editcategory,{'id':id,'name':name,'slug':slug},function(res){
            callback(res)
        })
    }
}