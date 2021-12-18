interface Props {
  title: string;
  subTitle: string;
}

const ContentHeader = ({ title, subTitle }: Props) => {
  return (
    <>
      <h2 className='content__sub-tit'>{title}</h2>
      <p className='content__sub-desc'>{subTitle}</p>
    </>
  );
};

export default ContentHeader;
