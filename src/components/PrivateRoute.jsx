import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLoggedIn } from '../redux/auth/selectors';

export default function PrivateRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}