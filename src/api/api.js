import axios from "axios";

const API_URL = "https://681dff34c1c291fa6632938e.mockapi.io/api/articles"; 

// Fungsi untuk mengambil data artikel
export const fetchArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Fungsi untuk menambahkan artikel baru
export const addArticle = async (articleData) => {
  try {
    const response = await axios.post(API_URL, articleData);
    return response.data;
  } catch (error) {
    console.error("Error adding article:", error);
    throw error;
  }
};

// Fungsi untuk mengupdate artikel
export const updateArticle = async (id, articleData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, articleData);
    return response.data;
  } catch (error) {
    console.error("Error updating article:", error);
    throw error;
  }
};

// Fungsi untuk menghapus artikel
export const deleteArticle = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting article:", error);
    throw error;
  }
};
