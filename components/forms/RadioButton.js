export default function RadioButton({
  label,
  name,
  value,
  id,
  register,
  required,
}) {
  return (
    <label htmlFor={id} className="flex place-items-center">
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        {...register(name, { required })}
        className="mr-2"
      />
      {label}
    </label>
  );
}
