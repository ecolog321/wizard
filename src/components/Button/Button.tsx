type Props = {
  text: string;
  handler: () => void;
};

export const Button: React.FC<Props> = ({ text, handler }) => {
  return (
    <button
      className=" border-gray-900 bg-slate-600 py-2 px-5 rounded-lg text-white hover:bg-slate-900 hover:scale-110"
      onClick={handler}
    >
      {text}
    </button>
  );
};
