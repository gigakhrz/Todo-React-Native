import {useState, useEffect} from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://clean-capris-cod.cyclic.app'; // Replace with your actual API base URL

interface TodoInterface {
  _id: string;
  title: string;
  completed: boolean;
}

const useTodos = () => {
  const [data, setData] = useState<TodoInterface[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [manualFetch, setManualFetch] = useState(false);

  const fetchTodos = async (): Promise<void> => {
    try {
      const response = await axios.get<TodoInterface[]>(
        `${API_BASE_URL}/todos`,
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError('Error fetching todos');
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Manual fetch when manualFetch is true

  useEffect(() => {
    if (manualFetch) {
      fetchTodos();
      setManualFetch(false); // Reset the flag after fetching
    }
  }, [manualFetch]);

  return {data, error, refetchTodos: () => setManualFetch(true)};
};

export default useTodos;

// post todo
export const addTask = async (
  text: string,
  fetchTodos: () => void,
): Promise<void> => {
  try {
    await axios.post<TodoInterface>(`${API_BASE_URL}/todos`, {
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
