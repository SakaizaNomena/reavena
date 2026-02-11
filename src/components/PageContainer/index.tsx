const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-4 flex flex-col gap-4">
      {children}
    </div>
  );
}

export default PageContainer;