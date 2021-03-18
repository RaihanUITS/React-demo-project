import React from "react";

const ListGroup = (props) => {
  const {
    items,
    valueProperty,
    textProperty,
    onGenreSelect,
    selectedGenre,
  } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          style={{ cursor: "pointer" }}
          onClick={() => onGenreSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};

export default ListGroup;
