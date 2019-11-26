const artcle={
    article_publish: (fd,callback)=>{
        $.ajax({
            url:APIURL.article_publish,
            type:'post',
            data:fd,
            contentType:false,
            processData:false,
            success: (res)=>{
                callback(res)
            }
        })
    },
    article_get: (data,callback)=>{
        $.ajax(
            {
                url:APIURL.article_get,
                type:'get',
                data:data,
                success: (res)=>{
                    callback(res)
                }
            }

        )
    },
    article_del: (id,callback)=>{
        $.get(APIURL.article_del,{id:id}, (res)=>{
            callback(res)
        })
    },
    article_edit: (fd,callback)=>{
        $.ajax({
            url:APIURL.article_edit,
            type:'post',
            data:fd,
            contentType:false,
            processData:false,
            success: (res)=>{
                callback(res)
            }
        })
    }
}