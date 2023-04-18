export default function Button({
  children,
  className,
  disabled = false,
  ...props
}) {
  return (
    <button
      className={`py-2 px-6 border rounded-md ${className} disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-stone-50 transition-colors ease-in-out`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
