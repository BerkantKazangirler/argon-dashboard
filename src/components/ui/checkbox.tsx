interface checkboxprops {
  id: string;
  text: string;
}

export const Checkbox = ({ id, text }: checkboxprops) => {
  return (
    <label
      className="inline-flex items-center me-5 cursor-pointer"
      htmlFor={id}
    >
      <input type="checkbox" id={id} className="sr-only peer" />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-detailBg peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-checkboxBg"></div>
      <span className="text-xs ms-3 text-placeholderColor">{text}</span>
    </label>
  );
};
