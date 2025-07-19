import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { useState } from "react";
import { Text } from "react-native";

interface FormFieldProps {
  label: string;
  placeholder: string;
  labelClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

const FormField = ({
  label,
  placeholder,
  labelClassName = "",
  containerClassName = "",
  inputClassName = "",
  secureTextEntry = false,
  keyboardType = "default",
}: FormFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <VStack className={`gap-[9px] mb-[29px] ${containerClassName}`}>
      <Text className={labelClassName}>{label}</Text>
      <Input
        size="xl"
        variant="outline"
        className={`${inputClassName} ${
          isFocused ? "!border-[#FE724C] !border-2" : ""
        }`}
      >
        <InputField
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </Input>
    </VStack>
  );
};

export default FormField;
