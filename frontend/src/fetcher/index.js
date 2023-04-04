import instance from '../config/axiosConfig'

async function userLogin(data) {
    try{
        const res = await instance.post('/login', data);
        return res.data
    }
    catch(error) {
        throw new Error(error.res.data.message || 'Something Wrong')
    }
}

async function userRegister(data) {
    try{
        const res = await instance.post('/register', data);
        return res.data
    }
    catch(error){
        throw new Error(error.res.data.message || 'Something Wrong')
    }
}


async function getAllBook() {
    try{
        const res = await instance.get('/books')
        return res.data
    }
    catch (error){
        throw new Error (error.res.data.message || 'Something Wrong')
    }
} 

async function getBookId(id) {
    try{
        const res = await instance.get(`/books/${id}`);
        return res.data
    }
    catch(error){
        throw new Error(error.res.data.message || 'Somthing Wrong')
    }
}

async function createNewBook (data){
    try{
        const res = await instance.post('/books', data, {
            header: {
                "Content-Type":"multipart/form-data"
            }
        });
        return res.data
    }
    catch(error){
        throw new Error(error.res.data.message || 'Something Wrong')
    }
}

async function deleteBook(id){
    try{
        const res = await instance.delete(`/books/${id}`);
        return res.data
    }
    catch(error){
        throw new Error(error.res.data.message || 'Something Wrong')
    }
}

export {userLogin,userRegister,getAllBook,getBookId,createNewBook,deleteBook};