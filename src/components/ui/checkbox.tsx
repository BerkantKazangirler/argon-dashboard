interface checkboxprops {
  id: string;
  text: string;
}

export const Checkbox = ({ id, text }: checkboxprops) => {
  return (
    <label
      className="me-5 inline-flex cursor-pointer items-center"
      htmlFor={id}
    >
      <input type="checkbox" id={id} className="peer sr-only" />
      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-checkboxBg peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-detailBg rtl:peer-checked:after:-translate-x-full"></div>
      <span className="ms-3 text-xs text-placeholderColor">{text}</span>
    </label>
  );
};
