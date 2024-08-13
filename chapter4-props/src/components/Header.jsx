//Components는 Tag를 Return하는 함수

const Header = (props) => {
  console.log('props', props.title);
  return (
    <>
      <header>
        <h1><a>{props.title}</a></h1>
      </header>
    </>
  );
};

export default Header;