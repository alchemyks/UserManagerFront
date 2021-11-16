
const BASE_URL = 'http://127.0.0.1:8000/'
const baseFetch = (component)=>fetch(BASE_URL+component).then(value => {
        return value.json()}
)

export  {baseFetch}