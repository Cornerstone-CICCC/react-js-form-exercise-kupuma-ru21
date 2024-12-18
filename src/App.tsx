import { useState } from "react";

type Food = "Chicken" | "Beef" | "Vegetables" | "Dessert" | "Pork";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState<number | undefined>();
  const [foods, setFoods] = useState<Food[]>([]);
  const checkFood = (food: Food) => {
    setFoods((prev) => [...prev, food]);
  };
  const unCheckFood = (food: Food) => {
    setFoods((prev) => {
      return prev.filter((f) => f !== food);
    });
  };
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmitted(true);
        }}
      >
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => {
              setAge(parseInt(e.target.value));
            }}
          />
        </div>
        <div>
          <div>
            <input
              type="checkbox"
              checked={foods.includes("Chicken")}
              onChange={(e) => {
                if (e.target.checked) {
                  checkFood("Chicken");
                  return;
                }
                unCheckFood("Chicken");
              }}
            />
            <label>Chicken</label>
            <input
              type="checkbox"
              checked={foods.includes("Beef")}
              onChange={(e) => {
                if (e.target.checked) {
                  checkFood("Beef");
                  return;
                }
                unCheckFood("Beef");
              }}
            />
            <label>Beef</label>
            <input
              type="checkbox"
              checked={foods.includes("Vegetables")}
              onChange={(e) => {
                if (e.target.checked) {
                  checkFood("Vegetables");
                  return;
                }
                unCheckFood("Vegetables");
              }}
            />
            <label>Vegetables</label>
            <input
              type="checkbox"
              checked={foods.includes("Dessert")}
              onChange={(e) => {
                if (e.target.checked) {
                  checkFood("Dessert");
                  return;
                }
                unCheckFood("Dessert");
              }}
            />
            <label>Dessert</label>
            <input
              type="checkbox"
              checked={foods.includes("Pork")}
              onChange={(e) => {
                if (e.target.checked) {
                  checkFood("Pork");
                  return;
                }
                unCheckFood("Pork");
              }}
            />
            <label>Pork</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted ? (
        <div>{`Hello ${firstName} ${lastName}. You are ${age} years old and your favorite foods are: ${foods.join(
          ", "
        )}, Dessert.`}</div>
      ) : null}
    </>
  );
}

export default App;
