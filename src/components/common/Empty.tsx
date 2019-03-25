import React from "react";
import dayjs from "dayjs";
import { EMPTY_MESSAGE, DATE_FORMAT } from "configs";

const todayDate = dayjs().format(DATE_FORMAT);

export default React.memo(() => (
  <>{EMPTY_MESSAGE.replace("$_DATETIME_", todayDate)}</>
));
