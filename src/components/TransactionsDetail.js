import React from 'react';

export default function BasicTable(props) {

  return (
    <table>
        <tr>
            <th>Transaction ID</th><td>{props.type}</td>
        </tr>
    </table>
  );
}