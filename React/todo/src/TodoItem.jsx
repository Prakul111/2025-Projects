export function TodoItem({ id, name, completed, toggleTodos, deleteTodos }) {
    return (
        <li className="list-item">
            <label className="list-item-label">
                <input
                    checked={completed}
                    type="checkbox"
                    data-list-item-checkbox
                    onChange={(e) => toggleTodos(id, e.target.checked)} />
                <span data-list-item-text>{name}</span>
            </label>
            <button onClick={() => deleteTodos(id)} data-button-delete>Delete</button>
        </li>
    )
} 