// 전체 목록 가져오기 hook

import { useCallback, useEffect, useState } from "react";
import { getList, putAvailable } from "../apis/novelApis";
import { initialPageState, type Novel, type PageResult } from "../types/book";

export const useNovels = (page: number, size: number, genre: number, keyword: string) => {
  const [serverData, setServerData] = useState<PageResult<Novel>>(initialPageState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  // [] 안의 함수가 바뀔 때마다 새로운 함수로 잡아라.
  // 원래 함수들은 렌더링될 때마다 새로운 함수로 잡기에 callback이 의미가 있는 것
  const fetchData = useCallback(async () => {
    page = page + 1;
    try {
      setLoading(true);
      const data = await getList({ page, size, genre, keyword });
      setServerData(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [page, size, genre, keyword]);

  // available 수정
  const toggleAvailable = useCallback(
    async (id: number, available: boolean) => {
      const result = await putAvailable({
        id: id,
        available: !available,
      });
      console.log("toggleAvailable", result);
      fetchData();
    },
    [fetchData],
  );

  // 렌더링 시 fetchData 함수를 호출해라.
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { serverData, loading, error, toggleAvailable };
};
