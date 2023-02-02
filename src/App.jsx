import UsersList from './componets/UsersList';

const USERS = [
	{
		id: 1,
		name: 'Cesar Perez G',
		active: true,
		role: 'teacher'
	},
	{
		id: 2,
		name: 'Andder Gabriel Perez',
		active: true,
		role: 'teacher'
	},
	{
		id: 3,
		name: 'Leonardo Gabriel Perez',
		active: false,
		role: 'student'
	}
];

const App = () => <UsersList initialUsers={USERS} />;
export default App;
