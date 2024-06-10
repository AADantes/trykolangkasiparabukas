import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";


const pool = mysql.createPool({

    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getUsers() {

    const [users] = await pool.query("SELECT * FROM users")
    return users;

}

export async function showCommissions() {

  const [users] = await pool.query("SELECT * FROM commissions")
  return users;

}


export async function getSingleUser(UserID) {


    const [singleuser] = await pool.query( 
    `SELECT *
    FROM users
    WHERE UserID = ?`
    , [UserID])
    return singleuser;


}

export async function getSingleUserProfile(UserID) {


    const [singleuser] = await pool.query( 
    `SELECT *
    FROM users
    WHERE UserID = ?`
    , [UserID])
    return singleuser;


}

export async function registerUser(username, password, bio, email) {
    try {

        const [reguser] = await pool.query(
          `INSERT INTO users (username, password, bio, email) VALUES (?, ?, ?, ?)`,
          [username, password, bio, email]
        );
    
        const userId = reguser.insertId;
    
        return getSingleUserProfile(userId);
      } catch (error) {
        console.error('Error during registration and profile creation:', error);
        throw error;
      }
  }

  export async function addBio(bio) {
    try {

        const [reguser] = await pool.query(
          `INSERT INTO users (bio) VALUES (?)`,
          [bio]
        );
    
        const userId = reguser.insertId;
    
        return getSingleUserProfile(userId);
      } catch (error) {
        console.error('Error in adding :', error);
        throw error;
      }
  }

  export async function PostCommission(username, title, content, potentialpayment, status ) {
    try {
      const [post] = await pool.query(
        `INSERT INTO commissions (username, title, content, potentialpayment, status) VALUES (?, ?, ?, ?, ?)`,
        [username, title, content, potentialpayment, status]
      );
      return post;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }

  export async function AcceptCommission(commissionID, status, acceptedBy) {
    try {
      const [result] = await pool.query(
        `UPDATE commissions SET status =?, acceptedBy =? WHERE comissionID =?`,
        [status, acceptedBy, commissionID]
      );
      return result;
    } catch (error) {
      console.error('Error accepting post:', error);
      throw error;
    }
  }



  let loggedInUser = null;

  export async function authenticateUser(username, password) {
    try {
      const [rows] = await pool.query('SELECT * FROM users WHERE username =? AND password =?', [username, password]);
      const user = rows.length > 0? rows[0] : null;
      if (user) {
        loggedInUser = user;
      }
      return user;
    } catch (error) {
      console.error('Error during authentication:', error);
      throw error;
    }
  }
  
  export function getLoggedInUser() {
    return loggedInUser;
  }
  
  export function getLoggedInUsername() {
    return loggedInUser? loggedInUser.username : null;
  }
  
  export function getLoggedInUserId() {
    return loggedInUser? loggedInUser.id : null;
  }



export async function calculateRating(category1, category2, category3) {
  try {
    // Calculate the weighted scores
    const score1 = category1 * 1.15;
    const score2 = category2 * 0.95;
    const score3 = category3 * 0.90;

    // Calculate the total score
    const totalScore = (score1 + score2 + score3) / 3;

    // Return an object with both total score and individual scores
    return {
      totalScore,
      scores: [score1, score2, score3]
    };
  } catch (error) {
    console.error('Error calculating rating:', error);
    throw error;
  }
}



