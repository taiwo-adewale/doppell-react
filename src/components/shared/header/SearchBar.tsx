import { useState } from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUpdateQueryString } from "@/hooks/use-update-query-string";

type SearchBarProps = {
  className?: string;
  onSearch?: () => void;
};

export function SearchBar({ className, onSearch }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState("");
  const updateQuery = useUpdateQueryString();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue) return;
    updateQuery("search", searchValue, "products");
    if (onSearch) onSearch();
  };

  return (
    <form onSubmit={(e) => handleSearch(e)} className="flex items-center">
      <Input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={cn("h-10 w-full px-2.5 bg-white", className)}
      />

      <Button size="icon-lg" className="rounded-none">
        <Search className="size-5.5 stroke-3" />
      </Button>
    </form>
  );
}
