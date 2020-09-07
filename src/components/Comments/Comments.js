import React from 'react';

const Comments = (props) => {
    const { name, email, body, id } = props.cmnt;

    const cmntStyle = {
        border: '1px solid black',
        margin: '30px 0px',
        padding: '0px 20px',
        borderRadius: '5px',
        textAlign: 'justify',
        backgroundColor: 'lightblue',
    }
    const cmntBox = {
        display: 'flex',
    }
    const imgDesign = {
        borderRadius:'50%',
    }
    return (
        <div style={cmntBox}>
            <div>
                <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 50) + 1}.jpg`} alt="" style={imgDesign}/>
            </div>
            <div style={cmntStyle}>
                <h2>{name}</h2>
                <h4>{email}</h4>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Comments;