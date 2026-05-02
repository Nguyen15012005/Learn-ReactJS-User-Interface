export const UseFetchAPI = async () => {
  try {
    const response = await fetch("/products.json");
    if (response.ok) {
      return await response.json();
    }
    return [];
  } catch (error) {
    console.log(error);
  }
};
