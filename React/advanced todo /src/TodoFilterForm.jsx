
export function TodoFilterForm({ name, setName }) {
    return (
        <div className="filter-form">
            <div className="filter-form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </div>
            <label>
                <input
                    type="checkbox"
                    id="name"
                />
                Hide Completed
            </label>
        </div>
    )
}