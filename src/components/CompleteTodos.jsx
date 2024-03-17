const style = {
    border: "2px solid #aacfd0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor: "#c9dede"
}
export const CompleteTodos = (props) =>{
    const {todos, onClickReturn}=props;
    return(
        <div style={style}>
          <p className="title">完了済のtodo</p>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button onClick={() => onClickReturn(index)}>戻す</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
    );
};