type MyComponentProps = {
	name: string,
}

export const MyComponent: React.FC<MyComponentProps> = (props) => {
	const someElement: JSX.Element = <p>Hello</p>;

	return (
		<>
		<h1>Hello {props.name}!</h1>
		{someElement}
		</>
	);
}