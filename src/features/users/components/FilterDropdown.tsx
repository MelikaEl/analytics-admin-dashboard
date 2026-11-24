//type
import type { UserRole } from "../types";

// ui
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

//icon
import { ChevronDown } from "lucide-react";

//constant
import { ROLES } from "../constants";

interface FilterDropdownProps {
  role: UserRole;
  setRole: (role: string) => void;
}

export function FilterDropdown({ role, setRole }: FilterDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Role <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={role} onValueChange={setRole}>
            {ROLES.map((role) => (
              <DropdownMenuRadioItem value={role}>{role}</DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
