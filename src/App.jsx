import UsersList from "./componets/UsersList";

const USERS = [
	{
		name: 'Cesar Perez G',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Andder Gabriel Perez',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Leonardo Gabriel Perez',
		active: false,
		role: 'student'
	}
];

const App = () => <UsersList users={USERS} />;
export default App;