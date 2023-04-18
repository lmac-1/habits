import RadioButton from "./RadioButton";

export default function RadioGroup({
  name,
  options,
  register,
  label,
  /* todo: add styling for required */
  required = false,
}) {
  return (
    <div className="mb-6">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        {label}
      </h3>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <RadioButton
            key={`${name}-${option.value}`}
            label={option.label}
            name={name}
            value={option.value}
            id={option.value}
            register={register}
            required={required}
          />
        ))}
      </div>
    </div>
  );
}
