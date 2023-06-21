import { SignProp, SignApiResponse } from "../types/sign";
import axios from "axios";

export const API_URL = "https://www.pre-onboarding-selection-task.shop";

export const signIn = async ({
  email,
  password,
}: SignProp): Promise<SignApiResponse> => {
  try {
    const { status, data } = await axios.post(
      `${API_URL}/auth/signin`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return {
      status,
      data,
    };
  } catch (error: unknown) {
    console.error("에러:", (error as any).response.data);
    return {
      status: -1,
    };
  }
};

export const signUp = async ({
  email,
  password,
}: SignProp): Promise<SignApiResponse> => {
  try {
    const { status } = await axios.post(
      `${API_URL}/auth/signup`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return {
      status,
    };
  } catch (error: unknown) {
    console.error("에러:", (error as any).response.data);
    return {
      status: -1,
    };
  }
};
