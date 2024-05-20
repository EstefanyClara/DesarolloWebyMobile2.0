import "./ButtonStyle.css";
export default function Buttons({ children, onClick }) {
  return (
    <button className="button">
      {children}
    </button>
  );
}