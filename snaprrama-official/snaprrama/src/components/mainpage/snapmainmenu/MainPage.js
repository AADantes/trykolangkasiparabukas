import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [userProfile, setUserProfile] = useState({
    username: 'Snapprama',
    profilePicture: 'https://example.com/profile-picture.jpg',
    address: '123 Main Street, City, Country',
    email: 'snapprama@example.com'
  });

  const handlePostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handlePostSubmit = () => {
    if (newTitle.trim() || newPost.trim() || selectedFile) {
      const post = {
        id: Date.now(),
        title: newTitle,
        text: newPost,
        image: selectedFile ? URL.createObjectURL(selectedFile) : null,
        likes: 0
      };
      setPosts([...posts, post]);
      setNewTitle('');
      setNewPost('');
      setSelectedFile(null);
    }
  };

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes === 0 ? 1 : 0 } : post
    ));
  };

  const handleRemove = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  

  const handleAddInformation = () => {
   
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainContainer}>
        <div style={styles.leftRectangle}>
          <div style={styles.userProfile}>
            <img src={userProfile.profilePicture} alt="Profile" style={styles.profilePicture} />
            <div style={styles.userInfo}>
              <h2>{userProfile.username}</h2>
              <p>{userProfile.email}</p>
              <p>{userProfile.address}</p>
            </div>
            
            <button style={styles.addInformationButton} onClick={handleAddInformation}>Add Information</button>
          </div>
        </div>
        <div style={styles.upperRightRectangle}>
          <div style={styles.postContainer}>
            <input
              type="text"
              style={styles.titleInput}
              value={newTitle}
              onChange={handleTitleChange}
              placeholder="Title"
            />
            <textarea
              style={styles.postInput}
              value={newPost}
              onChange={handlePostChange}
              placeholder="What's on your mind?"
            />
            <input
              type="file"
              style={styles.fileInput}
              onChange={handleFileChange}
            />
            <button style={styles.postButton} onClick={handlePostSubmit}>Post</button>
          </div>
        </div>
        <div style={styles.lowerRightRectangle}>
          {posts.map((post) => (
            <div key={post.id} style={styles.lowerRightPost}>
              <button style={styles.removeButton} onClick={() => handleRemove(post.id)}>Remove Post</button>
              {post.image && <img src={post.image} alt="Post" style={styles.lowerRightImage} />}
              <textarea
                readOnly
                style={styles.outputTextBox}
                value={`${post.title}\n${post.text}`}
              />
              <div style={styles.likeContainer}>
                <button style={styles.likeButton} onClick={() => handleLike(post.id)}>
                  <FontAwesomeIcon icon={faHeart} /> {}
                </button>
                <span>{post.likes} {post.likes === 1 ? 'Like' : 'Likes'}</span>
              </div>
            </div>
          ))}
        </div>
        <main style={styles.main}>
          <p></p>
        </main>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background:  '#006400', 
  },
  

  mainContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
  },


  leftRectangle: {
    position: 'relative',
    width: '460px',
    height: '668px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },


  userProfile: {
    textAlign: 'center'
  },


  profilePicture: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px'
  },


  userInfo: {
    textAlign: 'center'
  },


 

  addInformationButton: {
    backgroundColor: '#FF4500', 
    color: 'white',
    padding: '10px 40px',
    borderRadius: '20px',
    border: '3px solid #FF4500', 
    cursor: 'pointer',
    marginTop: '10px',
    zIndex: 2
  },


  upperRightRectangle: {
    position: 'absolute',
    top: 25,
    right: 25,
    width: '975px',
    height: '240px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },


  lowerRightRectangle: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    width: '975px',
    height: '400px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    overflowY: 'auto',
    padding: '10px',
  },


  main: {
    flex: 1,
    textAlign: 'center'
  },


  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px'
  },


  titleInput: {
    width: 'calc(100% - 1px)',
    height: '30px',
    borderRadius: '8px',
    border: '2.5px solid grey',
    padding: '10px',
    marginBottom: '10px',
    boxSizing: 'border-box', 
    zIndex: 2
  },


  postInput: {
    width: 'calc(100% - 1px)', 
    height: '80px',
    borderRadius: '8px',
    border: '2.5px solid grey',
    padding: '10px',
    marginBottom: '10px',
    boxSizing: 'border-box', 
    zIndex: 2
  },


  fileInput: {
    marginBottom: '10px',
    zIndex: 2
  },


  postButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 30px',
    borderRadius: '30px',
    cursor: 'pointer',
    border: 'none',
    marginBottom: '10px',
    zIndex: 2
  },


  postsDisplay: {
    marginTop: '20px',
    maxHeight: '100px',
    overflowY: 'auto'
  },


  post: {
    position: 'relative',
    backgroundColor: '#666',
    padding: '10px',
    borderRadius: '5px',
    border: '2.5px solid grey',
    marginBottom: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1
  },


  postTitle: {
    margin: 0,
    marginBottom: '10px',
    color: 'white',
    zIndex: 2
  },


  postImage: {
    maxWidth: '80px',
    maxHeight: '80px',
    marginTop: '10px',
    borderRadius: '5px',
    marginBottom: '5px',
    zIndex: 2
  },


  postText: {
    margin: 0,
    zIndex: 2
  },


  lowerRightPost: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '10px',
    border: '2.5px solid grey',
    marginBottom: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    position: 'relative', 
  },


  lowerRightImage: {
    maxWidth: '80px',
    maxHeight: '80px',
    borderRadius: '5px',
    marginRight: '10px',
    zIndex: 2,
    alignSelf: 'flex-start' 
  },


  lowerRightTextContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start' 
  },


  lowerRightText: {
    margin: 0,
    zIndex: 2
  },


  lowerRightTitle: {
    margin: 0,
    marginBottom: '5px',
    zIndex: 2
    
  },


  lowerRightText: {
    margin: 0,
    zIndex: 2
  },


  likeContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    zIndex: 2,
    position: 'absolute',
    right: '10px', 
    bottom: '10px' 
  },


  likeButton: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '7px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
    zIndex: 2
  },


  removeButton: {
    backgroundColor: 'orange',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px', 
    right: '10px' 
  },

  outputTextBox: {
    width: '80%',
    height: '85px',
    borderRadius: 'none',
    border: 'none',
    padding: '10px',
    boxSizing: 'border-box',
    zIndex: 2,
    resize: 'none',
    overflow: 'hidden',
    backgroundColor: '#fff',
    color: '#000'
  }
};

export default MainPage;
