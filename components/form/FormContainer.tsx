"use client";

import { useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { actionFunction } from "@/utils/type";

const initialState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();

  console.log("From State :", state);
  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state, toast]);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
