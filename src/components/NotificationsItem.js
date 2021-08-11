import React from 'react';

export default function NotificationsItem(props) {

  return (
    <table>
        <tr>
            <th>Transaction ID</th><td>{props.dateTime}</td>
        </tr>
    </table>
  );
}