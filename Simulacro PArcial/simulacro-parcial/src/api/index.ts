export const getTasks = async() => {
   
    const url = "http://localhost:3000/"
    try{
        const response= await fetch(url);
        if(response.ok){
            const data= await response.json();
            return data;
        }else{
            console.error("Error en la respuesta");
            return[];
        }
    }catch(error){
        console.error(error);
    }
};

export const postTask = async(task) => {
    const url= "../../../../db.json"
    try{
        const response= await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });
        if(response.ok){
            const data= await response.json();
            return data;
        }else{
            console.error("Error en la respuesta");
            return[];
        }
    }catch(error){
        console.error(error);
    }
}
