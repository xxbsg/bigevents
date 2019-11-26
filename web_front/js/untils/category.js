const category={
    getcategory: (callback)=>{
        $.get(APIURL.getcategory, (res)=>{
            callback(res)
        })
    },

}