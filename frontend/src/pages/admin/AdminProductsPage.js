import ProductsPageComponent from "./components/ProductsPageComponent";

import axios from "axios";

const fetchProducts = async (abctrl) => {
    const { data } = await axios.get("/api/products/admin", {
        signal: abctrl.signal,
    })
    return data;
}

const deleteProduct = async (productId) => {
    try {
    const { data } = await axios.delete(`/api/products/admin/${productId}`);
    return data
} catch (error) {
    console.error("Error deleting user:", error.response.data);
    throw error; // Đảm bảo rằng lỗi được chuyển tiếp để có thể xem ở phía client.
} 
}

const AdminProductsPage = () => {
  return <ProductsPageComponent fetchProducts={fetchProducts} deleteProduct={deleteProduct} />
};

export default AdminProductsPage;

