import React from "react";
import { useState } from "react";
import { Field } from "./field/Field";

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Field></Field>
    </div>
  );
};
