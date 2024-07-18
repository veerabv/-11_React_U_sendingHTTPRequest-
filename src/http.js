export async function fetchPlaces(){
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();
    if (!response.ok) {
      console.log("ok");
      throw new Error("Failed to fetch places");
    }
    return resData;
}

export async function updateUserPlaces (places) {
    const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({places}),
    headers: {
    'Content-Type': 'application/json'
    }
    });
    const resData = await response.json();
    if (!response.ok) {
    throw new Error('Failed to update user data.');
    }
return resData.message;
}