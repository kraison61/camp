import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { categories } from "@/utils/categories";

const CategoryInput = ({defaultValue}:{defaultValue?:string}) => {
  const name = "category";
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>{name}</Label>
      <Select 
      name = {name}
      defaultValue={defaultValue || categories[0].label}
      required
      >
        <SelectTrigger>
          <SelectValue placeholder="เลือก" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item, index) => {
            return (
              <SelectItem key={index} value={item.label}>
                <span className="capitalize flex items-center gap-4">
                  <item.icon />
                  {item.label}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoryInput;
