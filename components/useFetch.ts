import {useState, useEffect} from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://clean-capris-cod.cyclic.app/todos'; // Replace with your actual API base URL

interface TodoInterface {
  _id: string;
  title: string;
  completed: boolean;
}

const useTodos = () => {
  const [data, setData] = useState<TodoInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async (): Promise<void> => {
    console.log('aqamde movida');
    try {
      const response = await axios.get<TodoInterface[]>(`${API_BASE_URL}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
      setError('Error fetching todos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []); // This empty dependency array makes sure it runs only once on component mount

  return {data, loading, error, refetchTodos: fetchTodos};
};

export default useTodos;
