var AllItems = React.createClass({
    getInitialState() {
        return { items: [] }
    },
    componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    },
    handleDelete(id) {
        this.props.handleDelete(id);
    },
    onUpdate(item) {
        this.props.onUpdate(item);
    },
    render() {
        var items= this.props.items.map((item) => {
            return (
                <div key={item.id} className="row">
                    <Item item={item}
                          handleDelete={this.handleDelete.bind(this, item.id)}
                          handleUpdate={this.onUpdate}/>
                </div>
            )
        });

        return(
            <span>
                {items}
            </span>
        )
    }
});