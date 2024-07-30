import React, {memo} from "react";

const UnitConv = ({unitConv}) => {

    return(
        <div>
            센티미터 : {unitConv}
        </div>
    );
}

export default memo(UnitConv);