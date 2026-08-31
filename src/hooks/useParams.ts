import { useSearchParams } from "react-router-dom";

export function useParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const sortBy = searchParams.get("sortBy") || undefined;
  const order = (searchParams.get("order") as "asc" | "desc") || undefined;

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

  const setSort = (newSort: string, newOrder: string) => {
    setSearchParams((prev) => {
      prev.set("sortBy", newSort);
      prev.set("order", newOrder);
      prev.set("page", "1");
      return prev;
    });
  };

  return { page, limit, sortBy, order, setPage, setLimit, setSort };
}
