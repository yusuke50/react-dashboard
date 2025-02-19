const DescriptionItem = ({ icon: Icon, title, content }) => {
  return (
    <div className='desc'>
      <div className='desc-icon'>
        <Icon />
      </div>
      <div className='desc-content-wrapper text-left'>
        <div className='desc-title'>{title}</div>
        <div className='desc-content'>{content}</div>
      </div>
    </div>
  );
};

export default DescriptionItem;
