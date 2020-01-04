class ApiService {
    async getAllItems(category = '') {
        const data = await fetch(`http://localhost:8080/item/${category}`)
        const response = await data.json()
        console.log(response.data)
        return response.data
    }
}

export default ApiService