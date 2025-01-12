
'use client'

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LoaderCircle } from 'lucide-react';

type btnSize = "default" | "sm" | "lg";

type buttonPropsType = {
  className?: string;
  size?: btnSize;
  text?: string;
};

export const SubmitButton = ({ className, size, text }: buttonPropsType) => {
  // Code
  const { pending } = useFormStatus();
  return (
    <Button className={`${className} capitalize`} size={size} type="submit" disabled="{pending}">
      <LoaderCircle className="animate-spin"/> {text}
    </Button>
  );
};
