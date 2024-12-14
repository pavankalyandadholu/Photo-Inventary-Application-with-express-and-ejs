 function deleteProduct(id){
    const response= confirm("Are you sere to delete the Item ?");
    if(response){
        fetch(`/delete-product/${id}`,{method:'POST'}).then(res=>{
            if(res.ok){
                location.reload();
            }
        })
    }
 }