export const UseFetchData = async () => {
    try {
        const res = await fetch("/products.json")
        if (res.ok) return await res.json()
        return []
    } catch (error) {
        console.log(error)
    }
}