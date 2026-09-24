import { useInView } from "../hooks/useInView";

export default function Reveal({ children, as: Tag = "div", className = "", ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal-init ${inView ? "reveal-in" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
