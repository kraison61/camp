import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { provinces } from "@/utils/provinces";
  import { Label } from "@/components/ui/label";
  
  const ProvinceInput = ({defaultValue}:{defaultValue?:string}) => {
    const name = "Province";
    return (
      <div className="mb-2">
        <Label className="capitalize" htmlFor={name}>{name}</Label>
        <Select 
        name = {name}
        defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
        required
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {provinces.map((item) => {
              return (
                <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                  <span className="capitalize flex items-center gap-4">
                    {item.PROVINCE_NAME}
                  </span>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    );
  };
  export default ProvinceInput;
  