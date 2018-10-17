import React, { Component, Fragment } from "react";
import dayjs from "dayjs";
import { EMPTY_MESSAGE, DATE_FORMAT } from "config";

const todayDate = dayjs().format(!!DATE_FORMAT ? DATE_FORMAT : "MMMM DD, YYYY");

export default class extends Component {
  render() {
    return (
      <Fragment>
        {!!EMPTY_MESSAGE
          ? EMPTY_MESSAGE.replace("$_DATETIME_", todayDate)
          : `Today is ${todayDate}, and this place is so empty. 😥`}
      </Fragment>
    );
  }
}
