type ContentHeaderProps = {
  title: string;
  subtitle?: string;
};

const ContentHeader = ({ title, subtitle }: ContentHeaderProps) => {
  return (
    <div className="row text-center">
      <h4>{title}</h4>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default ContentHeader;
