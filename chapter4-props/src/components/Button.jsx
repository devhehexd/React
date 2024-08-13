function Button({ title, color, children }) {
  return (
    <div>
      <button style={{ 'backgroundColor': color }}>{title}{children}</button>
    </div>
  );
}

//Properties의 기본값 설정
Button.defaultProps = {
  color: 'yellow',
}

export default Button;