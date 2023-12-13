import {useState, useEffect} from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://192.168.100.10:3002'; // Replace with your actual API base URL

interface TodoInterface {
  _id: string;
  title: string;
  completed: boolean;
}

const useTodos = () => {
  const [data, setData] = useState<TodoInterface[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async (): Promise<void> => {
    try {
      const response = await axios.get<TodoInterface[]>(
        `${API_BASE_URL}/todos`,
      );
      const data2 = response.data;
      setData(data2);
    } catch (error) {
      console.log(error);
      setError('Error fetching todos');
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  return {data, error, refetchTodos: fetchTodos};
};

export default useTodos;

// post todo
export const addTask = async (
  text: string,
  fetchTodos: () => void,
): Promise<void> => {
  try {
    await axios.post<TodoInterface>(`${API_BASE_URL}/post`, {
      title: text,
      completed: false,
    });
    fetchTodos();
  } catch (error) {
    console.log(error);
  }
};

//to mark todo as comleted

export const updateTodo = async (
  _id: string,
  completed: boolean,
  fetchTodos: () => void,
) => {
  try {
    await axios.put(`${API_BASE_URL}/todos/${_id}`, {completed});
    fetchTodos();
    console.log('updated succesfuly');
  } catch (error) {
    console.log(error);
  }
};

// delete task function

export const deleteTodo = async (_id: string, fetchTodos: () => void) => {
  try {
    await axios.delete(`${API_BASE_URL}/todos/${_id}`);
    fetchTodos();
    console.log('deleted successfully');
  } catch (error) {
    console.log(error);
  }
};

// edit function

export const editTitle = async (
  id: string,
  title: string,
  fetchTodos: () => void,
) => {
  try {
    await axios.put(`${API_BASE_URL}/todos/edit/${id}`, {
      title: title,
    });
    fetchTodos();
    console.log('updated successfully');
  } catch (error) {
    console.log(error);
  }
};
