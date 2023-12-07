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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [manualFetch, setManualFetch] = useState(false);

  const fetchTodos = async (): Promise<void> => {
    try {
      console.log('mec tavidan gaveshvi');
      const response = await axios.get<TodoInterface[]>(
        `${API_BASE_URL}/todos`,
      );
      console.log('aqaaa');
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError('Error fetching todos');
    } finally {
      setLoading(false);
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

  return {data, loading, error, refetchTodos: () => setManualFetch(true)};
};

export default useTodos;

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
