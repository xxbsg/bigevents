var comment={
    comment_get:function(id,callback){
        $.get(APIURL.comment_get,{article_id:id},function(res){
            callback(res)
        })
    },
    comment_add:function(name,content,article_id,callback){
        $.post(APIURL.comment_add,{name:name,content:content,article_id:article_id},function(res){
            callback(res)
        })
    }
}