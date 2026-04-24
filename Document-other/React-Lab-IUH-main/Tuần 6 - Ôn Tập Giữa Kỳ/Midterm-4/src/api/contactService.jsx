export const fetchContact = async () => {
  try {
    const response = await fetch(
      "https://67dfef6b7635238f9aabca61.mockapi.io/contacts"
    );

    if (response.ok) {
      return await response.json();
    }

    return [];
  } catch (error) {
    console.error("Xảy ra lỗi trong quá trình:", error);
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await fetch(
      `https://67dfef6b7635238f9aabca61.mockapi.io/contacts/${id}`,
      { method: "DELETE" }
    );

    if (response.ok) {
      return { message: "Xóa thành công" };
    }

    return { message: "Xóa thất bại" };
  } catch (error) {
    console.error("Xảy ra lỗi trong quá trình:", error);
  }
};

export const createContact = async (contact) => {
  try {
    const response = await fetch(
      `https://67dfef6b7635238f9aabca61.mockapi.io/contacts`,
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      return { message: "Tạo thành công" };
    }

    return { message: "Tạo thất bại" };
  } catch (error) {
    console.error("Xảy ra lỗi trong quá trình:", error);
  }
};
