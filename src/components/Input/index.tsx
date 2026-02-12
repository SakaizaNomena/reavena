type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const Input = ({
  value,
  onChange,
  placeholder = '',
  className = '',
  disabled = false,
}: Props) => { 
  return (
   <input
     className={`textarea focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:ring-blue-500 hover:border-blue-500 !focus:outline-none focus:ring-inset block w-full rounded-xl bg-gray-100 border-[0.5px] border-gray-300 p-4 text-zinc-700 focus:text-zinc-900 font-semibold text-[13px] transition-all duration-200 ${className}`}
     value={value}
     onChange={e => onChange(e.currentTarget.value)}
     placeholder={placeholder}
     disabled={disabled}
   />
  )
}

export default Input;