import React from "react";

const Accordion = ({ items }) => {
  const renderList = items.map((item, index) => {
    const handleClick = (i) => {
      console.log(i);
    };
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => handleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderList}</div>;
};

export default Accordion;
