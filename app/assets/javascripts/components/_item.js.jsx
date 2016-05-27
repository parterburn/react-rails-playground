var Item = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    handleEdit() {
        if(this.state.editable) {
            var name = this.refs.name.value;
            var id = this.props.item.id;
            var description = this.refs.description.value;
            var item = {id: id , name: name , description: description};
            this.props.handleUpdate(item);
        }
        this.setState({ editable: !this.state.editable })
    },    
    render() {
        var name = this.state.editable ? <input type='text' className="form-control" ref='name' defaultValue={this.props.item.name} /> : <strong>{this.props.item.name}</strong>;
        var description = this.state.editable ? <input type='text' className="form-control" ref='description' defaultValue={this.props.item.description} />: <span>{this.props.item.description}</span>;
        return (
            <div className="item">
                <div className="col-md-4">
                    {name}
                </div>
                <div className="col-md-5">
                    {description}
                </div>
                <div className="col-md-3">
                    <button className='btn btn-default' onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>                
                    &nbsp;
                    <button className='btn btn-danger' onClick={this.props.handleDelete} >Delete</button>
                </div>
            </div>
        )
    }
});