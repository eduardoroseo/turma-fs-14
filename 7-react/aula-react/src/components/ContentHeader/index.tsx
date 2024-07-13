type ContentHeaderProps = {
  title: string;
};

const ContentHeader = ({ title }: ContentHeaderProps) => {
  return (
    <div className="row text-center">
      <h4>{title}</h4>
    </div>
  );
};

export default ContentHeader;
