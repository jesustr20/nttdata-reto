export default async function apiFetch(endpoint, {method, headers, body} = {}){
  const baseURL = process.env.REACT_APP_BASE_URL
  
  if(body){
    headers={ 
      'Content-Type': 'application/json', 
      ...headers 
    }
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null
  }

  const response =await fetch(baseURL+endpoint, config)

  let data;

  if(!response.ok){
    try{
      data = await response.json();
    }catch(error){
      console.log(error)
      throw new Error(response.statusText)
    }
    throw new Error(data.errors);
  }

  try{
    data = await response.json()
  }catch (error){
    data = response.statusText
  }
  return data;
}