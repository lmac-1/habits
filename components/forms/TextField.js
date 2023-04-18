export default function TextField({
  name,
  label,
  required = false,
  type = "text",
  register,
}) {
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block mb-2 text-md font-medium text-gray-900"
        aria-label={`${name}-label`}
      >
        {label}
      </label>
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register(name, { required })}
        aria-labelledby={`${name}-label`}
      />
    </div>
  );
}
