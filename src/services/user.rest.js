
const BASE_URL = 'http://127.0.0.1:8000/'
const baseFetch = (component)=>fetch(BASE_URL+component).then(value => {
        return value.json()}
)

const post = (component, data)=>fetch(BASE_URL+component, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
}).then(response=>response.json());

export  {baseFetch, post}
