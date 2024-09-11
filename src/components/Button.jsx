export default function Button({
  className,
  handleClickType,
  dispatch,
  children,
}) {
  return (
    <button
      className={className}
      onClick={(e) =>
        dispatch({
          type: handleClickType,
          payload: parseInt(e.target.innerText)
            ? parseInt(e.target.innerText)
            : e.target.innerText,
        })
      }
    >
      {children}
    </button>
  );
}
