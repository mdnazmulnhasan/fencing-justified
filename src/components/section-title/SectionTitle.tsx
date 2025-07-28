type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
};

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`my-8 ${alignment[align]} px-4`}>
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
}
