import React from "react";
import "../../assets/css/productAdmin.css";
import useProduct from "../../hooks/useProduct";
import Loading from "../../components/Loading";

function ProductAdmin() {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(1);
  const [quantity, setQuantity] = React.useState(1);
  const [category, setCategory] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [description, setDescription] = React.useState("");
  const [upload, setUpload] = React.useState([]);

  const { isLoading,handleCreateProduct } = useProduct();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setUpload((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
  };
  const handleDelete = (index, event) => {
    event.stopPropagation();

    const updatedFiles = [...upload];
    updatedFiles.splice(index, 1);
    setUpload(updatedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("category[]", category);
    formData.append("rating", rating);
    formData.append("description", description);
    upload.forEach((file) => {
      formData.append("images", file);
    });
    handleCreateProduct(formData);
  };

  return (
    <div class="formbold-main-wrapper">

      <div class="formbold-form-wrapper">
        <form>
          <div class="formbold-input-flex">
            <div>
              <label for="name" class="formbold-form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name of product"
                class="formbold-form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label for="lastname" class="formbold-form-label">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price of product"
                class="formbold-form-input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div class="formbold-input-flex">
            <div>
              <label for="email" class="formbold-form-label">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                defaultValue={1}
                class="formbold-form-input"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div>
              <label class="formbold-form-label">Category</label>

              <select
                class="formbold-form-input"
                name="occupation"
                id="occupation"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="car">Car</option>
                <option value="robot">Robot</option>
                <option value="model">Model</option>
              </select>
            </div>
          </div>

          <div class="formbold-mb-3 formbold-input-wrapp">
            <label for="phone" class="formbold-form-label">
              Rating
            </label>

            <div>
              <input
                type="number"
                name="rating"
                id="rating"
                class="formbold-form-input formbold-w-45"
                max={5}
                min={1}
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>

          <div class="formbold-mb-3">
            <label for="message" class="formbold-form-label">
              Description
            </label>
            <textarea
              rows="6"
              name="description"
              id="description"
              class="formbold-form-input"
              placeholder="Description of product"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div class="formbold-form-file-flex">
            <label for="upload" class="formbold-form-label">
              Upload Resume
            </label>
            <input
              type="file"
              multiple
              name="upload"
              id="upload"
              class="formbold-form-file"
              onChange={handleFileChange}
            />
          </div>
          {upload.length > 0 && (
            <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
              {upload.map((file, index) => (
                <li key={index}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "10px",
                    }}
                  />
                  <a href="#!" onClick={(e) => handleDelete(index, e)}>
                    Delete
                  </a>
                </li>
              ))}
            </ul>
          )}

          <button class="formbold-btn" onClick={handleSubmit}>
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductAdmin;
