import React from 'react';

export function Notificationer(props){
    if(props.switch){
      return <div class="alert alert-success" role="alert">Successful authentication</div>;
    }
    else return null
  }