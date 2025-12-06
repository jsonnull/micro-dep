import { greet } from "@micro-dep/core";

export interface GreetingProps {
	name: string;
}

export function Greeting({ name }: GreetingProps) {
	return <div>{greet(name)}</div>;
}
