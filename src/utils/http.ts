export async function get(url: string){
    const respone = await fetch(url);

    if (!respone.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await respone.json() as unknown; // format to json obj
    // use unknow cuz it will throw error 
    return data;
}