const Section = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2 px-4 md:px-10 py-6 bg-slate-500 w-full min-h-32 rounded-lg">
      {title && <p>{title}</p>}
      {children}
    </div>
  );
};

export default Section;
