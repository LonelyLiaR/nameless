import React from "react";
import dayjs from "dayjs";
import { EMPTY_MESSAGE, DATE_FORMAT } from "config";

const todayDate = dayjs().format(!!DATE_FORMAT ? DATE_FORMAT : "MMMM DD, YYYY");

export default class extends React.PureComponent {
  render() {
    return (
      <>
        {!!EMPTY_MESSAGE
          ? EMPTY_MESSAGE.replace("$_DATETIME_", todayDate)
          : `Today is ${todayDate}, and this place is so empty. 😥`}
      </>
    );
  }
}
