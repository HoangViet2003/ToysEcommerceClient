import React from "react";
import "../../assets/css/productAdmin.css";

function ProductAdmin() {


  
  return (
    <div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
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
              />
            </div>

            <div>
              <label for="lastname" class="formbold-form-label">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price of product"
                class="formbold-form-input"
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
              />
            </div>

            <div>
              <label class="formbold-form-label">Category</label>

              <select
                class="formbold-form-input"
                name="occupation"
                id="occupation"
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
              />

              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone number"
                class="formbold-form-input"
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
            ></textarea>
          </div>

          <div class="formbold-form-file-flex">
            <label for="upload" class="formbold-form-label">
              Upload Resume
            </label>
            <input
              type="file"
              name="upload"
              id="upload"
              class="formbold-form-file"
            />
          </div>

          <button class="formbold-btn">Apply Now</button>
        </form>
      </div>
    </div>
  );
}

export default ProductAdmin;
