// insert your API URL here

const API = {
    url: "",
    fetch: async () => {
        const result = await fetch(API.url)
        return await result.json()
    }
}

export default API;