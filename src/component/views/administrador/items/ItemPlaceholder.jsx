import React from "react";
import Placeholder from "react-bootstrap/Placeholder";

const ItemPlaceholder = () => {
  return (
    <tr>
      <td className="text-center">
        <Placeholder as="p" animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
      </td>
      <td className="text-center">
        <Placeholder as="p" animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
      </td>
      <td className="text-center">
        <Placeholder as="p" animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
      </td>
      <td className="text-center">
        <Placeholder as="p" animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
      </td>
      <td>
        <div className="d-flex flex-column text-center" aria-hidden="true">
          <Placeholder as="p" animation="glow">
            <Placeholder.Button xs={4} aria-hidden="true" />
          </Placeholder>
        </div>
      </td>
    </tr>
  );
};

export default ItemPlaceholder;
