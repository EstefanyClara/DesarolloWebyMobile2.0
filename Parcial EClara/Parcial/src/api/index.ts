export const getGames= async() => {
   
    const url = "http://localhost:3000/api/games"
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

//eliminar juego

// Path: Parcial/src/api/index.ts
export const deleteGame= async(id: string) => {
   
    const url = `http://localhost:3000/api/games/${id}`
    try{
        const response= await fetch(url, {
            method: 'DELETE'
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
};