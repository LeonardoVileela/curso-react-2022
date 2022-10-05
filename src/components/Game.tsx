type GameProps = {
    name: string;
}


export function Game(props: GameProps) {
    return (
        <div>{props.name}</div>
    );
}