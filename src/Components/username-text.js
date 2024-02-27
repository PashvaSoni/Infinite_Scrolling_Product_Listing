import React from "react";

export default function UsernameText({ username, ...props }) {
  return (
    <a
      className="text-14-bold mr-1 cursor-pointer"
      onClick={() =>console.log(`Clicked on username : ${username}`)}
      {...props}
    >
      {username || "username"}
    </a>
  );
}