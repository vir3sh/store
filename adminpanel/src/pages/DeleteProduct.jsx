import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DeleteProduct = () => {
  const { id } = useParams(); // Get the productId from the URL using 'id'
  const navigate = useNavigate();

  useEffect(() => {
    const deleteProduct = async () => {
      try {
        await axios.delete(
          `http://localhost:5000/api/product/delete/${id}` // Use 'id' to delete the product
        );
        alert("Product deleted successfully");
        navigate("/"); // Redirect to the product list after deletion
      } catch (error) {
        console.error(error);
        alert("Error deleting product");
      }
    };
    deleteProduct();
  }, [id, navigate]); // Re-run the effect when 'id' or 'navigate' changes

  return <div>Deleting product...</div>;
};

export default DeleteProduct;
