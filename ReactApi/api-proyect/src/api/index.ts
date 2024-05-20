export const getJokes = async () => {
    // const url = "https://api.chucknorris.io/jokes/random"

    const url ="https://mocki.io/v1/549697c8-dc32-4936-9e8e-d43133d66103"
   //const url = "https://official-joke-api.appspot.com/jokes/ten"
try{
    const response = await fetch(url);
    if(response.ok){
        const payload= await response.json();
        console.log(payload);
        return payload.jokes;
    }else{
        console.error('Error');
        return[];
    }
}catch(error){
    console.error(error);
}

};