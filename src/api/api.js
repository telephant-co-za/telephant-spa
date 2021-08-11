export const login = async (telephoneNumber, password) => {

    const data = JSON.stringify({ telephoneNumber : telephoneNumber, password: password })
    console.log(data)

    fetch(`https://localhost:3443/v1/users?action=signin`, 
    {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(async (data) => {
    if (data.ok) {
        data = await data.json()
        console.log("----------")
        console.log(data)
        console.log("----------")
    }
    }).catch(e => console.log('Connection error', e))

}

export const signup = async (telephoneNumber, password) => {
    const res = await fetch('/api/users?action=signup', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ telephoneNumber: telephoneNumber, password: password })
    })
    console(res);
    return res.json();
};