var NewItem= React.createClass({
    handleClick() {
        var name    = this.refs.name.value;
        var description = this.refs.description.value;
        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: { name: name, description: description } },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });
    },
    render() {
        return (
                <div className='row'>
                    <div className="col-md-4">
                        <input type="text" className="form-control" ref='name' placeholder='Enter the name of the item' />
                    </div>
                    <div className="col-md-5">
                        <input type="text" className="form-control" ref='description' placeholder='Enter a description' />
                    </div>
                    <div className="col-md-3">
                        <button className='btn btn-default' onClick={this.handleClick}>New Item</button>
                    </div>
                </div>
        )
    }
});