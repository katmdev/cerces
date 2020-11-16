import { Redirect } from 'react-router-dom';

const RequireAuth = ({ auth, children }) => {
  if (!auth) {
    return <Redirect to="/"/>;
  } else {
      return children;
  }
}

export default RequireAuth;
