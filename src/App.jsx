import UsersList from './componets/UsersList';

const USERS = [
	{
		username: 'Cesar',
		name: 'Cesar Perez G',
		active: true,
		role: 'teacher'
	},
	{
		username: 'Annder',
		name: 'Andder Gabriel Perez',
		active: true,
		role: 'teacher'
	},
	{
		username: 'Leonardo',
		name: 'Leonardo Gabriel Perez',
		active: false,
		role: 'other'
	}
];

const App = () => <UsersList initialUsers={USERS} />;
export default App;
