const Section = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2 w-full min-h-32 rounded-lg">
      {title && <p>{title}</p>}
      {children}
    </div>
  );
};

export default Section;
