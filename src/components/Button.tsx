type ButtonProp = {
  label: string,
  // disabled: boolean,
  color: "red" | "purple"
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "submit" | undefined
  size: "full" | undefined
}

const Button = ({ label, onClick, color, type, size }: ButtonProp) => {
  return (
    <div className={`${color === "red" ? "bg-red-400" : "bg-[#6A1A7D]"} text-center p-3 max-md:p-2 rounded-full ${size === "full" && "w-full"}`}>
      <button type={type} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button