import React from 'react';
import '../../App.css';

export default function SignUp({ hideHeader }) {
  return <>{!hideHeader && <h1 className='sign-up'>SIGNUP</h1>}</>;
}
