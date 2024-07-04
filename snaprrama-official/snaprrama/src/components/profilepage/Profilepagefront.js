import React, { useState, useEffect } from 'react'; 
import profileImage from '../mainpage/snapmainmenu/Images/Profile_Icon.png';
import axios from 'axios';
import RateSnappr from '../ratingpage/RateSnappr';


export default function Profilepagefront() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [newID, setNewID] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [newPostData, setNewPostData] = useState({});
    const [userProfile, setUserProfile] = useState({
  
      username: '',
      email: '',
      profilePicture: '',
      status: ''
  
    });
  
    useEffect(() => {
      const fetchUserProfile = async () => {
        try {
          const response = await axios.get(' http://localhost:8000/protected'); // assuming your protected route is /protected
          const userData = response.data;
          setUserProfile({
            username: userData.username,
            email: userData.email,
            profilePicture: profileImage, // you might need to update this to reflect the user's profile picture
            status: userData.bio, // or whatever property you want to display as the user's status
          });
          console.log('Updated userProfile:', userProfile);
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      };
      fetchUserProfile();
    }, []);
  
  
    const [showProfilePopup, setShowProfilePopup] = useState(false);
    const [showStatusPopup, setShowStatusPopup] = useState(false);
    const [userStatus, setUserStatus] = useState('');
    const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);
    const [showPaymentPopup, setShowPaymentPopup] = useState(false);
    const [paymentAmount, setPaymentAmount] = useState('');
    const [paymentDetails, setPaymentDetails] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [qrCodeImage, setQrCodeImage] = useState(null);
    const [showPaymentDetailsPopup, setShowPaymentDetailsPopup] = useState(false);
  
    const handlePostChange = (event) => {
      setNewPost(event.target.value);
    };
  
    const handleTitleChange = (event) => {
      setNewTitle(event.target.value);
    };  
  
      const handlePostSubmit = async () => {
        if (newTitle.trim() || newPost.trim()) {
  
          const response = await axios.post('http://localhost:8000/postcommission', {
            username: userProfile.username,
            title: newTitle,
            content: newPost,
            potentialpayment: paymentAmount,
            status: 'pending' // default value, update as needed
          });
          console.log(response.data);
          // handle success response
  
          const newPostDataObj = {
            id: newID,
            username: userProfile.username,
            title: newTitle,
            content: newPost,
            potentialpayment: paymentAmount,
          };
          setNewPostData(newPostDataObj);
          setPosts([...posts, newPostDataObj]);
          setNewTitle('');
          setNewPost('');
   
        }
      };
    const handleRemove = (id) => {
      setPosts(posts.filter(post => post.id !== id));
    };
  
    const handleViewCommission = (post) => {
      setSelectedPost(post);
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
      setSelectedPost(null);
    };
  
    const toggleProfilePopup = () => {
      setShowProfilePopup(!showProfilePopup);
    };
  
    const handleChooseProfilePicture = () => {
      setShowProfilePopup(true);
    };
  
    const handleSaveProfilePicture = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedProfilePicture(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleDeleteProfilePicture = () => {
      setSelectedProfilePicture(null);
      setUserProfile({ ...userProfile, profilePicture: null });
    };
  
    const handleCancelProfilePicture = () => {
      setShowProfilePopup(false);
      setSelectedProfilePicture(null);
    };
  
    const handleAddStatus = () => {
      setShowStatusPopup(true);
    };
  
    const handleCloseStatusPopup = () => {
      setShowStatusPopup(false);
    };
  
    const handleStatusChange = (event) => {
      setUserStatus(event.target.value);
    };
  
    const handleSaveStatus = () => {
      setUserProfile({ ...userProfile, status: userStatus });
      setUserStatus('');
      setShowStatusPopup(false);
    };
  
    const handleDeleteStatus = () => {
      setUserProfile({ ...userProfile, status: '' });
      setShowStatusPopup(false);
    };
  
    const handleSaveProfile = () => {
      setShowProfilePopup(false);
      if (selectedProfilePicture) {
        setUserProfile({ ...userProfile, profilePicture: selectedProfilePicture });
      }
    };
  
    const handlePayment = () => {
      setShowPaymentPopup(true);
    };
  
    const handlePaymentPopup = () => {
      setShowPaymentPopup(!showPaymentPopup);
    };
  
  
    const handleAddQRCode = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (event) => handleQRCodeImageSelected(event.target.files[0]);
      input.click();
    };
  
    const handleQRCodeImageSelected = (file) => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setQrCodeImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleViewPaymentDetails = () => {
      setShowPaymentDetailsPopup(true);
    };
  
    const handleClosePaymentDetailsPopup = () => {
      setShowPaymentDetailsPopup(false);
    };
  
    useEffect(() => {
      fetchCommissions();
    }, []);
  
    const fetchCommissions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/commissions');
        const commissions = response.data;
        setPosts(commissions);
      } catch (error) {
        console.error(error);
      }
    };
  
  
  
    return (
      <div className="container">
        <div className="mainContainer">
          <div className="leftRectangle">
            <h2 className="accountText">Account</h2>
            <div className="userProfile">
              <img
                src={userProfile.profilePicture || profileImage}
                alt="Profile"
                className="profilePicture"
                onClick={toggleProfilePopup}
              />
  <div className="userInfo">
          {userProfile && (
            <>
              <h2>{userProfile.username}</h2>
              <p>{userProfile.email}</p>
              <p>Status: {userProfile.status}</p>
      </>
    )}
                {/* <button className="addStatusButton" onClick={handleAddStatus}>Add Status</button> */}
              </div>
            </div>
          </div>
          </div>  
  
  
        <div className='maincontainerright'>
        <div className="upperRightRectangle2">
            
              <RateSnappr/>


          </div>
  
  
    <div className="lowerRightRectangle">
        {posts.length === 0? (
        <div className="noPostsMessage">No Commission Post</div>
        ) : (
        posts.map((newPostData) => (
            <div key={`${newPostData.username}-${newPostData.title}`} className="lowerRightPost">
                {userProfile.username === newPostData.username && (
                <button className="removeButton" onClick={() => handleRemove(newPostData.comissionID)}>Remove Post</button>
            )}
            <textarea 
                readOnly
                className="outputTextBox"
                value={`${newPostData.username}\n${newPostData.title}\n${newPostData.content}`}
                style={{ lineHeight: '1.8' }}
            />
            <button className="viewCommissionButton" onClick={() => handleViewCommission(newPostData)}>View Commission</button>
            </div>
        ))
        )}
    </div>
    
    </div>
        
        <div className={`popupOverlay ${showPopup ? 'showPopup' : ''}`}>
          {selectedPost && (
            <div className="popupContent">
              <h2 className="commissionDetails">Commission Details</h2>
              <div className="popupPost">
                <h3>{selectedPost.title}</h3>
                <p>{selectedPost.content}</p>
              </div>
              <button className="viewPaymentDetailsButton" onClick={handleViewPaymentDetails}> View Possible Payment </button>
              <button className="closePopupButton" onClick={handleClosePopup}>Accept Commission</button>
              <button className="closePopupButton" onClick={handleClosePopup}>Close</button>
            </div>
          )}
        </div>

        {showStatusPopup && (
          <div className="statusPopup">
            <div className="statusContent">
              <h2>Add Status</h2>
              <textarea
                className="statusInput"
                value={userStatus}
                onChange={handleStatusChange}
                placeholder="Write your status here..."
              ></textarea>
              <div className="statusButtons">
                <button className="statusSaveButton" onClick={handleSaveStatus}>Save</button>
                <button className="deleteStatusButton" onClick={handleDeleteStatus}>Delete Status</button>
                <button className="statusCancelButton" onClick={handleCloseStatusPopup}>Cancel</button>
              </div>
            </div>
          </div>
        )}
        {showPaymentPopup && (
          <div className="paymentPopup">
            <div className="paymentContent">
              <h2>Payment Details</h2>
              <input
                type="text"
                className="paymentInput"
                value={paymentAmount}
                onChange={(event) => setPaymentAmount(event.target.value)}
                placeholder="Enter Payment Amount"
              />
              <button className="closePaymentButton" onClick={handlePaymentPopup}>Close</button>
              <button className="savePaymentButton" onClick={handlePaymentPopup}>Save</button>
            </div>
          </div>
        )}
        {showPaymentDetailsPopup && (
          <div className="paymentDetailsPopup">
            <div className="paymentDetailsContent">
              <h2>Payment Details</h2>
              <p>Amount: {selectedPost && selectedPost.potentialpayment}</p>
              <button className="closePaymentDetailsButton" onClick={handleClosePaymentDetailsPopup}>Close</button>
            </div>
          </div>  
        )}  
      </div>
    );
  };
