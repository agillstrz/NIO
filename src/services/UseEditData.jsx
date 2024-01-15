import { useMutation } from "react-query";
import axiosInstance from "../config/axiosInstance";
export default function UseEditData({ url, onSuccess, onError }) {
  return useMutation({
    mutationFn: async (body) => {
      const res = await axiosInstance.patch(`${url}`, body);
      return res.data;
    },
    onSuccess,
    onError,
  });
}
