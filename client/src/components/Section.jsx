const Section = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2 min-h-32 rounded-lg">
      {title && <p className="font-semibold lg:text-lg">{title}</p>}
      {children}
    </div>
  );
};

export default Section;
