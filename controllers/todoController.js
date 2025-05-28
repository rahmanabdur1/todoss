import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const { text } = req.body;
  const newTodo = new Todo({ text });
  const saved = await newTodo.save();
  res.json(saved);
};

export const toggleTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  const updated = await todo.save();
  res.json(updated);
};

export const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
