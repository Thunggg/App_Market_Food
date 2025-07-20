import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
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
  isPassword?: boolean;
  value: string;
  setValue: (v: string) => void;
}

const FormField = ({
  label,
  placeholder,
  labelClassName = "",
  containerClassName = "",
  inputClassName = "",
  secureTextEntry = false,
  keyboardType = "default",
  value,
  setValue,
}: FormFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

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
          value={value}
          onChangeText={(text) => setValue(text)}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {secureTextEntry && (
          <InputSlot className="pr-3" onPress={handleState}>
            <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
          </InputSlot>
        )}
      </Input>
    </VStack>
  );
};

export default FormField;
