const comment={
    comment_get: (id,callback)=>{
        $.get(APIURL.comment_get,{article_id:id}, (res)=>{
            callback(res)
        })
    },
    comment_add: (name,content,article_id,callback)=>{
        $.post(APIURL.comment_add,{name:name,content:content,article_id:article_id}, (res)=>{
            callback(res)
        })
    }
}