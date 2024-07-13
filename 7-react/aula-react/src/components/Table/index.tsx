const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <table className="table table-striped">{children}</table>
    </div>
  );
};

export default Table;
