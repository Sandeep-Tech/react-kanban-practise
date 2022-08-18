import React, { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./db";

const DexieDemo = () => {
  //   const [foods, setFoods] = useState(["air", "water", "CO2"]);
  let foods = useLiveQuery(() => db.favFoodItems.toArray());
  const [newFoodItem, setNewFoodItem] = useState("");

  async function addNewFood(ev) {
    ev.preventDefault();
    ev.target[0].value = "";
    const newFoods = [...foods, newFoodItem];
    try {
      const id = await db.favFoodItems.add(newFoods);
      console.log(`added ${newFoodItem} to the DB with ID ${id}`);
    } catch (err) {
      console.log(`could not add ${newFoodItem} to the DB.`);
      console.err(err);
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Dexie lib demo</h1>
      <div
        style={{
          width: "500px",
          margin: "0 auto",
          border: "1px solid black",
          padding: "8px 16px",
          borderRadius: "8px",
          background: "lightgrey",
        }}
      >
        <div>
          <p style={{ textDecoration: "underline" }}>Fav Foods List:</p>
          {/* {foods.map((food, index) => (
            <p key={index}>{food.newFoodItem}</p>
          ))} */}
          {console.log("foods", foods)}
        </div>
        <hr />
        <form onSubmit={addNewFood}>
          <label>Add other fav food items: </label>
          <input
            type="text"
            placeholder="new fav food"
            onChange={(ev) => setNewFoodItem(ev.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default DexieDemo;
