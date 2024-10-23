function Avatar({ age }) {
    return (
      <div style={{ textAlign: 'center' }}>
        <img
          className="avatar"
          src="https://i.imgur.com/1bX5QH6.jpg"
          alt="Lin Lanying"
          width={100}
          height={100}
        />
        <p>Age: {age}</p>
      </div>
    );
  }
  
  export default function Profile() {
    return (
      <Avatar age={30} />
    );
  }
  