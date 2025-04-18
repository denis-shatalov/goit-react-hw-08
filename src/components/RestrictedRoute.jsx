import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLoggedIn } from '../redux/auth/selectors';

export default function RestrictedRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}