import React, { useState } from "react";
function RecipeCreate({addRecipe}) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState})

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value //bc it's an obj not an array
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState })
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={ handleChange }
                value={ formData.name }
                required
               />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={ handleChange }
                value={ formData.cuisine }
                required
               />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                onChange={ handleChange }
                value={ formData.photo }
                required
               />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={ handleChange }
                value={ formData.ingredients }
                required
               />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                onChange={ handleChange }
                value={ formData.preparation }
                required
               />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
export default RecipeCreate;