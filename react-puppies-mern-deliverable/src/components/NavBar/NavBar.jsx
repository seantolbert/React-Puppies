import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/puppies">Puppy</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Puppy</Link>
    </nav>
  );
}