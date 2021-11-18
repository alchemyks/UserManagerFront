
const BASE_URL = 'http://127.0.0.1:8000/'
const getUsers = (component)=>fetch(BASE_URL+component).then(value => {
        return value.json()}
)

const postUser = (component, data)=>fetch(BASE_URL+component, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
}).then(response=>response.json());

const patchUser = (component, id,  data)=>fetch(BASE_URL+component+'/'+id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
}).then(response=>response.json());

const deleteUser = (component, id)=>fetch(BASE_URL+component+'/'+id, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
}).then();


export  {getUsers, postUser, deleteUser, patchUser}
