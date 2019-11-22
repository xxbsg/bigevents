var artcle={
    article_publish:function(fd,callback){
        $.ajax({
            url:APIURL.article_publish,
            type:'post',
            data:fd,
            contentType:false,
            processData:false,
            success:function(res){
                callback(res)
            }
        })
    },
    article_get:function(data,callback){
        
    }
}