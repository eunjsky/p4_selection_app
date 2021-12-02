const getSelections = function(){
    return fetch('/api/selections', {mode: 'cors'}).then(
        res => res.json()
    )
}
const createSelections = function(data){
    console.log(data)
    return fetch('/api/selections/new', {
        method: 'POST',
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(data)
    }).then(res => res.json())
}

const updateSelections = function(data, id){
    return fetch(`/api/selections/${id}`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json())
    
}

const deleteSelections = function(id){
    return fetch(`/api/selections/${id}`, {
        method: 'DELETE',
    }).then(res => res.json())
}




module.exports={
    getSelections, 
    createSelections,
    updateSelections,
    deleteSelections 
}