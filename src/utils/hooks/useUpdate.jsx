import { useMutation } from '@tanstack/react-query';
import request from '../axiosUtils';
import SuccessHandle from '../customFunctions/SuccessHandle';
import { useRouter } from 'next/navigation';

const useUpdate = (url, updateId, path, message, extraFunction) => {
  const router = useRouter();
  return useMutation({mutationFn: (data) => request({ url: `${url}/${Array.isArray(updateId) ? updateId.join('/') : updateId}`, method: 'put', data }),
    onSuccess: (resData) => {
      SuccessHandle(resData, router, path, message);
      extraFunction && extraFunction(resData);
    },
  });
};

export default useUpdate;
