import * as React from "react"
import { TimePicker } from "antd"

window.post = function(url, data) {
  return fetch(url, {method: "POST", headers: {'Content-Type': 'application/json'}, body: data});
}

function onChange(time, timeString) {
    console.log("Time " + time)
    post("post/data/here", timeString);
}

const PickTimeOFF = () => (
    <TimePicker onChange={onChange}></TimePicker>
)

export default PickTimeOFF
