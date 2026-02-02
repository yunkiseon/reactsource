// id 를 string 으로 처리하는 이유는 주소줄에서 id 받을 때 string 형태
// 어차피 spring server 단에서 형변환해서 받을 수 있기 때문에 상관없다.

import { useCallback, useEffect, useState } from "react";
import { initialNovel, type Novel } from "../types/book";
import { getRow } from "../apis/novelApis";

export const useNovel = (id: string) => {
  const [serverData, setServerData] = useState<Novel>(initialNovel);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getRow(id);
      setServerData(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { serverData, loading, error };
};
