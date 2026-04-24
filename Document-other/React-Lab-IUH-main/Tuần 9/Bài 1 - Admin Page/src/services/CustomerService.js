export const fetchCustomer = async () => {
  try {
    const response = await fetch(
      "https://67dfef6b7635238f9aabca61.mockapi.io/customer"
    );

    if (response.ok) {
      return await response.json();
    }

    return [];
  } catch (e) {
    console.error("Xảy ra lỗi trong lúc fetch: ", e);
  }
};

export const saveCustomer = async (newCustomer) => {
  try {
    const response = await fetch(
      `https://67dfef6b7635238f9aabca61.mockapi.io/customer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCustomer),
      }
    );

    if (response.ok) {
      return true;
    }

    return false;
  } catch (e) {
    console.error("Xảy ra lỗi trong lúc fetch: ", e);
  }
};

export const updateCustomer = async (id, newCustomer) => {
  try {
    const response = await fetch(
      `https://67dfef6b7635238f9aabca61.mockapi.io/customer/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCustomer),
      }
    );

    if (response.ok) {
      return true;
    }

    return false;
  } catch (e) {
    console.error("Xảy ra lỗi trong lúc fetch: ", e);
  }
};
