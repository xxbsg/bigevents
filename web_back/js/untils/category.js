const category={
    getcategory: (callback)=>{
        $.get(APIURL.getcategory, (res)=>{
            callback(res)
        })
    },
    addcategory:(name,slug,callback)=>{
        $.post(APIURL.addcategory,{'name':name,'slug':slug}, (res)=>{
            callback(res)
        })
    },
    delcategory: (id,callback)=>{
        $.post(APIURL.delcategory,{'id':id}, (res)=>{
            callback(res)
        })
    },
    editcategory: (id,name,slug,callback)=>{
        $.post(APIURL.editcategory,{'id':id,'name':name,'slug':slug}, (res)=>{
            callback(res)
        })
    }
}