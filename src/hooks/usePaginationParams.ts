import { useSearchParams } from "react-router-dom";

export function usePaginationParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const setPage = (newPage: number) => {
    setSearchParams((prev) => {
      prev.set("page", String(newPage));
      return prev;
    });
  };

  const setLimit = (newLimit: string) => {
    setSearchParams((prev) => {
      prev.set("limit", newLimit);
      prev.set("page", "1");
      return prev;
    });
  };

  return { page, limit, setPage, setLimit };
}
