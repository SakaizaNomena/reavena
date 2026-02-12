type Props = {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const Textarea = ({
  value,
  onChange,
  rows = 4,
  placeholder = '',
  className = '',
  disabled = false,
}: Props) => {
  return (
    <textarea
      className={`textarea focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:ring-blue-500 hover:border-blue-500 !focus:outline-none focus:ring-inset block w-full rounded-xl bg-gray-50 border border-gray-300 p-4 text-zinc-700 focus:text-zinc-900 font-semibold text-[13px] transition-all duration-200 ${className}`}
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
    />
  )
};

export default Textarea;