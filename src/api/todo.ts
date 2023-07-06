import axios from "axios";
import { TodoReadApiResponse } from "../types/todo";

export const API_URL = "https://www.pre-onboarding-selection-task.shop";

export const fetchTodos = async (): Promise<TodoReadApiResponse> => {
  try {
    const { status, data } = await axios.get(`${API_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
    });
    return { status, data };
  } catch (error: unknown) {
    console.error("에러:", (error as any).response?.data);
    return {
      status: (error as any).response?.status || 500,
    };
  }
};

export const handleAddTodo = async (todo: string) => {
  try {
    const { status, data } = await axios.post(
      `${API_URL}/todos`,
      { todo },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      status,
      data,
    };
  } catch (error: unknown) {
    console.error("에러:", (error as any).response?.data);
    return {
      status: (error as any).response?.status || 500,
    };
  }
};

export const handleUpdateTodo = async (
  todo: string,
  isCompleted: boolean,
  id: number
) => {
  try {
    const { status, data } = await axios.put(
      `${API_URL}/todos/${id}`,
      { todo, isCompleted },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      status,
      data,
    };
  } catch (error: unknown) {
    console.error("에러:", (error as any).response?.data);
    return {
      status: (error as any).response?.status || 500,
    };
  }
};

export const handleDeleteTodo = async (id: number) => {
  try {
    const { status, data } = await axios.delete(`${API_URL}/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
    });

    return {
      status,
      data,
    };
  } catch (error: unknown) {
    console.error("에러:", (error as any).response?.data);
    return {
      status: (error as any).response?.status || 500,
    };
  }
};
