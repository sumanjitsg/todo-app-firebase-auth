export const InitialTodos = [
  { id: 1, text: "Pick up groceries" },
  { id: 2, text: "Jog around the park 3x" },
  { id: 3, text: "10 minutes meditation" },
  { id: 4, text: "Read for 30 minutes" },
  { id: 5, text: "Complete this todo app" }
];

let nextId = 6;
export const uuid = () => nextId++;
