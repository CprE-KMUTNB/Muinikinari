export const authenticate=(response,next)=>{
    if(window !=="undefined"){ //access to website
        //store a token to session storage
        sessionStorage.setItem("token",JSON.stringify(response.data.token))
    }
    next()
}

export const isLoggedIn = () =>{
    if(localStorage.getItem("token")){
        return true
    }else{
        return false
    }
}