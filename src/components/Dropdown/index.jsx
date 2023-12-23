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
              <p className="dropdownItem_desc">
                {content.content}
              </p>
              <input type={"checkbox"} className="dropdownItem_checkbox" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropdownComponent;
