function DropdownComponent(props) {
  return (
    <div className="btn-group">
      <button
        type="button"
        className={props.buttonClass}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.searchICon}
        {props.title}
        {props.arrownDownIcon}
      </button>
      <ul className={props.dropDownClass}>
        {props.contents.map((content) => {
          return (
            <li key={content.fakeId} className={props.chilrenDropdownClass}>
              <a className="dropdown-item" href="#">
                {content.content}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropdownComponent;
